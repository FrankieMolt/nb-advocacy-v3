import { Metadata } from "next";
import Image from "next/image";
import { Baby, AlertTriangle, Home, Utensils, Landmark, Users } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Child Poverty: 32,140 Children Living in Poverty in NB",
  description: "21.9% child poverty rate in New Brunswick. 32,140 children in poverty. 51.2% on Indigenous reserves. 47.8% in single-parent households. NB has the highest HST in Canada at 15%.",
  keywords: "child poverty New Brunswick, Campaign 2000, poverty rate, Indigenous poverty, food insecurity, child welfare, Campbellton poverty, single parent poverty",
  alternates: { canonical: "https://reformnb.ca/child-poverty/" },
  openGraph: {
    title: "32,140 Children in Poverty: NB's Shame | Reform NB",
    description: "One in five children lives in poverty in New Brunswick. On Indigenous reserves, it's one in two. This is a policy choice — not an inevitability.",
    images: [{ url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200", width: 1200, height: 675, alt: "Child in poverty representing NB's crisis" }],
  },
};

const povertyStats = [
  { value: "21.9%", label: "Child Poverty Rate", sublabel: "32,140 children living in poverty in NB (2023 data)" },
  { value: "21.9%", label: "Child Poverty Rate", sublabel: "Highest in Canada. Campbellton 41.2%. Indigenous reserves 51.2%." },
  { value: "41.2%", label: "Campbellton Rate", sublabel: "Highest child poverty rate in the province" },
  { value: "51.2%", label: "Indigenous Reserves", sublabel: "More than half of children on reserves live in poverty" },
  { value: "47.8%", label: "Single-Parent Homes", sublabel: "vs 11.3% in two-parent households" },
];

const keyFacts = [
  { icon: "document" as const, title: "Parliament Pledges to End Child Poverty", value: "1989", description: "Canadian Parliament unanimously passes motion to eliminate child poverty by 2000. The deadline passes with little progress.", source: "Parliament of Canada" },
  { icon: "document" as const, title: "Campaign 2000 Founded", value: "2000", description: "National coalition forms to track progress on child poverty. NB consistently ranks among worst provinces.", source: "Campaign 2000" },
  { icon: "warning" as const, title: "NB Child Poverty: ~20%", value: "~20%", description: "Despite economic growth, NB's child poverty rate remains stubbornly high. Northern and rural regions hardest hit.", source: "HDC (2015)" },
  { icon: "warning" as const, title: "COVID-19 Deepens Poverty", description: "Pandemic disproportionately impacts low-income families. Food bank usage surges across NB. School meal programs disrupted.", source: "CBC (2020)" },
  { icon: "warning" as const, title: "Rate Unchanged at 21.9%", value: "21.9%", description: "Human Development Council reports child poverty rate holding steady despite economic recovery rhetoric.", source: "HDC (2022)" },
  { icon: "warning" as const, title: "Campaign 2000 Report Card", value: "32,140 children", description: "Report confirms 32,140 children in poverty. 41.2% in Campbellton. 51.2% on Indigenous reserves. 'Alarmingly high and not improving.'", source: "Campaign 2000 (Feb 2026)" },
];

export default function ChildPovertyPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Baby}
        title="Child Poverty"
        quote="Whatever way you measure it, poverty rates remain unacceptably high and also not improving."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80" 
          alt="Child representing the 32,140 children living in poverty in New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          32,140 children in poverty — one in five New Brunswick kids. On Indigenous reserves, it&apos;s one in two.
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {povertyStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">32,140 Children</span> in Poverty
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              According to the <strong className="text-white">February 2026 Campaign 2000 Report Card</strong>, compiled by the Human Development Council, New Brunswick has a <strong className="text-white">21.9% child poverty rate</strong> — meaning nearly <strong className="text-white">one in five children</strong> lives below the poverty line. That's 32,140 children.
            </p>
            <p>
              NB has the <strong className="text-white">fourth highest child poverty rate</strong> among Canadian provinces. The rate was unchanged from 2022 to 2023 — the most recent data available — suggesting that despite government rhetoric about economic growth and opportunity, the benefits are not reaching the province's most vulnerable.
            </p>
            <p>
              As social researcher Heather Atcheson of the Human Development Council explained, childhood poverty leads to <strong className="text-white">"chronic stress, poor health outcomes, and long-term developmental impacts that can carry with them through life."</strong> These are not just numbers — they are children whose futures are being shaped by policy choices right now.
            </p>
          </div>

          <QuoteBlock
            quote="Whatever way you measure it, poverty rates remain unacceptably high and also not improving."
            author="Liam Fisher, Human Development Council"
          />
        </div>
      </section>

      {/* Geography of Poverty */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">Geography</span> of Poverty
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              Child poverty in New Brunswick is not evenly distributed. It is concentrated in specific communities — and the patterns reveal deep structural inequalities.
            </p>
            <p>
              <strong className="text-white">Campbellton</strong> has the highest child poverty rate in the province at <strong className="text-white">41.2%</strong> — more than double the provincial average. This northern NB community has been hit by mill closures, population decline, and chronic underinvestment.
            </p>
            <p>
              <strong className="text-white">Saint John</strong>, NB's largest city, has a 30.7% rate — but specific wards tell a grimmer story. <strong className="text-white">Ward 3</strong> has a 44.8% child poverty rate, among the highest in Atlantic Canada.
            </p>
            <p>
              On <strong className="text-white">Indigenous reserves</strong>, the rate is <strong className="text-white">51.2%</strong> — more than half of all children live in poverty. This is a direct legacy of colonial policy, underfunding of reserve infrastructure, and inadequate federal transfer payments.
            </p>
            <p>
              The pattern is clear: poverty in NB follows the lines of geography, race, and family structure. Northern communities, Indigenous communities, and single-parent households bear the heaviest burden.
            </p>
          </div>
        </div>
      </section>

      {/* Single-Parent Households */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Single Parents</span> Under Siege
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              In NB, <strong className="text-white">47.8% of children</strong> in single-parent households live in poverty — compared to just <strong className="text-white">11.3%</strong> in two-parent households. This four-fold gap reflects systemic failures in childcare, social assistance, and workforce support.
            </p>
            <p>
              Single parents — overwhelmingly mothers — face a impossible math: NB has the <strong className="text-white">highest HST in Canada at 15%</strong>, making every dollar of income worth less. Childcare costs consume a massive share of earnings. Social assistance rates are set below the poverty line, creating a welfare trap where taking a low-wage job can actually reduce total household income.
            </p>
            <p>
              The province's <strong className="text-white">$10/day childcare</strong> program has expanded access, but availability remains a challenge in rural areas and for non-standard work hours. Without affordable, accessible childcare, single parents are locked out of the workforce and locked into poverty.
            </p>
          </div>

          <QuoteBlock
            quote="This experience can lead to things like chronic stress, poor health outcomes, and long-term developmental impacts that can carry with them through life."
            author="Heather Atcheson, Human Development Council"
          />
        </div>
      </section>

      {/* Section Break Image */}
      <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=1200&q=80" 
          alt="Empty plate representing child food insecurity in New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Food insecurity rising — school meals may be the only reliable meal for children in poverty
        </div>
      </div>

      {/* Food Insecurity */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Hungry</span> Children
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              <strong className="text-white">Food insecurity</strong> is rising across New Brunswick. Food bank usage has surged in recent years, with demand far outstripping supply. The <strong className="text-white">15% HST</strong> — the highest provincial sales tax in Canada — makes food and essentials more expensive for families already struggling.
            </p>
            <p>
              School meal programs, where they exist, are a lifeline. But coverage is inconsistent — many schools lack breakfast or lunch programs, and funding depends on patchwork community donations rather than stable government support. For children in poverty, a school meal may be their only reliable meal of the day.
            </p>
            <p>
              The top 10% of NB families hold <strong className="text-white">22.9% of total income</strong>, while the bottom 10% hold just <strong className="text-white">1.6%</strong>. This extreme inequality — a Gini coefficient that worsens year after year — is the structural cause of child poverty. It is not inevitable. It is a policy choice.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Child Poverty: Key Facts
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Child Poverty: Key Facts" />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="Campaign 2000: 2025 NB Report Card (Feb 2026)" url="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" description="Full report on child and family poverty in New Brunswick" />
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High' (Feb 2026)" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="Human Development Council report coverage with data breakdown" />
            <SourceCard type="article" title="Campaign 2000 — National Coalition" url="https://campaign2000.ca/" description="National coalition tracking child poverty across Canada since 1989" />
            <SourceCard type="article" title="Human Development Council" url="https://sjhdc.ca/" description="Social research organization serving Saint John and NB" />
            <SourceCard type="article" title="NB Social & Economic Inclusion Dashboard" url="https://www.nbtogether.ca/gendashboard" description="Provincial data on poverty, employment, and inclusion indicators" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="32,140 Children Can't Wait"
        description="One in five children in poverty. One in two on Indigenous reserves. This is a policy choice. Demand change."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
