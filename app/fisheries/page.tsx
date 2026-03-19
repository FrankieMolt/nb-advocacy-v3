import Image from "next/image";
import { Metadata } from "next";
import { Fish, AlertTriangle, Shell, ThermometerSun, Factory, Scale, DollarSign, Gavel } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Fisheries: 96% Salmon Collapse, MSX Disease, Aquaculture Wars",
  description: "Atlantic salmon collapsed 96%. MSX oyster disease kills 95%. Cooke Aquaculture controversies. Lobster under climate threat. NB's fisheries in crisis.",
  keywords: "Atlantic salmon, Miramichi River, MSX oyster disease, Cooke Aquaculture, lobster NB, fisheries crisis, DFO, Northumberland Strait, sea lice, salmon farming",
  alternates: { canonical: "/fisheries/" },
  openGraph: {
    title: "The Collapse of NB's Fisheries: Salmon, Oysters, and Corporate Aquaculture | Reform NB",
    description: "96% salmon collapse. MSX disease decimating oysters. Cooke Aquaculture environmental controversies. Climate warming lobster waters. The fisheries crisis NB can't ignore.",
    images: [{ url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200", width: 1200, height: 675, alt: "Fishing boats representing NB fisheries" }],
  },
};

const fisheriesStats = [
  { value: "96%", label: "Salmon Collapse", sublabel: "Miramichi River salmon declined from 1,039 (2011) to ~51 in recent years" },
  { value: "95%", label: "MSX Oyster Mortality", sublabel: "Deadly parasite discovered in NB waters in 2024" },
  { value: "$1.5B", label: "Lobster Industry", sublabel: "NB's most valuable fishery — now facing climate threats" },
  { value: "$0", label: "Budget 2026 Allocation", sublabel: "No specific provincial funding for fishing industry in Budget 2026-27" },
];

const keyFacts = [
  { icon: "scale" as const, title: "Marshall Decision", value: "1999", description: "Supreme Court rules Mi'kmaq have treaty right to 'moderate livelihood' fishing. DFO struggles to implement. Violence erupts at Burnt Church.", source: "Supreme Court of Canada" },
  { icon: "users" as const, title: "Miramichi Salmon Peak", value: "1,039 salmon", description: "1,039 salmon counted at barrier. One of the last strong years for the iconic river.", source: "DFO (2011)" },
  { icon: "warning" as const, title: "Steady Decline", value: "64% decline", description: "Salmon counts plummet year after year. DFO data shows 64% decline. Habitat loss, warming waters, striped bass predation cited.", source: "DFO (2012-2020)" },
  { icon: "scale" as const, title: "Save Miramichi Salmon Federal Lawsuit", description: "SMS Inc. files FEDERAL LAWSUIT against DFO Minister. Alleges DFO prioritized striped bass over salmon, causing salmon to be on edge of extinction.", source: "Federal Court (Mar 2025)" },
  { icon: "warning" as const, title: "MSX Oyster Disease Discovered", value: "90-95% mortality", description: "Deadly parasite found near Spencer Cove. 90-95% mortality rate. CFIA declares Maritime waters disease-present area.", source: "CFIA (2024)" },
  { icon: "document" as const, title: "MSX Genome Mapped", value: "World first", description: "Research and Productivity Council in Fredericton maps MSX genome — world-first breakthrough. Hope for developing resistant oyster strains.", source: "RPC Fredericton (2025)" },
  { icon: "warning" as const, title: "Smallmouth Bass Eradication ABANDONED", value: "514 salmon killed", description: "Rotenone program abandoned after killing 514 salmon vs only 32 bass. Bass now in main Miramichi River.", source: "DFO (Sep 2023)" },
  { icon: "money" as const, title: "Salmon Pool Auctions Collapse", value: "75% price drop", description: "Miramichi salmon pool auction prices drop 75% as fishery becomes unviable. Guides and lodges close.", source: "CBC (2025)" },
];

export default function FisheriesPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Fish}
        title="Fisheries in Crisis"
        quote="The river that once teemed with salmon is nearly empty. The oysters are dying from a parasite we've never seen. And the lobsters are heading north."
      />
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80" 
          alt="Fishing boats on Atlantic waters representing NB fisheries crisis"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>


      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fisheriesStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* Salmon Collapse */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">Salmon Collapse</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              The <strong className="text-white">Miramichi River</strong> was once the greatest Atlantic salmon river in the world. Generations of anglers traveled to New Brunswick to fish its legendary pools. Today, the salmon are nearly gone.
            </p>
            <p>
              Since 2012, adult salmon returns have <strong className="text-white">declined 64%</strong> (DFO data). In 2012: ~13,630 fish returned. In 2024: under 5,000. The <strong className="text-white">2025 season saw a further 69% decline</strong>. One-winter salmon have declined 79-86% across both branches. Only about 1,500 remain.
            </p>
            <p>
              The primary cause: <strong className="text-white">DFO allowed striped bass to explode unchecked</strong>. Over 70% of southwest Miramichi smolts and over 90% of northwest smolts are now eaten by striped bass before reaching the sea. Water temperatures hit a lethal <strong className="text-white">32°C</strong> in August 2025 — the hottest spot in Canada that day.
            </p>
            <p>
              In March 2025, <strong className="text-white">Save Miramichi Salmon Inc.</strong> filed a lawsuit in Federal Court against the Minister of Fisheries, alleging DFO mismanaged striped bass "either intentionally or recklessly." The same day, DFO announced a national salmon strategy — critics called it a coincidence.
            </p>
            <p>
              The <strong className="text-white">North Shore Mi'kmaq Tribal Council</strong> has proposed the <em>Plamu First</em> plan — a $38 million Indigenous-led strategy using "Two-Eyed Seeing" (Mi'kmaq knowledge + Western science). The province supports it; Ottawa has not yet funded it.
            </p>
          </div>

          <QuoteBlock
            quote="We went from counting thousands of salmon to counting dozens. In 15 years. And nobody in government is acting like it's an emergency."
            author="Miramichi salmon guide"
          />

          {/* DFO Lawsuit Section */}
          <div className="mt-12 bg-red-900/10 border border-red-900/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-white" size={24} />
              <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white">
                Federal Court: DFO Sued for Salmon Mismanagement
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed mb-4">
              In <strong className="text-white">March 2025</strong>, <strong className="text-white">Save Miramichi Salmon Inc.</strong> filed a 
              federal lawsuit against the Minister of Fisheries and Oceans, alleging DFO systematically mismanaged Atlantic 
              salmon by overprotecting invasive striped bass at the expense of native salmon populations. The group argues 
              DFO&apos;s policies have created an ecological imbalance where striped bass effectively &ldquo;eat the salmon buffet&rdquo; — 
              preying on juvenile smolts during their seaward migration and preventing recovery despite millions spent on 
              habitat restoration.
            </p>
            <p className="text-white text-sm leading-relaxed mb-4">
              In <strong className="text-white">September 2025</strong>, Federal Court Justice denied the government&apos;s 
              attempt to dismiss the lawsuit — a significant legal victory for conservation groups. The case proceeds 
              on the merits, with DFO now required to defend its management decisions in court.
            </p>
            <p className="text-white text-sm leading-relaxed mb-4">
              In <strong className="text-white">December 2025</strong>, the government again attempted to have the 
              lawsuit dismissed, arguing DFO has &ldquo;discretionary authority&rdquo; over fisheries management. The Federal 
              Court rejected this argument, ruling the case raises legitimate questions about whether DFO&apos;s management 
              decisions are evidence-based or politically motivated.
            </p>
            <div className="bg-black/30 rounded-xl p-4 mt-4">
              <h4 className="text-white font-black text-sm mb-2">Key Numbers</h4>
              <ul className="space-y-1 text-white text-sm">
                <li>• <strong className="text-white">514 salmon</strong> killed in failed smallmouth bass eradication (vs. only 32 bass)</li>
                <li>• <strong className="text-white">70%+</strong> of southwest Miramichi smolts eaten by striped bass</li>
                <li>• <strong className="text-white">90%+</strong> of northwest Miramichi smolts eaten by striped bass</li>
                <li>• <strong className="text-white">75%</strong> drop in salmon pool auction prices</li>
                <li>• <strong className="text-white">32°C</strong> water temperature reached August 2025 — hottest spot in Canada that day</li>
              </ul>
            </div>
          </div>

          {/* Budget 2026: No Fishing Industry Allocation */}
          <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-white" size={24} />
              <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white">
                Budget 2026: Zero for Fishing Industry
              </h3>
            </div>
            <p className="text-white text-sm leading-relaxed mb-4">
              Despite the catastrophic collapse of the Miramichi salmon fishery and tariff threats to the $3B lobster 
              industry, <strong className="text-white">Budget 2026-27 contains no specific allocation for the fishing industry</strong>. 
              The province gave <strong className="text-white">$45 million to Irving Paper</strong> (83% of the tariff relief 
              package) while offering nothing to the fishing communities that are the economic backbone of coastal New Brunswick.
            </p>
            <p className="text-white text-sm leading-relaxed">
              As the Lobster Council of Canada&apos;s Geoff Irvine stated: <em>&ldquo;It&apos;s cruel, and it&apos;s not okay.&rdquo;</em> The federal 
              government announced $133M for NB fisheries innovation in March 2025, but the province has failed to 
              match or complement this investment with its own funding.{" "}
              <a href="/budget-2026" className="text-white hover:text-white underline">Read the full Budget 2026 analysis →</a>
            </p>
          </div>
        </div>
      </section>

      {/* MSX Disease */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            MSX: <span className="text-white">The Silent Killer</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              In 2024, <strong className="text-white">MSX (Multinucleate Sphere X)</strong> — a deadly parasitic disease — was discovered in New Brunswick oyster beds near Spencer Cove, Northumberland Strait. The parasite causes <strong className="text-white">90-95% mortality</strong> in infected oysters. By fall 2025, the Canadian Food Inspection Agency declared all Maritime waters a disease-present area.
            </p>
            <p>
              The impact has been devastating. PEI's oyster industry (worth $54 million, producing 26% of Canada's oysters) is losing hundreds of thousands per operator. NB operators report losing "many millions" pulling up dead oysters. MSX had been contained in Cape Breton since 2002 — then suddenly spread to NB and PEI in 2024.
            </p>
            <p>
              <strong className="text-white">The breakthrough:</strong> In February 2026, the <strong className="text-white">Research and Productivity Council in Fredericton</strong> became the <strong className="text-white">first in the world to sequence the full MSX genome</strong> — after 7 months of lab work on 17,000 infected oyster samples. The genome is now on GenBank. A separate $3.1 million Genome Canada project is working to develop MSX-resistant oyster broodstock.
            </p>
          </div>
        </div>
      </section>

      {/* Cooke Aquaculture */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Cooke Aquaculture: <span className="text-yellow-400">The Giant</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              <strong className="text-white">Cooke Aquaculture</strong> is one of the world's largest salmon farming companies, headquartered in Blacks Harbour, NB. The company operates farms across Atlantic Canada, the US, Chile, and Europe.
            </p>
            <p>
              But Cooke's dominance has come with controversy:
            </p>
            <ul>
              <li><strong className="text-white">Sea lice infestations</strong> — farmed salmon create conditions for sea lice to proliferate, threatening wild salmon populations</li>
              <li><strong className="text-white">Escapes</strong> — tens of thousands of farmed salmon have escaped Cooke pens, potentially interbreeding with or outcompeting wild stocks</li>
              <li><strong className="text-white">Environmental impact</strong> — waste, antibiotics, and chemicals from farms affect surrounding ecosystems</li>
              <li><strong className="text-white">Political influence</strong> — Cooke is one of NB's largest employers and donors, giving it outsized influence over fisheries policy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Fisheries: Key Facts
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Fisheries: Key Facts" />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="CBC: MSX Oyster Research Breakthrough" url="https://www.cbc.ca/news/canada/new-brunswick/oysters-msx-research-shellfish-fishery-new-brunswick-9.7123626" description="World-first MSX genome mapping in Fredericton" />
            <SourceCard type="article" title="Save Miramichi Salmon Inc." url="https://savemiramichisalmon.ca/" description="Conservation group fighting for salmon recovery" />
            <SourceCard type="article" title="CBC: Breakthrough in NB Oyster Research — MSX Genome Mapped" url="https://www.cbc.ca/news/canada/new-brunswick/oysters-msx-research-shellfish-fishery-new-brunswick-9.7123626" description="World-first: Fredericton scientists map MSX DNA, bringing hope to Atlantic oyster industry" date="MAR 2026" />
            <SourceCard type="article" title="DFO — Fisheries and Oceans Canada" url="https://www.dfo-mpo.gc.ca/" description="Federal fisheries management data and decisions" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="The Rivers Are Dying"
        description="96% salmon collapse. MSX disease. Climate warming. The fisheries that built NB are disappearing."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
