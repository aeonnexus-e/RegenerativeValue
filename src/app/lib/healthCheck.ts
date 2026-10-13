// System Health Monitoring for Atlas Sanctum RVX Platform

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'down';
  timestamp: Date;
  checks: {
    api: boolean;
    localStorage: boolean;
    browser: boolean;
  };
  performance: {
    memoryUsage?: number;
    loadTime?: number;
  };
  errors: string[];
}

class HealthMonitor {
  private healthStatus: HealthStatus = {
    status: 'healthy',
    timestamp: new Date(),
    checks: {
      api: true,
      localStorage: true,
      browser: true,
    },
    performance: {},
    errors: [],
  };

  /**
   * Run comprehensive health check
   */
  public async checkHealth(): Promise<HealthStatus> {
    try {
      // Reset errors before each check
      this.healthStatus.errors = [];
      
      const checks = await Promise.allSettled([
        this.checkLocalStorage(),
        this.checkBrowserCapabilities(),
        this.checkPerformance(),
      ]);

      // Count successful checks
      const successfulChecks = checks.filter(
        result => result.status === 'fulfilled' && result.value === true
      ).length;

      const allHealthy = successfulChecks === checks.length;
      const anyCheck = successfulChecks > 0;

      this.healthStatus.status = allHealthy ? 'healthy' : anyCheck ? 'degraded' : 'down';
      this.healthStatus.timestamp = new Date();

      return this.healthStatus;
    } catch (error) {
      // If health check itself fails, return degraded status
      this.healthStatus.status = 'degraded';
      this.healthStatus.timestamp = new Date();
      this.healthStatus.errors.push('Health check failed');
      return this.healthStatus;
    }
  }

  /**
   * Check localStorage availability
   */
  private async checkLocalStorage(): Promise<boolean> {
    try {
      const testKey = '__health_check__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      this.healthStatus.checks.localStorage = true;
      return true;
    } catch (error) {
      this.healthStatus.checks.localStorage = false;
      this.healthStatus.errors.push('LocalStorage unavailable');
      return false;
    }
  }

  /**
   * Check browser capabilities
   */
  private async checkBrowserCapabilities(): Promise<boolean> {
    try {
      const hasRequiredAPIs = 
        typeof fetch !== 'undefined' &&
        typeof Promise !== 'undefined' &&
        typeof localStorage !== 'undefined';

      this.healthStatus.checks.browser = hasRequiredAPIs;
      
      if (!hasRequiredAPIs) {
        this.healthStatus.errors.push('Browser missing required APIs');
      }

      return hasRequiredAPIs;
    } catch (error) {
      this.healthStatus.checks.browser = false;
      this.healthStatus.errors.push('Browser compatibility check failed');
      return false;
    }
  }

  /**
   * Check performance metrics
   */
  private async checkPerformance(): Promise<boolean> {
    try {
      // Check memory usage if available (Chrome only)
      if (typeof performance !== 'undefined' && 'memory' in performance) {
        try {
          const memory = (performance as any).memory;
          if (memory && memory.usedJSHeapSize && memory.jsHeapSizeLimit) {
            this.healthStatus.performance.memoryUsage = 
              (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
          }
        } catch {
          // Memory API not available or access denied
        }
      }

      // Use modern Navigation Timing API
      if (typeof performance !== 'undefined' && performance.getEntriesByType) {
        try {
          const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
          if (navEntries.length > 0) {
            const loadTime = navEntries[0].loadEventEnd - navEntries[0].fetchStart;
            this.healthStatus.performance.loadTime = loadTime;
          }
        } catch {
          // Navigation timing not available
        }
      }

      return true;
    } catch (error) {
      // Performance checks are non-critical, don't fail health check
      return true;
    }
  }

  /**
   * Get current health status
   */
  public getStatus(): HealthStatus {
    return { ...this.healthStatus };
  }

  /**
   * Reset health status
   */
  public reset(): void {
    this.healthStatus = {
      status: 'healthy',
      timestamp: new Date(),
      checks: {
        api: true,
        localStorage: true,
        browser: true,
      },
      performance: {},
      errors: [],
    };
  }

  /**
   * Monitor continuous health
   */
  public startMonitoring(intervalMs: number = 60000): () => void {
    const intervalId = setInterval(() => {
      try {
        this.checkHealth().catch(error => {
          console.warn('Health check failed during monitoring:', error);
        });
      } catch (error) {
        console.warn('Failed to run health check:', error);
      }
    }, intervalMs);

    return () => {
      try {
        clearInterval(intervalId);
      } catch (error) {
        console.warn('Failed to clear health monitoring interval:', error);
      }
    };
  }
}

export const healthMonitor = new HealthMonitor();

/**
 * Initialize health monitoring on app start
 */
export async function initializeHealthCheck(): Promise<HealthStatus> {
  return await healthMonitor.checkHealth();
}
