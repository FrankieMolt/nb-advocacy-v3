import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Environmental Devastation | Reform NB",
  description: "96% salmon collapse, 15,000 hectares of glyphosate spraying, 3M+ tonnes of CO2. The environmental destruction of New Brunswick.",
};
import { PageWrapper } from '@/components/PageWrapper';
import { BackLink } from '@/components/BackLink';
import { RelatedPages } from "@/components/RelatedPages";
import { CTASection } from '@/components/CTASection';
import { DataCard } from '@/components/DataCard';
import { Timeline } from '@/components/Timeline';
import { QuoteBlock } from '@/components/QuoteBlock';
import { VideoGrid } from '@/components/VideoGrid';
import { SourceCard } from '@/components/SourceCard';
import { Fish, TreePine, Skull, AlertTriangle, Shield, Factory } from 'lucide-react';
import Image from 'next/image';

const environmentData = [
  { value: "96%", label: "Salmon Collapse", sublabel: "Miramichi River wild Atlantic salmon returns at historic lows" },
  { value: "15K ha", label: "Glyphosate Sprayed/Year", sublabel: "Public forests sprayed for industrial softwood yield — more than any other province" },
  { value: "3M+ tonnes", label: "NB Power CO₂ Emissions", sublabel: "16-year high — 4M barrels of oil burned at Coleson Cove alone" },
  { value: "60%", label: "Emissions Increase YoY", sublabel: "Despite 'net-zero' promises, emissions surge while ratepayers face 50% hikes" },
];

const environmentTimeline = [
  { date: "1980s", title: "Deer Harvest Collapses 60%", description: "Clearcutting and glyphosate spraying destroy habitat. Deer harvest drops 60% from mid-1980s levels.", color: "red" as const },
  { date: "2001", title: "Quebec Bans Glyphosate on Crown Land", description: "Quebec bans forestry herbicide spraying on public forests. NB continues spraying more than any other province.", color: "gold" as const },
  { date: "2015", title: "Salmon's Knock-Out Blow Published", description: "Inka Milewski documents how industrial forestry — not overfishing — is destroying wild salmon habitat.", color: "red" as const },
  { date: "2017", title: "Irving Threatens Salmon Group", description: "J.D. Irving's chief biologist warns Miramichi Headwaters Salmon Federation they will lose river access if they oppose glyphosate.", color: "red" as const },
  { date: "2021", title: "Wolastoqey Block Lake Poisoning", description: "Wolastoqiyik grandmothers and mothers take to the water to stop DFO's rotenone poisoning of Miramichi Lake.", color: "gold" as const },
  { date: "NOV 2021", title: "Wolastoqey Land Title Claim Filed", description: "Six Wolastoqey First Nations file claim for 5M hectares against Irving, NB Power, and forestry companies.", color: "gold" as const },
  { date: "JUN 2025", title: "Irving Refinery Fire", description: "Product leak ignites at Saint John refinery. Toxic plume over residential neighborhoods dismissed as 'routine'.", color: "red" as const },
  { date: "MAR 2026", title: "Fredericton Chemical Spill", description: "Potentially cancer-causing chemical coats roads across Fredericton. Government slow to respond or notify.", color: "red" as const },
  { date: "MAR 2026", title: "NB Power Emissions 16-Year High", description: "EUB filings reveal 4M barrels of oil burned. Emissions up 60% YoY. Carbon penalties: $49M.", color: "red" as const },
];

export default function EnvironmentPage() {
  return (
    <PageWrapper>
      <BackLink href="/" label="Back to Home" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]" aria-hidden="true">
          <Fish size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-white uppercase">Environment & Ecocide</h1>
      </div>
      <div className="bg-neutral-900 border-l-4 border-crisis-red p-6 mb-12 rounded-r-lg">
        <p className="text-lg text-neutral-300">The slow death of New Brunswick&apos;s rivers, forests, wild Atlantic salmon, and the corporate impunity that enables ecological destruction</p>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {environmentData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>
      
      {/* Hero Image */}
      <div className="my-10 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80"
          alt="Aerial view of forest clearcutting - devastated landscape"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center">
          New Brunswick&apos;s Crown forests are clearcut and sprayed with glyphosate — destroying salmon habitat and poisoning watersheds
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        
        {/* Section 1: Salmon Collapse */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Fish className="text-crisis-text" size={28} aria-hidden="true" />
            The Wild Atlantic Salmon Collapse
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The Miramichi River was once the world&apos;s greatest Atlantic salmon river. Today, returns are 
            <strong className="text-white"> at historic lows</strong>. The culprit? A combination of 
            industrial forestry clearcutting, glyphosate spraying that destroys riparian habitat, warming 
            waters from deforestation, and a federal Department of Fisheries and Oceans (DFO) that has 
            failed to protect the species from extinction.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Despite catch restrictions on anglers, thousands of volunteer hours dedicated to river 
            enhancement, and millions of dollars spent on conservation, wild salmon returns continue 
            to decline. The fish are dying not from overfishing — but from <strong className="text-white">
            habitat destruction driven by corporate forestry</strong>.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The science is clear: glyphosate — classified as a &quot;probable human carcinogen&quot; by 
            the World Health Organization — kills the riparian vegetation that shades streams and 
            provides habitat for the insects salmon feed on. Clearcutting removes the tree canopy 
            entirely, raising water temperatures beyond the tolerance of cold-water species. Together, 
            these practices have reduced the Miramichi&apos;s salmon habitat to a fraction of its historical 
            extent.
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-crisis-red/30">
            <p className="text-white text-lg font-bold italic leading-tight mb-3">
              &ldquo;With catch restrictions placed on salmon anglers, thousands of volunteer hours 
              dedicated to river enhancement projects, millions of dollars spent on conservation — 
              the wild salmon are still dying. The knock-out blow isn&apos;t coming from fishing. 
              It&apos;s coming from our forests.&rdquo;
            </p>
            <div className="text-xs font-black text-crisis-text uppercase tracking-[0.3em]">
              — Inka Milewski, NB Media Co-op (2015)
            </div>
            <a href="https://nbmediacoop.org/2015/11/13/wild-salmons-knock-out-blow/" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline text-sm mt-2 inline-block">[NB Media Co-op: Wild Salmon&apos;s Knock-Out Blow]</a>
          </div>
        </section>

        {/* Section 2: Irving Intimidation */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Shield className="text-crisis-gold" size={28} aria-hidden="true" />
            &ldquo;We Won&apos;t Be Intimidated&rdquo;
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In 2017, the <strong className="text-white">Miramichi Headwaters Salmon Federation</strong> became 
            the first salmon conservation group to publicly oppose glyphosate spraying. What happened next 
            reveals how Irving silences dissent.
          </p>
          <QuoteBlock
            quote="John Gilbert, J.D. Irving's chief biologist, warned us that JDI would withdraw access to the river. It has been open since, well, forever."
            author="Kevin Shaw"
            role="Director, Miramichi Headwaters Salmon Federation"
            color="gold"
          />
          <p className="text-neutral-400 leading-relaxed mt-6 mb-6">
            Gilbert called the Federation&apos;s president, Randy Lutes, and asked him not to attend a 
            press conference organized by the Alliance to Stop Spraying. The message was clear: oppose 
            Irving&apos;s spraying, and you lose river access. J.D. Irving denied the intimidation, claiming 
            Gilbert acted &ldquo;without the knowledge of JDI.&rdquo;
          </p>
          <p className="text-neutral-400 leading-relaxed mb-4">
            According to the Alliance, <strong className="text-white">deer harvest dropped 60%</strong> since 
            the mid-1980s as clearcutting and glyphosate spraying destroyed habitat. Quebec banned 
            spraying on Crown forests in 2001. New Brunswick continues to spray more than any other 
            province — 40% of forest land cut in 2014 was sprayed with glyphosate, compared to 28% 
            in Ontario and 11% in Nova Scotia.{" "}
            <a href="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline">[NB Media Co-op: We Won&apos;t Be Intimidated]</a>
          </p>
        </section>

        {/* Video: Miramichi Salmon */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 Video: Salmon Conservation</h3>
          <VideoGrid
            columns={1}
            videos={[
              {
                videoId: "FLGCGc7sAUw",
                title: "Atlantic Salmon Conservation Miramichi River",
                caption: "The Miramichi River — once the world's greatest Atlantic salmon river — faces collapse from industrial forestry."
              }
            ]}
          />
        </div>

        {/* Section 3: Lake Poisoning */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Skull className="text-crisis-text" size={28} aria-hidden="true" />
            The Lake Poisoning Controversy
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In 2021, the Department of Fisheries and Oceans approved the use of <strong className="text-white">
            rotenone</strong> — a fish pesticide — to poison Miramichi Lake, Lake Brook, and 15 km of 
            the Southwest Miramichi River. The goal: kill invasive smallmouth bass to protect salmon.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            But <strong className="text-white">Wolastoqiyik grandmothers and mothers</strong> from Tobique, 
            St. Mary&apos;s, and Woodstock First Nations took to the water to stop it. Their communities had not 
            been adequately consulted, and they questioned whether poisoning an entire ecosystem was truly 
            the only option.
          </p>
          <QuoteBlock
            quote="First, there is a lack of consultation with our communities. We want to know if there are other ways of protecting the salmon that are less harmful. Do we know the long-term effects of such poisoning? What about the other fish? What about the waterfowl? What about the entire lake ecosystem?"
            author="Ramona Nicholas"
            role="Wolastoqiyik Grandmother"
            color="red"
          />
          <p className="text-neutral-400 leading-relaxed mt-6 mb-4">
            The Wolastoqey pointed to the obvious hypocrisy: while the Atlantic Salmon Federation pushed 
            to poison a lake to save salmon, <strong className="text-white">clearcuts and glyphosate-sprayed 
            plantations</strong> dotted the landscape around the same watershed — the real drivers of salmon 
            habitat destruction.{" "}
            <a href="https://nbmediacoop.org/2021/08/18/wolastoqiyik-women-stop-smallmouth-bass-poisoning-in-miramichi-lake-for-now/" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline">[NB Media Co-op: Wolastoqiyik Women Stop Poisoning]</a>
          </p>
        </section>

        {/* Section 4: Wolastoqey Land Claim */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <TreePine className="text-green-500" size={28} aria-hidden="true" />
            The Wolastoqey Land Title Claim
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In November 2021, six Wolastoqey First Nations filed a historic legal claim to reclaim 
            <strong className="text-white"> five million hectares</strong> of traditional territory from 
            J.D. Irving Limited, 18 of its subsidiaries, NB Power, and four other forestry companies. 
            The claim includes the land under the Mactaquac Dam and the Point Lepreau Nuclear Generating 
            Station.
          </p>
          <QuoteBlock
            quote="It is not, and it never has been, in the public interest to give away land for free to large corporations. Today is about holding to account those corporations that have not paid fair value for the land they've profited from for decades and decades."
            author="Chief Patricia Bernard"
            role="Madawaska First Nation"
            color="green"
          />
          <p className="text-neutral-400 leading-relaxed mt-6 mb-4">
            The Wolastoqey have never ceded or surrendered title to their land. The chiefs declared: 
            &ldquo;Reckless resource extraction through mining, forestry and other activities has left 
            our rivers, forests, and lakes on the brink of decimation.&rdquo;{" "}
            <a href="https://nbmediacoop.org/2021/12/01/wolastoqey-nations-claim-title-to-land-owned-by-jd-irving-and-other-companies-due-to-reckless-resource-extraction/" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline">[NB Media Co-op: Wolastoqey Land Title Claim]</a>
          </p>
        </section>

        {/* Section 5: Fredericton Chemical Spill */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <AlertTriangle className="text-orange-500" size={28} aria-hidden="true" />
            Fredericton Chemical Spill (March 2026)
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In March 2026, a potentially cancer-causing chemical coated roads across Fredericton 
            in what appears to be one of the largest urban chemical spills in the province&apos;s history. 
            The government&apos;s response was marked by <strong className="text-white">delayed notification</strong> 
            to the Environment Department and a failure to immediately inform the public about the 
            nature of the chemical or its health risks.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Questions remain about corporate responsibility and regulatory oversight. The incident 
            has raised fresh concerns about regulatory capture — the pattern of government agencies 
            prioritizing corporate interests over public safety. Environmental advocates are calling 
            for a full investigation and independent health monitoring for affected residents.
          </p>
        </section>

        {/* Section 6: NB Power Emissions */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Factory className="text-red-500" size={28} aria-hidden="true" />
            NB Power: 16-Year Emissions High
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            While N.B. Power pledges to become &ldquo;net-zero&rdquo; by 2035, its greenhouse gas emissions 
            surged to <strong className="text-white">over three million tonnes</strong> in 2026 — the highest 
            in over a decade. The utility burned <strong className="text-white">3.8 million barrels of heavy 
            fuel oil</strong> at Coleson Cove alone — 60% more than the previous year.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Despite this surge, N.B. Power proposed a special premium &ldquo;net-zero&rdquo; rate for 
            customers willing to pay more for clean energy. Meanwhile, carbon penalties on the utility 
            will hit $49 million in 2026, rising to $69 million by 2028-2029 — costs passed directly 
            to ratepayers facing already unaffordable bills.{" "}
            <a href="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline">[CBC: NB Power Emissions Surge, Mar 13, 2026]</a>
          </p>
          <p className="text-neutral-400 leading-relaxed">
            The contradiction is stark: NB Power asks customers to pay a <strong className="text-white">premium</strong> for 
            &ldquo;net-zero&rdquo; electricity while simultaneously burning record amounts of heavy fuel oil 
            and proposing rate increases of up to <strong className="text-white">50% over six years</strong>. The 
            &ldquo;net-zero rate&rdquo; is, by any measure, greenwashing — a marketing label applied to a 
            utility whose emissions trajectory is moving in exactly the opposite direction.
          </p>
        </section>

        {/* Video: NB Forest */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 Video: Forest Industry</h3>
          <VideoGrid
            columns={1}
            videos={[
              {
                videoId: "N9I-HY3wfVM",
                title: "New Brunswick Forest Industry Documentary",
                caption: "Documentaries and testimony expose the corporate capture of New Brunswick's forests."
              }
            ]}
          />
        </div>

        {/* Environment Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Ecological Destruction Timeline
          </h2>
          <Timeline items={environmentTimeline} className="mt-8" />
        </section>

        {/* Polluted Water Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80"
            alt="Foggy forest landscape representing environmental degradation in New Brunswick"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center">
            New Brunswick's environment under siege — from glyphosate spraying to record emissions to chemical spills
          </div>
        </div>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Essential Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="NB Media Co-op: Irving Threatens Miramichi Salmon Group" url="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" description="Glyphosate intimidation campaign" date="2017" />
            <SourceCard type="article" title="NB Media Co-op: Wolastoqiyik Women Stop Lake Poisoning" url="https://nbmediacoop.org/2021/08/18/wolastoqiyik-women-stop-smallmouth-bass-poisoning-in-miramichi-lake-for-now/" description="Rotenone opposition by First Nations" date="2021" />
            <SourceCard type="article" title="NB Media Co-op: Wolastoqey Claim Title to Irving Land" url="https://nbmediacoop.org/2021/12/01/wolastoqey-nations-claim-title-to-land-owned-by-jd-irving-and-other-companies-due-to-reckless-resource-extraction/" description="5M hectare land title claim" date="2021" />
            <SourceCard type="article" title="NB Media Co-op: Wild Salmon's Knock-Out Blow" url="https://nbmediacoop.org/2015/11/13/wild-salmons-knock-out-blow/" description="Inka Milewski analysis of forestry impact" date="2015" />
            <SourceCard type="article" title="CBC: NB Power Emissions Surge to 16-Year High" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="4M barrels of oil burned" date="MAR 2026" />
            <SourceCard type="organization" title="Save Miramichi Salmon" url="https://savemiramichisalmon.com" description="Federal Court evidence and campaign" />
            <SourceCard type="organization" title="Stop Spraying NB" url="https://stopsprayingnb.ca/" description="Glyphosate ban advocacy and DDT evidence" />
            <SourceCard type="article" title="NB Media Co-op: Terry Ann Sappier on Protecting Miramichi Lake" url="https://nbmediacoop.org/2023/03/14/terry-ann-sappier-on-protecting-miramichi-lake-and-the-heart-of-the-land-video/" description="Indigenous resistance video" date="2023" />
          </div>
        </section>
      </div>

      
      <RelatedPages pages={[
        { href: '/climate-energy', title: 'Climate & Energy', description: 'NB Power burns 4M barrels of oil. Emissions at 16-year high.' },
        { href: '/fisheries', title: 'Fisheries in Crisis', description: '96% collapse of Miramichi salmon. DFO negligence documented.' },
        { href: '/indigenous-rights', title: 'Indigenous Rights', description: 'Wolastoqey land title lawsuit. Glyphosate on unceded territory.' }
      ]} />

      <CTASection
        icon={Fish}
        title="The Rivers Are Dying."
        description="96% salmon collapse. Glyphosate poisoning. Chemical spills. Demand ecological accountability."
        buttonText="Take Action"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
