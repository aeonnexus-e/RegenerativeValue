import { Leaf, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  {
    icon: TrendingUp,
    title: "Impact Outcomes",
    description: "Quantifiable results that create measurable positive change in communities, economies, and societies.",
    image: "https://images.unsplash.com/photo-1585816876841-7f1a1a206cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjA1MjY4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Leaf,
    title: "Ecosystem Value",
    description: "Natural capital and biodiversity transformed into tradable assets that protect and regenerate our planet.",
    image: "https://images.unsplash.com/photo-1669338301909-ef7424917c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVjb3N5c3RlbSUyMG5hdHVyZXxlbnwxfHx8fDE3NjA1NjkwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Users,
    title: "Human Resilience",
    description: "The strength of communities, knowledge systems, and social infrastructure as investable value.",
    image: "https://images.unsplash.com/photo-1688866852859-c9e6eb618fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc2lsaWVuY2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYwNTY5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-purple-500 to-pink-500"
  }
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            The Three Pillars of Value
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We transform intangible assets into tradable value, creating financial sanctuaries 
            that defend humanity while unlocking unprecedented opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative">
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <ImageWithFallback
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-lg bg-gradient-to-br ${pillar.color}`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="bg-slate-800 rounded-b-xl p-6 border border-slate-700 border-t-0">
                <h3 className="text-2xl text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
