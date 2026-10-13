# Atlas Sanctum RVX - Developer Quick Reference

## 🚀 Common Tasks

### Error Handling

```typescript
// Import
import { errorHandler, ErrorCategory, ErrorSeverity } from './lib/errorHandler';

// Handle an error
errorHandler.handleError(
  new Error('Something went wrong'),
  ErrorCategory.DATA,
  ErrorSeverity.HIGH
);

// Get user-friendly message
const message = errorHandler.getUserMessage(error);

// Get recent errors
const errors = errorHandler.getRecentErrors(10);
```

### Safe Async Operations

```typescript
// Import
import { useSafeAsync, useSafeMutation } from './hooks/useSafeAsync';

// For data fetching (with auto-retry)
const { data, loading, error, retry } = useSafeAsync(
  () => fetchData(id),
  [id],
  { retryCount: 3, retryDelay: 1000 }
);

// For mutations
const { execute, loading, error } = useSafeMutation(
  (data) => createItem(data)
);

await execute(formData);
```

### Input Validation

```typescript
// Import
import { 
  validateEmail, 
  validateProjectData,
  sanitizeString,
  ValidationError 
} from './lib/validation';

// Validate email
if (!validateEmail(email)) {
  throw new ValidationError('Invalid email format');
}

// Validate complex data
try {
  validateProjectData(projectData);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Field:', error.field);
    console.log('Value:', error.value);
  }
}

// Sanitize input
const clean = sanitizeString(userInput);
```

### Context & Notifications

```typescript
// Import
import { useRVX } from './contexts/RVXContext';

// In component
const { showError, showSuccess, addNotification } = useRVX();

// Show success message
showSuccess('Project created successfully!');

// Show error message
showError('Failed to save data', ErrorCategory.DATA);

// Custom notification
addNotification({
  type: 'info',
  title: 'Update Available',
  message: 'A new version is available',
  userId: currentUser.id,
  read: false,
});
```

### Error Boundaries

```typescript
// Import
import { ErrorBoundary } from './components/ErrorBoundary';

// Wrap components
<ErrorBoundary onReset={() => handleReset()}>
  <YourComponent />
</ErrorBoundary>

// Custom fallback
<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

### Loading States

```typescript
// Import
import { LoadingFallback, PageLoadingSkeleton } from './components/LoadingFallback';

// Simple loading
{loading && <LoadingFallback message="Loading projects..." />}

// Full screen loading
{loading && <LoadingFallback fullScreen message="Initializing..." />}

// Page skeleton
{loading && <PageLoadingSkeleton />}
```

### Error Display

```typescript
// Import
import { ErrorAlert } from './components/ErrorAlert';

// Show error
{error && (
  <ErrorAlert 
    error={error} 
    onDismiss={() => clearError()}
    showDetails={process.env.NODE_ENV === 'development'}
  />
)}
```

### Health Monitoring

```typescript
// Import
import { healthMonitor } from './lib/healthCheck';

// Check health
const health = await healthMonitor.checkHealth();

// Get status
const status = healthMonitor.getStatus();

// Start monitoring (checks every 60s)
const stopMonitoring = healthMonitor.startMonitoring(60000);

// Stop monitoring
stopMonitoring();
```

### Performance Tracking

```typescript
// Import
import { performanceMonitor, measureAsync } from './lib/performance';

// Measure function execution
const data = await measureAsync('fetchUserData', () => fetchUserData(id));

// Manual timing
performanceMonitor.startTimer('complexCalculation');
// ... do complex work
const duration = performanceMonitor.endTimer('complexCalculation');

// Get metrics
const metrics = performanceMonitor.getMetrics('fetchUserData');
const avgDuration = performanceMonitor.getAverageDuration('fetchUserData');

// Get stats
const stats = performanceMonitor.getStats();

// Get page metrics
const pageMetrics = performanceMonitor.getPageMetrics();

// Get memory usage
const memory = performanceMonitor.getMemoryUsage();
```

## 🎨 Component Patterns

### Data Fetching Component

```typescript
import { useSafeAsync } from './hooks/useSafeAsync';
import { LoadingFallback } from './components/LoadingFallback';
import { ErrorAlert } from './components/ErrorAlert';

function MyComponent({ id }) {
  const { data, loading, error, retry } = useSafeAsync(
    () => fetchData(id),
    [id]
  );

  if (loading) return <LoadingFallback />;
  if (error) return <ErrorAlert error={error} onDismiss={retry} />;
  
  return <DataDisplay data={data} />;
}
```

### Form with Validation

```typescript
import { useState } from 'react';
import { validateProjectData, ValidationError } from './lib/validation';
import { useRVX } from './contexts/RVXContext';
import { useSafeMutation } from './hooks/useSafeAsync';

function CreateProjectForm() {
  const { showError, showSuccess } = useRVX();
  const [formData, setFormData] = useState({});
  const { execute, loading } = useSafeMutation(createProject);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Validate
      validateProjectData(formData);
      
      // Submit
      const result = await execute(formData);
      
      if (result) {
        showSuccess('Project created successfully!');
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        showError(error.message);
      } else {
        showError('Failed to create project');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button disabled={loading}>
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
}
```

### Error Boundary Wrapper

```typescript
import { ErrorBoundary } from './components/ErrorBoundary';

function AppSection() {
  return (
    <ErrorBoundary onReset={() => window.location.reload()}>
      <CriticalFeature />
    </ErrorBoundary>
  );
}
```

## 🔧 Configuration

### Environment Variables

```env
# .env.local
REACT_APP_API_URL=https://api.atlassanctum.org
REACT_APP_SENTRY_DSN=your_sentry_dsn
NODE_ENV=production
```

### Error Categories

```typescript
enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  DATA = 'data',
  SYSTEM = 'system',
  UNKNOWN = 'unknown',
}
```

### Error Severity

```typescript
enum ErrorSeverity {
  LOW = 'low',       // Minor issues, user can continue
  MEDIUM = 'medium', // Impacts functionality
  HIGH = 'high',     // Significant issue
  CRITICAL = 'critical', // System failure
}
```

## 📊 Monitoring

### Development Console

```javascript
// Check error log
errorHandler.getRecentErrors();

// Check health
await healthMonitor.checkHealth();

// Check performance
performanceMonitor.getStats();

// Check memory
performanceMonitor.getMemoryUsage();

// Clear errors
errorHandler.clearErrors();

// Clear metrics
performanceMonitor.clearMetrics();
```

### Production Monitoring

```typescript
// Setup Sentry
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});

// Errors are automatically sent via errorHandler
```

## 🎯 Best Practices

### ✅ DO

- Use `useSafeAsync` for data fetching
- Wrap critical components in `ErrorBoundary`
- Validate all user input
- Sanitize strings before display
- Show loading states
- Handle errors gracefully
- Log errors appropriately
- Use type-safe operations

### ❌ DON'T

- Use raw `fetch` without error handling
- Ignore validation errors
- Display raw error messages to users
- Skip loading states
- Expose sensitive data in errors
- Use `any` types unnecessarily
- Forget to handle edge cases

## 🚨 Common Issues

### Issue: Component crashes on error
**Solution**: Wrap in `ErrorBoundary`

### Issue: Network request fails silently
**Solution**: Use `useSafeAsync` with retry logic

### Issue: Form accepts invalid data
**Solution**: Add validation before submission

### Issue: User sees technical errors
**Solution**: Use `errorHandler.getUserMessage()`

### Issue: Slow performance
**Solution**: Use lazy loading and code splitting

### Issue: Memory leaks
**Solution**: Clean up effects and subscriptions

## 📚 Additional Resources

- `/STABILITY.md` - Comprehensive stability guide
- `/DEPLOYMENT_READY.md` - Deployment checklist
- `/ARCHITECTURE.md` - System architecture
- `/README.md` - Project overview

## 🆘 Getting Help

1. Check error logs: `errorHandler.getRecentErrors()`
2. Check system health: `healthMonitor.checkHealth()`
3. Review console in development
4. Check documentation files
5. Contact support team

---

**Last Updated**: November 2, 2025
