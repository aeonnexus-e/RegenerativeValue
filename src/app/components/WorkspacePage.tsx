import { Plus, Folder, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface WorkspacePageProps {
  onNavigate: (page: string) => void;
}

const workspaces = [
  {
    id: 1,
    name: "Impact Analytics",
    description: "Analyzing global impact outcomes and ecosystem health metrics",
    workflows: 12,
    lastUpdated: "2 hours ago",
    members: 8,
    status: "active"
  },
  {
    id: 2,
    name: "Ecosystem Valuation",
    description: "Real-time valuation of natural capital and biodiversity assets",
    workflows: 7,
    lastUpdated: "1 day ago",
    members: 5,
    status: "active"
  },
  {
    id: 3,
    name: "Resilience Metrics",
    description: "Community resilience data aggregation and analysis",
    workflows: 15,
    lastUpdated: "3 hours ago",
    members: 12,
    status: "active"
  },
  {
    id: 4,
    name: "Market Intelligence",
    description: "Trading data and market sentiment analysis for regenerative assets",
    workflows: 9,
    lastUpdated: "5 hours ago",
    members: 6,
    status: "active"
  }
];

export function WorkspacePage({ onNavigate }: WorkspacePageProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-white mb-2">Workspaces</h1>
            <p className="text-slate-400">
              Organize your data automation projects and workflows
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New Workspace
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Total Workspaces</div>
            <div className="text-3xl text-white">{workspaces.length}</div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Active Workflows</div>
            <div className="text-3xl text-white">
              {workspaces.reduce((sum, w) => sum + w.workflows, 0)}
            </div>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="text-slate-400 mb-1">Team Members</div>
            <div className="text-3xl text-white">
              {workspaces.reduce((sum, w) => sum + w.members, 0)}
            </div>
          </Card>
        </div>

        {/* Workspaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workspaces.map((workspace) => (
            <Card
              key={workspace.id}
              className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all group cursor-pointer"
              onClick={() => onNavigate('workflow')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {workspace.name}
                    </h3>
                    <Badge className="mt-1 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      {workspace.status}
                    </Badge>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {workspace.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  <span>{workspace.workflows} workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{workspace.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{workspace.lastUpdated}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
