import { Metadata } from "next";
import Link from "next/link";
import { DollarSign, TrendingDown, Ship, Landmark, Newspaper, TreePine, Fuel, ShoppingBag, Building } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { LogoBar } from "@/components/LogoBar";
import { CaseStudy } from "@/components/CaseStudy";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { VideoGrid } from "@/components/VideoGrid";
import { SourceCard } from "@/components/SourceCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "The Oligarchy: Irvings & McCains | Reform NB",
  description:
    "How billionaire families control New Brunswick's agriculture, forestry, media, oil, transportation, and government through systematic regulatory capture, vertical integration, and offshore tax shelters.",
};

const oligarchyData = [
  { value: "$30B+", label: "Combined Private Wealth", sublabel: "Irving, McCain, Cooke families — extracted from NB's natural resources", color: "red" as const },
  { value: "5x", label: "Less Property Tax Than US", sublabel: "Irving Oil refinery pays 5× less than comparable US facilities" },
  { value: "$700K", label: "Retroactive Tax Refund", sublabel: "Government refunded Irving & Twin Rivers for 'too high' mill assessments" },
  { value: "2.7M ha", label: "Crown Forest Under Irving Control", sublabel: "Public land at below-market rates — sole beneficiary of softwood monopoly" },
];

const monopolySectors = [
  { icon: <TreePine size={24} />, name: "Forestry", description: "2.7M hectares of Crown land, sawmills, paper mills, trucking fleet, tree nurseries. Complete cradle-to-grave control." },
  { icon: <Fuel size={24} />, name: "Oil & Energy", description: "Irving Oil refinery (60% of Canada's gasoline exports), Canaport LNG terminal, NB Power dependence." },
  { icon: <Newspaper size={24} />, name: "Media", description: "Owned all 3 English dailies until 2022. 1970 Senate called it 'flagrant abuse of public interest'." },
  { icon: <Ship size={24} />, name: "Shipping & Transport", description: "Irving Shipbuilding ($25B federal contracts), Irving Transportation, fleet of 900+ trucks." },
  { icon: <ShoppingBag size={24} />, name: "Retail & Construction", description: "Kent Building Supplies, Cavendish Farms, Irving Tissue — consumer market dominance." },
  { icon: <Building size={24} />, name: "Agriculture", description: "McCain Foods dominates potato processing. Farmland taxes forgiven after 15 years." },
];

const oligarchyTimeline = [
  { date: "1920s", title: "K.C. Irving's Empire Begins", description: "K.C. Irving starts acquiring forestry operations, expanding into oil, transportation, and media.", color: "neutral" as const },
  { date: "1970", title: "Senate Media Monopoly Condemnation", description: "Senate Special Committee calls Irving's newspaper control 'about as flagrant an example of abusing the public interest as you're likely to find in Canada'.", color: "red" as const },
  { date: "2014", title: "Crown Lands Act Changes", description: "Irving gets 21% increase in allowable softwood cut while wildlife habitat protections are slashed.", color: "red" as const },
  { date: "2017", title: "Paradise Papers Expose Bermuda Trusts", description: "ICIJ leak reveals Irving family uses Bermuda shells (F.M.A. Ltd.) to manage tax liabilities offshore.", color: "red" as const },
  { date: "JUL 2019", title: "Cartoonist Michael de Adder Fired", description: "Brunswick News fires de Adder and rejects his Trump cartoon the day it goes viral. Message: don't offend allies.", color: "red" as const },
  { date: "2022", title: "Brunswick News Sold to PostMedia", description: "Irving sells media empire after 90+ years. Generations of NBers grew up reading company-controlled news.", color: "gold" as const },
  { date: "2023", title: "$700K Retroactive Tax Refund", description: "Government hands J.D. Irving and Twin Rivers Paper $700K in retroactive property tax refunds for forestry mills.", color: "red" as const },
  { date: "2025", title: "Irving Family Wealth: $8.42B", description: "Canadian Business ranking: Irving family net worth grows to $8.42 billion during $25B federal shipbuilding contracts.", color: "gold" as const },
  { date: "EARLY 2026", title: "$45M Irving Paper Grant", description: "Government hands Irving Paper $45M 'tariff relief' while residents face 19.4% electricity rate hike.", color: "red" as const },
  { date: "MAR 2026", title: "Fredericton Chemical Spill", description: "Potentially cancer-causing chemical coats roads. Government slow to notify Environment Department. Regulatory capture questioned.", color: "red" as const },
];

export default function IrvingPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={DollarSign}
        title="The Corporate Oligarchy"
        quote="New Brunswick does not have a government. We have a corporate HR department for a handful of billionaire dynasties. The entire supply chain of the province is an enclosed enclosure."
      />

      <LogoBar />
      
      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80" 
          alt="Oil refinery at night representing Irving's industrial monopoly in New Brunswick"
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          U.S. refineries pay 5× more in property taxes than Irving Oil — the lowest-taxed refinery in North America
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {oligarchyData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: The Monopoly Map */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Monopoly Map: Total Control
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The defining characteristic of the New Brunswick oligarchy is{" "}
            <strong className="text-white">Vertical Integration</strong>. A single conglomerate, J.D.
            Irving, Ltd., owns the land, the tree nurseries, the mills, the
            logistics fleet, and the retail stores. This &quot;cradle-to-grave&quot;
            control allows them to manipulate internal transfer prices and
            minimize tax liability while ensuring no independent business can
            survive.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The Irving family alone controls <strong className="text-white">seven of the top twelve</strong> largest 
            companies in New Brunswick. Their operations span forestry, oil refining, 
            shipbuilding, transportation, construction, agriculture, retail, and media. 
            They are simultaneously the largest employer, largest landowner, largest 
            taxpayer (though arguably the most undertaxed), and — until 2022 — the 
            largest media owner in the province.
          </p>
        </section>

        {/* Monopoly Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monopolySectors.map((sector, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-crisis-red/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-crisis-red">{sector.icon}</span>
                <h4 className="text-white font-black uppercase tracking-tight text-sm">{sector.name}</h4>
              </div>
              <p className="text-neutral-500 text-xs leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>

        {/* Property Tax Scandal */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Landmark className="text-crisis-red" size={28} aria-hidden="true" />
            The Property Tax Scam
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            For <strong className="text-white">42 years</strong>, Irving Oil&apos;s Canaport crude-oil
            tank farm was effectively property tax exempt. Even today, the
            refinery municipal tax bill actually <strong className="text-white">fell by $25,165</strong>{" "}
            in 2024 while residents face 50% hikes for new homes in 2026.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            A University of Michigan study comparing property taxes across North American 
            refineries found that Irving Oil pays <strong className="text-white">5 times less</strong> than comparable 
            facilities in the United States. The Irving Oil refinery in Saint John, which 
            produces an estimated <strong className="text-white">$10+ billion in annual output</strong>, pays roughly 
            the same in property taxes as the Point Lepreau nuclear station — which 
            produces a fraction of the energy at a fraction of the revenue.
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-crisis-red/30 mb-6">
            <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
              <TrendingDown size={14} aria-hidden="true" /> Retroactive Welfare
            </h4>
            <p className="text-sm text-neutral-300">
              In 2023, the government directly handed J.D. Irving and Twin
              Rivers Paper a <strong className="text-white">$700,000 retroactive property tax
              refund</strong> for their forestry mills simply because they
              challenged their assessments as &quot;too high.&quot;
            </p>
          </div>
        </section>

        {/* Bermuda */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Bermuda Connection
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The <strong className="text-white">&quot;Paradise Papers&quot;</strong> leak exposed that
            the Irving family utilized complex corporate structures in Bermuda to
            manage tax liabilities. By funneling insurance premiums to offshore
            shells like <strong className="text-white">F.M.A. Ltd.</strong>, they amassed millions in
            untaxed income while the province&apos;s social safety net crumbled.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In 1970, the Senate Special Committee on Mass Media called Irving&apos;s control of NB newspapers &ldquo;<strong className="text-white">about as flagrant an example of abusing the public interest as you&apos;re likely to find in Canada</strong>.&rdquo; Until 2022, the Irving family owned all three major English-language dailies — the <em>Telegraph-Journal</em>, <em>Daily Gleaner</em>, and <em>Times &amp; Transcript</em>.{" "}
            <a href="https://nbmediacoop.org/2023/06/09/wire-crossed-how-the-irving-empire-jeopardized-free-press-in-new-brunswick/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op]</a>
          </p>
        </section>

        {/* Video: Family That Owns NB */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 The Family That Owns New Brunswick</h3>
          <YouTubeEmbed
            videoId="N9I-HY3wfVM"
            title="The Family That Owns New Brunswick — Spoke Media Documentary (140,000+ views)"
          />
          <p className="text-center text-sm text-neutral-500 mt-4 italic">
            &ldquo;The Family That Owns New Brunswick&rdquo; by Ryan Forneri (Spoke Media) — 140,000+ views. 28% of viewership from New Brunswick.
          </p>
        </div>

        {/* Deneault Quote */}
        <QuoteBlock
          quote="The Irvings represent an almost feudalistic counter-model. Instead of specializing in one branch of industry, they do almost everything within a limited territory. Their fleet of trucks is powered by their fuel, processed at their refinery, supplied by crude from operations they control. Public opinion has long been ideologically disarmed by the Irving newspapers, the only ones available in English."
          author="Alain Deneault"
          role="Le Monde diplomatique / NB Media Co-op (2024)"
          color="red"
        />

        {/* Irving Trump Connection */}
        <div className="my-8 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest mb-2">🤐 Silencing Dissent: The Cartoonist Firing</h4>
          <p className="text-sm text-neutral-300 mb-3">
            In July 2019, Brunswick News (then owned by the Irving family) fired cartoonist <strong className="text-white">Michael de Adder</strong> and rejected his editorial cartoon depicting Donald Trump. The cartoon showed Trump standing over the bodies of drowned migrants. De Adder&apos;s contract was terminated the same day. The message was clear: <strong className="text-white">do not offend powerful allies</strong>.{" "}
            <a href="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: The Irvings Get Trumped]</a>
          </p>
        </div>

        {/* Crown Lands / Forestry */}
        <div className="my-8 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest mb-2">🌲 Crown Lands: The Forestry Monopoly</h4>
          <p className="text-sm text-neutral-300 mb-4">
            J.D. Irving holds rights to approximately <strong className="text-white">2.7 million hectares</strong> of New Brunswick&apos;s Crown forests — public land — at below-market rates. The 2014 Crown Lands Act changes gave Irving a <strong className="text-white">21% increase</strong> in allowable softwood cut while slashing wildlife habitat protections. Irving&apos;s sawmills, paper mills, and trucking fleet are the sole beneficiaries of this public subsidy. Independent forestry operators have been squeezed out.
          </p>
          <p className="text-sm text-neutral-400">
            Meanwhile, Irving receives <strong className="text-white">$700,000 retroactive property tax refunds</strong> for its mills while spraying glyphosate over 15,000 hectares of public forest annually to maximize softwood yield.{" "}
            <a href="https://nbmediacoop.org/?s=irving+crown+land" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: Crown Land]</a>
          </p>
        </div>
          
        {/* Industrial Image */}
        <div className="my-8 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80" 
            alt="Industrial smokestacks representing corporate monopoly in New Brunswick"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Vertical integration — from forests to fuel to retail — ensures no independent business can survive in the Company Province
          </div>
        </div>

        {/* Section: Environmental Enclosure */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter border-b border-neutral-800 pb-2 italic">
            Ecological Enclosure
          </h2>
          <div className="grid gap-6 my-8">
            <CaseStudy
              type="environmental"
              date="JUNE 2025"
              title="Refinery Fire & Plume"
              location="Irving Oil, Saint John"
              content="A product leak ignited at the refinery, sending a black toxic plume over residential neighborhoods. The company dismissed it as a 'routine incident'."
              status="UNINVESTIGATED"
            />
            <CaseStudy
              type="environmental"
              date="ONGOING"
              title="Glyphosate Saturation"
              location="Crown Forests"
              content="The province continues to allow the spraying of glyphosate over 15,000 hectares of public forest annually to benefit industrial softwood yield, ignoring WHO warnings."
              status="ACTIVE"
            />
            <CaseStudy
              type="environmental"
              date="MARCH 2026"
              title="Fredericton Chemical Spill"
              location="Fredericton, NB"
              content="A potentially cancer-causing chemical coated roads across Fredericton in a massive spill. The provincial government was slow to notify the Environment Department, raising questions about regulatory capture and corporate protection."
              status="UNDER INVESTIGATION"
            />
            <CaseStudy
              type="environmental"
              date="2021-2026"
              title="96% Miramichi Salmon Collapse"
              location="Miramichi River System"
              content="Wild Atlantic salmon returns have collapsed by 96% from historic levels. DFO negligence, combined with Irving's clearcutting and glyphosate spraying, has destroyed the world's greatest salmon river."
              status="ONGOING"
            />
          </div>
        </section>

        {/* Industrial Negligence */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <Ship size={120} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 relative z-10 italic">
            <Ship className="text-crisis-red" size={28} aria-hidden="true" />
            Industrial Negligence
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6 relative z-10">
            The cost of corporate profit is often paid in human lives. In late
            2024, <strong className="text-white">Irving Shipbuilding</strong> pleaded guilty to health
            and safety violations following the death of a worker. This pattern
            of negligence highlights the dangerous proximity between industrial
            production quotas and the life-safety of New Brunswickers.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6 relative z-10">
            Irving Shipbuilding received <strong className="text-white">$25 billion in federal contracts</strong> under the National Shipbuilding Procurement Strategy — the largest military procurement in Canadian history. While these contracts created jobs, critics note the Irving family&apos;s net worth grew from $4B to an estimated <strong className="text-white">$8.42 billion</strong> (2025 <em>Canadian Business</em> ranking) during the contract period, while workers faced safety violations.
          </p>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Oligarchy Timeline: A Century of Control
          </h2>
          <Timeline items={oligarchyTimeline} className="mt-8" />
        </section>

        {/* Forestry Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80" 
            alt="Clear-cut forest representing industrial forestry monopoly in NB"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Industrial monoculture tree plantations have replaced diverse Acadian forests across millions of hectares
          </div>
        </div>

        {/* Quote Block 2 */}
        <QuoteBlock
          quote="The company that pollutes our rivers, clearcuts our forests, avoids our taxes, and fires our cartoonists also owns the newspapers that tell us everything is fine."
          author="NB Citizen"
          role="Anonymous submission to Reform NB"
          color="gold"
        />

        {/* External Links */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Investigative Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: U.S. Refineries Pay 5x More Property Taxes Than Irving" url="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058" description="Investigative report on property tax inequality" />
            <SourceCard type="article" title="ICIJ: Paradise Papers — Irving Bermuda Insurance Scheme" url="https://www.icij.org/investigations/paradise-papers/" description="Offshore tax shelter investigation" />
            <SourceCard type="organization" title="Save Miramichi Salmon" url="https://savemiramichisalmon.com" description="DFO negligence campaign and Federal Court evidence" />
            <SourceCard type="organization" title="Stop Spraying NB" url="https://stopsprayingnb.ca/" description="Legacy DDT & glyphosate evidence archive" />
            <SourceCard type="article" title="NB Media Co-op: The Irvings Get Trumped" url="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" description="Cartoonist de Adder fired for Trump cartoon" date="MAR 2025" />
            <SourceCard type="article" title="NB Media Co-op: Alain Deneault on Arthur Irving" url="https://nbmediacoop.org/2024/05/19/dismal/" description="'Feudalistic counter-model' analysis" date="MAY 2024" />
          </div>
        </section>

        <div className="my-12 p-12 bg-crisis-red text-white border border-red-900 rounded-3xl text-center shadow-[0_0_50px_rgba(179,0,0,0.3)]">
          <h3 className="text-4xl font-black font-serif mb-6 uppercase tracking-tighter underline decoration-4 underline-offset-8">
            Take Back Your Province.
          </h3>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium leading-tight">
            The corporate capture of New Brunswick is a systemic threat to our
            democracy. We demand an immediate federal criminal investigation into
            the tax shelters and regulatory capture.
          </p>
          <Link
            href="/take-action"
            className="inline-block bg-white text-crisis-red font-black py-5 px-16 rounded-xl text-xl hover:bg-neutral-100 transition-all shadow-2xl hover:scale-105 uppercase tracking-widest"
            aria-label="Join the petition"
          >
            Join the Petition
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
