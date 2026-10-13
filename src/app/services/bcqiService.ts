// Blockchain-Quantified Impact Service
import type { RegenerativeUnit, BlockchainTransaction } from '../types';

// Mock Regenerative Units
export const mockRegenerativeUnits: RegenerativeUnit[] = [
  {
    id: 'ru-001',
    tokenId: 'RU-PKG-2025-001247',
    blockchainHash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb4',
    impactType: 'carbon',
    quantifiedOutcome: {
      metric: 'CO2 Sequestered',
      value: 1247.5,
      unit: 'tonnes'
    },
    verification: {
      cisId: 'cis-001',
      verifiedAt: new Date('2025-10-15'),
      verifier: 'AI-CIS-Engine'
    },
    tradingStatus: 'tradable',
    currentOwner: 'investor-corp-234',
    issuanceDate: new Date('2025-10-16'),
    certificateUrl: 'https://certificates.rvx.global/ru-001',
    metadata: {
      projectId: 'proj-pak-001',
      location: 'Punjab, Pakistan',
      sdgAlignment: [13, 15, 2, 1]
    }
  },
  {
    id: 'ru-002',
    tokenId: 'RU-AFG-2025-000892',
    blockchainHash: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    impactType: 'water',
    quantifiedOutcome: {
      metric: 'Water Quality Improved',
      value: 892.3,
      unit: 'megalitres'
    },
    verification: {
      cisId: 'cis-002',
      verifiedAt: new Date('2025-10-18'),
      verifier: 'AI-CIS-Engine'
    },
    tradingStatus: 'tradable',
    currentOwner: 'diaspora-fund-567',
    issuanceDate: new Date('2025-10-19'),
    certificateUrl: 'https://certificates.rvx.global/ru-002',
    metadata: {
      projectId: 'proj-afg-001',
      location: 'Herat, Afghanistan',
      sdgAlignment: [6, 13, 15, 11]
    }
  },
  {
    id: 'ru-003',
    tokenId: 'RU-PKG-2025-003421',
    blockchainHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
    impactType: 'biodiversity',
    quantifiedOutcome: {
      metric: 'Biodiversity Index Increase',
      value: 0.76,
      unit: 'index points'
    },
    verification: {
      cisId: 'cis-001',
      verifiedAt: new Date('2025-10-15'),
      verifier: 'AI-CIS-Engine'
    },
    tradingStatus: 'locked',
    currentOwner: 'conservation-trust-123',
    issuanceDate: new Date('2025-10-16'),
    certificateUrl: 'https://certificates.rvx.global/ru-003',
    metadata: {
      projectId: 'proj-pak-001',
      location: 'Punjab, Pakistan',
      sdgAlignment: [15, 13, 14]
    }
  }
];

export const mockBlockchainTransactions: BlockchainTransaction[] = [
  {
    txHash: '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0',
    timestamp: new Date('2025-10-16T10:30:00'),
    type: 'mint',
    from: 'RVX-SPV',
    to: 'investor-corp-234',
    ruIds: ['ru-001'],
    value: 1247.5,
    gasUsed: 0.0023,
    status: 'confirmed'
  },
  {
    txHash: '0xb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
    timestamp: new Date('2025-10-19T14:45:00'),
    type: 'mint',
    from: 'RVX-SPV',
    to: 'diaspora-fund-567',
    ruIds: ['ru-002'],
    value: 892.3,
    gasUsed: 0.0019,
    status: 'confirmed'
  },
  {
    txHash: '0xc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2',
    timestamp: new Date('2025-10-20T09:15:00'),
    type: 'transfer',
    from: 'investor-corp-234',
    to: 'green-fund-890',
    ruIds: ['ru-001'],
    value: 1247.5,
    gasUsed: 0.0015,
    status: 'confirmed'
  }
];

export async function getRegenerativeUnits(): Promise<RegenerativeUnit[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRegenerativeUnits), 300);
  });
}

export async function getRegenerativeUnit(id: string): Promise<RegenerativeUnit | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ru = mockRegenerativeUnits.find(r => r.id === id);
      resolve(ru || null);
    }, 200);
  });
}

export async function mintRegenerativeUnit(data: {
  impactType: RegenerativeUnit['impactType'];
  quantifiedOutcome: RegenerativeUnit['quantifiedOutcome'];
  cisId: string;
  projectId: string;
  location: string;
}): Promise<RegenerativeUnit> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newRU: RegenerativeUnit = {
        id: `ru-${Date.now()}`,
        tokenId: `RU-${data.location.slice(0, 3).toUpperCase()}-${new Date().getFullYear()}-${Math.floor(Math.random() * 999999).toString().padStart(6, '0')}`,
        blockchainHash: `0x${Math.random().toString(16).slice(2, 42)}`,
        impactType: data.impactType,
        quantifiedOutcome: data.quantifiedOutcome,
        verification: {
          cisId: data.cisId,
          verifiedAt: new Date(),
          verifier: 'AI-CIS-Engine'
        },
        tradingStatus: 'tradable',
        currentOwner: 'RVX-SPV',
        issuanceDate: new Date(),
        certificateUrl: `https://certificates.rvx.global/ru-${Date.now()}`,
        metadata: {
          projectId: data.projectId,
          location: data.location,
          sdgAlignment: [13, 15]
        }
      };
      resolve(newRU);
    }, 1000);
  });
}

export async function getBlockchainTransactions(): Promise<BlockchainTransaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBlockchainTransactions), 300);
  });
}

export function getBCQIMetrics() {
  return {
    totalRUsIssued: 847234,
    totalRUsTraded: 423567,
    totalValue: 2340000000,
    averagePrice: 2764,
    marketCap: 1980000000,
    tradingVolume24h: 45678000,
    blockchainTransactions: 1234567,
    averageConfirmationTime: 2.3,
    networkFees: 0.0018
  };
}
