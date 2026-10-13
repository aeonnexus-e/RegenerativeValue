// Core RVX Types
export interface RVToken {
  id: string;
  value: number;
  impactId: string;
  holder: string;
  status: 'active' | 'locked' | 'traded' | 'redeemed';
  createdAt: Date;
  lastTraded?: Date;
}

export interface ImpactOutcome {
  id: string;
  title: string;
  category: 'environmental' | 'social' | 'economic';
  outcome: string;
  beneficiaries: number;
  location: {
    country: string;
    region: string;
    coordinates?: { lat: number; lng: number };
  };
  rvtValue: number;
  status: 'pending' | 'verified' | 'rejected' | 'archived';
  verifiedBy: string;
  verificationMethod: 'ai' | 'blockchain' | 'manual' | 'hybrid';
  date: Date;
  impact: Record<string, string | number>;
  metadata?: Record<string, any>;
}

export interface Beneficiary {
  id: string;
  name: string;
  type: 'individual' | 'community' | 'organization';
  location: {
    country: string;
    region: string;
    coordinates?: { lat: number; lng: number };
  };
  registeredAt: Date;
  status: 'active' | 'inactive' | 'suspended';
  programs: string[];
  totalImpact: number;
  metadata?: Record<string, any>;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'environmental' | 'social' | 'economic' | 'mixed';
  status: 'planning' | 'active' | 'paused' | 'completed' | 'cancelled';
  budget: {
    allocated: number;
    spent: number;
    currency: string;
  };
  timeline: {
    startDate: Date;
    endDate: Date;
    milestones: Milestone[];
  };
  stakeholders: {
    lead: string;
    partners: string[];
    beneficiaries: string[];
  };
  metrics: {
    rvtGenerated: number;
    beneficiariesReached: number;
    impactScore: number;
  };
  location: string[];
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'delayed';
  completionPercentage: number;
}

export interface FundingFlow {
  id: string;
  type: 'grant' | 'loan' | 'investment' | 'donation';
  source: string;
  destination: string;
  amount: number;
  currency: string;
  status: 'pending' | 'approved' | 'disbursed' | 'completed' | 'rejected';
  purpose: string;
  projectId?: string;
  createdAt: Date;
  disbursedAt?: Date;
  conditions?: string[];
  smartContractId?: string;
}

export interface MarketplaceListing {
  id: string;
  type: 'rvt' | 'goods' | 'services';
  seller: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  quantity: number;
  availableQuantity: number;
  status: 'active' | 'sold' | 'expired' | 'cancelled';
  category: string;
  images?: string[];
  createdAt: Date;
  expiresAt?: Date;
}

export interface ResilienceMetrics {
  regionId: string;
  regionName: string;
  score: number;
  indicators: {
    economic: number;
    social: number;
    environmental: number;
    governance: number;
  };
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  trends: {
    period: string;
    change: number;
  }[];
  lastUpdated: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  permissions: Permission[];
  createdAt: Date;
  lastLogin?: Date;
  status: 'active' | 'inactive' | 'suspended';
}

export type UserRole = 
  | 'admin'
  | 'government'
  | 'ngo'
  | 'donor'
  | 'citizen'
  | 'vendor'
  | 'researcher'
  | 'policy_maker';

export type Permission = 
  | 'impact.create'
  | 'impact.verify'
  | 'impact.view'
  | 'project.create'
  | 'project.manage'
  | 'funding.approve'
  | 'funding.view'
  | 'marketplace.trade'
  | 'analytics.view'
  | 'admin.all';

export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  search?: string;
  category?: string;
  status?: string;
  dateFrom?: Date;
  dateTo?: Date;
  [key: string]: any;
}

// ===========================
// Innovation Pillar Types
// ===========================

// Climate Intelligence Stack (CIS)
export interface SatelliteData {
  source: string;
  timestamp: Date;
  imageUrl?: string;
  metrics: {
    ndvi: number;
    landCover: string;
    changeDetection: number;
  };
  confidence: number;
}

export interface IoTData {
  deviceId: string;
  type: 'soil' | 'water' | 'air' | 'weather';
  timestamp: Date;
  readings: Record<string, number>;
  validated: boolean;
}

export interface CommunityData {
  submittedBy: string;
  timestamp: Date;
  type: 'photo' | 'survey' | 'measurement';
  data: Record<string, any>;
  verified: boolean;
}

export interface CISVerification {
  id: string;
  projectId: string;
  verificationDate: Date;
  dataSources: {
    satellite: SatelliteData[];
    iot: IoTData[];
    community: CommunityData[];
  };
  aiConfidenceScore: number;
  status: 'pending' | 'verified' | 'failed';
  verifiedOutcomes: {
    co2Sequestered: number;
    hectaresRestored: number;
    biodiversityIndex: number;
    waterQuality: number;
    soilHealth: number;
  };
  auditTrail: Array<{
    timestamp: Date;
    action: string;
    performedBy: string;
    details: string;
  }>;
  nextVerificationDue: Date;
}

// Blockchain-Quantified Impact (BCQI)
export interface RegenerativeUnit {
  id: string;
  tokenId: string;
  impactType: 'carbon' | 'biodiversity' | 'water' | 'soil' | 'social' | 'economic';
  quantifiedOutcome: {
    metric: string;
    value: number;
    unit: string;
  };
  cisId: string;
  projectId: string;
  verification: {
    verifiedAt: Date;
    verifier: string;
    confidenceScore: number;
  };
  blockchainHash: string;
  tradingStatus: 'tradable' | 'locked' | 'retired' | 'reserved';
  currentOwner: string;
  priceHistory: Array<{
    date: Date;
    price: number;
    buyer?: string;
    seller?: string;
  }>;
  metadata: {
    location: string;
    timeframe: string;
    methodology: string;
    sdgAlignment: number[];
  };
  certificateUrl: string;
  mintedAt: Date;
}

export interface BlockchainTransaction {
  txHash: string;
  blockNumber: number;
  timestamp: Date;
  type: 'mint' | 'transfer' | 'retire' | 'lock';
  from: string;
  to: string;
  value: number;
  gasUsed: number;
  status: 'pending' | 'confirmed' | 'failed';
  ruIds: string[];
}

// Outcome-Oriented Regenerative Engine (OORE)
export interface OutcomeTarget {
  id: string;
  description: string;
  metric: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  achieved: boolean;
  fundingAllocation: number;
  verificationSchedule: string;
}

export interface DisbursementTrigger {
  id: string;
  outcomeId: string;
  threshold: number;
  amount: number;
  status: 'pending' | 'triggered' | 'disbursed' | 'cancelled';
  triggeredAt?: Date;
  disbursedAt?: Date;
}

export interface OutcomeBasedContract {
  id: string;
  contractAddress: string;
  projectId: string;
  funder: string;
  recipient: string;
  totalFunding: number;
  currency: string;
  status: 'active' | 'paused' | 'completed' | 'cancelled';
  outcomes: OutcomeTarget[];
  disbursementSchedule: DisbursementTrigger[];
  performanceScore: number;
  startDate: Date;
  endDate: Date;
  cisIntegration: boolean;
}

// Ethical Commons Protocol (ECP)
export interface GovernanceStake {
  id: string;
  stakeholderType: 'community' | 'indigenous' | 'innovator' | 'investor' | 'government';
  stakeholder: string;
  projectId: string;
  votingPower: number;
  revenueShare: number;
  contributions: Array<{
    id: string;
    type: string;
    description: string;
    valuation: number;
    date: Date;
  }>;
  rights: string[];
  joinedAt: Date;
}

export interface RevenueDistribution {
  id: string;
  projectId: string;
  distributionDate: Date;
  totalRevenue: number;
  currency: string;
  allocations: Array<{
    stakeholderId: string;
    stakeholderName: string;
    percentage: number;
    amount: number;
    txHash?: string;
  }>;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  blockchainVerified: boolean;
}

export interface EthicalAIAudit {
  id: string;
  system: string;
  timestamp: Date;
  auditor: string;
  complianceScore: number;
  checks: {
    fairness: number;
    transparency: number;
    accountability: number;
    privacy: number;
    humanRights: number;
  };
  issues: string[];
  recommendations: string[];
  certificationValid: boolean;
}

// Regenerative Outcome Bonds (ROB)
export interface RegenerativeOutcomeBond {
  id: string;
  bondId: string;
  issuer: string;
  bondType: 'carbon' | 'biodiversity' | 'water' | 'mixed';
  faceValue: number;
  currentValue: number;
  couponRate: number;
  issueDate: Date;
  maturityDate: Date;
  status: 'active' | 'matured' | 'defaulted' | 'redeemed';
  underlyingOutcomes: Array<{
    outcomeType: string;
    targetValue: number;
    cisId: string;
    verificationSchedule: string;
  }>;
  investors: Array<{
    investorId: string;
    investorName: string;
    investmentAmount: number;
    shares: number;
  }>;
  performanceMultiplier: number;
  impactScore: number;
  riskRating: string;
  prospectusUrl?: string;
}

export interface BondPerformance {
  bondId: string;
  date: Date;
  outcomeProgress: number;
  valueChange: number;
  impactScoreChange: number;
  marketPrice: number;
}

// Pilot Projects
export interface PilotProject {
  id: string;
  name: string;
  country: string;
  region: string;
  type: 'agriculture' | 'watershed' | 'biodiversity' | 'energy' | 'mixed';
  status: 'pilot' | 'scaling' | 'operational';
  description: string;
  timeline: {
    launched: Date;
    currentPhase: string;
    nextMilestone: Date;
  };
  stakeholders: {
    communities: number;
    beneficiaries: number;
    localPartners: string[];
    funders: string[];
  };
  outcomes: {
    targetRUs: number;
    generatedRUs: number;
    bondValue: number;
    verification: string;
  };
  metrics: Record<string, number | string>;
  innovations: string[];
  learnings: string[];
}

// ===========================
// Advanced Innovation Types
// ===========================

// 1. Autonomous Data Intelligence (CRAFT)
export interface CRAFTDataPoint {
  id: string;
  type: 'ecological' | 'social' | 'economic';
  metric: string;
  value: number;
  timestamp: Date;
  context: {
    location: string;
    relatedDataPoints: string[];
    confidence: number;
  };
  predictions: {
    shortTerm: number;
    mediumTerm: number;
    longTerm: number;
  };
  transmutationSignals?: {
    action: 'disburse' | 'rebalance' | 'alert' | 'verify';
    confidence: number;
    reasoning: string;
  }[];
}

export interface RelationalMapping {
  id: string;
  sourceMetric: string;
  targetMetric: string;
  relationship: 'causal' | 'correlated' | 'inverse' | 'synergistic';
  strength: number;
  confidence: number;
  insights: string[];
}

export interface ForecastModel {
  id: string;
  targetMetric: string;
  modelType: 'ml' | 'statistical' | 'hybrid';
  accuracy: number;
  predictions: Array<{
    timeframe: string;
    value: number;
    confidence: number;
    scenarios: {
      optimistic: number;
      realistic: number;
      pessimistic: number;
    };
  }>;
  factors: Array<{
    factor: string;
    impact: number;
  }>;
}

// 2. Cognitive Finance Layer
export interface CognitiveAgent {
  id: string;
  name: string;
  role: 'steward' | 'auditor' | 'optimizer' | 'advisor';
  specialization: string[];
  performance: {
    decisionsCount: number;
    accuracy: number;
    ethicsScore: number;
    learningRate: number;
  };
  activeContracts: string[];
}

export interface CognitiveSmartContract {
  id: string;
  contractAddress: string;
  baseContract: string;
  aiAgent: string;
  learningHistory: Array<{
    timestamp: Date;
    outcome: string;
    performanceChange: number;
    adjustment: string;
  }>;
  currentStrategy: {
    disbursementThreshold: number;
    riskTolerance: number;
    impactPriority: string[];
  };
  ethicsAlignment: number;
}

export interface DynamicImpactScore {
  entityId: string;
  currentScore: number;
  trend: 'improving' | 'stable' | 'declining';
  components: {
    environmental: number;
    social: number;
    economic: number;
    governance: number;
  };
  recalibrationHistory: Array<{
    timestamp: Date;
    oldScore: number;
    newScore: number;
    triggerEvent: string;
  }>;
  projectedScore: {
    nextMonth: number;
    nextQuarter: number;
    nextYear: number;
  };
}

// 3. Interoperable Regenerative Ledgers
export interface UniversalImpactID {
  uuid: string;
  rvxId: string;
  externalRegistries: Array<{
    registry: string;
    registryId: string;
    verified: boolean;
  }>;
  crossChainReferences: Array<{
    chain: string;
    contractAddress: string;
    tokenId: string;
  }>;
  metadata: {
    created: Date;
    lastSync: Date;
    verificationStatus: string;
  };
}

export interface CrossChainBridge {
  id: string;
  sourceChain: string;
  targetChain: string;
  bridgeProtocol: string;
  status: 'active' | 'paused' | 'maintenance';
  transfers: Array<{
    txHash: string;
    amount: number;
    timestamp: Date;
    status: 'pending' | 'completed' | 'failed';
  }>;
  metrics: {
    totalVolume: number;
    totalTransfers: number;
    averageFee: number;
    successRate: number;
  };
}

// 4. Adaptive MRV Ecosystems
export interface EdgeAIDevice {
  id: string;
  type: 'drone' | 'sensor' | 'camera' | 'weather-station';
  location: {
    lat: number;
    lng: number;
    altitude?: number;
  };
  capabilities: string[];
  status: 'active' | 'idle' | 'maintenance';
  autonomyLevel: number;
  dataCollected: number;
  lastMaintenance: Date;
}

export interface SelfValidatingOracle {
  id: string;
  sources: Array<{
    type: 'satellite' | 'iot' | 'community' | 'ai';
    weight: number;
    reliability: number;
  }>;
  consensusThreshold: number;
  validations: Array<{
    timestamp: Date;
    metric: string;
    value: number;
    consensus: number;
    sources: number;
  }>;
  accuracy: number;
}

export interface GamifiedMRVContribution {
  userId: string;
  contributions: number;
  ruEarned: number;
  accuracy: number;
  rank: string;
  badges: string[];
  level: number;
}

// 5. Token Engineering
export interface RegenerativeIndex {
  id: string;
  value: number;
  components: Array<{
    metric: string;
    weight: number;
    currentValue: number;
    trend: number;
  }>;
  historicalPerformance: Array<{
    date: Date;
    value: number;
  }>;
  projectedMovement: {
    nextWeek: number;
    nextMonth: number;
    nextQuarter: number;
  };
}

export interface ImpactLinkedStake {
  id: string;
  stakeholder: string;
  amount: number;
  projectId: string;
  impactTier: 'high-risk' | 'medium-risk' | 'low-risk';
  duration: number;
  baseYield: number;
  impactMultiplier: number;
  currentReturn: number;
  projectedReturn: number;
}

export interface EcosystemLiquidityPool {
  id: string;
  totalLiquidity: number;
  allocation: {
    highImpact: number;
    mediumImpact: number;
    lowRisk: number;
  };
  autoRebalancing: boolean;
  rebalanceHistory: Array<{
    timestamp: Date;
    oldAllocation: any;
    newAllocation: any;
    reason: string;
  }>;
  performance: {
    apr: number;
    impactScore: number;
    volatility: number;
  };
}

// 6. Human-AI Co-Governance
export interface QuadraticVote {
  id: string;
  proposalId: string;
  voter: string;
  votingPower: number;
  votesCast: number;
  cost: number;
  timestamp: Date;
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  category: 'finance' | 'policy' | 'technical' | 'community';
  status: 'draft' | 'active' | 'passed' | 'rejected' | 'executed';
  votes: {
    for: number;
    against: number;
    abstain: number;
  };
  quadraticVotes: QuadraticVote[];
  aiEthicsCheck: {
    score: number;
    flags: string[];
    recommendation: string;
  };
  deadline: Date;
}

export interface CommonsToken {
  id: string;
  holder: string;
  shares: number;
  projectId: string;
  rights: string[];
  revenueShare: number;
  votingPower: number;
  transferable: boolean;
}

// 7. Regenerative Digital Twins
export interface DigitalTwin {
  id: string;
  projectId: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    bounds: Array<{ lat: number; lng: number }>;
  };
  layers: {
    ecological: boolean;
    financial: boolean;
    social: boolean;
  };
  realTimeData: {
    treeCount: number;
    carbonStock: number;
    biodiversityIndex: number;
    waterQuality: number;
    soilHealth: number;
  };
  simulations: Array<{
    id: string;
    type: 'stress-test' | 'growth-projection' | 'impact-forecast';
    scenario: string;
    results: any;
    timestamp: Date;
  }>;
  visualizationUrl: string;
}

export interface StressTestScenario {
  id: string;
  twinId: string;
  scenario: 'drought' | 'flood' | 'conflict' | 'market-shock' | 'policy-change';
  severity: 'low' | 'medium' | 'high' | 'extreme';
  duration: number;
  impact: {
    ecological: number;
    financial: number;
    social: number;
  };
  resilience: number;
  recommendations: string[];
}

// 8. Quantum-Enhanced Finance (Future)
export interface QuantumOptimization {
  id: string;
  problemType: 'portfolio' | 'network' | 'risk-assessment';
  inputData: any;
  quantumAlgorithm: string;
  classicalBaseline: number;
  quantumResult: number;
  improvement: number;
  executionTime: number;
  confidence: number;
}

export interface QuantumSecureLedger {
  id: string;
  ledgerType: string;
  encryptionMethod: 'quantum-resistant' | 'post-quantum';
  entries: number;
  integrityScore: number;
  lastAudit: Date;
}
