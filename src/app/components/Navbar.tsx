import { Shield, Database, Workflow, Zap, Code, Menu, LogOut, User, TrendingUp, DollarSign, Award, Lightbulb, Satellite, Coins, Heart, Globe, ShoppingCart, Leaf, Brain, Users } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function Navbar({ currentPage, onNavigate, isAuthenticated, onLogout }: NavbarProps) {
  const navItems = [
    { id: 'superdashboard', label: 'Superdashboard', icon: Shield },
    { id: 'rvt-marketplace', label: 'RVT Marketplace', icon: ShoppingCart },
    { id: 'climate-finance-hub', label: 'Climate Finance', icon: Leaf },
    { id: 'ai-analytics-dashboard', label: 'AI Analytics', icon: Brain },
    { id: 'stakeholder-portals', label: 'Stakeholder Portals', icon: Users },
    { id: 'impact-registry', label: 'Impact Registry', icon: Database },
    { id: 'innovation-hub', label: 'Innovation Hub', icon: Lightbulb },
    { id: 'advanced-innovation', label: 'Advanced Innovation', icon: Lightbulb },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
  ];

  const innovationItems = [
    { id: 'cis', label: 'Climate Intelligence', icon: Satellite },
    { id: 'bcqi', label: 'Blockchain Impact', icon: Coins },
    { id: 'oore', label: 'Outcome Engine', icon: Zap },
    { id: 'ecp', label: 'Ethical Commons', icon: Heart },
    { id: 'rob', label: 'Outcome Bonds', icon: TrendingUp },
    { id: 'pilots', label: 'Pilot Projects', icon: Globe },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-white">Atlas Sanctum</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentPage === item.id ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="md:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <Menu className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-slate-800 border-slate-700">
                <DropdownMenuLabel className="text-slate-200">Main Menu</DropdownMenuLabel>
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuLabel className="text-slate-200">Innovation Pillars</DropdownMenuLabel>
                {innovationItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-blue-600 text-white">AS</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-slate-800 border-slate-700">
                <DropdownMenuLabel className="text-slate-200">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-red-400">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}