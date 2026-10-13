// Regenerative Outcome Bonds Service
import type { RegenerativeOutcomeBond, BondPerformance } from '../types';

// Mock Regenerative Outcome Bonds
export const mockRegenerativeOutcomeBonds: RegenerativeOutcomeBond[] = [
  {
    id: 'rob-001',
    bondId: 'ROB-PAK-2025-001',
    issuer: 'RVX Special Purpose Vehicle',
    spvAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    bondType: 'variable',
    faceValue: 10000000,
    currency: 'USD',
    couponRate: 4.5,
    maturityDate: new Date('2027-12-31'),
    issuanceDate: new Date('2025-01-01'),
    underlyingOutcomes: [
      {
        outcomeType: 'Carbon Sequestration',
        targetValue: 50000,
        verificationSchedule: 'Quarterly'
      },
      {
        outcomeType: 'Soil Health Improvement',
        targetValue: 4.5,
        verificationSchedule: 'Quarterly'
      },
      {
        outcomeType: 'Biodiversity Increase',
        targetValue: 0.8,
        verificationSchedule: 'Semi-Annual'
      }
    ],
    investors: [
      {
        investorId: 'inv-001',
        investorName: 'Green Climate Fund',
        investmentAmount: 5000000,
        investmentDate: new Date('2025-01-15'),
        expectedReturn: 6.2,
        currentReturn: 4.8,
        units: 500
      },
      {
        investorId: 'inv-002',
        investorName: 'Impact Investment Coalition',
        investmentAmount: 3000000,
        investmentDate: new Date('2025-02-01'),
        expectedReturn: 6.2,
        currentReturn: 4.8,
        units: 300
      },
      {
        investorId: 'inv-003',
        investorName: 'Sustainable Development Bank',
        investmentAmount: 2000000,
        investmentDate: new Date('2025-02-15'),
        expectedReturn: 6.2,
        currentReturn: 4.8,
        units: 200
      }
    ],
    currentValue: 10450000,
    performanceMultiplier: 1.045,
    status: 'active',
    riskRating: 'A-',
    impactScore: 87.3
  },
  {
    id: 'rob-002',
    bondId: 'ROB-AFG-2025-001',
    issuer: 'RVX Special Purpose Vehicle',
    spvAddress: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    bondType: 'hybrid',
    faceValue: 5000000,
    currency: 'USD',
    couponRate: 5.0,
    maturityDate: new Date('2028-02-28'),
    issuanceDate: new Date('2025-03-01'),
    underlyingOutcomes: [
      {
        outcomeType: 'Watershed Restoration',
        targetValue: 5000,
        verificationSchedule: 'Quarterly'
      },
      {
        outcomeType: 'Water Availability',
        targetValue: 15,
        verificationSchedule: 'Monthly'
      },
      {
        outcomeType: 'Community Resilience',
        targetValue: 8.0,
        verificationSchedule: 'Quarterly'
      }
    ],
    investors: [
      {
        investorId: 'inv-004',
        investorName: 'Afghan Diaspora Climate Coalition',
        investmentAmount: 3000000,
        investmentDate: new Date('2025-03-15'),
        expectedReturn: 7.5,
        currentReturn: 6.2,
        units: 600
      },
      {
        investorId: 'inv-005',
        investorName: 'Islamic Development Bank',
        investmentAmount: 2000000,
        investmentDate: new Date('2025-04-01'),
        expectedReturn: 7.5,
        currentReturn: 6.2,
        units: 400
      }
    ],
    currentValue: 5320000,
    performanceMultiplier: 1.064,
    status: 'active',
    riskRating: 'BBB+',
    impactScore: 92.1
  },
  {
    id: 'rob-003',
    bondId: 'ROB-MULTI-2025-001',
    issuer: 'RVX Special Purpose Vehicle',
    spvAddress: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    bondType: 'fixed',
    faceValue: 20000000,
    currency: 'USD',
    couponRate: 4.0,
    maturityDate: new Date('2030-12-31'),
    issuanceDate: new Date('2025-06-01'),
    underlyingOutcomes: [
      {
        outcomeType: 'Multi-Country Reforestation',
        targetValue: 100000,
        verificationSchedule: 'Quarterly'
      },
      {
        outcomeType: 'Carbon Credits Generated',
        targetValue: 500000,
        verificationSchedule: 'Quarterly'
      }
    ],
    investors: [
      {
        investorId: 'inv-006',
        investorName: 'Global Environment Facility',
        investmentAmount: 10000000,
        investmentDate: new Date('2025-06-15'),
        expectedReturn: 5.8,
        currentReturn: 2.1,
        units: 1000
      },
      {
        investorId: 'inv-007',
        investorName: 'European Investment Bank',
        investmentAmount: 10000000,
        investmentDate: new Date('2025-07-01'),
        expectedReturn: 5.8,
        currentReturn: 2.1,
        units: 1000
      }
    ],
    currentValue: 20850000,
    performanceMultiplier: 1.0425,
    status: 'active',
    riskRating: 'AA-',
    impactScore: 78.9
  }
];

// Mock Bond Performance Data
export const mockBondPerformances: BondPerformance[] = [
  {
    bondId: 'rob-001',
    reportDate: new Date('2025-10-01'),
    outcomeAchievement: 67.8,
    carbonSequestered: 33900,
    hectaresRestored: 3400,
    beneficiariesReached: 12450,
    performanceScore: 87.3,
    couponAdjustment: 0.3,
    marketValue: 10450000
  },
  {
    bondId: 'rob-002',
    reportDate: new Date('2025-10-15'),
    outcomeAchievement: 72.4,
    carbonSequestered: 18600,
    hectaresRestored: 3620,
    beneficiariesReached: 8920,
    performanceScore: 92.1,
    couponAdjustment: 0.5,
    marketValue: 5320000
  },
  {
    bondId: 'rob-003',
    reportDate: new Date('2025-10-01'),
    outcomeAchievement: 42.5,
    carbonSequestered: 212500,
    hectaresRestored: 42500,
    beneficiariesReached: 45600,
    performanceScore: 78.9,
    couponAdjustment: 0.1,
    marketValue: 20850000
  }
];

export async function getRegenerativeOutcomeBonds(): Promise<RegenerativeOutcomeBond[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRegenerativeOutcomeBonds), 300);
  });
}

export async function getRegenerativeOutcomeBond(id: string): Promise<RegenerativeOutcomeBond | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bond = mockRegenerativeOutcomeBonds.find(b => b.id === id);
      resolve(bond || null);
    }, 200);
  });
}

export async function getBondPerformance(bondId: string): Promise<BondPerformance | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performance = mockBondPerformances.find(p => p.bondId === bondId);
      resolve(performance || null);
    }, 200);
  });
}

export async function issueRegenerativeOutcomeBond(data: {
  bondType: RegenerativeOutcomeBond['bondType'];
  faceValue: number;
  couponRate: number;
  maturityYears: number;
  underlyingOutcomes: RegenerativeOutcomeBond['underlyingOutcomes'];
}): Promise<RegenerativeOutcomeBond> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBond: RegenerativeOutcomeBond = {
        id: `rob-${Date.now()}`,
        bondId: `ROB-${new Date().getFullYear()}-${Math.floor(Math.random() * 999).toString().padStart(3, '0')}`,
        issuer: 'RVX Special Purpose Vehicle',
        spvAddress: `0x${Math.random().toString(16).slice(2, 42)}`,
        bondType: data.bondType,
        faceValue: data.faceValue,
        currency: 'USD',
        couponRate: data.couponRate,
        maturityDate: new Date(Date.now() + data.maturityYears * 365 * 24 * 60 * 60 * 1000),
        issuanceDate: new Date(),
        underlyingOutcomes: data.underlyingOutcomes,
        investors: [],
        currentValue: data.faceValue,
        performanceMultiplier: 1.0,
        status: 'offering',
        riskRating: 'BBB',
        impactScore: 0
      };
      resolve(newBond);
    }, 1000);
  });
}

export async function investInBond(
  bondId: string,
  investorId: string,
  investorName: string,
  amount: number
): Promise<{ success: boolean; units: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const units = Math.floor(amount / 10000);
      resolve({ success: true, units });
    }, 600);
  });
}

export function getROBMetrics() {
  return {
    totalBondsIssued: 234,
    activeOfferings: 42,
    totalValueIssued: 15000000000,
    totalInvestment: 12450000000,
    averageCouponRate: 4.8,
    averageImpactScore: 85.7,
    totalCO2Backed: 2340000,
    totalHectaresBacked: 567890,
    defaultRate: 0.8,
    averagePerformanceMultiplier: 1.067
  };
}
