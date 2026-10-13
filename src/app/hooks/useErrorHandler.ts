import { useCallback, useState } from 'react';
import { errorHandler, ErrorCategory, ErrorSeverity, AppError } from '../lib/errorHandler';

interface UseErrorHandlerReturn {
  error: AppError | null;
  hasError: boolean;
  handleError: (
    error: Error | string,
    category?: ErrorCategory,
    severity?: ErrorSeverity
  ) => void;
  clearError: () => void;
  getUserMessage: () => string;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<AppError | null>(null);

  const handleError = useCallback(
    (
      error: Error | string,
      category: ErrorCategory = ErrorCategory.UNKNOWN,
      severity: ErrorSeverity = ErrorSeverity.MEDIUM
    ) => {
      const appError = errorHandler.handleError(error, category, severity);
      setError(appError);
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getUserMessage = useCallback(() => {
    if (!error) return '';
    return errorHandler.getUserMessage(error);
  }, [error]);

  return {
    error,
    hasError: error !== null,
    handleError,
    clearError,
    getUserMessage,
  };
}
