import Link from "next/link";
import { ChevronRight, Radio } from "lucide-react";

const investigations = [
  {
    date: "MAR 14, 2026",
    title: "NB Power Burns 4M Barrels of Oil: Emissions Up 60%",
    description: "New EUB filings reveal NB Power burned nearly 4 million barrels of oil in 12 months, pushing emissions to 3M+ tonnes — a 16-year high.",
    category: "ENERGY",
    url: "/articles/nb-power-emissions"
  },
  {
    date: "MAR 14, 2026",
    title: "Fredericton Chemical Spill: Who's Responsible?",
    description: "A potentially cancer-causing chemical coated roads across Fredericton. The government's slow response raises fresh questions about regulatory capture.",
    category: "ENVIRONMENT",
    url: "/articles/fredericton-chemical-spill"
  },
  {
    date: "MAR 11, 2026",
    title: "2,199 ER Deaths: Auditor General Confirms Scale of Healthcare Failure",
    description: "Auditor General confirms 2,199 patients pronounced deceased after arriving at NB ERs between 2020-2024. 43% not seen within safe triage.",
    category: "HEALTHCARE",
    url: "/articles/healthcare-er-deaths"
  },
  {
    date: "FEB 25, 2026",
    title: "Campbellton at 41%: The 2026 NB Poverty Report Card",
    description: "Latest HDC data reveals 4 out of 10 children in Campbellton living in poverty. Indigenous reserves at 51.2%.",
    category: "SOCIAL",
    url: "/articles/poverty-campbellton"
  },
  {
    date: "MAR 2026",
    title: "Tent Cities and 440 Youth Without Shelter",
    description: "1,500+ chronically homeless across Moncton, Saint John, and Fredericton. 440 youth without shelter. 100+ unhoused deaths in 2025.",
    category: "HOUSING",
    url: "/articles/housing-crisis-2026"
  }
];

export function InvestigationsFeed() {
  return (
    <div className="space-y-4">
      {investigations.map((item, i) => (
        <Link key={i} href={item.url} className="block group">
          <div className="bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl p-6 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-bold text-white uppercase tracking-wider">{item.date}</span>
              <span className="text-sm bg-red-800 text-white px-2 py-0.5 rounded font-bold">{item.category}</span>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-crisis-text transition-colors mb-2">{item.title}</h2>
            <p className="text-white text-sm leading-relaxed">{item.description}</p>
            <div className="mt-3 flex items-center gap-1 text-crisis-text text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
              Read Full Article <ChevronRight size={14} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
