// Display welcome message in development console
import "./lib/consoleWelcome";

import { useState, Suspense, lazy, useEffect } from "react";
import { RVXProvider } from "./contexts/RVXContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoadingFallback } from "./components/LoadingFallback";
import { initializePlatform } from "./lib/initialization";
import { Hero } from "./components/Hero";
import { PillarsSection } from "./components/PillarsSection";
import { MarketDashboard } from "./components/MarketDashboard";
import { VisionSection } from "./components/VisionSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AuthPage } from "./components/AuthPage";

// Lazy load heavy components for better performance
const WorkspacePage = lazy(() => import("./components/WorkspacePage").then(m => ({ default: m.WorkspacePage })));
const WorkflowPage = lazy(() => import("./components/WorkflowPage").then(m => ({ default: m.WorkflowPage })));
const DataAutomationPage = lazy(() => import("./components/DataAutomationPage").then(m => ({ default: m.DataAutomationPage })));
const SQLEditorPage = lazy(() => import("./components/SQLEditorPage").then(m => ({ default: m.SQLEditorPage })));
const HistoricalAnalytics = lazy(() => import("./components/HistoricalAnalytics").then(m => ({ default: m.HistoricalAnalytics })));
const PricingPage = lazy(() => import("./components/PricingPage").then(m => ({ default: m.PricingPage })));
const RVXSuperdashboard = lazy(() => import("./components/RVXSuperdashboard").then(m => ({ default: m.RVXSuperdashboard })));
const ImpactRegistry = lazy(() => import("./components/ImpactRegistry").then(m => ({ default: m.ImpactRegistry })));
const InnovationHub = lazy(() => import("./components/InnovationHub").then(m => ({ default: m.InnovationHub })));
const ClimateIntelligenceStack = lazy(() => import("./components/ClimateIntelligenceStack").then(m => ({ default: m.ClimateIntelligenceStack })));
const BlockchainQuantifiedImpact = lazy(() => import("./components/BlockchainQuantifiedImpact").then(m => ({ default: m.BlockchainQuantifiedImpact })));
const OutcomeOrientedEngine = lazy(() => import("./components/OutcomeOrientedEngine").then(m => ({ default: m.OutcomeOrientedEngine })));
const EthicalCommonsProtocol = lazy(() => import("./components/EthicalCommonsProtocol").then(m => ({ default: m.EthicalCommonsProtocol })));
const RegenerativeOutcomeBonds = lazy(() => import("./components/RegenerativeOutcomeBonds").then(m => ({ default: m.RegenerativeOutcomeBonds })));
const PilotProjects = lazy(() => import("./components/PilotProjects").then(m => ({ default: m.PilotProjects })));
const MarketOperatingSystem = lazy(() => import("./components/MarketOperatingSystem").then(m => ({ default: m.MarketOperatingSystem })));
const AdvancedInnovationHub = lazy(() => import("./components/AdvancedInnovationHub").then(m => ({ default: m.AdvancedInnovationHub })));
const AutonomousDataIntelligence = lazy(() => import("./components/AutonomousDataIntelligence").then(m => ({ default: m.AutonomousDataIntelligence })));
const CognitiveFinanceLayer = lazy(() => import("./components/CognitiveFinanceLayer").then(m => ({ default: m.CognitiveFinanceLayer })));
const PlatformTransformation = lazy(() => import("./components/PlatformTransformation").then(m => ({ default: m.PlatformTransformation })));
// New Advanced Features
const RVTMarketplace = lazy(() => import("./components/RVTMarketplace").then(m => ({ default: m.RVTMarketplace })));
const ClimateFinanceHub = lazy(() => import("./components/ClimateFinanceHub").then(m => ({ default: m.ClimateFinanceHub })));
const AIAnalyticsDashboard = lazy(() => import("./components/AIAnalyticsDashboard").then(m => ({ default: m.AIAnalyticsDashboard })));
const StakeholderPortals = lazy(() => import("./components/StakeholderPortals").then(m => ({ default: m.StakeholderPortals })));

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("landing");

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage("superdashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("landing");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Landing page (marketing site)
  if (currentPage === "landing") {
    return (
      <div className="min-h-screen bg-slate-950">
        <Hero onGetStarted={() => setCurrentPage("auth")} />
        <PillarsSection />
        <MarketDashboard />
        <VisionSection />
        <CTASection onGetStarted={() => setCurrentPage("auth")} />
        <Footer />
      </div>
    );
  }

  // Show auth page before authenticated app
  if (currentPage === "auth") {
    return <AuthPage onLogin={handleLogin} />;
  }

  // Authentication page
  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  // Authenticated application
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      
      <Suspense fallback={<LoadingFallback fullScreen message="Loading module..." />}>
        {currentPage === "superdashboard" && <RVXSuperdashboard onNavigate={handleNavigate} />}
        {currentPage === "impact-registry" && <ImpactRegistry onNavigate={handleNavigate} />}
        {currentPage === "innovation-hub" && <InnovationHub onNavigate={handleNavigate} />}
        {currentPage === "cis" && <ClimateIntelligenceStack onNavigate={handleNavigate} />}
        {currentPage === "bcqi" && <BlockchainQuantifiedImpact onNavigate={handleNavigate} />}
        {currentPage === "oore" && <OutcomeOrientedEngine onNavigate={handleNavigate} />}
        {currentPage === "ecp" && <EthicalCommonsProtocol onNavigate={handleNavigate} />}
        {currentPage === "rob" && <RegenerativeOutcomeBonds onNavigate={handleNavigate} />}
        {currentPage === "pilots" && <PilotProjects onNavigate={handleNavigate} />}
        {currentPage === "market-os" && <MarketOperatingSystem onNavigate={handleNavigate} />}
        {currentPage === "advanced-innovation" && <AdvancedInnovationHub onNavigate={handleNavigate} />}
        {currentPage === "craft" && <AutonomousDataIntelligence onNavigate={handleNavigate} />}
        {currentPage === "cognitive-finance" && <CognitiveFinanceLayer onNavigate={handleNavigate} />}
        {currentPage === "transformation" && <PlatformTransformation onNavigate={handleNavigate} />}
        {currentPage === "workspace" && <WorkspacePage onNavigate={handleNavigate} />}
        {currentPage === "workflow" && <WorkflowPage onNavigate={handleNavigate} />}
        {currentPage === "automation" && <DataAutomationPage onNavigate={handleNavigate} />}
        {currentPage === "sql" && <SQLEditorPage onNavigate={handleNavigate} />}
        {currentPage === "analytics" && <HistoricalAnalytics onNavigate={handleNavigate} />}
        {currentPage === "pricing" && <PricingPage onNavigate={handleNavigate} />}
        {currentPage === "rvt-marketplace" && <RVTMarketplace onNavigate={handleNavigate} />}
        {currentPage === "climate-finance-hub" && <ClimateFinanceHub onNavigate={handleNavigate} />}
        {currentPage === "ai-analytics-dashboard" && <AIAnalyticsDashboard onNavigate={handleNavigate} />}
        {currentPage === "stakeholder-portals" && <StakeholderPortals onNavigate={handleNavigate} />}
      </Suspense>
    </div>
  );
}

export default function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize platform on startup with error handling
    initializePlatform()
      .then((result) => {
        if (result.success) {
          console.log('✅ Platform ready');
        } else {
          console.error('❌ Platform initialization issues:', result.errors);
        }
        setInitialized(true);
      })
      .catch((error) => {
        console.error('Fatal initialization error:', error);
        // Still set initialized to true to show the app with error boundary
        setInitialized(true);
      });
  }, []);

  if (!initialized) {
    return <LoadingFallback fullScreen message="Initializing Atlas Sanctum RVX..." />;
  }

  return (
    <ErrorBoundary onReset={() => window.location.reload()}>
      <RVXProvider>
        <AppContent />
      </RVXProvider>
    </ErrorBoundary>
  );
}