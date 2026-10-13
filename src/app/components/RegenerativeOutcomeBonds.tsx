import { useState, useEffect } from 'react';
import { 
  TrendingUp, DollarSign, BarChart3, Shield, Target, Users,
  ExternalLink, CheckCircle, Clock
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  getRegenerativeOutcomeBonds,
  getBondPerformance,
  getROBMetrics 
} from '../services/robService';
import type { RegenerativeOutcomeBond, BondPerformance } from '../types';

interface RegenerativeOutcomeBondsProps {
  onNavigate: (page: string) => void;
}

export function RegenerativeOutcomeBonds({ onNavigate }: RegenerativeOutcomeBondsProps) {
  const [bonds, setBonds] = useState<RegenerativeOutcomeBond[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getROBMetrics> | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBond, setSelectedBond] = useState<RegenerativeOutcomeBond | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [bondsData, metricsData] = await Promise.all([
      getRegenerativeOutcomeBonds(),
      Promise.resolve(getROBMetrics())
    ]);
    setBonds(bondsData);
    setMetrics(metricsData);
    setLoading(false);
  };

  const getRiskColor = (rating: string) => {
    if (rating.startsWith('AA')) return 'text-emerald-400';
    if (rating.startsWith('A')) return 'text-cyan-400';
    if (rating.startsWith('BBB')) return 'text-amber-400';
    return 'text-slate-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <TrendingUp className="w-12 h-12 animate-pulse mx-auto mb-4 text-emerald-400" />
          <p className="text-slate-400">Loading Regenerative Outcome Bonds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Regenerative Outcome Bonds (ROB)</h1>
            <p className="text-slate-400">Impact-Backed Financial Instruments</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Ecological Performance Backed
          </Badge>
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Blockchain Verified
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Variable Returns
          </Badge>
        </div>
      </div>

      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Bonds Issued</p>
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalBondsIssued}</p>
              <p className="text-emerald-400 text-sm">{metrics.activeOfferings} active</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Total Investment</p>
                <DollarSign className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">${(metrics.totalInvestment / 1000000000).toFixed(2)}B</p>
              <p className="text-cyan-400 text-sm">
                ${(metrics.totalValueIssued / 1000000000).toFixed(2)}B issued
              </p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Avg Impact Score</p>
                <BarChart3 className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">{metrics.averageImpactScore.toFixed(1)}%</p>
              <Progress value={metrics.averageImpactScore} className="h-2" />
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Performance</p>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{(metrics.averagePerformanceMultiplier * 100 - 100).toFixed(1)}%</p>
              <p className="text-emerald-400 text-sm">avg return multiplier</p>
            </Card>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="bonds" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="bonds">Available Bonds</TabsTrigger>
            <TabsTrigger value="innovation">Innovation Edge</TabsTrigger>
          </TabsList>

          <TabsContent value="bonds" className="space-y-4">
            {bonds.map((bond) => (
              <Card 
                key={bond.id} 
                className="bg-slate-900 border-slate-800 p-6 hover:border-emerald-500 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{bond.bondId}</h3>
                    <p className="text-slate-400 text-sm mb-2">{bond.issuer}</p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-500/20 text-emerald-400">
                        {bond.status}
                      </Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-400">
                        {bond.bondType}
                      </Badge>
                      <Badge className={`${getRiskColor(bond.riskRating)}`}>
                        {bond.riskRating}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Face Value</p>
                    <p className="text-white text-2xl">${(bond.faceValue / 1000000).toFixed(1)}M</p>
                    <p className="text-emerald-400 text-sm mt-1">
                      Current: ${(bond.currentValue / 1000000).toFixed(2)}M
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Coupon Rate</p>
                    <p className="text-cyan-400">{bond.couponRate.toFixed(2)}%</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Impact Score</p>
                    <p className="text-purple-400">{bond.impactScore.toFixed(1)}/100</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Performance</p>
                    <p className="text-emerald-400">{bond.performanceMultiplier.toFixed(3)}x</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Maturity</p>
                    <p className="text-slate-300 text-sm">
                      {bond.maturityDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Underlying Outcomes</p>
                  <div className="space-y-2">
                    {bond.underlyingOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-300 text-sm">{outcome.outcomeType}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-cyan-400 text-sm">
                            {outcome.targetValue.toLocaleString()}
                          </span>
                          <span className="text-slate-500 text-xs ml-2">
                            {outcome.verificationSchedule}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {bond.investors.length > 0 && (
                  <div className="mb-4">
                    <p className="text-slate-400 text-sm mb-2">Investors ({bond.investors.length})</p>
                    <div className="flex items-center gap-2">
                      {bond.investors.slice(0, 3).map((investor, i) => (
                        <Badge key={i} variant="outline" className="border-slate-700 text-slate-400">
                          {investor.investorName}
                        </Badge>
                      ))}
                      {bond.investors.length > 3 && (
                        <Badge variant="outline" className="border-slate-700 text-slate-400">
                          +{bond.investors.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    Invest in Bond
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Prospectus
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="innovation">
            <Card className="bg-slate-900 border-slate-800 p-8">
              <h2 className="text-white mb-6">Innovation Edge</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-white">Ecological Performance vs. Government Guarantees</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Unlike traditional green bonds backed by government guarantees, ROBs are backed by 
                    verified ecological performance data from CIS and BCQI. Returns are directly linked 
                    to outcome achievement, creating genuine accountability and transparency.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Traditional Green Bonds</p>
                      <div className="space-y-1">
                        <p className="text-slate-300 text-sm">• Government backed</p>
                        <p className="text-slate-300 text-sm">• Fixed returns</p>
                        <p className="text-slate-300 text-sm">• Minimal impact verification</p>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-emerald-500/30">
                      <p className="text-emerald-400 text-sm mb-1">Regenerative Outcome Bonds</p>
                      <div className="space-y-1">
                        <p className="text-emerald-400 text-sm">• Performance backed</p>
                        <p className="text-emerald-400 text-sm">• Variable returns</p>
                        <p className="text-emerald-400 text-sm">• Continuous verification</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white">Pioneering Hybrid Instrument</h3>
                  </div>
                  <p className="text-slate-400">
                    ROBs merge bond markets with blockchain-verifiable impact data, creating a new 
                    hybrid between traditional fixed income and digital assets. This pioneering structure 
                    expands access to climate finance for frontier and emerging economies that lack 
                    sovereign credit ratings.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white">Risk-Adjusted Impact Returns</h3>
                  </div>
                  <p className="text-slate-400">
                    By tying returns to verified outcomes, ROBs align investor incentives with genuine 
                    impact. Higher ecological performance triggers performance multipliers, rewarding 
                    investors for supporting projects that exceed targets while protecting against 
                    underperformance.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
