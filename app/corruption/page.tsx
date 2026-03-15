import { Metadata } from "next";
import { ShieldAlert, AlertTriangle, Scale, Lock, Briefcase, UserCheck, FileWarning } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";

export const metadata: Metadata = {
  title: "Systemic Corruption | Reform NB",
  description:
    "Exposing embezzlement, untendered contracts, whistleblower suppression, and the systemic corruption within the New Brunswick provincial administration — from Lt. Governor fraud to $173.9M travel nurse cover-ups.",
};

const corruptionData = [
  { value: "$1.18M", label: "High-Level Embezzlement", sublabel: "$700K (Lt. Governor's office) + $481K (Deputy AG) — both convicted/investigated" },
  { value: "$173.9M", label: "Travel Nurse Scandal", sublabel: "Untendered contracts blocked from Auditor General review by 'litigation privilege'" },
  { value: "$10M+", label: "Untendered Contracts/Year", sublabel: "10 RED exemptions used in 2025-2026 alone — procurement without oversight" },
  { value: "$1M+", label: "3+ Corporation Fraud", sublabel: "19 RCMP charges against Daniel Bard — retrial ongoing 2026" },
];

const corruptionTimeline = [
  { date: "2015-2022", title: "Tim Richardson Embezzlement", description: "Principal secretary to Lt. Governor embezzles $700K+ over 7 years. RCMP investigation. Richardson dies before trial.", color: "red" as const },
  { date: "2022", title: "Yassin Choukri Guilty Plea", description: "Former Deputy Attorney General pleads guilty to stealing $481K from law society trust — while serving as province's top legal official.", color: "red" as const },
  { date: "JUL 2022", title: "3+ Corporation: 19 RCMP Charges", description: "Daniel Bard, former VP of Moncton economic development agency, charged with 19 criminal counts. $1M+ in financial irregularities.", color: "red" as const },
  { date: "2023-24", title: "Travel Nurse Contracts Emerge", description: "Auditor General begins investigating $173.9M in untendered contracts with Canadian Health Labs. Vitalité blocks access.", color: "red" as const },
  { date: "JUNE 2025", title: "Litigation Privilege Ruling", description: "Chief Justice DeWare rules litigation privilege overrides AG's statutory mandate — legalizing the cover-up.", color: "red" as const },
  { date: "2025-26", title: "10 RED Exemptions Awarded", description: "Service New Brunswick uses full quota of Regional Economic Development exemptions — $10M in untendered contracts.", color: "gold" as const },
  { date: "JAN 2026", title: "3+ Corporation Retrial", description: "Retrial begins in Moncton Provincial Court following mistrial. Total irregularities exceed $1 million.", color: "gold" as const },
];

export default function CorruptionPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={ShieldAlert}
        title="Systemic Corruption"
        quote="Corruption in New Brunswick is not a failure of the system; it is the system. Accountability has been replaced by 'litigation privilege' and backroom deals."
      />
      
      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1200&q=80" 
          alt="Government building representing systemic corruption in New Brunswick"
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          Government corruption, untendered contracts, and whistleblower suppression — accountability has been replaced by &quot;litigation privilege&quot;
        </div>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {corruptionData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: High-Level Embezzlement */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            High-Level Embezzlement
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick has seen some of the most brazen acts of public fund theft in Atlantic Canadian 
            history — perpetrated not by low-level bureaucrats, but by individuals in the highest offices 
            of government. The fact that two separate senior officials were able to steal over $1 million 
            combined, over extended periods, without detection, points to systemic failures in financial 
            oversight.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-crisis-red/50 transition-all shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-crisis-red transition-colors">
                Tim Richardson
              </h3>
              <p className="text-base text-neutral-400 mb-6 leading-relaxed">
                The former principal secretary to the Lieutenant-Governor was
                investigated by the RCMP for embezzling over{" "}
                <strong className="text-white">$700,000</strong> in public funds over seven years.
                The theft continued undetected because Richardson controlled the financial 
                records and had no independent oversight.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-crisis-red uppercase tracking-[0.2em] bg-black/50 px-3 py-1 rounded-full w-fit">
                <Lock size={12} aria-hidden="true" /> Status: Deceased / Case Closed
              </div>
            </div>
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-crisis-red/50 transition-all shadow-xl relative overflow-hidden group">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-crisis-red transition-colors">
                Yassin Choukri
              </h3>
              <p className="text-base text-neutral-400 mb-6 leading-relaxed">
                Former Deputy Attorney General pleaded guilty to stealing over{" "}
                <strong className="text-white">$481,000</strong> from a law society trust account while
                serving as the province&apos;s top legal official. The irony: the 
                person responsible for upholding the law was systematically breaking it.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-crisis-red uppercase tracking-[0.2em] bg-black/50 px-3 py-1 rounded-full w-fit">
                <Scale size={12} aria-hidden="true" /> Status: Convicted
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 3+ Corporation */}
        <section className="bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
            The 3+ Corporation Fraud
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-8">
            In July 2022, the RCMP laid 19 criminal charges against{" "}
            <strong className="text-white">Daniel Bard</strong>, former VP of the economic development
            agency for Moncton. A forensic audit revealed a pattern of
            soliciting &quot;administrative fees&quot; from local entrepreneurs
            for multi-million dollar loans that never materialized.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-8">
            The case exposed the vulnerability of regional economic development 
            agencies to internal fraud. Bard operated with minimal oversight, 
            using his position to extract fees from vulnerable small business 
            owners who believed they were accessing legitimate government 
            programs. The total financial irregularities exceeded <strong className="text-white">$1 million</strong>.
          </p>
          <div className="bg-black p-6 rounded-xl border border-neutral-800 flex items-center gap-4">
            <Briefcase
              className="text-crisis-gold shrink-0"
              size={32}
              aria-hidden="true"
            />
            <div>
              <h4 className="text-white font-bold mb-1 uppercase text-sm">
                Status Update: January 2026
              </h4>
              <p className="text-neutral-500 text-sm italic">
                &ldquo;Retrial began in Moncton Provincial Court following a
                previous mistrial. Total financial irregularities exceeded $1
                million.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Travel Nurse Cover-Up */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The $173.9M Travel Nurse Cover-Up
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The travel nurse scandal represents the largest documented case of public fund 
            mismanagement in New Brunswick&apos;s history. Canadian Health Labs (CHL) was paid 
            <strong className="text-white"> $300.72 per hour</strong> per nurse under untendered contracts 
            totaling <strong className="text-white">$173.9 million</strong>. For context, local nurses 
            earn $45-55/hour.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            When the Auditor General attempted to investigate, the Vitalité health authority 
            invoked <strong className="text-white">&quot;litigation privilege&quot;</strong> to block access to internal 
            records. In June 2025, Chief Justice Tracey DeWare upheld this claim, ruling that 
            litigation privilege overrides the AG&apos;s statutory mandate to audit public spending.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The ruling effectively means that any government entity can shield its internal 
            records from the Auditor General simply by claiming that litigation is contemplated. 
            Critics call this the <strong className="text-white">&quot;legalization of corruption&quot;</strong> — a judicial 
            endorsement of opacity over accountability.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 my-8">
            <h4 className="text-crisis-red font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <FileWarning size={16} aria-hidden="true" /> The Cover-Up Timeline
            </h4>
            <ul className="space-y-3 text-neutral-300 text-sm" role="list">
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">2023-24</span>
                <span>Auditor General begins requesting travel nurse contract documents from Vitalité</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">2024</span>
                <span>Vitalité invokes &quot;litigation privilege&quot; — refuses to provide records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">DEC 2025</span>
                <span>AG publishes partial report: $173.9M in untendered contracts confirmed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">JUNE 2025</span>
                <span>Chief Justice DeWare rules litigation privilege overrides AG mandate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">2026</span>
                <span>Full internal records remain sealed. No one held accountable.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Sole-Source Procurement */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Procurement Without Oversight
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The provincial administration routinely bypasses public tenders
            through &quot;Regional Economic Development&quot; (RED) exemptions.
            In the 2025-2026 period alone, Service New Brunswick utilized its
            full quota of <strong className="text-white">10 RED exemptions</strong>, awarding
            approximately <strong className="text-white">$10 million</strong> in untendered contracts to
            political favorites.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            From hospital food supplies to curriculum materials,
            &quot;sole-sourcing&quot; has become the standard mechanism for
            funneling public wealth into the hands of the &quot;Two-Party
            Monopoly.&quot; The RED exemption system was designed for genuine 
            emergencies — situations where competitive bidding would cause 
            unacceptable delays. In practice, it has become a loophole for 
            awarding contracts to preferred vendors without transparency.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            A 2024 analysis of RED exemptions found that over <strong className="text-white">70%</strong> were 
            awarded to companies with direct ties to sitting government members 
            or their families. The system operates on a simple principle: if you 
            know the right people, you don&apos;t need to compete.
          </p>
        </section>

        {/* Section 5: Whistleblower Suppression */}
        <section className="bg-red-900/5 p-10 rounded-3xl border border-red-900/20">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
            <UserCheck className="text-crisis-red" size={28} aria-hidden="true" />
            The Whistleblower Trap
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            New Brunswick&apos;s <em>Public Interest Disclosure Act</em>{" "}
            intentionally excludes consultants, contractors, and former
            employees. This statutory &quot;blind spot&quot; ensures that the
            individuals with the most incriminating evidence of government waste
            are legally barred from protection.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The exclusion is not accidental. Government consultants — who often 
            witness waste, fraud, and abuse firsthand — have no legal protection 
            if they report it. Former employees, who can speak freely after 
            leaving government service, are similarly excluded. The result: a 
            system where <strong className="text-white">the people most likely to have evidence are the 
            least likely to be protected</strong>.
          </p>
          <div className="bg-black/40 p-8 rounded-2xl border border-neutral-800">
            <h4 className="text-crisis-red font-black uppercase text-[10px] tracking-[0.3em] mb-4">
              Mystery Disease Case Update
            </h4>
            <p className="text-white font-bold leading-relaxed mb-4 italic">
              &ldquo;Leaked internal emails from federal scientist Dr. Michael
              Coulthart confirmed he was cut off from the mystery brain disease
              investigation for &apos;political reasons.&apos; The
              government&apos;s January 2026 report dismissing the 400+ cases is
              a definitive act of state-sponsored gaslighting.&rdquo;
            </p>
          </div>
        </section>

        {/* Quote Block */}
        <QuoteBlock
          quote="The system isn't broken. It's working exactly as designed — to protect those who profit from public funds while silencing those who try to expose it."
          author="Former Government Auditor"
          role="Anonymous — Reform NB source"
          color="red"
        />

        {/* Section 6: The Judicial Shield */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            The Judicial Shield
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In June 2025, Chief Justice Tracey DeWare ruled that{" "}
            <strong className="text-white">&ldquo;litigation privilege&rdquo;</strong> overrides the
            Auditor General&apos;s statutory mandate. This effectively legalizes
            the withholding of internal audits, protecting the mechanics of the
            $173.9 million travel nurse scandal from ever seeing the light of
            day.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Legal scholars have criticized the ruling as unprecedented in its 
            breadth. While litigation privilege is a recognized common law 
            principle, its application to override a statutory audit mandate 
            has no clear precedent in Canadian law. The ruling creates a 
            <strong className="text-white"> perverse incentive</strong>: government entities can now shield 
            records from scrutiny simply by asserting that litigation is 
            contemplated — regardless of whether litigation actually materializes.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            The Auditor General&apos;s office has stated it is &quot;reviewing 
            its options,&quot; but has not announced an appeal. Meanwhile, the 
            travel nurse contracts remain sealed, the agencies involved face no 
            consequences, and the public is left without answers about how 
            $173.9 million was spent.
          </p>
        </section>

        {/* Corruption Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Corruption Timeline
          </h2>
          <Timeline items={corruptionTimeline} className="mt-8" />
        </section>

        {/* Money Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" 
            alt="Money and documents representing government corruption and financial mismanagement"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Over $200 million in documented fraud, embezzlement, and untendered contracts — and those are just the ones we know about
          </div>
        </div>
        
        {/* External Links */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Case Sources & Documents</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Tim Richardson — $700K Embezzlement" url="https://www.cbc.ca/news/canada/new-brunswick/tim-richardson-lieutenant-governor-fraud-embezzlement-1.5706694" description="Former Lt. Governor's principal secretary" />
            <SourceCard type="article" title="CBC: Yassin Choukri — Deputy AG Guilty Plea" url="https://www.cbc.ca/news/canada/new-brunswick/yassin-choukri-guilty-plea-1.6986538" description="$481K stolen from law society trust" />
            <SourceCard type="article" title="NB Media Co-op: 3+ Corporation — 19 RCMP Charges" url="https://nbmediacoop.org/?s=daniel+bard+3+corporation" description="$1M+ procurement fraud, Daniel Bard" />
            <SourceCard type="pdf" title="Auditor General: $173.9M Travel Nurse Scandal" url="https://www.agnb-vgnb.ca/uploads/volume_translations/81/report/agnb-V2-2025-Report_E.pdf" description="2025 Report — Chapter 2: Untendered Contracts" />
            <SourceCard type="article" title="CBC: 3+ Corporation Fraud Charges" url="https://www.cbc.ca/news/canada/new-brunswick/3-plus-rcmp-charges-fraud-daniel-bard-1.6511214" description="19 criminal charges laid, July 2022" />
            <SourceCard type="article" title="National Post: Canada's ER Deaths Investigation" url="https://nationalpost.com/news/canada/emergency-department-deaths" description="Connected to healthcare spending corruption" date="MAR 2026" />
          </div>
        </section>
      </div>

      <CTASection
        icon={AlertTriangle}
        title="Justice is not optional."
        description="The capture of the provincial administration is a threat to the rule of law. We demand a federal Public Inquiry into the systemic fraud defining the NB government."
        buttonText="Mobilize"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
