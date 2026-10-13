import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { healthMonitor, HealthStatus } from '../lib/healthCheck';
import { errorHandler } from '../lib/errorHandler';
import { getPlatformStatus } from '../lib/initialization';

export function SystemStatus() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [recentErrors, setRecentErrors] = useState<any[]>([]);

  useEffect(() => {
    // Load initial status
    loadStatus();

    // Update every 30 seconds
    const interval = setInterval(loadStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  const loadStatus = async () => {
    const healthStatus = await healthMonitor.checkHealth();
    const errors = errorHandler.getRecentErrors(5);
    
    setHealth(healthStatus);
    setRecentErrors(errors);
  };

  const platformStatus = getPlatformStatus();

  const getStatusIcon = () => {
    if (!health) return <Activity className="w-5 h-5 text-slate-400" />;
    
    switch (health.status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Activity className="w-5 h-5 text-slate-400" />;
    }
  };

  const getStatusColor = () => {
    if (!health) return 'bg-slate-500/20 text-slate-400';
    
    switch (health.status) {
      case 'healthy':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'degraded':
        return 'bg-amber-500/20 text-amber-400';
      case 'down':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <Card className="bg-slate-900 border-slate-800 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <div>
            <h3 className="text-white">System Status</h3>
            <p className="text-slate-400 text-sm">Version {platformStatus.version}</p>
          </div>
        </div>
        <Badge className={getStatusColor()}>
          {health?.status || 'checking...'}
        </Badge>
      </div>

      {health && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800 p-3 rounded-lg">
              <p className="text-slate-400 text-sm mb-1">API</p>
              <Badge className={health.checks.api ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}>
                {health.checks.api ? 'Online' : 'Offline'}
              </Badge>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg">
              <p className="text-slate-400 text-sm mb-1">Storage</p>
              <Badge className={health.checks.localStorage ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}>
                {health.checks.localStorage ? 'Available' : 'Unavailable'}
              </Badge>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg">
              <p className="text-slate-400 text-sm mb-1">Browser</p>
              <Badge className={health.checks.browser ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}>
                {health.checks.browser ? 'Compatible' : 'Issues'}
              </Badge>
            </div>
            <div className="bg-slate-800 p-3 rounded-lg">
              <p className="text-slate-400 text-sm mb-1">Environment</p>
              <Badge className="bg-blue-500/20 text-blue-400">
                {platformStatus.environment}
              </Badge>
            </div>
          </div>

          {health.performance.memoryUsage !== undefined && (
            <div className="bg-slate-800 p-3 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">Memory Usage</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500"
                    style={{ width: `${Math.min(health.performance.memoryUsage, 100)}%` }}
                  />
                </div>
                <span className="text-white text-sm">
                  {health.performance.memoryUsage.toFixed(1)}%
                </span>
              </div>
            </div>
          )}

          {health.errors.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm mb-2">System Errors</p>
              <ul className="space-y-1">
                {health.errors.map((error, i) => (
                  <li key={i} className="text-slate-300 text-xs">• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {recentErrors.length > 0 && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
              <p className="text-amber-400 text-sm mb-2">Recent Errors ({recentErrors.length})</p>
              <div className="space-y-2">
                {recentErrors.slice(0, 3).map((error, i) => (
                  <div key={i} className="text-xs">
                    <span className="text-slate-400">{error.category}:</span>
                    <span className="text-slate-300 ml-2">{error.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-slate-500 text-xs">
            Last checked: {health.timestamp.toLocaleTimeString()}
          </p>
        </div>
      )}
    </Card>
  );
}
