import { 
  Shield, Database, Users, TrendingUp, Globe, Leaf, 
  Heart, Zap, FileCheck, DollarSign, Award, AlertTriangle,
  BarChart3, ArrowRight, Activity, Satellite, Coins, Lightbulb, Brain, Bot, ShoppingCart
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface RVXSuperdashboardProps {
  onNavigate: (page: string) => void;
}

// Core RVX Modules
const rvxModules = [
  {
    id: "impact-registry",
    name: "Impact Registry",
    description: "Universal ledger of verified regenerative outcomes",
    icon: Award,
    gradient: "from-blue-500 to-cyan-500",
    metrics: {
      verified: "1,456,000",
      pending: "42,389",
      value: "$1.34T"
    },
    innovations: ["AI Validation", "Blockchain Timestamping", "Global Impact Scoring"],
    status: "active"
  },
  {
    id: "beneficiary-ecosystem",
    name: "Beneficiary Ecosystem",
    description: "Citizens, organizations & communities tracking",
    icon: Users,
    gradient: "from-emerald-500 to-green-500",
    metrics: {
      registered: "35.2M",
      active: "28.7M",
      communities: "12,456"
    },
    innovations: ["Geo-Mapping", "Biometric Sync", "Community Clustering"],
    status: "active"
  },
  {
    id: "project-orchestration",
    name: "Project Orchestration",
    description: "End-to-end lifecycle management",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    metrics: {
      active: "8,234",
      completed: "23,567",
      budget: "$847M"
    },
    innovations: ["Predictive Optimization", "Dynamic Reallocation", "AI Scheduling"],
    status: "active"
  },
  {
    id: "funding-capital",
    name: "Funding & Capital Flow",
    description: "Track inflows/outflows of impact capital",
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-500",
    metrics: {
      deployed: "$2.4B",
      pending: "$567M",
      roi: "287%"
    },
    innovations: ["Smart Contracts", "Real-Time FX", "Mobile Money Bridges"],
    status: "active"
  },
  {
    id: "marketplace",
    name: "Marketplace for Good",
    description: "Trade RVTs and verified local goods/services",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-teal-500",
    metrics: {
      rvtVolume: "847M",
      transactions: "1.2M",
      vendors: "45,678"
    },
    innovations: ["Demand Aggregation", "AI Procurement", "RVT Exchange"],
    status: "active"
  },
  {
    id: "resilience-analytics",
    name: "Resilience Analytics",
    description: "Real-time regional resilience & risk monitoring",
    icon: Activity,
    gradient: "from-rose-500 to-red-500",
    metrics: {
      regions: "195",
      riskLevel: "Medium",
      score: "8.4/10"
    },
    innovations: ["Climate Models", "ML Forecasting", "Stress Simulations"],
    status: "active"
  },
  {
    id: "policy-compliance",
    name: "Policy & Compliance",
    description: "Adherence to humanitarian & national laws",
    icon: FileCheck,
    gradient: "from-indigo-500 to-purple-500",
    metrics: {
      regulations: "2,456",
      audits: "100%",
      score: "9.7/10"
    },
    innovations: ["Auto-Compliance", "Governance AI", "Legal Scoring"],
    status: "active"
  },
  {
    id: "citizen-services",
    name: "Citizen Services Portal",
    description: "Localized access to aid, employment & training",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    metrics: {
      requests: "847K",
      fulfilled: "734K",
      satisfaction: "94%"
    },
    innovations: ["Multi-Channel", "Voice AI", "USSD Gateway"],
    status: "active"
  },
  {
    id: "donor-console",
    name: "Donor & Partner Console",
    description: "Transparency dashboard for funders & investors",
    icon: Globe,
    gradient: "from-violet-500 to-purple-500",
    metrics: {
      partners: "1,247",
      invested: "$5.2B",
      sroi: "4.2x"
    },
    innovations: ["SROI Analytics", "Live Visualizations", "Impact ROI"],
    status: "active"
  }
];

// Real-time system metrics
const systemMetrics = [
  {
    label: "Total Regenerative Value",
    value: "$1.34T",
    change: "+12.4%",
    trend: "up",
    icon: TrendingUp
  },
  {
    label: "Active RVT Tokens",
    value: "847M",
    change: "+8.7%",
    trend: "up",
    icon: Award
  },
  {
    label: "Beneficiaries Served",
    value: "35.2M",
    change: "+23.1%",
    trend: "up",
    icon: Users
  },
  {
    label: "Resilience Score",
    value: "8.4/10",
    change: "+0.7",
    trend: "up",
    icon: Shield
  }
];

// System pillars
const systemPillars = [
  {
    name: "Economic Intelligence",
    description: "Real-time economic activity, supply chains & market insights",
    icon: BarChart3,
    color: "blue",
    status: "Operational"
  },
  {
    name: "Humanitarian Intelligence",
    description: "Aid transparency, resilience projects & social interventions",
    icon: Heart,
    color: "emerald",
    status: "Operational"
  },
  {
    name: "Impact Tokenization",
    description: "Convert outcomes into Regenerative Value Tokens (RVTs)",
    icon: Award,
    color: "purple",
    status: "Operational"
  },
  {
    name: "AI Ethics & Trust",
    description: "Equitable data usage & explainable AI accountability",
    icon: Shield,
    color: "cyan",
    status: "Operational"
  }
];

export function RVXSuperdashboard({ onNavigate }: RVXSuperdashboardProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-white">RVX Superdashboard</h1>
              <p className="text-slate-400">
                Regenerative Value Exchange — Command Center for Impact Orchestration
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              All Systems Operational
            </Badge>
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              195 Countries Active
            </Badge>
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              Value Beyond Profit
            </Badge>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemMetrics.map((metric, idx) => (
            <Card key={idx} className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">{metric.label}</div>
                <metric.icon className={`w-5 h-5 ${metric.trend === "up" ? "text-emerald-400" : "text-red-400"}`} />
              </div>
              <div className="text-3xl text-white mb-1">{metric.value}</div>
              <div className={`text-sm ${metric.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                {metric.change} this month
              </div>
            </Card>
          ))}
        </div>

        {/* System Pillars */}
        <div className="mb-8">
          <h2 className="text-2xl text-white mb-6">System Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemPillars.map((pillar, idx) => {
              const iconBgColor = pillar.color === 'blue' ? 'bg-blue-500/10' : pillar.color === 'emerald' ? 'bg-emerald-500/10' : pillar.color === 'amber' ? 'bg-amber-500/10' : 'bg-indigo-500/10';
              const iconColor = pillar.color === 'blue' ? 'text-blue-400' : pillar.color === 'emerald' ? 'text-emerald-400' : pillar.color === 'amber' ? 'text-amber-400' : 'text-indigo-400';
              const badgeBg = pillar.color === 'blue' ? 'bg-blue-500/10' : pillar.color === 'emerald' ? 'bg-emerald-500/10' : pillar.color === 'amber' ? 'bg-amber-500/10' : 'bg-indigo-500/10';
              const badgeText = pillar.color === 'blue' ? 'text-blue-400' : pillar.color === 'emerald' ? 'text-emerald-400' : pillar.color === 'amber' ? 'text-amber-400' : 'text-indigo-400';
              const badgeBorder = pillar.color === 'blue' ? 'border-blue-500/20' : pillar.color === 'emerald' ? 'border-emerald-500/20' : pillar.color === 'amber' ? 'border-amber-500/20' : 'border-indigo-500/20';
              
              return (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all">
                  <div className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center mb-4`}>
                    <pillar.icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="text-white mb-2">{pillar.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{pillar.description}</p>
                  <Badge className={`${badgeBg} ${badgeText} ${badgeBorder}`}>
                    {pillar.status}
                  </Badge>
                </Card>
              );
            })}
          </div>
        </div>

        {/* RVX Modules */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-white">Core Modules</h2>
            <Button variant="outline" className="border-slate-600 text-slate-300">
              View All Modules
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rvxModules.map((module) => (
              <Card
                key={module.id}
                className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all cursor-pointer group"
                onClick={() => onNavigate("workspace", module.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    {module.status}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-slate-400 mb-6">{module.description}</p>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {Object.entries(module.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-slate-400 capitalize">{key}</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Innovations */}
                <div className="mb-4">
                  <div className="text-xs text-slate-500 mb-2">Innovations</div>
                  <div className="flex flex-wrap gap-2">
                    {module.innovations.map((innovation, idx) => (
                      <Badge
                        key={idx}
                        className="bg-slate-900/50 text-slate-400 border-slate-700 text-xs"
                      >
                        {innovation}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full text-slate-400 hover:text-white hover:bg-slate-700"
                  onClick={() => onNavigate("workspace")}
                >
                  Open Module
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Pillars Section */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl text-white mb-2">Climate Finance Innovation</h2>
              <p className="text-slate-400">
                Six integrated pillars transforming regeneration into a liquid asset class
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              onClick={() => onNavigate("innovation-hub")}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Innovation Hub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card 
              className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("cis")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Satellite className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-cyan-400 transition-colors">CIS</h3>
                  <p className="text-xs text-slate-400">Climate Intelligence</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                AI-driven verification infrastructure
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">1.45M verifications</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("bcqi")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Coins className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-emerald-400 transition-colors">BCQI</h3>
                  <p className="text-xs text-slate-400">Blockchain Impact</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Tokenized proof of regeneration
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">2.8M RUs issued</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border-purple-500/20 p-6 hover:border-purple-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("oore")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-purple-400 transition-colors">OORE</h3>
                  <p className="text-xs text-slate-400">Outcome Engine</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Finance that pays for results
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">$8.7B disbursed</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-purple-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 border-pink-500/20 p-6 hover:border-pink-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("ecp")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-pink-400 transition-colors">ECP</h3>
                  <p className="text-xs text-slate-400">Ethical Commons</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Governance for regenerative century
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">156K stakeholders</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-pink-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("rob")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-emerald-400 transition-colors">ROB</h3>
                  <p className="text-xs text-slate-400">Outcome Bonds</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Impact-backed financial instruments
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">$18.9B investment</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20 p-6 hover:border-blue-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("pilots")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-blue-400 transition-colors">Pilots</h3>
                  <p className="text-xs text-slate-400">Proof of Concept</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Real-world implementations
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">234K beneficiaries</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>
            </Card>
          </div>
        </div>

        {/* Advanced Innovations Section */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl text-white mb-2">Advanced Innovations</h2>
              <p className="text-slate-400">
                Beyond current innovation — 8 transformative features creating a self-optimizing ecosystem
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => onNavigate("advanced-innovation")}
            >
              <Brain className="w-4 h-4 mr-2" />
              Advanced Hub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card 
              className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20 p-6 hover:border-purple-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("craft")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-purple-400 transition-colors">CRAFT</h3>
                  <p className="text-xs text-slate-400">Data Intelligence</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Autonomous intelligence engine
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">847K data points</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-purple-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("cognitive-finance")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-cyan-400 transition-colors">Cognitive</h3>
                  <p className="text-xs text-slate-400">AI Finance</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Conscious capital allocation
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">24 AI agents active</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("advanced-innovation")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Satellite className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-emerald-400 transition-colors">Adaptive MRV</h3>
                  <p className="text-xs text-slate-400">Edge AI Verification</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Decentralized intelligence
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">12.4K devices</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 border-pink-500/20 p-6 hover:border-pink-500/40 transition-all cursor-pointer group"
              onClick={() => onNavigate("advanced-innovation")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white group-hover:text-pink-400 transition-colors">+ 5 More</h3>
                  <p className="text-xs text-slate-400">Advanced Features</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Explore all innovations
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">View complete suite</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-pink-400 transition-colors" />
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 p-6">
            <ShoppingCart className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-white mb-2">RVT DeFi Marketplace</h3>
            <p className="text-sm text-slate-400 mb-4">
              Trade, stake, and earn with regenerative value tokens
            </p>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => onNavigate("rvt-marketplace")}
            >
              Open Marketplace
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20 p-6">
            <Leaf className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-white mb-2">Climate Finance Hub</h3>
            <p className="text-sm text-slate-400 mb-4">
              Carbon credits, green bonds & nature-based solutions
            </p>
            <Button 
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={() => onNavigate("climate-finance-hub")}
            >
              Explore Climate Finance
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 p-6">
            <Brain className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-white mb-2">AI Analytics Dashboard</h3>
            <p className="text-sm text-slate-400 mb-4">
              Predictive insights, anomaly detection & optimization
            </p>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => onNavigate("ai-analytics-dashboard")}
            >
              View AI Insights
            </Button>
          </Card>
        </div>

        {/* Stakeholder Portals Section */}
        <Card className="mt-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border-cyan-500/20 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white text-lg mb-1">Stakeholder Portals</h3>
                <p className="text-sm text-slate-400">
                  Customized interfaces for Investors, Communities, Governments & NGOs
                </p>
              </div>
            </div>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700"
              onClick={() => onNavigate("stakeholder-portals")}
            >
              Access Portals
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        {/* System Status */}
        <Card className="mt-8 bg-slate-800/50 border-slate-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <div>
                <div className="text-white">All Systems Operational</div>
                <div className="text-sm text-slate-400">
                  Last updated: Just now • Next sync in 3 minutes
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300">
              View System Logs
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}