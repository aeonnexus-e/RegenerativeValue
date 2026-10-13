import { useState } from "react";
import { Plus, Play, Pause, Settings, Trash2, Database, FileText, Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface WorkflowPageProps {
  onNavigate: (page: string) => void;
}

const workflows = [
  {
    id: 1,
    name: "Impact Data Ingestion",
    description: "Automated collection of impact outcome data from multiple sources",
    status: "running",
    lastRun: "5 minutes ago",
    nextRun: "In 55 minutes",
    nodes: 8,
    executions: 1247
  },
  {
    id: 2,
    name: "Ecosystem Health Analysis",
    description: "Process and analyze biodiversity metrics from satellite data",
    status: "idle",
    lastRun: "2 hours ago",
    nextRun: "In 1 hour",
    nodes: 12,
    executions: 843
  },
  {
    id: 3,
    name: "Resilience Score Calculation",
    description: "Calculate community resilience scores from social infrastructure data",
    status: "running",
    lastRun: "1 minute ago",
    nextRun: "In 59 minutes",
    nodes: 6,
    executions: 2156
  },
  {
    id: 4,
    name: "Market Data Aggregation",
    description: "Aggregate trading data from regenerative asset exchanges",
    status: "error",
    lastRun: "10 minutes ago",
    nextRun: "Paused",
    nodes: 10,
    executions: 956
  }
];

export function WorkflowPage({ onNavigate }: WorkflowPageProps) {
  const [selectedTab, setSelectedTab] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "idle":
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
      case "error":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-white mb-2">Workflows</h1>
            <p className="text-slate-400">
              Build and manage data automation workflows
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Workflow
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Total Workflows</div>
            <div className="text-3xl text-white">{workflows.length}</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Running</div>
            <div className="text-3xl text-emerald-400">
              {workflows.filter(w => w.status === 'running').length}
            </div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Total Executions</div>
            <div className="text-3xl text-white">
              {workflows.reduce((sum, w) => sum + w.executions, 0)}
            </div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Errors</div>
            <div className="text-3xl text-red-400">
              {workflows.filter(w => w.status === 'error').length}
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="bg-slate-800 border border-slate-700 mb-6">
            <TabsTrigger value="all">All Workflows</TabsTrigger>
            <TabsTrigger value="running">Running</TabsTrigger>
            <TabsTrigger value="idle">Idle</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {workflows.map((workflow) => (
                <Card
                  key={workflow.id}
                  className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-white">{workflow.name}</h3>
                        <Badge className={getStatusColor(workflow.status)}>
                          {workflow.status}
                        </Badge>
                      </div>
                      <p className="text-slate-400 mb-4">{workflow.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4" />
                          <span>{workflow.nodes} nodes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{workflow.executions} executions</span>
                        </div>
                        <div>Last run: {workflow.lastRun}</div>
                        <div>Next: {workflow.nextRun}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-slate-400 hover:text-white hover:bg-slate-700"
                        onClick={() => onNavigate('automation')}
                      >
                        {workflow.status === 'running' ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-slate-400 hover:text-white hover:bg-slate-700"
                        onClick={() => onNavigate('automation')}
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-slate-400 hover:text-red-400 hover:bg-slate-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {workflow.status === 'running' && (
                    <div className="mt-4">
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
                          style={{ width: '45%' }}
                        ></div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="running">
            <div className="space-y-4">
              {workflows.filter(w => w.status === 'running').map((workflow) => (
                <Card
                  key={workflow.id}
                  className="bg-slate-800/50 border-slate-700 p-6"
                >
                  <h3 className="text-xl text-white mb-2">{workflow.name}</h3>
                  <p className="text-slate-400">{workflow.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="idle">
            <div className="space-y-4">
              {workflows.filter(w => w.status === 'idle').map((workflow) => (
                <Card
                  key={workflow.id}
                  className="bg-slate-800/50 border-slate-700 p-6"
                >
                  <h3 className="text-xl text-white mb-2">{workflow.name}</h3>
                  <p className="text-slate-400">{workflow.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
