import { useState, useEffect } from 'react';
import { 
  Zap, DollarSign, Target, CheckCircle, Clock, TrendingUp,
  AlertCircle, BarChart3, FileText
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { getOutcomeContracts, getOOREMetrics } from '../services/ooreService';
import type { OutcomeBasedContract } from '../types';

interface OutcomeOrientedEngineProps {
  onNavigate: (page: string) => void;
}

export function OutcomeOrientedEngine({ onNavigate }: OutcomeOrientedEngineProps) {
  const [contracts, setContracts] = useState<OutcomeBasedContract[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getOOREMetrics> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [contractsData, metricsData] = await Promise.all([
      getOutcomeContracts(),
      Promise.resolve(getOOREMetrics())
    ]);
    setContracts(contractsData);
    setMetrics(metricsData);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Zap className="w-12 h-12 animate-pulse mx-auto mb-4 text-cyan-400" />
          <p className="text-slate-400">Loading Outcome-Oriented Regenerative Engine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Outcome-Oriented Regenerative Engine (OORE)</h1>
            <p className="text-slate-400">Finance that Pays for Results</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Results-Based Finance
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Smart Contract Automation
          </Badge>
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Risk Transfer
          </Badge>
        </div>
      </div>

      {/* Metrics */}
      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Total Contracts</p>
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalContracts.toLocaleString()}</p>
              <p className="text-cyan-400 text-sm">{metrics.activeContracts} active</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Funds Disbursed</p>
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">
                ${(metrics.fundsDisbursed / 1000000000).toFixed(2)}B
              </p>
              <p className="text-emerald-400 text-sm">
                ${(metrics.fundsLocked / 1000000000).toFixed(2)}B locked
              </p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Performance Score</p>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">{metrics.averagePerformanceScore.toFixed(1)}%</p>
              <Progress value={metrics.averagePerformanceScore} className="h-2" />
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Outcomes Achieved</p>
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.outcomesAchieved.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">
                {metrics.outcomesInProgress.toLocaleString()} in progress
              </p>
            </Card>
          </div>
        </div>
      )}

      {/* Contracts */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="contracts" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="contracts">Active Contracts</TabsTrigger>
            <TabsTrigger value="innovation">Innovation Edge</TabsTrigger>
          </TabsList>

          <TabsContent value="contracts" className="space-y-4">
            {contracts.map((contract) => (
              <Card key={contract.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{contract.projectId}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-cyan-500/20 text-cyan-400">
                        {contract.status}
                      </Badge>
                      <Badge variant="outline" className="border-slate-700 text-slate-400">
                        {contract.funder}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Total Funding</p>
                    <p className="text-white">
                      {contract.currency} {contract.totalFunding.toLocaleString()}
                    </p>
                    <p className="text-emerald-400 text-sm mt-1">
                      Performance: {contract.performanceScore.toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {contract.outcomes.map((outcome) => (
                    <div key={outcome.id} className="bg-slate-800 p-4 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-white text-sm mb-1">{outcome.description}</p>
                          <p className="text-slate-400 text-xs">{outcome.metric}</p>
                        </div>
                        {outcome.achieved && (
                          <Badge className="bg-emerald-500/20 text-emerald-400">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Achieved
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex-1">
                          <Progress 
                            value={(outcome.currentValue / outcome.targetValue) * 100} 
                            className="h-2"
                          />
                          <p className="text-xs text-slate-400 mt-1">
                            {outcome.currentValue.toLocaleString()} / {outcome.targetValue.toLocaleString()} {outcome.unit}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <p className="text-slate-400 text-xs">Allocation</p>
                          <p className="text-cyan-400 text-sm">
                            ${outcome.fundingAllocation.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Contract Address:</span>
                    <span className="text-slate-300 font-mono">{contract.contractAddress}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-slate-400">Disbursements:</span>
                    <span className="text-slate-300">
                      {contract.disbursementSchedule.filter(d => d.status === 'disbursed').length} / {contract.disbursementSchedule.length} triggered
                    </span>
                  </div>
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
                    <Target className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white">Shifting Risk from Communities to Capital</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Traditional development finance requires communities to take on project risk. 
                    OORE flips this: capital is only released when verified outcomes are achieved, 
                    shifting risk to investors and funders. This incentivizes genuine regeneration 
                    and protects vulnerable communities.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Traditional Grants</p>
                      <div className="space-y-1">
                        <p className="text-red-400 text-sm">• Upfront disbursement</p>
                        <p className="text-red-400 text-sm">• Community bears risk</p>
                        <p className="text-red-400 text-sm">• No outcome guarantee</p>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-cyan-500/30">
                      <p className="text-cyan-400 text-sm mb-1">OORE Contracts</p>
                      <div className="space-y-1">
                        <p className="text-emerald-400 text-sm">• Outcome-triggered</p>
                        <p className="text-emerald-400 text-sm">• Capital bears risk</p>
                        <p className="text-emerald-400 text-sm">• Verified results</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white">Smart Contract Automation</h3>
                  </div>
                  <p className="text-slate-400">
                    OORE integrates AI-verified triggers from CIS with smart contracts that automate 
                    disbursements. When outcomes are verified (e.g., 50,000 tonnes CO₂ sequestered), 
                    the smart contract automatically releases funds - removing intermediaries and reducing 
                    disbursement time from months to minutes.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-white">Blended Finance Architecture</h3>
                  </div>
                  <p className="text-slate-400">
                    OORE bridges philanthropic, public, and private capital into unified outcome-backed 
                    finance structures. Grants de-risk early outcomes, enabling private investment in 
                    later-stage outcomes with proven track records. This creates a continuum from 
                    catalytic to commercial capital.
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
