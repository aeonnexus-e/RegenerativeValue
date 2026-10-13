import { useState } from 'react';
import { 
  Satellite, Coins, Zap, Heart, TrendingUp, Globe,
  ArrowRight, CheckCircle, Shield, Target, BarChart3, Users
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface InnovationHubProps {
  onNavigate: (page: string) => void;
}

export function InnovationHub({ onNavigate }: InnovationHubProps) {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const innovationPillars = [
    {
      id: 'cis',
      title: 'Climate Intelligence Stack (CIS)',
      subtitle: 'A Techno-Ecological Oracle',
      description: 'AI-driven verification infrastructure that measures ecological and socio-economic performance in real time using satellites, IoT, and community data.',
      icon: Satellite,
      color: 'from-cyan-500 to-blue-600',
      page: 'cis',
      features: [
        'Real-time satellite imagery analysis',
        'IoT sensor network integration',
        'Community data validation',
        'Continuous monitoring vs. static audits',
        '91% AI confidence score'
      ],
      impact: 'Provides tamper-proof, data-backed evidence for climate impact, transforming outcomes into investable assets.',
      metrics: {
        verifications: '1.45M+',
        confidence: '91%',
        sources: '48K+',
        co2Verified: '45.6M tonnes'
      }
    },
    {
      id: 'bcqi',
      title: 'Blockchain-Quantified Impact (BCQI)',
      subtitle: 'Tokenized Proof of Regeneration',
      description: 'Every verified outcome becomes a Regenerative Unit (RU)—a cryptographically secure, data-backed digital asset that encodes measurable outcomes into tradable digital proofs.',
      icon: Coins,
      color: 'from-emerald-500 to-cyan-600',
      page: 'bcqi',
      features: [
        'Cryptographic verification of outcomes',
        'Real-time transparent accounting',
        'Tradable impact assets',
        'Blockchain-backed certificates',
        'Tamper-proof impact records'
      ],
      impact: 'Creates liquidity for climate-positive outcomes while enabling impact-linked finance and decentralized trust.',
      metrics: {
        rusIssued: '2.8M+',
        marketCap: '$12.4B',
        avgPrice: '$4,421',
        transactions: '847K+'
      }
    },
    {
      id: 'oore',
      title: 'Outcome-Oriented Regenerative Engine (OORE)',
      subtitle: 'Finance that Pays for Results',
      description: "RVX's funding architecture releases capital only when verified outcomes are achieved, integrating AI-verified triggers with smart contracts that automate disbursements.",
      icon: Zap,
      color: 'from-cyan-500 to-purple-600',
      page: 'oore',
      features: [
        'Results-based disbursements',
        'Smart contract automation',
        'AI-verified triggers',
        'Risk transfer to capital',
        'Blended finance integration'
      ],
      impact: 'Shifts risk from communities to capital, incentivizing genuine regeneration and protecting vulnerable populations.',
      metrics: {
        contracts: '12.4K',
        disbursed: '$8.7B',
        performance: '87.3%',
        outcomes: '45.2K'
      }
    },
    {
      id: 'ecp',
      title: 'Ethical Commons Protocol (ECP)',
      subtitle: 'Governance for the Regenerative Century',
      description: 'Ethical AI and governance layer ensuring that communities, Indigenous groups, and innovators share in the value they co-create through transparent co-ownership models.',
      icon: Heart,
      color: 'from-pink-500 to-purple-600',
      page: 'ecp',
      features: [
        'Community revenue sharing',
        'Digital royalties & co-ownership',
        'Ethical AI audits',
        'Transparent governance',
        'Indigenous rights protection'
      ],
      impact: 'Equitably redistributes climate wealth and ensures alignment with SDGs and human rights.',
      metrics: {
        stakeholders: '156K+',
        distributed: '$342M',
        ethicalScore: '94.2%',
        participation: '76.8%'
      }
    },
    {
      id: 'rob',
      title: 'Regenerative Outcome Bonds (ROB)',
      subtitle: 'Next-Generation Impact Bonds',
      description: 'Impact bonds backed not by government guarantees but by verified ecological performance, merging bond markets with blockchain-verifiable impact data.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-cyan-600',
      page: 'rob',
      features: [
        'Performance-backed returns',
        'Blockchain verification',
        'Variable impact-linked yields',
        'Risk-adjusted pricing',
        'Frontier economy access'
      ],
      impact: 'Expands access to climate finance for frontier and emerging economies while creating data-backed impact returns.',
      metrics: {
        bondsIssued: '247',
        investment: '$18.9B',
        impactScore: '88.4%',
        returnMultiplier: '1.23x'
      }
    },
    {
      id: 'pilots',
      title: 'Pilot Projects',
      subtitle: 'Localized Proofs of Concept',
      description: 'Real-world demonstrations in fragile, climate-vulnerable regions, blending diaspora capital, AI verification, and local knowledge.',
      icon: Globe,
      color: 'from-cyan-500 to-purple-600',
      page: 'pilots',
      features: [
        'Pakistan: Regenerative Agriculture',
        'Afghanistan: Watershed Restoration',
        'Community-led implementation',
        'Diaspora financing models',
        'Proven impact metrics'
      ],
      impact: 'Demonstrates how regenerative finance operates in frontier regions with measurable, scalable results.',
      metrics: {
        pilots: '12',
        countries: '8',
        beneficiaries: '234K+',
        successRate: '91.7%'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10" />
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-cyan-500 text-cyan-400">
              Climate Finance Infrastructure
            </Badge>
            <h1 className="text-white mb-4">
              Innovation Hub
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
              A comprehensive climate finance infrastructure for measuring, monetizing, and scaling regeneration
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                <CheckCircle className="w-3 h-3 mr-2" />
                Market Creation
              </Badge>
              <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                <Shield className="w-3 h-3 mr-2" />
                Verified Impact
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                <Target className="w-3 h-3 mr-2" />
                Results-Based
              </Badge>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-slate-900/50 border-slate-800 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-white">Liquid Asset Class</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Transforms biodiversity, carbon capture, and community resilience into a global, investable asset class
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white">Verified Transparency</h3>
              </div>
              <p className="text-slate-400 text-sm">
                AI + blockchain fusion provides real-time, tamper-proof evidence of ecological and social outcomes
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white">Ethical Governance</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Community ownership and transparent value-sharing ensures equitable distribution of climate wealth
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Innovation Pillars */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-white mb-2">Innovation Pillars</h2>
          <p className="text-slate-400">
            Six interconnected innovations creating a regenerative market operating system
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="technical">Technical Stack</TabsTrigger>
            <TabsTrigger value="differentiation">Strategic Edge</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {innovationPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card 
                    key={pillar.id}
                    className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500 transition-all cursor-pointer group"
                    onClick={() => onNavigate(pillar.page)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-3 bg-gradient-to-br ${pillar.color} rounded-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white group-hover:text-cyan-400 transition-colors">
                              {pillar.title}
                            </h3>
                            <p className="text-slate-400 text-sm">{pillar.subtitle}</p>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <p className="text-slate-300 text-sm mb-4">
                      {pillar.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(pillar.metrics).map(([key, value]) => (
                        <div key={key} className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-slate-400 text-xs mb-1 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <p className="text-emerald-400 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{pillar.impact}</span>
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="technical">
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-800 p-8">
                <h3 className="text-white mb-6">Integrated Technology Stack</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Satellite className="w-5 h-5 text-cyan-400" />
                        <h4 className="text-white">Data Layer</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• Satellite imagery (Sentinel-2, Landsat-9)</li>
                        <li>• IoT sensor networks</li>
                        <li>• Community data collection</li>
                        <li>• Multi-source validation</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-emerald-400" />
                        <h4 className="text-white">AI & Blockchain</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• AI verification algorithms</li>
                        <li>• Smart contract automation</li>
                        <li>• Cryptographic tokenization</li>
                        <li>• Transparent ledger</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-purple-400" />
                        <h4 className="text-white">Finance Layer</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400">
                        <li>• Outcome-based contracts</li>
                        <li>• Impact-backed bonds</li>
                        <li>• Revenue distribution</li>
                        <li>• Market infrastructure</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="text-white mb-4">System Integration Flow</h4>
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                      <Badge className="bg-cyan-500/20 text-cyan-400">CIS Verification</Badge>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <Badge className="bg-emerald-500/20 text-emerald-400">BCQI Tokenization</Badge>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <Badge className="bg-purple-500/20 text-purple-400">OORE Disbursement</Badge>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <Badge className="bg-pink-500/20 text-pink-400">ECP Distribution</Badge>
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      <Badge className="bg-amber-500/20 text-amber-400">ROB Returns</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="differentiation">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-900 border-slate-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-white">Technological Edge</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>AI + blockchain fusion for measurable impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Real-time vs. annual verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Multi-source data triangulation</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-slate-900 border-slate-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-white">Financial Innovation</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Outcome-linked bonds & tokenized assets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Risk transfer from communities to capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Blended finance architecture</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-slate-900 border-slate-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-white">Social Impact</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Inclusive governance & community ownership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Transparent value-sharing protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Indigenous rights protection</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-slate-900 border-slate-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <Globe className="w-5 h-5 text-pink-400" />
                    </div>
                    <h3 className="text-white">Environmental Metrics</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>Verified ecological restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>Real-time resilience monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>SDG alignment tracking</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-emerald-500/30 p-8">
                <div className="text-center">
                  <h3 className="text-white mb-3">System-Level Innovation</h3>
                  <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
                    RVX isn't just a product—it's climate finance infrastructure. A digital backbone capable of 
                    powering global climate capital flows through interoperability with national MRV systems, 
                    green bond markets, and decentralized ReFi ecosystems.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button 
                      onClick={() => onNavigate('market-os')}
                      className="bg-cyan-600 hover:bg-cyan-700"
                    >
                      Market Operating System
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      onClick={() => onNavigate('superdashboard')}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Explore Superdashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
