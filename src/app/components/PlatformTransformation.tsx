import { 
  ArrowRight, CheckCircle, Sparkles, Brain,
  Zap, Network, Target
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PlatformTransformationProps {
  onNavigate: (page: string) => void;
}

export function PlatformTransformation({ onNavigate }: PlatformTransformationProps) {
  const transformationLayers = [
    {
      phase: 'Foundation',
      title: 'Core RVX Platform',
      description: 'Production-ready SaaS with impact tokenization and marketplace',
      features: [
        'Impact Registry (1.45M outcomes)',
        'Beneficiary Ecosystem (35.2M users)',
        'Project Orchestration (8.2K active)',
        'RVT Marketplace ($847M volume)',
        'Resilience Analytics (195 countries)',
        'Policy & Compliance (9.7/10 score)'
      ],
      status: 'Operational',
      color: 'blue' as const
    },
    {
      phase: 'Innovation Layer 1',
      title: 'Climate Finance Infrastructure',
      description: '6 integrated pillars creating regenerative market operating system',
      features: [
        'CIS: Climate Intelligence Stack (1.45M verifications)',
        'BCQI: Blockchain Impact (2.8M RUs issued)',
        'OORE: Outcome Engine ($8.7B disbursed)',
        'ECP: Ethical Commons (156K stakeholders)',
        'ROB: Outcome Bonds ($18.9B investment)',
        'Pilot Projects (12 active, 234K beneficiaries)'
      ],
      status: 'Operational',
      color: 'emerald' as const
    },
    {
      phase: 'Innovation Layer 2',
      title: 'Advanced Autonomous Systems',
      description: '8 transformative features creating self-optimizing ecosystem',
      features: [
        'CRAFT: Autonomous Data Intelligence (+47% efficiency)',
        'Cognitive Finance: AI Stewardship (24 agents active)',
        'Interoperable Ledgers: Cross-chain (12 chains, 98.7% success)',
        'Adaptive MRV: Edge AI (12.4K devices)',
        'Token Engineering: Dynamic incentives ($2.1B pools)',
        'Co-Governance: Democratic finance (76.8% participation)',
        'Digital Twins: 3D Simulations (2.8K twins)',
        'Quantum Finance: Next-gen optimization (Research)'
      ],
      status: 'Operational (7/8)',
      color: 'purple' as const
    }
  ];

  const impactMetrics = {
    operational: [
      { metric: 'Capital Efficiency', improvement: '+47%', description: 'AI optimization' },
      { metric: 'Decision Latency', improvement: '-82%', description: 'Auto-transmutation' },
      { metric: 'Admin Overhead', improvement: '-68%', description: 'Cognitive agents' },
      { metric: 'Verification Speed', improvement: '-91%', description: 'Edge AI MRV' }
    ],
    quality: [
      { metric: 'Data Accuracy', value: '94.3%', description: 'Multi-source validation' },
      { metric: 'Forecast Precision', value: '91.2%', description: 'Predictive models' },
      { metric: 'Ethics Score', value: '96.8%', description: 'AI ethics engines' },
      { metric: 'Outcome Quality', improvement: '+34%', description: 'Results-based finance' }
    ],
    ecosystem: [
      { metric: 'Participation Rate', value: '76.8%', description: 'Quadratic voting' },
      { metric: 'Cross-Chain Success', value: '98.7%', description: 'Interoperable ledgers' },
      { metric: 'Investor Confidence', improvement: '+234%', description: 'Digital twins' },
      { metric: 'Community Ownership', value: '94.1%', description: 'Commons protocol' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
            Complete Platform Evolution
          </Badge>
          <h1 className="text-white mb-4">
            Platform Transformation Journey
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            From production-ready SaaS to self-optimizing regenerative finance ecosystem
          </p>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">Core Modules</p>
              <p className="text-white text-2xl mb-1">9</p>
              <p className="text-blue-400 text-sm">Foundation layer</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Innovation Pillars</p>
              <p className="text-white text-2xl mb-1">6</p>
              <p className="text-emerald-400 text-sm">Climate finance</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Advanced Features</p>
              <p className="text-white text-2xl mb-1">8</p>
              <p className="text-purple-400 text-sm">Autonomous systems</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Total Innovation</p>
              <p className="text-white text-2xl mb-1">23</p>
              <p className="text-cyan-400 text-sm">Integrated features</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="layers" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="layers">Transformation Layers</TabsTrigger>
            <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
            <TabsTrigger value="capabilities">New Capabilities</TabsTrigger>
          </TabsList>

          <TabsContent value="layers" className="space-y-6">
            {transformationLayers.map((layer, idx) => (
              <Card 
                key={idx}
                className={`bg-slate-900 border-slate-800 p-6 border-l-4 ${layer.color === 'blue' ? 'border-l-blue-500' : layer.color === 'emerald' ? 'border-l-emerald-500' : 'border-l-purple-500'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className={`mb-2 ${layer.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : layer.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      {layer.phase}
                    </Badge>
                    <h2 className="text-white mb-2">{layer.title}</h2>
                    <p className="text-slate-400">{layer.description}</p>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400">
                    {layer.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {layer.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 bg-slate-800 p-3 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 p-8">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white mb-3">Integrated System Architecture</h3>
                <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
                  All 23 features work seamlessly together: Core modules provide infrastructure, 
                  Innovation Pillars create climate finance operations, and Advanced Features 
                  enable autonomous optimization and self-governance.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    onClick={() => onNavigate('superdashboard')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Core Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    onClick={() => onNavigate('innovation-hub')}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Innovation Pillars
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    onClick={() => onNavigate('advanced-innovation')}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Advanced Systems
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-white mb-6">Operational Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactMetrics.operational.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">{item.metric}</span>
                      <span className="text-emerald-400 text-xl">{item.improvement}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-white mb-6">Quality Improvements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactMetrics.quality.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">{item.metric}</span>
                      <span className="text-cyan-400 text-xl">
                        {'value' in item ? item.value : item.improvement}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-white mb-6">Ecosystem Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactMetrics.ecosystem.map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">{item.metric}</span>
                      <span className="text-purple-400 text-xl">
                        {'value' in item ? item.value : item.improvement}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="capabilities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white">Autonomous Intelligence</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Self-learning from 847K+ data points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>AI discovers 2.4M relational mappings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>91% forecast accuracy across outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Auto-transmutes data to action signals</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white">Cognitive Finance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>24 AI agents optimizing capital allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>2,847 self-learning smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>96.8% ethics compliance score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Continuous impact score recalibration</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Network className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white">Global Interoperability</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>12 blockchains connected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>847K cross-chain transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>47 climate registries integrated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>98.7% transfer success rate</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Target className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-white">Democratic Governance</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>Quadratic voting for proportional influence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>AI ethics engines prevent manipulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>76.8% community participation rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <span>94.1% consensus achievement</span>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
