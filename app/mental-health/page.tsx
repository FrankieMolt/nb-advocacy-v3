import { Metadata } from "next";
import Image from "next/image";
import { Brain, AlertTriangle, Clock, Users, Pill, Stethoscope } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mental Health Crisis: Waiting Days for Care, Dying in ERs",
  description: "NB has among the worst mental health services in Canada. People wait days in ERs for mental health beds. Severe shortage of psychiatrists, psychologists, and social workers. Opioid crisis ravaging rural communities.",
  keywords: "mental health New Brunswick, psychiatric care, ER mental health, opioid crisis NB, youth mental health, psychiatrist shortage, NB healthcare crisis",
  alternates: { canonical: "https://nbreform.ca/mental-health/" },
  openGraph: {
    title: "NB's Mental Health Crisis: Failed by a Broken System | Reform NB",
    description: "Among the worst mental health services in Canada. Days-long ER waits for psychiatric beds. Crisis-level shortages of mental health professionals. The crisis no one is fixing.",
    images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200", width: 1200, height: 675, alt: "Empty hospital corridor representing mental health crisis" }],
  },
};

const mentalHealthStats = [
  { value: "Worst", label: "In Canada", sublabel: "NB among the provinces with poorest mental health service access" },
  { value: "Days", label: "ER Waits", sublabel: "Patients waiting days in emergency rooms for mental health beds" },
  { value: "Crisis", label: "Youth Services", sublabel: "Crisis-level shortage of child and adolescent psychiatrists" },
  { value: "Severe", label: "Staff Shortage", sublabel: "Critical shortage of psychologists, psychiatrists, and social workers" },
];

const keyFacts = [
  { icon: "warning" as const, title: "Community Mental Health Underfunded", description: "NB's mental health spending heavily skewed toward hospital-based care while community services remain chronically underfunded.", source: "NB Health (2014)" },
  { icon: "warning" as const, title: "Psychiatrist Shortage Declared", value: "Months-long waits", description: "Province acknowledges critical shortage of psychiatrists, especially in rural areas. Wait lists for psychiatric assessments grow to months.", source: "NB Government (2018)" },
  { icon: "warning" as const, title: "COVID-19 Mental Health Surge", description: "Pandemic drives massive increase in demand for mental health services. Existing system overwhelmed. Youth mental health referrals spike.", source: "CMHA NB (2020-2022)" },
  { icon: "warning" as const, title: "Opioid Deaths Accelerate", description: "Fentanyl and carfentanil drive overdose deaths in NB, particularly in rural communities. Emergency response stretched thin.", source: "NB Health (2023)" },
  { icon: "warning" as const, title: "ER Psychiatric Boarding Crisis", value: "48-72hr waits", description: "Reports emerge of mental health patients waiting multiple days in ER hallways for inpatient psychiatric beds. Staff burnout reaches critical levels.", source: "CBC (2024)" },
  { icon: "warning" as const, title: "Youth Psychiatry Waitlist Grows", value: "12+ months", description: "Child and adolescent psychiatrist waitlists exceed 12 months in many regions. Families told to travel to other provinces for care.", source: "CBC (2025)" },
  { icon: "warning" as const, title: "System at Breaking Point", description: "NB remains among worst provinces for mental health service access. Staff recruitment failing. Rural communities effectively without services.", source: "Reform NB (2026)" },
];

export default function MentalHealthPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Brain}
        title="Mental Health Crisis"
        quote="People are waiting days in emergency rooms just to see a psychiatrist. Children are on waitlists for over a year. And the opioid crisis is killing people in rural communities that don't even have a counsellor."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" 
          alt="Empty hospital corridor representing the mental health crisis in New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Patients wait days in emergency rooms for psychiatric beds — a system at breaking point
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalHealthStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* ER Crisis */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">ER Waiting Room</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              In New Brunswick, people experiencing a <strong className="text-white">mental health crisis</strong> often end up in hospital emergency rooms — sometimes for <strong className="text-white">days</strong> — waiting for a psychiatric bed that doesn't exist. These patients are not receiving treatment. They are boarding. Sitting in hallways, in beds meant for heart attacks and broken bones, because the mental health system has no room for them.
            </p>
            <p>
              NB's emergency rooms are already among the most overburdened in Canada. With a <strong className="text-white">12.9% walkout rate</strong> — the third highest in the country — patients routinely leave without being seen. For psychiatric patients, the situation is even worse: the province lacks sufficient inpatient beds, so patients are held in ERs under observation, sometimes in restraints, sometimes sedated, waiting for a transfer that may take days.
            </p>
            <p>
              The <strong className="text-white">Horizon Health Network</strong> and <strong className="text-white">Vitalité Health Network</strong> operate the province's psychiatric services, but both are hampered by a lack of psychiatrists, nurses, and social workers. Rural hospitals often have no psychiatric coverage at all — meaning a person in crisis in Campbellton or Edmundston may need to be transported hundreds of kilometers to Moncton or Saint John.
            </p>
          </div>

          <QuoteBlock
            quote="We see patients who come in suicidal and end up waiting 48, 72 hours in the ER before they even see a psychiatrist. That's not care. That's warehousing."
            author="Emergency room physician, NB hospital"
          />
        </div>
      </section>

      {/* Workforce Shortage */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            No One to <span className="text-white">Help</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              The root of NB's mental health crisis is a <strong className="text-white">severe shortage of mental health professionals</strong>. The province has among the lowest ratios of psychiatrists, psychologists, and social workers per capita in Canada. Rural areas are the hardest hit — entire regions function without a single psychiatrist.
            </p>
            <p>
              <strong className="text-white">Psychiatrists:</strong> Wait times for non-urgent psychiatric referrals can exceed 12 months. Even urgent cases may wait weeks. The province has struggled to recruit and retain psychiatrists, competing with better-funded systems in Ontario, Quebec, and British Columbia.
            </p>
            <p>
              <strong className="text-white">Psychologists:</strong> Private psychologists charge $200+ per session — unaffordable for most New Brunswickers, especially with no provincial insurance coverage. Community mental health centres have long waitlists, often 6-18 months for non-crisis services.
            </p>
            <p>
              <strong className="text-white">Social Workers:</strong> Hospitals and community services are chronically short-staffed. Social workers in mental health settings manage caseloads double or triple the recommended standard. Burnout is endemic, driving further attrition from the system.
            </p>
            <p>
              The result: a system where people in need can't access care until they're in crisis — and then the crisis system itself is overwhelmed. It is a vicious cycle that disproportionately affects the poor, the rural, and the vulnerable.
            </p>
          </div>
        </div>
      </section>

      {/* Section Break Image */}
      <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80" 
          alt="Healthcare worker representing the mental health workforce shortage"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Critical shortage of mental health professionals — entire regions without a single psychiatrist
        </div>
      </div>

      {/* Youth Mental Health */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            <span className="text-white">Children</span> Left Behind
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              NB is experiencing a <strong className="text-white">crisis-level shortage</strong> of child and adolescent psychiatrists. Youth mental health referrals have surged since the pandemic, but the province's capacity to respond has not kept pace. Families report waiting <strong className="text-white">over a year</strong> for their children to see a specialist.
            </p>
            <p>
              For children and teenagers in crisis, the consequences of these delays are devastating. Untreated anxiety, depression, eating disorders, and self-harm escalate while families wait. Some are told to travel to Halifax or even further for care — an impossibility for families in northern or rural NB without the financial means.
            </p>
            <p>
              Schools are overwhelmed too. <strong className="text-white">School counsellors</strong> — already stretched thin — are often the first point of contact for youth in distress. But ratios of counsellors to students in NB far exceed recommended standards, meaning many children fall through the cracks before they ever reach the mental health system.
            </p>
          </div>

          <QuoteBlock
            quote="My daughter was 13 when she started having panic attacks. It took 14 months to get her an appointment with a child psychiatrist. By then, she had stopped going to school entirely."
            author="Parent, Northern NB"
          />
        </div>
      </section>

      {/* Opioid Crisis */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">Opioid</span> Emergency
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              The <strong className="text-white">opioid crisis</strong> has hit New Brunswick's communities hard — particularly in <strong className="text-white">rural areas</strong> where addiction services are virtually non-existent. Fentanyl and carfentanil have driven overdose deaths to record levels, with toxic supply making every use potentially fatal.
            </p>
            <p>
              NB's response has been criticized as inadequate. <strong className="text-white">Naloxone distribution</strong> has expanded but remains insufficient. <strong className="text-white">Supervised consumption sites</strong> — proven to reduce deaths in other provinces — have been resisted by provincial governments. <strong className="text-white">Treatment access</strong> is limited: long wait times for addiction treatment mean people seeking help are told to wait weeks or months, often relapsing before they can be seen.
            </p>
            <p>
              Rural communities are the hardest hit. With no local addiction services, no psychiatrists, and often no counsellors at all, people struggling with substance use have nowhere to turn. The stigma of addiction compounds the problem — families suffer in silence while the death toll climbs.
            </p>
            <p>
              The intersection of the <strong className="text-white">mental health crisis</strong> and the <strong className="text-white">opioid crisis</strong> cannot be ignored. Many people self-medicate untreated mental illness with substances, creating a dual diagnosis that NB's fragmented system is unable to address.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Mental Health: Key Facts
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Mental Health: Key Facts" />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="CBC: Youth mental health a genuine crisis in NB" url="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-child-advocate-youth-mental-health-1.7100000" description="Child advocate report: youth mental health system overwhelmed" date="2025" />
            <SourceCard type="article" title="CBC: RCMP and mental health workers test joint patrols" url="https://www.cbc.ca/news/canada/new-brunswick/rcmp-moncton-mental-health-9.701719" description="New approach to mental health crisis response in Moncton" date="2025" />
            <SourceCard type="article" title="Canadian Mental Health Association — NB Division" url="https://cmhanb.ca/" description="Mental health advocacy and services in New Brunswick" />
            <SourceCard type="article" title="NB Department of Health — Mental Health Services" url="https://www2.gnb.ca/content/gnb/en/departments/health.html" description="Provincial mental health policy and planning" />
            <SourceCard type="article" title="Horizon Health Network" url="https://www.horizonnb.ca/" description="Regional health authority operating psychiatric services in southern/eastern NB" />
            <SourceCard type="article" title="Vitalité Health Network" url="https://www.vitalitenb.ca/" description="Regional health authority operating psychiatric services in northern/western NB" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="People Are Dying While They Wait"
        description="NB's mental health system is failing. ER waits. No psychiatrists. Opioid deaths. Rural communities abandoned. Demand better."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
