import { useState, useEffect } from 'react';
import { Users, PieChart, Shield, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  getGovernanceStakes, 
  getRevenueDistributions,
  getEthicalAIAudits,
  getECPMetrics 
} from '../services/ecpService';
import type { GovernanceStake, RevenueDistribution, EthicalAIAudit } from '../types';

interface EthicalCommonsProtocolProps {
  onNavigate: (page: string) => void;
}

export function EthicalCommonsProtocol({ onNavigate }: EthicalCommonsProtocolProps) {
  const [stakes, setStakes] = useState<GovernanceStake[]>([]);
  const [distributions, setDistributions] = useState<RevenueDistribution[]>([]);
  const [audits, setAudits] = useState<EthicalAIAudit[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getECPMetrics> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [stakesData, distributionsData, auditsData, metricsData] = await Promise.all([
      getGovernanceStakes(),
      getRevenueDistributions(),
      getEthicalAIAudits(),
      Promise.resolve(getECPMetrics())
    ]);
    setStakes(stakesData);
    setDistributions(distributionsData);
    setAudits(auditsData);
    setMetrics(metricsData);
    setLoading(false);
  };

  const getStakeholderColor = (type: string) => {
    const colors: Record<string, string> = {
      community: 'bg-emerald-500/20 text-emerald-400',
      indigenous: 'bg-purple-500/20 text-purple-400',
      innovator: 'bg-cyan-500/20 text-cyan-400',
      investor: 'bg-amber-500/20 text-amber-400',
      government: 'bg-blue-500/20 text-blue-400'
    };
    return colors[type] || 'bg-slate-500/20 text-slate-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 animate-pulse mx-auto mb-4 text-pink-400" />
          <p className="text-slate-400">Loading Ethical Commons Protocol...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Ethical Commons Protocol (ECP)</h1>
            <p className="text-slate-400">Governance for the Regenerative Century</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-pink-500 text-pink-400">
            Community Ownership
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Fair Revenue Sharing
          </Badge>
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Ethical AI
          </Badge>
        </div>
      </div>

      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Total Stakeholders</p>
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalStakeholders.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">{metrics.activeProjects} projects</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Revenue Distributed</p>
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">${(metrics.totalRevenueDistributed / 1000000).toFixed(1)}M</p>
              <p className="text-cyan-400 text-sm">{metrics.communityOwnership}% community owned</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Ethical AI Score</p>
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">{(metrics.ethicalAIScore * 100).toFixed(1)}%</p>
              <Progress value={metrics.ethicalAIScore * 100} className="h-2" />
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Participation Rate</p>
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.governanceParticipation.toFixed(1)}%</p>
              <p className="text-emerald-400 text-sm">{metrics.disputeResolutionRate}% disputes resolved</p>
            </Card>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="governance" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="governance">Governance Stakes</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Sharing</TabsTrigger>
            <TabsTrigger value="ai-audit">AI Ethics</TabsTrigger>
          </TabsList>

          <TabsContent value="governance" className="space-y-4">
            {stakes.map((stake) => (
              <Card key={stake.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white mb-2">{stake.stakeholder}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className={getStakeholderColor(stake.stakeholderType)}>
                        {stake.stakeholderType}
                      </Badge>
                      <Badge variant="outline" className="border-slate-700 text-slate-400">
                        {stake.projectId}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">Revenue Share</p>
                    <p className="text-white text-2xl">{stake.revenueShare}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Voting Power</p>
                    <p className="text-cyan-400">{stake.votingPower}%</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm mb-1">Contributions</p>
                    <p className="text-emerald-400">{stake.contributions.length}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Rights & Privileges</p>
                  <div className="flex flex-wrap gap-2">
                    {stake.rights.map((right, i) => (
                      <Badge key={i} variant="outline" className="border-slate-700 text-slate-300">
                        {right}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-2">Contributions</p>
                  <div className="space-y-2">
                    {stake.contributions.map((contrib) => (
                      <div key={contrib.id} className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">{contrib.description}</span>
                        <span className="text-emerald-400">${contrib.valuation.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            {distributions.map((dist) => (
              <Card key={dist.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-2">Revenue Distribution</h3>
                    <p className="text-slate-400 text-sm">{dist.distributionDate.toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Total Revenue</p>
                    <p className="text-white text-2xl">${dist.totalRevenue.toLocaleString()}</p>
                    <Badge className="bg-emerald-500/20 text-emerald-400 mt-2">
                      {dist.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {dist.allocations.map((allocation, i) => (
                    <div key={i} className="bg-slate-800 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-white">{allocation.stakeholderName}</p>
                        <p className="text-emerald-400">${allocation.amount.toLocaleString()}</p>
                      </div>
                      <Progress value={allocation.percentage} className="h-2 mb-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">{allocation.percentage}% allocation</span>
                        {allocation.txHash && (
                          <span className="text-slate-500 font-mono text-xs">{allocation.txHash.slice(0, 16)}...</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="ai-audit" className="space-y-4">
            {audits.map((audit) => (
              <Card key={audit.id} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-2">{audit.system}</h3>
                    <p className="text-slate-400 text-sm">{audit.timestamp.toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">Compliance Score</p>
                    <p className="text-white text-2xl">{(audit.complianceScore * 100).toFixed(0)}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {Object.entries(audit.checks).map(([key, value]) => (
                    <div key={key} className="bg-slate-800 p-3 rounded-lg text-center">
                      <p className="text-slate-400 text-xs mb-1 capitalize">{key}</p>
                      <p className="text-white">{(value * 100).toFixed(0)}%</p>
                      <Progress value={value * 100} className="h-1 mt-2" />
                    </div>
                  ))}
                </div>

                {audit.issues.length > 0 && (
                  <div className="mb-4">
                    <p className="text-amber-400 text-sm mb-2">Issues Identified</p>
                    <ul className="space-y-1">
                      {audit.issues.map((issue, i) => (
                        <li key={i} className="text-slate-300 text-sm">• {issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {audit.recommendations.length > 0 && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-cyan-400 text-sm mb-2">Recommendations</p>
                    <ul className="space-y-1">
                      {audit.recommendations.map((rec, i) => (
                        <li key={i} className="text-slate-300 text-sm">• {rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
