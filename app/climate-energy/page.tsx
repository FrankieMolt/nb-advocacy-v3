import { Metadata } from "next";
import Image from "next/image";
import { Zap, Wind, Droplets, Factory, AlertTriangle, DollarSign, TrendingUp } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Climate & Energy: Record Fossil Fuels, Fake Net-Zero",
  description: "NB Power burns 4M barrels of oil. 3M+ tonnes CO2. $5.9B debt. Claims net-zero while setting 16-year fossil fuel records.",
  keywords: "NB Power, Coleson Cove, heavy fuel oil, emissions, carbon tax, net-zero, climate change NB, renewable energy, tidal power, Bay of Fundy",
  alternates: { canonical: "https://reformnb.ca/climate-energy/" },
  openGraph: {
    title: "NB Power's Climate Betrayal: Record Emissions, Fake Net-Zero | Reform NB",
    description: "While claiming net-zero by 2035, NB Power burned 4M barrels of heavy fuel oil in 12 months — most fossil fuel generation in 16 years.",
    images: [{ url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200", width: 1200, height: 675, alt: "Power lines representing energy infrastructure" }],
  },
};

const energyStats = [
  { value: "3.8M", label: "Barrels of Fuel Oil", sublabel: "Burned at Coleson Cove in past 12 months — 60% increase YoY" },
  { value: "3M+", label: "Tonnes CO₂/Year", sublabel: "GHG emissions at 16-year high despite net-zero claims" },
  { value: "$5.9B", label: "NB Power Debt", sublabel: "Operating at 27% capacity, buying power at $9M/day" },
  { value: "$69M", label: "Carbon Tax by 2029", sublabel: "Rising from $49M today — passed to ratepayers" },
];

const keyFacts = [
  { icon: "document" as const, title: "Fracking Moratorium", value: "Still in place", description: "After Elsipogtog protests, NB imposes moratorium on hydraulic fracturing. Still in place.", source: "NB Government (2014)" },
  { icon: "money" as const, title: "NB Power Financial Crisis Deepens", value: "$5B+ debt", description: "Utility debt exceeds $5B. Rate increases proposed. Point Lepreau nuclear plant plagued by cost overruns.", source: "NB Power (2018)" },
  { icon: "document" as const, title: "Net-Zero 2035 Promise", description: "NB Power announces target to be net-zero by 2035. Critics skeptical given heavy reliance on fossil fuels.", source: "NB Power (2023)" },
  { icon: "money" as const, title: "Rate Increase Request", value: "50% over 5 years", description: "NB Power proposes 50% rate increase over 5 years. Customers face energy poverty.", source: "EUB (2025)" },
  { icon: "warning" as const, title: "Record Fossil Fuel Burning Exposed", value: "3.8M barrels", description: "CBC's Robert Jones reveals NB Power burned ~3.8M barrels of heavy fuel oil — most in 16 years. GHG emissions exceed 3M tonnes.", source: "CBC (Mar 2026)" },
  { icon: "warning" as const, title: "'Net-Zero Rate' Proposed", description: "NB Power proposes premium rate for customers wanting clean energy. Critics call it greenwashing while burning record fossil fuels.", source: "EUB (Mar 2026)" },
];

export default function ClimateEnergyPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Zap}
        title="Climate & Energy"
        quote="They promise net-zero by 2035 while burning more fossil fuels than they have in 16 years. This isn't a transition — it's a fraud."
      />

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {energyStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* Coleson Cove */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Coleson Cove: <span className="text-white">The Furnace</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              The <strong className="text-white">Coleson Cove Generating Station</strong> is NB Power's largest thermal plant — a 1,050 MW facility that burns <strong className="text-white">heavy fuel oil</strong>, one of the dirtiest fossil fuels on the planet. Built in the 1970s, it was supposed to be a backup facility. Instead, it's become the backbone of NB's electricity system.
            </p>
            <p>
              In the 12 months leading to March 2026, NB Power burned nearly <strong className="text-white">4 million barrels of heavy fuel oil</strong> at Coleson Cove — a <strong className="text-white">60% increase</strong> over the previous year. This represents the most fossil fuel generation in 16 years, at a time when NB Power is publicly committed to being <strong className="text-white">net-zero by 2035</strong>.
            </p>
            <p>
              The result: over <strong className="text-white">3 million tonnes of CO₂</strong> — more than NB's entire transportation sector. While other provinces shut down coal plants and build wind farms, NB is burning bunker fuel like it's 1975.
            </p>
          </div>

          <QuoteBlock
            quote="We're supposed to believe they'll go from burning 4 million barrels of oil to zero in 9 years. The math doesn't work. The plan doesn't exist."
            author="Environmental advocate, CBC interview"
          />
        </div>
      </section>

      {/* NB Power Debt */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">$5.9 Billion</span> Debt Trap
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              NB Power carries <strong className="text-white">$5.9 billion in debt</strong> — one of the highest utility debt loads per capita in Canada. The utility operates at only <strong className="text-white">27% capacity</strong> while buying additional power on the open market at <strong className="text-white">$9 million per day</strong>.
            </p>
            <p>
              Every dollar of debt must eventually be paid by ratepayers. NB Power has requested rate increases of <strong className="text-white">50% over 5 years</strong> — which would push many households into energy poverty. NB already has the <strong className="text-white">highest HST in Canada at 15%</strong>, and among the lowest median incomes.
            </p>
            <p>
              Meanwhile, the province has added a <strong className="text-white">carbon adjustment</strong> of $49 million on NB Power, rising to $69 million by 2028-29. This cost is passed directly to customers — while the utility continues burning the fossil fuels that create the carbon tax in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* Renewable Lag */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Renewable <span className="text-yellow-400">Lag</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl text-center">
              <Wind className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold text-white mb-2">Wind</h3>
              <p className="text-white text-sm">NB has excellent wind resources but lags behind NS and PEI in wind farm development. Fewer than 300 MW installed.</p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl text-center">
              <Droplets className="text-cyan-400 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold text-white mb-2">Tidal</h3>
              <p className="text-white text-sm">Bay of Fundy has highest tides in world — 160 billion tonnes of water twice daily. Potential: 2,500 MW. Actual: ~10 MW test projects.</p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl text-center">
              <Factory className="text-yellow-400 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold text-white mb-2">Solar</h3>
              <p className="text-white text-sm">NB has less solar capacity than most provinces. Net metering exists but incentive programs are minimal compared to NS.</p>
            </div>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              New Brunswick has some of the best renewable energy resources in Canada — particularly the <strong className="text-white">Bay of Fundy's tidal power</strong>, which could theoretically generate 2,500 MW, enough to power the entire province. Yet after decades of study and pilot projects, tidal power remains a rounding error in NB's energy mix.
            </p>
            <p>
              The province has been slow to adopt wind and solar compared to its Atlantic neighbours. Nova Scotia has over 600 MW of wind; NB has fewer than 300 MW. PEI generates over 30% of its electricity from wind; NB generates less than 5%.
            </p>
            <p>
              Critics argue NB Power's monopoly structure discourages renewable development — the utility controls all generation and has little incentive to allow independent producers or invest in decentralization.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Energy: Key Facts
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Energy Timeline: Key Facts" />
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">NB Power Crisis Explained</h2>
          <YouTubeEmbed videoId="FLGCGc7sAUw" title="NB Power Financial Crisis" />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="CBC: NB Power Emissions Surge (Mar 2026)" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="Record fossil fuel burning at Coleson Cove — 3.8M barrels heavy fuel oil" />
            <SourceCard type="article" title="CBC: NB Power Spending $88.4M on Outside Experts for Lepreau" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-lepreau-problem-spending-9.7132390" description="Point Lepreau offline 616 days in 4 years — utility turns to Ontario Power Generation for help" date="MAR 2026" />
            <SourceCard type="article" title="CBC: NB Power Not Giving Up on Smart Meters" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-smart-meter-refusal-9.7130985" description="17,000 households refused smart meters — utility plans campaign to convince holdouts" date="MAR 2026" />
            <SourceCard type="article" title="NB Power Official Site" url="https://www.nbpower.com/" description="Rate applications, generation data, financial reports" />
            <SourceCard type="article" title="NB Energy & Utilities Board" url="https://www2.gnb.ca/content/gnb/en/departments/erd/energy.html" description="Regulatory oversight, rate hearings" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="Net-Zero Is a Lie"
        description="They're burning more fossil fuels than ever while promising green energy. Hold them accountable."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
