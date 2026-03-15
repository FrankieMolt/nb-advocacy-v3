import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Silencing Dissent | Reform NB",
  description: "Cartoonists fired, academics purged, conservationists threatened. How New Brunswick's corporate oligarchy silences opposition.",
};
import { PageWrapper } from '@/components/PageWrapper';
import { BackLink } from '@/components/BackLink';
import { DataCard } from '@/components/DataCard';
import { Timeline } from '@/components/Timeline';
import { QuoteBlock } from '@/components/QuoteBlock';
import { VideoGrid } from '@/components/VideoGrid';
import { SourceCard } from '@/components/SourceCard';
import { Ban, Newspaper, Scale, MicOff, Eye } from 'lucide-react';

const intimidationData = [
  { value: "90+ yrs", label: "Media Monopoly Duration", sublabel: "Irving family controlled NB media from 1920s to 2022" },
  { value: "3/3", label: "Daily Newspapers Controlled", sublabel: "Telegraph-Journal, Daily Gleaner, Times & Transcript — all Irving-owned" },
  { value: "1", label: "Cartoonist Fired", sublabel: "Michael de Adder terminated same day his Trump cartoon went viral" },
  { value: "0", label: "Third-Party Registrations", sublabel: "Irving ran election ads without registering — Elections NB investigating" },
];

const intimidationTimeline = [
  { date: "1920s-2022", title: "90+ Years of Media Control", description: "Irving family owns all major English-language dailies. Generations of NBers read company-controlled news.", color: "neutral" as const },
  { date: "1970", title: "Senate Condemns Media Monopoly", description: "Senate Special Committee calls Irving's control 'about as flagrant an example of abusing the public interest as you're likely to find in Canada'.", color: "red" as const },
  { date: "2017", title: "Irving Threatens Salmon Group", description: "J.D. Irving's chief biologist warns Miramichi Headwaters Salmon Federation they will lose river access if they oppose glyphosate.", color: "red" as const },
  { date: "2019", title: "Forestry College Purges Critic", description: "Instructors at Maritime College of Forest Technology purged after criticizing Irving's glyphosate practices.", color: "red" as const },
  { date: "JUL 2019", title: "Cartoonist Michael de Adder Fired", description: "Brunswick News fires de Adder and rejects his Trump cartoon the day it goes viral. Irving family has US business interests.", color: "red" as const },
  { date: "2020", title: "Election Law Violations", description: "Irving and ForestNB run full-page political ads without registering as third parties. Elections NB confirms investigation.", color: "red" as const },
  { date: "2022", title: "Brunswick News Sold to PostMedia", description: "Irving sells media empire after 90+ years. PostMedia brings its own corporate editorial direction.", color: "gold" as const },
  { date: "2023", title: "Wire Crossed: Free Press Report", description: "NB Media Co-op publishes comprehensive investigation into how Irving jeopardized free press in NB for decades.", color: "gold" as const },
  { date: "MAR 2025", title: "The Irvings Get Trumped", description: "Alain Deneault's analysis: Irving family 'cozied up' to Trump, fired cartoonist for offending powerful allies.", color: "red" as const },
  { date: "FEB 2026", title: "Indigenous Consultations 'Hollow'", description: "Indigenous-owned forestry company tells government that consultations are 'hollow without greater self-determination'.", color: "gold" as const },
];

export default function IntimidationPage() {
  return (
    <PageWrapper>
      <BackLink href="/" label="Back to Home" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]" aria-hidden="true">
          <Ban size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-white uppercase">Intimidation & Censorship</h1>
      </div>
      <div className="bg-neutral-900 border-l-4 border-crisis-red p-6 mb-12 rounded-r-lg">
        <p className="text-lg text-neutral-300">How corporate power silences critics, controls media, bends the law, and punishes dissent in the Company Province</p>
      </div>

      {/* Data Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {intimidationData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      {/* Hero Image */}
      <div className="my-10 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src="https://i.cbc.ca/ais/1.5183857,1706136546000/full/max/0/default.jpg?im=Crop%2Crect%3D%282%2C0%2C1236%2C695%29%3BResize%3D1200"
          alt="Censored newspaper with redaction marks"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          New Brunswick&apos;s media landscape shaped by 90+ years of corporate ownership and editorial control
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">

        {/* Section 1: The Cartoonist They Fired */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Ban className="text-crisis-red" size={28} aria-hidden="true" />
            The Cartoonist They Fired
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            On July 29, 2019, editorial cartoonist <strong className="text-white">Michael de Adder</strong> drew 
            a cartoon of Donald Trump standing over the bodies of Oscar Alberto Martínez Ramírez and his 
            23-month-old daughter Valeria — drowned migrants at the U.S.-Mexico border. The cartoon ran 
            in the <em>Washington Post</em> and went viral.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            That same day, Brunswick News — then owned by the Irving family — <strong className="text-white">
            rejected the cartoon and terminated de Adder&apos;s contract</strong>. The timing was not a 
            coincidence. The Irving family&apos;s business interests in the United States meant that 
            offending Donald Trump was unacceptable.
          </p>
          <QuoteBlock
            quote="The greatest potentates of this colony have cozied up to the controversial leader. One can only deduce that it is unacceptable in this place to offend the buffoon who was then serving his first term in office, especially if it involves attacking Trump's cruel indifference towards the suffering of people."
            author="Alain Deneault"
            role="NB Media Co-op (2025)"
            color="red"
          />
          <p className="text-neutral-400 leading-relaxed mt-6 mb-4">
            Until 2022, the Irving family owned all three major English-language daily newspapers in New 
            Brunswick. The 1970 Senate Special Committee on Mass Media called Irving&apos;s newspaper control 
            &ldquo;about as flagrant an example of abusing the public interest as you&apos;re likely to find 
            in Canada.&rdquo;{" "}
            <a href="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: The Irvings Get Trumped]</a>
          </p>
        </section>

        {/* Section 2: Media Monopoly */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Newspaper className="text-crisis-gold" size={28} aria-hidden="true" />
            The Media Monopoly: 90 Years of Control
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            For over 90 years, the Irving family controlled the majority of English-language media in 
            New Brunswick. In 2022, they sold Brunswick News to PostMedia — a Toronto-based chain with 
            its own corporate ties. The damage, however, was already done: generations of New Brunswickers 
            grew up in a province where <strong className="text-white">the company that polluted their rivers, 
            clearcut their forests, and avoided their taxes also controlled the news</strong>.
          </p>
          <QuoteBlock
            quote="Public opinion has long been ideologically disarmed by the Irving newspapers, the only ones available in English, and by following their electronic media."
            author="Alain Deneault"
            role="Le Monde diplomatique (2019)"
            color="gold"
          />
          <p className="text-neutral-400 leading-relaxed mt-6 mb-6">
            The consequences of media monopoly extend far beyond individual editorial decisions. When 
            a single corporation controls the primary news source for an entire province, it shapes 
            what citizens know, what they discuss, and what they consider possible. Environmental 
            contamination stories go unreported. Corporate tax avoidance is framed as &quot;job 
            creation.&quot; Government subsidies to billionaires are presented as &quot;economic 
            development.&quot;
          </p>
          <p className="text-neutral-400 leading-relaxed">
            The NB Media Co-op, founded in 2009, has served as an independent counterweight — 
            publishing investigations that the corporate press refused to cover. But its reach 
            remains a fraction of the Irving-era dailies, which shaped public opinion for nearly 
            a century.
          </p>
        </section>

        {/* Section 3: Election Law Violations */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Scale className="text-crisis-red" size={28} aria-hidden="true" />
            Breaking Election Laws
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            During the 2020 New Brunswick election, J.D. Irving and ForestNB ran <strong className="text-white">
            full-page political ads</strong> in every English daily newspaper in the province, opposing a 
            glyphosate ban. Under the <em>Political Activity Financing Act</em>, any organization spending 
            more than $500 to &ldquo;publicly promote or oppose a political party&rdquo; must register as a 
            third party with Elections NB.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Neither J.D. Irving nor ForestNB were registered. <strong className="text-white">Elections NB 
            confirmed they were investigating</strong>. Meanwhile, the anti-spraying group Stop Spraying NB, 
            funded by grassroots donations, <em>was</em> properly registered — following the law that Irving 
            flaunted.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Every PC and Liberal candidate refused to sign the pledge to end herbicide spraying on Crown 
            lands. Only the Green Party (rated B+ by SSNB) and a handful of NDP and People&apos;s Alliance 
            candidates supported the ban.{" "}
            <a href="https://nbmediacoop.org/2020/09/01/are-jdirving-and-forestnb-breaking-elections-nb-laws/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: Breaking Election Laws?]</a>
          </p>
        </section>

        {/* Section 4: Forestry College Purge */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <MicOff className="text-orange-500" size={28} aria-hidden="true" />
            Purging Academic Critics
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            In 2019, instructors at the <strong className="text-white">Maritime College of Forest Technology</strong> in 
            Fredericton were purged after criticizing J.D. Irving&apos;s glyphosate practices. The college, 
            which trains New Brunswick&apos;s forestry professionals, was dependent on Irving for funding, 
            field access, and student placements. Criticizing the hand that feeds you is not permitted.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The pattern is consistent: when individuals or organizations speak out against Irving&apos;s 
            practices — whether in media, academia, or conservation — the response is intimidation, 
            defunding, or termination. This is how corporate capture operates: not through explicit 
            censorship, but through <strong className="text-white">structural dependency</strong>.{" "}
            <a href="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: Forestry College Purges Critic]</a>
          </p>
        </section>

        {/* Section 5: River Access Intimidation */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Eye className="text-crisis-gold" size={28} aria-hidden="true" />
            Silencing Through Dependency
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            The Irving intimidation playbook operates through a consistent pattern of 
            <strong className="text-white"> structural dependency</strong>. In a province where one family 
            controls the primary employer, the primary media, and the primary landowner, speaking out 
            against Irving means risking your job, your access, and your community standing.
          </p>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 my-8">
            <h4 className="text-crisis-gold font-black uppercase text-xs tracking-widest mb-4">Documented Intimidation Patterns</h4>
            <ul className="space-y-3 text-neutral-300 text-sm" role="list">
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>River access revocation:</strong> Threatened to block salmon conservation groups from accessing rivers if they oppose glyphosate (2017)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>Academic purging:</strong> Instructors fired from forestry college for criticizing Irving practices (2019)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>Cartoonist termination:</strong> De Adder fired same day his Trump cartoon went viral (2019)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>Election law violations:</strong> Full-page political ads without third-party registration (2020)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>Property tax intimidation:</strong> Government gives $700K refunds when Irving challenges assessments (2023)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-crisis-red font-black">•</span>
                <span><strong>Indigenous consultation dismissal:</strong> Wolastoqey told consultations are &quot;hollow&quot; without self-determination (2026)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Video: Corporate Capture */}
        <div className="my-12">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-4">📺 Video: Corporate Capture</h3>
          <VideoGrid
            columns={1}
            videos={[
              {
                videoId: "rfYW4tpdXIQ",
                title: "Corporate Capture in New Brunswick Documentary",
                caption: "Documentaries by Charles Thériault and others expose corporate capture of New Brunswick's institutions."
              }
            ]}
          />
        </div>

        {/* Intimidation Timeline */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic border-b border-neutral-800 pb-2">
            Intimidation Timeline
          </h2>
          <Timeline items={intimidationTimeline} className="mt-8" />
        </section>

        {/* Censored Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://i.cbc.ca/ais/1.5058551,1552675328000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C278%2C4032%2C2268%29%3BResize%3D1200"
            alt="Newspapers representing media control and censorship"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            Three generations of New Brunswickers grew up reading company-controlled newspapers — the damage to public discourse is immeasurable
          </div>
        </div>

        {/* Quote Block */}
        <QuoteBlock
          quote="When the company that pollutes your water, clearcuts your forests, and avoids your taxes also owns the newspaper, you don't have a free press — you have a corporate newsletter."
          author="NB Media Co-op Reader"
          role="Community submission"
          color="red"
        />

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Essential Sources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="NB Media Co-op: The Irvings Get Trumped" url="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" description="Cartoonist de Adder fired for Trump cartoon" date="MAR 2025" />
            <SourceCard type="article" title="NB Media Co-op: Irving Breaking Election Laws?" url="https://nbmediacoop.org/2020/09/01/are-jdirving-and-forestnb-breaking-elections-nb-laws/" description="Full-page ads without third-party registration" date="2020" />
            <SourceCard type="article" title="NB Media Co-op: Forestry College Purges Critic" url="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" description="Academic freedom suppressed" date="2019" />
            <SourceCard type="article" title="NB Media Co-op: How Irving Jeopardized Free Press" url="https://nbmediacoop.org/2023/06/09/wire-crossed-how-the-irving-empire-jeopardized-free-press-in-new-brunswick/" description="Comprehensive investigation" date="2023" />
            <SourceCard type="article" title="NB Media Co-op: 'We Won't Be Intimidated'" url="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" description="Irving threatens salmon group over glyphosate" date="2017" />
            <SourceCard type="article" title="NB Media Co-op: Deneault on Arthur Irving" url="https://nbmediacoop.org/2024/05/19/dismal/" description="'Feudalistic counter-model' analysis" date="MAY 2024" />
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
