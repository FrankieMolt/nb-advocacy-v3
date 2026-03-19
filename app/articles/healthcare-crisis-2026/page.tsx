import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { Activity, AlertTriangle, Users, Bed, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "238K Without a Doctor: NB Healthcare in Freefall",
  description: "Nearly 1 in 3 New Brunswickers lacks a family doctor. 2,199 ER deaths in 4 years. 40% of hospital beds blocked by ALC patients. $173.9M travel nurse scandal. The full picture of NB healthcare collapse.",
  keywords: "NB healthcare, doctor shortage, ER deaths, ALC patients, travel nurses, Horizon Health, Vitalité, 238K, family doctor, New Brunswick health crisis",
  alternates: { canonical: "https://reformnb.ca/articles/healthcare-crisis-2026/" },
  openGraph: {
    title: "238K Without a Doctor: New Brunswick Healthcare in Freefall | Reform NB",
    description: "Nearly 1 in 3 New Brunswickers has no family doctor. 2,199 ER deaths in 4 years. The full anatomy of healthcare system collapse.",
    images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200", width: 1200, height: 675, alt: "Hospital corridor representing healthcare crisis" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="238,000 Without a Doctor: New Brunswick Healthcare in Freefall"
      date="March 2026"
      image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
      imageAlt="Empty hospital corridor representing healthcare system collapse"
      imageCredit="Unsplash"
      sources={[
        { title: "Auditor General of NB: Healthcare Performance Report", url: "https://www5.gnb.ca/content/gnb/en/departments/auditor_general.html" },
        { title: "CBC: ER deaths in New Brunswick", url: "https://www.cbc.ca/news/canada/new-brunswick" },
        { title: "Horizon Health Network", url: "https://www.horizonnb.ca/" },
        { title: "Vitalité Health Network", url: "https://www.vitalitenb.ca/" },
        { title: "CBC: Travel nurse costs reach $173.9M", url: "https://www.cbc.ca/news/canada/new-brunswick" },
        { title: "Reform NB: Dornan Settlement", url: "/articles/dornan-firing-settlement" },
        { title: "Reform NB: ER Deaths Report", url: "/articles/healthcare-er-deaths" },
      ]}
    >
      <p className="text-xl text-white leading-relaxed mb-8">
        New Brunswick&apos;s healthcare system is not struggling. It is <strong className="text-white">failing</strong>. Nearly one in three residents has no family doctor. Patients are dying in emergency rooms after waiting hours without being seen. And the government&apos;s solution — funneling $173.9 million to private travel nurse agencies — has enriched corporations while leaving hospitals understaffed.
      </p>

      {/* Key Stats Grid */}
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-white" size={24} />
            <span className="text-3xl font-black text-white">238K+</span>
          </div>
          <p className="text-white text-sm">Without a family doctor — nearly 1/3 of NB&apos;s 800K population</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-white" size={24} />
            <span className="text-3xl font-black text-white">2,199</span>
          </div>
          <p className="text-white text-sm">Patients pronounced dead after ER arrival, 2020-2024</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Bed className="text-white" size={24} />
            <span className="text-3xl font-black text-white">40%</span>
          </div>
          <p className="text-white text-sm">Of hospital beds occupied by ALC patients who need nursing homes</p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-white" size={24} />
            <span className="text-3xl font-black text-white">41K+</span>
          </div>
          <p className="text-white text-sm">ER walkouts per year — 12.9% of patients leave before being seen</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Doctor Shortfall</h2>
      <p>
        <strong className="text-white">238,000 New Brunswickers</strong> are registered on the provincial Patient Connect list — the official waitlist for people without a family doctor. That number has grown by over 50,000 in three years and shows no sign of slowing.
      </p>
      <p>
        Without a family doctor, patients rely on emergency rooms for basic care: prescriptions, chronic disease management, referrals. This drives up ER volumes, increases wait times, and pushes costs from primary care (cheap) to emergency care (expensive). It is the most inefficient healthcare delivery model possible.
      </p>
      <p>
        The causes are structural: NB pays doctors less than neighbouring provinces, rural communities lack the infrastructure to attract physicians, and the province has failed to build a meaningful pipeline through UNB&apos;s medical school. Meanwhile, doctors who do practice in NB report burnout from patient loads that would be considered unsafe in other provinces.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">ER Deaths: The Numbers</h2>
      <p>
        The Auditor General&apos;s report confirmed what patients and families already knew: <strong className="text-white">2,199 patients were pronounced dead</strong> after arriving at NB emergency rooms between 2020 and 2024. Of those, <strong className="text-white">43% were never seen within safe triage times</strong>.
      </p>
      <p>
        The deaths include documented cases of patients waiting <strong className="text-white">7+ hours</strong> without being triaged, patients who left and died at home, and patients who were found dead in waiting rooms. The government&apos;s response — that many of these patients were critically ill on arrival — does not account for the systematic triage failures that prevent timely assessment.
      </p>
      <p>
        Cases like <strong className="text-white">Darrell Mesheau</strong> (died in Fredericton ER after prolonged wait), <strong className="text-white">Jonah Imeson</strong> (waited 12 hours during a heart attack in Moncton), and the Edmundston waiting room death have become symbols of a system that fails its most vulnerable.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The ALC Bed Block</h2>
      <p>
        <strong className="text-white">40% of hospital beds</strong> are occupied by ALC (Alternate Level of Care) patients — people who no longer need acute hospital care but have nowhere else to go. They need nursing homes, rehabilitation facilities, or home care — services that are either unavailable or have years-long waitlists.
      </p>
      <p>
        This creates a cascading failure: ALC patients block beds, which prevents ER patients from being admitted, which forces ER patients to wait on stretchers in hallways, which prevents new ER patients from being assessed, which leads to walkouts and deaths. The system is a traffic jam with no exits.
      </p>
      <p>
        The solution — building long-term care capacity — requires capital investment that the province has deferred for decades. Instead, the government has focused on temporary measures: hiring travel nurses at enormous cost, opening overflow spaces, and issuing press releases about &quot;progress.&quot;
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The $173.9M Travel Nurse Scandal</h2>
      <p>
        Rather than invest in permanent nursing staff, New Brunswick has spent <strong className="text-white">$173.9 million on private travel nurse agencies</strong> — paying up to <strong className="text-white">$300.72 per hour</strong> for temporary nurses, compared to $35-50/hour for permanent staff. Many of these contracts were awarded <strong className="text-white">without tender</strong>.
      </p>
      <p>
        The travel nurse model is a short-term fix that creates long-term problems: it costs 5-8x more per nurse, creates no permanent capacity, poaches nurses from the permanent workforce (who leave to earn more as travel nurses), and enriches private agencies at taxpayer expense.
      </p>
      <p>
        When the Auditor General tried to investigate, the government invoked <strong className="text-white">&quot;litigation privilege&quot;</strong> to withhold documents — a move widely criticized as an attempt to hide the scope of the waste. The total cost to taxpayers may be significantly higher than $173.9M, as the figure only covers contracts the government acknowledged.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Dornan Affair</h2>
      <p>
        In one of NB healthcare&apos;s most cynical chapters, Premier Higgs fired <strong className="text-white">Horizon Health CEO John Dornan</strong> — and the province then paid <strong className="text-white">$1.8 million</strong> to settle Dornan&apos;s wrongful dismissal claim. Dornan was subsequently appointed <strong className="text-white">Health Minister</strong>. Total taxpayer cost: over $2.1 million.
      </p>
      <p>
        The sequence — fire, settle, appoint — raised serious questions about political interference in health authority governance. Critics argue it demonstrates that healthcare leadership in NB is determined by political loyalty, not competence.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Mental Health: The Invisible Crisis</h2>
      <p>
        New Brunswick&apos;s mental health system is arguably in worse shape than its physical healthcare. Wait times for psychiatric assessment can exceed <strong className="text-white">12-18 months</strong>. Community mental health services are chronically understaffed. Emergency departments — already overwhelmed — have become the default mental health crisis response.
      </p>
      <p>
        The intersection of mental health failure, housing crisis, and toxic drug supply has created a perfect storm. Many of the 100+ unhoused deaths in 2025 involved individuals with untreated mental illness or addiction — people who fell through every safety net the province claims to have.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Competitive physician compensation</strong> to attract and retain family doctors</li>
        <li><strong className="text-white">End the travel nurse model</strong> and invest in permanent nursing positions at fair wages</li>
        <li><strong className="text-white">Build long-term care capacity</strong> to clear ALC bed block and free ER capacity</li>
        <li><strong className="text-white">Independent healthcare ombudsman</strong> with power to penalize health authorities</li>
        <li><strong className="text-white">Full transparency</strong> on healthcare contracts, spending, and outcomes</li>
        <li><strong className="text-white">Invest in mental health</strong> as a parallel system, not an afterthought</li>
      </ul>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-red p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          &quot;A government that cannot keep its citizens alive in emergency rooms has no moral authority to govern.&quot;
        </p>
        <p className="text-sm text-white mt-4">— Reform NB</p>
      </div>

      <p className="text-white italic mt-12">
        This article is part of Reform NB&apos;s ongoing healthcare investigation. If you or a family member has experienced the failures described here, <a href="mailto:reformnb-tips@proton.me" className="text-white hover:text-white underline">we want to hear your story</a>.
      </p>
    </ArticleLayout>
  );
}
