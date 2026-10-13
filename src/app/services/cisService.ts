// Climate Intelligence Stack Service
import type { CISVerification, SatelliteData, IoTData, CommunityData } from '../types';

// Mock data for Climate Intelligence Stack
export const mockCISVerifications: CISVerification[] = [
  {
    id: 'cis-001',
    projectId: 'proj-pak-001',
    verificationDate: new Date('2025-10-15'),
    dataSources: {
      satellite: [
        {
          source: 'Sentinel-2',
          timestamp: new Date('2025-10-14'),
          imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06',
          metrics: {
            ndvi: 0.78,
            landCover: 'Forest Recovery',
            changeDetection: 23.4
          },
          confidence: 0.94
        }
      ],
      iot: [
        {
          deviceId: 'soil-sensor-034',
          type: 'soil',
          timestamp: new Date('2025-10-15'),
          readings: {
            moisture: 42.3,
            ph: 6.8,
            nitrogen: 145,
            organicMatter: 3.2
          },
          validated: true
        }
      ],
      community: [
        {
          submittedBy: 'local-farmer-456',
          timestamp: new Date('2025-10-14'),
          type: 'photo',
          data: { photoCount: 15, gpsVerified: true },
          verified: true
        }
      ]
    },
    aiConfidenceScore: 0.92,
    status: 'verified',
    verifiedOutcomes: {
      co2Sequestered: 1247.5,
      hectaresRestored: 45.2,
      biodiversityIndex: 0.76,
      waterQuality: 8.2,
      soilHealth: 7.8
    },
    auditTrail: [
      {
        timestamp: new Date('2025-10-15T10:30:00'),
        action: 'Initial verification',
        performedBy: 'AI-CIS-Engine',
        details: 'All data sources validated'
      }
    ],
    nextVerificationDue: new Date('2025-11-15')
  },
  {
    id: 'cis-002',
    projectId: 'proj-afg-001',
    verificationDate: new Date('2025-10-18'),
    dataSources: {
      satellite: [
        {
          source: 'Landsat-9',
          timestamp: new Date('2025-10-17'),
          metrics: {
            ndvi: 0.65,
            landCover: 'Watershed Restoration',
            changeDetection: 18.7
          },
          confidence: 0.89
        }
      ],
      iot: [
        {
          deviceId: 'water-monitor-012',
          type: 'water',
          timestamp: new Date('2025-10-18'),
          readings: {
            turbidity: 12.3,
            ph: 7.4,
            dissolvedOxygen: 8.6,
            temperature: 18.2
          },
          validated: true
        }
      ],
      community: [
        {
          submittedBy: 'community-leader-789',
          timestamp: new Date('2025-10-17'),
          type: 'survey',
          data: { participants: 234, satisfaction: 4.6 },
          verified: true
        }
      ]
    },
    aiConfidenceScore: 0.88,
    status: 'verified',
    verifiedOutcomes: {
      co2Sequestered: 892.3,
      hectaresRestored: 32.1,
      biodiversityIndex: 0.68,
      waterQuality: 8.7,
      soilHealth: 7.2
    },
    auditTrail: [
      {
        timestamp: new Date('2025-10-18T14:20:00'),
        action: 'Verification completed',
        performedBy: 'AI-CIS-Engine',
        details: 'Multi-source validation successful'
      }
    ],
    nextVerificationDue: new Date('2025-11-18')
  }
];

export async function getCISVerifications(): Promise<CISVerification[]> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCISVerifications), 300);
  });
}

export async function getCISVerification(id: string): Promise<CISVerification | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const verification = mockCISVerifications.find(v => v.id === id);
      resolve(verification || null);
    }, 200);
  });
}

export async function triggerVerification(projectId: string): Promise<CISVerification> {
  // Simulate triggering a new verification
  return new Promise((resolve) => {
    setTimeout(() => {
      const newVerification: CISVerification = {
        id: `cis-${Date.now()}`,
        projectId,
        verificationDate: new Date(),
        dataSources: {
          satellite: [],
          iot: [],
          community: []
        },
        aiConfidenceScore: 0,
        status: 'pending',
        verifiedOutcomes: {
          co2Sequestered: 0,
          hectaresRestored: 0,
          biodiversityIndex: 0,
          waterQuality: 0,
          soilHealth: 0
        },
        auditTrail: [
          {
            timestamp: new Date(),
            action: 'Verification initiated',
            performedBy: 'System',
            details: 'Collecting data from sources'
          }
        ],
        nextVerificationDue: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      };
      resolve(newVerification);
    }, 500);
  });
}

export function getCISMetrics() {
  return {
    totalVerifications: 1456000,
    pendingVerifications: 42389,
    avgConfidenceScore: 0.91,
    dataSources: {
      satellite: 234,
      iot: 12456,
      community: 35678
    },
    verificationRate: 98.7,
    totalCO2Verified: 45678923,
    totalHectares: 234567
  };
}
