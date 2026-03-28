import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resources & Sources | Reform NB",
  description: "Access our investigative archive, sources, data, and frequently asked questions about New Brunswick governance failure.",
};

const resources = [
  {
    title: "Investigations Archive",
    description: "Comprehensive database of articles and reports exposing corporate capture and government corruption.",
    href: "/articles",
    icon: "📁",
  },
  {
    title: "Sources & Data",
    description: "Verified sources, government documents, leaked reports, and evidence files.",
    href: "/sources",
    icon: "📊",
  },
  {
    title: "Frequently Asked Questions",
    description: "Common questions about Reform NB's mission, methods, and findings.",
    href: "/faq",
    icon: "❓",
  },
  {
    title: "About Reform NB",
    description: "Learn about our decentralized network of journalists, former civil servants, and citizens.",
    href: "/about",
    icon: "📖",
  },
  {
    title: "Contact Us",
    description: "Secure channels for whistleblower tips, press inquiries, and general contact.",
    href: "/contact",
    icon: "✉️",
  },
];

const featuredArticles = [
  { title: "Healthcare ER Deaths", href: "/articles/healthcare-er-deaths", date: "MAR 11" },
  { title: "NB Power Emissions Scandal", href: "/articles/nb-power-emissions", date: "MAR 14" },
  { title: "$45M 'Industrial Blackmail' Grant", href: "/budget-2026", date: "MAR 13" },
  { title: "Irving Monopoly Investigation", href: "/articles/irving-monopoly-forestry-media", date: "ONGOING" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-20 selection:bg-crisis-red selection:text-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-white uppercase mb-6">
            Resources
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Access our complete investigative archive, verified sources, and evidence files.
            Everything you need to understand the systemic failure in New Brunswick.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-crisis-red hover:bg-crisis-red/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-wider text-white mb-3 group-hover:text-crisis-text transition-colors">
                  {resource.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center gap-2 text-crisis-text text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Access Resource
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="bg-neutral-900 border-t border-neutral-800 pt-12 pb-20">
          <h2 className="text-3xl font-black font-serif text-white uppercase mb-8 tracking-tight text-center">
            Recent Intelligence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-black/50 border border-neutral-800 rounded-lg p-6 hover:border-crisis-red hover:bg-crisis-red/5 transition-all"
              >
                <div className="flex items-center gap-2 text-crisis-text text-xs font-black uppercase tracking-widest mb-2">
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-white mb-2 group-hover:text-crisis-text transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-neutral-400 text-xs group-hover:text-neutral-300 transition-colors">
                  Read Full Report
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white font-black py-3 px-8 rounded-lg text-sm uppercase tracking-widest transition-all"
            >
              View All Articles
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-crisis-red/10 border-2 border-crisis-red rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black font-serif text-white uppercase mb-6">
            Whistleblower Protection
          </h3>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Have evidence of government corruption, corporate fraud, or environmental crimes?
            We protect our sources with encrypted, anonymous channels.
          </p>
          <div className="inline-block bg-black p-6 rounded-xl border border-neutral-800 font-mono text-xl text-white shadow-inner select-all relative">
            <div className="absolute -top-3 left-4 bg-neutral-900 px-2 text-[10px] font-black uppercase tracking-widest text-crisis-text border border-crisis-red rounded-full">
              Encrypted Node
            </div>
            reformnb-tips@proton.me
          </div>
          <p className="text-sm text-neutral-500 mt-6 italic font-black uppercase tracking-widest">
            VPN Recommended · End-to-End Encryption Required
          </p>
        </div>
      </div>
    </div>
  );
}
