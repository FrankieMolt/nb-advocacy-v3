import Link from "next/link";
import { ChevronRight, Radio } from "lucide-react";

const investigations = [
  {
    date: "MAR 14, 2026",
    title: "NB Power Burns 4M Barrels of Oil: Emissions Up 60%",
    description: "New EUB filings reveal NB Power burned nearly 4 million barrels of oil in 12 months, pushing emissions to 3M+ tonnes — a 16-year high. Coleson Cove alone consumed $254M in heavy fuel oil while the utility pitches a 'net-zero' premium rate.",
    category: "ENERGY",
  },
  {
    date: "MAR 14, 2026",
    title: "Fredericton Chemical Spill: Who's Responsible?",
    description: "A potentially cancer-causing chemical coated roads across Fredericton. The government's slow response and failure to immediately notify the Environment Department raises fresh questions about regulatory capture.",
    category: "ENVIRONMENT",
  },
  {
    date: "MAR 14, 2026",
    title: "NB Liquor Markups Strangle Local Distillers",
    description: "While NB pulled U.S. alcohol from shelves during the tariff war, local distillers say steep NB Liquor markups are preventing them from scaling up to meet demand — a provincial monopoly hurting its own economy.",
    category: "ECONOMY",
  },
  {
    date: "MAR 13, 2026",
    title: "The $45M 'Industrial Blackmail' Grant",
    description: "Leaked internal memos reveal the Holt government bypassed utility regulators to subsidize Irving Paper's electricity bills while education budgets were slashed.",
    category: "ECONOMY",
  },
  {
    date: "MAR 11, 2026",
    title: "Stillborn Lawsuit Settled: Chalmers ER Negligence",
    description: "Aimee Dunn settled her negligence lawsuit against Horizon Health after losing her 35-week pregnancy at Chalmers ER in 2022. Her lawyer cited 'human errors' and 'summation of failures' by four doctors — the same ER where Darrell Mesheau died waiting.",
    category: "HEALTHCARE",
  },
  {
    date: "FEB 25, 2026",
    title: "2026 Poverty Report Card: Campbellton at 41%",
    description: "The latest HDC data reveals that 4 out of 10 children in Campbellton are living in poverty, while billionaire property tax bills actually decreased.",
    category: "SOCIAL",
  }
];

export function InvestigationsFeed() {
  return (
    <section className="py-24 bg-black border-b border-neutral-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-4 bg-red-900/20 w-fit px-3 py-1 rounded-full border border-red-900/30">
              <Radio className="text-crisis-red animate-pulse" size={14} />
              <span className="text-crisis-red font-black uppercase tracking-[0.2em] text-[10px]">Intelligence Briefing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-serif text-white mb-2 uppercase tracking-tighter italic">Latest Files</h2>
            <p className="text-neutral-500 font-medium max-w-md">Uncovering the patterns of systemic capture from our decentralized whistleblower network.</p>
          </div>
          <Link href="/sources" className="group flex items-center gap-2 text-crisis-red text-xs font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
            View Intelligence Archive <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid gap-12">
          {investigations.map((item, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 flex flex-col items-center md:items-start min-w-[120px]">
                  <div className="text-crisis-red font-black text-sm mb-1 font-mono tracking-tighter">{item.date}</div>
                  <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest px-2 py-1 bg-neutral-900 border border-neutral-800 rounded group-hover:border-crisis-red/50 transition-colors">{item.category}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white group-hover:text-crisis-red transition-colors mb-3 leading-tight tracking-tight uppercase">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light italic">&quot;{item.description}&quot;</p>
                </div>
              </div>
              {index < investigations.length - 1 && <div className="absolute -bottom-6 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
