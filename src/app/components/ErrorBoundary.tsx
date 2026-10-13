import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Check if this is a third-party error (Figma, webpack, extensions, etc.)
    const errorStack = error.stack || '';
    const errorMessage = error.message || '';
    const componentStack = errorInfo.componentStack || '';
    
    const thirdPartyPatterns = [
      'figma.com',
      'devtools_worker',
      'webpack-artifacts',
      'chrome-extension://',
      'moz-extension://',
      'cb03811950f24593', // Old Figma worker hash
      'c56577443bcc9769', // New Figma worker hash
      '.min.js.br',       // Figma compressed scripts
    ];
    
    const combinedText = `${errorStack} ${errorMessage} ${componentStack}`.toLowerCase();
    const isThirdPartyError = thirdPartyPatterns.some(pattern => 
      combinedText.includes(pattern.toLowerCase())
    );

    // Don't display UI for third-party errors, just suppress them
    if (isThirdPartyError) {
      if (process.env.NODE_ENV === 'development') {
        console.debug('[ErrorBoundary] Third-party error suppressed');
      }
      // Reset state so the error doesn't persist
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
      });
      return;
    }

    // This is a real application error - handle it normally
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Log to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to error tracking service (e.g., Sentry)
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Placeholder for error logging service integration
    console.log('Logging error to service:', {
      error: error.toString(),
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
          <Card className="max-w-2xl w-full bg-slate-900 border-slate-800 p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-white mb-2">Something went wrong</h1>
              <p className="text-slate-400">
                We apologize for the inconvenience. The application encountered an unexpected error.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-slate-800 rounded-lg border border-red-500/20">
                <p className="text-red-400 mb-2">Error: {this.state.error.toString()}</p>
                {this.state.errorInfo && (
                  <details className="mt-2">
                    <summary className="text-slate-400 text-sm cursor-pointer">
                      Component Stack
                    </summary>
                    <pre className="text-xs text-slate-500 mt-2 overflow-auto max-h-64">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="border-slate-700 hover:bg-slate-800"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
