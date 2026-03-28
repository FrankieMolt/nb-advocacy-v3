import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { AlertTriangle, ExternalLink, Users, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NB Power 50% Hike: Record Fossil Fuels, Record Debt",
  description: "NB Power burned 4M barrels of oil — most in 16 years — while proposing 50% rate hikes. $5.9B debt. 27% capacity. The death spiral explained.",
  keywords: "NB Power rate increase 2026, NB Power debt, Coleson Cove fossil fuel, energy poverty New Brunswick, NB Power 50% rate hike, EUB hearing, New Brunswick electricity rates, NB Power mismanagement, Irving Paper electricity discount, NB Power net zero greenwashing",
  alternates: { canonical: "https://nbreform.ca/articles/nb-power-50-percent-hike-explained/" },
  openGraph: {
    title: "NB Power 50% Hike: Record Fossil Fuels, Record Debt | Reform NB",
    description: "NB Power burned 4M barrels of heavy fuel oil — most in 16 years — while asking ratepayers to fund a 'net-zero' transition. Your bills are going up.",
    images: [{ url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200", width: 1200, height: 675, alt: "Power lines against dark sky representing NB Power crisis" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="The NB Power Trap: Record Fossil Fuels, Record Debt, Record Rate Hikes"
      date="March 16, 2026"
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      imageAlt="Power lines against stormy sky representing NB Power crisis"
      imageCredit="Unsplash"
      sources={[
        { title: "NB Energy & Utilities Board — EL-003-2025 Rate Hearing", url: "https://nbeub.ca" },
        { title: "CBC: NB Power emissions surge to 16-year high", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" },
        { title: "NB Power Annual Report 2024-2025", url: "https://www.nbpower.com/en/about-us/financial-information/" },
        { title: "CBC: Energy poverty in New Brunswick", url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-energy-poverty-2025-9.7118008" },
        { title: "Reform NB: NB Power Rate Hearing LIVE Coverage", url: "/articles/nb-power-rate-hearing-2026/" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">NB Power 50% Hike: Record Fossil Fuels, Record Debt</h1>

      {/* Live Hearing Alert */}
      <div className="bg-crisis-red/10 border border-crisis-red rounded-xl p-6 mb-8 flex items-start gap-4">
        <AlertTriangle className="text-white shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">HEARINGS HAPPENING NOW — MARCH 16-20</h3>
          <p className="text-white text-sm">
            The EUB is holding live hearings on NB Power's rate application <strong className="text-white">right now</strong>.{" "}
            <Link href="/articles/nb-power-rate-hearing-2026/" className="text-white underline hover:text-white">
              Watch the live streams →
            </Link>
          </p>
        </div>
      </div>

      <p className="text-xl text-white leading-relaxed mb-8">
        New Brunswick's electricity utility is in a death spiral — and ratepayers are being asked to pay for it. <strong className="text-white">NB Power</strong> carries <strong className="text-white">$5.9 billion in debt</strong>, burns more fossil fuel than it has in 16 years, and now wants to raise your rates <strong className="text-white">again</strong>. This is the story of how a public utility became a vehicle for wealth extraction.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Numbers That Define the Crisis</h2>
      <p>
        Let's start with the scale of NB Power's failure. These aren't opinion — they're from the utility's own filings and EUB proceedings:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">$5.9 billion</strong> in total debt — one of the highest per-capita utility debts in Canada</li>
        <li><strong className="text-white">$9 million per day</strong> spent buying replacement power when NB Power's own generation fails</li>
        <li><strong className="text-white">27% capacity utilization</strong> — the utility runs at barely a quarter of its theoretical capacity</li>
        <li><strong className="text-white">3.8 million barrels</strong> of heavy fuel oil burned at Coleson Cove in 12 months</li>
        <li><strong className="text-white">3 million+ tonnes</strong> of CO₂ — a 16-year high for emissions</li>
        <li><strong className="text-white">50% cumulative rate increase</strong> over the past 6 years</li>
        <li><strong className="text-white">4.75%</strong> additional hike proposed for 2026</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">Coleson Cove: The Fossil Fuel Machine</h2>
      <p>
        <strong className="text-white">Coleson Cove Generating Station</strong> is NB Power's dirtiest secret. Located near Saint John, it burns heavy fuel oil — one of the most polluting energy sources on earth. In the past year, it consumed more oil than any year since 2009.
      </p>
      <p>
        This isn't a temporary spike. NB Power's own data shows Coleson Cove has become a <strong className="text-white">baseline generation source</strong> rather than a backup. When the Mactaquac dam fails (which it does frequently due to concrete disease), when the Point Lepreau nuclear plant goes offline for maintenance — Coleson Cove fires up. And it stays on.
      </p>
      <p>
        The result? New Brunswick's electricity is now dirtier than it has been in over a decade, while the utility tells ratepayers it's committed to <strong className="text-white">"net-zero by 2035."</strong>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The "Net-Zero Rate Premium" — Greenwashing 101</h2>
      <p>
        NB Power's latest proposal includes a <strong className="text-white">"net-zero rate premium"</strong> — a voluntary higher rate for customers who want "clean energy." Critics immediately called this what it is: greenwashing.
      </p>
      <p>
        Consider the math. The same utility that burns 3.8 million barrels of heavy fuel oil per year is asking you to pay <em>extra</em> to feel good about your electricity. There's no separate clean grid. There's no new renewable capacity tied to the premium. It's a surcharge that funds NB Power's general operations — including the debt from Coleson Cove.
      </p>
      <p>
        As one intervenor noted during the EUB hearing: <em>"You can't sell clean energy from a dirty grid."</em>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Who Actually Benefits?</h2>
      <p>
        While residential ratepayers face relentless increases, large industrial customers have a very different experience. NB Power gave <strong className="text-white">$45 million in preferential power rates</strong> to Irving Paper alone. Large industrial customers negotiate confidential rate agreements that effectively subsidize their operations at the expense of residential users.
      </p>
      <p>
        The pattern is consistent across New Brunswick's captured economy: costs are socialized, profits are privatized. NB Power's debt is a public liability. Its rate increases hit the poorest hardest — families spending up to <strong className="text-white">15% of their income on electricity</strong>, well above the 6% threshold considered "energy poverty."
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Mactaquac Disaster</h2>
      <p>
        The Mactaquac dam — NB Power's largest generating asset — has been suffering from <strong className="text-white">alkali-aggregate reaction (concrete disease)</strong> for decades. The refurbishment was initially estimated at $2.9 billion. That ballooned to over $4.5 billion. The EUB's scrutiny of these costs was effectively overridden by cabinet order.
      </p>
      <p>
        Every dollar of cost overrun flows directly to ratepayers. Every delay in the refurbishment means more fossil fuel burning at Coleson Cove to fill the gap.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The HST Hammer</h2>
      <p>
        New Brunswick charges <strong className="text-white">15% HST on electricity</strong> — the highest sales tax rate in Canada. Every rate increase is compounded by this tax. A family paying $300/month in electricity pays $45/month in HST alone. Over a year, that's $540 in tax on a basic necessity.
      </p>
      <p>
        No other province applies its full sales tax rate to residential electricity. Quebec charges 5%. Ontario charges the 8% provincial portion but rebates it for low-income households. New Brunswick offers no relief.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What You Can Do</h2>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Watch the EUB hearings</strong> — live streams available on our <Link href="/articles/nb-power-rate-hearing-2026/" className="text-white underline">rate hearing page</Link></li>
        <li><strong className="text-white">Submit comments to the EUB</strong> through <a href="https://nbeub.ca" target="_blank" rel="noopener noreferrer" className="text-white underline">nbeub.ca</a></li>
        <li><strong className="text-white">Contact your MLA</strong> — demand they attend the hearings and advocate for ratepayers</li>
        <li><strong className="text-white">Share this information</strong> — the more New Brunswickers understand the crisis, the harder it is to rubber-stamp rate hikes</li>
        <li><strong className="text-white">Join the conversation</strong> — the <a href="https://www.facebook.com/groups/2100356297072209" target="_blank" rel="noopener noreferrer" className="text-white underline">NB Power Rants</a> Facebook group has 20,000+ members sharing their experiences</li>
      </ul>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-gold p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          "NB Power's $5.9 billion debt was created by governments that treated a public utility as a political tool. The ratepayers who had no say in those decisions are now being asked to pay for them — with interest."
        </p>
        <p className="text-sm text-white mt-4">— Reform NB</p>
      </div>
    </ArticleLayout>
  );
}
