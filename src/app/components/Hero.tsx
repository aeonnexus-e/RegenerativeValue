import { Button } from "./ui/button";
import { Shield, TrendingUp, Globe, LogIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: HeroProps = {}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1747285727200-49540db7c006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc2FuY3R1YXJ5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDU2OTA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Sanctuary Architecture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Building Shields for the Future</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
          <span className="block mb-2">Atlas Sanctum</span>
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Regenerative Value Exchange
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          A next-generation market where impact outcomes, ecosystems, and human resilience 
          become tradable value. Inspired by history, powered by AI, and rooted in ethics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={onGetStarted}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg">
            <Globe className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl text-blue-400 mb-2">$1.4T+</div>
            <div className="text-slate-400">Market Opportunity</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl text-emerald-400 mb-2">127</div>
            <div className="text-slate-400">Active Ecosystems</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
            <div className="text-3xl text-cyan-400 mb-2">42M+</div>
            <div className="text-slate-400">Impact Outcomes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
