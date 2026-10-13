import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Cloud, Shield, Zap, TrendingUp, AlertTriangle, Leaf, Droplets, Wind, Sun, TreePine } from "lucide-react";

interface ClimateFinanceHubProps {
  onNavigate: (page: string) => void;
}

export function ClimateFinanceHub({ onNavigate }: ClimateFinanceHubProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Carbon Credit Bundles
  const carbonBundles = [
    { 
      id: "CB-001", 
      name: "Amazon Rainforest Protection", 
      credits: 10000, 
      price: 28.5, 
      vintage: 2024,
      methodology: "VCS",
      verification: "Gold Standard",
      available: 7500,
      impact: { co2: 10000, hectares: 5000, biodiversity: 95 }
    },
    { 
      id: "CB-002", 
      name: "Mangrove Restoration - Southeast Asia", 
      credits: 15000, 
      price: 32.8, 
      vintage: 2024,
      methodology: "CDM",
      verification: "BCQI Verified",
      available: 12000,
      impact: { co2: 15000, hectares: 2500, coastline: 50 }
    },
    { 
      id: "CB-003", 
      name: "Renewable Energy Portfolio", 
      credits: 25000, 
      price: 25.2, 
      vintage: 2024,
      methodology: "ACR",
      verification: "BCQI Verified",
      available: 18000,
      impact: { co2: 25000, mwh: 45000, communities: 15 }
    },
  ];

  // Climate Risk Products
  const riskProducts = [
    {
      id: "CRP-001",
      name: "Drought Protection - East Africa",
      coverage: 5000000,
      premium: 125000,
      probability: 23,
      payout: "Up to $5M",
      trigger: "SPI < 0.5 for 90 days",
      beneficiaries: 50000
    },
    {
      id: "CRP-002",
      name: "Flood Insurance - Bangladesh Delta",
      coverage: 8000000,
      premium: 280000,
      probability: 18,
      payout: "Up to $8M",
      trigger: "Water level > 5m",
      beneficiaries: 75000
    },
    {
      id: "CRP-003",
      name: "Wildfire Risk - California Projects",
      coverage: 12000000,
      premium: 450000,
      probability: 31,
      payout: "Up to $12M",
      trigger: "Fire within 5km radius",
      beneficiaries: 25000
    },
  ];

  // Green Bonds
  const greenBonds = [
    {
      id: "GB-2025-A",
      issuer: "Pacific Islands Climate Fund",
      amount: 50000000,
      coupon: 4.5,
      maturity: "2030",
      rating: "AAA",
      use: "Solar + Storage Infrastructure",
      subscribed: 78,
      minInvestment: 10000
    },
    {
      id: "GB-2025-B",
      issuer: "African Reforestation Initiative",
      amount: 75000000,
      coupon: 5.2,
      maturity: "2032",
      rating: "AA+",
      use: "Forest Restoration & Protection",
      subscribed: 45,
      minInvestment: 25000
    },
    {
      id: "GB-2025-C",
      issuer: "Global Ocean Conservation Trust",
      amount: 100000000,
      coupon: 4.8,
      maturity: "2035",
      rating: "AAA",
      use: "Marine Protected Areas",
      subscribed: 62,
      minInvestment: 50000
    },
  ];

  // Nature-Based Solutions
  const nbsProjects = [
    {
      id: "NBS-001",
      name: "Wetland Restoration - Mississippi Delta",
      funding: 2500000,
      raised: 1875000,
      roi: 12.5,
      timeline: "36 months",
      benefits: ["Carbon: 50K tons", "Flood protection", "Biodiversity +45%"],
      risk: "low"
    },
    {
      id: "NBS-002",
      name: "Urban Forest Network - 15 Cities",
      funding: 5000000,
      raised: 3200000,
      roi: 15.8,
      timeline: "48 months",
      benefits: ["Carbon: 75K tons", "Heat reduction", "Air quality +30%"],
      risk: "medium"
    },
    {
      id: "NBS-003",
      name: "Coral Reef Regeneration - Caribbean",
      funding: 8000000,
      raised: 2400000,
      roi: 18.3,
      timeline: "60 months",
      benefits: ["Carbon: 40K tons", "Tourism boost", "Fisheries +60%"],
      risk: "medium"
    },
  ];

  const climateRiskData = [
    { region: "East Africa", physical: 72, transition: 45, liability: 28, overall: 65 },
    { region: "South Asia", physical: 85, transition: 52, liability: 35, overall: 74 },
    { region: "Pacific Islands", physical: 92, transition: 38, liability: 42, overall: 81 },
    { region: "Latin America", physical: 68, transition: 48, liability: 32, overall: 62 },
    { region: "Southeast Asia", physical: 78, transition: 55, liability: 38, overall: 70 },
  ];

  const carbonPriceProjection = Array.from({ length: 10 }, (_, i) => ({
    year: 2025 + i,
    conservative: 30 + i * 3.5,
    moderate: 35 + i * 5,
    aggressive: 40 + i * 7.5,
  }));

  const impactMetrics = [
    { month: "Jan", carbon: 125000, biodiversity: 85, water: 92, social: 78 },
    { month: "Feb", carbon: 142000, biodiversity: 88, water: 94, social: 82 },
    { month: "Mar", carbon: 158000, biodiversity: 91, water: 96, social: 85 },
    { month: "Apr", carbon: 175000, biodiversity: 93, water: 97, social: 88 },
    { month: "May", carbon: 198000, biodiversity: 95, water: 98, social: 91 },
    { month: "Jun", carbon: 215000, biodiversity: 97, water: 99, social: 94 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-2">Climate Finance Innovation Hub</h1>
            <p className="text-slate-400">Advanced instruments for climate risk & regenerative investment</p>
          </div>
          <div className="flex gap-3">
            <Card className="bg-emerald-500/10 border-emerald-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-emerald-400">Carbon Assets</div>
                <div className="text-2xl">$287.5M</div>
                <div className="text-xs text-emerald-400">+23.4% YoY</div>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-blue-400">Risk Coverage</div>
                <div className="text-2xl">$425M</div>
                <div className="text-xs text-blue-400">15 active policies</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="carbon" className="space-y-6">
          <TabsList className="bg-slate-900/50">
            <TabsTrigger value="carbon">Carbon Markets</TabsTrigger>
            <TabsTrigger value="risk">Climate Risk</TabsTrigger>
            <TabsTrigger value="bonds">Green Bonds</TabsTrigger>
            <TabsTrigger value="nbs">Nature-Based Solutions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Carbon Credit Bundling */}
          <TabsContent value="carbon" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {carbonBundles.map((bundle) => (
                <Card key={bundle.id} className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-1">{bundle.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span className="font-mono text-xs">{bundle.id}</span>
                          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                            {bundle.verification}
                          </Badge>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-emerald-400">${bundle.price}</div>
                        <div className="text-xs text-slate-400">per credit</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg">{bundle.credits.toLocaleString()}</div>
                        <div className="text-xs text-slate-400">Total Credits</div>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg">{bundle.available.toLocaleString()}</div>
                        <div className="text-xs text-slate-400">Available</div>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg">{bundle.vintage}</div>
                        <div className="text-xs text-slate-400">Vintage</div>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                      <div className="text-sm mb-2">Verified Impact:</div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(bundle.impact).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-slate-400 capitalize">{key}:</span>
                            <span>{typeof value === 'number' ? value.toLocaleString() : value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        <Leaf className="w-4 h-4 mr-2" />
                        Purchase Bundle
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Price Projection */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Carbon Price Projections (2025-2035)</CardTitle>
                <CardDescription>Multiple scenario modeling with AI-enhanced forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={carbonPriceProjection}>
                    <defs>
                      <linearGradient id="conservative" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="moderate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="aggressive" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="year" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    />
                    <Area type="monotone" dataKey="conservative" stroke="#3b82f6" fillOpacity={1} fill="url(#conservative)" />
                    <Area type="monotone" dataKey="moderate" stroke="#10b981" fillOpacity={1} fill="url(#moderate)" />
                    <Area type="monotone" dataKey="aggressive" stroke="#f59e0b" fillOpacity={1} fill="url(#aggressive)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Climate Risk Insurance */}
          <TabsContent value="risk" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Risk Products */}
              <div className="space-y-4">
                {riskProducts.map((product) => (
                  <Card key={product.id} className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
                          <CardDescription className="font-mono text-xs">{product.id}</CardDescription>
                        </div>
                        <Badge className={
                          product.probability > 25 ? 'bg-red-500/20 text-red-400' :
                          product.probability > 15 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }>
                          {product.probability}% risk
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-slate-800/50 rounded">
                          <div className="text-sm text-slate-400 mb-1">Coverage</div>
                          <div className="text-lg">${(product.coverage / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="p-3 bg-slate-800/50 rounded">
                          <div className="text-sm text-slate-400 mb-1">Annual Premium</div>
                          <div className="text-lg">${(product.premium / 1000).toFixed(0)}K</div>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded">
                        <div className="text-sm mb-1">Payout Trigger:</div>
                        <div className="text-xs text-slate-400">{product.trigger}</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Beneficiaries:</span>
                        <span>{product.beneficiaries.toLocaleString()} people</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Shield className="w-4 h-4 mr-2" />
                        Get Coverage
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Climate Risk Radar */}
              <div className="space-y-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <CardTitle>Multi-Factor Climate Risk Assessment</CardTitle>
                    <CardDescription>AI-powered risk modeling across regions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={350}>
                      <RadarChart data={climateRiskData}>
                        <PolarGrid stroke="#334155" />
                        <PolarAngleAxis dataKey="region" stroke="#94a3b8" />
                        <PolarRadiusAxis stroke="#94a3b8" />
                        <Radar name="Physical Risk" dataKey="physical" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                        <Radar name="Transition Risk" dataKey="transition" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                        <Radar name="Overall Risk" dataKey="overall" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1" />
                      <div>
                        <div className="mb-1">Parametric Insurance</div>
                        <p className="text-sm text-slate-400">Instant payouts based on CIS-verified climate data triggers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Green Bonds */}
          <TabsContent value="bonds" className="space-y-6">
            <div className="space-y-4">
              {greenBonds.map((bond) => (
                <Card key={bond.id} className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-1">{bond.issuer}</CardTitle>
                        <CardDescription>{bond.use}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-emerald-500/20 text-emerald-400 mb-1">{bond.rating}</Badge>
                        <div className="text-sm text-slate-400">{bond.id}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-5 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-800/50 rounded">
                        <div className="text-sm text-slate-400 mb-1">Total Issue</div>
                        <div className="text-lg">${(bond.amount / 1000000).toFixed(0)}M</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded">
                        <div className="text-sm text-slate-400 mb-1">Coupon</div>
                        <div className="text-lg">{bond.coupon}%</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded">
                        <div className="text-sm text-slate-400 mb-1">Maturity</div>
                        <div className="text-lg">{bond.maturity}</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded">
                        <div className="text-sm text-slate-400 mb-1">Min. Investment</div>
                        <div className="text-lg">${(bond.minInvestment / 1000).toFixed(0)}K</div>
                      </div>
                      <div className="text-center p-3 bg-slate-800/50 rounded">
                        <div className="text-sm text-slate-400 mb-1">Subscribed</div>
                        <div className="text-lg">{bond.subscribed}%</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Subscription Progress</span>
                        <span>{bond.subscribed}%</span>
                      </div>
                      <Progress value={bond.subscribed} className="h-2" />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Zap className="w-4 h-4 mr-2" />
                      Subscribe to Bond
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nature-Based Solutions */}
          <TabsContent value="nbs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {nbsProjects.map((project) => (
                <Card key={project.id} className="bg-slate-900/50 border-slate-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-1">{project.name}</CardTitle>
                        <CardDescription className="font-mono text-xs">{project.id}</CardDescription>
                      </div>
                      <Badge variant="outline" className={
                        project.risk === 'low' ? 'border-emerald-500/50 text-emerald-400' :
                        'border-yellow-500/50 text-yellow-400'
                      }>
                        {project.risk} risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg text-emerald-400">{project.roi}%</div>
                        <div className="text-xs text-slate-400">Target ROI</div>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg">{project.timeline}</div>
                        <div className="text-xs text-slate-400">Timeline</div>
                      </div>
                      <div className="p-2 bg-slate-800/50 rounded">
                        <div className="text-lg">${(project.funding / 1000000).toFixed(1)}M</div>
                        <div className="text-xs text-slate-400">Target</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Funding Progress</span>
                        <span>${(project.raised / 1000000).toFixed(2)}M / ${(project.funding / 1000000).toFixed(1)}M</span>
                      </div>
                      <Progress value={(project.raised / project.funding) * 100} className="h-2" />
                    </div>

                    <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                      <div className="text-sm mb-2">Expected Benefits:</div>
                      <ul className="space-y-1 text-sm">
                        {project.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-300">
                            <TreePine className="w-3 h-3 text-emerald-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <TreePine className="w-4 h-4 mr-2" />
                      Invest in Nature
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Cumulative Impact Metrics</CardTitle>
                <CardDescription>Real-time verified outcomes across climate finance portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={impactMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis yAxisId="left" stroke="#94a3b8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    />
                    <Line yAxisId="left" type="monotone" dataKey="carbon" stroke="#10b981" strokeWidth={2} name="Carbon (tons)" />
                    <Line yAxisId="right" type="monotone" dataKey="biodiversity" stroke="#3b82f6" strokeWidth={2} name="Biodiversity Score" />
                    <Line yAxisId="right" type="monotone" dataKey="water" stroke="#06b6d4" strokeWidth={2} name="Water Quality" />
                    <Line yAxisId="right" type="monotone" dataKey="social" stroke="#8b5cf6" strokeWidth={2} name="Social Impact" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-emerald-500/10 border-emerald-500/20">
                <CardContent className="p-4 text-center">
                  <Cloud className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl mb-1">1.2M tons</div>
                  <div className="text-sm text-slate-400">CO₂ Sequestered</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-4 text-center">
                  <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl mb-1">850K</div>
                  <div className="text-sm text-slate-400">Hectares Protected</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/10 border-purple-500/20">
                <CardContent className="p-4 text-center">
                  <Wind className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl mb-1">450 MW</div>
                  <div className="text-sm text-slate-400">Renewable Capacity</div>
                </CardContent>
              </Card>
              <Card className="bg-yellow-500/10 border-yellow-500/20">
                <CardContent className="p-4 text-center">
                  <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl mb-1">2.5M</div>
                  <div className="text-sm text-slate-400">Lives Improved</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
