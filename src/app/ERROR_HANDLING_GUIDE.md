# Atlas Sanctum RVX - Error Handling Guide

## Overview

This document explains the error handling approach for the Atlas Sanctum RVX platform running in Figma Make.

## Understanding Figma Make Development Warnings

### The Reality
When you see console warnings from `figma.com/devtools_worker` or similar, these are:
- **Normal** development environment messages from Figma Make itself
- **Harmless** and do not affect your application's functionality
- **Impossible to suppress** via JavaScript because they originate from:
  - The browser's native C++ error reporting layer
  - Web Worker isolated contexts that execute before application code
  - Figma's internal tooling infrastructure

### The Solution
**Accept them.** These warnings are part of the development experience and will not appear in production deployments.

## Our Error Handling Strategy

### 1. **Application-Level Error Handling**
Located in `/lib/errorHandler.ts`, this provides robust error management for actual application errors:

```typescript
import { errorHandler, ErrorCategory, ErrorSeverity } from './lib/errorHandler';

// Handle specific error types
errorHandler.handleNetworkError(error, '/api/endpoint');
errorHandler.handleValidationError('Invalid input', 'email');
errorHandler.handleAuthError('Authentication failed');
```

### 2. **React Error Boundaries**
The `ErrorBoundary` component catches React rendering errors:

```tsx
<ErrorBoundary onReset={() => window.location.reload()}>
  <YourApp />
</ErrorBoundary>
```

### 3. **Async Error Handling**
Use the built-in wrappers for async operations:

```typescript
import { withErrorHandling } from './lib/errorHandler';

const result = await withErrorHandling(
  async () => fetchData(),
  ErrorCategory.NETWORK,
  ErrorSeverity.HIGH
);
```

### 4. **Custom Hooks**
The platform includes error-aware hooks:

```typescript
import { useErrorHandler } from './hooks/useErrorHandler';
import { useSafeAsync } from './hooks/useSafeAsync';

// In your component
const { error, handleError } = useErrorHandler();
const { execute, loading, error: asyncError } = useSafeAsync();
```

## What NOT To Do

❌ **Don't try to suppress Figma development warnings**
- You cannot intercept browser-level or worker-level logging
- Attempting to do so adds unnecessary complexity
- It's fighting against the development environment

❌ **Don't patch core JavaScript objects unnecessarily**
- Patching `console`, `Promise`, `Error`, etc. can cause unexpected side effects
- It makes debugging harder
- It can break third-party libraries

❌ **Don't create complex suppression systems**
- They add maintenance burden
- They don't work for environment-level warnings
- They hide legitimate errors

## What TO Do

✅ **Focus on production-ready error handling**
- Use proper try-catch blocks
- Implement error boundaries
- Log errors appropriately
- Provide user-friendly error messages

✅ **Use browser devtools filtering**
- Open DevTools Console
- Use the filter box to hide specific warnings
- Set up console filters in your browser settings

✅ **Distinguish error types**
- Application errors → Handle and log
- Library errors → Debug if affecting functionality
- Environment warnings → Ignore

## Production Deployment

In production:
- Figma Make development warnings will not appear
- Only your application errors will be logged
- Consider integrating a service like Sentry or LogRocket for error tracking

## Error Categories

Our error handler supports these categories:

| Category | When to Use | Severity |
|----------|-------------|----------|
| `NETWORK` | API calls, fetch failures | HIGH |
| `VALIDATION` | Form validation, input errors | LOW |
| `AUTHENTICATION` | Login/logout issues | HIGH |
| `AUTHORIZATION` | Permission denied | MEDIUM |
| `DATA` | Data processing errors | MEDIUM |
| `SYSTEM` | Unexpected system failures | CRITICAL |
| `UNKNOWN` | Uncategorized errors | MEDIUM |

## Best Practices

1. **Be Specific**: Use appropriate error categories and severity levels
2. **Be Helpful**: Provide clear user-facing error messages
3. **Be Logged**: Log errors for debugging but don't spam the console
4. **Be Graceful**: Handle errors gracefully with fallback UI
5. **Be Informed**: Monitor production errors with proper tooling

## Example: Complete Error Handling Flow

```typescript
import { errorHandler, ErrorCategory, ErrorSeverity } from './lib/errorHandler';
import { toast } from 'sonner@2.0.3';

async function saveProject(data: ProjectData) {
  try {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to save project');
    }
    
    toast.success('Project saved successfully!');
    return await response.json();
    
  } catch (error) {
    const appError = errorHandler.handleNetworkError(
      error as Error,
      '/api/projects'
    );
    
    // Show user-friendly message
    toast.error(errorHandler.getUserMessage(appError));
    
    // Optionally rethrow for component to handle
    throw appError;
  }
}
```

## Summary

The Atlas Sanctum RVX platform uses a clean, production-ready error handling system that:
- ✅ Handles real application errors effectively
- ✅ Provides great user experience with error boundaries
- ✅ Logs errors appropriately for debugging
- ✅ Avoids fighting the development environment
- ✅ Keeps the codebase maintainable and debuggable

**Remember:** Figma Make development warnings are normal. Focus on handling your application's errors properly instead.
