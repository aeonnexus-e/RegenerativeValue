import { API_ENDPOINTS, LOCAL_STORAGE_KEYS } from '../lib/constants';
import type { ApiResponse } from '../types';
import { errorHandler, ErrorCategory, ErrorSeverity } from '../lib/errorHandler';

class ApiClient {
  private baseURL: string;
  private requestTimeout: number = 30000; // 30 seconds
  private maxRetries: number = 3;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    retryCount: number = 0
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.requestTimeout);
    config.signal = controller.signal;

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      clearTimeout(timeoutId);
      
      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const error = {
          code: `HTTP_${response.status}`,
          message: typeof data === 'object' ? data.message || 'Request failed' : 'Request failed',
          details: data,
        };

        // Log error
        errorHandler.handleError(
          new Error(error.message),
          ErrorCategory.NETWORK,
          response.status >= 500 ? ErrorSeverity.HIGH : ErrorSeverity.MEDIUM,
          { endpoint, status: response.status }
        );

        return {
          success: false,
          error,
        };
      }

      return {
        success: true,
        data: typeof data === 'object' ? data : { value: data },
        meta: typeof data === 'object' ? data.meta : undefined,
      };
    } catch (error) {
      clearTimeout(timeoutId);

      // Handle abort/timeout
      if (error instanceof Error && error.name === 'AbortError') {
        errorHandler.handleError(
          new Error('Request timeout'),
          ErrorCategory.NETWORK,
          ErrorSeverity.MEDIUM,
          { endpoint, timeout: this.requestTimeout }
        );

        return {
          success: false,
          error: {
            code: 'TIMEOUT',
            message: 'Request timed out. Please try again.',
          },
        };
      }

      // Retry logic for network errors
      if (retryCount < this.maxRetries) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
        return this.request<T>(endpoint, options, retryCount + 1);
      }

      // Log final error
      errorHandler.handleNetworkError(
        error instanceof Error ? error : new Error('Unknown network error'),
        endpoint
      );

      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Network error occurred',
        },
      };
    }
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const queryString = params 
      ? '?' + new URLSearchParams(params).toString()
      : '';
    
    return this.request<T>(`${endpoint}${queryString}`, {
      method: 'GET',
    });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

export const api = new ApiClient(API_ENDPOINTS.BASE_URL);
