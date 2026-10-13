import { AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';
import { AppError } from '../lib/errorHandler';

interface ErrorAlertProps {
  error: AppError | null;
  onDismiss?: () => void;
  showDetails?: boolean;
}

export function ErrorAlert({ error, onDismiss, showDetails = false }: ErrorAlertProps) {
  if (!error) return null;

  const getSeverityColor = () => {
    switch (error.severity) {
      case 'critical':
      case 'high':
        return 'border-red-500/50 bg-red-500/10 text-red-400';
      case 'medium':
        return 'border-amber-500/50 bg-amber-500/10 text-amber-400';
      case 'low':
        return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
      default:
        return 'border-slate-500/50 bg-slate-500/10 text-slate-400';
    }
  };

  return (
    <Alert className={`${getSeverityColor()} border mb-4`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <div className="flex-1">
            <AlertTitle className="mb-1">
              {error.category.charAt(0).toUpperCase() + error.category.slice(1)} Error
            </AlertTitle>
            <AlertDescription className="text-slate-300">
              {error.message}
            </AlertDescription>
            {showDetails && error.details && (
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Show details
                </summary>
                <pre className="mt-2 text-xs bg-slate-900 p-2 rounded overflow-auto max-h-32">
                  {JSON.stringify(error.details, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
        {onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="h-6 w-6 p-0 hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </Alert>
  );
}
