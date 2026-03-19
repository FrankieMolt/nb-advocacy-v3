import { ShareButtons } from "@/components/ShareButtons";
import { Metadata } from "next";
import { UserCheck, Building, AlertTriangle, Scale } from "lucide-react";
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
  alternates: { canonical: "https://reformnb.ca/articles/holt-lobbying-scandal/" },
  title: "Liberal Lobbyists Line Up to Influence Holt Government",
  description: "Former Liberal premiers Brian Gallant and Shawn Graham register as lobbyists. Ex-employees now lobbying their former boss. The revolving door spins.",
  keywords: [
    "Susan Holt", "Brian Gallant", "Shawn Graham", "lobbying", "New Brunswick",
    "revolving door", "conflict of interest", "Aecon Group", "Fertility Partners",
    "corporate influence", "political access", "insider lobbying"
  ].join(", "),
  openGraph: {
    title: "Liberal Lobbyists Line Up to Influence Holt Government | Reform NB",
    description: "Two former Liberal premiers and multiple cabinet ministers register as lobbyists after Holt's election. The revolving door between government and corporate interests.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
        width: 1200,
        height: 675,
        alt: "Political lobbying in New Brunswick - Reform NB",
      },
    ],
  },
};

const lobbyingData = [
  { value: "2", label: "Former Premiers Lobbying", sublabel: "Brian Gallant (Aecon Group) and Shawn Graham (Fertility Partners, Global University Systems)" },
  { value: "5+", label: "Liberal Insiders Registered", sublabel: "Former cabinet ministers and advisers lining up to lobby their former colleagues" },
  { value: "$5.57B", label: "Aecon Nuclear/Infrastructure", sublabel: "Aecon Group Inc. seeks meetings with Infrastructure Minister and NB Power CEO" },
  { value: "15 Days", label: "Required Registration", sublabel: "Gallant didn't register until Feb 2025 — despite becoming 'advisor' in early 2024" },
];

const lobbyingKeyFacts = [
  {
    icon: "users" as const,
    title: "Former Premier Lobbying",
    value: "2",
    description: "Brian Gallant and Shawn Graham — both former Liberal premiers — registered as lobbyists after Holt took power. Gallant is lobbying for Aecon (nuclear/gas), Graham for Caribbean medical schools.",
    source: "CBC News, Feb 2025"
  },
  {
    icon: "building" as const,
    title: "Aecon's Infrastructure Ambitions",
    value: "$5.57B",
    description: "Gallant seeks meetings with Infrastructure Minister and NB Power CEO for Aecon Group Inc. — a company with nuclear and natural gas project experience. New Scoudouc gas plant announced Dec 2024.",
    source: "Lobbyist Registry"
  },
  {
    icon: "warning" as const,
    title: "Delayed Registration",
    value: "1 Year Late",
    description: "Gallant became 'advisor' to Aecon in early 2024 but didn't register until Feb 2025. The law requires registration within 15 days of starting lobbying work.",
    source: "Lobbyists' Act"
  },
  {
    icon: "users" as const,
    title: "Liberal Insiders Flood Registry",
    value: "5+",
    description: "Three former cabinet ministers (Greg Byrne, Donald Arseneault, Maurice Robichaud) and two former advisers also registered new clients since Holt's election.",
    source: "CBC News"
  },
  {
    icon: "document" as const,
    title: "Carbon Repeal Blocked",
    value: "1 Week",
    description: "Maurice Robichaud registered to lobby for Convenience Industry Council of Canada. A week later, the Liberal bill to repeal 'cost of carbon adjustor' was put on hold.",
    source: "Legislative Record"
  },
  {
    icon: "money" as const,
    title: "Holt's Response",
    value: '"I\'m not sure"',
    description: 'When asked why companies pay lobbyists if meetings are "treated the same," Premier Holt said: "It\'s a great question. I\'m not sure." — The revolving door spins freely.',
    source: "CBC Interview"
  }
];

export default function HoltLobbyingPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={UserCheck}
        title="The Lobbying Revolving Door"
        quote="When asked why companies pay lobbyists if meetings are 'treated the same,' Premier Holt said: 'It's a great question. I'm not sure.' — The system is working exactly as designed."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
          alt="Government building representing political lobbying in New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-sm text-white uppercase tracking-widest text-center">
          Former Premier Brian Gallant registered to lobby for Aecon Group Inc. — seeking meetings with NB Power CEO | CBC News
        </div>
      <ShareButtons title="" />
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {lobbyingData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: The Gallant Connection */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Brian Gallant: From Premier to Lobbyist
          </h2>
          <p className="text-white leading-relaxed mb-6">
            In February 2025, former Liberal Premier <strong className="text-white">Brian Gallant</strong> registered 
            as a lobbyist for <strong className="text-white">Aecon Group Inc.</strong>, a major construction company 
            that has worked on nuclear power and natural gas projects. His filing stated he wanted to organize 
            meetings with Infrastructure Minister Chuck Chiasson and N.B. Power CEO Lori Clark to promote 
            Aecon&apos;s &quot;corporate brand awareness and capabilities.&quot;
          </p>
          <p className="text-white leading-relaxed mb-6">
            The timing raised eyebrows. In December 2024, the Holt government announced a new natural gas 
            power plant in Scoudouc. Aecon has extensive experience in such projects. When asked whether 
            Aecon had the contract, Premier Holt said she &quot;did not know&quot; and had &quot;never met with the company.&quot;
          </p>
          <p className="text-white leading-relaxed mb-6">
            But the deeper issue is the relationship: <strong className="text-white">Susan Holt worked for Brian Gallant</strong>. 
            When he was Premier, Holt worked for a job-creation secretariat he created. Now, her former boss 
            is a registered lobbyist seeking access to her government.
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-6">
            <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4">
              PC Opposition Leader Glen Savoie:
            </h4>
            <p className="text-white italic leading-relaxed">
              &ldquo;Her former boss Brian Gallant said at every turn that perception matters. So now here he is 
              lobbying his former employee as a lobbyist. What&apos;s the perception on that?&rdquo;
            </p>
          </div>
        </section>

        {/* Section 2: The Graham Lobbying */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Shawn Graham: The Career Lobbyist
          </h2>
          <p className="text-white leading-relaxed mb-6">
            Another former Liberal Premier, <strong className="text-white">Shawn Graham</strong>, has also registered 
            new lobbying clients since Holt took power. Graham, a longtime lobbyist, added two new clients:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white mb-6">
            <li><strong className="text-white">Fertility Partners Inc.</strong> — A Moncton fertility clinic. Graham says 
            his work is to help establish a research centre at the Université de Moncton, &quot;unconnected&quot; to 
            Holt&apos;s recent IVF funding announcement.</li>
            <li><strong className="text-white">Global University Systems Canada</strong> — A for-profit chain of universities 
            that operates three medical schools in the Caribbean. Graham&apos;s filing says he would meet with 
            Health Minister John Dornan about an initiative to &quot;help address the family physician shortage.&quot;</li>
          </ul>
          <p className="text-white leading-relaxed mb-6">
            Graham&apos;s lobbying career has spanned years. His registration for Global University Systems 
            raises questions: why would a Caribbean medical school chain need access to New Brunswick&apos;s 
            Health Minister? The answer likely involves the province&apos;s physician shortage — and the 
            lucrative contracts that flow from government efforts to address it.
          </p>
        </section>

        {/* Section 3: The Registration Loophole */}
        <section className="bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
            The Registration Loophole
          </h2>
          <p className="text-white leading-relaxed mb-6">
            New Brunswick&apos;s lobbying law requires lobbyists to register <strong className="text-white">&quot;within 15 days 
            after commencing performance of an undertaking on behalf of a client.&quot;</strong> Yet Gallant said 
            he became an &quot;advisor&quot; to Aecon in <strong className="text-white">early 2024</strong> — but didn&apos;t register 
            until <strong className="text-white">February 28, 2025</strong>.
          </p>
          <p className="text-white leading-relaxed mb-6">
            In a written statement to CBC News, Gallant said his February registration was his first ever 
            in the public lobbyist registry, which has existed since 2017. The delay between becoming an 
            &quot;advisor&quot; and registering as a lobbyist raises questions about whether he was performing 
            lobbying activities before formally registering — a potential violation of the 15-day rule.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Gallant&apos;s own history makes this relevant. In 2017, he forced out one of his MLAs, Donald 
            Arseneault, for taking on lobbying work while sitting as a backbencher. Gallant said at the 
            time that while lobbying rules allowed it, it would be seen as a conflict of interest. 
            <strong className="text-white"> The standard he once applied to others now applies to himself</strong>.
          </p>
        </section>

        {/* Section 4: Other Liberal Lobbyists */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Lobbyist Wave
          </h2>
          <p className="text-white leading-relaxed mb-6">
            According to CBC&apos;s investigation, the Holt Liberal government&apos;s election triggered a wave 
            of lobbying registrations from Liberal-connected consultants:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white mb-6">
            <li><strong className="text-white">Brian Gallant</strong> — Former Premier, registered for Aecon Group Inc.</li>
            <li><strong className="text-white">Shawn Graham</strong> — Former Premier, registered for Fertility Partners Inc. and Global University Systems Canada</li>
            <li><strong className="text-white">Three former Liberal cabinet ministers</strong> — All registered new clients since Holt was sworn in</li>
            <li><strong className="text-white">Two former Liberal advisers</strong> — Also registered new lobbying clients</li>
          </ul>
          <p className="text-white leading-relaxed mb-6">
            The pattern is clear: <strong className="text-white">those who served in previous Liberal governments are now cashing 
            in on their connections</strong> to the new Holt administration. The &quot;revolving door&quot; between government 
            service and lobbying is spinning faster than ever.
          </p>
        </section>

        {/* Quote Block */}
        <QuoteBlock
          quote="If a company wants to ask for a meeting themselves, or pay somebody to ask for them, it's still treated the same."
          author="Premier Susan Holt"
          role="When asked why companies pay lobbyists, June 2025"
          color="red"
        />

        {/* Section 5: The Irving Connection */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Irving Connection: Corporate Capture Continues
          </h2>
          <p className="text-white leading-relaxed mb-6">
            The lobbying wave isn&apos;t limited to former Liberal politicians. Corporate interests with deep 
            ties to New Brunswick&apos;s economy — particularly the Irving family — also have lobbyists 
            registered to influence the Holt government.
          </p>
          <p className="text-white leading-relaxed mb-6">
            In February 2026, the Holt government announced <strong className="text-white">$45 million in tariff relief</strong> for 
            Irving Paper — the same company that laid off 140 staff in 2025 citing &quot;uncompetitive rates.&quot; 
            The subsidy was announced while residential electricity customers faced a <strong className="text-white">19.4% rate 
            increase</strong> approved by the Energy and Utilities Board.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The Irving family&apos;s lobbying power is not new. For decades, their companies have secured 
            favorable treatment from governments of both parties: below-market Crown forest rates, 
            property tax caps for industrial facilities, electricity subsidies through LIREPP, and 
            retroactive tax refunds. The Holt government&apos;s $45 million grant to Irving Paper is 
            simply the latest chapter in a long history of corporate welfare.
          </p>
        </section>

        {/* Key Facts Grid - Replaced Timeline */}
        <section className="mt-12">
          <KeyFactsGrid facts={lobbyingKeyFacts} title="The Lobbying Machine" />
        </section>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Liberal lobbyists line up to influence Holt government" url="https://www.cbc.ca/news/canada/new-brunswick/new-lobbyists-holt-liberal-government-1.7548527" description="Two former premiers among consultants working for companies hoping to influence decision-makers" date="JUN 2025" />
            <SourceCard type="article" title="CBC: Aecon Group Nuclear and Gas Projects" url="https://www.aecon.com/" description="Major construction company with nuclear and natural gas experience" />
            <SourceCard type="article" title="Global University Systems Canada" url="https://www.gus.ca/" description="For-profit university chain with Caribbean medical schools" />
          </div>
        </section>
      </div>

      <CTASection
        icon={AlertTriangle}
        title="The revolving door must close."
        description="Former politicians should not be allowed to lobby their former colleagues. We demand a mandatory cooling-off period of at least 5 years for all former elected officials and senior staff."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
