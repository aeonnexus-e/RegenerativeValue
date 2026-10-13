import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Droplet, DollarSign, Lock, Unlock, ShoppingCart, Zap, Shield, Activity } from "lucide-react";

interface RVTMarketplaceProps {
  onNavigate: (page: string) => void;
}

export function RVTMarketplace({ onNavigate }: RVTMarketplaceProps) {
  const [selectedRVT, setSelectedRVT] = useState<string | null>(null);
  const [tradeAmount, setTradeAmount] = useState("");
  const [stakingAmount, setStakingAmount] = useState("");

  // Mock data for marketplace
  const rvtListings = [
    { id: "RVT-001", type: "Carbon Sequestration", price: 45.2, change24h: 8.3, volume: 125400, liquidity: 890000, apr: 12.5, risk: "low" },
    { id: "RVT-002", type: "Biodiversity Restoration", price: 62.8, change24h: -3.1, volume: 89200, liquidity: 654000, apr: 15.2, risk: "medium" },
    { id: "RVT-003", type: "Water Quality", price: 38.5, change24h: 5.7, volume: 156300, liquidity: 1200000, apr: 9.8, risk: "low" },
    { id: "RVT-004", type: "Soil Regeneration", price: 51.9, change24h: 12.4, volume: 98700, liquidity: 720000, apr: 14.3, risk: "medium" },
    { id: "RVT-005", type: "Community Development", price: 29.3, change24h: -1.8, volume: 203400, liquidity: 980000, apr: 11.7, risk: "low" },
    { id: "RVT-006", type: "Renewable Energy", price: 74.6, change24h: 6.9, volume: 187600, liquidity: 1500000, apr: 13.9, risk: "high" },
  ];

  const liquidityPools = [
    { name: "RVT-Carbon/USDC", tvl: 2400000, apr: 18.5, volume24h: 345000, rewards: "RVT + USDC" },
    { name: "RVT-Bio/ETH", tvl: 1800000, apr: 22.3, volume24h: 278000, rewards: "RVT + ETH" },
    { name: "RVT-Water/DAI", tvl: 1200000, apr: 15.7, volume24h: 189000, rewards: "RVT + DAI" },
    { name: "Multi-Impact Bundle", tvl: 3500000, apr: 25.8, volume24h: 567000, rewards: "RVT Portfolio" },
  ];

  const stakingOptions = [
    { duration: "30 days", multiplier: 1.0, apy: 12, minAmount: 100 },
    { duration: "90 days", multiplier: 1.25, apy: 18, minAmount: 500 },
    { duration: "180 days", multiplier: 1.5, apy: 24, minAmount: 1000 },
    { duration: "365 days", multiplier: 2.0, apy: 35, minAmount: 2500 },
  ];

  const rvtDerivatives = [
    { symbol: "RVT-C-DEC25", type: "Carbon Futures", price: 48.3, expiry: "Dec 2025", volume: 234000, openInterest: 456000 },
    { symbol: "RVT-B-MAR26", type: "Bio Call Option", strike: 70, premium: 5.2, expiry: "Mar 2026", volume: 89000, openInterest: 123000 },
    { symbol: "RVT-W-JUN25", type: "Water Put Option", strike: 35, premium: 2.8, expiry: "Jun 2025", volume: 67000, openInterest: 98000 },
  ];

  const priceHistory = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    carbon: 40 + Math.random() * 10,
    bio: 55 + Math.random() * 15,
    water: 35 + Math.random() * 8,
  }));

  const volumeData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    volume: 80000 + Math.random() * 150000,
    trades: 1200 + Math.random() * 800,
  }));

  const portfolioAllocation = [
    { name: "Carbon", value: 35, color: "#10b981" },
    { name: "Biodiversity", value: 25, color: "#3b82f6" },
    { name: "Water", value: 20, color: "#06b6d4" },
    { name: "Social", value: 12, color: "#8b5cf6" },
    { name: "Energy", value: 8, color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-2">RVT DeFi Marketplace</h1>
            <p className="text-slate-400">Trade, stake, and provide liquidity for Regenerative Value Tokens</p>
          </div>
          <div className="flex gap-3">
            <Card className="bg-emerald-500/10 border-emerald-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-emerald-400">Total Market Cap</div>
                <div className="text-2xl">$847.3M</div>
                <div className="text-xs text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +15.7% (24h)
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-blue-400">24h Volume</div>
                <div className="text-2xl">$156.8M</div>
                <div className="text-xs text-blue-400 flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  34,567 trades
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="spot" className="space-y-6">
          <TabsList className="bg-slate-900/50">
            <TabsTrigger value="spot">Spot Trading</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidity Pools</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="derivatives">Derivatives</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Spot Trading */}
          <TabsContent value="spot" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* RVT Listings */}
              <div className="md:col-span-2 space-y-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle>Available RVTs</CardTitle>
                    <CardDescription>Real-time verified impact tokens</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {rvtListings.map((rvt) => (
                        <Card
                          key={rvt.id}
                          className={`bg-slate-800/50 border-slate-700 cursor-pointer transition-all hover:bg-slate-800 ${
                            selectedRVT === rvt.id ? 'ring-2 ring-emerald-500' : ''
                          }`}
                          onClick={() => setSelectedRVT(rvt.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-mono text-sm text-slate-400">{rvt.id}</span>
                                  <Badge variant="outline" className={
                                    rvt.risk === 'low' ? 'border-emerald-500/50 text-emerald-400' :
                                    rvt.risk === 'medium' ? 'border-yellow-500/50 text-yellow-400' :
                                    'border-red-500/50 text-red-400'
                                  }>
                                    {rvt.risk} risk
                                  </Badge>
                                </div>
                                <div className="mb-2">{rvt.type}</div>
                                <div className="flex gap-4 text-sm text-slate-400">
                                  <span>Vol: ${(rvt.volume / 1000).toFixed(1)}K</span>
                                  <span>Liq: ${(rvt.liquidity / 1000).toFixed(0)}K</span>
                                  <span>APR: {rvt.apr}%</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl mb-1">${rvt.price}</div>
                                <div className={`flex items-center gap-1 justify-end ${
                                  rvt.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'
                                }`}>
                                  {rvt.change24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                  <span>{rvt.change24h >= 0 ? '+' : ''}{rvt.change24h}%</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trading Panel */}
              <div className="space-y-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle>Quick Trade</CardTitle>
                    <CardDescription>
                      {selectedRVT ? `Trading ${selectedRVT}` : 'Select an RVT to trade'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Amount (USD)</label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={tradeAmount}
                        onChange={(e) => setTradeAmount(e.target.value)}
                        className="bg-slate-800 border-slate-700"
                      />
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">You will receive:</span>
                        <span>{selectedRVT && tradeAmount ? (parseFloat(tradeAmount) / 45.2).toFixed(4) : '0.00'} RVT</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Network fee:</span>
                        <span>$0.85</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Impact verified:</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                          <Shield className="w-3 h-3 mr-1" />
                          BCQI
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" disabled={!selectedRVT}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy
                      </Button>
                      <Button variant="outline" className="flex-1" disabled={!selectedRVT}>
                        Sell
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-emerald-400 mt-1" />
                      <div>
                        <div className="mb-1">Instant Settlement</div>
                        <p className="text-sm text-slate-400">All trades are verified on-chain with CIS data</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Price Chart */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Price History (30 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      labelStyle={{ color: '#cbd5e1' }}
                    />
                    <Line type="monotone" dataKey="carbon" stroke="#10b981" strokeWidth={2} name="Carbon" />
                    <Line type="monotone" dataKey="bio" stroke="#3b82f6" strokeWidth={2} name="Biodiversity" />
                    <Line type="monotone" dataKey="water" stroke="#06b6d4" strokeWidth={2} name="Water" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Liquidity Pools */}
          <TabsContent value="liquidity" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {liquidityPools.map((pool, idx) => (
                <Card key={idx} className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1">{pool.name}</CardTitle>
                        <CardDescription>{pool.rewards} Rewards</CardDescription>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        {pool.apr}% APR
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-sm text-slate-400 mb-1">Total Value Locked</div>
                        <div className="text-xl">${(pool.tvl / 1000000).toFixed(2)}M</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <div className="text-sm text-slate-400 mb-1">24h Volume</div>
                        <div className="text-xl">${(pool.volume24h / 1000).toFixed(0)}K</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Droplet className="w-4 h-4 mr-2" />
                        Add Liquidity
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Staking */}
          <TabsContent value="staking" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {stakingOptions.map((option, idx) => (
                <Card key={idx} className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle>{option.duration} Lock</CardTitle>
                    <CardDescription>Impact multiplier: {option.multiplier}x</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg">
                      <div className="text-4xl mb-2">{option.apy}%</div>
                      <div className="text-slate-400">Annual Percentage Yield</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Minimum stake:</span>
                        <span>{option.minAmount} RVT</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Lock period:</span>
                        <span>{option.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Early withdrawal:</span>
                        <span className="text-red-400">10% penalty</span>
                      </div>
                    </div>
                    <Input
                      type="number"
                      placeholder={`Min. ${option.minAmount} RVT`}
                      value={stakingAmount}
                      onChange={(e) => setStakingAmount(e.target.value)}
                      className="bg-slate-800 border-slate-700"
                    />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Lock className="w-4 h-4 mr-2" />
                      Stake Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Derivatives */}
          <TabsContent value="derivatives" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>RVT Futures & Options</CardTitle>
                <CardDescription>Hedge risk and speculate on future impact outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rvtDerivatives.map((derivative, idx) => (
                    <Card key={idx} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono">{derivative.symbol}</span>
                              <Badge variant="outline">{derivative.type}</Badge>
                            </div>
                            <div className="text-sm text-slate-400">
                              Expires: {derivative.expiry}
                              {derivative.type.includes('Option') && ` • Strike: $${derivative.strike}`}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl mb-1">
                              ${derivative.type.includes('Option') ? derivative.premium : derivative.price}
                            </div>
                            <div className="text-sm text-slate-400">
                              Vol: ${(derivative.volume / 1000).toFixed(0)}K
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle>Trading Volume (7 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={volumeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="day" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      />
                      <Bar dataKey="volume" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={portfolioAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {portfolioAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {portfolioAllocation.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                        <span className="text-slate-400">{item.name}:</span>
                        <span>{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
