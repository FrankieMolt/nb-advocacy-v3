import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "About Us | Reform NB",
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

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          Reform NB was born out of a collective frustration shared by thousands
          of New Brunswickers. We are tired of being told we are &quot;too
          poor&quot; for quality healthcare while billionaire families receive
          retroactive tax refunds and multi-million dollar subsidies.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Who We Are
        </h2>
        <p className="text-neutral-400 mb-6">
          We are a decentralized network of investigative journalists, former
          civil servants, whistleblowers, and concerned citizens. We don&apos;t
          have a head office in Saint John or a corporate board in Bermuda. We
          are your neighbors, your healthcare workers, and your students.
        </p>
        <p className="text-neutral-400 mb-6">
          Our goal is simple: to pull back the curtain on the &quot;Company
          Province.&quot; We provide the data, the documents, and the stories
          that traditional media—long consolidated and suppressed—has failed to
          report.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Why Now?
        </h2>
        <p className="text-neutral-400 mb-6">
          New Brunswick is at a breaking point. With 1 in 4 children in poverty
          and our emergency rooms shuttering, the status quo is no longer just
          inefficient—it is deadly. The transition of power between political
          parties has proven to be a rebranding exercise rather than a
          structural reform.
        </p>
        <p className="text-neutral-400 mb-6">
          We believe that a province this rich in natural resources and human
          talent shouldn&apos;t be the poorest in Canada. It&apos;s time to stop
          the extraction and start the restoration.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-neutral-800 text-center">
        <p className="text-lg font-serif italic text-neutral-500">
          &ldquo;The truth is not a series of isolated facts. It is the pattern
          they form.&rdquo;
        </p>
      </div>
    </PageWrapper>
  );
}
