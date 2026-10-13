import { api } from './api';
import type { ImpactOutcome, ApiResponse, PaginationParams, FilterParams } from '../types';
import { API_ENDPOINTS } from '../lib/constants';

// Mock data for development
const mockImpacts: ImpactOutcome[] = [
  {
    id: "IMP-2025-0001",
    title: "Reforestation Project - Kenya",
    category: "environmental",
    outcome: "50,000 trees planted",
    beneficiaries: 12500,
    location: {
      country: "Kenya",
      region: "East Africa",
      coordinates: { lat: -1.286389, lng: 36.817223 }
    },
    rvtValue: 125000,
    status: "verified",
    verifiedBy: "AI + Satellite Imagery",
    verificationMethod: "hybrid",
    date: new Date("2025-03-15"),
    impact: {
      carbon: "2,500 tons CO2",
      biodiversity: "+15% species diversity",
      community: "125 jobs created"
    }
  },
  // Add more mock data as needed
];

export async function getImpacts(
  filters?: FilterParams,
  pagination?: PaginationParams
): Promise<ApiResponse<ImpactOutcome[]>> {
  // In development, return mock data
  if (process.env.NODE_ENV === 'development') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filtered = [...mockImpacts];
    
    // Apply filters
    if (filters?.category) {
      filtered = filtered.filter(i => i.category === filters.category);
    }
    if (filters?.status) {
      filtered = filtered.filter(i => i.status === filters.status);
    }
    if (filters?.search) {
      filtered = filtered.filter(i => 
        i.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
        i.location.country.toLowerCase().includes(filters.search!.toLowerCase())
      );
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
  
  // Production API call
  return api.get<ImpactOutcome[]>(API_ENDPOINTS.IMPACT, {
    ...filters,
    ...pagination,
  });
}

export async function getImpactById(id: string): Promise<ApiResponse<ImpactOutcome>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    const impact = mockImpacts.find(i => i.id === id);
    
    if (impact) {
      return { success: true, data: impact };
    }
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Impact not found' },
    };
  }
  
  return api.get<ImpactOutcome>(`${API_ENDPOINTS.IMPACT}/${id}`);
}

export async function createImpact(
  impact: Partial<ImpactOutcome>
): Promise<ApiResponse<ImpactOutcome>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newImpact: ImpactOutcome = {
      id: `IMP-${Date.now()}`,
      title: impact.title || '',
      category: impact.category || 'social',
      outcome: impact.outcome || '',
      beneficiaries: impact.beneficiaries || 0,
      location: impact.location || { country: '', region: '' },
      rvtValue: impact.rvtValue || 0,
      status: 'pending',
      verifiedBy: '',
      verificationMethod: 'ai',
      date: new Date(),
      impact: impact.impact || {},
    };
    
    mockImpacts.unshift(newImpact);
    return { success: true, data: newImpact };
  }
  
  return api.post<ImpactOutcome>(API_ENDPOINTS.IMPACT, impact);
}

export async function updateImpact(
  id: string,
  updates: Partial<ImpactOutcome>
): Promise<ApiResponse<ImpactOutcome>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockImpacts.findIndex(i => i.id === id);
    if (index !== -1) {
      mockImpacts[index] = { ...mockImpacts[index], ...updates };
      return { success: true, data: mockImpacts[index] };
    }
    
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Impact not found' },
    };
  }
  
  return api.patch<ImpactOutcome>(`${API_ENDPOINTS.IMPACT}/${id}`, updates);
}

export async function deleteImpact(id: string): Promise<ApiResponse<void>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockImpacts.findIndex(i => i.id === id);
    if (index !== -1) {
      mockImpacts.splice(index, 1);
      return { success: true };
    }
    
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Impact not found' },
    };
  }
  
  return api.delete(`${API_ENDPOINTS.IMPACT}/${id}`);
}

export async function verifyImpact(id: string): Promise<ApiResponse<ImpactOutcome>> {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const index = mockImpacts.findIndex(i => i.id === id);
    if (index !== -1) {
      mockImpacts[index].status = 'verified';
      mockImpacts[index].verifiedBy = 'AI + Blockchain';
      return { success: true, data: mockImpacts[index] };
    }
    
    return {
      success: false,
      error: { code: 'NOT_FOUND', message: 'Impact not found' },
    };
  }
  
  return api.post<ImpactOutcome>(`${API_ENDPOINTS.IMPACT}/${id}/verify`);
}
