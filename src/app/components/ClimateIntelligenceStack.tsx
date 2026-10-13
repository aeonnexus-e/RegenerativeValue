import { useState, useEffect } from 'react';
import { 
  Satellite, Activity, Database, CheckCircle, AlertTriangle, 
  TrendingUp, Globe, Zap, BarChart3, MapPin 
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { getCISVerifications, getCISMetrics, triggerVerification } from '../services/cisService';
import type { CISVerification } from '../types';

interface ClimateIntelligenceStackProps {
  onNavigate: (page: string) => void;
}

export function ClimateIntelligenceStack({ onNavigate }: ClimateIntelligenceStackProps) {
  const [verifications, setVerifications] = useState<CISVerification[]>([]);
  const [metrics, setMetrics] = useState<ReturnType<typeof getCISMetrics> | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVerification, setSelectedVerification] = useState<CISVerification | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [verificationsData, metricsData] = await Promise.all([
      getCISVerifications(),
      Promise.resolve(getCISMetrics())
    ]);
    setVerifications(verificationsData);
    setMetrics(metricsData);
    setLoading(false);
  };

  const handleTriggerVerification = async () => {
    const newVerification = await triggerVerification('proj-new-001');
    setVerifications([newVerification, ...verifications]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 animate-pulse mx-auto mb-4 text-cyan-400" />
          <p className="text-slate-400">Loading Climate Intelligence Stack...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Satellite className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-white">Climate Intelligence Stack (CIS)</h1>
                <p className="text-slate-400">AI-Driven Verification Infrastructure</p>
              </div>
            </div>
          </div>
          <Button 
            onClick={handleTriggerVerification}
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            <Zap className="w-4 h-4 mr-2" />
            Trigger New Verification
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Techno-Ecological Oracle
          </Badge>
          <Badge variant="outline" className="border-emerald-500 text-emerald-400">
            Real-Time Monitoring
          </Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            Multi-Source Verification
          </Badge>
        </div>
      </div>

      {/* Metrics Overview */}
      {metrics && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Total Verifications</p>
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{metrics.totalVerifications.toLocaleString()}</p>
              <p className="text-emerald-400 text-sm">+{metrics.verificationRate}% verified</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Avg Confidence</p>
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-white mb-1">{(metrics.avgConfidenceScore * 100).toFixed(1)}%</p>
              <Progress value={metrics.avgConfidenceScore * 100} className="h-2" />
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">Data Sources</p>
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white mb-1">
                {(metrics.dataSources.satellite + metrics.dataSources.iot + metrics.dataSources.community).toLocaleString()}
              </p>
              <p className="text-purple-400 text-sm">
                {metrics.dataSources.satellite} satellite | {metrics.dataSources.iot} IoT | {metrics.dataSources.community} community
              </p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-400">CO₂ Verified</p>
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white mb-1">{(metrics.totalCO2Verified / 1000000).toFixed(1)}M</p>
              <p className="text-emerald-400 text-sm">tonnes sequestered</p>
            </Card>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="verifications" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="verifications">Recent Verifications</TabsTrigger>
            <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
            <TabsTrigger value="innovation">Innovation Edge</TabsTrigger>
          </TabsList>

          <TabsContent value="verifications" className="space-y-4">
            {verifications.map((verification) => (
              <Card 
                key={verification.id} 
                className="bg-slate-900 border-slate-800 p-6 hover:border-cyan-500 transition-all cursor-pointer"
                onClick={() => setSelectedVerification(verification)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white">Verification #{verification.id}</h3>
                      <Badge 
                        className={
                          verification.status === 'verified' ? 'bg-emerald-500/20 text-emerald-400' :
                          verification.status === 'pending' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-red-500/20 text-red-400'
                        }
                      >
                        {verification.status}
                      </Badge>
                      <Badge variant="outline" className="border-slate-700 text-slate-400">
                        {verification.projectId}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">
                      Verified: {verification.verificationDate.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">AI Confidence</p>
                    <p className="text-white">{(verification.aiConfidenceScore * 100).toFixed(1)}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">CO₂ Sequestered</p>
                    <p className="text-emerald-400">{verification.verifiedOutcomes.co2Sequestered.toLocaleString()}t</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Hectares</p>
                    <p className="text-cyan-400">{verification.verifiedOutcomes.hectaresRestored.toFixed(1)}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Biodiversity</p>
                    <p className="text-purple-400">{verification.verifiedOutcomes.biodiversityIndex.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Water Quality</p>
                    <p className="text-blue-400">{verification.verifiedOutcomes.waterQuality.toFixed(1)}/10</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Soil Health</p>
                    <p className="text-orange-400">{verification.verifiedOutcomes.soilHealth.toFixed(1)}/10</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Satellite className="w-4 h-4 text-cyan-400" />
                    {verification.dataSources.satellite.length} Satellite
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Activity className="w-4 h-4 text-purple-400" />
                    {verification.dataSources.iot.length} IoT Sensors
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    {verification.dataSources.community.length} Community Reports
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="data-sources">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Satellite className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white">Satellite Imagery</h3>
                    <p className="text-slate-400 text-sm">Sentinel-2, Landsat-9, Planet</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Multi-spectral satellite data for vegetation indices, land cover change detection, and ecosystem monitoring.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">NDVI Analysis</span>
                    <span className="text-emerald-400">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Change Detection</span>
                    <span className="text-emerald-400">Active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Resolution</span>
                    <span className="text-cyan-400">10-30m</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white">IoT Sensors</h3>
                    <p className="text-slate-400 text-sm">Soil, Water, Air, Weather</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Real-time ground sensors providing continuous monitoring of environmental parameters.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Active Devices</span>
                    <span className="text-purple-400">12,456</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Data Points/Day</span>
                    <span className="text-purple-400">2.4M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Uptime</span>
                    <span className="text-emerald-400">99.7%</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-900 border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white">Community Data</h3>
                    <p className="text-slate-400 text-sm">Photos, Surveys, Measurements</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-3">
                  Community-submitted observations and measurements with GPS verification and photo evidence.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Contributors</span>
                    <span className="text-emerald-400">35,678</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Submissions</span>
                    <span className="text-emerald-400">124K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Verified</span>
                    <span className="text-emerald-400">94.3%</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="innovation">
            <Card className="bg-slate-900 border-slate-800 p-8">
              <h2 className="text-white mb-6">Innovation Edge</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-white">Continuous vs. Static Audits</h3>
                  </div>
                  <p className="text-slate-400 mb-3">
                    Unlike traditional carbon credit audits that happen once or twice per year, CIS provides continuous, 
                    real-time monitoring and verification. This creates tamper-proof evidence and builds investor confidence 
                    in historically opaque climate markets.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <p className="text-slate-400 text-sm mb-1">Traditional Audits</p>
                      <p className="text-white">1-2x per year</p>
                      <p className="text-slate-500 text-sm">High cost, low confidence</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-cyan-500/30">
                      <p className="text-cyan-400 text-sm mb-1">CIS Monitoring</p>
                      <p className="text-white">24/7 Real-time</p>
                      <p className="text-emerald-400 text-sm">Low cost, 91% confidence</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white">Multi-Source Data Fusion</h3>
                  </div>
                  <p className="text-slate-400">
                    CIS integrates satellite imagery, IoT sensors, and community-submitted data through AI algorithms 
                    to create a comprehensive, cross-validated view of ecological outcomes. This triangulation approach 
                    dramatically reduces fraud and increases verification accuracy.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-white">Impact on Climate Finance</h3>
                  </div>
                  <p className="text-slate-400">
                    By providing continuous, verifiable data on natural asset performance, CIS transforms climate 
                    outcomes into investable assets. This bridges the gap between environmental performance and 
                    financial market logic, enabling regeneration to become a liquid asset class.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
