import { Metadata } from "next";
import { TrendingDown, AlertCircle } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { RelatedPages } from "@/components/RelatedPages";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { VideoGrid } from "@/components/VideoGrid";
import { SourceCard } from "@/components/SourceCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Manufactured Deficit & NB Power Crisis | Reform NB",
  description:
    "Analyzing the nearly $6 billion NB Power debt, $173.9M corporate welfare scandals, the systematic siphoning of provincial wealth, and crushing child poverty in Canada's 'Company Province'.",
};

const economyData = [
  { value: "21.9%", label: "Child Poverty Rate", sublabel: "Surging to 41.2% in Campbellton — 32,140 children in poverty", color: "red" as const },
  { value: "$5.9B", label: "NB Power Debt", sublabel: "Operating only 27% capacity at Point Lepreau, buying power at $9M/day" },
  { value: "15%", label: "HST Rate", sublabel: "Highest combined sales tax in Canada — paid by the poorest residents" },
  { value: "1 in 4", label: "Energy Poverty", sublabel: "Households spending >6% of income just to heat their homes" },
];

const economyTimeline = [
  { date: "1990s", title: "Atcon Group Loan Guarantees", description: "$63.4 million in public loan guarantees to a failing firm. Total write-off. Warnings of 'debt spiral' ignored.", color: "red" as const },
  { date: "2010s", title: "Point Lepreau Refurbishment", description: "$2.4 billion over budget. Plant operates at fraction of capacity. NB Power debt spirals.", color: "red" as const },
  { date: "2019", title: "Joi Scientific Exposed", description: "$13 million invested in Florida startup claiming to extract hydrogen from seawater — violating laws of physics. Company collapses.", color: "red" as const },
  { date: "2023", title: "NB Power Debt Hits $5.9B", description: "Utility debt reaches historic levels. Replacement power costs $9M/day during peak demand. Ratepayers face increases.", color: "red" as const },
  { date: "FEB 2026", title: "Child Poverty Report Card", description: "21.9% child poverty rate. Campbellton hits 41.2%. Indigenous reserves: 51.2%. 32,140 children in poverty.", color: "red" as const },
  { date: "EARLY 2026", title: "$45M Irving Paper Grant", description: "J.D. Irving threatens layoffs, government immediately hands $45M 'tariff relief' while residents face 19.4% rate hike.", color: "gold" as const },
  { date: "MAR 2026", title: "Open Letter: Tax the Rich", description: "200+ activists demand wealth tax on top 0.5-1% instead of government's proposed austerity cuts.", color: "gold" as const },
  { date: "MAR 2026", title: "NB Power Emissions Surge", description: "Emissions hit 16-year high. 4M barrels of oil burned. Carbon penalties: $49M. Rate increases of 50% proposed.", color: "red" as const },
];

export default function EconomyPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={TrendingDown}
        title="The Manufactured Deficit"
        quote="They tell us we are too poor for healthcare or housing, while handing out billion-dollar subsidies to multi-national monopolies. New Brunswick isn't poor; it is being drained."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" 
          alt="Electrical grid infrastructure representing NB Power debt crisis"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center">
          $5.9 billion in NB Power debt — rate increases of 50% over six years proposed while emissions surge to 16-year highs
        </div>
        <div className="bg-neutral-900 p-2 text-xs text-neutral-400 uppercase tracking-widest text-center">
          CBC/Radio-Canada
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {economyData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: Crushing Poverty */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Crushing Poverty vs. Corporate Oligarchy
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick is Canada's extraction zone. Plain and simple. 
            The February 2026 Child Poverty Report Card shows 21.9% of our kids 
            living in poverty. That jumps to 41.2% in Campbellton - nearly half 
            of all children there. In Saint John's Ward 3, it's 44.8%. For 
            Indigenous kids on reserves? 51.2% - more than one in two. 
            This isn't statistics. This is hunger. This is kids going to school 
            with empty stomachs while billionaires get richer.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            32,140 children. Let that sink in. Over thirty-two thousand New Brunswick kids 
            wondering where their next meal is coming from. In Campbellton, it's worse - 
            nearly every other child is hungry. In Saint John's Ward 3? Almost every 
            second kid lives in poverty. This isn't a spreadsheet. This is real children 
            with real emptiness in their stomachs.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The wealth generated by the workers of this province is consistently
            siphoned out of the local economy through uncompetitive corporate tax
            structures and massive tax deferrals for giants like McCain Foods
            (whose farmland taxes are forgiven after 15 years). Meanwhile, 1 in
            4 New Brunswick households suffer from &quot;energy poverty,&quot;
            spending more than 6% of their income just to keep the lights and
            heat on.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The richest 10% of New Brunswick families grab nearly 23% of all income. 
            The poorest 10%? They get just 1.6%. This didn't happen by accident. 
            It's the direct result of policies that tax working families heavily, 
            give corporations sweetheart deals, let resource giants pay pennies for 
            our wealth, and starve social programs of funding.
          </p>
        </section>

        {/* Child Poverty Video */}
        <div className="my-8">
          <YouTubeEmbed
            videoId="N9I-HY3wfVM"
            title="CBC: Child poverty 'alarmingly high' in New Brunswick"
          />
          <p className="text-center text-sm text-neutral-400 mt-4 italic">
            CBC coverage of the Human Development Council&apos;s 2026 report showing NB child poverty remains &quot;alarmingly high.&quot;
          </p>
        </div>

        {/* Child Poverty Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" 
            alt="Child in poverty representing New Brunswick's crushing child poverty rates"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
            32,140 children in poverty — Campbellton at 41.2%, Indigenous reserves at 51.2%
          </div>
        </div>

        {/* Quote Block */}
        <QuoteBlock
          quote="We have the highest child poverty rate in the country, yet we harbor families worth an estimated $30 Billion. This is not an economic accident; it is a designed extraction of wealth."
          author="Campaign 2000 / Human Development Council"
          role="February 2026 Report Card"
          color="red"
        />

        {/* Section 2: NB Power Debt & Crisis */}
        <section>
          <div className="bg-crisis-red/10 border border-crisis-red rounded-xl p-6 mb-8">
            <h2 className="text-3xl font-serif font-bold text-white mb-4 uppercase tracking-tighter italic">
              <a href="/climate-energy" className="hover:text-crisis-text transition-colors">
                The NB Power Crisis: Debt, Emissions & Corporate Welfare
              </a>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              NB Power carries an astounding <strong className="text-white">$5.9 Billion in debt</strong>, operates only 27% of the time at Point Lepreau, and burns <strong className="text-white">4 million barrels of oil</strong> while claiming net-zero goals. For the complete analysis, see our full <a href="/climate-energy" className="text-crisis-text hover:text-white underline">Climate & Energy</a> investigation.
            </p>
            <ul className="text-neutral-300 text-sm space-y-2">
              <li>• <strong>$5.9B debt</strong> - Rate increases of 50% over 5 years proposed</li>
              <li>• <strong>4M barrels of oil</strong> - Emissions at 16-year high (60% increase)</li>
              <li>• <strong>$45M to Irving</strong> - Industrial welfare while residents face 19.4% rate hikes</li>
              <li>• <strong>$49M carbon penalties</strong> - Passed directly to ratepayers</li>
            </ul>
            <div className="mt-4">
              <a href="/climate-energy" className="inline-flex items-center gap-2 bg-crisis-red text-white font-black py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm uppercase tracking-widest">
                Read Full Investigation <span className="text-xs">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* NB Power Video */}
        <div className="my-12">
          <YouTubeEmbed
            videoId="FLGCGc7sAUw"
            title="NB Power Crisis: Public hearings expose financial mismanagement"
          />
          <p className="text-center text-sm text-neutral-400 mt-4 italic">
            Public hearings and journalism consistently expose the financial mismanagement at NB Power.
          </p>
        </div>

        {/* Section 3: Legacy of Investment Failures */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            A Legacy of Corporate Welfare Failures
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            When the government does spend money, it routinely mismanages it
            through disastrous &quot;corporate welfare&quot; schemes that benefit 
            connected insiders while leaving taxpayers holding the bag.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-neutral-400" role="list">
            <li>
              <strong className="text-white">The Atcon Group Scandal:</strong> $63.4 million in loan
              guarantees to a failing firm, ignoring explicit warnings of a
              &quot;debt spiral.&quot; Total write-off.
            </li>
            <li>
              <strong className="text-white">Joi Scientific:</strong> $13 million invested in a Florida
              startup claiming to extract hydrogen from seawater—a claim that
              violated the laws of physics.
            </li>
            <li>
              <strong className="text-white">The Failed Orimulsion Fiasco:</strong> Hundreds of millions
              wasted on Venezuelan fuel contracts that never materialized.
            </li>
            <li>
              <strong className="text-white">Point Lepreau Refurbishment:</strong> Originally budgeted at 
              $1.4 billion, final cost exceeded $3.8 billion — a $2.4 billion 
              overrun. The plant now operates at just 27% capacity.
            </li>
            <li>
              <strong className="text-white">RIGS Gas Plant (Pending):</strong> $1 billion deal with Missouri-based 
              PROENERGY. Experts warn total cost could reach $3.5 billion over 
              25 years — while cheaper alternatives (battery storage, wind) are ignored.
            </li>
          </ul>
        </section>

        {/* Section 4: The HST Trap */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The HST Trap: Canada's Highest Sales Tax
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick charges a <strong className="text-white">15% Harmonized Sales Tax (HST)</strong> — 
            the highest combined sales tax in Canada. This regressive tax falls 
            hardest on low-income families, who spend a larger proportion of 
            their income on taxable goods.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            A family earning $30,000/year and spending $15,000 on taxable goods 
            pays <strong className="text-white">$2,250 in HST</strong> — 7.5% of their total income. 
            A family earning $200,000 and spending $40,000 on taxable goods pays 
            $6,000 — just 3% of their income. The tax system itself is engineered 
            to extract more from those who have less.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Meanwhile, corporations benefit from input tax credits that allow 
            them to recover most of the HST they pay. The net effect: a tax 
            system that disproportionately burdens working families while 
            shielding corporate profits.
          </p>
        </section>

        {/* Section 5: Energy Poverty */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Energy Poverty: Choosing Between Heat and Food
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            One in four New Brunswick households — approximately <strong className="text-white">80,000 families</strong> — 
            are classified as &quot;energy poor,&quot; meaning they spend more than 6% of 
            their after-tax income on home energy. In rural areas, where homes 
            are older, less insulated, and dependent on electric heating, the 
            situation is even worse.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            NB Power&apos;s proposed rate increases of up to 50% over six years would 
            push thousands more families into energy poverty. The utility&apos;s own 
            data shows that a cumulative 19.4% rate hike has already been 
            implemented, with more to come. For a family paying $250/month in 
            electricity, a 50% increase means $125/month more — <strong className="text-white">$1,500/year</strong> 
            that could otherwise go to food, medicine, or rent.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            The province offers an Energy Assistance Program, but it covers only 
            a fraction of the actual cost, has strict eligibility requirements, 
            and reaches fewer than 20% of energy-poor households. The rest are 
            left to choose between heating and eating — in a province with 
            <strong className="text-white"> -30°C winters</strong>.
          </p>
        </section>

        {/* Quote Block 2: Tax the Rich */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            Tax the Rich — Or Gut Services?
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In March 2026, over 200 activists signed an <strong className="text-white">open letter to Premier Susan Holt</strong> demanding a wealth tax on the top 0.5–1% instead of the government&apos;s proposed austerity cuts. The Holt government&apos;s pre-budget survey asked citizens to choose between <strong className="text-white">closing small schools</strong> and <strong className="text-white">funding health clinics</strong> — a false dilemma in a province where Irving and McCain families sit on billions in untaxed wealth.
          </p>
          <QuoteBlock
            quote="Poor and middle-class people pay proportionally a lot more of their income towards tax than the super wealthy, such as the billionaire Irving and McCain families. We could raise revenues — instead of deciding whether we can fund a small school or a community health venture."
            author="Liane Thibodeau"
            role="Summerville resident & open letter organizer"
            color="gold"
          />
          <p className="text-neutral-400 leading-relaxed mt-6">
            The government&apos;s own &ldquo;Difficult Decisions&rdquo; report proposed: closing schools under 100 students, privatizing cultural sites, reducing non-profit grants, and recovering unpaid student loans and medical bills. The letter demands instead: higher mining royalties, increased Crown land stumpage fees, and an end to subsidies for &ldquo;large, profitable corporations, particularly those that offshore profits.&rdquo;{" "}
            <a href="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline">[NB Media Co-op, Mar 10, 2026]</a>
          </p>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Economic Failure Timeline
          </h2>
          <Timeline items={economyTimeline} className="mt-8" />
        </section>

        {/* Industrial Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80" 
            alt="Industrial landscape representing corporate extraction in New Brunswick"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
            The Company Province — $30 billion in billionaire wealth generated by extracting a province with Canada&apos;s highest child poverty
          </div>
        </div>

        {/* Section 6: NB vs Other Provinces */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            NB vs. The Rest of Canada
          </h2>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left p-4 text-white font-black uppercase tracking-wider text-xs">Metric</th>
                  <th className="text-left p-4 text-crisis-text font-black uppercase tracking-wider text-xs">NB</th>
                  <th className="text-left p-4 text-neutral-400 font-black uppercase tracking-wider text-xs">National Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Child Poverty Rate</td>
                  <td className="p-4 text-crisis-text font-bold">21.9%</td>
                  <td className="p-4 text-neutral-400">17.7%</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Median Household Income</td>
                  <td className="p-4 text-crisis-text font-bold">$67,260</td>
                  <td className="p-4 text-neutral-400">$82,800</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">HST Rate</td>
                  <td className="p-4 text-crisis-text font-bold">15%</td>
                  <td className="p-4 text-neutral-400">13% (avg)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Energy Poverty Rate</td>
                  <td className="p-4 text-crisis-text font-bold">25%</td>
                  <td className="p-4 text-neutral-400">~15%</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-300">Population Below Poverty Line</td>
                  <td className="p-4 text-crisis-text font-bold">14.4%</td>
                  <td className="p-4 text-neutral-400">10.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-neutral-400 text-sm mt-4 italic">
            Sources: Campaign 2000 (Feb 2026), Statistics Canada, CIHI, NB EUB filings.
          </p>
        </section>

        {/* External Links */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mt-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Essential Data & Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High'" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="21.9% provincial rate, 41.2% in Campbellton" date="FEB 2026" />
            <SourceCard type="pdf" title="Campaign 2000: 2025 NB Report Card" url="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" description="Full report with regional breakdowns" date="FEB 2026" />
            <SourceCard type="report" title="NB Economic & Social Inclusion Dashboard" url="https://www.nbtogether.ca/gendashboard" description="Official provincial data portal" />
            <SourceCard type="report" title="Statistics Canada: Poverty Dashboard" url="https://www.statcan.gc.ca/" description="National comparison data" date="NOV 2025" />
            <SourceCard type="article" title="CBC: U.S. Refineries Pay 5x More Property Taxes Than Irving" url="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058" description="Investigative report on corporate tax inequality" />
            <SourceCard type="organization" title="Human Development Council: Research & Reports" url="https://sjhdc.ca/research-and-reports/" description="Saint John-area poverty and social research" />
            <SourceCard type="article" title="CBC: NB Power Emissions Surge to 16-Year High" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="4M barrels of oil burned, 60% emissions increase" date="MAR 2026" />
            <SourceCard type="article" title="Telegraph-Journal: NB Power Rate Hikes Outstrip Inflation" url="https://tj.news/new-brunswick/nb-powers-rate-hikes-over-16-years-outstrip-inflation" description="AG evidence shows NB Power rates kept artificially low for decades, now surging" date="MAR 2026" />
            <SourceCard type="article" title="NB Media Co-op: 'Raise Taxes on Super-Rich' Open Letter" url="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" description="200+ activists demand wealth tax on top 0.5-1%" date="MAR 2026" />
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High' in NB" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="21.9% provincial rate, 41.2% in Campbellton, 51.2% on Indigenous reserves" date="FEB 2026" />
            <SourceCard type="pdf" title="GNB: 'Difficult Decisions' Pre-Budget Report" url="https://www.gnb.ca/content/dam/GNB3/gov/budget/docs/planning-2026-2027-budget.pdf" description="Government austerity proposals: school closures, service cuts, privatization" date="2026" />
            <SourceCard type="report" title="HDC: Saint John Neighbourhood Poverty Data" url="https://sjhdc.ca/research-and-reports/" description="Ward 3 child poverty: 44.8% vs Ward 1: 17.3%" date="FEB 2026" />
          </div>
        </section>
      </div>

      
      <RelatedPages pages={[
        { href: '/oligarchy', title: 'The Corporate Oligarchy', description: 'How Irving, McCain, Cooke families extract $30B+ from NB.' },
        { href: '/budget-2026', title: 'Budget 2026-27', description: 'Record deficit. $45M to Irving Paper while services cut.' },
        { href: '/child-poverty', title: 'Child Poverty', description: '21.9% child poverty rate. 41.2% in Campbellton.' }
      ]} />

      <CTASection
        icon={TrendingDown}
        title="New Brunswick Isn't Poor. It's Being Drained."
        description="The manufactured deficit is a choice. The wealth exists — it's just being extracted. We demand a wealth tax, fair resource royalties, and an end to corporate welfare."
        buttonText="Mobilize"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
