import { useState, useEffect, useCallback } from 'react';
import type { User } from '../types';
import { LOCAL_STORAGE_KEYS } from '../lib/constants';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      // In production, validate token with API
      validateToken(token);
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const validateToken = async (token: string) => {
    try {
      // Mock validation - in production, call API
      // const response = await api.auth.validate(token);
      
      // Mock user data
      const mockUser: User = {
        id: 'user-001',
        name: 'Atlas User',
        email: 'user@atlassanctum.org',
        role: 'admin',
        permissions: ['admin.all'],
        createdAt: new Date(),
        status: 'active',
      };

      setAuthState({
        user: mockUser,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      setAuthState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const login = useCallback(async (email: string, password: string) => {
    try {
      // Mock login - in production, call API
      // const response = await api.auth.login({ email, password });
      
      const mockToken = 'mock-jwt-token';
      const mockUser: User = {
        id: 'user-001',
        name: 'Atlas User',
        email,
        role: 'admin',
        permissions: ['admin.all'],
        createdAt: new Date(),
        status: 'active',
      };

      localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, mockToken);
      
      setAuthState({
        user: mockUser,
        token: mockToken,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setAuthState(prev => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...updates } : null,
    }));
  }, []);

  return {
    user: authState.user,
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    login,
    logout,
    updateUser,
  };
}
