import { useState, useEffect } from 'react';
import { 
  Globe, MapPin, Users, TrendingUp, Lightbulb, Award,
  Leaf, Droplet, BookOpen, CheckCircle, Target
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { getPilotProjects, getPilotMetrics } from '../services/pilotService';
import type { PilotProject } from '../types';

interface PilotProjectsProps {
  onNavigate: (page: string) => void;
}

export function PilotProjects({ onNavigate }: PilotProjectsProps) {
  const [projects, setProjects] = useState<PilotProject[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getPilotMetrics> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [projectsData, metricsData] = await Promise.all([
      getPilotProjects(),
      Promise.resolve(getPilotMetrics())
    ]);
    setProjects(projectsData);
    setMetrics(metricsData);
    setLoading(false);
  };

  const getProjectTypeIcon = (type: string) => {
    const icons: Record<string, any> = {
      agriculture: Leaf,
      watershed: Droplet,
      biodiversity: Globe,
      energy: TrendingUp,
      mixed: Target
    };
    return icons[type] || Target;
  };

  const getProjectTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      agriculture: 'bg-emerald-500/20 text-emerald-400',
      watershed: 'bg-blue-500/20 text-blue-400',
      biodiversity: 'bg-purple-500/20 text-purple-400',
      energy: 'bg-amber-500/20 text-amber-400',
      mixed: 'bg-cyan-500/20 text-cyan-400'
    };
    return colors[type] || 'bg-slate-500/20 text-slate-400';
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pilot: 'bg-amber-500/20 text-amber-400',
      scaling: 'bg-cyan-500/20 text-cyan-400',
      operational: 'bg-emerald-500/20 text-emerald-400'
    };
    return colors[status] || 'bg-slate-500/20 text-slate-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Globe className="w-12 h-12 animate-pulse mx-auto mb-4 text-cyan-400" />
          <p className="text-slate-400">Loading Pilot Projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-white">Pilot Projects</h1>
            <p className="text-slate-400">Localized Proofs of Concept</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Frontier Economies
          </Badge>
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Community-Led
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Diaspora Finance
          </Badge>
        </div>
      </div>

      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Active Pilots</p>
                <Target className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalPilots}</p>
              <p className="text-cyan-400 text-sm">{metrics.countries} countries</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Beneficiaries</p>
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalBeneficiaries.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">{metrics.hectaresImpacted.toLocaleString()} hectares</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">RUs Generated</p>
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalRUsGenerated.toLocaleString()}</p>
              <p className="text-purple-400 text-sm">${(metrics.totalBondValue / 1000000).toFixed(1)}M bonds</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Success Rate</p>
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.successRate.toFixed(1)}%</p>
              <Progress value={metrics.successRate} className="h-2" />
            </Card>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-6">
        {projects.map((project) => {
          const Icon = getProjectTypeIcon(project.type);
          const ruProgress = (project.outcomes.generatedRUs / project.outcomes.targetRUs) * 100;

          return (
            <Card key={project.id} className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${getProjectTypeColor(project.type)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-white">{project.name}</h2>
                      <p className="text-slate-400 text-sm">{project.region}, {project.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge className={getProjectTypeColor(project.type)}>
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm mb-1">Bond Value</p>
                  <p className="text-white text-2xl">${(project.outcomes.bondValue / 1000000).toFixed(1)}M</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Launched</p>
                  <p className="text-slate-300 text-sm">
                    {project.timeline.launched.toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Current Phase</p>
                  <p className="text-cyan-400 text-sm">{project.timeline.currentPhase}</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Communities</p>
                  <p className="text-purple-400">{project.stakeholders.communities}</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Beneficiaries</p>
                  <p className="text-emerald-400">{project.stakeholders.beneficiaries.toLocaleString()}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-400 text-sm">RU Generation Progress</p>
                  <p className="text-cyan-400 text-sm">
                    {project.outcomes.generatedRUs.toLocaleString()} / {project.outcomes.targetRUs.toLocaleString()}
                  </p>
                </div>
                <Progress value={ruProgress} className="h-3" />
              </div>

              <Tabs defaultValue="metrics" className="mb-4">
                <TabsList className="bg-slate-800 border-slate-700">
                  <TabsTrigger value="metrics">Impact Metrics</TabsTrigger>
                  <TabsTrigger value="innovations">Innovations</TabsTrigger>
                  <TabsTrigger value="learnings">Key Learnings</TabsTrigger>
                  <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
                </TabsList>

                <TabsContent value="metrics" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-slate-800 p-3 rounded-lg">
                        <p className="text-slate-400 text-xs mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-white">{typeof value === 'number' ? value.toLocaleString() : value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="innovations" className="mt-4">
                  <div className="space-y-2">
                    {project.innovations.map((innovation, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5" />
                        <p className="text-slate-300 text-sm">{innovation}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="learnings" className="mt-4">
                  <div className="space-y-2">
                    {project.learnings.map((learning, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-800 p-3 rounded-lg">
                        <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5" />
                        <p className="text-slate-300 text-sm">{learning}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="stakeholders" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Local Partners</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stakeholders.localPartners.map((partner, i) => (
                          <Badge key={i} variant="outline" className="border-slate-700 text-slate-300">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Funders</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stakeholders.funders.map((funder, i) => (
                          <Badge key={i} variant="outline" className="border-emerald-700 text-emerald-400">
                            {funder}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-400 text-sm mb-2">Verification Method</p>
                <p className="text-cyan-400 text-sm">{project.outcomes.verification}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
