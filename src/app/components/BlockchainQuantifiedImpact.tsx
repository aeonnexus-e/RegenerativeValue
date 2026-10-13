import { useState, useEffect } from 'react';
import { 
  Coins, Shield, TrendingUp, CheckCircle, Lock, Unlock,
  ExternalLink, Copy, AlertCircle, BarChart3, Globe
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  getRegenerativeUnits, 
  getBlockchainTransactions, 
  getBCQIMetrics 
} from '../services/bcqiService';
import type { RegenerativeUnit, BlockchainTransaction } from '../types';

interface BlockchainQuantifiedImpactProps {
  onNavigate: (page: string) => void;
}

export function BlockchainQuantifiedImpact({ onNavigate }: BlockchainQuantifiedImpactProps) {
  const [rus, setRUs] = useState<RegenerativeUnit[]>([]);
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getBCQIMetrics> | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRU, setSelectedRU] = useState<RegenerativeUnit | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [rusData, txData, metricsData] = await Promise.all([
      getRegenerativeUnits(),
      getBlockchainTransactions(),
      Promise.resolve(getBCQIMetrics())
    ]);
    setRUs(rusData);
    setTransactions(txData);
    setMetrics(metricsData);
    setLoading(false);
  };

  const getImpactTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      carbon: 'text-emerald-400 bg-emerald-500/20',
      biodiversity: 'text-purple-400 bg-purple-500/20',
      water: 'text-blue-400 bg-blue-500/20',
      soil: 'text-orange-400 bg-orange-500/20',
      social: 'text-pink-400 bg-pink-500/20',
      economic: 'text-amber-400 bg-amber-500/20'
    };
    return colors[type] || 'text-slate-400 bg-slate-500/20';
  };

  const getTradingStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      tradable: 'bg-emerald-500/20 text-emerald-400',
      locked: 'bg-amber-500/20 text-amber-400',
      retired: 'bg-slate-500/20 text-slate-400',
      reserved: 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[status] || 'bg-slate-500/20 text-slate-400';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Coins className="w-12 h-12 animate-pulse mx-auto mb-4 text-emerald-400" />
          <p className="text-slate-400">Loading Blockchain-Quantified Impact...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg">
            <Coins className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Blockchain-Quantified Impact (BCQI)</h1>
            <p className="text-slate-400">Tokenized Proof of Regeneration</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Cryptographic Verification
          </Badge>
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Tradable Impact Assets
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Transparent Accounting
          </Badge>
        </div>
      </div>

      {/* Metrics Overview */}
      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Total RUs Issued</p>
                <Coins className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalRUsIssued.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">
                {metrics.totalRUsTraded.toLocaleString()} traded
              </p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Market Cap</p>
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">
                ${(metrics.marketCap / 1000000000).toFixed(2)}B
              </p>
              <p className="text-cyan-400 text-sm">
                24h: ${(metrics.tradingVolume24h / 1000000).toFixed(1)}M
              </p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Avg Price</p>
                <BarChart3 className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">${metrics.averagePrice.toLocaleString()}</p>
              <p className="text-purple-400 text-sm">per RU</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Network</p>
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.blockchainTransactions.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">
                {metrics.averageConfirmationTime}s avg confirm
              </p>
            </Card>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="regenerative-units" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="regenerative-units">Regenerative Units</TabsTrigger>
            <TabsTrigger value="transactions">Blockchain Transactions</TabsTrigger>
            <TabsTrigger value="innovation">Innovation Edge</TabsTrigger>
          </TabsList>

          <TabsContent value="regenerative-units" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {rus.map((ru) => (
                <Card 
                  key={ru.id}
                  className="bg-slate-900 border-slate-800 p-6 hover:border-emerald-500 transition-all cursor-pointer"
                  onClick={() => setSelectedRU(ru)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white">{ru.tokenId}</h3>
                        <Badge className={getTradingStatusColor(ru.tradingStatus)}>
                          {ru.tradingStatus}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{ru.metadata.location}</p>
                    </div>
                    <Badge className={getImpactTypeColor(ru.impactType)}>
                      {ru.impactType}
                    </Badge>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg mb-4">
                    <p className="text-slate-400 text-sm mb-1">{ru.quantifiedOutcome.metric}</p>
                    <p className="text-white text-2xl">
                      {ru.quantifiedOutcome.value.toLocaleString()} 
                      <span className="text-slate-400 text-base ml-2">{ru.quantifiedOutcome.unit}</span>
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Verified by</span>
                      <span className="text-emerald-400">{ru.verification.verifier}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Verification Date</span>
                      <span className="text-slate-300">
                        {ru.verification.verifiedAt.toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Current Owner</span>
                      <span className="text-cyan-400">{ru.currentOwner}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(ru.blockchainHash);
                      }}
                    >
                      <Copy className="w-3 h-3 mr-2" />
                      Copy Hash
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(ru.certificateUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Certificate
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    {ru.metadata.sdgAlignment.map((sdg) => (
                      <Badge 
                        key={sdg} 
                        variant="outline" 
                        className="border-slate-700 text-slate-400 text-xs"
                      >
                        SDG {sdg}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            {transactions.map((tx) => (
              <Card key={tx.txHash} className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge 
                        className={
                          tx.type === 'mint' ? 'bg-emerald-500/20 text-emerald-400' :
                          tx.type === 'transfer' ? 'bg-cyan-500/20 text-cyan-400' :
                          tx.type === 'retire' ? 'bg-slate-500/20 text-slate-400' :
                          'bg-amber-500/20 text-amber-400'
                        }
                      >
                        {tx.type}
                      </Badge>
                      <Badge 
                        className={
                          tx.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-400' :
                          tx.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-red-500/20 text-red-400'
                        }
                      >
                        {tx.status}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {tx.timestamp.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{tx.value.toLocaleString()} RU</p>
                    <p className="text-slate-400 text-sm">Gas: {tx.gasUsed} ETH</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">From</p>
                    <p className="text-slate-300 text-sm font-mono">{tx.from}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">To</p>
                    <p className="text-slate-300 text-sm font-mono">{tx.to}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm font-mono">{tx.txHash}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(tx.txHash)}
                  >
                    <Copy className="w-3 h-3" />
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
                    <h3 className="text-white">Transparency vs. Opacity</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Traditional voluntary carbon credits suffer from opacity and greenwashing concerns. 
                    BCQI replaces this with real-time, transparent, blockchain-verified impact accounting 
                    where every Regenerative Unit is cryptographically linked to verified outcomes from 
                    the Climate Intelligence Stack.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Voluntary Carbon Credits</p>
                      <div className="space-y-1">
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="w-3 h-3" />
                          Opaque verification
                        </p>
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="w-3 h-3" />
                          Annual audits only
                        </p>
                        <p className="text-red-400 text-sm flex items-center gap-2">
                          <AlertCircle className="w-3 h-3" />
                          High fraud risk
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-emerald-500/30">
                      <p className="text-emerald-400 text-sm mb-1">BCQI Regenerative Units</p>
                      <div className="space-y-1">
                        <p className="text-emerald-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3" />
                          Blockchain transparent
                        </p>
                        <p className="text-emerald-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3" />
                          Real-time verification
                        </p>
                        <p className="text-emerald-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3 h-3" />
                          Tamper-proof
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white">Creating Liquidity</h3>
                  </div>
                  <p className="text-slate-400">
                    By encoding measurable outcomes (CO₂ sequestered, hectares restored, biodiversity gains) 
                    into tradable digital proofs, BCQI creates liquidity for climate-positive outcomes. 
                    This enables impact-linked finance and decentralized trust, transforming regeneration 
                    into an investable asset class.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white">Global Interoperability</h3>
                  </div>
                  <p className="text-slate-400">
                    BCQI uses open blockchain standards, making Regenerative Units compatible with 
                    existing carbon registries, green bond markets, and DeFi protocols. This creates 
                    a unified layer for measuring, trading, and retiring verified impact across ecosystems.
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
