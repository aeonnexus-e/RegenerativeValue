import { api } from './api';
import type { Project, ApiResponse, PaginationParams, FilterParams } from '../types';
import { API_ENDPOINTS } from '../lib/constants';

// Mock data for development
const mockProjects: Project[] = [
  {
    id: 'PRJ-001',
    name: 'East Africa Clean Water Initiative',
    description: 'Installing sustainable water systems across rural communities',
    category: 'mixed',
    status: 'active',
    budget: {
      allocated: 5000000,
      spent: 3250000,
      currency: 'USD',
    },
    timeline: {
      startDate: new Date('2024-01-15'),
      endDate: new Date('2026-01-15'),
      milestones: [
        {
          id: 'M1',
          name: 'Phase 1 Completion',
          description: 'First 50 wells operational',
          dueDate: new Date('2024-12-31'),
          status: 'completed',
          completionPercentage: 100,
        },
        {
          id: 'M2',
          name: 'Phase 2 Rollout',
          description: 'Next 75 wells installation',
          dueDate: new Date('2025-06-30'),
          status: 'in-progress',
          completionPercentage: 45,
        },
      ],
    },
    stakeholders: {
      lead: 'UN Water',
      partners: ['UNICEF', 'Local NGOs'],
      beneficiaries: ['Community Groups'],
    },
    metrics: {
      rvtGenerated: 250000,
      beneficiariesReached: 75000,
      impactScore: 8.7,
    },
    location: ['Kenya', 'Tanzania', 'Uganda'],
  },
];

export async function getProjects(
  filters?: FilterParams,
  pagination?: PaginationParams
): Promise<ApiResponse<Project[]>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filtered = [...mockProjects];
    
    if (filters?.status) {
      filtered = filtered.filter(p => p.status === filters.status);
    }
    if (filters?.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    
    return {
      success: true,
      data: filtered,
      meta: {
        total: filtered.length,
        page: pagination?.page || 1,
        limit: pagination?.limit || 20,
      },
    };
  }
  
  return api.get<Project[]>(API_ENDPOINTS.PROJECTS, {
    ...filters,
    ...pagination,
  });
}

export async function getProjectById(id: string): Promise<ApiResponse<Project>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    const project = mockProjects.find(p => p.id === id);
    
    if (project) {
      return { success: true, data: project };
    }
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Project not found' },
    };
  }
  
  return api.get<Project>(`${API_ENDPOINTS.PROJECTS}/${id}`);
}

export async function createProject(
  project: Partial<Project>
): Promise<ApiResponse<Project>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newProject: Project = {
      id: `PRJ-${Date.now()}`,
      name: project.name || '',
      description: project.description || '',
      category: project.category || 'mixed',
      status: 'planning',
      budget: project.budget || { allocated: 0, spent: 0, currency: 'USD' },
      timeline: project.timeline || {
        startDate: new Date(),
        endDate: new Date(),
        milestones: [],
      },
      stakeholders: project.stakeholders || {
        lead: '',
        partners: [],
        beneficiaries: [],
      },
      metrics: {
        rvtGenerated: 0,
        beneficiariesReached: 0,
        impactScore: 0,
      },
      location: project.location || [],
    };
    
    mockProjects.unshift(newProject);
    return { success: true, data: newProject };
  }
  
  return api.post<Project>(API_ENDPOINTS.PROJECTS, project);
}

export async function updateProject(
  id: string,
  updates: Partial<Project>
): Promise<ApiResponse<Project>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockProjects.findIndex(p => p.id === id);
    if (index !== -1) {
      mockProjects[index] = { ...mockProjects[index], ...updates };
      return { success: true, data: mockProjects[index] };
    }
    
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Project not found' },
    };
  }
  
  return api.patch<Project>(`${API_ENDPOINTS.PROJECTS}/${id}`, updates);
}

export async function deleteProject(id: string): Promise<ApiResponse<void>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockProjects.findIndex(p => p.id === id);
    if (index !== -1) {
      mockProjects.splice(index, 1);
      return { success: true };
    }
    
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Project not found' },
    };
  }
  
  return api.delete(`${API_ENDPOINTS.PROJECTS}/${id}`);
}
