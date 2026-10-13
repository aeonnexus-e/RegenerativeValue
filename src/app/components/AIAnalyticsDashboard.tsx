import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from "recharts";
import { Brain, TrendingUp, AlertTriangle, Sparkles, Target, Zap, Activity, MessageSquare, Download, RefreshCw } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface AIAnalyticsDashboardProps {
  onNavigate: (page: string) => void;
}

export function AIAnalyticsDashboard({ onNavigate }: AIAnalyticsDashboardProps) {
  const [nlQuery, setNlQuery] = useState("");
  const [queryResult, setQueryResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Predictive Analytics Data
  const impactPredictions = [
    { month: "Jul 24", actual: 125000, predicted: null, lower: null, upper: null },
    { month: "Aug 24", actual: 142000, predicted: null, lower: null, upper: null },
    { month: "Sep 24", actual: 158000, predicted: null, lower: null, upper: null },
    { month: "Oct 24", actual: 175000, predicted: null, lower: null, upper: null },
    { month: "Nov 24", actual: 198000, predicted: null, lower: null, upper: null },
    { month: "Dec 24", actual: 215000, predicted: null, lower: null, upper: null },
    { month: "Jan 25", actual: null, predicted: 235000, lower: 225000, upper: 245000 },
    { month: "Feb 25", actual: null, predicted: 258000, lower: 242000, upper: 274000 },
    { month: "Mar 25", actual: null, predicted: 284000, lower: 265000, upper: 303000 },
    { month: "Apr 25", actual: null, predicted: 312000, lower: 289000, upper: 335000 },
    { month: "May 25", actual: null, predicted: 343000, lower: 315000, upper: 371000 },
    { month: "Jun 25", actual: null, predicted: 378000, lower: 345000, upper: 411000 },
  ];

  const anomalyData = [
    { date: "2024-11-15", type: "Disbursement Delay", severity: "medium", impact: "Project ZW-045", status: "resolved", aiConfidence: 92 },
    { date: "2024-11-18", type: "Verification Mismatch", severity: "high", impact: "CIS-Kenya-12", status: "investigating", aiConfidence: 87 },
    { date: "2024-11-22", type: "Unusual Trading Pattern", severity: "low", impact: "RVT-Carbon-003", status: "monitoring", aiConfidence: 78 },
    { date: "2024-11-25", type: "Impact Deviation", severity: "medium", impact: "NBS-Amazon-08", status: "investigating", aiConfidence: 85 },
    { date: "2024-11-28", type: "Funding Bottleneck", severity: "high", impact: "ROB-2024-C", status: "action_required", aiConfidence: 94 },
  ];

  const portfolioOptimization = [
    { category: "Environmental", current: 45, optimal: 52, gap: 7, aiRecommendation: "Increase by 15%" },
    { category: "Social", current: 28, optimal: 25, gap: -3, aiRecommendation: "Reduce by 10%" },
    { category: "Economic", current: 18, optimal: 15, gap: -3, aiRecommendation: "Reduce by 15%" },
    { category: "Governance", current: 9, optimal: 8, gap: -1, aiRecommendation: "Slight reduce" },
  ];

  const performanceMetrics = [
    { metric: "Impact Efficiency", current: 87.3, benchmark: 75, trend: "up", change: 8.5 },
    { metric: "Cost per RVT", current: 12.4, benchmark: 15.8, trend: "down", change: -21.5 },
    { metric: "Verification Speed", current: 3.2, benchmark: 5.5, trend: "down", change: -41.8 },
    { metric: "Beneficiary Reach", current: 94.7, benchmark: 80, trend: "up", change: 18.4 },
    { metric: "AI Accuracy", current: 94.3, benchmark: 85, trend: "up", change: 10.9 },
    { metric: "Ethics Score", current: 96.8, benchmark: 90, trend: "up", change: 7.6 },
  ];

  const correlationMatrix = [
    { factor: "Rainfall", carbon: 0.78, biodiversity: 0.85, water: 0.92, social: 0.45 },
    { factor: "Temperature", carbon: -0.65, biodiversity: -0.72, water: -0.58, social: -0.34 },
    { factor: "Funding", carbon: 0.88, biodiversity: 0.76, water: 0.68, social: 0.91 },
    { factor: "Community Engagement", carbon: 0.54, biodiversity: 0.67, water: 0.61, social: 0.94 },
    { factor: "Policy Support", carbon: 0.71, biodiversity: 0.69, water: 0.65, social: 0.82 },
  ];

  const aiInsights = [
    {
      id: "INS-001",
      type: "Opportunity",
      confidence: 94,
      title: "High-Impact Portfolio Rebalancing",
      description: "ML models suggest reallocating 12% from economic to environmental projects could increase overall impact score by 23% while maintaining similar ROI.",
      action: "Review suggested portfolio adjustments",
      impact: "+23% impact score"
    },
    {
      id: "INS-002",
      type: "Risk",
      confidence: 88,
      title: "Climate Risk Exposure Increasing",
      description: "Predictive models indicate 3 projects in Southeast Asia face elevated flood risk in Q1 2025. Recommend activating parametric insurance.",
      action: "Enable climate insurance",
      impact: "Protect $8.5M assets"
    },
    {
      id: "INS-003",
      type: "Efficiency",
      confidence: 91,
      title: "Verification Process Optimization",
      description: "AI analysis shows 34% of manual verification steps can be automated using edge AI devices, reducing verification time by 41%.",
      action: "Deploy edge AI network",
      impact: "-41% verification time"
    },
    {
      id: "INS-004",
      type: "Trend",
      confidence: 86,
      title: "Emerging Impact Correlation",
      description: "Deep learning models detected strong correlation (r=0.89) between community engagement metrics and long-term biodiversity outcomes.",
      action: "Increase community programs",
      impact: "+35% bio outcomes"
    },
  ];

  const scenarioAnalysis = {
    optimistic: { growth: 45, impactScore: 97, funding: 285, beneficiaries: 3.8 },
    realistic: { growth: 28, impactScore: 91, funding: 215, beneficiaries: 2.9 },
    pessimistic: { growth: 12, impactScore: 82, funding: 165, beneficiaries: 2.1 },
  };

  const handleNLQuery = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setQueryResult(`Analysis complete: Based on your query "${nlQuery}", here are the insights:\n\n• Total carbon sequestration across all projects: 1.24M tons\n• Top performing region: East Africa (RVT generation +47%)\n• Predicted Q1 2025 impact: 378K RVT units (+15.8% vs Q4 2024)\n• Recommended action: Increase funding to biodiversity projects by 12%\n\nConfidence: 94.3% | Data sources: CIS, BCQI, Historical Analytics`);
      setIsProcessing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-emerald-400';
      case 'action_required': return 'text-red-400';
      case 'investigating': return 'text-yellow-400';
      case 'monitoring': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-400" />
              AI Analytics & Intelligence
            </h1>
            <p className="text-slate-400">Predictive insights, anomaly detection & portfolio optimization</p>
          </div>
          <div className="flex gap-3">
            <Card className="bg-purple-500/10 border-purple-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-purple-400">AI Accuracy</div>
                <div className="text-2xl">94.3%</div>
                <div className="text-xs text-purple-400">+2.1% this month</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-500/10 border-emerald-500/20">
              <CardContent className="p-4">
                <div className="text-sm text-emerald-400">Insights Generated</div>
                <div className="text-2xl">1,247</div>
                <div className="text-xs text-emerald-400">Last 30 days</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Natural Language Query Interface */}
        <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              Natural Language Analytics
            </CardTitle>
            <CardDescription>Ask questions about your data in plain English</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea
                placeholder="e.g., 'What's the total carbon sequestration across all projects?' or 'Which region has the highest RVT generation?'"
                value={nlQuery}
                onChange={(e) => setNlQuery(e.target.value)}
                className="bg-slate-900 border-slate-700 min-h-[80px]"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleNLQuery} 
                disabled={!nlQuery || isProcessing}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Analyze
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={() => { setNlQuery(""); setQueryResult(null); }}>
                Clear
              </Button>
            </div>
            {queryResult && (
              <div className="p-4 bg-slate-900/50 border border-purple-500/20 rounded-lg">
                <div className="flex items-start gap-2 mb-2">
                  <Brain className="w-5 h-5 text-purple-400 mt-1" />
                  <div className="flex-1">
                    <div className="mb-2">AI Response:</div>
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans">{queryResult}</pre>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="predictions" className="space-y-6">
          <TabsList className="bg-slate-900/50">
            <TabsTrigger value="predictions">Predictive Analytics</TabsTrigger>
            <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
            <TabsTrigger value="optimization">Portfolio Optimization</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Predictive Analytics */}
          <TabsContent value="predictions" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Impact Forecast - Next 6 Months</CardTitle>
                <CardDescription>ML-powered predictions with confidence intervals</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={impactPredictions}>
                    <defs>
                      <linearGradient id="actual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="predicted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    />
                    <Area type="monotone" dataKey="actual" stroke="#10b981" fillOpacity={1} fill="url(#actual)" />
                    <Area type="monotone" dataKey="predicted" stroke="#8b5cf6" fillOpacity={1} fill="url(#predicted)" strokeDasharray="5 5" />
                    <Area type="monotone" dataKey="upper" stroke="#8b5cf6" fillOpacity={0.1} fill="#8b5cf6" strokeWidth={0} />
                    <Area type="monotone" dataKey="lower" stroke="#8b5cf6" fillOpacity={0.1} fill="#8b5cf6" strokeWidth={0} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg">Optimistic Scenario</CardTitle>
                  <CardDescription>Best-case projection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded">
                    <div className="text-sm text-slate-400">Growth Rate</div>
                    <div className="text-2xl text-emerald-400">+{scenarioAnalysis.optimistic.growth}%</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Impact Score:</span>
                      <span>{scenarioAnalysis.optimistic.impactScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Funding:</span>
                      <span>${scenarioAnalysis.optimistic.funding}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Beneficiaries:</span>
                      <span>{scenarioAnalysis.optimistic.beneficiaries}M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg">Realistic Scenario</CardTitle>
                  <CardDescription>Expected projection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded">
                    <div className="text-sm text-slate-400">Growth Rate</div>
                    <div className="text-2xl text-blue-400">+{scenarioAnalysis.realistic.growth}%</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Impact Score:</span>
                      <span>{scenarioAnalysis.realistic.impactScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Funding:</span>
                      <span>${scenarioAnalysis.realistic.funding}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Beneficiaries:</span>
                      <span>{scenarioAnalysis.realistic.beneficiaries}M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-lg">Pessimistic Scenario</CardTitle>
                  <CardDescription>Conservative projection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
                    <div className="text-sm text-slate-400">Growth Rate</div>
                    <div className="text-2xl text-yellow-400">+{scenarioAnalysis.pessimistic.growth}%</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Impact Score:</span>
                      <span>{scenarioAnalysis.pessimistic.impactScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Funding:</span>
                      <span>${scenarioAnalysis.pessimistic.funding}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Beneficiaries:</span>
                      <span>{scenarioAnalysis.pessimistic.beneficiaries}M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Anomaly Detection */}
          <TabsContent value="anomalies" className="space-y-6">
            <div className="space-y-4">
              {anomalyData.map((anomaly, idx) => (
                <Card key={idx} className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                          <span className="text-lg">{anomaly.type}</span>
                          <Badge variant="outline" className={getSeverityColor(anomaly.severity)}>
                            {anomaly.severity}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-slate-400 mb-1">Detected</div>
                            <div>{anomaly.date}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 mb-1">Impact Area</div>
                            <div className="font-mono text-xs">{anomaly.impact}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 mb-1">Status</div>
                            <div className={getStatusColor(anomaly.status)}>{anomaly.status.replace('_', ' ')}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 mb-1">AI Confidence</div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-slate-700 rounded-full h-2">
                                <div 
                                  className="bg-purple-500 h-2 rounded-full" 
                                  style={{ width: `${anomaly.aiConfidence}%` }}
                                />
                              </div>
                              <span>{anomaly.aiConfidence}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Investigate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Optimization */}
          <TabsContent value="optimization" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>AI-Recommended Portfolio Rebalancing</CardTitle>
                <CardDescription>Optimize for maximum impact efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioOptimization.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="mb-1">{item.category}</div>
                          <div className="text-sm text-slate-400">{item.aiRecommendation}</div>
                        </div>
                        <Badge className={item.gap > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}>
                          {item.gap > 0 ? '+' : ''}{item.gap}%
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="p-3 bg-slate-700/50 rounded">
                          <div className="text-xs text-slate-400 mb-1">Current Allocation</div>
                          <div className="text-xl">{item.current}%</div>
                        </div>
                        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded">
                          <div className="text-xs text-purple-400 mb-1">AI Optimal</div>
                          <div className="text-xl text-purple-400">{item.optimal}%</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${item.current}%` }}
                          />
                        </div>
                        <div className="flex-1 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full" 
                            style={{ width: `${item.optimal}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  <Target className="w-4 h-4 mr-2" />
                  Apply AI Recommendations
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle>Impact Factor Correlation Matrix</CardTitle>
                <CardDescription>AI-discovered relationships between variables</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left p-2 text-slate-400">Factor</th>
                        <th className="text-center p-2 text-slate-400">Carbon</th>
                        <th className="text-center p-2 text-slate-400">Biodiversity</th>
                        <th className="text-center p-2 text-slate-400">Water</th>
                        <th className="text-center p-2 text-slate-400">Social</th>
                      </tr>
                    </thead>
                    <tbody>
                      {correlationMatrix.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-800">
                          <td className="p-2">{row.factor}</td>
                          <td className="text-center p-2">
                            <Badge className={row.carbon > 0.7 ? 'bg-emerald-500/20 text-emerald-400' : row.carbon > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}>
                              {row.carbon.toFixed(2)}
                            </Badge>
                          </td>
                          <td className="text-center p-2">
                            <Badge className={row.biodiversity > 0.7 ? 'bg-emerald-500/20 text-emerald-400' : row.biodiversity > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}>
                              {row.biodiversity.toFixed(2)}
                            </Badge>
                          </td>
                          <td className="text-center p-2">
                            <Badge className={row.water > 0.7 ? 'bg-emerald-500/20 text-emerald-400' : row.water > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}>
                              {row.water.toFixed(2)}
                            </Badge>
                          </td>
                          <td className="text-center p-2">
                            <Badge className={row.social > 0.7 ? 'bg-emerald-500/20 text-emerald-400' : row.social > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}>
                              {row.social.toFixed(2)}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights */}
          <TabsContent value="insights" className="space-y-4">
            {aiInsights.map((insight) => (
              <Card key={insight.id} className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                        <Badge variant="outline" className={
                          insight.type === 'Opportunity' ? 'border-emerald-500/50 text-emerald-400' :
                          insight.type === 'Risk' ? 'border-red-500/50 text-red-400' :
                          insight.type === 'Efficiency' ? 'border-blue-500/50 text-blue-400' :
                          'border-purple-500/50 text-purple-400'
                        }>
                          {insight.type}
                        </Badge>
                      </div>
                      <CardDescription className="font-mono text-xs">{insight.id}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400 mb-1">Confidence</div>
                      <div className="text-2xl text-purple-400">{insight.confidence}%</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{insight.description}</p>
                  <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">Expected Impact</div>
                        <div className="text-lg text-purple-400">{insight.impact}</div>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Zap className="w-4 h-4 mr-2" />
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {performanceMetrics.map((metric, idx) => (
                <Card key={idx} className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">{metric.metric}</div>
                        <div className="text-3xl">{metric.current}</div>
                      </div>
                      <Badge className={metric.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}>
                        {metric.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <Activity className="w-3 h-3 mr-1" />}
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">vs. Benchmark</span>
                      <span>{metric.benchmark}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${metric.current > metric.benchmark ? 'bg-emerald-500' : 'bg-blue-500'}`}
                        style={{ width: `${Math.min((metric.current / metric.benchmark) * 100, 100)}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
