// Global Error Handler for Atlas Sanctum RVX Platform

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  DATA = 'data',
  SYSTEM = 'system',
  UNKNOWN = 'unknown',
}

export interface AppError {
  message: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  code?: string;
  details?: any;
  timestamp: Date;
  stack?: string;
}

class ErrorHandler {
  private errorLog: AppError[] = [];
  private maxLogSize = 100;

  /**
   * Check if error is from third-party code
   */
  private isThirdPartyError(error: Error | string): boolean {
    const errorStack = typeof error === 'string' ? error : (error.stack || '');
    return (
      errorStack.includes('figma.com') ||
      errorStack.includes('devtools_worker') ||
      errorStack.includes('webpack-artifacts') ||
      errorStack.includes('chrome-extension://') ||
      errorStack.includes('moz-extension://')
    );
  }

  /**
   * Handle and log errors
   */
  public handleError(
    error: Error | string,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    details?: any
  ): AppError {
    // Suppress third-party errors
    if (typeof error !== 'string' && this.isThirdPartyError(error)) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Third-party error suppressed:', error.message);
      }
      // Return a dummy error object without logging
      return {
        message: 'Third-party error suppressed',
        category: ErrorCategory.SYSTEM,
        severity: ErrorSeverity.LOW,
        timestamp: new Date(),
      };
    }

    const appError: AppError = {
      message: typeof error === 'string' ? error : error.message,
      category,
      severity,
      details,
      timestamp: new Date(),
      stack: typeof error === 'string' ? undefined : error.stack,
    };

    this.logError(appError);
    this.reportError(appError);

    return appError;
  }

  /**
   * Log error to internal storage
   */
  private logError(error: AppError): void {
    this.errorLog.unshift(error);
    
    // Keep log size manageable
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[ErrorHandler]', error);
    }
  }

  /**
   * Report error to external service
   */
  private reportError(error: AppError): void {
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production' && error.severity === ErrorSeverity.CRITICAL) {
      // TODO: Integrate with error tracking service (e.g., Sentry, LogRocket)
      this.sendToErrorService(error);
    }
  }

  private sendToErrorService(error: AppError): void {
    // Placeholder for error service integration
    console.log('Sending to error service:', error);
  }

  /**
   * Get recent errors
   */
  public getRecentErrors(limit: number = 10): AppError[] {
    return this.errorLog.slice(0, limit);
  }

  /**
   * Clear error log
   */
  public clearErrors(): void {
    this.errorLog = [];
  }

  /**
   * Handle network errors
   */
  public handleNetworkError(error: Error, endpoint?: string): AppError {
    return this.handleError(
      error,
      ErrorCategory.NETWORK,
      ErrorSeverity.HIGH,
      { endpoint }
    );
  }

  /**
   * Handle validation errors
   */
  public handleValidationError(message: string, field?: string): AppError {
    return this.handleError(
      message,
      ErrorCategory.VALIDATION,
      ErrorSeverity.LOW,
      { field }
    );
  }

  /**
   * Handle authentication errors
   */
  public handleAuthError(message: string): AppError {
    return this.handleError(
      message,
      ErrorCategory.AUTHENTICATION,
      ErrorSeverity.HIGH
    );
  }

  /**
   * Get user-friendly error message
   */
  public getUserMessage(error: AppError): string {
    const messages: Record<ErrorCategory, string> = {
      [ErrorCategory.NETWORK]: 'Network connection issue. Please check your internet connection.',
      [ErrorCategory.VALIDATION]: error.message,
      [ErrorCategory.AUTHENTICATION]: 'Authentication failed. Please log in again.',
      [ErrorCategory.AUTHORIZATION]: 'You do not have permission to perform this action.',
      [ErrorCategory.DATA]: 'Data processing error. Please try again.',
      [ErrorCategory.SYSTEM]: 'System error. Our team has been notified.',
      [ErrorCategory.UNKNOWN]: 'An unexpected error occurred. Please try again.',
    };

    return messages[error.category] || messages[ErrorCategory.UNKNOWN];
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();

/**
 * Async error wrapper
 */
export async function withErrorHandling<T>(
  fn: () => Promise<T>,
  category: ErrorCategory = ErrorCategory.UNKNOWN,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM
): Promise<T | null> {
  try {
    return await fn();
  } catch (error) {
    errorHandler.handleError(
      error as Error,
      category,
      severity
    );
    return null;
  }
}

/**
 * Sync error wrapper
 */
export function withErrorHandlingSync<T>(
  fn: () => T,
  category: ErrorCategory = ErrorCategory.UNKNOWN,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM
): T | null {
  try {
    return fn();
  } catch (error) {
    errorHandler.handleError(
      error as Error,
      category,
      severity
    );
    return null;
  }
}
