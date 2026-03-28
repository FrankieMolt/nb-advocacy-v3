import { Metadata } from "next";
import Image from "next/image";
import { DollarSign, AlertTriangle } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://nbreform.ca/budget-2026/" },
  title: "NB Budget 2026-27: $1.39B Deficit, $45M Irving Subsidy, Services Cut",
  description:
    "Record $1.39B deficit. $45M to Irving Paper while universities cut. Veterinary services eliminated. 10 heritage sites closing. Full analysis with verified sources.",
  keywords: [
    "New Brunswick budget 2026", "NB deficit", "Irving Paper subsidy", "$45M Irving",
    "NB veterinary services cut", "NB education cuts", "Holt budget", "NB debt",
    "heritage sites closing", "NB civil service cuts", "post-secondary funding freeze",
    "NB fiscal crisis", "Irving oligarchy", "New Brunswick government failure",
  ].join(", "),
  openGraph: {
    title: "NB Budget 2026-27: Record Deficit, Irving Subsidy, Public Services Cut",
    description:
      "The Holt Liberal government tables a record $1.39B deficit while giving $45M to Irving Paper and cutting post-secondary education, veterinary services, and heritage sites.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "New Brunswick Legislative Assembly - Reform NB budget analysis",
      },
    ],
  },
};

const budgetFacts = [
  {
    icon: "warning" as const,
    title: "Record $1.39B Deficit",
    value: "$1.39B",
    description:
      "Largest deficit in New Brunswick history. Net debt projected to grow from $13.9B to $19.7B over the mandate. Economist Richard Saillant calls it 'highly irresponsible.'",
    source: "CBC, KPMG",
  },
  {
    icon: "money" as const,
    title: "$45M to Irving Paper",
    value: "83% of relief",
    description:
      "Irving Paper received $45M — 83% of the $54.3M tariff relief package. Irving laid off 140 workers last year. VP said 'not looking for a subsidy,' then accepted it.",
    source: "CBC, NB Media Co-op",
  },
  {
    icon: "warning" as const,
    title: "Veterinary Services Eliminated",
    value: "100% cut",
    description:
      "Provincial field veterinary services, provincial vet lab, and foreign animal disease lab completely discontinued over 3 years. Rural farmers left without public veterinary support.",
    source: "GNB Official",
  },
  {
    icon: "warning" as const,
    title: "10 Heritage Sites Closing",
    value: "10 sites",
    description:
      "Ten provincially-owned heritage sites with fewer than 5,000 annual visitors will be closed or transferred to community partners. Cultural and economic loss for rural communities.",
    source: "CBC, GNB",
  },
  {
    icon: "money" as const,
    title: "Post-Secondary Frozen",
    value: "$35-50M cut",
    description:
      "Operating grants frozen (effective cut with inflation). Government previously proposed privatizing Mount Allison and merging STU/UNB — reversed after public backlash.",
    source: "NB Media Co-op, Canadian Dimension",
  },
  {
    icon: "warning" as const,
    title: "12% Civil Service Cut",
    value: "$100M/3yr",
    description:
      "Part 1 of civil service reduced by 12% through attrition over 3 years. Risks institutional knowledge loss and increased consultant dependency.",
    source: "CBC, Global News",
  },
  {
    icon: "warning" as const,
    title: "Small Schools Under Review",
    value: "<100 students",
    description:
      "Schools with fewer than 100 students under review for consolidation. Disproportionately affects rural, Francophone, and Indigenous communities.",
    source: "GNB Pre-budget Consultation",
  },
  {
    icon: "scale" as const,
    title: "No Corporate Tax Changes",
    value: "0% change",
    description:
      "No changes to corporate or personal income tax rates. Irving, McCain, and other large corporations continue at existing rates while public services are cut.",
    source: "KPMG Budget Analysis",
  },
];

const deficitData = [
  { icon: "warning" as const, title: "Deficit 2026-27", value: "$1.39B", description: "Largest deficit in New Brunswick history. No path to balance projected.", source: "CBC, KPMG" },
  { icon: "money" as const, title: "Projected Net Debt", value: "$19.7B", description: "Growing from $13.9B over the mandate — $6B added to provincial debt.", source: "CBC" },
  { icon: "warning" as const, title: "Debt Added Over Mandate", value: "$6B", description: "Total debt added over the full government mandate period.", source: "CBC" },
  { icon: "warning" as const, title: "Real GDP Growth", value: "1%", description: "Minimal economic growth projected while debt balloons.", source: "KPMG" },
];

const irvingData = [
  { icon: "money" as const, title: "To Irving Paper", value: "$45M", description: "83% of total $54.3M tariff relief package to billionaire family's company.", source: "CBC, NB Media Co-op" },
  { icon: "warning" as const, title: "Workers Laid Off", value: "140", description: "Irving Paper laid off half its workforce one year before accepting the subsidy.", source: "CBC" },
  { icon: "money" as const, title: "Universities Cut", value: "$35-50M", description: "Same amount cut from post-secondary education as given to Irving.", source: "NB Media Co-op" },
  { icon: "money" as const, title: "Irving Family Wealth", value: "$30B", description: "Family wealth while accepting public subsidies and using offshore tax havens.", source: "ICIJ" },
];

const cutsData = [
  { icon: "warning" as const, title: "Veterinary Services", value: "100%", description: "Entire provincial field veterinary program eliminated over 3 years.", source: "GNB Official" },
  { icon: "warning" as const, title: "Heritage Sites Closing", value: "10", description: "Sites closing or transferred to community partners. Cultural loss for rural NB.", source: "CBC, GNB" },
  { icon: "warning" as const, title: "Civil Service Reduction", value: "12%", description: "Reduction through attrition over 3 years. $100M projected savings.", source: "CBC, Global News" },
  { icon: "warning" as const, title: "University Grants", value: "Frozen", description: "Operating grants frozen — effective cut when accounting for inflation.", source: "NB Media Co-op" },
];

export default function Budget2026Page() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={DollarSign}
        title="Budget 2026-27"
        quote="This budget is highly irresponsible and a complete dereliction of duty. The government made no difficult decisions while giving billions in subsidies to a billionaire family."
      />

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1440&q=80" 
          alt="New Brunswick Legislative Assembly - Budget 2026 analysis"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Budget 2026-27 Analysis</h2>
          <p className="text-gray-300 text-lg">Record deficit. Corporate subsidies. Services cut.</p>
        </div>
      </div>

      {/* Key Facts */}
      <KeyFactsGrid
        facts={budgetFacts}
        title="Budget 2026-27: Key Facts"
        className="mb-16"
      />

      {/* Deficit Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Record Deficit & Fiscal Crisis
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">NB Budget 2026-27: $1.39B Deficit, $45M Irving Subsidy, Services Cut</h1>

          <p className="text-neutral-300 text-lg leading-relaxed">
            The Holt Liberal government tabled its 2026-27 budget on March 17, 2026, projecting a{" "}
            <strong className="text-white">record $1.39 billion deficit</strong> — the largest in New
            Brunswick&apos;s history. The budget claims to make &ldquo;the single largest investment
            in health care&rdquo; in the province&apos;s history (+$710M / 17.4%), but the reality is
            more complex.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            When compared to actual spending last year (not the budgeted amount), the healthcare
            increase is only <strong className="text-white">6.1%</strong>. Healthcare significantly
            overspent its budget last year, inflating the comparison number.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            The net debt is projected to grow from <strong className="text-white">$13.9 billion to
            $19.7 billion</strong> over the mandate. Real GDP growth is projected at just 1%.
          </p>
        </div>

        <KeyFactsGrid facts={deficitData} title="The Fiscal Reality" />

        {/* Visual deficit comparison */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Deficit Comparison</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">NB Budget 2026-27</span>
                <span className="text-red-400 font-bold">$1.39B</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Previous Record</span>
                <span className="text-orange-400 font-bold">$549M</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-4">
                <div className="bg-orange-500 h-4 rounded-full" style={{width: '39%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">NB Avg (5yr)</span>
                <span className="text-yellow-400 font-bold">$200M</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full" style={{width: '14%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <QuoteBlock
          quote="This is highly irresponsible and a complete dereliction of duty."
          author="Richard Saillant"
          role="Economist — CBC, March 2026"
          className="mt-8"
        />

        <QuoteBlock
          quote="There were no difficult decisions made."
          author="Don Monahan"
          role="PC Critic — CBC, March 2026"
          className="mt-4"
        />

        <QuoteBlock
          quote="The debt-to-GDP trajectory is going to get worse year over year."
          author="David Coon"
          role="Green Party Leader — CBC, March 2026"
          className="mt-4"
        />
      </section>

      {/* Irving Subsidy Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          The Irving Subsidy
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            The single most alarming item in this budget: <strong className="text-white">Irving Paper
            received up to $45 million over 3 years</strong> from Opportunities New Brunswick&apos;s
            Competitive Growth Fund — representing <strong className="text-white">82.8% of the total
            $54.3M tariff relief package</strong> for 7 companies.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            One year ago, Irving Paper <strong className="text-white">laid off 140 workers</strong>{" "}
            (~half its workforce), blaming &ldquo;uncompetitive industrial electricity rates.&rdquo;
            Irving Paper VP Mark Mosher wrote an open letter saying the company was{" "}
            <strong className="text-white">&ldquo;not looking for a subsidy&rdquo;</strong> — then
            accepted $45M in public funds.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            The funding includes an <strong className="text-white">electricity rate subsidy</strong>,
            offsetting the gap between industrial rates and a &ldquo;competitive benchmark
            rate.&rdquo; This means NB Power is effectively subsidizing Irving&apos;s energy costs.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            As the NB Media Co-op noted:{" "}
            <strong className="text-white">
              &ldquo;90 per cent of the proposed cuts to education equals the amount given to Irving
              Paper.&rdquo;
            </strong>{" "}
            While proposing $35-50M in cuts to post-secondary education, the government
            simultaneously gave $45M to the billionaire Irving family&apos;s company.
          </p>
        </div>

        {/* Irving Section Image */}
      <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440&q=80" 
          alt="Corporate buildings representing wealth concentration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <p className="text-white text-xl font-bold">Where does the money go?</p>
        </div>
      </div>

      <KeyFactsGrid facts={irvingData} title="Irving: By The Numbers" />

        <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            Other Companies in Tariff Relief Package
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between text-neutral-300">
              <span>Cooke Aquaculture</span>
              <span className="text-white font-bold">Up to $3.8M</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Agropur Cooperative</span>
              <span className="text-white font-bold">Up to $2.4M</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Organigram</span>
              <span className="text-white font-bold">Up to $2M</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Stantec</span>
              <span className="text-white font-bold">Up to $800K</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Marwood</span>
              <span className="text-white font-bold">Up to $250K</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Alliance Seafood</span>
              <span className="text-white font-bold">Up to $115K</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-700">
            <div className="flex justify-between text-neutral-300">
              <span className="font-bold">Total Package</span>
              <span className="text-white font-bold">$54.3M</span>
            </div>
            <div className="flex justify-between text-neutral-300 mt-2">
              <span className="font-bold text-red-400">Irving Paper Share</span>
              <span className="text-red-400 font-bold">$45M (82.8%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Being Cut */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Services Being Cut
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            While giving $45M to Irving, the government is cutting services that New Brunswickers
            depend on — disproportionately affecting rural communities.
          </p>
        </div>

        <KeyFactsGrid facts={cutsData} title="Public Services at Risk" />

        <div className="mt-8 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              🏥 Provincial Veterinary Services — Eliminated
            </h3>
            <p className="text-neutral-300">
              Provincial field veterinary services, the provincial veterinary lab, and foreign animal
              disease lab services are being <strong className="text-white">discontinued entirely</strong> over the next 3 fiscal years.
              These services provide medical, surgical, herd health, pathology, diagnostic and
              regulatory services to the agricultural sector. Rural livestock farmers will be forced
              to rely on scarce and expensive private veterinary services. This is an{" "}
              <strong className="text-white">animal welfare and food security issue</strong>.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              🏛️ Heritage Sites — 10 Closing
            </h3>
            <p className="text-neutral-300">
              Ten provincially-owned heritage sites with fewer than 5,000 annual visitors will be
              closed or transferred to community partners. This means a loss of cultural heritage,
              tourism infrastructure, and community gathering spaces — especially in smaller
              communities that depend on tourism revenue.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              🏫 Small Schools — Under Review for Closure
            </h3>
            <p className="text-neutral-300">
              Schools with fewer than 100 students are under review for consolidation or closure.
              These are almost exclusively in rural, Francophone, and Indigenous communities.
              Closure forces longer bus rides and removes community anchors that hold small towns
              together.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              🎓 Post-Secondary Education — Frozen
            </h3>
            <p className="text-neutral-300">
              Operating grants to universities are frozen — an effective cut when accounting for
              inflation. Affected institutions include UNB, STU, Mount Allison, Université de
              Moncton, and NBCC. The government previously proposed{" "}
              <strong className="text-white">privatizing Mount Allison</strong> and merging STU into
              UNB — proposals reversed after public backlash. Students organized protests at the
              Legislature on budget day.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              👔 Civil Service — 12% Reduction
            </h3>
            <p className="text-neutral-300">
              Part 1 of the civil service will be reduced by 12% over 3 years through attrition,
              projected to save $100M. This risks loss of institutional knowledge and increased
              reliance on consultants — which the budget simultaneously claims to reduce.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Healthcare — Headline vs Reality
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            The budget claims a <strong className="text-white">$710M increase in healthcare
            spending</strong> (+17.4%), calling it &ldquo;the single largest investment in health
            care&rdquo; in NB history. But when compared to actual spending last year (not the
            budgeted amount), the increase is only <strong className="text-white">6.1%</strong>.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            Healthcare significantly overspent its budget last year, which inflates the comparison.
            The budget includes $170.4M for physician services, $30M for collaborative care clinics,
            and $50M for clinical IT systems — but{" "}
            <strong className="text-white">
              no specific targets for ER wait times or family doctor attachment rates
            </strong>
            .
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            Currently, <strong className="text-white">238,000 New Brunswickers</strong> lack a
            family doctor. The Auditor General documented{" "}
            <strong className="text-white">2,199 ER deaths</strong> between 2020-2024, with 43% of
            patients not seen within safe triage times.
          </p>
        </div>
      </section>

      {/* Tax Fairness */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          What&apos;s Missing — No Tax Fairness
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            <strong className="text-white">
              No changes to corporate or personal income tax rates.
            </strong>{" "}
            This means Irving, McCain, and other large corporations continue at existing rates while
            public services are cut.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            An open letter signed by <strong className="text-white">200+ citizens</strong> called
            for a wealth tax, corporate tax increases, and a surtax on top earners. The budget
            ignored all of these proposals.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            Irving companies have been{" "}
            <strong className="text-white">widely criticized for using offshore tax havens</strong>{" "}
            while accepting public subsidies. There is no review of offshore tax haven usage in this
            budget.
          </p>
        </div>
      </section>

      {/* Environmental Concerns */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Environmental & Resource Concerns
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            A new &ldquo;detailed minerals strategy&rdquo; released March 2 aggressively
            promotes NB as mining-friendly, but{" "}
            <strong className="text-white">conservationists were sidelined</strong> in strategy
            development.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            The <strong className="text-white">Sisson mine project</strong> is backed by US Pentagon
            funding, raising sovereignty concerns. US-based{" "}
            <strong className="text-white">ProEnergy</strong> was selected for a controversial
            gas-fired power plant in Tantramar.
          </p>
          <p className="text-neutral-300 text-lg leading-relaxed mt-4">
            <strong className="text-white">No significant climate change investments</strong> were
            announced. The Energy Efficiency Fund received only +$5M. The fishing industry received
            no specific budget allocation, despite the{" "}
            <strong className="text-white">96% collapse of Miramichi River salmon</strong>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Sources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <SourceCard
            type="article"
            title="CBC — Holt government projects $6B added to debt"
            url="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-new-budget-9.7130328"
          />
          <SourceCard
            type="government"
            title="GNB — Budget 2026-27: Putting New Brunswickers First"
            url="https://www.gnb.ca/en/news/n-b.2026.03.budget-2026-27-putting-new-brunswickers-first.html"
          />
          <SourceCard
            type="article"
            title="Global News — NB forecasts historic $1.4B deficit"
            url="https://globalnews.ca/news/11734259/new-brunswick-budget-2026/"
          />
          <SourceCard
            type="article"
            title="CBC — Irving Paper $45M tariff relief"
            url="https://www.cbc.ca/news/canada/new-brunswick/irving-paper-tariff-relief-9.7095940"
          />
          <SourceCard
            type="article"
            title="NB Media Co-op — Students Against Cuts"
            url="https://nbmediacoop.org/2026/03/09/students-against-cuts-nb-to-rally-before-budget-day/"
          />
          <SourceCard
            type="article"
            title="NB Media Co-op — Raise taxes on super rich"
            url="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/"
          />
          <SourceCard
            type="article"
            title="Canadian Dimension — Higher education on the chopping block"
            url="https://canadiandimension.com/articles/view/higher-education-on-the-chopping-block-in-new-brunswick"
          />
          <SourceCard
            type="report"
            title="KPMG — Highlights of the 2026 NB Budget"
            url="https://kpmg.com/ca/en/insights/2026/03/highlights-of-the-2026-new-brunswick-budget.html"
          />
          <SourceCard
            type="article"
            title="CTV News — NB tables budget with historic deficit"
            url="https://www.ctvnews.ca/atlantic/new-brunswick/article/nb-tables-budget-with-historic-14b-deficit-rise-in-health-spending/"
          />
          <SourceCard
            type="article"
            title="Global News — New Brunswick Budget 2026"
            url="https://globalnews.ca/news/11734259/new-brunswick-budget-2026/"
          />
          <SourceCard
            type="article"
            title="CTV Atlantic — Highlights from New Brunswick's 2026-27 Budget"
            url="https://www.ctvnews.ca/atlantic/new-brunswick/article/highlights-from-new-brunswicks-2026-27-budget/"
          />
          <SourceCard
            type="government"
            title="GNB Capital Budget 2026-27"
            url="https://www.gnb.ca/en/gov/capital-budget.html"
          />
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="Demand Accountability"
        description="This budget gives $45M to a billionaire family while cutting the services New Brunswickers depend on. It's time for real change."
        buttonText="Take Action Now"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
