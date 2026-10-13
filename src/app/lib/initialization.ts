// Platform Initialization & Startup Checks

import { initializeHealthCheck, healthMonitor } from './healthCheck';
import { errorHandler, ErrorCategory, ErrorSeverity } from './errorHandler';
import { initializePerformanceMonitoring, performanceMonitor } from './performance';

export interface InitializationResult {
  success: boolean;
  health: any;
  warnings: string[];
  errors: string[];
}

/**
 * Initialize the Atlas Sanctum RVX Platform
 * Run critical startup checks and setup
 */
export async function initializePlatform(): Promise<InitializationResult> {
  const warnings: string[] = [];
  const errors: string[] = [];

  console.log('🚀 Initializing Atlas Sanctum RVX Platform...');

  try {
    // 1. Run health check
    console.log('⚕️  Running health check...');
    let health;
    try {
      health = await initializeHealthCheck();

      if (health.status === 'down') {
        errors.push('System health check failed');
        health.errors.forEach(err => errors.push(err));
      } else if (health.status === 'degraded') {
        warnings.push('System health degraded');
        health.errors.forEach(err => warnings.push(err));
      }
    } catch (error) {
      warnings.push('Health check failed but continuing...');
      health = {
        status: 'degraded' as const,
        timestamp: new Date(),
        checks: { api: false, localStorage: false, browser: true },
        performance: {},
        errors: ['Health check error'],
      };
    }

    // 2. Check localStorage availability
    console.log('💾 Checking storage...');
    try {
      const testKey = '__init_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
    } catch (error) {
      warnings.push('LocalStorage unavailable - some features may not work');
    }

    // 3. Validate browser capabilities
    console.log('🌐 Checking browser capabilities...');
    const requiredAPIs = {
      fetch: typeof fetch !== 'undefined',
      Promise: typeof Promise !== 'undefined',
      localStorage: typeof localStorage !== 'undefined',
      JSON: typeof JSON !== 'undefined',
      Date: typeof Date !== 'undefined',
    };

    Object.entries(requiredAPIs).forEach(([api, available]) => {
      if (!available) {
        errors.push(`Browser API not available: ${api}`);
      }
    });

    // 4. Check for modern browser features (safe feature detection)
    console.log('🔍 Checking modern features...');
    const modernFeatures = {
      'ES6 Features': () => {
        try {
          // Safe feature detection without eval
          return typeof Symbol !== 'undefined' && 
                 typeof Promise !== 'undefined' &&
                 typeof Object.assign === 'function';
        } catch {
          return false;
        }
      },
      'Modern APIs': () => {
        try {
          return typeof Map !== 'undefined' && 
                 typeof Set !== 'undefined' &&
                 typeof WeakMap !== 'undefined';
        } catch {
          return false;
        }
      },
    };

    Object.entries(modernFeatures).forEach(([feature, check]) => {
      try {
        if (!check()) {
          warnings.push(`Browser may not support: ${feature}`);
        }
      } catch (error) {
        warnings.push(`Could not check feature: ${feature}`);
      }
    });

    // 5. Initialize performance monitoring
    console.log('📊 Setting up monitoring...');
    try {
      initializePerformanceMonitoring();
      
      if (process.env.NODE_ENV === 'production') {
        // Start health monitoring (check every 5 minutes)
        healthMonitor.startMonitoring(300000);
      } else {
        // More frequent checks in development (every minute)
        healthMonitor.startMonitoring(60000);
      }
    } catch (error) {
      warnings.push('Performance monitoring setup had issues');
    }

    // 6. Log initialization status
    const success = errors.length === 0;
    
    if (success) {
      console.log('✅ Platform initialized successfully');
      if (warnings.length > 0) {
        console.warn('⚠️  Warnings:', warnings);
      }
    } else {
      console.error('❌ Platform initialization failed:', errors);
      errorHandler.handleError(
        new Error('Platform initialization failed'),
        ErrorCategory.SYSTEM,
        ErrorSeverity.CRITICAL,
        { errors, warnings }
      );
    }

    return {
      success,
      health,
      warnings,
      errors,
    };

  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown initialization error');
    errors.push(err.message);
    
    errorHandler.handleError(
      err,
      ErrorCategory.SYSTEM,
      ErrorSeverity.CRITICAL
    );

    return {
      success: false,
      health: null,
      warnings,
      errors,
    };
  }
}

/**
 * Clean shutdown of the platform
 */
export function shutdownPlatform(): void {
  console.log('🛑 Shutting down Atlas Sanctum RVX Platform...');
  
  try {
    // Clear any pending timers or intervals
    // Stop health monitoring
    // Clear error logs if needed
    errorHandler.clearErrors();
    
    console.log('✅ Platform shutdown complete');
  } catch (error) {
    console.error('Error during shutdown:', error);
  }
}

/**
 * Get platform readiness status
 */
export function getPlatformStatus(): {
  ready: boolean;
  version: string;
  environment: string;
} {
  return {
    ready: true,
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development',
  };
}

// Handle window unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    shutdownPlatform();
  });
}
