import { ShareButtons } from "@/components/ShareButtons";
import { Metadata } from "next";
import { UserX, AlertTriangle, Scale, Users, Rainbow } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://nbreform.ca/articles/blaine-higgs-controversies/" },
  title: "Blaine Higgs: Policy 713 and the Downfall",
  description: "The premier who rolled back LGBTQ protections, fired dissenting ministers, and lost his party. How Higgs's social conservatism brought down a government.",
  keywords: [
    "Blaine Higgs", "Policy 713", "LGBTQ", "New Brunswick", "premier",
    "social conservatism", "minister resignations", "PC Party", "election 2024"
  ].join(", "),
  openGraph: {
    title: "Blaine Higgs: Policy 713 and the Downfall | Reform NB",
    description: "How the former premier's social conservative agenda split his party and cost him the election.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
        width: 1200,
        height: 675,
        alt: "Political controversy in New Brunswick - Reform NB",
      },
    ],
  },
};

const higgsData = [
  { value: "5", label: "Ministers Who Resigned", sublabel: "2 quit in protest, 2 pushed out for not supporting Policy 713 changes, 1 cabinet shuffle" },
  { value: "POLICY 713", label: "LGBTQ Protections Rolled Back", sublabel: "Pronoun changes for students under 16 now require parental consent" },
  { value: "OCT 2024", label: "Election Defeat", sublabel: "Higgs lost to Susan Holt's Liberals — ending 6 years of PC government" },
  { value: "40%+ of PC Candidates", label: "Resigned Before Election", sublabel: "Multiple ridings lost PC candidates over Higgs's leadership" },
];

const higgsKeyFacts = [
  {
    icon: "users" as const,
    title: "Ministers Resigned in Protest",
    value: "5",
    description: "Education Minister Bill Hogan and Social Development Minister Dorothy Shephard quit over Policy 713 changes. Two more were pushed out for not supporting Higgs's agenda.",
    source: "CBC News"
  },
  {
    icon: "warning" as const,
    title: "Policy 713 Rollback",
    value: "Under 16",
    description: "New rules require parental consent for students under 16 to use different names/pronouns at school. LGBTQ advocates called it a dangerous step backward.",
    source: "GNB Policy 713"
  },
  {
    icon: "building" as const,
    title: "Irving Oil EUB Letter",
    value: "Minister Bypassed",
    description: "Higgs personally approved a letter supporting Irving Oil's price hike request to the independent EUB. Minister Mike Holland just signed it — he wasn't even in the email chain. Government was 'actively engaged in trying to assist Irving Oil'.",
    source: "CBC, Access to Information"
  },
  {
    icon: "document" as const,
    title: "Irving Oil Career",
    value: "34 Years",
    description: "Higgs worked as an executive at Irving Oil for 34 years before entering politics. When his government supported Irving's EUB application, opposition parties filed conflict of interest complaints.",
    source: "National Observer"
  },
  {
    icon: "users" as const,
    title: "PC Candidate Resignations",
    value: "40%+",
    description: "Over 40% of PC candidates resigned before the 2024 election, citing Higgs's leadership style and social agenda. The party fractured from within.",
    source: "Electoral Records"
  },
  {
    icon: "warning" as const,
    title: "Election Defeat",
    value: "OCT 2024",
    description: "Susan Holt's Liberals won a majority. Higgs lost his own riding of Quispamsis. Six years of PC government ended in a rejection of social conservatism.",
    source: "Elections NB"
  }
];

export default function BlaineHiggsPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={UserX}
        title="The Higgs Downfall"
        quote="Two New Brunswick ministers quit in protest, while two others were pushed out by Mr Higgs for not supporting his plan. The premier now faces a leadership review."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
          alt="Political controversy surrounding Blaine Higgs and Policy 713"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-sm text-white uppercase tracking-widest text-center">
          Policy 713 changes sparked cabinet resignations and international condemnation | CBC News
        </div>
      <ShareButtons title="" />
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {higgsData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">Blaine Higgs: Policy 713 and the Downfall</h1>

        {/* Section 1: Policy 713 */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            What Was Policy 713?
          </h2>
          <p className="text-white leading-relaxed mb-6">
            <strong className="text-white">Policy 713</strong>, introduced in August 2020 under the Higgs government, 
            set minimum standards for New Brunswick schools to provide a safe, welcoming, and inclusive 
            environment for LGBTQ students. It was developed after extensive consultation with educators, 
            parents, and LGBTQ advocates.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The policy required schools to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white mb-6">
            <li>Respect students&apos; chosen names and pronouns</li>
            <li>Provide gender-neutral bathrooms and change rooms where possible</li>
            <li>Allow students to participate in activities consistent with their gender identity</li>
            <li>Protect students from harassment and discrimination</li>
          </ul>
          <p className="text-white leading-relaxed mb-6">
            On April 21, 2023, <strong className="text-white">without any complaints or review request</strong>, 
            Premier Blaine Higgs announced that Policy 713 was being placed under review by his government.
          </p>
        </section>

        {/* Section 2: The Changes */}
        <section className="bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
            <Rainbow className="text-white" size={28} aria-hidden="true" />
            The Policy Changes
          </h2>
          <p className="text-white leading-relaxed mb-6">
            In June 2023, the Higgs government announced changes to Policy 713:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white mb-6">
            <li><strong className="text-white">Students under 16</strong> must now obtain parental consent to use a different 
            name or pronoun at school. If parents refuse, the student must use their legal name.</li>
            <li><strong className="text-white">Teachers and staff</strong> are prohibited from using a student&apos;s chosen 
            name or pronoun without parental consent, even if the student requests it.</li>
            <li><strong className="text-white">School sports</strong> rules were changed to allow schools to restrict 
            transgender students&apos; participation based on &quot;competitive fairness.&quot;</li>
          </ul>
          <p className="text-white leading-relaxed mb-6">
            The changes made New Brunswick the first province in Canada to <strong className="text-white">roll back 
            LGBTQ protections</strong> in schools — a move that drew comparisons to similar legislation in 
            conservative U.S. states.
          </p>
        </section>

        {/* Section 3: Cabinet Revolt */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Cabinet Revolt
          </h2>
          <p className="text-white leading-relaxed mb-6">
            The policy changes triggered an unprecedented cabinet revolt:
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <h4 className="text-white font-black mb-3 uppercase text-sm tracking-widest">Resigned in Protest</h4>
              <p className="text-white text-sm mb-3">
                <strong className="text-white">Bill Hogan</strong> — Education Minister responsible for Policy 713
              </p>
              <p className="text-white text-sm">
                <strong className="text-white">Dorothy Shephard</strong> — Social Development Minister
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <h4 className="text-white font-black mb-3 uppercase text-sm tracking-widest">Pushed Out</h4>
              <p className="text-white text-sm mb-3">
                <strong className="text-white">Trevor Holder</strong> — Removed for not supporting changes
              </p>
              <p className="text-white text-sm">
                <strong className="text-white">Jeff Carr</strong> — Removed for not supporting changes
              </p>
            </div>
          </div>
          <p className="text-white leading-relaxed mb-6">
            In total, <strong className="text-white">five cabinet ministers</strong> left or were removed from the 
            Higgs cabinet over Policy 713 — an unprecedented collapse in Canadian provincial politics.
          </p>
        </section>

        {/* Section 4: International Attention */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            International Condemnation
          </h2>
          <p className="text-white leading-relaxed mb-6">
            The policy changes drew international attention. The BBC reported:
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-6">
            <p className="text-white italic leading-relaxed">
              &ldquo;Two New Brunswick ministers quit in protest, while two others were pushed out by Mr Higgs 
              for not supporting his plan. The premier now faces a leadership review over his handling of 
              the issue.&rdquo;
            </p>
            <p className="text-white text-sm mt-3">
              — BBC World, July 2023
            </p>
          </div>
          <p className="text-white leading-relaxed mb-6">
            LGBTQ advocacy groups across Canada condemned the changes. The Canadian Civil Liberties 
            Association called them a <strong className="text-white">&quot;violation of students&apos; constitutional rights.&quot;</strong>
          </p>
        </section>

        {/* Quote Block */}
        <QuoteBlock
          quote="New Brunswick has become the first province in Canada to roll back LGBTQ protections. This is a dangerous precedent."
          author="Canadian Civil Liberties Association"
          role="Statement on Policy 713 changes"
          color="red"
        />

        {/* Section 5: The Election */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Election Defeat
          </h2>
          <p className="text-white leading-relaxed mb-6">
            The Policy 713 controversy was not the only issue that plagued the Higgs government. His 
            confrontational style with federal counterparts, his handling of healthcare, and his 
            perceived indifference to the province&apos;s economic struggles all contributed to declining 
            popularity.
          </p>
          <p className="text-white leading-relaxed mb-6">
            But the LGBTQ policy was the breaking point for many in his own party. In the lead-up to 
            the October 2024 election, <strong className="text-white">over 40% of PC candidates resigned</strong>, 
            citing Higgs&apos;s leadership style and social agenda. In some ridings, the PCs couldn&apos;t 
            find replacement candidates.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The result was decisive. <strong className="text-white">Susan Holt&apos;s Liberals</strong> won a majority 
            government, ending six years of Progressive Conservative rule. Higgs even lost his own 
            riding of Quispamsis — a seat he had held since 2010.
          </p>
        </section>

        {/* Key Facts Grid - Replaced Timeline */}
        <section className="mt-12">
          <KeyFactsGrid facts={higgsKeyFacts} title="The Higgs Record" />
        </section>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="BBC: LGBT school policy change causes political turmoil" url="https://www.bbc.com/news/world-us-canada-66061514" description="Two ministers quit, two pushed out over Policy 713" date="JUL 2023" />
            <SourceCard type="article" title="CBC: What is New Brunswick's LGBTQ student controversy?" url="https://www.cbc.ca/news/canada/new-brunswick/policy-713-explainer-1.6890043" description="Explainer on Policy 713 changes" date="AUG 2023" />
            <SourceCard type="article" title="Global News: Five things to know about Policy 713 changes" url="https://globalnews.ca/news/9778957/new-brunswick-policy-713-changes-5-things-to-know/" description="Key changes to LGBTQ school policy" date="JUN 2023" />
            <SourceCard type="article" title="Wikipedia: Policy 713" url="https://en.wikipedia.org/wiki/Policy_713" description="Background and timeline of the policy" />
          </div>
        </section>
      </div>

      <CTASection
        icon={AlertTriangle}
        title="Human rights are not political football."
        description="Policy 713 was developed through consultation to protect vulnerable students. Rolling it back for political gain sets a dangerous precedent. We demand legislation to protect LGBTQ students permanently."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
