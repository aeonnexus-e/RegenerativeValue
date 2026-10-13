import { useState } from 'react';
import { 
  Brain, Network, TrendingUp, Zap, GitBranch, Sparkles, BarChart3, AlertCircle, Target
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface AutonomousDataIntelligenceProps {
  onNavigate: (page: string) => void;
}

export function AutonomousDataIntelligence({ onNavigate }: AutonomousDataIntelligenceProps) {
  const [activeDataPoint, setActiveDataPoint] = useState<string | null>(null);

  // Mock CRAFT data
  const dataPoints = [
    {
      id: 'dp-001',
      type: 'ecological',
      metric: 'Soil Carbon Content',
      value: 3.8,
      unit: '% organic matter',
      confidence: 0.94,
      relatedPoints: 12,
      predictions: {
        shortTerm: 4.1,
        mediumTerm: 4.8,
        longTerm: 5.5
      },
      signals: [
        { action: 'disburse', confidence: 0.89, reasoning: 'Target exceeded by 15%, trigger phase 2 funding' },
        { action: 'verify', confidence: 0.92, reasoning: 'Accelerated growth detected, recommend field validation' }
      ]
    },
    {
      id: 'dp-002',
      type: 'social',
      metric: 'Community Engagement',
      value: 87,
      unit: '% participation',
      confidence: 0.91,
      relatedPoints: 8,
      predictions: {
        shortTerm: 89,
        mediumTerm: 92,
        longTerm: 95
      },
      signals: [
        { action: 'rebalance', confidence: 0.85, reasoning: 'High engagement enables expanded project scope' }
      ]
    },
    {
      id: 'dp-003',
      type: 'economic',
      metric: 'Regenerative ROI',
      value: 243,
      unit: '% return',
      confidence: 0.88,
      relatedPoints: 15,
      predictions: {
        shortTerm: 256,
        mediumTerm: 287,
        longTerm: 342
      },
      signals: [
        { action: 'alert', confidence: 0.93, reasoning: 'Exceptional performance, recommend investor communications' }
      ]
    }
  ];

  const relationalMappings = [
    {
      id: 'rm-001',
      source: 'Rainfall Patterns',
      target: 'Soil Carbon',
      relationship: 'causal',
      strength: 0.87,
      insight: 'Increased rainfall correlates with 23% faster soil carbon accumulation'
    },
    {
      id: 'rm-002',
      source: 'Community Training',
      target: 'Biodiversity Index',
      relationship: 'synergistic',
      strength: 0.92,
      insight: 'Trained communities show 34% better biodiversity outcomes'
    },
    {
      id: 'rm-003',
      source: 'Carbon Credits',
      target: 'Local Income',
      relationship: 'correlated',
      strength: 0.79,
      insight: 'Every $1 in carbon credits generates $2.40 in local economic activity'
    }
  ];

  const forecastModels = [
    {
      id: 'fm-001',
      metric: 'CO₂ Sequestration',
      type: 'hybrid',
      accuracy: 0.91,
      nextMonth: { value: 1847, confidence: 0.89, optimistic: 2145, realistic: 1847, pessimistic: 1623 },
      factors: [
        { name: 'Rainfall', impact: 0.34 },
        { name: 'Temperature', impact: 0.28 },
        { name: 'Tree Density', impact: 0.45 },
        { name: 'Soil Quality', impact: 0.38 }
      ]
    },
    {
      id: 'fm-002',
      metric: 'Impact Capital Efficiency',
      type: 'ml',
      accuracy: 0.88,
      nextMonth: { value: 3.8, confidence: 0.86, optimistic: 4.2, realistic: 3.8, pessimistic: 3.4 },
      factors: [
        { name: 'Disbursement Speed', impact: 0.52 },
        { name: 'Verification Quality', impact: 0.41 },
        { name: 'Community Readiness', impact: 0.37 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
            <Brain className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Autonomous Data Intelligence</h1>
            <p className="text-slate-400">CRAFT: Create, Relate, Analyze, Forecast, Transmute</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Self-Learning Ecosystem
          </Badge>
          <Badge variant="outline" className="border-pink-500 text-pink-400">
            Predictive Intelligence
          </Badge>
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Auto-Transmutation
          </Badge>
        </div>

        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">Active Data Points</p>
              <p className="text-white text-2xl mb-1">847,234</p>
              <p className="text-emerald-400 text-sm">+12.4% this week</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Relational Mappings</p>
              <p className="text-white text-2xl mb-1">2.4M</p>
              <p className="text-purple-400 text-sm">AI-discovered</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Forecast Accuracy</p>
              <p className="text-white text-2xl mb-1">91%</p>
              <Progress value={91} className="h-2 mt-1" />
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">Auto-Actions</p>
              <p className="text-white text-2xl mb-1">12,456</p>
              <p className="text-cyan-400 text-sm">This month</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="datapoints" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="datapoints">Context-Aware Data</TabsTrigger>
            <TabsTrigger value="relations">Relational Mapping</TabsTrigger>
            <TabsTrigger value="forecasting">Predictive Models</TabsTrigger>
            <TabsTrigger value="transmutation">Transmutation Layer</TabsTrigger>
          </TabsList>

          {/* Context-Aware Data Points */}
          <TabsContent value="datapoints" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">Living Data Ecosystem</h2>
              <p className="text-slate-400">
                Each data point is context-aware and dynamically interacts with the ecosystem
              </p>
            </div>

            {dataPoints.map((dp) => (
              <Card 
                key={dp.id}
                className="bg-slate-900 border-slate-800 p-6 hover:border-purple-500 transition-all cursor-pointer"
                onClick={() => setActiveDataPoint(dp.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white">{dp.metric}</h3>
                      <Badge className={dp.type === 'ecological' ? 'bg-emerald-500/20 text-emerald-400' : dp.type === 'social' ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'}>
                        {dp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-slate-400">
                        <Network className="w-4 h-4 inline mr-1" />
                        {dp.relatedPoints} related points
                      </span>
                      <span className="text-emerald-400">
                        {(dp.confidence * 100).toFixed(1)}% confidence
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-3xl mb-1">{dp.value}</p>
                    <p className="text-slate-400 text-sm">{dp.unit}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Short-term</p>
                    <p className="text-cyan-400">{dp.predictions.shortTerm}</p>
                    <p className="text-emerald-400 text-xs">
                      +{((dp.predictions.shortTerm - dp.value) / dp.value * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Medium-term</p>
                    <p className="text-purple-400">{dp.predictions.mediumTerm}</p>
                    <p className="text-emerald-400 text-xs">
                      +{((dp.predictions.mediumTerm - dp.value) / dp.value * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-xs mb-1">Long-term</p>
                    <p className="text-pink-400">{dp.predictions.longTerm}</p>
                    <p className="text-emerald-400 text-xs">
                      +{((dp.predictions.longTerm - dp.value) / dp.value * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                {dp.signals.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-slate-400 text-sm mb-3">Transmutation Signals</p>
                    <div className="space-y-2">
                      {dp.signals.map((signal, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
                          <div className={`p-1 rounded ${signal.action === 'disburse' ? 'bg-emerald-500/20' : signal.action === 'rebalance' ? 'bg-cyan-500/20' : signal.action === 'alert' ? 'bg-amber-500/20' : 'bg-purple-500/20'}`}>
                            <Zap className={`w-4 h-4 ${signal.action === 'disburse' ? 'text-emerald-400' : signal.action === 'rebalance' ? 'text-cyan-400' : signal.action === 'alert' ? 'text-amber-400' : 'text-purple-400'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-white text-sm capitalize">{signal.action}</p>
                              <p className="text-slate-400 text-xs">{(signal.confidence * 100).toFixed(0)}% confidence</p>
                            </div>
                            <p className="text-slate-400 text-xs">{signal.reasoning}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </TabsContent>

          {/* Relational Mapping */}
          <TabsContent value="relations" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">AI-Driven Relational Mapping</h2>
              <p className="text-slate-400">
                Machine learning models discover hidden relationships between ecological, social, and economic data
              </p>
            </div>

            {relationalMappings.map((mapping) => (
              <Card key={mapping.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-cyan-500/20 px-4 py-2 rounded-lg">
                      <p className="text-cyan-400">{mapping.source}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <GitBranch className="w-5 h-5 text-purple-400 mb-1" />
                      <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                        {mapping.relationship}
                      </Badge>
                    </div>
                    <div className="bg-emerald-500/20 px-4 py-2 rounded-lg">
                      <p className="text-emerald-400">{mapping.target}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Strength</p>
                    <p className="text-white text-xl">{(mapping.strength * 100).toFixed(0)}%</p>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">{mapping.insight}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 p-6">
              <h3 className="text-white mb-3">Systems-Level Insights</h3>
              <p className="text-slate-400 text-sm mb-4">
                By analyzing 2.4M relational mappings, CRAFT identifies leverage points where small interventions 
                create outsized regenerative impact across the entire ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-xs mb-1">New Relationships Discovered</p>
                  <p className="text-white text-xl">12,456</p>
                  <p className="text-emerald-400 text-xs">This month</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-xs mb-1">Validation Accuracy</p>
                  <p className="text-white text-xl">94.3%</p>
                  <Progress value={94.3} className="h-1 mt-1" />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Predictive Forecasting */}
          <TabsContent value="forecasting" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-white mb-2">Predictive Modeling Engines</h2>
              <p className="text-slate-400">
                Forecast climate impact, regeneration yield, and ROI under different scenarios
              </p>
            </div>

            {forecastModels.map((model) => (
              <Card key={model.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-2">{model.metric}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-500/20 text-purple-400">{model.type} model</Badge>
                      <Badge className="bg-emerald-500/20 text-emerald-400">
                        {(model.accuracy * 100).toFixed(1)}% accuracy
                      </Badge>
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="mb-6">
                  <p className="text-slate-400 text-sm mb-3">Next Month Forecast</p>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-amber-500">
                      <p className="text-slate-400 text-xs mb-1">Optimistic</p>
                      <p className="text-white text-xl">{model.nextMonth.optimistic.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-cyan-500">
                      <p className="text-slate-400 text-xs mb-1">Realistic</p>
                      <p className="text-white text-xl">{model.nextMonth.realistic.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="text-slate-400 text-xs mb-1">Pessimistic</p>
                      <p className="text-white text-xl">{model.nextMonth.pessimistic.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-emerald-500">
                      <p className="text-slate-400 text-xs mb-1">Confidence</p>
                      <p className="text-white text-xl">{(model.nextMonth.confidence * 100).toFixed(0)}%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-slate-400 text-sm mb-3">Key Influencing Factors</p>
                  <div className="space-y-2">
                    {model.factors.map((factor, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-slate-300 text-sm">{factor.name}</span>
                          <span className="text-cyan-400 text-sm">{(factor.impact * 100).toFixed(0)}% impact</span>
                        </div>
                        <Progress value={factor.impact * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Transmutation Layer */}
          <TabsContent value="transmutation">
            <Card className="bg-slate-900 border-slate-800 p-8">
              <h2 className="text-white mb-6">Data Transmutation Layer</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white mb-4">Raw Data → Decision Signals</h3>
                  <p className="text-slate-400 mb-4">
                    The transmutation layer converts raw ecological, social, and economic data into actionable 
                    decision signals that automatically trigger financial operations.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg">
                          <Zap className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h4 className="text-white">Auto-Disbursement</h4>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        When verified outcomes exceed targets by 10%+, automatically trigger next phase funding
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs">Triggered this month</span>
                        <span className="text-emerald-400">1,247 times</span>
                      </div>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <BarChart3 className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h4 className="text-white">Portfolio Rebalancing</h4>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        Detect emerging high-performers and automatically reallocate liquidity pools
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs">Rebalances executed</span>
                        <span className="text-cyan-400">847 times</span>
                      </div>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-amber-500/20 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-amber-400" />
                        </div>
                        <h4 className="text-white">Risk Alerts</h4>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        Early warning system for projects showing declining indicators
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs">Alerts generated</span>
                        <span className="text-amber-400">234 alerts</span>
                      </div>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Target className="w-5 h-5 text-purple-400" />
                        </div>
                        <h4 className="text-white">Verification Triggers</h4>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        Anomaly detection triggers on-demand field verification
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs">Verifications requested</span>
                        <span className="text-purple-400">456 times</span>
                      </div>
                    </Card>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-purple-500/30 p-6">
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-white mb-3">Impact Metrics</h3>
                    <div className="grid grid-cols-3 gap-6 mb-4">
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Capital Efficiency</p>
                        <p className="text-white text-2xl">+47%</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Decision Latency</p>
                        <p className="text-white text-2xl">-82%</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Accuracy</p>
                        <p className="text-white text-2xl">94.2%</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      CRAFT reduces the lag between verification → funding → impact from weeks to minutes
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
