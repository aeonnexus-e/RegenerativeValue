import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Explore Markets", href: "#" },
    { name: "Trade Assets", href: "#" },
    { name: "Impact Dashboard", href: "#" },
    { name: "Pricing", href: "#" }
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Mission", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" }
  ],
  resources: [
    { name: "Whitepaper", href: "#" },
    { name: "Research", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Security", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl text-white">Atlas Sanctum</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Building financial sanctuaries that defend humanity and unlock regenerative value.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Atlas Sanctum. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Building shields for the future, powered by regenerative value.
          </p>
        </div>
      </div>
    </footer>
  );
}
