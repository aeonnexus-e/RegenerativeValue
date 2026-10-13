import { useState } from 'react';
import { 
  Network, Satellite, Coins, Zap, Heart, TrendingUp, Globe,
  ArrowRight, CheckCircle, Shield, Target, BarChart3, Users,
  Database, Activity, Workflow, DollarSign
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface MarketOperatingSystemProps {
  onNavigate: (page: string) => void;
}

export function MarketOperatingSystem({ onNavigate }: MarketOperatingSystemProps) {
  const [activeFlow, setActiveFlow] = useState<string>('full');

  const systemFlows = [
    {
      id: 'verification',
      title: 'Verification Flow',
      steps: [
        { icon: Satellite, label: 'CIS Verification', color: 'cyan', description: 'Multi-source data validation' },
        { icon: Activity, label: 'AI Analysis', color: 'blue', description: '91% confidence scoring' },
        { icon: CheckCircle, label: 'Outcome Verified', color: 'emerald', description: 'Tamper-proof evidence' }
      ]
    },
    {
      id: 'tokenization',
      title: 'Tokenization Flow',
      steps: [
        { icon: CheckCircle, label: 'Verified Outcome', color: 'emerald', description: 'CIS certified data' },
        { icon: Coins, label: 'BCQI Minting', color: 'emerald', description: 'Regenerative Units created' },
        { icon: Shield, label: 'Blockchain Secured', color: 'cyan', description: 'Cryptographic proof' }
      ]
    },
    {
      id: 'financing',
      title: 'Financing Flow',
      steps: [
        { icon: Target, label: 'Outcomes Defined', color: 'purple', description: 'Measurable targets set' },
        { icon: Zap, label: 'OORE Contract', color: 'purple', description: 'Smart contract created' },
        { icon: DollarSign, label: 'Auto Disbursement', color: 'emerald', description: 'Results trigger payment' }
      ]
    },
    {
      id: 'governance',
      title: 'Governance Flow',
      steps: [
        { icon: Users, label: 'Stakeholder Rights', color: 'pink', description: 'Community ownership' },
        { icon: Heart, label: 'ECP Protocol', color: 'pink', description: 'Transparent distribution' },
        { icon: BarChart3, label: 'Value Shared', color: 'emerald', description: 'Equitable returns' }
      ]
    },
    {
      id: 'investment',
      title: 'Investment Flow',
      steps: [
        { icon: TrendingUp, label: 'ROB Issued', color: 'emerald', description: 'Performance-backed bonds' },
        { icon: Activity, label: 'Outcome Progress', color: 'cyan', description: 'Real-time tracking' },
        { icon: DollarSign, label: 'Impact Returns', color: 'emerald', description: 'Variable yield distribution' }
      ]
    }
  ];

  const integrationPoints = [
    {
      title: 'National MRV Systems',
      description: 'Monitoring, Reporting & Verification integration',
      icon: Database,
      status: 'Active',
      connections: ['CIS', 'BCQI']
    },
    {
      title: 'Green Bond Markets',
      description: 'Traditional fixed income integration',
      icon: TrendingUp,
      status: 'Active',
      connections: ['ROB', 'OORE']
    },
    {
      title: 'DeFi Protocols',
      description: 'Decentralized ReFi ecosystem',
      icon: Network,
      status: 'Active',
      connections: ['BCQI', 'ECP']
    },
    {
      title: 'Impact Registries',
      description: 'Global carbon & biodiversity registries',
      icon: Globe,
      status: 'Active',
      connections: ['CIS', 'BCQI']
    }
  ];

  const systemMetrics = [
    {
      category: 'Verification',
      metrics: [
        { label: 'Total Verifications', value: '1.45M+', trend: '+12.4%' },
        { label: 'AI Confidence', value: '91%', trend: '+2.3%' },
        { label: 'Data Sources', value: '48,368', trend: '+8.7%' }
      ]
    },
    {
      category: 'Tokenization',
      metrics: [
        { label: 'RUs Issued', value: '2.8M', trend: '+15.2%' },
        { label: 'Market Cap', value: '$12.4B', trend: '+18.9%' },
        { label: 'Trading Volume', value: '$847M', trend: '+23.1%' }
      ]
    },
    {
      category: 'Finance',
      metrics: [
        { label: 'Contracts Active', value: '12.4K', trend: '+9.8%' },
        { label: 'Funds Disbursed', value: '$8.7B', trend: '+14.5%' },
        { label: 'Performance', value: '87.3%', trend: '+3.2%' }
      ]
    },
    {
      category: 'Governance',
      metrics: [
        { label: 'Stakeholders', value: '156K', trend: '+21.7%' },
        { label: 'Revenue Shared', value: '$342M', trend: '+16.4%' },
        { label: 'Participation', value: '76.8%', trend: '+5.1%' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10" />
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
                <Network className="w-8 h-8" />
              </div>
              <h1 className="text-white">Regenerative Market Operating System</h1>
            </div>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-6">
              A unified digital backbone for global climate capital flows — standardizing regeneration measurement, 
              monetization, and distribution across ecosystems
            </p>
            <div className="flex items-center justify-center gap-3">
              <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                <Shield className="w-3 h-3 mr-2" />
                Interoperable Protocol
              </Badge>
              <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                <Network className="w-3 h-3 mr-2" />
                Global Infrastructure
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                <CheckCircle className="w-3 h-3 mr-2" />
                Production Ready
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-16">
        <Tabs defaultValue="flows" className="space-y-8">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="flows">System Flows</TabsTrigger>
            <TabsTrigger value="integration">Integration Points</TabsTrigger>
            <TabsTrigger value="metrics">System Metrics</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
          </TabsList>

          {/* System Flows */}
          <TabsContent value="flows">
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-white mb-2">Integrated System Flows</h2>
                <p className="text-slate-400">
                  See how data flows through the RVX infrastructure, from verification to value distribution
                </p>
              </div>

              {systemFlows.map((flow) => (
                <Card key={flow.id} className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-white mb-6">{flow.title}</h3>
                  <div className="flex items-center justify-between">
                    {flow.steps.map((step, idx) => {
                      const Icon = step.icon;
                      const bgColor = step.color === 'cyan' ? 'bg-cyan-500/20' : step.color === 'blue' ? 'bg-blue-500/20' : step.color === 'emerald' ? 'bg-emerald-500/20' : step.color === 'purple' ? 'bg-purple-500/20' : 'bg-pink-500/20';
                      const textColor = step.color === 'cyan' ? 'text-cyan-400' : step.color === 'blue' ? 'text-blue-400' : step.color === 'emerald' ? 'text-emerald-400' : step.color === 'purple' ? 'text-purple-400' : 'text-pink-400';
                      
                      return (
                        <div key={idx} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div className={`p-4 ${bgColor} rounded-lg mb-3`}>
                              <Icon className={`w-6 h-6 ${textColor}`} />
                            </div>
                            <p className="text-white text-sm mb-1">{step.label}</p>
                            <p className="text-slate-400 text-xs text-center max-w-[120px]">
                              {step.description}
                            </p>
                          </div>
                          {idx < flow.steps.length - 1 && (
                            <ArrowRight className="w-6 h-6 text-slate-600 mx-4" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              ))}

              {/* Full System Flow */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30 p-8">
                <h3 className="text-white mb-6 text-center">Complete RVX Lifecycle</h3>
                <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
                  <Badge className="bg-cyan-500/20 text-cyan-400">1. CIS Verification</Badge>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <Badge className="bg-emerald-500/20 text-emerald-400">2. BCQI Tokenization</Badge>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <Badge className="bg-purple-500/20 text-purple-400">3. OORE Disbursement</Badge>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <Badge className="bg-pink-500/20 text-pink-400">4. ECP Distribution</Badge>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <Badge className="bg-amber-500/20 text-amber-400">5. ROB Returns</Badge>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                  <Badge className="bg-blue-500/20 text-blue-400">6. Pilot Scaling</Badge>
                </div>
                <p className="text-slate-400 text-center text-sm max-w-3xl mx-auto">
                  Each component seamlessly integrates with the next, creating an automated pipeline from 
                  ecological outcome to financial return, with full transparency and community ownership.
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* Integration Points */}
          <TabsContent value="integration">
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-white mb-2">Ecosystem Integration</h2>
                <p className="text-slate-400">
                  RVX serves as interoperable infrastructure connecting existing climate finance systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrationPoints.map((point, idx) => {
                  const Icon = point.icon;
                  return (
                    <Card key={idx} className="bg-slate-900 border-slate-800 p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-cyan-500/20 rounded-lg">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-white">{point.title}</h3>
                            <Badge className="bg-emerald-500/20 text-emerald-400">
                              {point.status}
                            </Badge>
                          </div>
                          <p className="text-slate-400 text-sm mb-4">{point.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500 text-xs">Connects:</span>
                            {point.connections.map((conn, i) => (
                              <Badge key={i} variant="outline" className="border-slate-700 text-slate-400 text-xs">
                                {conn}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-slate-900 border-slate-800 p-8">
                <h3 className="text-white mb-4">Interoperability Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-white">Reduced Fragmentation</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Eliminates duplication across national MRV systems and international registries
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-white">Cross-Border Capital</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Enables seamless climate finance flows between developed and frontier economies
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <h4 className="text-white">Unified Standards</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Creates common language for measuring and monetizing regenerative outcomes
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* System Metrics */}
          <TabsContent value="metrics">
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-white mb-2">System-Wide Performance</h2>
                <p className="text-slate-400">
                  Real-time metrics across all innovation pillars
                </p>
              </div>

              {systemMetrics.map((category, idx) => (
                <Card key={idx} className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-white mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.metrics.map((metric, midx) => (
                      <div key={midx} className="bg-slate-800 p-4 rounded-lg">
                        <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
                        <p className="text-white text-2xl mb-1">{metric.value}</p>
                        <p className="text-emerald-400 text-sm">{metric.trend}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-emerald-500/30 p-8">
                <div className="text-center">
                  <h3 className="text-white mb-3">Global Scale Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Countries Active</p>
                      <p className="text-white text-3xl">195</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Total Value Locked</p>
                      <p className="text-white text-3xl">$21.1B</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Beneficiaries</p>
                      <p className="text-white text-3xl">35.2M</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">CO₂ Verified</p>
                      <p className="text-white text-3xl">45.6M</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Updated in real-time • Last sync: Just now
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Architecture */}
          <TabsContent value="architecture">
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-white mb-2">Technical Architecture</h2>
                <p className="text-slate-400">
                  Multi-layer infrastructure enabling regenerative finance at scale
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-white mb-4">Layer 1: Data Collection & Verification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Satellite className="w-6 h-6 text-cyan-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Satellite Networks</h4>
                      <p className="text-slate-400 text-xs">
                        Sentinel-2, Landsat-9, Planet constellation for continuous monitoring
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Activity className="w-6 h-6 text-purple-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">IoT Sensors</h4>
                      <p className="text-slate-400 text-xs">
                        12,456 devices measuring soil, water, air quality in real-time
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-emerald-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Community Data</h4>
                      <p className="text-slate-400 text-xs">
                        35,678 contributors providing ground-truth validation
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-white mb-4">Layer 2: AI & Blockchain Processing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Shield className="w-6 h-6 text-cyan-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">AI Verification Engine</h4>
                      <p className="text-slate-400 text-xs mb-2">
                        Multi-source data triangulation with 91% confidence scoring
                      </p>
                      <ul className="space-y-1">
                        <li className="text-slate-500 text-xs">• Machine learning validation</li>
                        <li className="text-slate-500 text-xs">• Anomaly detection</li>
                        <li className="text-slate-500 text-xs">• Predictive modeling</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Coins className="w-6 h-6 text-emerald-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Blockchain Infrastructure</h4>
                      <p className="text-slate-400 text-xs mb-2">
                        Cryptographic tokenization and immutable audit trails
                      </p>
                      <ul className="space-y-1">
                        <li className="text-slate-500 text-xs">• Smart contract execution</li>
                        <li className="text-slate-500 text-xs">• Transparent ledger</li>
                        <li className="text-slate-500 text-xs">• Digital asset registry</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-900 border-slate-800 p-6">
                  <h3 className="text-white mb-4">Layer 3: Finance & Governance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Zap className="w-6 h-6 text-purple-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Outcome Contracts</h4>
                      <p className="text-slate-400 text-xs">
                        Automated disbursements based on verified results
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <Heart className="w-6 h-6 text-pink-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Revenue Sharing</h4>
                      <p className="text-slate-400 text-xs">
                        Transparent value distribution to all stakeholders
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-amber-400 mb-3" />
                      <h4 className="text-white text-sm mb-2">Impact Bonds</h4>
                      <p className="text-slate-400 text-xs">
                        Performance-backed securities for institutional capital
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30 p-8">
                <div className="text-center">
                  <Network className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white mb-3">Designed for Global Scale</h3>
                  <p className="text-slate-400 max-w-3xl mx-auto mb-6">
                    The RVX architecture is built to process millions of verifications, billions in capital flows, 
                    and serve tens of millions of beneficiaries across 195 countries — all while maintaining 
                    transparency, security, and ethical governance.
                  </p>
                  <Button 
                    onClick={() => onNavigate('innovation-hub')}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    Explore Innovation Hub
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
