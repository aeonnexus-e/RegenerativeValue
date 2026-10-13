import { useState, useEffect, useCallback } from 'react';
import type { ImpactOutcome, ApiResponse, PaginationParams, FilterParams } from '../types';
import * as impactService from '../services/impactService';

interface UseImpactReturn {
  impacts: ImpactOutcome[];
  isLoading: boolean;
  error: string | null;
  totalCount: number;
  createImpact: (impact: Partial<ImpactOutcome>) => Promise<void>;
  updateImpact: (id: string, updates: Partial<ImpactOutcome>) => Promise<void>;
  deleteImpact: (id: string) => Promise<void>;
  verifyImpact: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export function useImpact(
  filters?: FilterParams,
  pagination?: PaginationParams
): UseImpactReturn {
  const [impacts, setImpacts] = useState<ImpactOutcome[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchImpacts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await impactService.getImpacts(filters, pagination);
      
      if (response.success && response.data) {
        setImpacts(response.data);
        setTotalCount(response.meta?.total || response.data.length);
      } else {
        setError(response.error?.message || 'Failed to fetch impacts');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [filters, pagination]);

  useEffect(() => {
    fetchImpacts();
  }, [fetchImpacts]);

  const createImpact = useCallback(async (impact: Partial<ImpactOutcome>) => {
    try {
      setError(null);
      const response = await impactService.createImpact(impact);
      
      if (response.success && response.data) {
        setImpacts(prev => [response.data!, ...prev]);
        setTotalCount(prev => prev + 1);
      } else {
        throw new Error(response.error?.message || 'Failed to create impact');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  const updateImpact = useCallback(async (id: string, updates: Partial<ImpactOutcome>) => {
    try {
      setError(null);
      const response = await impactService.updateImpact(id, updates);
      
      if (response.success && response.data) {
        setImpacts(prev => prev.map(impact => 
          impact.id === id ? { ...impact, ...response.data } : impact
        ));
      } else {
        throw new Error(response.error?.message || 'Failed to update impact');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  const deleteImpact = useCallback(async (id: string) => {
    try {
      setError(null);
      const response = await impactService.deleteImpact(id);
      
      if (response.success) {
        setImpacts(prev => prev.filter(impact => impact.id !== id));
        setTotalCount(prev => prev - 1);
      } else {
        throw new Error(response.error?.message || 'Failed to delete impact');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  const verifyImpact = useCallback(async (id: string) => {
    try {
      setError(null);
      const response = await impactService.verifyImpact(id);
      
      if (response.success && response.data) {
        setImpacts(prev => prev.map(impact => 
          impact.id === id ? { ...impact, status: 'verified' } : impact
        ));
      } else {
        throw new Error(response.error?.message || 'Failed to verify impact');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  return {
    impacts,
    isLoading,
    error,
    totalCount,
    createImpact,
    updateImpact,
    deleteImpact,
    verifyImpact,
    refetch: fetchImpacts,
  };
}
