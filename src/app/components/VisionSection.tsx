import { Shield, Brain, Heart, Zap } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Inspired by History",
    description: "Drawing wisdom from ancient sanctuaries and financial systems that protected communities through crises."
  },
  {
    icon: Brain,
    title: "Powered by AI",
    description: "Advanced algorithms analyze impact, predict outcomes, and optimize value creation across global networks."
  },
  {
    icon: Heart,
    title: "Rooted in Ethics",
    description: "Every transaction is verified for positive impact, ensuring value creation benefits humanity and the planet."
  },
  {
    icon: Zap,
    title: "Built for Scale",
    description: "Infrastructure designed to handle trillion-dollar markets while maintaining transparency and accountability."
  }
];

export function VisionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Building Shields for the Future
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just innovate — we create financial sanctuaries that defend humanity 
            against systemic risks while unlocking unprecedented opportunities for regenerative growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">{principle.title}</h3>
              <p className="text-slate-400 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl text-white mb-6 leading-relaxed italic">
              "The greatest wealth is not measured in currency, but in the resilience of communities, 
              the health of ecosystems, and the impact we create for future generations."
            </blockquote>
            <div className="text-slate-400">
              — Atlas Sanctum Foundation
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-blue-400 mb-2">195+</div>
            <div className="text-slate-400">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-400 mb-2">$847B</div>
            <div className="text-slate-400">Impact Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-purple-400 mb-2">12.4M</div>
            <div className="text-slate-400">Lives Improved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
