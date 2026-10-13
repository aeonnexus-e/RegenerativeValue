// Performance Monitoring Utilities
import React from "react";

export interface PerformanceMetric {
  name: string;
  duration: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private maxMetrics: number = 100;
  private timers: Map<string, number> = new Map();

  /**
   * Start timing an operation
   */
  public startTimer(name: string): void {
    try {
      if (typeof performance !== 'undefined' && performance.now) {
        this.timers.set(name, performance.now());
      }
    } catch (error) {
      // Silently fail if performance API is not available
    }
  }

  /**
   * End timing and record metric
   */
  public endTimer(name: string, metadata?: Record<string, any>): number {
    try {
      const startTime = this.timers.get(name);
      
      if (!startTime) {
        return 0;
      }

      if (typeof performance === 'undefined' || !performance.now) {
        this.timers.delete(name);
        return 0;
      }

      const duration = performance.now() - startTime;
      this.timers.delete(name);

      this.recordMetric({
        name,
        duration,
        timestamp: new Date(),
        metadata,
      });

      return duration;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Measure a function's execution time
   */
  public async measure<T>(
    name: string,
    fn: () => T | Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    if (typeof performance === 'undefined' || !performance.now) {
      // If performance API is not available, just execute the function
      return await fn();
    }

    const startTime = performance.now();
    
    try {
      const result = await fn();
      const duration = performance.now() - startTime;
      
      try {
        this.recordMetric({
          name,
          duration,
          timestamp: new Date(),
          metadata,
        });
      } catch {
        // Silently fail metric recording
      }

      return result;
    } catch (error) {
      try {
        const duration = performance.now() - startTime;
        
        this.recordMetric({
          name: `${name}_ERROR`,
          duration,
          timestamp: new Date(),
          metadata: { ...metadata, error: true },
        });
      } catch {
        // Silently fail metric recording
      }

      throw error;
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.unshift(metric);

    // Keep metrics list manageable
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(0, this.maxMetrics);
    }

    // Log slow operations in development
    if (process.env.NODE_ENV === 'development' && metric.duration > 1000) {
      console.warn(`⚠️ Slow operation detected: ${metric.name} took ${metric.duration.toFixed(2)}ms`);
    }
  }

  /**
   * Get metrics for a specific operation
   */
  public getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.filter(m => m.name === name);
    }
    return [...this.metrics];
  }

  /**
   * Get average duration for an operation
   */
  public getAverageDuration(name: string): number {
    const operationMetrics = this.getMetrics(name);
    
    if (operationMetrics.length === 0) {
      return 0;
    }

    const total = operationMetrics.reduce((sum, m) => sum + m.duration, 0);
    return total / operationMetrics.length;
  }

  /**
   * Get performance statistics
   */
  public getStats(): {
    totalOperations: number;
    averageDuration: number;
    slowestOperation: PerformanceMetric | null;
    fastestOperation: PerformanceMetric | null;
  } {
    if (this.metrics.length === 0) {
      return {
        totalOperations: 0,
        averageDuration: 0,
        slowestOperation: null,
        fastestOperation: null,
      };
    }

    const durations = this.metrics.map(m => m.duration);
    const total = durations.reduce((sum, d) => sum + d, 0);

    return {
      totalOperations: this.metrics.length,
      averageDuration: total / this.metrics.length,
      slowestOperation: this.metrics.reduce((prev, current) =>
        current.duration > prev.duration ? current : prev
      ),
      fastestOperation: this.metrics.reduce((prev, current) =>
        current.duration < prev.duration ? current : prev
      ),
    };
  }

  /**
   * Clear all metrics
   */
  public clearMetrics(): void {
    this.metrics = [];
    this.timers.clear();
  }

  /**
   * Get current page performance metrics
   */
  public getPageMetrics(): {
    loadTime?: number;
    domContentLoaded?: number;
    firstPaint?: number;
    firstContentfulPaint?: number;
  } {
    try {
      // Use modern Navigation Timing API
      if (typeof performance !== 'undefined' && performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        const paint = performance.getEntriesByType('paint') || [];

        if (navEntries.length > 0) {
          const nav = navEntries[0];
          return {
            loadTime: nav.loadEventEnd - nav.fetchStart,
            domContentLoaded: nav.domContentLoadedEventEnd - nav.fetchStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          };
        }
      }
    } catch (error) {
      // Silently fail if performance APIs are not available
    }
    
    return {};
  }

  /**
   * Monitor long tasks (tasks > 50ms)
   */
  public monitorLongTasks(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      const observer = new PerformanceObserver((list) => {
        try {
          for (const entry of list.getEntries()) {
            if (process.env.NODE_ENV === 'development') {
              console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`);
            }
            
            this.recordMetric({
              name: 'LONG_TASK',
              duration: entry.duration,
              timestamp: new Date(),
              metadata: { type: entry.entryType },
            });
          }
        } catch (error) {
          // Silently handle errors in observer callback
        }
      });

      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      // Long task monitoring not supported, silently continue
    }
  }

  /**
   * Get memory usage (if available - Chrome only)
   */
  public getMemoryUsage(): {
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
    jsHeapSizeLimit?: number;
    usagePercentage?: number;
  } {
    try {
      if (typeof performance !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        if (memory && memory.usedJSHeapSize && memory.jsHeapSizeLimit) {
          return {
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            usagePercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
          };
        }
      }
    } catch (error) {
      // Memory API not available or access denied
    }
    return {};
  }
}

export const performanceMonitor = new PerformanceMonitor();

/**
 * HOC for measuring component render time
 */
export function withPerformanceTracking<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  return function PerformanceTrackedComponent(props: P) {
    performanceMonitor.startTimer(`${componentName}_render`);
    
    // This is a simplified example - in real implementation you'd use useEffect
    setTimeout(() => {
      performanceMonitor.endTimer(`${componentName}_render`);
    }, 0);

    return React.createElement(Component, props);
  };
}

/**
 * Measure async function performance
 */
export async function measureAsync<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  return performanceMonitor.measure(name, fn);
}

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring(): void {
  try {
    // Monitor long tasks
    performanceMonitor.monitorLongTasks();

    // Log page metrics on load
    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        logPageMetrics();
      } else {
        window.addEventListener('load', logPageMetrics, { once: true });
      }
    }
  } catch (error) {
    // Silently fail if performance monitoring can't be initialized
    if (process.env.NODE_ENV === 'development') {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }
}

function logPageMetrics(): void {
  try {
    const metrics = performanceMonitor.getPageMetrics();
    if (Object.keys(metrics).length > 0) {
      console.log('📊 Page Performance Metrics:', metrics);
    }
  } catch (error) {
    // Silently fail
  }
}

// Auto-initialize in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  try {
    initializePerformanceMonitoring();
  } catch (error) {
    // Silently fail
  }
}
