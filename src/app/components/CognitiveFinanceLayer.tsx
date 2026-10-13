import { useState } from 'react';
import { 
  Brain, Bot, TrendingUp, Activity,
  CheckCircle, Sparkles
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface CognitiveFinanceLayerProps {
  onNavigate: (page: string) => void;
}

export function CognitiveFinanceLayer({ onNavigate }: CognitiveFinanceLayerProps) {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const cognitiveAgents = [
    {
      id: 'agent-001',
      name: 'Aurora',
      role: 'steward',
      specialization: ['Climate Finance', 'Risk Assessment', 'Portfolio Optimization'],
      performance: {
        decisions: 12456,
        accuracy: 0.94,
        ethicsScore: 0.97,
        learningRate: 0.89
      },
      activeContracts: 847,
      recentActions: [
        { action: 'Optimized capital allocation', impact: '+12% efficiency', time: '2 hours ago' },
        { action: 'Flagged high-risk project', impact: 'Prevented $2.4M loss', time: '5 hours ago' },
        { action: 'Recommended early disbursement', impact: '+34% outcome velocity', time: '1 day ago' }
      ]
    },
    {
      id: 'agent-002',
      name: 'Nexus',
      role: 'optimizer',
      specialization: ['Liquidity Management', 'Yield Optimization', 'Market Making'],
      performance: {
        decisions: 8934,
        accuracy: 0.91,
        ethicsScore: 0.95,
        learningRate: 0.92
      },
      activeContracts: 623,
      recentActions: [
        { action: 'Rebalanced ecosystem pools', impact: '+8.7% APR', time: '1 hour ago' },
        { action: 'Predicted market opportunity', impact: '$1.2M additional volume', time: '6 hours ago' }
      ]
    },
    {
      id: 'agent-003',
      name: 'Sentinel',
      role: 'auditor',
      specialization: ['Ethics Compliance', 'Fraud Detection', 'Impact Verification'],
      performance: {
        decisions: 15678,
        accuracy: 0.96,
        ethicsScore: 0.99,
        learningRate: 0.86
      },
      activeContracts: 1247,
      recentActions: [
        { action: 'Detected anomaly pattern', impact: 'Triggered investigation', time: '30 min ago' },
        { action: 'Verified community consent', impact: '100% ethical compliance', time: '3 hours ago' }
      ]
    }
  ];

  const cognitiveContracts = [
    {
      id: 'cc-001',
      name: 'Pakistan Regenerative Agriculture Initiative',
      agent: 'Aurora',
      currentStrategy: {
        disbursementThreshold: 0.85,
        riskTolerance: 0.65,
        impactPriority: ['carbon', 'biodiversity', 'community']
      },
      learningHistory: [
        { date: 'Oct 15', adjustment: 'Lowered threshold from 0.90 to 0.85', improvement: '+12%' },
        { date: 'Sep 28', adjustment: 'Increased biodiversity weight', improvement: '+8%' },
        { date: 'Sep 10', adjustment: 'Optimized timing windows', improvement: '+15%' }
      ],
      performance: {
        totalDisbursed: 8400000,
        outcomeVelocity: 1.34,
        beneficiaryGrowth: 0.23,
        ethicsScore: 0.97
      }
    },
    {
      id: 'cc-002',
      name: 'Afghanistan Watershed Restoration',
      agent: 'Aurora',
      currentStrategy: {
        disbursementThreshold: 0.80,
        riskTolerance: 0.70,
        impactPriority: ['water', 'soil', 'resilience']
      },
      learningHistory: [
        { date: 'Oct 18', adjustment: 'Adjusted for seasonal patterns', improvement: '+18%' },
        { date: 'Oct 5', adjustment: 'Enhanced community triggers', improvement: '+11%' }
      ],
      performance: {
        totalDisbursed: 6200000,
        outcomeVelocity: 1.28,
        beneficiaryGrowth: 0.31,
        ethicsScore: 0.96
      }
    }
  ];

  const dynamicImpactScores = [
    {
      entity: 'Community Forest Project Kenya',
      current: 8.7,
      trend: 'improving',
      components: { environmental: 9.2, social: 8.8, economic: 8.1, governance: 8.7 },
      projected: { nextMonth: 8.9, nextQuarter: 9.2, nextYear: 9.5 }
    },
    {
      entity: 'Urban Gardens Initiative Brazil',
      current: 7.4,
      trend: 'stable',
      components: { environmental: 7.8, social: 8.2, economic: 6.7, governance: 7.0 },
      projected: { nextMonth: 7.5, nextQuarter: 7.6, nextYear: 7.9 }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
            <Bot className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Cognitive Finance Layer</h1>
            <p className="text-slate-400">Conscious Capital Allocation through AI Stewardship</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Self-Correcting
          </Badge>
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            Adaptive Learning
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Ethical Optimization
          </Badge>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">Active AI Agents</p>
              <p className="text-white text-2xl mb-1">24</p>
              <p className="text-cyan-400 text-sm">All operational</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Cognitive Contracts</p>
              <p className="text-white text-2xl mb-1">2,847</p>
              <p className="text-blue-400 text-sm">Learning continuously</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Avg Ethics Score</p>
              <p className="text-white text-2xl mb-1">96.8%</p>
              <Progress value={96.8} className="h-2 mt-1" />
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Capital Efficiency Gain</p>
              <p className="text-white text-2xl mb-1">+47%</p>
              <p className="text-emerald-400 text-sm">vs rule-based</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="contracts">Cognitive Contracts</TabsTrigger>
            <TabsTrigger value="scoring">Dynamic Scoring</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          {/* AI Agents */}
          <TabsContent value="agents" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">AI Digital Stewards</h2>
              <p className="text-slate-400">
                Trained in ethics, climate finance, and regenerative economics
              </p>
            </div>

            {cognitiveAgents.map((agent) => (
              <Card 
                key={agent.id}
                className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500 transition-all cursor-pointer"
                onClick={() => setSelectedAgent(agent.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{agent.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-cyan-500/20 text-cyan-400 capitalize">{agent.role}</Badge>
                        <span className="text-slate-400 text-sm">{agent.activeContracts} active contracts</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm">Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Decisions</p>
                    <p className="text-white text-xl">{agent.performance.decisions.toLocaleString()}</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Accuracy</p>
                    <p className="text-emerald-400 text-xl">{(agent.performance.accuracy * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Ethics Score</p>
                    <p className="text-cyan-400 text-xl">{(agent.performance.ethicsScore * 100).toFixed(1)}%</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Learning Rate</p>
                    <p className="text-purple-400 text-xl">{(agent.performance.learningRate * 100).toFixed(1)}%</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Specialization</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialization.map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="border-slate-700 text-slate-300">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-3">Recent Actions</p>
                  <div className="space-y-2">
                    {agent.recentActions.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
                        <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-white text-sm mb-1">{action.action}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-emerald-400 text-xs">{action.impact}</span>
                            <span className="text-slate-500 text-xs">{action.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Cognitive Contracts */}
          <TabsContent value="contracts" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">Self-Learning Smart Contracts</h2>
              <p className="text-slate-400">
                Embedded AI clauses that learn from prior disbursements and outcomes
              </p>
            </div>

            {cognitiveContracts.map((contract) => (
              <Card key={contract.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-2">{contract.name}</h3>
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-400 text-sm">Managed by {contract.agent}</span>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400">
                    {contract.performance.ethicsScore * 100}% Ethics
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Total Disbursed</p>
                    <p className="text-white">${(contract.performance.totalDisbursed / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Outcome Velocity</p>
                    <p className="text-emerald-400">{contract.performance.outcomeVelocity}x</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Beneficiary Growth</p>
                    <p className="text-cyan-400">+{(contract.performance.beneficiaryGrowth * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Risk Tolerance</p>
                    <p className="text-purple-400">{(contract.currentStrategy.riskTolerance * 100).toFixed(0)}%</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-3">Learning History (Last 3 Adjustments)</p>
                  <div className="space-y-2">
                    {contract.learningHistory.map((entry, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-cyan-400" />
                          <div>
                            <p className="text-white text-sm">{entry.adjustment}</p>
                            <p className="text-slate-500 text-xs">{entry.date}</p>
                          </div>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400">{entry.improvement}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-2">Current Strategy</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800 p-2 rounded-lg">
                      <p className="text-slate-500 text-xs">Disbursement Threshold</p>
                      <p className="text-white">{(contract.currentStrategy.disbursementThreshold * 100).toFixed(0)}%</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded-lg">
                      <p className="text-slate-500 text-xs">Impact Priority</p>
                      <p className="text-cyan-400 text-sm">{contract.currentStrategy.impactPriority.join(', ')}</p>
                    </div>
                    <div className="bg-slate-800 p-2 rounded-lg">
                      <p className="text-slate-500 text-xs">Auto-Optimization</p>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-sm">Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Dynamic Impact Scoring */}
          <TabsContent value="scoring" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">Continuous Impact Recalibration</h2>
              <p className="text-slate-400">
                Impact ratings continuously updated based on verified outcomes
              </p>
            </div>

            {dynamicImpactScores.map((score, idx) => (
              <Card key={idx} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-2">{score.entity}</h3>
                    <Badge className={score.trend === 'improving' ? 'bg-emerald-500/20 text-emerald-400' : score.trend === 'stable' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-400'}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {score.trend}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Current Score</p>
                    <p className="text-white text-4xl">{score.current}</p>
                    <p className="text-slate-500 text-sm">/10</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-sm mb-3">Component Scores</p>
                  <div className="space-y-3">
                    {Object.entries(score.components).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-slate-300 text-sm capitalize">{key}</span>
                          <span className="text-cyan-400">{value}/10</span>
                        </div>
                        <Progress value={value * 10} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-3">Projected Scores</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-slate-500 text-xs mb-1">Next Month</p>
                      <p className="text-cyan-400">{score.projected.nextMonth}</p>
                      <p className="text-emerald-400 text-xs">
                        +{((score.projected.nextMonth - score.current) / score.current * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-slate-500 text-xs mb-1">Next Quarter</p>
                      <p className="text-purple-400">{score.projected.nextQuarter}</p>
                      <p className="text-emerald-400 text-xs">
                        +{((score.projected.nextQuarter - score.current) / score.current * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-slate-500 text-xs mb-1">Next Year</p>
                      <p className="text-pink-400">{score.projected.nextYear}</p>
                      <p className="text-emerald-400 text-xs">
                        +{((score.projected.nextYear - score.current) / score.current * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Impact */}
          <TabsContent value="impact">
            <Card className="bg-slate-900 border-slate-800 p-8">
              <h2 className="text-white mb-6">Cognitive Finance Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-white mb-4">Self-Correcting</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    AI agents continuously learn from outcomes and adjust strategies in real-time
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Strategy adjustments</span>
                      <span className="text-emerald-400">12,456/month</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Avg improvement</span>
                      <span className="text-cyan-400">+14.2%</span>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-white mb-4">Adaptive</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Responds to changing environmental, social, and economic conditions
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Pattern recognition</span>
                      <span className="text-purple-400">94.3% accuracy</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Response time</span>
                      <span className="text-cyan-400"><5 minutes</span>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-white mb-4">Ethical</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Reduces human bias and ensures continuous ethical optimization
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Ethics compliance</span>
                      <span className="text-emerald-400">96.8%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Bias reduction</span>
                      <span className="text-cyan-400">-73%</span>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-cyan-500/30 p-6">
                <div className="text-center">
                  <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white mb-3">Operational Gains</h3>
                  <div className="grid grid-cols-4 gap-6 mb-4">
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Capital Efficiency</p>
                      <p className="text-emerald-400 text-3xl">+47%</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Admin Overhead</p>
                      <p className="text-cyan-400 text-3xl">-68%</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Decision Latency</p>
                      <p className="text-purple-400 text-3xl">-91%</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Outcome Quality</p>
                      <p className="text-pink-400 text-3xl">+34%</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Cognitive finance makes RVX self-correcting, adaptive, and continuously optimized
                  </p>
                </div>
              </Card>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
