import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Mail } from "lucide-react";

interface CTASectionProps {
  onGetStarted?: () => void;
}

export function CTASection({ onGetStarted }: CTASectionProps = {}) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl text-white mb-6">
          Join the Regenerative Revolution
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Be part of the movement transforming how we value impact, ecosystems, and human resilience. 
          Early participants gain exclusive access to trillion-dollar opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
          <div className="relative flex-1 w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="pl-12 h-14 bg-white/95 border-0 text-slate-900 placeholder:text-slate-500"
            />
          </div>
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-8 whitespace-nowrap w-full sm:w-auto"
            onClick={onGetStarted}
          >
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="text-blue-100/80 text-sm">
          Join 50,000+ innovators building the future of regenerative finance
        </p>
      </div>
    </section>
  );
}
