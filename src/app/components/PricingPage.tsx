import { useState } from "react";
import { Check, Sparkles, Shield, Zap, Crown, Infinity, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const pricingTiers = [
  {
    name: "Explorer",
    icon: Sparkles,
    tagline: "Begin Your Regenerative Journey",
    description: "Perfect for individuals and impact pioneers exploring regenerative value creation",
    monthlyPrice: 0,
    annualPrice: 0,
    impactCapacity: "Up to $50K",
    valueMultiplier: "2x",
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      { name: "5 Impact Outcome Workflows", included: true },
      { name: "Basic Ecosystem Analytics", included: true },
      { name: "Community Resilience Dashboard", included: true },
      { name: "Up to 100 Regenerative Assets", included: true },
      { name: "Monthly Value Compounding", included: true },
      { name: "Standard Market Access", included: true },
      { name: "Email Support", included: true },
      { name: "AI-Powered Insights", included: false },
      { name: "Advanced Compound Modeling", included: false },
      { name: "Custom Value Streams", included: false },
      { name: "Priority Transaction Processing", included: false },
      { name: "Dedicated Success Manager", included: false },
    ],
    cta: "Start Free",
    impactMetrics: {
      outcomes: "500/month",
      ecosystems: "3 active",
      communities: "10 connections"
    }
  },
  {
    name: "Builder",
    icon: Zap,
    tagline: "Scale Regenerative Impact",
    description: "For organizations ready to scale their regenerative value creation and compound returns",
    monthlyPrice: 297,
    annualPrice: 2970,
    impactCapacity: "Up to $5M",
    valueMultiplier: "5x",
    gradient: "from-emerald-500 to-green-500",
    popular: true,
    features: [
      { name: "Unlimited Impact Workflows", included: true },
      { name: "Advanced Ecosystem Analytics", included: true },
      { name: "Resilience Prediction Models", included: true },
      { name: "Up to 10,000 Regenerative Assets", included: true },
      { name: "Weekly Value Compounding", included: true },
      { name: "Priority Market Access", included: true },
      { name: "Priority Email & Chat Support", included: true },
      { name: "AI-Powered Insights", included: true },
      { name: "Advanced Compound Modeling", included: true },
      { name: "Custom Value Streams", included: true },
      { name: "Priority Transaction Processing", included: false },
      { name: "Dedicated Success Manager", included: false },
    ],
    cta: "Start Building",
    impactMetrics: {
      outcomes: "50,000/month",
      ecosystems: "25 active",
      communities: "500 connections"
    }
  },
  {
    name: "Architect",
    icon: Shield,
    tagline: "Architect Regenerative Systems",
    description: "Enterprise-grade platform for architecting large-scale regenerative economies",
    monthlyPrice: 997,
    annualPrice: 9970,
    impactCapacity: "Up to $50M",
    valueMultiplier: "12x",
    gradient: "from-purple-500 to-pink-500",
    popular: false,
    features: [
      { name: "Unlimited Impact Workflows", included: true },
      { name: "Enterprise Ecosystem Analytics", included: true },
      { name: "Predictive Resilience AI", included: true },
      { name: "Unlimited Regenerative Assets", included: true },
      { name: "Daily Value Compounding", included: true },
      { name: "VIP Market Access", included: true },
      { name: "24/7 Priority Support", included: true },
      { name: "AI-Powered Insights", included: true },
      { name: "Advanced Compound Modeling", included: true },
      { name: "Custom Value Streams", included: true },
      { name: "Priority Transaction Processing", included: true },
      { name: "Dedicated Success Manager", included: true },
    ],
    cta: "Become an Architect",
    impactMetrics: {
      outcomes: "Unlimited",
      ecosystems: "Unlimited",
      communities: "Unlimited"
    }
  },
  {
    name: "Guardian",
    icon: Crown,
    tagline: "Global Impact at Scale",
    description: "For planetary-scale organizations building the future of regenerative finance",
    monthlyPrice: null,
    annualPrice: null,
    impactCapacity: "Unlimited",
    valueMultiplier: "∞",
    gradient: "from-amber-500 to-orange-500",
    popular: false,
    features: [
      { name: "Unlimited Everything", included: true },
      { name: "Custom Infrastructure", included: true },
      { name: "White-Label Solutions", included: true },
      { name: "Real-Time Value Compounding", included: true },
      { name: "Exclusive Market Access", included: true },
      { name: "Dedicated Support Team", included: true },
      { name: "Custom AI Models", included: true },
      { name: "Blockchain Integration", included: true },
      { name: "Multi-Region Deployment", included: true },
      { name: "API Access & Integrations", included: true },
      { name: "SLA Guarantees", included: true },
      { name: "C-Suite Advisory", included: true },
    ],
    cta: "Contact Us",
    impactMetrics: {
      outcomes: "Custom",
      ecosystems: "Custom",
      communities: "Global"
    }
  }
];

const addons = [
  {
    name: "AI Optimization Engine",
    description: "Advanced ML models that optimize your regenerative value creation",
    price: 99,
    icon: Sparkles
  },
  {
    name: "Impact Verification Suite",
    description: "Third-party verification and certification for all impact outcomes",
    price: 199,
    icon: Shield
  },
  {
    name: "Custom Analytics Dashboard",
    description: "Fully customizable analytics with white-label options",
    price: 299,
    icon: TrendingUp
  }
];

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const calculateSavings = (monthly: number, annual: number) => {
    const yearlyCostMonthly = monthly * 12;
    const savings = ((yearlyCostMonthly - annual) / yearlyCostMonthly) * 100;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Infinity className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Value-Based Pricing for Regenerative Impact</span>
          </div>
          
          <h1 className="text-5xl text-white mb-4">
            Pricing for a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Regenerative Future
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Pay based on the value you create, not just what you consume. 
            Our compound pricing model grows with your regenerative impact.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
              className="data-[state=checked]:bg-emerald-600"
            />
            <span className={`text-sm ${billingCycle === "annual" ? "text-white" : "text-slate-400"}`}>
              Annual
            </span>
            {billingCycle === "annual" && (
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 ml-2">
                Save up to 33%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative bg-slate-800/50 border-slate-700 p-8 hover:border-slate-600 transition-all ${tier.popular ? "ring-2 ring-emerald-500 border-emerald-500/50 scale-105" : ""} ${selectedTier === tier.name ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedTier(tier.name)}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white border-0">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Icon & Title */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-4`}>
                  <tier.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-400 mb-1">{tier.tagline}</p>
                <p className="text-xs text-slate-500">{tier.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                {tier.monthlyPrice === null ? (
                  <div>
                    <div className="text-4xl text-white mb-1">Custom</div>
                    <div className="text-sm text-slate-400">Contact for pricing</div>
                  </div>
                ) : tier.monthlyPrice === 0 ? (
                  <div>
                    <div className="text-4xl text-white mb-1">Free</div>
                    <div className="text-sm text-slate-400">Forever</div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl text-white">
                        ${billingCycle === "monthly" ? tier.monthlyPrice : Math.round(tier.annualPrice / 12)}
                      </span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-sm text-emerald-400 mt-1">
                        ${tier.annualPrice}/year • Save {calculateSavings(tier.monthlyPrice, tier.annualPrice)}%
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Impact Capacity */}
              <div className="mb-6 p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                <div className="text-xs text-slate-400 mb-1">Regenerative Capacity</div>
                <div className="text-lg text-white mb-3">{tier.impactCapacity}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Value Multiplier</span>
                  <Badge className={`bg-gradient-to-r ${tier.gradient} text-white border-0`}>
                    {tier.valueMultiplier}
                  </Badge>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Impact Outcomes</span>
                  <span className="text-white">{tier.impactMetrics.outcomes}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Active Ecosystems</span>
                  <span className="text-white">{tier.impactMetrics.ecosystems}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Community Network</span>
                  <span className="text-white">{tier.impactMetrics.communities}</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                className={`w-full mb-6 ${tier.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"}`}
                onClick={() => tier.name === "Guardian" ? {} : onNavigate("auth")}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Features */}
              <div className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${feature.included ? "text-emerald-400" : "text-slate-600"}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className={`text-sm ${feature.included ? "text-slate-300" : "text-slate-600"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-white mb-3">Amplify Your Impact</h2>
            <p className="text-slate-400">Premium add-ons to supercharge your regenerative value creation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <Card key={addon.name} className="bg-slate-800/50 border-slate-700 p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <addon.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-white">${addon.price}</div>
                    <div className="text-xs text-slate-400">/month</div>
                  </div>
                </div>
                <h3 className="text-lg text-white mb-2">{addon.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{addon.description}</p>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
                  Add to Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 border-blue-500/20 p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
              <Infinity className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl text-white mb-4">
              The More Value You Create, The More You Save
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our compound pricing model rewards regenerative impact. As your value creation grows, 
              your effective cost per outcome decreases through our proprietary value multiplier system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 rounded-lg p-6">
                <div className="text-3xl text-blue-400 mb-2">2-12x</div>
                <div className="text-sm text-slate-400">Value Multiplier Range</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6">
                <div className="text-3xl text-emerald-400 mb-2">33%</div>
                <div className="text-sm text-slate-400">Average Cost Reduction</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6">
                <div className="text-3xl text-purple-400 mb-2">∞</div>
                <div className="text-sm text-slate-400">Unlimited Scale Potential</div>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Highlight */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Questions about pricing or need a custom plan?
          </p>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            Contact Our Solutions Team
          </Button>
        </div>
      </div>
    </div>
  );
}
