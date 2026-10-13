import { useState } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowUp, ArrowDown, Activity } from "lucide-react";

const marketData = [
  { time: "00:00", impact: 145, ecosystem: 120, resilience: 98 },
  { time: "04:00", impact: 152, ecosystem: 125, resilience: 105 },
  { time: "08:00", impact: 168, ecosystem: 142, resilience: 118 },
  { time: "12:00", impact: 175, ecosystem: 138, resilience: 125 },
  { time: "16:00", impact: 182, ecosystem: 155, resilience: 132 },
  { time: "20:00", impact: 195, ecosystem: 168, resilience: 145 },
  { time: "24:00", impact: 203, ecosystem: 175, resilience: 158 },
];

const assets = [
  { name: "Carbon Sequestration Credits", symbol: "CSC", price: 145.32, change: 12.5, volume: "2.4M" },
  { name: "Biodiversity Preservation Index", symbol: "BPI", price: 89.67, change: -3.2, volume: "1.8M" },
  { name: "Community Education Bonds", symbol: "CEB", price: 234.89, change: 8.7, volume: "3.1M" },
  { name: "Renewable Energy Futures", symbol: "REF", price: 167.45, change: 15.3, volume: "4.2M" },
  { name: "Social Infrastructure Notes", symbol: "SIN", price: 112.34, change: 5.9, volume: "1.5M" },
  { name: "Water Conservation Tokens", symbol: "WCT", price: 78.92, change: -1.4, volume: "2.7M" },
];

export function MarketDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm">Live Market Data</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            The Regenerative Market
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-time trading of impact outcomes, ecosystem value, and human resilience assets
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-slate-800 border border-slate-700">
            <TabsTrigger value="overview">Market Overview</TabsTrigger>
            <TabsTrigger value="assets">Active Assets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Total Market Cap</span>
                  <ArrowUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl text-white mb-1">$1.42T</div>
                <div className="text-emerald-400 text-sm">+12.4% this month</div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">24h Volume</span>
                  <ArrowUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl text-white mb-1">$47.3B</div>
                <div className="text-emerald-400 text-sm">+8.7% vs yesterday</div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Active Traders</span>
                  <ArrowUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl text-white mb-1">847K</div>
                <div className="text-emerald-400 text-sm">+23.1% this week</div>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl text-white mb-6">24-Hour Value Flow</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={marketData}>
                  <defs>
                    <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEcosystem" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorResilience" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #475569',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="impact" 
                    stroke="#3b82f6" 
                    fillOpacity={1} 
                    fill="url(#colorImpact)" 
                    name="Impact Outcomes"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ecosystem" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorEcosystem)" 
                    name="Ecosystem Value"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="resilience" 
                    stroke="#a855f7" 
                    fillOpacity={1} 
                    fill="url(#colorResilience)" 
                    name="Human Resilience"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="assets">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-slate-400">Asset</th>
                      <th className="px-6 py-4 text-right text-slate-400">Price</th>
                      <th className="px-6 py-4 text-right text-slate-400">24h Change</th>
                      <th className="px-6 py-4 text-right text-slate-400">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset, index) => (
                      <tr key={index} className="border-t border-slate-700 hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-white">{asset.name}</div>
                            <div className="text-sm text-slate-500">{asset.symbol}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-white">
                          ${asset.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className={`inline-flex items-center gap-1 ${asset.change > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {asset.change > 0 ? (
                              <ArrowUp className="w-4 h-4" />
                            ) : (
                              <ArrowDown className="w-4 h-4" />
                            )}
                            {Math.abs(asset.change)}%
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-slate-400">
                          {asset.volume}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
