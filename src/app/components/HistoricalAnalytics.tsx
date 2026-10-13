import { useState } from "react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { TrendingUp, TrendingDown, Calendar, Target, History, Sparkles, ArrowUpRight, Calculator, PieChart, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

// Historical compound value data with reinvestment rates
const historicalData = [
  { 
    year: "2018", 
    impactValue: 45.2, 
    ecosystemValue: 32.1, 
    resilienceValue: 28.4, 
    totalValue: 105.7,
    compoundRate: 8.2,
    reinvestmentRate: 15.3,
    cumulativeImpact: 42000,
    activeAssets: 1247
  },
  { 
    year: "2019", 
    impactValue: 67.8, 
    ecosystemValue: 48.3, 
    resilienceValue: 41.2, 
    totalValue: 157.3,
    compoundRate: 49.1,
    reinvestmentRate: 22.7,
    cumulativeImpact: 89000,
    activeAssets: 2843
  },
  { 
    year: "2020", 
    impactValue: 98.4, 
    ecosystemValue: 71.5, 
    resilienceValue: 59.8, 
    totalValue: 229.7,
    compoundRate: 46.0,
    reinvestmentRate: 31.2,
    cumulativeImpact: 156000,
    activeAssets: 4567
  },
  { 
    year: "2021", 
    impactValue: 142.6, 
    ecosystemValue: 105.2, 
    resilienceValue: 86.4, 
    totalValue: 334.2,
    compoundRate: 45.5,
    reinvestmentRate: 38.9,
    cumulativeImpact: 267000,
    activeAssets: 7234
  },
  { 
    year: "2022", 
    impactValue: 203.8, 
    ecosystemValue: 152.7, 
    resilienceValue: 124.5, 
    totalValue: 481.0,
    compoundRate: 43.9,
    reinvestmentRate: 45.1,
    cumulativeImpact: 421000,
    activeAssets: 11289
  },
  { 
    year: "2023", 
    impactValue: 289.2, 
    ecosystemValue: 218.9, 
    resilienceValue: 178.3, 
    totalValue: 686.4,
    compoundRate: 42.7,
    reinvestmentRate: 52.3,
    cumulativeImpact: 658000,
    activeAssets: 16842
  },
  { 
    year: "2024", 
    impactValue: 402.5, 
    ecosystemValue: 310.4, 
    resilienceValue: 251.8, 
    totalValue: 964.7,
    compoundRate: 40.5,
    reinvestmentRate: 58.7,
    cumulativeImpact: 987000,
    activeAssets: 24567
  },
  { 
    year: "2025", 
    impactValue: 554.3, 
    ecosystemValue: 436.2, 
    resilienceValue: 352.1, 
    totalValue: 1342.6,
    compoundRate: 39.2,
    reinvestmentRate: 64.5,
    cumulativeImpact: 1456000,
    activeAssets: 35124
  },
];

// Quarterly compound data with detailed metrics
const quarterlyData = [
  { quarter: "Q1 2024", value: 847, growth: 12.4, compoundEffect: 3.2, reinvested: 127 },
  { quarter: "Q2 2024", value: 923, growth: 9.0, compoundEffect: 2.8, reinvested: 145 },
  { quarter: "Q3 2024", value: 1015, growth: 10.0, compoundEffect: 3.1, reinvested: 167 },
  { quarter: "Q4 2024", value: 1127, growth: 11.0, compoundEffect: 3.5, reinvested: 189 },
  { quarter: "Q1 2025", value: 1264, growth: 12.2, compoundEffect: 4.1, reinvested: 218 },
  { quarter: "Q2 2025", value: 1398, growth: 10.6, compoundEffect: 3.8, reinvested: 241 },
];

// Projected future values with compound scenarios
const generateProjections = (baseValue: number, years: number, growthRate: number) => {
  const projections = [];
  for (let i = 0; i <= years; i++) {
    const year = 2025 + i;
    const conservative = baseValue * Math.pow(1 + growthRate * 0.7, i);
    const moderate = baseValue * Math.pow(1 + growthRate, i);
    const aggressive = baseValue * Math.pow(1 + growthRate * 1.3, i);
    
    projections.push({
      year: year.toString(),
      conservative: conservative / 1000,
      moderate: moderate / 1000,
      aggressive: aggressive / 1000,
      historical: i === 0 ? baseValue / 1000 : null
    });
  }
  return projections;
};

// Impact milestones with compound effects
const milestones = [
  { 
    date: "Jan 2018", 
    event: "Platform Launch - Genesis Block", 
    value: "$105.7B", 
    type: "launch",
    compoundMultiplier: 1.0,
    description: "Initial regenerative value exchange established"
  },
  { 
    date: "Mar 2020", 
    event: "COVID-19 Resilience Response", 
    value: "$229.7B", 
    type: "event",
    compoundMultiplier: 2.17,
    description: "Emergency response accelerated ecosystem value creation"
  },
  { 
    date: "Sep 2021", 
    event: "Compound Acceleration Phase", 
    value: "$334.2B", 
    type: "milestone",
    compoundMultiplier: 3.16,
    description: "Network effects began exponential growth"
  },
  { 
    date: "May 2023", 
    event: "AI Integration Complete", 
    value: "$686.4B", 
    type: "milestone",
    compoundMultiplier: 6.49,
    description: "AI-powered value optimization enabled 2x efficiency"
  },
  { 
    date: "Dec 2024", 
    event: "Global Network Expansion", 
    value: "$964.7B", 
    type: "expansion",
    compoundMultiplier: 9.13,
    description: "195+ countries integrated into value network"
  },
  { 
    date: "Mar 2025", 
    event: "Crossed $1.3T Total Value", 
    value: "$1.34T", 
    type: "milestone",
    compoundMultiplier: 12.70,
    description: "Compound growth surpassed trillion-dollar threshold"
  },
];

// Reinvestment impact analysis
const reinvestmentAnalysis = [
  { rate: "0%", year1: 105.7, year3: 229.7, year5: 481.0, year7: 1342.6 },
  { rate: "25%", year1: 132.1, year3: 314.2, year5: 687.4, year7: 1856.3 },
  { rate: "50%", year1: 158.6, year3: 412.5, year5: 943.8, year7: 2547.9 },
  { rate: "75%", year1: 185.0, year3: 524.1, year5: 1256.2, year7: 3489.5 },
  { rate: "100%", year1: 211.4, year3: 649.8, year5: 1634.5, year7: 4782.1 },
];

interface HistoricalAnalyticsProps {
  onNavigate: (page: string) => void;
}

export function HistoricalAnalytics({ onNavigate }: HistoricalAnalyticsProps) {
  const [timeframe, setTimeframe] = useState("all");
  const [selectedMetric, setSelectedMetric] = useState("total");
  const [projectionYears, setProjectionYears] = useState(5);
  const [reinvestmentRate, setReinvestmentRate] = useState([50]);

  // Calculate advanced metrics
  const startValue = historicalData[0].totalValue;
  const endValue = historicalData[historicalData.length - 1].totalValue;
  const years = historicalData.length - 1;
  const cagr = ((Math.pow(endValue / startValue, 1 / years) - 1) * 100);
  const totalGrowth = ((endValue - startValue) / startValue) * 100;
  
  // Calculate compound efficiency (value created per dollar invested)
  const compoundEfficiency = endValue / startValue;
  
  // Calculate average reinvestment rate
  const avgReinvestment = historicalData.reduce((sum, d) => sum + d.reinvestmentRate, 0) / historicalData.length;

  // Generate projections
  const projections = generateProjections(endValue * 1000, projectionYears, cagr / 100);

  // Calculate impact of reinvestment
  const calculateReinvestmentImpact = (rate: number) => {
    const baseGrowth = endValue * Math.pow(1 + cagr / 100, 5);
    const withReinvestment = endValue * Math.pow(1 + (cagr / 100) * (1 + rate / 100), 5);
    return withReinvestment - baseGrowth;
  };

  const reinvestmentImpact = calculateReinvestmentImpact(reinvestmentRate[0]);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <History className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl text-white">Regenerative Value Exchange</h1>
                <p className="text-slate-400">Historical Analytics & Compound Growth Modeling</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Time (2018-2025)</SelectItem>
                <SelectItem value="5y">Last 5 Years</SelectItem>
                <SelectItem value="3y">Last 3 Years</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calculator className="w-4 h-4 mr-2" />
              Run Simulation
            </Button>
          </div>
        </div>

        {/* Advanced Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">Total Regenerative Value</div>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-3xl text-white mb-1">${endValue.toFixed(1)}T</div>
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  +{totalGrowth.toFixed(1)}%
                </Badge>
                <span className="text-xs text-slate-500">since 2018</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">Compound Annual Growth</div>
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-3xl text-white mb-1">{cagr.toFixed(2)}%</div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  CAGR
                </Badge>
                <span className="text-xs text-slate-500">annual rate</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">Compound Efficiency</div>
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-3xl text-white mb-1">{compoundEfficiency.toFixed(2)}x</div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                  Multiplier
                </Badge>
                <span className="text-xs text-slate-500">value created</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">Cumulative Impact</div>
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl text-white mb-1">
                {(historicalData[historicalData.length - 1].cumulativeImpact / 1000).toFixed(0)}K
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                  Outcomes
                </Badge>
                <span className="text-xs text-slate-500">delivered</span>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="compound" className="w-full">
          <TabsList className="bg-slate-800 border border-slate-700 mb-6">
            <TabsTrigger value="compound">Compound Growth</TabsTrigger>
            <TabsTrigger value="breakdown">Value Breakdown</TabsTrigger>
            <TabsTrigger value="projections">Future Projections</TabsTrigger>
            <TabsTrigger value="reinvestment">Reinvestment Impact</TabsTrigger>
            <TabsTrigger value="milestones">Key Milestones</TabsTrigger>
          </TabsList>

          {/* Compound Growth Chart - Enhanced */}
          <TabsContent value="compound">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl text-white">Cumulative Value Growth (2018-2025)</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {cagr.toFixed(1)}% CAGR
                      </Badge>
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        {compoundEfficiency.toFixed(1)}x Growth
                      </Badge>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={450}>
                    <ComposedChart data={historicalData}>
                      <defs>
                        <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="compoundGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="year" stroke="#94a3b8" />
                      <YAxis yAxisId="left" stroke="#94a3b8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #475569',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number, name: string) => {
                          if (name === "Total Regenerative Value") return [`$${value.toFixed(1)}B`, name];
                          if (name === "Compound Rate") return [`${value.toFixed(1)}%`, name];
                          return [value, name];
                        }}
                      />
                      <Legend />
                      <Area 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="totalValue" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#totalGradient)" 
                        name="Total Regenerative Value"
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="compoundRate" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        dot={{ fill: '#10b981', r: 4 }}
                        name="Compound Rate"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                  
                  <div className="mt-6 grid grid-cols-3 gap-6 pt-6 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-slate-400 mb-1 text-sm">Starting Value (2018)</div>
                      <div className="text-2xl text-white">${startValue.toFixed(1)}B</div>
                      <div className="text-xs text-slate-500 mt-1">Genesis Block</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 mb-1 text-sm">Current Value (2025)</div>
                      <div className="text-2xl text-emerald-400">${endValue.toFixed(1)}T</div>
                      <div className="text-xs text-emerald-500 mt-1">+{totalGrowth.toFixed(0)}% Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400 mb-1 text-sm">Value Created</div>
                      <div className="text-2xl text-blue-400">${(endValue - startValue).toFixed(1)}B</div>
                      <div className="text-xs text-blue-500 mt-1">Compound Effect</div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h3 className="text-white mb-4 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-blue-400" />
                    Growth Metrics
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400 text-sm">Annual Growth Rate</span>
                        <span className="text-white">{cagr.toFixed(2)}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          style={{ width: `${Math.min(cagr * 2, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400 text-sm">Avg Reinvestment</span>
                        <span className="text-white">{avgReinvestment.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                          style={{ width: `${avgReinvestment}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-400 text-sm">Compound Efficiency</span>
                        <span className="text-white">{compoundEfficiency.toFixed(1)}x</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          style={{ width: `${Math.min(compoundEfficiency * 8, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <h3 className="text-white mb-4">Active Assets</h3>
                  <div className="text-4xl text-blue-400 mb-2">
                    {historicalData[historicalData.length - 1].activeAssets.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-400 mb-4">
                    Regenerative assets trading on network
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+1,428% since 2018</span>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Value Breakdown */}
          <TabsContent value="breakdown">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl text-white mb-6">Regenerative Value Composition Over Time</h3>
              <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={historicalData}>
                  <defs>
                    <linearGradient id="impactGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="ecoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="resGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #475569',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => `$${value.toFixed(1)}B`}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="impactValue" 
                    stackId="1"
                    stroke="#3b82f6" 
                    fill="url(#impactGrad)" 
                    name="Impact Outcomes"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ecosystemValue" 
                    stackId="1"
                    stroke="#10b981" 
                    fill="url(#ecoGrad)" 
                    name="Ecosystem Value"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="resilienceValue" 
                    stackId="1"
                    stroke="#a855f7" 
                    fill="url(#resGrad)" 
                    name="Human Resilience"
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <Card className="bg-slate-900/50 border-slate-700 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-slate-400">Impact Outcomes</span>
                  </div>
                  <div className="text-2xl text-white mb-1">
                    ${historicalData[historicalData.length - 1].impactValue.toFixed(1)}B
                  </div>
                  <div className="text-sm text-blue-400">
                    41.3% of total value
                  </div>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-slate-400">Ecosystem Value</span>
                  </div>
                  <div className="text-2xl text-white mb-1">
                    ${historicalData[historicalData.length - 1].ecosystemValue.toFixed(1)}B
                  </div>
                  <div className="text-sm text-emerald-400">
                    32.5% of total value
                  </div>
                </Card>

                <Card className="bg-slate-900/50 border-slate-700 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-slate-400">Human Resilience</span>
                  </div>
                  <div className="text-2xl text-white mb-1">
                    ${historicalData[historicalData.length - 1].resilienceValue.toFixed(1)}B
                  </div>
                  <div className="text-sm text-purple-400">
                    26.2% of total value
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Future Projections */}
          <TabsContent value="projections">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white">Future Value Projections with Compound Interest</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">Projection Period:</span>
                    <Select value={projectionYears.toString()} onValueChange={(v) => setProjectionYears(parseInt(v))}>
                      <SelectTrigger className="w-32 bg-slate-900 border-slate-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="5">5 Years</SelectItem>
                        <SelectItem value="10">10 Years</SelectItem>
                        <SelectItem value="15">15 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={450}>
                <LineChart data={projections}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #475569',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => `$${value.toFixed(2)}T`}
                  />
                  <Legend />
                  <ReferenceLine x="2025" stroke="#94a3b8" strokeDasharray="3 3" label="Present" />
                  <Line 
                    type="monotone" 
                    dataKey="conservative" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    dot={false}
                    name="Conservative Scenario"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="moderate" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={false}
                    name="Moderate Scenario"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="aggressive" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={false}
                    name="Aggressive Scenario"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20 p-6">
                  <div className="text-slate-400 mb-2">Conservative (27% CAGR)</div>
                  <div className="text-3xl text-amber-400 mb-1">
                    ${projections[projections.length - 1].conservative.toFixed(2)}T
                  </div>
                  <div className="text-sm text-slate-500">by {2025 + projectionYears}</div>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 p-6">
                  <div className="text-slate-400 mb-2">Moderate ({cagr.toFixed(1)}% CAGR)</div>
                  <div className="text-3xl text-blue-400 mb-1">
                    ${projections[projections.length - 1].moderate.toFixed(2)}T
                  </div>
                  <div className="text-sm text-slate-500">by {2025 + projectionYears}</div>
                </Card>

                <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20 p-6">
                  <div className="text-slate-400 mb-2">Aggressive (51% CAGR)</div>
                  <div className="text-3xl text-emerald-400 mb-1">
                    ${projections[projections.length - 1].aggressive.toFixed(2)}T
                  </div>
                  <div className="text-sm text-slate-500">by {2025 + projectionYears}</div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Reinvestment Impact Analysis */}
          <TabsContent value="reinvestment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-xl text-white mb-6">Reinvestment Rate Impact Simulator</h3>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <span className="text-slate-400">Reinvestment Rate</span>
                    <span className="text-white">{reinvestmentRate[0]}%</span>
                  </div>
                  <Slider
                    value={reinvestmentRate}
                    onValueChange={setReinvestmentRate}
                    max={100}
                    step={5}
                    className="mb-4"
                  />
                  
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 mt-6">
                    <div className="text-slate-400 mb-2">Projected 5-Year Impact</div>
                    <div className="text-4xl text-blue-400 mb-2">
                      +${reinvestmentImpact.toFixed(2)}B
                    </div>
                    <div className="text-sm text-slate-500">
                      Additional value from {reinvestmentRate[0]}% reinvestment
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-400">Base Growth (0% reinvestment)</span>
                    <span className="text-white">${(endValue * Math.pow(1 + cagr / 100, 5)).toFixed(2)}T</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-blue-500/30">
                    <span className="text-slate-400">With {reinvestmentRate[0]}% Reinvestment</span>
                    <span className="text-blue-400">
                      ${(endValue * Math.pow(1 + cagr / 100, 5) + reinvestmentImpact / 1000).toFixed(2)}T
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <h3 className="text-xl text-white mb-6">Reinvestment Scenarios Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-900/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-slate-400">Rate</th>
                        <th className="px-4 py-3 text-right text-slate-400">Year 1</th>
                        <th className="px-4 py-3 text-right text-slate-400">Year 3</th>
                        <th className="px-4 py-3 text-right text-slate-400">Year 5</th>
                        <th className="px-4 py-3 text-right text-slate-400">Year 7</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reinvestmentAnalysis.map((scenario, i) => (
                        <tr key={i} className="border-t border-slate-700 hover:bg-slate-800/30">
                          <td className="px-4 py-3 text-white">{scenario.rate}</td>
                          <td className="px-4 py-3 text-right text-slate-300">${scenario.year1}B</td>
                          <td className="px-4 py-3 text-right text-slate-300">${scenario.year3}B</td>
                          <td className="px-4 py-3 text-right text-slate-300">${scenario.year5}B</td>
                          <td className="px-4 py-3 text-right text-emerald-400">${scenario.year7}B</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="text-white mb-1">Compound Interest Insight</div>
                      <div className="text-sm text-slate-400">
                        At 100% reinvestment rate, regenerative value compounds to 4.5x higher 
                        over 7 years compared to 0% reinvestment, demonstrating the exponential 
                        power of regenerative economics.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Key Milestones */}
          <TabsContent value="milestones">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white">Platform Evolution & Compound Milestones</h3>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  {milestones.length} Major Events
                </Badge>
              </div>
              
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-800 shadow-lg shadow-blue-500/50"></div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-slate-400 text-sm">{milestone.date}</div>
                            <Badge className={
                              milestone.type === 'milestone' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                              milestone.type === 'launch' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                              milestone.type === 'expansion' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                              'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                            }>
                              {milestone.type}
                            </Badge>
                          </div>
                          <div className="text-white text-lg mb-2">{milestone.event}</div>
                          <div className="text-sm text-slate-400">{milestone.description}</div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl text-blue-400 mb-1">{milestone.value}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" />
                            {milestone.compoundMultiplier}x growth
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Compound Multiplier</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                                style={{ width: `${Math.min(milestone.compoundMultiplier * 8, 100)}%` }}
                              ></div>
                            </div>
                            <span className="text-white">{milestone.compoundMultiplier.toFixed(2)}x</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
