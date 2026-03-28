import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Issues Archive | Reform NB",
  description: "Explore all critical issues facing New Brunswick: healthcare collapse, housing crisis, education cuts, child poverty, mental health, and seniors' care.",
};

const issueGroups = [
  {
    title: "Social Issues",
    issues: [
      { title: "Healthcare Collapse", href: "/healthcare", description: "Fatal failure of New Brunswick healthcare system" },
      { title: "Housing Crisis", href: "/housing", description: "Over 1,500 chronically homeless across major cities" },
      { title: "Education Cuts", href: "/education", description: "Attacks on UNB & STU, slashed student aid" },
      { title: "Child Poverty", href: "/child-poverty", description: "21.9% rate — 41.2% in Campbellton" },
      { title: "Mental Health", href: "/mental-health", description: "Systemic neglect of mental health services" },
      { title: "Seniors' Care", href: "/seniors", description: "Abandonment of elderly in care facilities" },
    ],
  },
  {
    title: "Power & Corruption",
    issues: [
      { title: "Economy", href: "/economy", description: "Corporate tax evasion while families suffer" },
      { title: "Oligarchy", href: "/oligarchy", description: "Billionaire dynasties control NB's future" },
      { title: "Corruption", href: "/corruption", description: "Government as corporate HR department" },
      { title: "Intimidation", href: "/intimidation", description: "Suppression of dissent and whistleblowers" },
    ],
  },
  {
    title: "Environment",
    issues: [
      { title: "Environment", href: "/environment", description: "Industrial destruction of natural resources" },
      { title: "Climate & Energy", href: "/climate-energy", description: "NB Power rate hikes and emissions scandal" },
      { title: "Fisheries", href: "/fisheries", description: "96% collapse of Miramichi salmon" },
      { title: "Indigenous Rights", href: "/indigenous-rights", description: "Ongoing violation of treaty obligations" },
    ],
  },
  {
    title: "Current Crises",
    issues: [
      { title: "Budget 2026-27", href: "/budget-2026", description: "$1.39B deficit — highest in provincial history" },
      { title: "Tax Fairness", href: "/tax-fairness", description: "Billionaire tax breaks while families struggle" },
      { title: "Rural Healthcare", href: "/rural-healthcare", description: "ER closures across rural New Brunswick" },
      { title: "Infrastructure", href: "/infrastructure", description: "Crumbling roads, bridges, and utilities" },
    ],
  },
];

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-20 selection:bg-crisis-red selection:text-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-white uppercase mb-6">
            Issues
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive documentation of the systemic failures affecting every aspect of New Brunswick society.
            From healthcare to environment, from corporate capture to government corruption — the evidence is here.
          </p>
        </div>

        {/* Issue Groups */}
        <div className="space-y-16">
          {issueGroups.map((group) => (
            <section key={group.title} className="border-t border-neutral-800 pt-12">
              <h2 className="text-3xl font-black font-serif text-crisis-text uppercase mb-8 tracking-tight">
                {group.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {group.issues.map((issue) => (
                  <Link
                    key={issue.href}
                    href={issue.href}
                    className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-crisis-red hover:bg-crisis-red/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl font-black uppercase tracking-wider text-white mb-3 group-hover:text-crisis-text transition-colors">
                        {issue.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {issue.description}
                      </p>
                      <div className="flex items-center gap-2 text-crisis-text text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        Read Intelligence
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-crisis-red/10 border-2 border-crisis-red rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black font-serif text-white uppercase mb-6">
            Demand Accountability
          </h3>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            These aren't isolated incidents — they're part of a systemic pattern of corporate capture and government failure.
            Join the movement to demand federal intervention and restore democracy.
          </p>
          <Link
            href="/take-action"
            className="inline-block bg-crisis-red hover:bg-red-700 text-white font-black py-5 px-16 rounded-xl text-lg transition-all shadow-lg hover:scale-105 uppercase tracking-[0.2em]"
          >
            Take Action
          </Link>
        </div>
      </div>
    </div>
  );
}
