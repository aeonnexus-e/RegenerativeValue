import { useState } from "react";
import { Database, GitBranch, Zap, ArrowRight, Settings, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface DataAutomationPageProps {
  onNavigate: (page: string) => void;
}

const nodes = [
  { id: 'source', type: 'source', label: 'Data Source', icon: Database, color: 'from-blue-500 to-blue-600' },
  { id: 'transform', type: 'transform', label: 'Transform', icon: GitBranch, color: 'from-purple-500 to-purple-600' },
  { id: 'filter', type: 'filter', label: 'Filter', icon: Settings, color: 'from-emerald-500 to-emerald-600' },
  { id: 'destination', type: 'destination', label: 'Destination', icon: Database, color: 'from-cyan-500 to-cyan-600' },
];

const connections = [
  { from: 'source', to: 'transform' },
  { from: 'transform', to: 'filter' },
  { from: 'filter', to: 'destination' },
];

export function DataAutomationPage({ onNavigate }: DataAutomationPageProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl text-white mb-2">Data Automation Builder</h1>
            <p className="text-slate-400">
              Visual workflow editor for data automation
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-300">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Play className="w-4 h-4 mr-2" />
              Run Workflow
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => onNavigate('sql')}
            >
              Open SQL Editor
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Node Palette */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-white mb-4">Available Nodes</h3>
              <div className="space-y-3">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white">Data Source</div>
                      <div className="text-xs text-slate-400">Import data</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white">Transform</div>
                      <div className="text-xs text-slate-400">Modify data</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-emerald-500 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white">Filter</div>
                      <div className="text-xs text-slate-400">Filter rows</div>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500 cursor-pointer transition-all"
                  onClick={() => onNavigate('sql')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white">SQL Query</div>
                      <div className="text-xs text-slate-400">Run SQL</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800/50 border-slate-700 p-8 min-h-[600px] relative">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Workflow Visualization */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="space-y-12">
                  {nodes.map((node, index) => (
                    <div key={node.id}>
                      <div
                        onClick={() => setSelectedNode(node.id)}
                        className={`relative bg-slate-900/50 border-2 rounded-xl p-6 cursor-pointer transition-all hover:scale-105 ${selectedNode === node.id ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700'}`}
                        style={{ width: '300px' }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center`}>
                            <node.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="text-white">{node.label}</div>
                            <div className="text-sm text-slate-400">{node.type}</div>
                          </div>
                        </div>

                        {/* Connection Dot */}
                        {index < nodes.length - 1 && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>

                      {/* Arrow */}
                      {index < nodes.length - 1 && (
                        <div className="flex justify-center my-4">
                          <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Node Configuration */}
        {selectedNode && (
          <Card className="bg-slate-800/50 border-slate-700 p-6 mt-6">
            <h3 className="text-white mb-4">
              Node Configuration: {nodes.find(n => n.id === selectedNode)?.label}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 mb-2">Node Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter node name"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2">Description</label>
                <input
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter description"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
