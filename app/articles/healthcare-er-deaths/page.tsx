import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "2,199 ER Deaths: NB Healthcare Failure",
  description: "Auditor General: 2,199 patients died after arriving at NB ERs (2020-2024). 43% not triaged in time.",
  alternates: { canonical: "https://reformnb.ca/articles/healthcare-er-deaths/" },
  openGraph: {
    title: "2,199 ER Deaths: NB Healthcare Crisis — Auditor General Report",
    description: "2,199 patients pronounced dead after ER arrival in just 4 years. 43% never triaged in time. Province has 'no strategy.'",
    images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200", width: 1200, height: 675, alt: "Hospital ER corridor" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="2,199 ER Deaths: Auditor General Confirms Scale of NB Healthcare Failure"
      date="December 2025"
      image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
      imageAlt="Empty hospital corridor with fluorescent lighting"
      imageCredit="Unsplash / @nci"
      imageCreditUrl="https://unsplash.com/@nci"
      sources={[
        { title: "Auditor General Report: NB Emergency Departments (Dec 2025)", url: "https://www.cbc.ca/news/canada/new-brunswick/auditor-general-er-patients-not-seen-on-time-9.7008503" },
        { title: "CTV: NB has 'no strategy' to address excessive ER wait times", url: "https://www.ctvnews.ca/atlantic/new-brunswick/article/nb-auditor-general-says-province-has-no-strategy-to-address-excessive-er-wait-times/" },
        { title: "Global News: Auditor General concerned about ER wait times", url: "https://globalnews.ca/news/11569773/new-brunswick-er-wait-times/" },
        { title: "CBC: 41,000 left Horizon ERs before being seen", url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-emergency-patient-leave-horizon-mei-report-vitalit%C3%A9-1.7637201" },
        
      ]}
    >
      <p className="text-xl text-white leading-relaxed mb-8">
        In December 2025, New Brunswick Auditor General Paul Martin released a report that confirmed what patients had been screaming about for years: <strong className="text-white">2,199 people</strong> walked into emergency rooms across the province between 2020 and 2024 and were pronounced dead. Not treated. Not stabilized. Dead. And 43% of them were never seen by a doctor within medically safe timeframes.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        During the same audit period, <strong className="text-white">249,000 New Brunswickers</strong> left emergency departments without ever being seen. Another <strong className="text-white">470,000 visits</strong> exceeded safe triage times. The Auditor General's blunt assessment: the province has <em>"no strategy"</em> to address the crisis.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Numbers That Define a Crisis</h2>
      <p>
        The Auditor General's report paints a picture of a system buckling under weight it was never designed to carry. Of the 2,199 deaths recorded between 2020-2024:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li><strong>43%</strong> were never triaged within the Canadian Triage and Acuity Scale (CTAS) safe time</li>
        <li><strong>12.9%</strong> of all ER patients now leave before being seen — third highest rate in Canada</li>
        <li><strong>249,000</strong> patients left NB ERs without ever being seen by a doctor</li>
        <li><strong>470,000</strong> individual visits exceeded safe triage waiting times</li>
        <li><strong>63,000+</strong> patients walk out of NB ERs annually without treatment</li>
        <li><strong>40%</strong> of acute care beds are blocked by patients waiting for long-term care placement</li>
      </ul>

      <p>
        By the 2024-25 fiscal year, the situation had worsened further. A September 2025 MEI report found that <strong>41,000 people</strong> left Horizon Health Network ERs alone before receiving treatment — a single year, a single health authority. That&apos;s 41,000 New Brunswickers who drove to an emergency room, waited, and eventually gave up.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Dying While Waiting</h2>
      <p>
        The cases are harrowing and specific. They are not statistics. They are people.
      </p>
      <p>
        <strong>Darrell Mesheau</strong>, 78 years old, waited 7 hours at Chalmers Regional Hospital&apos;s ER in Fredericton before dying in July 2022. His death sparked a coroner&apos;s inquest that recommended systemic reforms — most of which remain unimplemented four years later.
      </p>
      <p>
        A <strong>70-year-old man</strong> in Edmundston died in his waiting room chair after 5 hours. He had been triaged as &quot;Level 4&quot; — not urgent enough for immediate attention, but sick enough that the wait proved fatal.
      </p>
      <p>
        In March 2026, <strong>Aimee Dunn</strong> settled her negligence lawsuit against Horizon Health after losing her 35-week pregnancy at Chalmers ER. Her lawyer cited &quot;human errors&quot; and &quot;summation of failures&quot; by four separate doctors — at the same ER where Mesheau died. The settlement amount was not disclosed.
      </p>
      <p>
        <strong>Jonah Imeson</strong> was forced to wait over 12 hours at Moncton&apos;s ER with a suspected heart attack. He survived only because he remained awake despite extreme agony — his family credits his own determination, not the system, for keeping him alive.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The $173.9 Million Travel Nurse Scandal</h2>
      <p>
        While patients died in waiting rooms, <strong>$173.9 million</strong> flowed to private travel nurse agencies in untendered contracts. Canadian Health Labs, the primary contractor, was paid <strong>$300.72 per hour per nurse</strong> — more than triple the rate paid to permanent staff. The Auditor General found that contracts were awarded without competitive bidding and that documentation was deliberately withheld using &quot;litigation privilege.&quot;
      </p>
      <p>
        Chief Justice DeWare&apos;s June 2025 ruling — that litigation privilege overrides the Auditor General&apos;s mandate — effectively legalized the cover-up. The decision stunned legal observers and remains under appeal. Critics argue it sets a precedent where government agencies can shield financial misconduct simply by labeling documents as &quot;litigation&quot; material.
      </p>
      <p>
        The travel nurse contracts represent a fundamental policy choice: the province chose to spend nine figures on temporary private staffing rather than invest in permanent, community-based healthcare workers. The result is a revolving door of nurses unfamiliar with local patients, protocols, or communities — at a premium price that dwarfs what it would cost to recruit and retain permanent staff.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">238,000 Without a Family Doctor</h2>
      <p>
        <strong>238,000 New Brunswickers</strong> — nearly one in three residents — lack a family doctor. Without primary care, they flood emergency rooms for everything: prescription refills, chronic condition management, routine infections. The ER becomes the family doctor, except it costs 10 times more per visit and was never designed for preventive care.
      </p>
      <p>
        The government claims 66 new doctors have been recruited since April 2025. But retirements, departures, and population growth outpace recruitment by a factor of three. New Brunswick trains fewer doctors per capita than any province and remains unable to compete with the salaries and resources offered by Ontario, Alberta, and British Columbia.
      </p>
      <p>
        The shortage is not evenly distributed. Rural communities — particularly in northern and francophone regions — have been hit hardest. Some communities have lost their only physician with no replacement in sight, forcing residents to drive hours for basic medical care.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">40% of Beds Blocked</h2>
      <p>
        Nearly <strong>40% of New Brunswick&apos;s acute care hospital beds</strong> are occupied by patients who do not need acute care. They are waiting for long-term care placement — but there is nowhere for them to go. The result is a bottleneck: patients who need emergency care cannot get beds because patients who need nursing homes cannot leave them.
      </p>
      <p>
        The province&apos;s long-term care system has a waitlist of thousands. New facilities take years to build. Staff shortages at existing facilities limit capacity. Meanwhile, the backlog cascades through the entire system: no beds means no ER admissions, which means longer wait times, which means more people leaving without being seen.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Horizon&apos;s Target: Four Times the National Standard</h2>
      <p>
        In April 2024, CBC reported that Horizon Health Network&apos;s own target for reduced ER wait times was <strong>four times the national guideline</strong>. The health authority was not aiming to meet national standards — it was aiming to exceed them by a factor of four and calling that an improvement.
      </p>
      <p>
        This institutional normalization of failure is perhaps the most damning aspect of the crisis. When the system&apos;s own benchmarks accept what would be considered unacceptable elsewhere, the gap between policy and reality becomes a chasm.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>
        Patient advocates are calling for mandatory CTAS compliance targets, independent ER oversight, binding staffing ratios, and an end to the litigation privilege shield protecting the travel nurse contracts. Most fundamentally, they argue the province needs to invest in primary care to reduce ER dependence — a shift that would save lives and money.
      </p>
      <p>
        The Auditor General&apos;s report is not a suggestion. It is a diagnosis. New Brunswick&apos;s emergency departments are failing, and the province has no strategy to fix them. Until that changes, people will continue to die in waiting rooms — not because medicine cannot save them, but because the system designed to deliver it has collapsed.
      </p>
      <p className="text-white italic mt-8">
        Reform NB is tracking this ongoing crisis. If you or someone you know has been affected by ER wait times in New Brunswick, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
