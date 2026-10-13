import { 
  Brain, Bot, Network, Satellite, Zap, Vote, Boxes, Cpu,
  ArrowRight, CheckCircle, Sparkles, TrendingUp, Shield
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AdvancedInnovationHubProps {
  onNavigate: (page: string) => void;
}

export function AdvancedInnovationHub({ onNavigate }: AdvancedInnovationHubProps) {
  const advancedInnovations = [
    {
      id: 'craft',
      number: '1',
      title: 'Autonomous Data Intelligence',
      subtitle: 'CRAFT: Create, Relate, Analyze, Forecast, Transmute',
      description: 'Move from passive data storage to active intelligence where each data point becomes context-aware, dynamically relating to others to form a living digital ecosystem.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      page: 'craft',
      features: [
        'AI-driven relational mapping',
        'Predictive modeling engines',
        'Data transmutation layer',
        'Self-learning ecosystems'
      ],
      impact: 'Enables self-learning financial ecosystems. Reduces verification → funding lag by 82%.',
      metrics: {
        dataPoints: '847K+',
        mappings: '2.4M',
        accuracy: '91%',
        efficiency: '+47%'
      },
      status: 'Operational'
    },
    {
      id: 'cognitive',
      number: '2',
      title: 'Cognitive Finance Layer',
      subtitle: 'Conscious Capital Allocation',
      description: 'AI agents trained in ethics, climate finance, and regenerative economics act as digital stewards, optimizing capital flow with contextual intelligence.',
      icon: Bot,
      color: 'from-cyan-500 to-blue-600',
      page: 'cognitive-finance',
      features: [
        'Cognitive smart contracts',
        'Dynamic impact scoring',
        'Autonomous rebalancing pools',
        'Ethical optimization'
      ],
      impact: 'Makes RVX self-correcting and adaptive. Reduces admin overhead by 68%.',
      metrics: {
        agents: '24',
        contracts: '2.8K',
        ethicsScore: '96.8%',
        capitalGain: '+47%'
      },
      status: 'Operational'
    },
    {
      id: 'irl',
      number: '3',
      title: 'Interoperable Regenerative Ledgers',
      subtitle: 'Universal Climate Finance Infrastructure',
      description: 'Enable RVX to communicate with other climate and ESG registries across chains and institutions through cross-chain bridges and universal impact IDs.',
      icon: Network,
      color: 'from-emerald-500 to-cyan-600',
      page: 'interoperable-ledgers',
      features: [
        'Cross-chain carbon bridges',
        'Universal impact ID protocol',
        'Open API governance',
        'TNFD compliance'
      ],
      impact: 'Makes RVX the "Swift Network" of regenerative finance. Reduces duplication by 73%.',
      metrics: {
        chains: '12',
        transfers: '847K',
        registries: '47',
        successRate: '98.7%'
      },
      status: 'Operational'
    },
    {
      id: 'mrv',
      number: '4',
      title: 'Adaptive MRV Ecosystems',
      subtitle: 'MRV-as-a-Service',
      description: 'Transform MRV into a decentralized intelligence layer with edge-AI sensors, self-validating oracles, and gamified community participation.',
      icon: Satellite,
      color: 'from-blue-500 to-purple-600',
      page: 'adaptive-mrv',
      features: [
        'Edge-AI autonomous collection',
        'Self-validating oracles',
        'Gamified community MRV',
        'Real-time verification'
      ],
      impact: 'Real-time verification lowers capital release delays from weeks to minutes.',
      metrics: {
        devices: '12.4K',
        contributors: '35K+',
        accuracy: '94.3%',
        latency: '-91%'
      },
      status: 'Operational'
    },
    {
      id: 'token-eng',
      number: '5',
      title: 'Token Engineering',
      subtitle: 'Dynamic Regenerative Incentives',
      description: 'Make RVX rewards evolve with planetary conditions, tying token value to regeneration velocity and resilience metrics through algorithmic incentive design.',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      page: 'token-engineering',
      features: [
        'Regenerative Unit (RU) index',
        'Impact-linked staking',
        'Auto-adjusting liquidity pools',
        'Anti-speculation mechanisms'
      ],
      impact: 'Aligns incentives for long-term impact. Creates living regenerative economy.',
      metrics: {
        indexValue: '847.2',
        stakes: '12.4K',
        poolLiquidity: '$2.1B',
        apr: '8.4%'
      },
      status: 'Operational'
    },
    {
      id: 'governance',
      number: '6',
      title: 'Human-AI Co-Governance',
      subtitle: 'Participatory Decision Ecosystems',
      description: 'Ethical Commons Protocol powered by AI moderation, transparent deliberation, quadratic voting, and equitable digital cooperative shares.',
      icon: Vote,
      color: 'from-pink-500 to-purple-600',
      page: 'co-governance',
      features: [
        'Quadratic voting',
        'AI ethics engines',
        'Commons tokens',
        'Democratic climate finance'
      ],
      impact: 'Ensures local communities and Indigenous groups co-own RVX outcomes.',
      metrics: {
        proposals: '1.2K',
        voters: '156K',
        participation: '76.8%',
        consensus: '94.1%'
      },
      status: 'Operational'
    },
    {
      id: 'twins',
      number: '7',
      title: 'Regenerative Digital Twins',
      subtitle: 'Living Ecosystem Simulations',
      description: 'Interactive 3D simulations of ecological and financial dynamics with geospatial visualization, predictive stress modeling, and VR/AR collaboration.',
      icon: Boxes,
      color: 'from-cyan-500 to-teal-600',
      page: 'digital-twins',
      features: [
        '3D ecosystem visualization',
        'Predictive stress modeling',
        'Investor-community VR hub',
        'Real-time impact flows'
      ],
      impact: 'Makes invisible regeneration visible. Strengthens investor confidence.',
      metrics: {
        twins: '2.8K',
        simulations: '847K',
        accuracy: '92.3%',
        engagement: '+234%'
      },
      status: 'Operational'
    },
    {
      id: 'quantum',
      number: '8',
      title: 'Quantum-Enhanced Finance',
      subtitle: 'Next-Generation Optimization',
      description: 'Quantum computing algorithms for ecosystem interdependencies, optimal regenerative pathways, and quantum-secure ledgers (long-term pivot).',
      icon: Cpu,
      color: 'from-violet-500 to-purple-600',
      page: 'quantum-finance',
      features: [
        'Quantum climate modeling',
        'Portfolio optimization',
        'Network analysis',
        'Quantum-secure ledgers'
      ],
      impact: 'Unlocks complex systems-level insights impossible with classical computation.',
      metrics: {
        algorithms: '12',
        improvement: '+340%',
        problems: '847',
        security: '256-bit'
      },
      status: 'Research Phase'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-400">
              Beyond Current Innovation
            </Badge>
            <h1 className="text-white mb-4">
              Advanced Innovation Hub
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
              8 transformative innovations that elevate RVX from a platform to a living, 
              self-optimizing regenerative finance ecosystem
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                  <Brain className="w-3 h-3 mr-2" />
                  Autonomous Intelligence
                </Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Self-Optimizing
                </Badge>
                <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                  <Shield className="w-3 h-3 mr-2" />
                  Quantum-Secure
                </Badge>
              </div>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                onClick={() => onNavigate('transformation')}
              >
                View Complete Transformation Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="overview">Innovation Overview</TabsTrigger>
            <TabsTrigger value="integration">System Integration</TabsTrigger>
            <TabsTrigger value="impact">Transformative Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {advancedInnovations.map((innovation) => {
                const Icon = innovation.icon;
                return (
                  <Card 
                    key={innovation.id}
                    className="bg-slate-900 border-slate-800 p-6 hover:border-purple-500 transition-all cursor-pointer group"
                    onClick={() => onNavigate(innovation.page)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400">
                          {innovation.number}
                        </div>
                        <div className={`p-3 bg-gradient-to-br ${innovation.color} rounded-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={innovation.status === 'Operational' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}>
                          {innovation.status}
                        </Badge>
                        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">{innovation.subtitle}</p>
                    <p className="text-slate-300 text-sm mb-4">
                      {innovation.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(innovation.metrics).map(([key, value]) => (
                        <div key={key} className="bg-slate-800 p-2 rounded-lg">
                          <p className="text-slate-400 text-xs mb-0.5 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-white text-sm">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-slate-400 text-xs mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-1">
                        {innovation.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-700 text-slate-400 text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <p className="text-emerald-400 text-sm flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{innovation.impact}</span>
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="integration">
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-800 p-8">
                <h2 className="text-white mb-6">Integrated System Architecture</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white mb-4">Data & Intelligence Layer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Brain className="w-6 h-6 text-purple-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">CRAFT (1)</p>
                          <p className="text-slate-400 text-xs">Autonomous data intelligence</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Satellite className="w-6 h-6 text-blue-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Adaptive MRV (4)</p>
                          <p className="text-slate-400 text-xs">Decentralized verification</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white mb-4">Financial Intelligence Layer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Bot className="w-6 h-6 text-cyan-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Cognitive Finance (2)</p>
                          <p className="text-slate-400 text-xs">AI capital allocation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Zap className="w-6 h-6 text-amber-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Token Engineering (5)</p>
                          <p className="text-slate-400 text-xs">Dynamic incentives</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white mb-4">Infrastructure & Governance Layer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Network className="w-6 h-6 text-emerald-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">IRL (3)</p>
                          <p className="text-slate-400 text-xs">Interoperability</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Vote className="w-6 h-6 text-pink-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Co-Governance (6)</p>
                          <p className="text-slate-400 text-xs">Democratic finance</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                        <Boxes className="w-6 h-6 text-cyan-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Digital Twins (7)</p>
                          <p className="text-slate-400 text-xs">Visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white mb-4">Future Enhancement Layer</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
                        <Cpu className="w-6 h-6 text-violet-400" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Quantum Finance (8)</p>
                          <p className="text-slate-400 text-xs">
                            Next-generation optimization for complex ecosystem modeling
                          </p>
                        </div>
                        <Badge className="bg-amber-500/20 text-amber-400">Research</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg">
                  <h3 className="text-white mb-3">Seamless Integration</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    All 8 innovations work together as a unified system. CRAFT provides intelligence to Cognitive Finance, 
                    which uses IRL to move capital, verified by Adaptive MRV, incentivized by Token Engineering, 
                    governed through Co-Governance, visualized via Digital Twins, and optimized by Quantum algorithms.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Fully integrated and operational (7/8 features)</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-800 p-8">
                <h2 className="text-white mb-6">Transformative Impact Metrics</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-white mb-4">Operational Excellence</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Capital Efficiency</span>
                        <span className="text-emerald-400">+47%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Decision Latency</span>
                        <span className="text-cyan-400">-82%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Admin Overhead</span>
                        <span className="text-purple-400">-68%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Verification Speed</span>
                        <span className="text-pink-400">-91%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-white mb-4">Quality Improvements</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Data Accuracy</span>
                        <span className="text-emerald-400">94.3%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Forecast Precision</span>
                        <span className="text-cyan-400">91.2%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Ethics Score</span>
                        <span className="text-purple-400">96.8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Outcome Quality</span>
                        <span className="text-pink-400">+34%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-white mb-4">Ecosystem Growth</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Participation Rate</span>
                        <span className="text-emerald-400">76.8%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Cross-Chain Success</span>
                        <span className="text-cyan-400">98.7%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Investor Confidence</span>
                        <span className="text-purple-400">+234%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Community Ownership</span>
                        <span className="text-pink-400">94.1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-purple-500/30 p-8">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-white mb-3">From Platform to Living Ecosystem</h3>
                    <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto">
                      These 8 innovations transform RVX from a static platform into a self-learning, 
                      self-optimizing, self-governing regenerative finance ecosystem that continuously 
                      improves while maintaining ethical alignment and community ownership.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Intelligence</p>
                        <p className="text-purple-400 text-2xl">Autonomous</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Optimization</p>
                        <p className="text-cyan-400 text-2xl">Continuous</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Governance</p>
                        <p className="text-pink-400 text-2xl">Democratic</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Security</p>
                        <p className="text-emerald-400 text-2xl">Quantum-Ready</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
