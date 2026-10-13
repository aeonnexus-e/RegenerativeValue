import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, Users, Building2, Briefcase, FileText, DollarSign, Target, Award, MapPin, Calendar, Download, Share2 } from "lucide-react";

interface StakeholderPortalsProps {
  onNavigate: (page: string) => void;
}

export function StakeholderPortals({ onNavigate }: StakeholderPortalsProps) {
  const [activePortal, setActivePortal] = useState<"investor" | "community" | "government" | "ngo">("investor");

  // Investor Portal Data
  const investorPortfolio = [
    { asset: "RVT-Carbon", value: 125000, allocation: 28, change: 12.4, rvtUnits: 4386 },
    { asset: "RVT-Biodiversity", value: 98000, allocation: 22, change: 8.7, rvtUnits: 1561 },
    { asset: "Green Bonds", value: 150000, allocation: 33, change: 5.2, rvtUnits: 0 },
    { asset: "Impact Loans", value: 52000, allocation: 12, change: -2.1, rvtUnits: 0 },
    { asset: "NBS Projects", value: 25000, allocation: 5, change: 15.3, rvtUnits: 0 },
  ];

  const investorReturns = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    financial: 8 + Math.random() * 6,
    impact: 12 + Math.random() * 8,
  }));

  const impactAllocation = [
    { name: "Environmental", value: 45, color: "#10b981" },
    { name: "Social", value: 30, color: "#3b82f6" },
    { name: "Economic", value: 18, color: "#f59e0b" },
    { name: "Governance", value: 7, color: "#8b5cf6" },
  ];

  // Community Portal Data
  const communityBenefits = [
    { project: "Agroforestry Initiative", beneficiaries: 1245, rvtEarned: 8923, status: "active", location: "Kenya" },
    { project: "Clean Water Access", beneficiaries: 3567, rvtEarned: 15432, status: "active", location: "Bangladesh" },
    { project: "Solar Microgrid", beneficiaries: 892, rvtEarned: 6234, status: "completed", location: "Peru" },
    { project: "Wetland Restoration", beneficiaries: 2134, rvtEarned: 11876, status: "active", location: "Vietnam" },
  ];

  const communityEngagement = [
    { activity: "Data Collection", participants: 456, rewards: 2340 },
    { activity: "Community Surveys", participants: 234, rewards: 1170 },
    { activity: "Photo Documentation", participants: 189, rewards: 945 },
    { activity: "Impact Verification", participants: 123, rewards: 1230 },
  ];

  // Government Portal Data
  const governmentMetrics = [
    { indicator: "SDG Progress", current: 67, target: 85, trend: "improving" },
    { indicator: "Climate Targets", current: 72, target: 100, trend: "improving" },
    { indicator: "Economic Growth", current: 4.2, target: 6.0, trend: "stable" },
    { indicator: "Social Equity", current: 58, target: 75, trend: "improving" },
  ];

  const regionalProjects = [
    { region: "Northern Region", projects: 23, funding: 12500000, beneficiaries: 45678, impactScore: 87 },
    { region: "Central Region", projects: 18, funding: 8900000, beneficiaries: 32145, impactScore: 82 },
    { region: "Southern Region", projects: 31, funding: 15600000, beneficiaries: 56789, impactScore: 91 },
    { region: "Coastal Region", projects: 14, funding: 7200000, beneficiaries: 23456, impactScore: 79 },
  ];

  // NGO Portal Data
  const ngoProjects = [
    { 
      id: "NGO-001", 
      name: "Forest Restoration Program", 
      budget: 250000, 
      spent: 187500, 
      impactScore: 92,
      beneficiaries: 15000,
      status: "on-track",
      milestones: { completed: 7, total: 10 }
    },
    { 
      id: "NGO-002", 
      name: "Water Purification Initiative", 
      budget: 180000, 
      spent: 145000, 
      impactScore: 88,
      beneficiaries: 23000,
      status: "on-track",
      milestones: { completed: 5, total: 8 }
    },
    { 
      id: "NGO-003", 
      name: "Sustainable Agriculture Training", 
      budget: 95000, 
      spent: 72000, 
      impactScore: 85,
      beneficiaries: 8500,
      status: "delayed",
      milestones: { completed: 4, total: 9 }
    },
  ];

  const ngoImpactReports = [
    { quarter: "Q1 2024", carbon: 45000, beneficiaries: 12000, verified: true, rvtGenerated: 23400 },
    { quarter: "Q2 2024", carbon: 52000, beneficiaries: 18000, verified: true, rvtGenerated: 29800 },
    { quarter: "Q3 2024", carbon: 61000, beneficiaries: 24000, verified: true, rvtGenerated: 36500 },
    { quarter: "Q4 2024", carbon: 58000, beneficiaries: 21000, verified: false, rvtGenerated: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl mb-2">Stakeholder Portals</h1>
          <p className="text-slate-400">Customized interfaces for all ecosystem participants</p>
        </div>

        {/* Portal Selection */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card 
            className={`cursor-pointer transition-all ${activePortal === 'investor' ? 'bg-emerald-500/20 border-emerald-500' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
            onClick={() => setActivePortal('investor')}
          >
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <div>Investor Portal</div>
              <div className="text-xs text-slate-400 mt-1">Portfolio & Returns</div>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all ${activePortal === 'community' ? 'bg-blue-500/20 border-blue-500' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
            onClick={() => setActivePortal('community')}
          >
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div>Community Dashboard</div>
              <div className="text-xs text-slate-400 mt-1">Benefits & Engagement</div>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all ${activePortal === 'government' ? 'bg-purple-500/20 border-purple-500' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
            onClick={() => setActivePortal('government')}
          >
            <CardContent className="p-4 text-center">
              <Building2 className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <div>Government Hub</div>
              <div className="text-xs text-slate-400 mt-1">Policy & Metrics</div>
            </CardContent>
          </Card>

          <Card 
            className={`cursor-pointer transition-all ${activePortal === 'ngo' ? 'bg-yellow-500/20 border-yellow-500' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}
            onClick={() => setActivePortal('ngo')}
          >
            <CardContent className="p-4 text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <div>NGO Suite</div>
              <div className="text-xs text-slate-400 mt-1">Projects & Reporting</div>
            </CardContent>
          </Card>
        </div>

        {/* Investor Portal */}
        {activePortal === 'investor' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-emerald-500/10 border-emerald-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-emerald-400 mb-1">Total Portfolio Value</div>
                  <div className="text-2xl mb-1">$450,000</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +9.8% YTD
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-blue-400 mb-1">RVT Holdings</div>
                  <div className="text-2xl mb-1">5,947</div>
                  <div className="text-xs text-blue-400">Across 2 categories</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/10 border-purple-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-purple-400 mb-1">Impact Score</div>
                  <div className="text-2xl mb-1">87.3</div>
                  <div className="text-xs text-purple-400">Top 15% of investors</div>
                </CardContent>
              </Card>
              <Card className="bg-yellow-500/10 border-yellow-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-yellow-400 mb-1">Annual Yield</div>
                  <div className="text-2xl mb-1">11.4%</div>
                  <div className="text-xs text-yellow-400">Financial + Impact</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle>Portfolio Holdings</CardTitle>
                  <CardDescription>Asset allocation and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {investorPortfolio.map((asset, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="mb-1">{asset.asset}</div>
                          <div className="text-sm text-slate-400">{asset.allocation}% allocation</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg">${(asset.value / 1000).toFixed(0)}K</div>
                          <Badge className={asset.change >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}>
                            {asset.change >= 0 ? '+' : ''}{asset.change}%
                          </Badge>
                        </div>
                      </div>
                      {asset.rvtUnits > 0 && (
                        <div className="text-xs text-slate-400">
                          {asset.rvtUnits.toLocaleString()} RVT units
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle>Returns (12 Months)</CardTitle>
                  <CardDescription>Financial vs Impact returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={investorReturns}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      />
                      <Line type="monotone" dataKey="financial" stroke="#10b981" strokeWidth={2} name="Financial ROI %" />
                      <Line type="monotone" dataKey="impact" stroke="#8b5cf6" strokeWidth={2} name="Impact ROI %" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Impact Allocation</CardTitle>
                    <CardDescription>Your portfolio's regenerative impact distribution</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={impactAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {impactAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {impactAllocation.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                        <span className="text-lg">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Community Portal */}
        {activePortal === 'community' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-blue-400 mb-1">Total Beneficiaries</div>
                  <div className="text-2xl mb-1">7,838</div>
                  <div className="text-xs text-blue-400">Across 4 active projects</div>
                </CardContent>
              </Card>
              <Card className="bg-emerald-500/10 border-emerald-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-emerald-400 mb-1">RVT Earned</div>
                  <div className="text-2xl mb-1">42,465</div>
                  <div className="text-xs text-emerald-400">Redeemable tokens</div>
                </CardContent>
              </Card>
              <Card className="bg-purple-500/10 border-purple-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-purple-400 mb-1">Community Value</div>
                  <div className="text-2xl mb-1">$127,395</div>
                  <div className="text-xs text-purple-400">In benefits distributed</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Active Community Projects</CardTitle>
                <CardDescription>Projects benefiting your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {communityBenefits.map((project, idx) => (
                  <Card key={idx} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="mb-1">{project.project}</div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </div>
                        </div>
                        <Badge className={project.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-2 bg-slate-700/50 rounded text-center">
                          <div className="text-lg">{project.beneficiaries.toLocaleString()}</div>
                          <div className="text-xs text-slate-400">Beneficiaries</div>
                        </div>
                        <div className="p-2 bg-emerald-500/10 rounded text-center">
                          <div className="text-lg text-emerald-400">{project.rvtEarned.toLocaleString()}</div>
                          <div className="text-xs text-slate-400">RVT Earned</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Community Engagement & Rewards</CardTitle>
                <CardDescription>Earn RVT by contributing to impact verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {communityEngagement.map((activity, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/50 rounded">
                    <div>
                      <div className="mb-1">{activity.activity}</div>
                      <div className="text-sm text-slate-400">{activity.participants} participants</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg text-emerald-400">{activity.rewards} RVT</div>
                      <Button size="sm" className="mt-1 bg-blue-600 hover:bg-blue-700">
                        Participate
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Government Portal */}
        {activePortal === 'government' && (
          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>National Development Indicators</CardTitle>
                <CardDescription>Progress towards policy goals and SDGs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {governmentMetrics.map((metric, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="mb-1">{metric.indicator}</div>
                        <div className="text-sm text-slate-400">
                          {metric.trend === 'improving' ? '↗ Improving' : '→ Stable'}
                        </div>
                      </div>
                      <Badge className={
                        metric.current >= metric.target * 0.8 ? 'bg-emerald-500/20 text-emerald-400' :
                        metric.current >= metric.target * 0.6 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }>
                        {metric.current} / {metric.target}
                      </Badge>
                    </div>
                    <Progress value={(metric.current / metric.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Regional Project Distribution</CardTitle>
                <CardDescription>Impact across administrative regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {regionalProjects.map((region, idx) => (
                    <Card key={idx} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <div className="mb-1">{region.region}</div>
                            <div className="text-sm text-slate-400">{region.projects} active projects</div>
                          </div>
                          <div className="text-center p-2 bg-purple-500/10 rounded">
                            <div className="text-xl text-purple-400">{region.impactScore}</div>
                            <div className="text-xs text-slate-400">Impact Score</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Funding:</span>
                            <span>${(region.funding / 1000000).toFixed(1)}M</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Beneficiaries:</span>
                            <span>{region.beneficiaries.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* NGO Portal */}
        {activePortal === 'ngo' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-yellow-500/10 border-yellow-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-yellow-400 mb-1">Active Projects</div>
                  <div className="text-2xl mb-1">3</div>
                  <div className="text-xs text-yellow-400">2 on-track, 1 delayed</div>
                </CardContent>
              </Card>
              <Card className="bg-emerald-500/10 border-emerald-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-emerald-400 mb-1">Total Budget</div>
                  <div className="text-2xl mb-1">$525K</div>
                  <div className="text-xs text-emerald-400">77% utilized</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-4">
                  <div className="text-sm text-blue-400 mb-1">Lives Impacted</div>
                  <div className="text-2xl mb-1">46,500</div>
                  <div className="text-xs text-blue-400">Verified beneficiaries</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Project Portfolio</CardTitle>
                <CardDescription>Track progress and impact across all initiatives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {ngoProjects.map((project) => (
                  <Card key={project.id} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="mb-1">{project.name}</div>
                          <div className="text-sm text-slate-400 font-mono">{project.id}</div>
                        </div>
                        <Badge className={
                          project.status === 'on-track' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }>
                          {project.status}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-4 gap-3 mb-3">
                        <div className="p-2 bg-slate-700/50 rounded text-center">
                          <div className="text-sm text-slate-400">Budget</div>
                          <div className="text-lg">${(project.budget / 1000).toFixed(0)}K</div>
                        </div>
                        <div className="p-2 bg-slate-700/50 rounded text-center">
                          <div className="text-sm text-slate-400">Spent</div>
                          <div className="text-lg">${(project.spent / 1000).toFixed(0)}K</div>
                        </div>
                        <div className="p-2 bg-purple-500/10 rounded text-center">
                          <div className="text-sm text-slate-400">Impact</div>
                          <div className="text-lg text-purple-400">{project.impactScore}</div>
                        </div>
                        <div className="p-2 bg-blue-500/10 rounded text-center">
                          <div className="text-sm text-slate-400">Reached</div>
                          <div className="text-lg text-blue-400">{(project.beneficiaries / 1000).toFixed(1)}K</div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Milestones</span>
                          <span>{project.milestones.completed} / {project.milestones.total}</span>
                        </div>
                        <Progress value={(project.milestones.completed / project.milestones.total) * 100} className="h-2" />
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Impact Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Quarterly Impact Verification</CardTitle>
                <CardDescription>BCQI-verified outcomes for stakeholder reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ngoImpactReports.map((report, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/50 rounded">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-5 h-5 text-slate-400" />
                        <div>
                          <div className="mb-1">{report.quarter}</div>
                          <div className="text-sm text-slate-400">
                            {report.carbon.toLocaleString()} tons CO₂ • {report.beneficiaries.toLocaleString()} people
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {report.verified ? (
                          <>
                            <Badge className="bg-emerald-500/20 text-emerald-400">
                              <Award className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                            <div className="text-right">
                              <div className="text-sm text-slate-400">RVT Generated</div>
                              <div className="text-lg text-emerald-400">{report.rvtGenerated.toLocaleString()}</div>
                            </div>
                          </>
                        ) : (
                          <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                            Pending Verification
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
