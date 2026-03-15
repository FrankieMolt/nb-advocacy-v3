import { Metadata } from "next";
import { Activity, AlertTriangle } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { CaseStudy } from "@/components/CaseStudy";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { VideoGrid } from "@/components/VideoGrid";
import { SourceCard } from "@/components/SourceCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Healthcare Collapse | Reform NB",
  description:
    "Exposing the fatal failure of the New Brunswick healthcare system. Documenting waiting room deaths, negligence settlements, the $173.9M travel nurse scandal, and the systemic abandonment of patients.",
};

const healthcareTimeline = [
  { date: "JULY 2022", title: "Darrell Mesheau Dies Waiting", description: "78-year-old dies at Chalmers ER in Fredericton after a 7-hour wait. Family later files negligence lawsuit.", color: "red" as const },
  { date: "DEC 2022", title: "Edmundston Waiting Room Death", description: "70-year-old man dies in his chair after 5-hour wait, triaged as 'Level 4'. Community demands answers.", color: "red" as const },
  { date: "2023-24", title: "Travel Nurse Spending Explodes", description: "Auditor General reveals $173.9M in untendered travel nurse contracts. Canadian Health Labs paid $300.72/hour per nurse.", color: "gold" as const },
  { date: "SEP 2025", title: "MEI Report: 63,000 Walk Out", description: "Montreal Economic Institute reveals 12.9% ER walkout rate — third highest in Canada. 41,000 from Horizon, 22,000 from Vitalité.", color: "red" as const },
  { date: "JUNE 2025", title: "Litigation Privilege Ruling", description: "Chief Justice DeWare rules 'litigation privilege' overrides Auditor General's mandate — legalizing the travel nurse cover-up.", color: "gold" as const },
  { date: "NOV 2025", title: "Mesheau Settlement Reached", description: "Family reaches settlement regarding 2022 death. Continues lobbying for 'Value of Life' legal reforms.", color: "neutral" as const },
  { date: "DEC 2025", title: "AG Report: 2,199 ER Deaths", description: "Auditor General confirms 2,199 patients pronounced deceased after arriving at NB ERs between 2020-2024. 43% not seen within safe triage.", color: "red" as const },
  { date: "FEB 2026", title: "'Regional Nursing Home' Admission", description: "Health officials admit NB hospitals have become 'regional nursing homes' — 40% of acute beds occupied by ALC seniors.", color: "red" as const },
  { date: "MAR 2026", title: "Aimee Dunn Negligence Settlement", description: "Dunn settles lawsuit after losing 35-week pregnancy at Chalmers ER. Four doctors cited for 'human errors' and 'summation of failures'.", color: "red" as const },
  { date: "MAR 2026", title: "Oromocto Nursing Home Opens", description: "New 60-bed facility opens — but Minister admits it will 'not really' reduce the existing long-term care waitlist.", color: "gold" as const },
];

const doctorShortageData = [
  { value: "238K+", label: "Without Family Doctor", sublabel: "Nearly one-third of the entire NB population lacks permanent primary care" },
  { value: "63K+", label: "ER Walkouts/Year", sublabel: "12.9% of all ER patients leave before being seen — third highest in Canada" },
  { value: "2,199", label: "ER Arrivals → Deceased", sublabel: "Patients pronounced dead after arriving at ERs, 2020-2024 (AG Report)" },
  { value: "40%", label: "Beds Blocked by ALC", sublabel: "635 seniors occupying acute care beds while awaiting long-term care" },
];

export default function HealthcarePage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Activity}
        title="Healthcare Collapse"
        quote="The system isn't just breaking; it is being actively dismantled. While the government boasts of recruitment numbers, our citizens are dying in chairs, overlooked and dismissed."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" 
          alt="Empty hospital corridor representing the healthcare crisis in New Brunswick"
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          238,000 New Brunswickers without a family doctor — patients dying in waiting rooms while the government calls it &quot;efficiency&quot;
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {doctorShortageData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: The Scale of Collapse */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Scale of Collapse
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            As of March 2026, approximately{" "}
            <strong className="text-white">238,000 New Brunswickers</strong>—nearly one-third of the
            entire population—are without a permanent family doctor or nurse
            practitioner. This is not a mere administrative backlog; it is a
            death sentence for those with chronic conditions.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            Our investigation into waitlist mortality found that{" "}
            <strong className="text-white">121 patients died</strong> while on surgical or diagnostic
            waiting lists in the 2024-2025 fiscal year alone. The province now
            faces the highest financial burden in Canada for medical waiting,
            costing patients an average of <strong className="text-white">$4,864</strong> in lost
            productivity.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            The crisis is not limited to primary care. Specialist referrals routinely take 
            <strong className="text-white"> 12 to 18 months</strong>, with some patients waiting over two years for 
            orthopedic surgery. Cancer patients report diagnostic delays of 
            <strong className="text-white"> 6 to 8 weeks</strong> for imaging that should happen within days. Each delay 
            represents a potential escalation in disease severity — a mathematical certainty that 
            some of these delays are fatal.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            New Brunswick&apos;s doctor-to-population ratio is among the worst in Canada, at 
            roughly <strong className="text-white">220 physicians per 100,000 people</strong>, compared to the national 
            average of 260. The province trains fewer doctors per capita than any other 
            province, and recruitment efforts have netted fewer than 50 new physicians annually 
            — while retirements and departures outpace arrivals. The result is a system in 
            <strong className="text-white"> terminal deficit</strong>: more patients, fewer providers, longer waits, worse outcomes.
          </p>
        </section>

        {/* Section 2: Dying in the Dark */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic">
            Dying in the Dark: Case Records
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-10">
            A December 2025 Auditor General report confirmed{" "}
            <strong className="text-white">2,199 patients</strong> were pronounced deceased after
            arriving at NB ERs between 2020 and 2024. Crucially, 43% were not
            seen within safe triage timeframes.
          </p>

          <div className="grid gap-8">
            <CaseStudy
              type="fatality"
              date="MARCH 2026"
              title="Aimee Dunn Negligence Settlement"
              location="Hanwell / Chalmers ER"
              content="Lost her 35-week pregnancy after being overlooked and dismissed in the ER. A negligence settlement was finally reached this month after years of institutional silence. Her lawyer cited 'human errors' and 'summation of failures' by four doctors."
              status="SETTLED"
            />

            <CaseStudy
              type="fatality"
              date="NOV 2025"
              title="Darrell Mesheau Settlement"
              location="Chalmers ER, Fredericton"
              content="Family reached a settlement regarding his July 2022 death after a 7-hour wait. The family continues to lobby for 'Value of Life' legal reforms."
              status="SETTLED"
            />

            <CaseStudy
              type="fatality"
              date="JULY 2025"
              title="Jonah Imeson Heart Attack Wait"
              location="Moncton ER"
              content="Forced to wait over 12 hours for a suspected heart attack. Survived only by remaining awake despite extreme agony."
              status="SURVIVED"
            />

            <CaseStudy
              type="fatality"
              date="DEC 2022"
              title="Edmundston Regional Hospital"
              location="Edmundston ER"
              content="A 70-year-old man died in his waiting room chair after a 5-hour wait while triaged as 'Level 4'."
              status="DECEASED"
            />

            <CaseStudy
              type="fatality"
              date="JAN 2023"
              title="Campbellton Regional Hospital"
              location="Campbellton ER"
              content="A 64-year-old woman with chest pains waited 8 hours before being seen. She suffered cardiac arrest in the waiting area. Staff performed CPR but she was pronounced dead."
              status="DECEASED"
            />

            <CaseStudy
              type="fatality"
              date="AUG 2024"
              title="Dr. Georges-L.-Dumont Hospital"
              location="Moncton ER (Vitalité)"
              content="A 52-year-old man presenting with stroke symptoms was triaged as non-urgent due to lack of imaging availability. He suffered a major stroke while waiting and was left with permanent brain damage."
              status="PERMANENT DISABILITY"
            />
          </div>
        </section>

        {/* Video Section */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 ER Crisis Coverage</h3>
          <VideoGrid 
            columns={1}
            videos={[
              {
                videoId: "cPWEAFGmX1U",
                title: "CBC: 41,000 New Brunswickers left Horizon ERs before being seen",
                caption: "A 2025 Montreal Economic Institute report revealed NB has the third-highest ER walkout rate in Canada."
              }
            ]}
          />
        </div>

        {/* Quote Block */}
        <QuoteBlock
          quote="We are triaging people in the parking lot. We are being told to keep quiet about unsafe ratios while millions are spent on travel agencies. It breaks my heart every shift."
          author="Whistleblower: Registered Nurse"
          role="Horizon Health Network"
          color="red"
        />

        {/* Section 3: Regional Nursing Home */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The &quot;Regional Nursing Home&quot; Failure
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In February 2026, health officials admitted New Brunswick hospitals
            have effectively become &quot;regional nursing homes.&quot;{" "}
            <strong className="text-white">40% of all acute care beds</strong> are currently occupied by
            seniors waiting for long-term care placements.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            This &quot;bed-block&quot; is the direct driver of the{" "}
            <strong className="text-white">12.9% walkout rate</strong> (over <strong className="text-white">41,000 patients</strong> from Horizon alone, plus 22,000 from Vitalité — totaling over 63,000) seen last
            year. Patients are triaged in parking lots because there is
            physically no room left.{" "}
            <a href="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-emergency-patient-leave-horizon-mei-report-vitalit%C3%A9-1.7637201" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[CBC / MEI Report, Sep 2025]</a>
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            The numbers are staggering. Horizon Health Network reported <strong className="text-white">635 ALC (Alternate Level of Care) patients</strong> occupying acute 
            hospital beds in early 2026 — nearly double the target capacity of 330. These are 
            seniors who no longer require hospital-level care but have nowhere else to go. Every 
            ALC patient in an acute bed represents an ER patient who cannot be admitted, creating 
            a cascading bottleneck that drives up wait times, walkout rates, and preventable deaths.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            A new 60-bed nursing home opened in Oromocto in March 2026 — but the Minister 
            responsible for seniors admitted it will <strong className="text-white">&quot;not really&quot;</strong> reduce 
            the existing waitlist. With the province needing thousands of new long-term care spaces, 
            not dozens, the gap between demand and capacity continues to widen. 
            <a href="https://www.cbc.ca/news/canada/new-brunswick" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[CBC NB, Mar 2026]</a>
          </p>
        </section>

        {/* Second Video */}
        <div className="my-12">
          <YouTubeEmbed
            videoId="WoKn8xhE-m4"
            title="National Post: Canada's ER 'hidden pandemic' of preventable deaths"
          />
          <p className="text-center text-sm text-neutral-500 mt-4 italic">
            National coverage of the preventable deaths occurring in Canadian emergency rooms — a crisis New Brunswick exemplifies.
          </p>
        </div>

        {/* Section 4: The Travel Nurse Scandal */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            The $173.9 Million Travel Nurse Scandal
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The <strong className="text-white">$173.9 million</strong> Travel Nurse scheme represents
            the largest transfer of public health wealth to private agencies in
            provincial history. Canadian Health Labs (CHL) was paid{" "}
            <strong className="text-white">$300.72 per hour</strong> per nurse—while local staff were
            denied living wages.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The scale of the scandal is breathtaking. For context, $173.9 million could have 
            funded <strong className="text-white">approximately 2,500 full-time nursing positions</strong> at average 
            NB salaries for an entire year. Instead, the money was funneled through a private 
            agency that charged four to five times the hourly rate of local nurses — with 
            no competitive bidding, no public tender, and no transparency.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The Auditor General&apos;s investigation revealed that the Vitalité
            health authority used &quot;litigation privilege&quot; to block
            access to internal records about the contracts. In June 2025, Chief
            Justice Tracey DeWare ruled this privilege overrides the AG&apos;s
            statutory mandate — effectively legalizing the cover-up.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 my-8">
            <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <AlertTriangle size={16} aria-hidden="true" /> Key Revelations
            </h4>
            <ul className="space-y-3 text-neutral-300 text-sm" role="list">
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>CHL paid <strong>$300.72/hour</strong> per travel nurse vs. $45-55/hour for local RNs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>Total contracts exceeded <strong>$173.9M</strong> — all untendered</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>Vitalité used <strong>&quot;litigation privilege&quot;</strong> to block Auditor General access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>Chief Justice DeWare ruled AG&apos;s mandate is <strong>overridden</strong> by privilege</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>Local nurses received <strong>no comparable wage increases</strong> during the same period</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span>Travel nurses often <strong>less experienced</strong> than permanent staff they replaced</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Nurse Burnout Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" 
            alt="Healthcare worker representing nurse burnout and staffing crisis in NB"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Nurse burnout and unsafe staffing ratios while $173.9M flows to private travel agencies
          </div>
        </div>

        {/* Section 5: Burnout & Union Action */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Nurse Burnout & Union Action
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The staffing crisis has created a vicious cycle. As experienced nurses leave — 
            driven by burnout, unsafe ratios, and the insult of watching travel nurses earn 
            six times their wages — the remaining staff face even heavier workloads. The 
            New Brunswick Nurses Union (NBNU) has repeatedly warned that the system has reached 
            a <strong className="text-white">&quot;critical juncture.&quot;</strong>
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The crisis extends beyond emergency departments. Nurses in long-term care facilities 
            report ratios of <strong className="text-white">1 nurse to 30+ patients</strong> during night shifts — 
            well above safe limits. Mental health nurses describe being the only provider for 
            entire units. Community health nurses cover geographic areas so large that 
            patient visits are routinely cut short.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-4">
            In response to these conditions, nurses have organized increasingly visible actions: 
            information pickets outside hospitals, public testimonials about working conditions, 
            and formal complaints to regulatory bodies. The NBNU has called for a full public 
            inquiry into healthcare staffing, arguing that the current trajectory is 
            <strong className="text-white"> unsustainable and dangerous</strong>.{" "}
            <a href="https://nbnu.ca/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Nurses&apos; Union]</a>
          </p>
        </section>

        {/* Quote Block 2 */}
        <QuoteBlock
          quote="Our health-care system, like many across our country, is in crisis. People are seeing long waits for tests and surgeries, hospitals are experiencing unexpected closures, emergency rooms are supporting community health in ways they were not intended to, and staff shortages and burnout are more than ever."
          author="NB Government"
          role="Official Health Plan Acknowledgment"
          color="gold"
        />

        {/* Section 6: Gender-Affirming Care */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            The Gender-Affirming Care Gap
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            As of March 2026, transgender health advocates are calling for the
            establishment of a dedicated gender-affirming care clinic in New
            Brunswick. The province currently lacks any centralized resource for
            transgender healthcare, forcing patients to navigate a patchwork of
            reluctant providers or leave the province entirely.{" "}
            <a href="https://www.cbc.ca/news/canada/new-brunswick" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[CBC NB, Mar 2026]</a>
          </p>
          <p className="text-neutral-400 leading-relaxed">
            Advocates describe a system where transgender patients face <strong className="text-white">multi-year waits</strong> for 
            initial endocrinology appointments, with no dedicated pathways for hormone therapy 
            or surgical referrals. Some patients report being told by family physicians that 
            they are &quot;not comfortable&quot; providing gender-affirming care — effectively 
            refusing treatment. The result is a population forced to either self-medicate 
            with unregulated hormones or leave New Brunswick entirely for care available 
            in other provinces.
          </p>
        </section>

        {/* Section 7: Comparison with Other Provinces */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            NB vs. The Rest of Canada
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick&apos;s healthcare crisis is not typical of Canada — it is an outlier. 
            While all provinces face challenges, NB consistently ranks among the worst on 
            key metrics.
          </p>
          
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
                  <td className="p-4 text-neutral-300">ER Walkout Rate</td>
                  <td className="p-4 text-crisis-red font-bold">12.9%</td>
                  <td className="p-4 text-neutral-500">7.8%</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Without Family Doctor</td>
                  <td className="p-4 text-crisis-red font-bold">~30%</td>
                  <td className="p-4 text-neutral-500">~15%</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">Physicians per 100K</td>
                  <td className="p-4 text-crisis-red font-bold">~220</td>
                  <td className="p-4 text-neutral-500">~260</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-4 text-neutral-300">ALC Bed Occupancy</td>
                  <td className="p-4 text-crisis-red font-bold">40%+</td>
                  <td className="p-4 text-neutral-500">~15%</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-300">Median ER Wait (CTAS 3)</td>
                  <td className="p-4 text-crisis-red font-bold">8+ hours</td>
                  <td className="p-4 text-neutral-500">~4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-neutral-400 text-sm mt-4 italic">
            Sources: MEI Report (Sep 2025), CIHI data, Horizon Health dashboard. National averages from CIHI National Physician Database.
          </p>
        </section>

        {/* ER Waiting Room Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80" 
            alt="Emergency room entrance representing the healthcare crisis in New Brunswick"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Emergency rooms overwhelmed — patients triaged in parking lots, 63,000 leaving untreated annually
          </div>
        </div>

        {/* Section 8: Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Crisis Timeline: 2022-2026
          </h2>
          <Timeline items={healthcareTimeline} className="mt-8" />
        </section>

        {/* Medical Equipment Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80" 
            alt="Medical equipment representing systemic healthcare infrastructure failure"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Aging infrastructure, understaffed facilities, and a system designed for a population half its current size
          </div>
        </div>

        {/* External Links */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mt-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Essential Data & Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: 41,000 Left Horizon ERs Without Treatment" url="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-emergency-patient-leave-horizon-mei-report-vitalit%C3%A9-1.7637201" description="MEI Report — Sep 2025" date="SEP 2025" />
            <SourceCard type="pdf" title="MEI Report: Patients Leaving NB Emergency Departments" url="https://www.iedm.org/wp-content/uploads/2025/09/2025-09-18-NR-Leaving-ER-NB.pdf" description="Full academic report with methodology and data" date="SEP 2025" />
            <SourceCard type="pdf" title="Auditor General: $173.9M Travel Nurse Contract Scandal" url="https://www.agnb-vgnb.ca/uploads/volume_translations/81/report/agnb-V2-2025-Report_E.pdf" description="2025 Report — Chapter 2: Untendered Contracts" date="2025" />
            <SourceCard type="article" title="National Post: Canada's ER 'Hidden Pandemic'" url="https://nationalpost.com/news/canada/emergency-department-deaths" description="Investigating preventable ER deaths across Canada" date="MAR 2026" />
            <SourceCard type="article" title="CTV: Darrell Mesheau ER Death Lawsuit" url="https://www.ctvnews.ca/atlantic/new-brunswick/article/hospital-and-nurses-deny-negligence-in-nb-emergency-room-death-of-78-year-old-man/" description="Chalmers ER negligence case" date="2023" />
            <SourceCard type="report" title="NB Government: Official Health Plan" url="https://www2.gnb.ca/content/gnb/en/corporate/promo/new-brunswick-health-plan.html" description="Government's own acknowledgment of the crisis" date="2024" />
            <SourceCard type="organization" title="NB Nurses' Union — Advocacy & Reports" url="https://nbnu.ca/" description="Union representing 8,000+ NB nurses" />
            <SourceCard type="organization" title="Horizon Health Network" url="https://www.horizonnb.ca/" description="Largest health authority in NB" />
          </div>
        </section>
      </div>

      <CTASection
        icon={Activity}
        title="The Silence is Fatal."
        description="Join our call for a Full Public Inquiry into the institutional negligence of the New Brunswick healthcare system."
        buttonText="Join the Fight"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
