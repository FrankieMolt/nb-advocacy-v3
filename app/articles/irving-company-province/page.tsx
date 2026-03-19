import { ShareButtons } from "@/components/ShareButtons";
import { Metadata } from "next";
import { Building, TreePine, Fuel, Newspaper, DollarSign, AlertTriangle } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://reformnb.ca/articles/irving-company-province/" },
  title: "New Brunswick: The Irving Company Province",
  description: "One family dominates a province. 1.8M acres of forest. 20 newspapers. Canada's largest refinery. An oligarchy unparalleled in the developed world.",
  keywords: [
    "Irving family", "New Brunswick oligarchy", "J.D. Irving", "Irving Oil",
    "company province", "monopoly", "Saint John", "forestry monopoly",
    "media ownership", "corporate control", "vertical integration"
  ].join(", "),
  openGraph: {
    title: "New Brunswick: The Irving Company Province | Reform NB",
    description: "An investigation into how one family came to control an entire province's economy, media, and government.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
        width: 1200,
        height: 675,
        alt: "Irving industrial empire in New Brunswick",
      },
    ],
  },
};

const irvingData = [
  { value: "1.8M", label: "Acres of Irving Forest", sublabel: "Plus 2.6M acres of Crown land harvested for Irving mills" },
  { value: "15,000+", label: "J.D. Irving Employees", sublabel: "In New Brunswick alone — the province's largest employer" },
  { value: "20", label: "Newspapers Owned", sublabel: "Including 3 daily papers — until 2022 sale to PostMedia" },
  { value: "$30B+", label: "Combined Family Wealth", sublabel: "Irving, McCain, Cooke — extracted from NB resources" },
];

const irvingSectors = [
  { icon: <Fuel size={20} />, name: "Oil & Gas", description: "Canada's largest refinery, Canaport LNG terminal, 900+ gas stations across Atlantic Canada and New England." },
  { icon: <TreePine size={20} />, name: "Forestry", description: "1.8M acres private forest + 2.6M acres Crown land. Sawmills, paper mills, tree nurseries, trucking fleet." },
  { icon: <Newspaper size={20} />, name: "Media", description: "Owned all 3 English dailies until 2022. 1970 Senate called it 'flagrant abuse of public interest'." },
  { icon: <Building size={20} />, name: "Construction & Retail", description: "Kent Building Supplies, Cavendish Farms, Irving Tissue, Irving Shipbuilding ($25B federal contracts)." },
];

export default function IrvingCompanyProvincePage() {
  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={Building}
        title="The Company Province"
        quote="Several books and a Canadian-government report have noted that this power over a province by one family is probably unparalleled in the developed world."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
          alt="Irving Oil refinery in Saint John, New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-sm text-white uppercase tracking-widest text-center">
          Irving Oil refinery, Saint John — Canada's largest oil refinery and the heart of the Irving empire
        </div>
      <ShareButtons title="" />
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {irvingData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1: Irving Everywhere */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            If You Cruise Down the Highway, You See Irving Everywhere
          </h2>
          <p className="text-white leading-relaxed mb-6">
            If you cruise down the superhighway that crosses Saint John, you will see Irving everywhere.
          </p>
          <p className="text-white leading-relaxed mb-6">
            That big building rising up in the city center: home office for <strong className="text-white">J.D. Irving&apos;s 
            15,000 employees</strong>. Go off the highway to grab a coffee at an Irving Oil gas station on 
            Fairville Boulevard and across the street is <strong className="text-white">Kent Building Supplies</strong>, 
            a J.D. Irving company with 42 outlets employing 2,800 people in the Maritimes.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Drive a few streets away to look at the picturesque Reversing Falls. Across the tidal rapid 
            is a huge <strong className="text-white">J.D. Irving paper mill</strong>. Head into the historic downtown — 
            known as Uptown — and you&apos;ll pass the offices of Saint John&apos;s daily <em>Telegraph-Journal</em>, 
            flagship of the Irving family&apos;s <strong className="text-white">20 newspapers</strong> in the province.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Those two tankers in Courtenay Bay? <strong className="text-white">Irving Oil</strong>. That mammoth refinery 
            not far away with 150 oil tanks? Of course, Irving Oil. Just outside the city, directly on 
            the Bay of Fundy, is Irving Oil&apos;s supertanker terminal, <strong className="text-white">Canaport</strong>, which 
            takes in 100 million barrels a year.
          </p>
        </section>

        {/* Sector Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          {irvingSectors.map((sector, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-crisis-red/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-white">{sector.icon}</span>
                <h4 className="text-white font-black uppercase tracking-tight text-sm">{sector.name}</h4>
              </div>
              <p className="text-white text-sm leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>

        {/* Section 2: The Oligarchy */}
        <section className="bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
            &ldquo;Welcome to an Oligarchy&rdquo;
          </h2>
          <p className="text-white leading-relaxed mb-6">
            <em>&ldquo;Welcome to an oligarchy,&rdquo;</em> quipped Gordon Dalzell, greeting a visitor to Saint John. 
            He has spent 15 years struggling with the Irving companies — successfully — to make the 
            city&apos;s air cleaner as a leader of the city&apos;s Citizens Coalition for Clean Air. 
            <strong className="text-white"> The refinery, he said, used to smell &quot;like a match burning.&quot;</strong>
          </p>
          <p className="text-white leading-relaxed mb-6">
            Several books and a Canadian-government report have noted that this power over a province by 
            one family is <strong className="text-white">probably unparalleled in the developed world</strong>.
          </p>
          <p className="text-white leading-relaxed mb-6">
            In Maine, so far, only Aroostook County comes close to seeing this kind of Irving presence. 
            &ldquo;They own the northern part of the state,&rdquo; said Shelly Mountain, of Presque Isle, referring 
            to J.D. Irving&apos;s influence on the forest economy there. An environmental activist, she&apos;s married 
            to a logger.
          </p>
        </section>

        {/* Section 3: Not Prosperous */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            Irving Domination Has Not Made NB Prosperous
          </h2>
          <p className="text-white leading-relaxed mb-6">
            What would that mean? New Brunswick&apos;s Irving critics first point out that Irving domination 
            has <strong className="text-white">not made the province prosperous</strong>.
          </p>
          <p className="text-white leading-relaxed mb-6">
            In terms of family income, it&apos;s <strong className="text-white">Canada&apos;s poorest province</strong>, according 
            to the federal agency Statistics Canada, which recently reported that New Brunswick&apos;s population 
            of 750,000 is continuing to <strong className="text-white">shrink</strong>, attributing the decrease to a lack of jobs.
          </p>
          <p className="text-white leading-relaxed mb-6">
            J.D. Irving&apos;s sleek headquarters in Saint John is surrounded by neighborhoods with 
            <strong className="text-white"> unpainted houses and crumbling sidewalks</strong>.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Whatever the reasons for New Brunswick&apos;s persistent poverty, the undisclosed profits made by 
            the Irving family and its corporations haven&apos;t resulted in a lot of tax receipts to support 
            public services.
          </p>
        </section>

        {/* Quote Block */}
        <QuoteBlock
          quote="They own the northern part of the state."
          author="Shelly Mountain"
          role="Environmental activist, Presque Isle, Maine"
          color="red"
        />

        {/* Section 4: The Irving Threat to Maine */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">
            The Irving Threat to Maine
          </h2>
          <p className="text-white leading-relaxed mb-6">
            As described in investigative reports, J.D. Irving&apos;s recent aggressive lobbying of Maine 
            state government on forestry and mining issues and Irving Oil&apos;s domination of Maine&apos;s 
            wholesale petroleum-products market could suggest the beginnings of a New-Brunswick-like 
            future for the state.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The Maine Monitor&apos;s three-part series investigating the Irving corporate presence in Maine 
            and New Brunswick documented how the family&apos;s influence extends across the border:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-white mb-6">
            <li>Irving Oil dominates Maine&apos;s wholesale petroleum market</li>
            <li>J.D. Irving lobbies aggressively on Maine forestry and mining regulations</li>
            <li>The family&apos;s vertical integration model could be replicated in Maine&apos;s forest economy</li>
          </ul>
        </section>

        {/* Section 5: NYT Investigation */}
        <section className="bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
            NYT: A Culture of &apos;Keeping Your Mouth Shut&apos;
          </h2>
          <p className="text-white leading-relaxed mb-6">
            In April 2025, the <strong className="text-white">New York Times</strong> published a major investigation 
            titled &ldquo;A Family Business Empire, and a Culture of &apos;Keeping Your Mouth Shut&apos;&rdquo;:
          </p>
          <p className="text-white leading-relaxed mb-6 italic">
            &ldquo;Even in a frequently fogbound port city along the Atlantic Ocean, the billowing clouds of steam 
            rising from Canada&apos;s largest oil refinery over Saint John, New Brunswick, are impossible to miss.
          </p>
          <p className="text-white leading-relaxed mb-6 italic">
            On a ridge overlooking the refinery sit six enormous tanks, each containing one million barrels of 
            crude oil. Letters painted in dark blue spell &quot;Irving,&quot; the family whose businesses dominate 
            not only Saint John, but most of New Brunswick.&rdquo;
          </p>
          <p className="text-white leading-relaxed mb-6">
            The Times documented Irving-owned railway tracks crisscrossing the city, linking smaller factories 
            owned by the family to ports under Irving control. Irving-owned building-supply stores and gas 
            stations dot the streets. Park signs honor Irving contributions to their upkeep.
          </p>
          <p className="text-white leading-relaxed mb-6">
            The investigation noted that Irving businesses are a major employer — but residents said those 
            jobs have come with <strong className="text-white">a steep cost</strong>.
          </p>
        </section>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="Maine Monitor: New Brunswick, Irving Company Province" url="https://themainemonitor.org/new-brunswick-irving-company-province/" description="Three-part series on Irving corporate presence in Maine and New Brunswick" date="2016" />
            <SourceCard type="article" title="New York Times: The Irving Family" url="https://www.nytimes.com/2025/04/01/world/canada/irving-family-canada-oil-environment.html" description="A Family Business Empire, and a Culture of 'Keeping Your Mouth Shut'" date="APR 2025" />
            <SourceCard type="article" title="CBC: Irving Property Taxes" url="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058" description="U.S. refineries pay 5x more property taxes than Irving" />
            <SourceCard type="article" title="Paradise Papers: Irving Bermuda Tax Haven" url="https://www.cbc.ca/news/canada/new-brunswick/irving-oil-offshore-tax-haven-bermuda-1.4386877" description="8 Bermuda holding companies, $3B tax-free trust" date="2017" />
          </div>
        </section>
      </div>

      <CTASection
        icon={AlertTriangle}
        title="The company province must end."
        description="No single family should control a province's economy, media, and government. We demand an investigation into the Irving monopoly and its impact on New Brunswick's democracy."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
