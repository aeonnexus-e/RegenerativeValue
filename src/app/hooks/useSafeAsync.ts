import { useState, useEffect, useCallback } from 'react';
import { errorHandler, ErrorCategory, ErrorSeverity } from '../lib/errorHandler';

interface UseSafeAsyncOptions {
  errorCategory?: ErrorCategory;
  errorSeverity?: ErrorSeverity;
  retryCount?: number;
  retryDelay?: number;
  onError?: (error: Error) => void;
}

interface UseSafeAsyncReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  retry: () => void;
  reset: () => void;
}

/**
 * Safe async data fetching hook with error handling and retry logic
 */
export function useSafeAsync<T>(
  asyncFunction: () => Promise<T>,
  dependencies: any[] = [],
  options: UseSafeAsyncOptions = {}
): UseSafeAsyncReturn<T> {
  const {
    errorCategory = ErrorCategory.DATA,
    errorSeverity = ErrorSeverity.MEDIUM,
    retryCount = 3,
    retryDelay = 1000,
    onError,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [attemptCount, setAttemptCount] = useState<number>(0);

  const executeAsync = useCallback(async () => {
    setLoading(true);
    setError(null);

    let currentAttempt = 0;
    let lastError: Error | null = null;

    while (currentAttempt < retryCount) {
      try {
        const result = await asyncFunction();
        setData(result);
        setLoading(false);
        setAttemptCount(0);
        return;
      } catch (err) {
        lastError = err instanceof Error ? err : new Error('Unknown error');
        currentAttempt++;

        if (currentAttempt < retryCount) {
          // Wait before retry
          await new Promise(resolve => 
            setTimeout(resolve, retryDelay * currentAttempt)
          );
        }
      }
    }

    // All retries failed
    if (lastError) {
      setError(lastError);
      setLoading(false);
      setAttemptCount(currentAttempt);

      // Log error
      errorHandler.handleError(lastError, errorCategory, errorSeverity);

      // Call custom error handler if provided
      if (onError) {
        onError(lastError);
      }
    }
  }, [asyncFunction, retryCount, retryDelay, errorCategory, errorSeverity, onError]);

  useEffect(() => {
    executeAsync();
  }, dependencies);

  const retry = useCallback(() => {
    executeAsync();
  }, [executeAsync]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
    setAttemptCount(0);
  }, []);

  return {
    data,
    loading,
    error,
    retry,
    reset,
  };
}

/**
 * Safe async mutation hook for create/update/delete operations
 */
export function useSafeMutation<T, TArgs extends any[] = []>(
  mutationFunction: (...args: TArgs) => Promise<T>,
  options: UseSafeAsyncOptions = {}
) {
  const {
    errorCategory = ErrorCategory.DATA,
    errorSeverity = ErrorSeverity.MEDIUM,
    onError,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: TArgs): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        const result = await mutationFunction(...args);
        setData(result);
        setLoading(false);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error');
        setError(error);
        setLoading(false);

        // Log error
        errorHandler.handleError(error, errorCategory, errorSeverity);

        // Call custom error handler if provided
        if (onError) {
          onError(error);
        }

        return null;
      }
    },
    [mutationFunction, errorCategory, errorSeverity, onError]
  );

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
}
