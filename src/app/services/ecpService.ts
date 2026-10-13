// Ethical Commons Protocol Service
import type { GovernanceStake, RevenueDistribution, EthicalAIAudit } from '../types';

// Mock Governance Stakes
export const mockGovernanceStakes: GovernanceStake[] = [
  {
    id: 'stake-001',
    stakeholderType: 'community',
    stakeholder: 'Punjab Farmers Cooperative',
    projectId: 'proj-pak-001',
    votingPower: 35,
    revenueShare: 40,
    contributions: [
      {
        id: 'contrib-001',
        type: 'land',
        description: '5000 hectares of farmland',
        valuation: 2000000,
        date: new Date('2025-01-01')
      },
      {
        id: 'contrib-002',
        type: 'labor',
        description: 'Community participation in restoration',
        valuation: 500000,
        date: new Date('2025-01-01')
      }
    ],
    rights: ['Land ownership', 'Decision making', 'Revenue sharing', 'Knowledge IP'],
    joinedAt: new Date('2025-01-01')
  },
  {
    id: 'stake-002',
    stakeholderType: 'indigenous',
    stakeholder: 'Pashtun Traditional Knowledge Holders',
    projectId: 'proj-afg-001',
    votingPower: 25,
    revenueShare: 30,
    contributions: [
      {
        id: 'contrib-003',
        type: 'knowledge',
        description: 'Traditional watershed management practices',
        valuation: 800000,
        date: new Date('2025-03-01')
      },
      {
        id: 'contrib-004',
        type: 'land',
        description: 'Sacred forest conservation areas',
        valuation: 1200000,
        date: new Date('2025-03-01')
      }
    ],
    rights: ['Cultural heritage protection', 'Knowledge IP', 'Revenue sharing', 'Veto power on sacred sites'],
    joinedAt: new Date('2025-03-01')
  },
  {
    id: 'stake-003',
    stakeholderType: 'innovator',
    stakeholder: 'AgriTech Solutions Pvt Ltd',
    projectId: 'proj-pak-001',
    votingPower: 15,
    revenueShare: 20,
    contributions: [
      {
        id: 'contrib-005',
        type: 'technology',
        description: 'IoT sensor network and monitoring platform',
        valuation: 1500000,
        date: new Date('2025-01-15')
      }
    ],
    rights: ['Technology licensing', 'Revenue sharing', 'Data access'],
    joinedAt: new Date('2025-01-15')
  },
  {
    id: 'stake-004',
    stakeholderType: 'investor',
    stakeholder: 'World Bank Climate Fund',
    projectId: 'proj-pak-001',
    votingPower: 20,
    revenueShare: 35,
    contributions: [
      {
        id: 'contrib-006',
        type: 'capital',
        description: 'Initial funding and guarantees',
        valuation: 5000000,
        date: new Date('2025-01-01')
      }
    ],
    rights: ['Financial reporting', 'Audit access', 'Revenue sharing'],
    joinedAt: new Date('2025-01-01')
  }
];

// Mock Revenue Distributions
export const mockRevenueDistributions: RevenueDistribution[] = [
  {
    id: 'revdist-001',
    projectId: 'proj-pak-001',
    totalRevenue: 1000000,
    currency: 'USD',
    distributionDate: new Date('2025-10-01'),
    allocations: [
      {
        stakeholderId: 'stake-001',
        stakeholderName: 'Punjab Farmers Cooperative',
        amount: 400000,
        percentage: 40,
        txHash: '0xabc123def456'
      },
      {
        stakeholderId: 'stake-004',
        stakeholderName: 'World Bank Climate Fund',
        amount: 350000,
        percentage: 35,
        txHash: '0xdef456ghi789'
      },
      {
        stakeholderId: 'stake-003',
        stakeholderName: 'AgriTech Solutions Pvt Ltd',
        amount: 200000,
        percentage: 20,
        txHash: '0xghi789jkl012'
      },
      {
        stakeholderId: 'community-reserve',
        stakeholderName: 'Community Development Reserve',
        amount: 50000,
        percentage: 5,
        txHash: '0xjkl012mno345'
      }
    ],
    status: 'completed',
    blockchainVerified: true
  },
  {
    id: 'revdist-002',
    projectId: 'proj-afg-001',
    totalRevenue: 750000,
    currency: 'USD',
    distributionDate: new Date('2025-10-15'),
    allocations: [
      {
        stakeholderId: 'stake-002',
        stakeholderName: 'Pashtun Traditional Knowledge Holders',
        amount: 225000,
        percentage: 30,
        txHash: '0xmno345pqr678'
      },
      {
        stakeholderId: 'diaspora-fund',
        stakeholderName: 'Afghan Diaspora Climate Coalition',
        amount: 375000,
        percentage: 50,
        txHash: '0xpqr678stu901'
      },
      {
        stakeholderId: 'local-implementer',
        stakeholderName: 'Herat Watershed Restoration Alliance',
        amount: 150000,
        percentage: 20,
        txHash: '0xstu901vwx234'
      }
    ],
    status: 'completed',
    blockchainVerified: true
  }
];

// Mock Ethical AI Audits
export const mockEthicalAIAudits: EthicalAIAudit[] = [
  {
    id: 'audit-001',
    timestamp: new Date('2025-10-01'),
    system: 'Climate Intelligence Stack',
    auditor: 'Independent AI Ethics Council',
    checks: {
      fairness: 0.94,
      transparency: 0.91,
      accountability: 0.96,
      privacy: 0.89,
      humanRights: 0.87
    },
    issues: [
      'Data representation gap in remote regions',
      'Language accessibility for non-English speakers'
    ],
    recommendations: [
      'Expand IoT sensor deployment to underrepresented areas',
      'Implement multilingual interface for community data submission',
      'Increase training data diversity'
    ],
    complianceScore: 0.91,
    certificationValid: true
  },
  {
    id: 'audit-002',
    timestamp: new Date('2025-10-15'),
    system: 'Outcome Verification Engine',
    auditor: 'Independent AI Ethics Council',
    checks: {
      fairness: 0.92,
      transparency: 0.95,
      accountability: 0.93,
      privacy: 0.91,
      humanRights: 0.90
    },
    issues: [
      'Potential bias in agricultural outcome weighting'
    ],
    recommendations: [
      'Review and rebalance outcome scoring algorithms',
      'Include more diverse community feedback in verification'
    ],
    complianceScore: 0.92,
    certificationValid: true
  }
];

export async function getGovernanceStakes(projectId?: string): Promise<GovernanceStake[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const stakes = projectId 
        ? mockGovernanceStakes.filter(s => s.projectId === projectId)
        : mockGovernanceStakes;
      resolve(stakes);
    }, 300);
  });
}

export async function getRevenueDistributions(projectId?: string): Promise<RevenueDistribution[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const distributions = projectId
        ? mockRevenueDistributions.filter(d => d.projectId === projectId)
        : mockRevenueDistributions;
      resolve(distributions);
    }, 300);
  });
}

export async function getEthicalAIAudits(): Promise<EthicalAIAudit[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockEthicalAIAudits), 300);
  });
}

export async function createGovernanceStake(data: {
  stakeholderType: GovernanceStake['stakeholderType'];
  stakeholder: string;
  projectId: string;
  votingPower: number;
  revenueShare: number;
  contributions: Omit<GovernanceStake['contributions'][0], 'id'>[];
  rights: string[];
}): Promise<GovernanceStake> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newStake: GovernanceStake = {
        id: `stake-${Date.now()}`,
        stakeholderType: data.stakeholderType,
        stakeholder: data.stakeholder,
        projectId: data.projectId,
        votingPower: data.votingPower,
        revenueShare: data.revenueShare,
        contributions: data.contributions.map((c, i) => ({
          ...c,
          id: `contrib-${Date.now()}-${i}`
        })),
        rights: data.rights,
        joinedAt: new Date()
      };
      resolve(newStake);
    }, 600);
  });
}

export async function distributeRevenue(
  projectId: string,
  totalRevenue: number
): Promise<RevenueDistribution> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get stakes for this project
      const stakes = mockGovernanceStakes.filter(s => s.projectId === projectId);
      
      const newDistribution: RevenueDistribution = {
        id: `revdist-${Date.now()}`,
        projectId,
        totalRevenue,
        currency: 'USD',
        distributionDate: new Date(),
        allocations: stakes.map(stake => ({
          stakeholderId: stake.id,
          stakeholderName: stake.stakeholder,
          amount: (totalRevenue * stake.revenueShare) / 100,
          percentage: stake.revenueShare,
          txHash: `0x${Math.random().toString(16).slice(2, 42)}`
        })),
        status: 'pending',
        blockchainVerified: false
      };
      resolve(newDistribution);
    }, 800);
  });
}

export function getECPMetrics() {
  return {
    totalStakeholders: 12456,
    activeProjects: 892,
    totalRevenueDistributed: 45000000,
    averageRevenueShare: {
      community: 38,
      indigenous: 28,
      innovator: 18,
      investor: 32,
      government: 15
    },
    ethicalAIScore: 0.92,
    governanceParticipation: 87.3,
    disputeResolutionRate: 94.2,
    communityOwnership: 42.5
  };
}
