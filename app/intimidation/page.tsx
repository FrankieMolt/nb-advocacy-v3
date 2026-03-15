'use client';

import { PageWrapper } from '@/components/PageWrapper';
import { BackLink } from '@/components/BackLink';
import { Ban, Newspaper, Scale, AlertTriangle, FileWarning, MicOff } from 'lucide-react';

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
        <p className="text-lg text-neutral-300">How corporate power silences critics, controls media, and bends the law</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">

        {/* Hero Image */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1200&q=80"
            alt="Censored newspaper with redaction marks"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="bg-neutral-900 p-3 text-xs text-neutral-500 uppercase tracking-widest text-center">
            New Brunswick&apos;s media landscape has been shaped by decades of corporate ownership and editorial control
          </div>
        </div>

        {/* The Cartoonist Firing */}
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
          <div className="bg-neutral-900 p-6 rounded-xl border border-crisis-red/30 mb-6">
            <p className="text-white text-lg font-bold italic leading-tight mb-3">
              &ldquo;The greatest potentates of this colony have cozied up to the controversial leader. 
              One can only deduce that it is unacceptable in this place to offend the buffoon who was 
              then serving his first term in office, especially if it involves attacking Trump&apos;s cruel 
              indifference towards the suffering of people.&rdquo;
            </p>
            <div className="text-xs font-black text-crisis-red uppercase tracking-[0.3em]">
              — Alain Deneault, NB Media Co-op (2025)
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Until 2022, the Irving family owned all three major English-language daily newspapers in New 
            Brunswick: the <em>Telegraph-Journal</em>, <em>Daily Gleaner</em>, and <em>Times & Transcript</em>. 
            The 1970 Senate Special Committee on Mass Media called Irving&apos;s newspaper control 
            &ldquo;about as flagrant an example of abusing the public interest as you&apos;re likely to find 
            in Canada.&rdquo;{" "}
            <a href="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: The Irvings Get Trumped]</a>
          </p>
        </section>

        {/* Media Monopoly */}
        <section className="bg-neutral-900/50 p-10 rounded-3xl border border-neutral-800 mb-10">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Newspaper className="text-crisis-gold" size={28} aria-hidden="true" />
            The Media Monopoly
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            For over 90 years, the Irving family controlled the majority of English-language media in 
            New Brunswick. In 2022, they sold Brunswick News to PostMedia — a Toronto-based chain with 
            its own corporate ties. The damage, however, was already done: generations of New Brunswickers 
            grew up in a province where <strong className="text-white">the company that polluted their rivers, 
            clearcut their forests, and avoided their taxes also controlled the news</strong>.
          </p>
          <div className="bg-neutral-900 p-6 rounded-xl border border-crisis-gold/30 mb-6">
            <p className="text-white text-lg font-bold italic leading-tight mb-3">
              &ldquo;Public opinion has long been ideologically disarmed by the Irving newspapers, 
              the only ones available in English, and by following their electronic media.&rdquo;
            </p>
            <div className="text-xs font-black text-crisis-gold uppercase tracking-[0.3em]">
              — Alain Deneault, Le Monde diplomatique (2019)
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            In 2017, when Miramichi salmon conservationists opposed glyphosate spraying, J.D. Irving&apos;s 
            chief biologist warned the group they would <strong className="text-white">lose river access</strong> 
            if they attended a press conference. When the forestry college&apos;s instructors criticized glyphosate, 
            they were purged. When elections approached, Irving ran full-page political ads — without 
            registering as a third party under election law.
          </p>
        </section>

        {/* Election Law Violations */}
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

        {/* Forestry College Purge */}
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
          <p className="text-neutral-400 leading-relaxed">
            The pattern is consistent: when individuals or organizations speak out against Irving&apos;s 
            practices — whether in media, academia, or conservation — the response is intimidation, 
            defunding, or termination. This is how corporate capture operates: not through explicit 
            censorship, but through <strong className="text-white">structural dependency</strong>.{" "}
            <a href="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" target="_blank" rel="noopener noreferrer" className="text-crisis-red hover:text-white underline">[NB Media Co-op: Forestry College Purges Critic]</a>
          </p>
        </section>

        {/* Video: Corporate Capture */}
        <div className="my-12">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/rfYW4tpdXIQ"
              title="Corporate Capture in New Brunswick Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
          <p className="text-center text-sm text-neutral-500 mt-4 italic">
            Documentaries by Charles Thériault and others expose corporate capture of New Brunswick&apos;s institutions.
          </p>
        </div>

        {/* Sources */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Essential Sources</h3>
          <div className="space-y-4">
            <a href="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: The Irvings Get Trumped — Cartoonist de Adder fired (2025)
            </a>
            <a href="https://nbmediacoop.org/2020/09/01/are-jdirving-and-forestnb-breaking-elections-nb-laws/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Irving and ForestNB breaking election laws? (2020)
            </a>
            <a href="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Forestry college purges glyphosate critic (2019)
            </a>
            <a href="https://nbmediacoop.org/2023/06/09/wire-crossed-how-the-irving-empire-jeopardized-free-press-in-new-brunswick/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: How Irving jeopardized free press in NB (2023)
            </a>
            <a href="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: "We won't be intimidated" — Irving threatens salmon group (2017)
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
