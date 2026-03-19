import { Metadata } from "next";
import { Home } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { RelatedPages } from "@/components/RelatedPages";
import { CTASection } from "@/components/CTASection";
import { CaseStudy } from "@/components/CaseStudy";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { VideoGrid } from "@/components/VideoGrid";
import { SourceCard } from "@/components/SourceCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Housing & Affordability Crisis | Reform NB",
  description:
    "Investigating the eviction epidemic, explosion of homelessness in Moncton, Saint John, and Fredericton, and the corporate landlord profiteering that fuels New Brunswick's housing disaster.",
};

const housingData = [
  { value: "1,500+", label: "Chronically Homeless", sublabel: "Across Moncton (830), Saint John (437), Fredericton (275)" },
  { value: "440", label: "Youth Without Shelter", sublabel: "Ages 16-26, left homeless in 2025 alone" },
  { value: "12%", label: "Population Surge", sublabel: "775K → 869K in 4 years, straining housing supply" },
  { value: "$1.5M", label: "Golden Ball Sold", sublabel: "Saint John landmark sold to JDI for demolition, not housing conversion" },
  { value: "50-100%", label: "Rent Increases", sublabel: "Corporate landlords raising rents through mass renovictions" },
  { value: "100+", label: "Unhoused Deaths in 2025", sublabel: "From toxic drug supply (carfentanil) and exposure" },
];

const housingTimeline = [
  { date: "2019-2020", title: "COVID-Era Eviction Freeze Ends", description: "Temporary eviction moratoriums during the pandemic created a false sense of security. When lifted, landlords moved quickly to raise rents.", color: "gold" as const },
  { date: "2021", title: "Rent Cap Introduced Then Abandoned", description: "NB briefly introduced a 3.8% rent cap, then allowed it to expire. Landlords immediately began 20-50% increases.", color: "red" as const },
  { date: "2022", title: "Moncton Tent City Emerges", description: "First major encampment forms along the Petitcodiac River. Police clear it repeatedly, displacing residents to less visible locations.", color: "red" as const },
  { date: "2023", title: "Homelessness Declared 'Emergency'", description: "Municipal leaders in Moncton, Saint John, and Fredericton declare housing emergencies. Provincial response: more studies.", color: "red" as const },
  { date: "2024", title: "Renoviction Wave Hits", description: "Corporate landlords execute mass renovictions across Saint John's north end and Moncton's downtown, displacing hundreds.", color: "red" as const },
  { date: "2025", title: "Chronic Homelessness Skyrockets", description: "1,500+ chronically homeless. 440 youth without shelter. Over 100 unhoused deaths from toxic supply and exposure.", color: "red" as const },
  { date: "MAR 2026", title: "Fredericton Chemical Spill Exposes Homeless", description: "Potentially cancer-causing chemical coats roads where encampments are located. Government slow to respond or notify.", color: "gold" as const },
];

export default function HousingPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={Home}
        title="Housing & Affordability"
        quote="A basic human right transformed into a speculative asset class for corporate landlords, fully endorsed by a compliant provincial government."
      />
      
      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
          alt="Affordable housing need representing New Brunswick housing crisis"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center">
          1,500+ New Brunswickers chronically homeless while housing remains unaffordable and corporate landlords profit
        </div>
        <div className="bg-neutral-900 p-2 text-xs text-neutral-400 uppercase tracking-widest text-center">
          CBC/Radio-Canada
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {housingData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: The Eviction Epidemic */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Eviction Epidemic
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Rent control? Gone. Corporate landlords are jacking up rents by 50-100% and tossing families out on the street with fake &quot;renovictions&quot;. They call it upgrading. We call it theft. Every government in the last decade has chosen REIT profits over whether your kids have a roof over their heads.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            "Renoviction" is a fancy word for kicking people out so landlords can jack up the rent. 
            In Saint John's north end - where families have lived for generations - whole blocks 
            are being cleared out. Seniors on pensions, workers making ends meet - given 30 days 
            to find somewhere else to live in a market where finding ANYTHING affordable is nearly 
            impossible. Vacancy rates? Less than 1%. Good luck.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Moncton&apos;s story is just as brutal. The city&apos;s rapid population 
            growth — fueled by immigration and interprovincial migration — has been 
            met not with proportional housing construction, but with speculative 
            investment. Properties that rented for $800/month in 2020 now command 
            $1,500-2,000/month. The result: a city that was once affordable is now 
            one of the most cost-burdened in Atlantic Canada.
          </p>
        </section>

        {/* Section 2: Homelessness Explosion */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6 uppercase tracking-tighter italic">
            Homelessness Explosion & The Addiction Crisis
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The numbers hit you like a punch to the gut: 830 people sleeping rough in Moncton. 437 in Saint John. 275 in Fredericton. Over 1,500 souls without a roof across our three biggest cities. And 440 kids - teenagers and young adults barely out of high school - tossed onto the streets in 2025 alone. This isn't just homelessness. It's abandonment.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Instead of investing in deeply affordable social housing, historical
            responses have included the militarization of police, clearing
            encampments into &quot;red zones,&quot; and pushing vulnerable
            populations into the margins. Coupled with a toxic drug supply
            (carfentanil), front-line agencies reported over 100 deaths among the
            unhoused population in 2025 across Moncton, Saint John, and
            Fredericton combined.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The intersection of homelessness and the toxic drug supply crisis creates a 
            <strong className="text-white"> lethal combination</strong>. Unhoused individuals are disproportionately exposed 
            to a drug supply contaminated with carfentanil — an opioid 100 times more 
            potent than fentanyl. Without supervised consumption sites or adequate 
            harm reduction services, the death toll mounts monthly. Front-line workers 
            describe a system where <strong className="text-white"> naloxone kits have become as essential as blankets</strong>.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Youth homelessness is particularly acute. Over 440 young people aged 16-26 
            were identified as homeless in 2025 — many aging out of foster care with 
            no transition support, others fleeing family breakdown or LGBTQ+ rejection. 
            Without intervention, these young people face a trajectory of chronic 
            homelessness, addiction, and premature death.
          </p>
        </section>

        {/* Housing Crisis Video */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 Video Coverage</h3>
          <VideoGrid 
            columns={1}
            videos={[
              {
                videoId: "N9I-HY3wfVM",
                title: "CBC: Moncton homelessness encampment crisis",
                caption: "Moncton's homelessness crisis has reached emergency levels, with over 830 people unhoused in the city alone."
              }
            ]}
          />
        </div>
        
        {/* Tent City Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Tent encampment representing New Brunswick's homelessness crisis"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center">
            Encampments have become permanent fixtures in Moncton, Saint John, and Fredericton — the visible face of systemic failure
          </div>
          <div className="bg-neutral-900 p-2 text-xs text-neutral-400 uppercase tracking-widest text-center">
            CBC/Radio-Canada
          </div>
        </div>

        {/* Section 3: Winter Is Deadly */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Winter Is Deadly
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick winters are among the harshest in Canada. Temperatures regularly 
            plunge below -20°C, with wind chill values reaching -35°C or colder. For the 
            1,500+ chronically homeless, winter is not just uncomfortable — it is a 
            <strong className="text-white"> death sentence</strong>.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Emergency shelters operate at or above capacity throughout the winter months. 
            In Moncton, the only permanent emergency shelter has 70 beds for 830 unhoused 
            people. The city has relied on temporary &quot;warming centres&quot; — often 
            church basements or community centres — that operate only on the coldest nights 
            and close during the day, forcing people back onto frozen streets.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Hypothermia, frostbite, and cold-related deaths among the unhoused are 
            <strong className="text-white"> systematically underreported</strong>. Without a permanent address, 
            victims often die alone in camps, under bridges, or in abandoned buildings. 
            Their deaths are attributed to &quot;exposure&quot; in police reports that 
            never make headlines.
          </p>
        </section>

        {/* Winter Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=80" 
            alt="Winter conditions representing the housing crisis for New Brunswick's unhoused population"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
            Winter conditions make the housing crisis deadly — over 100 unhoused deaths in 2025 from exposure and toxic supply
          </div>
        </div>

        {/* Quote Block */}
        <QuoteBlock
          quote="People are freezing to death in a province with more trees than people, more empty buildings than homeless individuals. The problem isn't resources — it's political will."
          author="Front-Line Worker"
          role="Moncton Emergency Shelter"
          color="red"
        />

        {/* Section 4: The NB Power Squeeze */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6 uppercase tracking-tighter italic">
            The NB Power Squeeze
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Compounding the housing crisis, relentless NB Power rate
            hikes—approved by a captured regulatory board—are pushing families
            into energy poverty. While massive industrial users in the &quot;Company
            Province&quot; receive heavily subsidized rates, residential users are
            forced to choose between heating and eating.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            NB Power has requested <strong className="text-white">rate increases of up to 50% over the next six years</strong>, 
            with residential customers already facing a cumulative 19.4% hike. For 
            a household earning $40,000/year and paying $300/month in electricity, 
            a 50% increase means an additional <strong className="text-white">$1,800 per year</strong> — enough to 
            make the difference between affording rent and being evicted.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            One in four New Brunswick households already suffers from <strong className="text-white">&quot;energy poverty,&quot;</strong> 
            defined as spending more than 6% of household income on energy costs. 
            In rural areas, where homes are older and less insulated, and where 
            residents depend on electric heating, the burden is even higher. The 
            province offers limited efficiency programs, but waiting lists stretch 
            for years.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Meanwhile, Irving Paper received a <strong className="text-white">$45 million &quot;tariff relief&quot; grant</strong> from the 
            provincial government — funded by the same ratepayers struggling to 
            heat their homes. The message is clear: corporations get subsidies; 
            citizens get rate hikes.
          </p>
        </section>

        {/* Section 5: Government Response — Or Lack Thereof */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Government Response: Studies, Not Solutions
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Faced with a homelessness crisis that has grown by <strong className="text-white">300% since 2020</strong>, 
            the provincial government has responded primarily with studies, committees, 
            and plans. The &quot;Overcoming Poverty Together 4&quot; strategy (2025-2030) 
            outlines aspirational goals but provides no new funding for emergency 
            shelters or social housing construction.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The federal government&apos;s Rapid Housing Initiative allocated funds to 
            New Brunswick, but provincial coordination has been slow. Projects that 
            should take months to approve take years. Modular housing solutions — 
            proven effective in other provinces — have been met with zoning resistance 
            and political foot-dragging.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Municipal governments, which bear the direct cost of homelessness through 
            policing, emergency services, and bylaw enforcement, have repeatedly 
            asked the province for more support. The province&apos;s response: 
            &quot;We acknowledge the issue.&quot;
          </p>
        </section>

        {/* Section 6: The Human Cost */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            The Human Cost
          </h2>
          
          <div className="grid gap-6">
            <CaseStudy
              type="fatality"
              date="FEB 2026"
              title="Fredericton Encampment Death"
              location="Fredericton, NB"
              content="A 42-year-old man was found dead in his tent at a Fredericton encampment after a week of -30°C temperatures. He had been on the waitlist for social housing for 14 months."
              status="DECEASED"
            />
            <CaseStudy
              type="fatality"
              date="DEC 2025"
              title="Moncton Overdose Cluster"
              location="Moncton, NB"
              content="Five unhoused individuals died from carfentanil-laced drugs in a single week in downtown Moncton. Harm reduction workers had warned of the contaminated supply for months."
              status="DECEASED"
            />
            <CaseStudy
              type="fatality"
              date="AUG 2025"
              title="Saint John Renoviction Victim"
              location="Saint John, NB"
              content="A 67-year-old woman on disability support was renovicted from her apartment of 22 years. Unable to find housing at her benefit rate, she lived in her car for three months before being hospitalized for malnutrition."
              status="HOSPITALIZED"
            />
            <CaseStudy
              type="fatality"
              date="JAN 2026"
              title="Youth Aging Out of Care"
              location="Provincial-wide"
              content="A 19-year-old who aged out of the foster care system at 18 was found sleeping under the Westmorland Street Bridge in Fredericton. She had no transition support and had been homeless for 8 months."
              status="ONGOING"
            />
          </div>
        </section>

        {/* Housing Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Crisis Timeline
          </h2>
          <Timeline items={housingTimeline} className="mt-8" />
        </section>

        {/* Second Image: Urban Decay */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80" 
            alt="Urban decay and abandoned buildings representing the housing infrastructure crisis"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
            Abandoned properties sit empty while 1,500+ sleep outside — the market has failed
          </div>
        </div>

        {/* Quote Block 2 */}
        <QuoteBlock
          quote="We're not asking for handouts. We're asking for a system that doesn't treat housing as a luxury. People are dying because we've decided profits matter more than human lives."
          author="Community Advocate"
          role="Saint John Housing Network"
          color="gold"
        />

        {/* External Links */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mt-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Resources & Data</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="organization" title="Human Development Council: Research & Reports" url="https://sjhdc.ca/research-and-reports/" description="Homelessness and poverty data for Greater Saint John" />
            <SourceCard type="pdf" title="NB Government: Overcoming Poverty Together 4 (2025-2030)" url="https://www2.gnb.ca/content/dam/gnb/Departments/esic/pdf/overcoming-poverty-4-2025-2030.pdf" description="Official provincial poverty reduction strategy" date="2025" />
            <SourceCard type="report" title="National Advisory Council on Poverty: 2025 Annual Report" url="https://www.canada.ca/en/employment-social-development/programs/poverty-reduction/national-advisory-council/reports/2025-annual.html" description="Federal report with NB-specific data" date="2025" />
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High' — Housing & Poverty Linked" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="February 2026 HDC report coverage" date="FEB 2026" />
            <SourceCard type="pdf" title="Campaign 2000: 2025 NB Child and Family Poverty Report Card" url="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" description="Full poverty breakdown by region" date="FEB 2026" />
            <SourceCard type="organization" title="NB Housing" url="https://www.gnb.ca/housing" description="Provincial housing authority" />
          </div>
        </section>
      </div>

      
      <RelatedPages pages={[
        { href: '/healthcare', title: 'Healthcare Collapse', description: '238K without family doctors. 2,199 ER deaths.' },
        { href: '/child-poverty', title: 'Child Poverty', description: 'Housing crisis drives child poverty to record levels.' },
        { href: '/climate-energy', title: 'Energy Poverty', description: '50% NB Power rate hikes push families into homelessness.' }
      ]} />

      <CTASection
        icon={Home}
        title="No One Should Freeze Outside."
        description="Housing is a human right, not a commodity. Join our call for immediate investment in deeply affordable social housing and an end to corporate landlord profiteering."
        buttonText="Mobilize"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
