import { Metadata } from "next";
import { TrendingDown, AlertCircle } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { VideoGrid } from "@/components/VideoGrid";
import { SourceCard } from "@/components/SourceCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

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
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80" 
          alt="Electrical grid infrastructure representing NB Power debt crisis"
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          $5.9 billion in NB Power debt — rate increases of 50% over six years proposed while emissions surge to 16-year highs
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
            New Brunswick is Canada&apos;s &quot;extraction zone.&quot; According
            to the February 2026 Child Poverty Report Card, the province suffers
            a staggering <strong className="text-white">21.9% child poverty rate</strong>—surging to a
            horrifying <strong className="text-white">41.2% in Campbellton</strong> and 30.7% in Saint
            John. For Indigenous children living on-reserve, that rate explodes
            to <strong className="text-white">51.2%</strong>.{" "}
            <a href="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[CBC, Feb 2026]</a>{" "}
            <a href="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[Campaign 2000 PDF]</a>
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            These are not abstract percentages. They represent <strong className="text-white">32,140 children</strong> 
            living in poverty across the province. In Campbellton, nearly half of all children 
            go to bed hungry. In Saint John&apos;s Ward 3, the rate reaches <strong className="text-white">44.8%</strong> — 
            meaning almost every second child lives in a household below the poverty line.
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
            The income distribution tells the story of a captured economy: the top 10% of 
            NB families hold <strong className="text-white">22.9%</strong> of total income, while the bottom 
            10% hold just <strong className="text-white">1.6%</strong>. This is not a natural distribution — 
            it is the result of deliberate policy choices: regressive sales taxes, low 
            corporate tax rates, below-market resource royalties, and the systematic 
            underfunding of social programs.
          </p>
        </section>

        {/* Child Poverty Video */}
        <div className="my-8">
          <YouTubeEmbed
            videoId="Jv8eHqMg7zE"
            title="CBC: Child poverty 'alarmingly high' in New Brunswick"
          />
          <p className="text-center text-sm text-neutral-500 mt-4 italic">
            CBC coverage of the Human Development Council&apos;s 2026 report showing NB child poverty remains &quot;alarmingly high.&quot;
          </p>
        </div>

        {/* Child Poverty Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" 
            alt="Child in poverty representing New Brunswick's crushing child poverty rates"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
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

        {/* Section 2: NB Power Debt Black Hole */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The NB Power Debt Black Hole
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            NB Power carries an astounding <strong className="text-white">$5.9 Billion in debt</strong>.
            Systemic mismanagement at the Point Lepreau nuclear station—which
            operated only 27% of the time in 2024-25—forces the utility to buy
            replacement power from out-of-province markets at costs reaching{" "}
            <strong className="text-white">$9 million per day</strong> during peak demand.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Rather than investing in local renewables, the utility is currently
            pursuing the <strong className="text-white">$1 Billion RIGS gas plant</strong>—partnering
            with the Missouri-based firm PROENERGY—a deal experts warn could
            cost New Brunswickers up to $3.5 Billion over 25 years while
            ignoring cheaper battery storage alternatives.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-4 mb-6">
            <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <AlertCircle size={16} aria-hidden="true" /> The Industrial Giveaway
            </h4>
            <p className="text-sm text-neutral-300">
              In early 2026, after J.D. Irving threatened layoffs at its Saint
              John paper mill citing &quot;soaring electricity costs,&quot; the
              provincial government immediately handed Irving Paper a staggering{" "}
              <strong className="text-white">$45 million &quot;tariff relief&quot; grant</strong>. While
              residents face a cumulative 19.4% rate hike, the oligarchy gets
              its bills paid by the taxpayer.
            </p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-4">
            <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <AlertCircle size={16} aria-hidden="true" /> Emissions Surge While Rates Climb
            </h4>
            <p className="text-sm text-neutral-300">
              In a stunning revelation at the March 2026 EUB rate hearing, NB Power admitted its 
              greenhouse gas emissions have <strong className="text-white">surged to their highest level in over a decade</strong> — 
              burning nearly <strong className="text-white">4 million barrels of oil</strong> in the past 12 months alone. 
              Coleson Cove, its oil-fuelled generating station, burned through <strong className="text-white">$254.1 million</strong> worth 
              of heavy fuel oil, pushing emissions up <strong className="text-white">60% over last year</strong> and almost certainly above 
              the <strong className="text-white">3 million tonne</strong> threshold. Thermal generation hit a <strong className="text-white">16-year high</strong>. Carbon 
              penalties will cost the utility <strong className="text-white">$49 million</strong> in the coming year. Meanwhile, the utility 
              is requesting <strong className="text-white">rate increases of up to 50% over the next six years</strong>, with residential 
              customers already facing a cumulative 19.4% hike. NB Power is simultaneously 
              pitching a &ldquo;premium net-zero rate&rdquo; to customers while its actual emissions trajectory 
              moves in the opposite direction.{" "}
              <a href="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[CBC NB, Mar 14, 2026]</a>
            </p>
          </div>
        </section>

        {/* NB Power Video */}
        <div className="my-12">
          <YouTubeEmbed
            videoId="Q6hVf2wXpLg"
            title="NB Power Crisis: Public hearings expose financial mismanagement"
          />
          <p className="text-center text-sm text-neutral-500 mt-4 italic">
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
            <a href="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op, Mar 10, 2026]</a>
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
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80" 
            alt="Industrial landscape representing corporate extraction in New Brunswick"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
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
                  <th className="text-left p-4 text-crisis-red font-black uppercase tracking-wider text-xs">NB</th>
                  <th className="text-left p-4 text-neutral-400 font-black uppercase tracking-wider text-xs">National Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Child Poverty Rate</td>
                  <td className="p-4 text-crisis-red font-bold">21.9%</td>
                  <td className="p-4 text-neutral-500">17.7%</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Median Household Income</td>
                  <td className="p-4 text-crisis-red font-bold">$67,260</td>
                  <td className="p-4 text-neutral-500">$82,800</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">HST Rate</td>
                  <td className="p-4 text-crisis-red font-bold">15%</td>
                  <td className="p-4 text-neutral-500">13% (avg)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Energy Poverty Rate</td>
                  <td className="p-4 text-crisis-red font-bold">25%</td>
                  <td className="p-4 text-neutral-500">~15%</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-300">Population Below Poverty Line</td>
                  <td className="p-4 text-crisis-red font-bold">14.4%</td>
                  <td className="p-4 text-neutral-500">10.8%</td>
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
            <SourceCard type="report" title="Statistics Canada: Poverty Dashboard" url="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2025053-eng.htm" description="National comparison data" date="NOV 2025" />
            <SourceCard type="article" title="CBC: U.S. Refineries Pay 5x More Property Taxes Than Irving" url="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058" description="Investigative report on corporate tax inequality" />
            <SourceCard type="organization" title="Human Development Council: Research & Reports" url="https://sjhdc.ca/research-and-reports/" description="Saint John-area poverty and social research" />
            <SourceCard type="article" title="CBC: NB Power Emissions Surge to 16-Year High" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="4M barrels of oil burned, 60% emissions increase" date="MAR 2026" />
            <SourceCard type="article" title="NB Media Co-op: 'Raise Taxes on Super-Rich' Open Letter" url="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" description="200+ activists demand wealth tax" date="MAR 2026" />
          </div>
        </section>
      </div>

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
