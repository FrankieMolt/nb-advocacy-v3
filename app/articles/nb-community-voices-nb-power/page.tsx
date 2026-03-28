import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FacebookGroupEmbed } from "@/components/FacebookGroupEmbed";
import { AlertTriangle, ExternalLink, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Voices: NB Power Ratepayer Stories",
  description: "From the NB Power Rants Facebook group (20K+ members) to EUB hearing testimony — New Brunswickers struggling with electricity costs speak out.",
  keywords: "NB Power Rants Facebook, New Brunswick electricity complaints, NB Power community response, EUB public hearing testimony, NB energy poverty stories, New Brunswick ratepayer voices, NB Power customer anger, New Brunswick electricity bills, NB Power rate hearing public comments",
  alternates: { canonical: "https://nbreform.ca/articles/nb-community-voices-nb-power/" },
  openGraph: {
    title: "Community Voices: NB Power Ratepayer Stories | Reform NB",
    description: "20,000+ NB Power Rants members share their struggles with rising electricity costs. The voices the utility doesn't want you to hear.",
    images: [{ url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200", width: 1200, height: 675, alt: "Community gathering representing citizen voices" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="The Voices NB Power Doesn't Want You to Hear"
      date="March 16, 2026"
      image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80"
      imageAlt="Community voices rising"
      imageCredit="Unsplash"
      sources={[
        { title: "NB Power Rants — Facebook Group (20,000+ members)", url: "https://www.facebook.com/groups/2100356297072209" },
        { title: "NB Energy & Utilities Board — Public Hearings", url: "https://nbeub.ca" },
        { title: "CBC: NB Power rate hike reactions", url: "https://www.cbc.ca/news/canada/new-brunswick" },
        { title: "Reform NB: NB Power Rate Hearing LIVE", url: "/articles/nb-power-rate-hearing-2026/" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">Community Voices: NB Power Ratepayer Stories</h1>

      {/* Facebook Group CTA */}
      <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6 mb-8 flex items-start gap-4">
        <Users className="text-blue-400 shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-bold text-blue-300 mb-2">JOIN THE CONVERSATION</h3>
          <p className="text-white text-sm mb-3">
            The <strong className="text-white">NB Power Rants</strong> Facebook group has 20,000+ members sharing their experiences with rising electricity costs, service issues, and the utility's failures.
          </p>
          <a
            href="https://www.facebook.com/groups/2100356297072209"
            target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
          >
            Join NB Power Rants on Facebook <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <p className="text-xl text-white leading-relaxed mb-8">
        When <strong className="text-white">20,000 people</strong> join a Facebook group called "NB Power Rants," something is fundamentally broken. These aren't activists or political operatives — they're <strong className="text-white">ratepayers</strong>: seniors on fixed incomes, young families, small business owners, and rural residents who depend on electric heating. They're the people whose voices don't make it into NB Power's glossy annual reports.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Reality on the Ground</h2>
      <p>
        Scroll through the NB Power Rants group and a pattern emerges. The complaints aren't about ideology — they're about <strong className="text-white">survival</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-4 my-6 text-white">
        <li><strong className="text-white">Seniors choosing between heating and medication.</strong> "My mother is 78. Her NB Power bill is more than her grocery budget. She turns the heat off at night in January."</li>
        <li><strong className="text-white">Young families drowning in debt.</strong> "We have two kids, both working, and our electricity bill is higher than our car payment. We're considering leaving the province."</li>
        <li><strong className="text-white">Small businesses closing.</strong> "I run a restaurant in Moncton. My NB Power bill tripled in 4 years. I can't pass that to customers — they're already struggling."</li>
        <li><strong className="text-white">Rural residents trapped.</strong> "We heat with electricity because there's no natural gas line. We're paying $600/month in winter. There is no alternative."</li>
      </ul>
      <p>
        These are not isolated stories. They represent a systemic pattern: New Brunswick's most vulnerable residents are subsidizing corporate preferential rates and decades of utility mismanagement.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What EUB Testimony Reveals</h2>
      <p>
        The ongoing <strong className="text-white">EUB rate hearings (EL-003-2025)</strong> have heard from intervenors representing consumers, low-income advocates, and Indigenous communities. Their testimony paints a damning picture:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li>Low-income families spend up to <strong className="text-white">15% of their income on electricity</strong> — 2.5x the "energy poverty" threshold</li>
        <li>New Brunswick's <strong className="text-white">15% HST on electricity</strong> is the highest sales tax on power in Canada</li>
        <li>The proposed rate increase would push an additional <strong className="text-white">8,000 households</strong> into energy poverty</li>
        <li>Indigenous communities face <strong className="text-white">infrastructure deficits</strong> that make efficiency upgrades impossible</li>
        <li>There is <strong className="text-white">no low-income electricity rate</strong> in New Brunswick, unlike most other provinces</li>
      </ul>

      {/* Facebook Group Embed */}
      <h2 className="text-2xl font-bold mt-16 mb-4">💬 Join the Conversation</h2>
      <p className="text-white mb-6">
        The NB Power Rants Facebook group is where New Brunswickers share their electricity bills, rate increase stories, and organize for change. Browse recent discussions below or join the group to participate.
      </p>
      <div className="mb-8">
        <FacebookGroupEmbed groupId="2100356297072209" />
      </div>
      <p className="text-white mb-8">
        Can&apos;t see the embed?{" "}
        <a href="https://www.facebook.com/groups/2100356297072209" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white" >
          Visit the group directly on Facebook →
        </a>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">📺 Watch the EUB Hearings Live</h2>
      <p className="text-white mb-6">
        The NB Energy &amp; Utilities Board is holding live hearings on NB Power&apos;s rate application <strong className="text-white">this week</strong>. Watch Day 7 (Tuesday, March 17) live:
      </p>
      <div className="aspect-video mb-8 rounded-xl overflow-hidden border border-neutral-800">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/SLVl3Oyui8E"
          title="EUB Hearing Day 7 — March 17, 2026"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="text-white mb-8">
        All hearings at 9:30 a.m. AST.{" "}
        <Link href="/articles/nb-power-rate-hearing-2026/" className="text-white underline hover:text-white">
          View full hearing schedule with all 5 days →
        </Link>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Social Media Reckoning</h2>
      <p>
        The NB Power Rants group has become something NB Power didn't anticipate: <strong className="text-white">organized citizen journalism</strong>. Members share:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li>Photos of their bills — showing the month-over-month increases</li>
        <li>Documentation of billing errors and overcharges</li>
        <li>Stories of disconnection threats during winter</li>
        <li>Comparisons with other provinces showing NB's outlier rates</li>
        <li>Coordination on EUB hearing participation</li>
      </ul>
      <p>
        This organic documentation has done what traditional media in New Brunswick largely couldn't — or wouldn't. It has created a <strong className="text-white">public record of ratepayer suffering</strong> that NB Power cannot dismiss as anecdotal.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Corporate Contrast</h2>
      <p>
        The anger isn't just about high rates — it's about <strong className="text-white">who gets a deal and who doesn't</strong>. When the public learned that Irving Paper received $45 million in preferential rates while they were being asked to pay more, the reaction was visceral.
      </p>
      <p>
        The contrast is stark: a senior choosing between heat and medication in Fredericton, while a multinational with $30 billion in family wealth negotiates discounted power from the same grid. This isn't economics — it's <strong className="text-white">extraction</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Comes Next</h2>
      <p>
        The EUB hearings continue through March 20, 2026. The Board will issue its decision in the weeks following. But the real question isn't what the EUB decides — it's whether New Brunswick's political system can withstand the growing pressure from ratepayers who have had enough.
      </p>
      <p>
        The NB Power Rants group isn't going away. Neither is the $5.9 billion debt. Neither are the fossil fuel emissions. And neither are the 20,000 people who joined a Facebook group because their government and their utility weren't listening.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">How to Get Involved</h2>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li>
          <strong className="text-white">Join the conversation:</strong>{" "}
          <a href="https://www.facebook.com/groups/2100356297072209" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white" >
            NB Power Rants on Facebook
          </a>
        </li>
        <li>
          <strong className="text-white">Watch the hearings:</strong>{" "}
          <Link href="/articles/nb-power-rate-hearing-2026/" className="text-white underline hover:text-white">
            Live streams on Reform NB
          </Link>
        </li>
        <li>
          <strong className="text-white">Submit comments:</strong>{" "}
          <a href="https://nbeub.ca" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white" >
            Through the EUB website
          </a>
        </li>
        <li><strong className="text-white">Contact your MLA</strong> — demand they attend the hearings and fight for ratepayers</li>
        <li><strong className="text-white">Share this article</strong> — the more New Brunswickers know, the stronger the pressure</li>
      </ul>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-gold p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          "Twenty thousand people didn't join a Facebook group because they were bored. They joined because their bills are crushing them, their utility isn't listening, and their government doesn't care. That's not a rant — that's a crisis."
        </p>
        <p className="text-sm text-white mt-4">— Reform NB</p>
      </div>
    </ArticleLayout>
  );
}
