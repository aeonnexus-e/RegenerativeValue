// Outcome-Oriented Regenerative Engine Service
import type { OutcomeBasedContract, OutcomeTarget, DisbursementTrigger } from '../types';

// Mock Outcome-Based Contracts
export const mockOutcomeContracts: OutcomeBasedContract[] = [
  {
    id: 'obc-001',
    contractAddress: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    projectId: 'proj-pak-001',
    funder: 'World Bank Climate Fund',
    implementer: 'Pakistan Regenerative Agriculture Cooperative',
    totalFunding: 5000000,
    currency: 'USD',
    outcomes: [
      {
        id: 'outcome-001',
        description: 'Carbon sequestration through regenerative agriculture',
        metric: 'CO2 sequestered',
        targetValue: 50000,
        currentValue: 32450,
        unit: 'tonnes',
        verificationMethod: 'CIS + Satellite',
        fundingAllocation: 2000000,
        achieved: false
      },
      {
        id: 'outcome-002',
        description: 'Soil health improvement across farmland',
        metric: 'Soil organic matter',
        targetValue: 4.5,
        currentValue: 3.8,
        unit: 'percentage',
        verificationMethod: 'IoT Sensors + Lab Testing',
        fundingAllocation: 1500000,
        achieved: false
      },
      {
        id: 'outcome-003',
        description: 'Farmer income increase',
        metric: 'Average income increase',
        targetValue: 40,
        currentValue: 42,
        unit: 'percentage',
        verificationMethod: 'Community Surveys',
        fundingAllocation: 1500000,
        achieved: true,
        achievedDate: new Date('2025-09-15')
      }
    ],
    disbursementSchedule: [
      {
        id: 'disb-001',
        outcomeId: 'outcome-003',
        thresholdValue: 40,
        amount: 1500000,
        triggered: true,
        triggeredAt: new Date('2025-09-16'),
        txHash: '0xabc123def456',
        status: 'disbursed'
      },
      {
        id: 'disb-002',
        outcomeId: 'outcome-001',
        thresholdValue: 50000,
        amount: 2000000,
        triggered: false,
        status: 'pending'
      }
    ],
    status: 'active',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2026-12-31'),
    performanceScore: 67.8
  },
  {
    id: 'obc-002',
    contractAddress: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    projectId: 'proj-afg-001',
    funder: 'Afghan Diaspora Climate Coalition',
    implementer: 'Herat Watershed Restoration Alliance',
    totalFunding: 3000000,
    currency: 'USD',
    outcomes: [
      {
        id: 'outcome-004',
        description: 'Watershed restoration and reforestation',
        metric: 'Hectares reforested',
        targetValue: 5000,
        currentValue: 3240,
        unit: 'hectares',
        verificationMethod: 'Satellite + Ground Verification',
        fundingAllocation: 1800000,
        achieved: false
      },
      {
        id: 'outcome-005',
        description: 'Water availability improvement',
        metric: 'Water table increase',
        targetValue: 15,
        currentValue: 18.2,
        unit: 'meters',
        verificationMethod: 'IoT Monitoring Wells',
        fundingAllocation: 1200000,
        achieved: true,
        achievedDate: new Date('2025-10-01')
      }
    ],
    disbursementSchedule: [
      {
        id: 'disb-003',
        outcomeId: 'outcome-005',
        thresholdValue: 15,
        amount: 1200000,
        triggered: true,
        triggeredAt: new Date('2025-10-02'),
        txHash: '0xdef789ghi012',
        status: 'disbursed'
      },
      {
        id: 'disb-004',
        outcomeId: 'outcome-004',
        thresholdValue: 5000,
        amount: 1800000,
        triggered: false,
        status: 'pending'
      }
    ],
    status: 'active',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2027-02-28'),
    performanceScore: 72.4
  }
];

export async function getOutcomeContracts(): Promise<OutcomeBasedContract[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOutcomeContracts), 300);
  });
}

export async function getOutcomeContract(id: string): Promise<OutcomeBasedContract | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contract = mockOutcomeContracts.find(c => c.id === id);
      resolve(contract || null);
    }, 200);
  });
}

export async function createOutcomeContract(data: {
  projectId: string;
  funder: string;
  implementer: string;
  totalFunding: number;
  outcomes: Omit<OutcomeTarget, 'id' | 'currentValue' | 'achieved'>[];
}): Promise<OutcomeBasedContract> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newContract: OutcomeBasedContract = {
        id: `obc-${Date.now()}`,
        contractAddress: `0x${Math.random().toString(16).slice(2, 42)}`,
        projectId: data.projectId,
        funder: data.funder,
        implementer: data.implementer,
        totalFunding: data.totalFunding,
        currency: 'USD',
        outcomes: data.outcomes.map((o, i) => ({
          ...o,
          id: `outcome-${Date.now()}-${i}`,
          currentValue: 0,
          achieved: false
        })),
        disbursementSchedule: data.outcomes.map((o, i) => ({
          id: `disb-${Date.now()}-${i}`,
          outcomeId: `outcome-${Date.now()}-${i}`,
          thresholdValue: o.targetValue,
          amount: o.fundingAllocation,
          triggered: false,
          status: 'pending' as const
        })),
        status: 'active',
        startDate: new Date(),
        endDate: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000),
        performanceScore: 0
      };
      resolve(newContract);
    }, 800);
  });
}

export async function updateOutcomeProgress(
  contractId: string,
  outcomeId: string,
  newValue: number
): Promise<{ triggered: boolean; disbursementId?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate checking if outcome target is met and triggering disbursement
      const contract = mockOutcomeContracts.find(c => c.id === contractId);
      const outcome = contract?.outcomes.find(o => o.id === outcomeId);
      
      if (outcome && newValue >= outcome.targetValue) {
        resolve({
          triggered: true,
          disbursementId: `disb-${Date.now()}`
        });
      } else {
        resolve({ triggered: false });
      }
    }, 500);
  });
}

export function getOOREMetrics() {
  return {
    totalContracts: 1247,
    activeContracts: 892,
    totalFunding: 2400000000,
    fundsDisbursed: 1680000000,
    fundsLocked: 720000000,
    averagePerformanceScore: 74.3,
    outcomesAchieved: 3456,
    outcomesInProgress: 2189,
    totalDisbursements: 4567,
    avgDisbursementTime: 2.3
  };
}
