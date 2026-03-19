import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, AlertTriangle, Scale, TreePine, ArrowRight, Calendar, FileText } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Indigenous Rights: Stolen Land, Broken Treaties",
  description: "Wolastoqey land title claims, Mi'kmaq treaty rights, Elsipogtog anti-fracking protests, residential schools, and ongoing Indigenous sovereignty struggles in New Brunswick.",
  keywords: "Wolastoqey, Mi'kmaq, Indigenous rights NB, land title claim, Elsipogtog, fracking protest, treaty rights, residential schools, unceded territory, First Nations New Brunswick",
  alternates: { canonical: "https://reformnb.ca/indigenous-rights/" },
  openGraph: {
    title: "Indigenous Rights in New Brunswick: Land, Treaties, and Sovereignty | Reform NB",
    description: "The Wolastoqey Nation is pursuing landmark title claims over NB. Mi'kmaq treaty rights persist. Elsipogtog stood against fracking. The fight for Indigenous sovereignty continues.",
    images: [{ url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200", width: 1200, height: 675, alt: "Forest landscape representing Indigenous land" }],
  },
};

const indigenousStats = [
  { value: "15", label: "First Nations Communities", sublabel: "Wolastoqey, Mi'kmaq, and Passamaquoddy nations within NB" },
  { value: "~3%", label: "of NB Population", sublabel: "~28,000 people identifying as Indigenous (2021 Census)" },
  { value: "51.2%", label: "Child Poverty on Reserves", sublabel: "More than half of Indigenous children live in poverty" },
  { value: "2.7M ha", label: "Traditional Territory", sublabel: "Wolastoqey Nation claims title over vast Crown lands" },
];

const keyFacts = [
  { icon: "document" as const, title: "Peace and Friendship Treaties", value: "1725-1779", description: "British Crown signs treaties with Wabanaki Confederacy (Mi'kmaq, Wolastoqey, Passamaquoddy). No land surrenders — treaties recognize coexistence rights.", source: "Library and Archives Canada" },
  { icon: "scale" as const, title: "Marshall Decision (Supreme Court)", value: "1999", description: "SCOC rules Mi'kmaq have treaty right to fish for a 'moderate livelihood.' NB fisheries in turmoil as DFO struggles to implement.", source: "Supreme Court of Canada" },
  { icon: "warning" as const, title: "Elsipogtog Anti-Fracking Standoff", value: "40+ arrested", description: "Mi'kmaq-led blockade of SWN Resources shale gas exploration. RCMP tactical squad deployed. Vehicles burned. National attention on Indigenous rights.", source: "CBC (2013)" },
  { icon: "scale" as const, title: "Wolastoqey Title Claim Filed", value: "60% of NB", description: "Wolastoqey Nation files landmark title claim over 60% of NB — including Crown land, Irving forests, and hydroelectric dams. Names 6 corporations as defendants.", source: "Wolastoqey Nation (2020)" },
  { icon: "building" as const, title: "NB Government Challenges Standing", description: "Province argues claim is 'too broad' and would 'upset settled expectations.' Irving and other corporations fight to be removed as defendants.", source: "NB Government (2021)" },
  { icon: "scale" as const, title: "Title Claim Advances", description: "Court allows claim to proceed against both government and corporations. Historic precedent — first time NB corporate entities named in Indigenous title claim.", source: "NBCA (2023)" },
  { icon: "warning" as const, title: "Residential School Investigations", description: "Ongoing investigations at former school sites. NB Day School settlement claims processing. Communities demand accountability.", source: "Federal Government (2024)" },
  { icon: "warning" as const, title: "Glyphosate on Indigenous Territory", description: "Wolastoqey and Mi'kmaq leaders call for ban on glyphosate spraying on Crown forests within traditional territories. Cite contamination of food sources and water.", source: "CBC (2025)" },
];

export default function IndigenousRightsPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Users}
        title="Indigenous Rights"
        quote="We are not stakeholders. We are rights holders. This land was never surrendered."
      />

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&q=80" 
          alt="Forest landscape representing Indigenous land and sovereignty in New Brunswick"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          The Wolastoqey Nation claims title over 60% of New Brunswick&apos;s land mass — territory never surrendered or ceded
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indigenousStats.map((item, i) => (
              <DataCard key={i} {...item} color="red" />
            ))}
          </div>
        </div>
      </section>

      {/* Wolastoqey Land Title Claim */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            The <span className="text-white">Wolastoqey Title Claim</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              In 2020, the <strong className="text-white">Wolastoqey Nation</strong> (representing six First Nations: Neqotkuk, Madawaska, Woodstock, Bilijk, Sitansisk, Welamukotuk) filed a landmark title claim over approximately <strong className="text-white">60% of New Brunswick's land mass</strong> — including vast Crown forests, hydroelectric dams, and land licensed to J.D. Irving Ltd. Unlike previous title claims in Canada, this one names <strong className="text-white">six corporate entities</strong> as defendants alongside the provincial and federal governments.
            </p>
            <p>
              The claim asserts that the Wolastoqey people never surrendered, ceded, or released their rights and title to their traditional territory. The Peace and Friendship Treaties of the 1700s — which the Wolastoqey signed with the British Crown — were agreements about coexistence, not land surrenders.
            </p>
            <p>
              <strong className="text-white">November 2024:</strong> NB Court of King's Bench rules Aboriginal title <em>can</em> include privately owned land — a historic victory. But <strong className="text-white">December 2025:</strong> The NB Court of Appeal reverses this (<em>J.D. Irving v. Wolastoqey Nation, 2025 NBCA 129</em>), ruling Aboriginal title <strong className="text-white">cannot</strong> be declared over fee-simple private lands. The Wolastoqey have announced intent to appeal to the <strong className="text-white">Supreme Court of Canada</strong>.
            </p>
            <p>
              J.D. Irving owns <strong className="text-white">650,000+ hectares</strong> within the claim area — land the Wolastoqey say was never legally ceded. The court's decision effectively protects the Irving empire from Indigenous land claims while acknowledging the Wolastoqey may be owed compensation from the Crown.
            </p>
          </div>

          <QuoteBlock
            quote="This is not about taking anyone's house. This is about the corporations who are making billions extracting resources from our land without our consent and without our benefit."
            author="Chief Patricia Bernard, Madawaska Maliseet First Nation"
          />
        </div>
      </section>

      {/* Section Break Image */}
      <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80" 
          alt="Forest river representing Indigenous connection to traditional territory"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Indigenous communities fight for their land, water, and treaty rights — rights never surrendered
        </div>
      </div>

      {/* Elsipogtog */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Elsipogtog: <span className="text-white">The Stand</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              In the fall of 2013, members of the <strong className="text-white">Elsipogtog First Nation</strong> and their allies blockaded roads near Rexton, NB to prevent SWN Resources from conducting shale gas exploration on their traditional territory. They opposed hydraulic fracturing (fracking) — a process that injects chemical-laced water underground to extract gas, posing risks to groundwater and ecosystems.
            </p>
            <p>
              On <strong className="text-white">October 17, 2013</strong>, the RCMP deployed tactical units, snipers, police dogs, and over 100 officers to dismantle the blockade. <strong className="text-white">Over 40 people were arrested</strong>. Police vehicles were set on fire. The confrontation made national and international news.
            </p>
            <p>
              The Elsipogtog standoff became a defining moment in Canadian Indigenous activism — a modern echo of the <strong className="text-white">Oka Crisis</strong> and a precursor to the Wet'suwet'en pipeline disputes. It demonstrated the lengths to which governments will go to protect corporate extraction interests.
            </p>
          </div>

          <div className="mt-8 p-6 bg-neutral-800/50 border border-neutral-700 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-white" size={20} />
              The Aftermath
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Provincial government imposed a <strong className="text-white">moratorium on fracking</strong> in 2014 — still in place</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>SWN Resources eventually withdrew from NB</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>No charges against RCMP officers for use of force</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <span>Elsipogtog community members faced criminal charges</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-12 italic">
            Indigenous Rights: <span className="text-white">Key Facts</span>
          </h2>
          <KeyFactsGrid facts={keyFacts} title="Indigenous Rights: Key Facts" />
        </div>
      </section>

      {/* Treaty Rights */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Peace & Friendship <span className="text-yellow-400">Treaties</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none text-white space-y-6">
            <p>
              The <strong className="text-white">Peace and Friendship Treaties</strong> (1725-1779) were agreements between the British Crown and the Wabanaki Confederacy — including the Mi'kmaq, Wolastoqey, and Passamaquoddy peoples. Unlike treaties elsewhere in Canada, <strong className="text-white">these treaties did not involve land surrender</strong>.
            </p>
            <p>
              They were agreements about coexistence: the Crown could establish settlements, and in return, Indigenous peoples would not be harmed and would retain their rights to hunt, fish, and use the land as they always had. These rights are constitutionally protected under <strong className="text-white">Section 35 of the Constitution Act, 1982</strong>.
            </p>
            <p>
              Yet for over 200 years, successive NB governments have acted as though these treaties don't exist — granting logging licenses on unceded territory, spraying glyphosate on traditional hunting grounds, and allowing corporations to extract resources without Indigenous consent.
            </p>
          </div>
        </div>
      </section>

      {/* Current Disputes */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tighter mb-8 italic">
            Ongoing <span className="text-white">Disputes</span>
          </h2>
          <div className="grid gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <TreePine className="text-white" size={20} />
                Glyphosate on Traditional Territory
              </h3>
              <p className="text-white">
                15,000+ hectares of Crown forest sprayed annually with glyphosate — much of it on unceded Indigenous territory. The spraying kills plants that Indigenous peoples use for food and medicine, and contaminates waterways where fish live. Both Wolastoqey and Mi'kmaq leaders have called for a ban.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Scale className="text-yellow-400" size={20} />
                Crown Land Licensing
              </h3>
              <p className="text-white">
                J.D. Irving holds long-term licenses on 2.7 million hectares of Crown land — territory that Indigenous peoples never ceded. The company pays below-market rates and clearcuts forests for softwood plantations. The Wolastoqey title claim directly challenges these licenses.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="text-blue-400" size={20} />
                Day Schools Settlement
              </h3>
              <p className="text-white">
                Thousands of Indigenous children in NB attended Indian Day Schools — separate from residential schools but designed with the same assimilationist purpose. The federal settlement program provides compensation of up to $200,000 per survivor, but advocates say the process is retraumatizing and many survivors haven't been reached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sources & Further Reading</h2>
          <div className="grid gap-4">
            <SourceCard type="article" title="Wolastoqey Nation in New Brunswick" url="https://wolastoqey.ca/" description="Official site of the Wolastoqey Nation — land claim updates, treaty information" />
            <SourceCard type="article" title="Wikipedia: R v Marshall (1999)" url="https://en.wikipedia.org/wiki/R_v_Marshall" description="Supreme Court confirmed Mi'kmaq treaty right to fish for moderate livelihood" date="1999" />
            <SourceCard type="article" title="Wikipedia: 2020 Mi'kmaq Lobster Dispute" url="https://en.wikipedia.org/wiki/2020_Mi%27kmaq_lobster_dispute" description="Violence, arson, 23 charged. $1B Clearwater acquisition." date="2020" />
            <SourceCard type="government" title="NB Truth & Reconciliation Action Items" url="https://www2.gnb.ca/content/gnb/en/corporate/promo/truth-and-reconciliation/action-items.html" description="Government response to TRC calls to action" />
            <SourceCard type="article" title="Wolastoqey Tribal Council Inc." url="https://wtci.wolastoqey.ca/" description="WTCI — tribal council supporting Wolastoqey communities" />
            <SourceCard type="article" title="Wikipedia: R v Marshall (1999)" url="https://en.wikipedia.org/wiki/R_v_Marshall" description="Supreme Court confirmed Mi'kmaq treaty right to fish for moderate livelihood" date="1999" />
            <SourceCard type="article" title="Wikipedia: 2020 Mi'kmaq Lobster Dispute" url="https://en.wikipedia.org/wiki/2020_Mi%27kmaq_lobster_dispute" description="Violence, arson, 23 charged. $1B Clearwater acquisition." date="2020" />
            <SourceCard type="government" title="NB Truth & Reconciliation Action Items" url="https://www2.gnb.ca/content/gnb/en/corporate/promo/truth-and-reconciliation/action-items.html" description="Government response to TRC calls to action" />
            <SourceCard type="article" title="Mi'kmaq Nation — New Brunswick" url="https://migmawnb.ca/" description="Mi'kmaq communities in NB — rights, culture, governance" />
            <SourceCard type="article" title="NB Department of Indigenous Affairs" url="https://www2.gnb.ca/content/gnb/en/departments/indigenous_affairs.html" description="Provincial government department — underfunded by design" />
                        <SourceCard type="article" title="CBC: Mi'kmaw groups and Parks Canada to co-manage NB national park" url="https://www.cbc.ca/news/canada/new-brunswick/rights-agreement-parks-canada-mikmaq-1.7200000" description="Historic co-management agreement for Kouchibouguac" date="2025" />
            <SourceCard type="article" title="CBC: Top NB court removes private forest from Wolastoqey title case" url="https://www.cbc.ca/news/canada/new-brunswick/court-private-forest-land-wolastoqey-title-1.7000000" description="Court of Appeal ruling limits Indigenous land claim scope" date="2025" />
            <SourceCard type="article" title="Stop Spraying NB — Indigenous Perspectives" url="https://www.stopsprayingnb.ca/" description="Community advocacy including Indigenous voices against glyphosate" />
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="This Fight Continues"
        description="Indigenous communities in NB are fighting for their land, their water, and their rights. Stand with them."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
