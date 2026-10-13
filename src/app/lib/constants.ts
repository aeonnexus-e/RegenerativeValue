// RVX System Constants

export const RVX_CONFIG = {
  APP_NAME: 'Atlas Sanctum',
  APP_VERSION: '1.0.0',
  API_VERSION: 'v1',
  ENVIRONMENT: process.env.NODE_ENV || 'development',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.atlassanctum.org',
  IMPACT: '/impact',
  BENEFICIARIES: '/beneficiaries',
  PROJECTS: '/projects',
  FUNDING: '/funding',
  MARKETPLACE: '/marketplace',
  RESILIENCE: '/resilience',
  ANALYTICS: '/analytics',
  USERS: '/users',
  AUTH: '/auth',
} as const;

export const IMPACT_CATEGORIES = {
  ENVIRONMENTAL: 'environmental',
  SOCIAL: 'social',
  ECONOMIC: 'economic',
} as const;

export const IMPACT_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
  ARCHIVED: 'archived',
} as const;

export const PROJECT_STATUS = {
  PLANNING: 'planning',
  ACTIVE: 'active',
  PAUSED: 'paused',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const FUNDING_TYPES = {
  GRANT: 'grant',
  LOAN: 'loan',
  INVESTMENT: 'investment',
  DONATION: 'donation',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  GOVERNMENT: 'government',
  NGO: 'ngo',
  DONOR: 'donor',
  CITIZEN: 'citizen',
  VENDOR: 'vendor',
  RESEARCHER: 'researcher',
  POLICY_MAKER: 'policy_maker',
} as const;

export const VERIFICATION_METHODS = {
  AI: 'ai',
  BLOCKCHAIN: 'blockchain',
  MANUAL: 'manual',
  HYBRID: 'hybrid',
} as const;

export const RVT_MULTIPLIERS = {
  EXPLORER: 2,
  BUILDER: 5,
  ARCHITECT: 12,
  GUARDIAN: Infinity,
} as const;

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  FULL: 'MMMM DD, YYYY HH:mm:ss',
  ISO: 'YYYY-MM-DD',
} as const;

export const RESILIENCE_RISK_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
} as const;

export const CURRENCY_CODES = ['USD', 'EUR', 'GBP', 'KES', 'NGN', 'INR', 'BRL', 'PHP'] as const;

export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'sw', 'hi', 'pt', 'tl'] as const;

export const CHART_COLORS = {
  PRIMARY: '#3b82f6',
  SECONDARY: '#10b981',
  TERTIARY: '#a855f7',
  QUATERNARY: '#06b6d4',
  SUCCESS: '#22c55e',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#3b82f6',
} as const;

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'rvx_auth_token',
  USER_PREFERENCES: 'rvx_user_preferences',
  THEME: 'rvx_theme',
  LANGUAGE: 'rvx_language',
} as const;

export const SOCKET_EVENTS = {
  IMPACT_VERIFIED: 'impact:verified',
  PROJECT_UPDATED: 'project:updated',
  FUNDING_APPROVED: 'funding:approved',
  RVT_TRADED: 'rvt:traded',
  RESILIENCE_ALERT: 'resilience:alert',
} as const;
