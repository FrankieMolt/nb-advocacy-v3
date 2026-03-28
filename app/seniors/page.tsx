import { Metadata } from "next";
import Image from "next/image";
import { HeartPulse, AlertTriangle, Building2, Home, MapPin, Clock } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Seniors Care: Nursing Home Crisis, Underfunded Home Care",
  description: "NB has an aging population and a severe shortage of nursing home beds. Home care workers paid poverty wages. Rural seniors isolated. Palliative care access varies by region. A system in crisis.",
  keywords: "seniors care New Brunswick, nursing home shortage, home care, palliative care, aging population, nursing home waitlist, rural seniors isolation",
  alternates: { canonical: "https://nbreform.ca/seniors/" },
  openGraph: {
    title: "Growing Old in NB: Abandoned by a Broken System | Reform NB",
    description: "Severe nursing home bed shortage. Underfunded home care with workers earning poverty wages. Rural seniors isolated without services. Palliative care that depends on your postal code.",
    images: [{ url: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200", width: 1200, height: 675, alt: "Senior care representing NB's aging crisis" }],
  },
};

const seniorsStats = [
  { value: "Oldest", label: "Median Age", sublabel: "NB has one of the oldest median ages in Canada" },
  { value: "Severe", label: "Bed Shortage", sublabel: "Nursing home waitlists stretch for months or years" },
  { value: "Poverty", label: "Wage Levels", sublabel: "Home care workers among the lowest paid in healthcare" },
  { value: "Rural", label: "Isolation", sublabel: "Seniors in rural NB face critical lack of services" },
];

const keyFacts = [
  { icon: "warning" as const, title: "Aging Population Crisis", value: "45+", description: "NB's median age above 45 — fastest aging population in Canada. Dependency ratio worsening.", source: "Statistics Canada" },
  { icon: "warning" as const, title: "Nursing Home Waitlist", value: "1,006", description: "Waitlists for nursing home beds exceed capacity. Hundreds of seniors in hospital beds waiting for placement (ALC patients).", source: "NB Dept. of Social Development" },
  { icon: "warning" as const, title: "COVID-19 Devastates Long-Term Care", description: "Pandemic exposes fatal vulnerabilities in nursing homes. Outbreaks, deaths, staff shortages.", source: "CBC" },
  { icon: "money" as const, title: "Home Care Worker Shortage", value: "Poverty wages", description: "Home care agencies unable to recruit enough workers at prevailing wages. Rural areas lose services entirely.", source: "CUPE NB" },
  { icon: "warning" as const, title: "Palliative Care Gaps", description: "Wide regional disparities in palliative and end-of-life care. Rural patients dying without access.", source: "NB Health" },
  { icon: "building" as const, title: "Oromocto Nursing Home Opens", value: "No impact on waitlist", description: "New facility joins 'Nursing Home Without Walls' program. Province acknowledges it won't reduce existing waitlist.", source: "GNB (Mar 2026)" },
  { icon: "warning" as const, title: "System Under Strain", description: "Growing senior population, insufficient beds, underpaid home care workers, rural isolation. System capacity failing to keep pace.", source: "Reform NB" },
];

export default function SeniorsPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={HeartPulse}
        title="Seniors Care"
        quote="We built this province. We worked, we paid taxes, we raised families. And now when we need help, there's nothing. No beds, no workers, no care."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200&q=80" 
          alt="Senior care representing New Brunswick's aging population crisis"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          1,006 on nursing home waitlists — 471 blocking hospital beds while the system fails
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorsStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* Nursing Home Crisis */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">No Room</span> at the End
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              New Brunswick has one of the <strong className="text-white">oldest populations in Canada</strong> — and one of the most severe shortages of nursing home beds. Seniors who need long-term care face waitlists that stretch for <strong className="text-white">months or even years</strong>. Many die before a bed becomes available.
            </p>
            <p>
              Those who are waiting occupy <strong className="text-white">acute care hospital beds</strong> — a phenomenon known as <strong className="text-white">ALC (Alternate Level of Care)</strong> patients. In NB, ALC patients occupy over <strong className="text-white">40% of inpatient beds</strong>, far exceeding the target. These are seniors who don't need hospital care but have nowhere else to go, blocking beds needed for surgeries, emergencies, and acute treatment.
            </p>
            <p>
              In <strong className="text-white">March 2026</strong>, a new nursing home opened in <strong className="text-white">Oromocto</strong>, joining the province's "Nursing Home Without Walls" program. The facility was welcomed — but the province itself acknowledged it <strong className="text-white">won't reduce the existing waitlist</strong>. Demand is growing faster than supply, and new builds only scratch the surface of the backlog.
            </p>
            <p>
              The problem is not just physical beds — it's the <strong className="text-white">workforce</strong>. Nursing homes cannot hire enough registered nurses, licensed practical nurses, and personal support workers at the wages being offered. Staff turnover is high. Burnout is endemic. The quality of care in some facilities has declined to the point where families fear placing their loved ones.
            </p>
          </div>

          <QuoteBlock
            quote="My mother waited 14 months for a nursing home bed. She spent those months in a hospital hallway. She was 87. The hospital needed the bed. There was nowhere for her to go."
            author="Family member, Southern NB"
          />
        </div>
      </section>

      {/* Home Care */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Underfunded</span> Home Care
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              <strong className="text-white">Home care</strong> is supposed to be the alternative — allowing seniors to age in place, maintaining independence while receiving essential services. In NB, home care is <strong className="text-white">chronically underfunded</strong> and unable to meet demand.
            </p>
            <p>
              <strong className="text-white">Home care workers</strong> — the people who bathe, feed, and care for NB's seniors — are among the <strong className="text-white">lowest paid workers in the healthcare system</strong>. Many earn barely above minimum wage. The result is predictable: recruitment is difficult, turnover is high, and rural areas often go without any home care services at all.
            </p>
            <p>
              The province's home care program provides a limited number of hours per week for eligible seniors. But the hours allocated often fall far short of what's needed, forcing families to fill the gap — taking time off work, reducing their own income, or paying out-of-pocket for private care they can't afford.
            </p>
            <p>
              For seniors living alone — especially in rural areas — the lack of home care services is not just an inconvenience. It's a <strong className="text-white">safety issue</strong>. Falls go unreported. Medications are missed. Malnutrition sets in. Without regular visits, isolated seniors can deteriorate rapidly with no one noticing.
            </p>
          </div>
        </div>
      </section>

      {/* Section Break Image */}
      <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80" 
          alt="Rural road representing the isolation of seniors in rural New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Rural seniors face a double burden — older populations with fewer services, trapped by distance
        </div>
      </div>

      {/* Rural Isolation */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Forgotten</span> in Rural NB
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              Rural New Brunswick's seniors face a <strong className="text-white">double burden</strong>: they are older on average than urban residents, and they have far fewer services available to them. As younger people leave rural communities for cities, the remaining population skews older and more dependent — while the services they need are the first to be cut.
            </p>
            <p>
              <strong className="text-white">Transportation</strong> is a critical barrier. Seniors in rural NB often live far from hospitals, clinics, and pharmacies. Many can no longer drive and have no access to public transit. A simple medical appointment can mean arranging a ride from family — if family is available — or going without.
            </p>
            <p>
              <strong className="text-white">Isolation</strong> itself is a health crisis. Studies consistently show that loneliness in seniors is as damaging as smoking 15 cigarettes a day. In rural NB, where neighbours may be kilometers apart and community gathering places have closed, isolation is endemic.
            </p>
            <p>
              The province's response has been to centralize services in regional hubs — making access easier for those in Moncton, Saint John, and Fredericton, while leaving rural seniors with less than ever. This is not just a failure of healthcare. It is a failure of the social contract.
            </p>
          </div>

          <QuoteBlock
            quote="In our community, the nearest nursing home is 90 minutes away. The nearest hospital is an hour. If you can't drive, you're trapped. That's the reality for seniors in rural NB."
            author="Community advocate, Northern NB"
          />
        </div>
      </section>

      {/* Palliative Care */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Dignity</span> Denied
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              <strong className="text-white">Palliative care</strong> — the specialized care for people with terminal illnesses — varies wildly across New Brunswick. Access depends heavily on where you live, what resources your local health authority has, and whether you can afford private options.
            </p>
            <p>
              In urban centres, palliative care units exist within hospitals and some community settings. But in rural NB, palliative patients are often <strong className="text-white">left without specialized support</strong>. Home-based palliative care — which allows people to die with dignity in familiar surroundings — requires trained staff, equipment, and coordination that rural health networks simply don't have.
            </p>
            <p>
              The result is that many seniors in NB die in <strong className="text-white">acute care hospital beds</strong> — not because that's where they wanted to be, but because no alternative existed. The lack of palliative care infrastructure means suffering is prolonged, families are unsupported, and healthcare resources are consumed by end-of-life care that could be provided more humanely and more cheaply elsewhere.
            </p>
            <p>
              <strong className="text-white">Medical Assistance in Dying (MAID)</strong> adds another dimension. Access to MAID requires assessors and providers — both of which are scarce in rural NB. Seniors seeking this option may face delays and barriers that defeat the purpose of the legislation.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Seniors Care: Key Facts
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Seniors Care: Key Facts" />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="GNB: New Oromocto Nursing Home (Mar 2026)" url="https://www.gnb.ca/en/news/n-b.2026.03.official-opening-of-new-nursing-home-in-oromocto.html" description="Official opening of new nursing home in Oromocto, joining Nursing Home Without Walls program" />
            <SourceCard type="article" title="NB Department of Social Development" url="https://www2.gnb.ca/content/gnb/en/departments/social_development.html" description="Provincial long-term care and home support policy" />
            <SourceCard type="article" title="CBC: No new nursing home plans approved since Liberals took office" url="https://www.cbc.ca/news/canada/new-brunswick/nursing-home-building-waitlist-9.7000000" description="3-year waitlist for nursing homes, no new approvals" date="2025" />
            <SourceCard type="article" title="CBC: New Oromocto nursing home will not really cut waitlist" url="https://www.cbc.ca/news/canada/new-brunswick/new-nursing-home-in-oromocto-9.7128000" description="60-bed facility opens but minister admits impact limited" date="MAR 2026" />
            <SourceCard type="article" title="CBC: NB Healthcare Coverage" url="https://www.cbc.ca/news/canada/new-brunswick" description="Ongoing coverage of seniors care, nursing home, and home care issues in NB" />
            <SourceCard type="article" title="CUPE NB — Long-Term Care Workers" url="https://nb.cupe.ca/" description="Union representing ~30,000 NB healthcare and long-term care workers" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="Growing Old Shouldn't Mean Being Forgotten"
        description="No nursing home beds. Underpaid caregivers. Rural isolation. Palliative care that depends on your postal code. Demand better for NB's seniors."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
