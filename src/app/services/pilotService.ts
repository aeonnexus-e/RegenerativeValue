// Pilot Projects Service
import type { PilotProject } from '../types';

export const mockPilotProjects: PilotProject[] = [
  {
    id: 'pilot-pak-001',
    name: 'Pakistan Regenerative Agriculture Exchange',
    country: 'Pakistan',
    region: 'Punjab Province',
    type: 'agriculture',
    description: 'Converting carbon sequestration and biodiversity outcomes from regenerative agriculture into tradable digital bonds. Empowering 12,000+ smallholder farmers to transition from conventional to regenerative practices while creating verifiable impact assets.',
    timeline: {
      launched: new Date('2025-01-01'),
      currentPhase: 'Scaling',
      expectedCompletion: new Date('2027-12-31')
    },
    stakeholders: {
      localPartners: [
        'Punjab Farmers Cooperative',
        'Pakistan Agricultural Research Council',
        'Local NGO Coalition'
      ],
      funders: [
        'World Bank Climate Fund',
        'Green Climate Fund',
        'Impact Investment Coalition'
      ],
      communities: 45,
      beneficiaries: 12450
    },
    outcomes: {
      targetRUs: 500000,
      generatedRUs: 337500,
      bondValue: 10000000,
      verification: 'CIS + Satellite + IoT Sensors'
    },
    innovations: [
      'AI-powered soil health monitoring',
      'Blockchain-verified carbon credits',
      'Community-owned data governance',
      'Mobile-first farmer engagement platform',
      'Diaspora investment channels'
    ],
    status: 'scaling',
    metrics: {
      hectaresConverted: 34500,
      co2Sequestered: 33900,
      soilHealthImprovement: 67,
      farmerIncomeIncrease: 42,
      biodiversityIndex: 0.76,
      waterUseEfficiency: 28
    },
    learnings: [
      'Community ownership critical for adoption - 87% higher participation when farmers co-own verification systems',
      'Mobile-first approach essential - 94% of farmers access platform via smartphone',
      'Traditional knowledge integration improves outcomes by 34%',
      'Blended finance (grants + bonds) reduces risk and accelerates scaling',
      'Local language AI interfaces increased data quality by 56%'
    ]
  },
  {
    id: 'pilot-afg-001',
    name: 'Afghanistan Watershed Restoration Nexus',
    country: 'Afghanistan',
    region: 'Herat Province',
    type: 'watershed',
    description: 'Diaspora-financed watershed restoration and reforestation program that monetizes ecological recovery into resilience-backed bonds. Combines traditional Afghan water management knowledge with modern verification to restore degraded watersheds and create sustainable livelihoods.',
    timeline: {
      launched: new Date('2025-03-01'),
      currentPhase: 'Pilot',
      expectedCompletion: new Date('2028-02-28')
    },
    stakeholders: {
      localPartners: [
        'Herat Watershed Restoration Alliance',
        'Pashtun Traditional Knowledge Holders',
        'Afghan Environmental Protection Agency'
      ],
      funders: [
        'Afghan Diaspora Climate Coalition',
        'Islamic Development Bank',
        'UNDP Afghanistan'
      ],
      communities: 28,
      beneficiaries: 8920
    },
    outcomes: {
      targetRUs: 250000,
      generatedRUs: 181000,
      bondValue: 5000000,
      verification: 'Satellite + IoT Wells + Community Monitoring'
    },
    innovations: [
      'Diaspora-backed impact bonds',
      'Traditional qarez system digitization',
      'Women-led community verification',
      'Climate-resilient livelihood creation',
      'Cross-border water data sharing'
    ],
    status: 'pilot',
    metrics: {
      hectaresReforested: 3620,
      waterTableIncrease: 18.2,
      communityWellsRestored: 124,
      livelihoodsCreated: 892,
      watersavedMegaliters: 12400,
      erosionReduction: 67
    },
    learnings: [
      'Diaspora investment highly motivated - oversubscribed by 240%',
      'Women leadership in verification improved data quality and community trust',
      'Traditional knowledge essential - indigenous practices outperformed modern techniques in local conditions',
      'Security challenges require decentralized verification systems',
      'Mobile money integration critical for transparent disbursements'
    ]
  },
  {
    id: 'pilot-multi-001',
    name: 'South Asia Biodiversity Corridor',
    country: 'Multi-Country',
    region: 'India-Pakistan-Bangladesh',
    type: 'biodiversity',
    description: 'Cross-border biodiversity conservation initiative creating a connected ecological corridor across South Asia. First multi-sovereign Regenerative Outcome Bond backed by verified biodiversity metrics and ecosystem services.',
    timeline: {
      launched: new Date('2025-06-01'),
      currentPhase: 'Pilot',
      expectedCompletion: new Date('2030-12-31')
    },
    stakeholders: {
      localPartners: [
        'Wildlife Institute of India',
        'Pakistan Wildlife Foundation',
        'Bangladesh Forest Department',
        '15 Indigenous Communities'
      ],
      funders: [
        'Global Environment Facility',
        'European Investment Bank',
        'Asian Development Bank'
      ],
      communities: 156,
      beneficiaries: 45600
    },
    outcomes: {
      targetRUs: 1000000,
      generatedRUs: 425000,
      bondValue: 20000000,
      verification: 'Satellite + Camera Traps + eDNA + Community Rangers'
    },
    innovations: [
      'Multi-sovereign bond structure',
      'AI species identification from camera traps',
      'Indigenous Protected Areas integration',
      'Ecosystem services valuation model',
      'Cross-border MRV harmonization'
    ],
    status: 'pilot',
    metrics: {
      corridorLengthKm: 1240,
      speciesProtected: 234,
      habitatRestored: 42500,
      indigenousAreasRecognized: 15,
      ecotourismRevenue: 3400000,
      carbonStored: 212500
    },
    learnings: [
      'Multi-country coordination requires strong neutral broker - RVX platform enabled first tri-lateral environmental bond',
      'Indigenous Protected Areas show 3x better biodiversity outcomes than state-managed reserves',
      'AI camera trap analysis reduced monitoring costs by 78%',
      'Ecosystem services valuation creates additional revenue streams for communities',
      'Political tensions managed through transparent, blockchain-verified data'
    ]
  }
];

export async function getPilotProjects(): Promise<PilotProject[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPilotProjects), 300);
  });
}

export async function getPilotProject(id: string): Promise<PilotProject | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = mockPilotProjects.find(p => p.id === id);
      resolve(project || null);
    }, 200);
  });
}

export function getPilotMetrics() {
  return {
    totalPilots: 3,
    countries: 4,
    totalBeneficiaries: 66970,
    totalRUsGenerated: 943500,
    totalBondValue: 35000000,
    hectaresImpacted: 80620,
    co2Sequestered: 246400,
    successRate: 94.3,
    avgScalingTime: 18
  };
}
