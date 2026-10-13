import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import type { Notification } from '../types';
import { errorHandler, ErrorCategory } from '../lib/errorHandler';

interface RVXContextValue {
  // Global state
  notifications: Notification[];
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  showError: (message: string, category?: ErrorCategory) => void;
  showSuccess: (message: string) => void;
}

const RVXContext = createContext<RVXContextValue | undefined>(undefined);

export function RVXProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');

  // Initialize theme from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('rvx_theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt'>) => {
    try {
      const newNotification: Notification = {
        ...notification,
        id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        read: false,
        createdAt: new Date(),
      };
      
      setNotifications(prev => [newNotification, ...prev]);
      
      // Auto-remove after 5 seconds for non-error notifications
      if (notification.type !== 'error') {
        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        }, 5000);
      }
    } catch (error) {
      console.warn('Failed to add notification:', error);
    }
  }, []);

  const markNotificationAsRead = useCallback((id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const setTheme = useCallback((newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('rvx_theme', newTheme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, []);

  const showError = useCallback((message: string, category: ErrorCategory = ErrorCategory.UNKNOWN) => {
    errorHandler.handleError(new Error(message), category);
    addNotification({
      type: 'error',
      title: 'Error',
      message,
      userId: 'system',
      read: false,
    });
  }, [addNotification]);

  const showSuccess = useCallback((message: string) => {
    addNotification({
      type: 'success',
      title: 'Success',
      message,
      userId: 'system',
      read: false,
    });
  }, [addNotification]);

  return (
    <RVXContext.Provider
      value={{
        notifications,
        sidebarOpen,
        theme,
        addNotification,
        markNotificationAsRead,
        clearNotifications,
        toggleSidebar,
        setTheme,
        showError,
        showSuccess,
      }}
    >
      {children}
    </RVXContext.Provider>
  );
}

export function useRVX() {
  const context = useContext(RVXContext);
  if (!context) {
    throw new Error('useRVX must be used within RVXProvider');
  }
  return context;
}
