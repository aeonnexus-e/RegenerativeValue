import { useState, useEffect, useCallback } from 'react';
import type { Project, ApiResponse, PaginationParams, FilterParams } from '../types';
import * as projectService from '../services/projectService';

interface UseProjectReturn {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  totalCount: number;
  createProject: (project: Partial<Project>) => Promise<void>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

export function useProject(
  filters?: FilterParams,
  pagination?: PaginationParams
): UseProjectReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await projectService.getProjects(filters, pagination);
      
      if (response.success && response.data) {
        setProjects(response.data);
        setTotalCount(response.meta?.total || response.data.length);
      } else {
        setError(response.error?.message || 'Failed to fetch projects');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [filters, pagination]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const createProject = useCallback(async (project: Partial<Project>) => {
    try {
      setError(null);
      const response = await projectService.createProject(project);
      
      if (response.success && response.data) {
        setProjects(prev => [response.data!, ...prev]);
        setTotalCount(prev => prev + 1);
      } else {
        throw new Error(response.error?.message || 'Failed to create project');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  const updateProject = useCallback(async (id: string, updates: Partial<Project>) => {
    try {
      setError(null);
      const response = await projectService.updateProject(id, updates);
      
      if (response.success && response.data) {
        setProjects(prev => prev.map(project => 
          project.id === id ? { ...project, ...response.data } : project
        ));
      } else {
        throw new Error(response.error?.message || 'Failed to update project');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  const deleteProject = useCallback(async (id: string) => {
    try {
      setError(null);
      const response = await projectService.deleteProject(id);
      
      if (response.success) {
        setProjects(prev => prev.filter(project => project.id !== id));
        setTotalCount(prev => prev - 1);
      } else {
        throw new Error(response.error?.message || 'Failed to delete project');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      throw err;
    }
  }, []);

  return {
    projects,
    isLoading,
    error,
    totalCount,
    createProject,
    updateProject,
    deleteProject,
    refetch: fetchProjects,
  };
}
