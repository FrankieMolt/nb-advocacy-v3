import { Metadata } from "next";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Reform NB: Citizen Accountability Platform | Reform NB",
  description:
    "Reform NB is a decentralized network of investigative journalists, former civil servants, and citizens exposing the systemic governance failure in New Brunswick.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <BackLink />

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]"
          aria-hidden="true"
        >
          <BookOpen size={32} />
        </div>
        <h1 className="text-5xl font-black font-serif tracking-tight uppercase">
          Our Mission
        </h1>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80" 
          alt="New Brunswick landscape representing the province we fight for"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Reform NB — a decentralized network fighting for government accountability in the Company Province
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          Reform NB started with a simple question: How can we be told we're 
          too poor for healthcare while Irving family fortunes grow? How can 
          our emergency rooms close while McCain Foods gets tax breaks? This 
          isn't about politics. It's about survival.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Who We Are
        </h2>
        <p className="text-neutral-400 mb-6">
          We're nurses who've seen patients die in waiting rooms. We're teachers 
          who watch kids come to school hungry. We're journalists who've been 
          told to stop asking questions. We're regular New Brunswickers who 
          refused to look away anymore. No corporate offices. No Bermuda 
          shell companies. Just people who live here and refuse to stay silent.
        </p>
        <p className="text-neutral-400 mb-6">
          Our job? Pull back the curtain on what they call the 'Company 
          Province.' We bring you the documents they don't want you to see. 
          We tell the stories they pay to keep quiet. We do what the 
          established media won't - because they're part of the problem.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Why Now?
        </h2>
        <p className="text-neutral-400 mb-6">
          Look around New Brunswick in 2026. Nearly one in four kids lives in 
          poverty. People are dying in ERs because there's no room. Our power 
          bills keep going up while corporations get handouts. The government 
          changes faces but the story stays the same: extract, abandon, repeat.
          This isn't inefficient anymore. It's lethal.
        </p>
        <p className="text-neutral-400 mb-6">
          We know what's possible. We've seen the forests, the rivers, the 
          talent of our people. This province should be thriving, not 
          surviving. It's time to stop the looting and start rebuilding what's 
          been taken from us.
        </p>
      </div>

      <CTASection
        icon={BookOpen}
        title="Join the Investigation."
        description="We are regular New Brunswickers who refused to look away. Help us expose the truth."
        buttonText="Take Action"
        buttonHref="/take-action"
      />

      <div className="mt-16 pt-12 border-t border-neutral-800 text-center">
        <p className="text-lg font-serif italic text-neutral-400">
          &ldquo;The truth is not a series of isolated facts. It is the pattern
          they form.&rdquo;
        </p>
      </div>
    </PageWrapper>
  );
}
