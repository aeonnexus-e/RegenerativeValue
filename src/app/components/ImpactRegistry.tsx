import { useState } from "react";
import { Award, Plus, Search, Filter, CheckCircle2, Clock, XCircle, Coins, TrendingUp, Globe } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ImpactRegistryProps {
  onNavigate: (page: string) => void;
}

// Impact categories
const impactCategories = [
  { id: "environmental", name: "Environmental", icon: Globe, color: "emerald" },
  { id: "social", name: "Social", icon: Award, color: "blue" },
  { id: "economic", name: "Economic", icon: TrendingUp, color: "purple" }
];

// Sample impact records
const impactRecords = [
  {
    id: "IMP-2025-0001",
    title: "Reforestation Project - Kenya",
    category: "environmental",
    outcome: "50,000 trees planted",
    beneficiaries: 12500,
    location: "Kenya, East Africa",
    rvtValue: 125000,
    status: "verified",
    verifiedBy: "AI + Satellite Imagery",
    date: "2025-03-15",
    impact: {
      carbon: "2,500 tons CO2",
      biodiversity: "+15% species diversity",
      community: "125 jobs created"
    }
  },
  {
    id: "IMP-2025-0002",
    title: "Community Education Program",
    category: "social",
    outcome: "5,000 people trained",
    beneficiaries: 5000,
    location: "India, South Asia",
    rvtValue: 75000,
    status: "verified",
    verifiedBy: "AI + Certification Body",
    date: "2025-03-14",
    impact: {
      employment: "+67% job placement",
      income: "+$450/month average",
      skills: "Digital literacy + Trade skills"
    }
  },
  {
    id: "IMP-2025-0003",
    title: "Sustainable Agriculture Initiative",
    category: "economic",
    outcome: "1,000 farmers supported",
    beneficiaries: 1000,
    location: "Brazil, South America",
    rvtValue: 50000,
    status: "pending",
    verifiedBy: "Awaiting field verification",
    date: "2025-03-13",
    impact: {
      yield: "+45% crop yield",
      income: "+$850/year per farmer",
      sustainability: "100% organic practices"
    }
  },
  {
    id: "IMP-2025-0004",
    title: "Clean Water Access Project",
    category: "environmental",
    outcome: "25 water wells installed",
    beneficiaries: 75000,
    location: "Ethiopia, East Africa",
    rvtValue: 200000,
    status: "verified",
    verifiedBy: "AI + IoT Sensors",
    date: "2025-03-12",
    impact: {
      access: "75K people with clean water",
      health: "-82% waterborne diseases",
      time: "15 hours/week saved per family"
    }
  },
  {
    id: "IMP-2025-0005",
    title: "Renewable Energy Deployment",
    category: "economic",
    outcome: "500 solar systems installed",
    beneficiaries: 2500,
    location: "Philippines, Southeast Asia",
    rvtValue: 150000,
    status: "verified",
    verifiedBy: "AI + Smart Meters",
    date: "2025-03-11",
    impact: {
      energy: "2.5 MW capacity",
      savings: "$120/month per household",
      emissions: "-1,250 tons CO2/year"
    }
  },
  {
    id: "IMP-2025-0006",
    title: "Healthcare Access Program",
    category: "social",
    outcome: "10 clinics established",
    beneficiaries: 50000,
    location: "Nigeria, West Africa",
    rvtValue: 180000,
    status: "pending",
    verifiedBy: "Field verification in progress",
    date: "2025-03-10",
    impact: {
      access: "50K patients served",
      mortality: "-45% infant mortality",
      vaccination: "92% coverage achieved"
    }
  }
];

export function ImpactRegistry({ onNavigate }: ImpactRegistryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "environmental":
        return "text-emerald-400";
      case "social":
        return "text-blue-400";
      case "economic":
        return "text-purple-400";
      default:
        return "text-slate-400";
    }
  };

  const filteredRecords = impactRecords.filter(record => {
    const matchesCategory = selectedCategory === "all" || record.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || record.status === selectedStatus;
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const totalRVT = impactRecords.reduce((sum, record) => sum + record.rvtValue, 0);
  const totalBeneficiaries = impactRecords.reduce((sum, record) => sum + record.beneficiaries, 0);
  const verifiedCount = impactRecords.filter(r => r.status === "verified").length;

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl text-white">Impact Registry</h1>
                <p className="text-slate-400">
                  Universal ledger of verified regenerative outcomes
                </p>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Register New Impact
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-slate-400 text-sm">Total RVT Generated</div>
              <Coins className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl text-white mb-1">{totalRVT.toLocaleString()}</div>
            <div className="text-sm text-blue-400">Regenerative Value Tokens</div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-slate-400 text-sm">Verified Outcomes</div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl text-white mb-1">{verifiedCount}</div>
            <div className="text-sm text-emerald-400">Of {impactRecords.length} total</div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-slate-400 text-sm">Beneficiaries Served</div>
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl text-white mb-1">{(totalBeneficiaries / 1000).toFixed(0)}K</div>
            <div className="text-sm text-purple-400">Across all projects</div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-slate-400 text-sm">Verification Rate</div>
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-3xl text-white mb-1">
              {((verifiedCount / impactRecords.length) * 100).toFixed(0)}%
            </div>
            <div className="text-sm text-cyan-400">AI + Blockchain verified</div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search impacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700 text-white"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="environmental">Environmental</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="economic">Economic</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </Card>

        {/* Impact Records */}
        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <Card key={record.id} className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-white">{record.title}</h3>
                    <Badge className={getStatusColor(record.status)}>
                      {record.status === "verified" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {record.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                      {record.status === "rejected" && <XCircle className="w-3 h-3 mr-1" />}
                      {record.status}
                    </Badge>
                    <Badge className={`bg-slate-900/50 border-slate-700 ${getCategoryColor(record.category)}`}>
                      {record.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{record.location}</span>
                    </div>
                    <div>ID: {record.id}</div>
                    <div>{record.date}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Outcome</div>
                      <div className="text-white">{record.outcome}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Beneficiaries</div>
                      <div className="text-white">{record.beneficiaries.toLocaleString()}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">RVT Value</div>
                      <div className="text-blue-400 flex items-center gap-1">
                        <Coins className="w-4 h-4" />
                        {record.rvtValue.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-xs text-slate-400 mb-1">Verification</div>
                      <div className="text-white text-sm">{record.verifiedBy}</div>
                    </div>
                  </div>

                  {/* Impact Details */}
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                    <div className="text-xs text-slate-400 mb-2">Verified Impact</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(record.impact).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-slate-400 capitalize">{key}</span>
                          <span className="text-sm text-emerald-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
                    View Details
                  </Button>
                  {record.status === "verified" && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Coins className="w-4 h-4 mr-2" />
                      Trade RVT
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <Card className="bg-slate-800/50 border-slate-700 p-12 text-center">
            <Award className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No impact records found matching your filters</p>
          </Card>
        )}
      </div>
    </div>
  );
}
