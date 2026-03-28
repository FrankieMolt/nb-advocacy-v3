import { ShareButtons } from "@/components/ShareButtons";
import { Metadata } from "next";
import { AlertTriangle, DollarSign, Users, Scale } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://nbreform.ca/articles/atcon-scandal/" },
  title: "The Atcon Scandal: $70M Lost",
  description: "When Liberal cabinet approved $70M in loans for a failing company despite civil servant warnings. Premier Shawn Graham found in conflict of interest. Taxpayers paid the price.",
  keywords: [
    "Atcon scandal", "Shawn Graham", "New Brunswick", "$70 million",
    "conflict of interest", "taxpayer money", "bankruptcy", "Miramichi"
  ].join(", "),
  openGraph: {
    title: "The Atcon Scandal: $70M Lost | Reform NB",
    description: "How political decisions cost New Brunswick taxpayers $70 million when cabinet ignored warnings.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        width: 1200,
        height: 675,
        alt: "Atcon scandal investigation - Reform NB",
      },
    ],
  },
};

const atconData = [
  { value: "$70M", label: "Loans & Guarantees", sublabel: "Approved by Liberal cabinet despite warnings the company would fail" },
  { value: "$63M", label: "Taxpayers Lost", sublabel: "Almost the entire amount when Atcon went bankrupt in April 2010" },
  { value: "6", label: "Ministers Approved", sublabel: "Six former Graham cabinet ministers who approved funding later returned in Gallant government" },
  { value: "2015", label: "RCMP Investigation", sublabel: "PC opposition delivered Atcon servers to RCMP — no charges ever laid" },
];

const atconKeyFacts = [
  {
    icon: "money" as const,
    title: "Taxpayer Loss",
    value: "$63M",
    description: "When Atcon went bankrupt in April 2010, taxpayers lost almost all of the $70 million. Auditor General found the company was 'so badly managed, taxpayers' money was never going to save it.'",
    source: "Auditor General Report"
  },
  {
    icon: "warning" as const,
    title: "Warnings Ignored",
    value: "Civil Servants",
    description: "Civil servants warned that Atcon was likely to fail regardless of the funding. Cabinet approved the loans anyway, citing potential job losses in Miramichi.",
    source: "CBC News Investigation"
  },
  {
    icon: "users" as const,
    title: "Conflict of Interest",
    value: "Premier Graham",
    description: "Premier Shawn Graham was found to be in a conflict of interest because of his father's business connections to Atcon. He was fined $3,500 and eventually resigned as Liberal leader.",
    source: "Conflict of Interest Commissioner (2013)"
  },
  {
    icon: "money" as const,
    title: "Graham Fine",
    value: "$3,500",
    description: "Shawn Graham was fined $3,500 by Conflict of Interest Commissioner Justice Patrick Ryan for failing to disclose his father Alan Graham's role as director of Atcon subsidiary Vänerply.",
    source: "CBC News (Feb 2013)"
  },
  {
    icon: "document" as const,
    title: "Six Ministers Returned",
    value: "2014",
    description: "Six former Graham cabinet ministers who approved the Atcon funding remained MLAs and returned as ministers in Brian Gallant's 2014 government. The PCs used the scandal for years.",
    source: "Legislative Records"
  },
  {
    icon: "building" as const,
    title: "Travel Nurse Parallels",
    value: "$173M",
    description: "In 2024, Auditor General Paul Martin slammed $173M in travel nurse contracts signed without due diligence. MLAs compared it to Atcon: 'one of the worst economic scandals in NB history.'",
    source: "CBC News, 2024"
  },
  {
    icon: "scale" as const,
    title: "No Charges Laid",
    value: "2015",
    description: "PC opposition delivered Atcon servers to RCMP for investigation. Despite years of hearings and two auditor general reports, no criminal charges were ever laid.",
    source: "RCMP"
  }
];

export default function AtconScandalPage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={AlertTriangle}
        title="The Atcon Scandal"
        quote="With Atcon, we've been able to find out over time that cabinet was directly related to that. We don't know here if any of that happened. — PC MLA Jeff Carr comparing Atcon to travel nurse contracts"
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
          alt="Government documents representing the Atcon scandal"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-sm text-white uppercase tracking-widest text-center">
          Liberal Premier Shawn Graham was found in conflict of interest over Atcon loans | CBC News
        </div>
      <ShareButtons title="" />
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {atconData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">The Atcon Scandal: $70M Lost</h1>

        {/* Section 1: What Happened */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            $70 Million in Loans, Nothing to Show
          </h2>
          <p className="text-white leading-relaxed mb-6">
            In 2009, the Liberal government of <strong className="text-white">Shawn Graham</strong> approved 
            $70 million in loans and loan guarantees for Atcon, a Miramichi-based forestry and construction company. 
            The government argued the funding was needed to prevent major job losses in the region.
          </p>
          <p className="text-white leading-relaxed mb-6">
            But civil servants had warned that the company was likely to fail regardless — and take the 
            $70 million with it. The warnings were ignored. In April 2010, Atcon went bankrupt, and 
            taxpayers lost almost the entire amount.
          </p>
        </section>

        {/* Key Facts Grid */}
        <section className="mt-12">
          <KeyFactsGrid facts={atconKeyFacts} title="Scandal by the Numbers" />
        </section>

        {/* Section 2: Conflict of Interest */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Conflict of Interest
          </h2>
          <p className="text-white leading-relaxed mb-6">
            It later emerged that Premier Shawn Graham&apos;s father had business connections to Atcon. 
            The conflict of interest commissioner found Graham had violated the Members&apos; Conflict 
            of Interest Act. Graham eventually resigned as Liberal leader.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The Progressive Conservatives feasted on the scandal for years. They used the public 
            accounts committee, bankruptcy proceedings, and two auditor general reports to keep 
            the issue in the public eye.
          </p>
        </section>

        {/* Quote Block */}
        <QuoteBlock
          quote="When he talks about financial disasters — remember the Atcon scandal."
          author="Bruce Fitch"
          role="Health Minister, responding to travel nurse controversy"
          color="red"
        />

        {/* Section 3: Parallels Today */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            History Repeats: Travel Nurse Contracts
          </h2>
          <p className="text-white leading-relaxed mb-6">
            In 2024, Auditor General Paul Martin delivered a scathing report on $173 million in 
            travel nurse contracts. He described a litany of problems: contracts inked without 
            due diligence, rates of up to $300 per hour per nurse, and auto-renewal clauses 
            that could extend contracts beyond 2026.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The parallels to Atcon were immediate. Liberal MLA Robert Gauvin called it &quot;one of 
            the worst economic scandals in the history of New Brunswick.&quot; Health Minister 
            Bruce Fitch responded by invoking Atcon: &quot;When he talks about financial disasters — 
            remember the Atcon scandal.&quot;
          </p>
          <p className="text-white leading-relaxed mb-6">
            The ghosts of Atcon continue to haunt New Brunswick politics. The question remains: 
            have we learned anything from losing $63 million in taxpayer money?
          </p>
        </section>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Ghosts of Atcon Haunt Travel Nurse Debate" url="https://www.cbc.ca/news/canada/new-brunswick/atcon-scandal-compared-to-travel-nurse-contracts-1.7225832" description="How Atcon became the benchmark for NB political scandals" />
            <SourceCard type="article" title="CBC: Atcon Was So Badly Managed" url="https://www.cbc.ca/news/canada/new-brunswick/atcon-funding-auditor-general-report-1.4317029" description="Auditor General report on the $63M loss" />
            <SourceCard type="article" title="CBC: Travel Nurse Contracts Slammed by AG" url="https://www.cbc.ca/news/canada/new-brunswick/auditor-general-travel-nurse-1.7223806" description="$173M in contracts without due diligence" />
            <SourceCard type="article" title="Wikipedia: Shawn Graham" url="https://en.wikipedia.org/wiki/Shawn_Graham" description="Conflict of interest findings and political fallout" />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
