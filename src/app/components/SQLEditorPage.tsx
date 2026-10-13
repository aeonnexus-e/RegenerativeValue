import { useState } from "react";
import { Play, Save, Download, Upload, Code2, Table, Database, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface SQLEditorPageProps {
  onNavigate: (page: string) => void;
}

const sampleQueries = [
  {
    id: 1,
    name: "Impact Outcomes by Region",
    query: "SELECT region, COUNT(*) as total_impacts, AVG(impact_score) as avg_score\nFROM impact_outcomes\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\nGROUP BY region\nORDER BY avg_score DESC;",
    category: "Analytics"
  },
  {
    id: 2,
    name: "Ecosystem Health Trends",
    query: "SELECT \n  DATE(measurement_date) as date,\n  ecosystem_type,\n  AVG(biodiversity_index) as avg_biodiversity\nFROM ecosystem_metrics\nGROUP BY date, ecosystem_type\nORDER BY date DESC;",
    category: "Monitoring"
  },
  {
    id: 3,
    name: "Top Resilience Scores",
    query: "SELECT \n  community_name,\n  resilience_score,\n  population,\n  last_updated\nFROM community_resilience\nORDER BY resilience_score DESC\nLIMIT 10;",
    category: "Rankings"
  }
];

const sampleResults = [
  { region: "North America", total_impacts: 1247, avg_score: 8.7 },
  { region: "Europe", total_impacts: 983, avg_score: 8.4 },
  { region: "Asia Pacific", total_impacts: 1456, avg_score: 8.9 },
  { region: "Latin America", total_impacts: 742, avg_score: 7.8 },
  { region: "Africa", total_impacts: 567, avg_score: 8.1 }
];

export function SQLEditorPage({ onNavigate }: SQLEditorPageProps) {
  const [query, setQuery] = useState(sampleQueries[0].query);
  const [isRunning, setIsRunning] = useState(false);
  const [lastRun, setLastRun] = useState<Date | null>(null);
  const [selectedTab, setSelectedTab] = useState("editor");

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLastRun(new Date());
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-white mb-2">SQL Query Editor</h1>
            <p className="text-slate-400">
              Query and analyze regenerative value data
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Save className="w-4 h-4 mr-2" />
              Save Query
            </Button>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleRunQuery}
              disabled={isRunning}
            >
              <Play className="w-4 h-4 mr-2" />
              {isRunning ? "Running..." : "Run Query"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-blue-400" />
              <div className="text-slate-400">Connected DB</div>
            </div>
            <div className="text-xl text-white">atlas_sanctum_prod</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Table className="w-5 h-5 text-emerald-400" />
              <div className="text-slate-400">Tables</div>
            </div>
            <div className="text-xl text-white">47</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              <div className="text-slate-400">Saved Queries</div>
            </div>
            <div className="text-xl text-white">23</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-2">
              {lastRun ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <XCircle className="w-5 h-5 text-slate-400" />
              )}
              <div className="text-slate-400">Last Run</div>
            </div>
            <div className="text-sm text-white">
              {lastRun ? lastRun.toLocaleTimeString() : "Not executed"}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Saved Queries Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-white mb-4">Sample Queries</h3>
              <div className="space-y-2">
                {sampleQueries.map((sq) => (
                  <div
                    key={sq.id}
                    onClick={() => setQuery(sq.query)}
                    className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-all group"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="text-white text-sm group-hover:text-blue-400 transition-colors">
                        {sq.name}
                      </div>
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                      {sq.category}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="text-white mb-3">Database Schema</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-slate-400 hover:text-white cursor-pointer flex items-center gap-2">
                    <Table className="w-3 h-3" />
                    impact_outcomes
                  </div>
                  <div className="text-slate-400 hover:text-white cursor-pointer flex items-center gap-2">
                    <Table className="w-3 h-3" />
                    ecosystem_metrics
                  </div>
                  <div className="text-slate-400 hover:text-white cursor-pointer flex items-center gap-2">
                    <Table className="w-3 h-3" />
                    community_resilience
                  </div>
                  <div className="text-slate-400 hover:text-white cursor-pointer flex items-center gap-2">
                    <Table className="w-3 h-3" />
                    market_transactions
                  </div>
                  <div className="text-slate-400 hover:text-white cursor-pointer flex items-center gap-2">
                    <Table className="w-3 h-3" />
                    regenerative_assets
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="bg-slate-800 border border-slate-700 mb-4">
                <TabsTrigger value="editor">Query Editor</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="explain">Query Plan</TabsTrigger>
              </TabsList>

              <TabsContent value="editor">
                <Card className="bg-slate-800/50 border-slate-700 p-0 overflow-hidden">
                  {/* Line Numbers & Editor */}
                  <div className="flex">
                    <div className="bg-slate-900/50 px-4 py-4 text-right text-slate-500 text-sm select-none border-r border-slate-700">
                      {query.split('\n').map((_, i) => (
                        <div key={i} className="leading-6">{i + 1}</div>
                      ))}
                    </div>
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="flex-1 bg-transparent p-4 text-white font-mono text-sm resize-none focus:outline-none leading-6"
                      style={{ minHeight: '400px' }}
                      spellCheck={false}
                    />
                  </div>

                  {/* Status Bar */}
                  <div className="bg-slate-900/50 px-4 py-2 border-t border-slate-700 flex items-center justify-between text-sm">
                    <div className="text-slate-400 flex items-center gap-4">
                      <span>Lines: {query.split('\n').length}</span>
                      <span>Characters: {query.length}</span>
                    </div>
                    {isRunning && (
                      <div className="text-blue-400 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        Executing query...
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="results">
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  {lastRun ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-900/50">
                          <tr>
                            <th className="px-6 py-3 text-left text-slate-400">Region</th>
                            <th className="px-6 py-3 text-right text-slate-400">Total Impacts</th>
                            <th className="px-6 py-3 text-right text-slate-400">Avg Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sampleResults.map((row, i) => (
                            <tr key={i} className="border-t border-slate-700 hover:bg-slate-800/50">
                              <td className="px-6 py-3 text-white">{row.region}</td>
                              <td className="px-6 py-3 text-right text-slate-300">{row.total_impacts.toLocaleString()}</td>
                              <td className="px-6 py-3 text-right text-emerald-400">{row.avg_score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="bg-slate-900/50 px-6 py-3 border-t border-slate-700 text-sm text-slate-400">
                        {sampleResults.length} rows returned • Executed in 147ms
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-slate-500">
                      <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Run a query to see results</p>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="explain">
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  {lastRun ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        Query Execution Plan
                      </div>
                      
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Operation:</span>
                            <span className="text-white">Aggregate (GROUP BY)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Rows Scanned:</span>
                            <span className="text-white">4,995</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Index Used:</span>
                            <span className="text-emerald-400">idx_created_at_region</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Execution Time:</span>
                            <span className="text-white">147ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Cost:</span>
                            <span className="text-white">1,247 units</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-slate-400 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <strong className="text-blue-400">Optimization Tip:</strong> Query is well-optimized. 
                        Using appropriate index for date filtering.
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-slate-500">
                      <Database className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Run a query to see the execution plan</p>
                    </div>
                  )}
                </Card>
              </TabsContent>
            </Tabs>

            {/* Export Options */}
            {lastRun && (
              <div className="mt-6 flex items-center gap-3">
                <Button variant="outline" className="border-slate-700 text-slate-300">
                  <Download className="w-4 h-4 mr-2" />
                  Export as CSV
                </Button>
                <Button variant="outline" className="border-slate-700 text-slate-300">
                  <Download className="w-4 h-4 mr-2" />
                  Export as JSON
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
