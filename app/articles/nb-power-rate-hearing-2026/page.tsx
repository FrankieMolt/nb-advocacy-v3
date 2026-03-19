import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { AlertTriangle, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NB Power Rate Hearing LIVE: 50% Hike (EL-003-2025)",
  description: "EUB hearings on NB Power's proposed 50% rate increase. Watch Day 7 live streams. Your money is on the line. EL-003-2025.",
  keywords: "NB Power, rate increase, EUB hearing, EL-003-2025, rate hike, energy poverty, New Brunswick, utilities board, live stream, Coleson Cove",
  alternates: { canonical: "https://reformnb.ca/articles/nb-power-rate-hearing-2026/" },
  openGraph: {
    title: "NB Power Rate Hearing LIVE: 50% Hike | Reform NB",
    description: "EUB hearings on NB Power's proposed 50% rate increase. Watch the live streams. Your money is on the line.",
    images: [{ url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200", width: 1200, height: 675, alt: "Power lines representing NB Power rate hearings" }],
  },
};

const hearingDays = [
  { day: "Day 6", date: "Monday, March 16, 2026", time: "9:30 a.m.", videoId: "q7b_XBcAnC0" },
  { day: "Day 7", date: "Tuesday, March 17, 2026", time: "9:30 a.m.", videoId: "SLVl3Oyui8E" },
  { day: "Day 8", date: "Wednesday, March 18, 2026", time: "9:30 a.m.", videoId: "iHQI-Cpz_6A" },
  { day: "Day 9", date: "Thursday, March 19, 2026", time: "9:30 a.m.", videoId: "T7m9NF-0DUA" },
  { day: "Day 10", date: "Friday, March 20, 2026", time: "9:30 a.m.", videoId: "Awk_00_puBg" },
];

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="NB Power Rate Hearing LIVE: Your Bills on the Line"
      date="March 16, 2026"
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      imageAlt="Power lines against dark sky representing NB Power rate hearings"
      imageCredit="Unsplash"
      sources={[
        { title: "NB Energy & Utilities Board — Official Site", url: "https://nbeub.ca" },
        { title: "EUB Matter EL-003-2025: NB Power 2026-2027 General Rate Application", url: "https://www2.gnb.ca/content/gnb/en/departments/erd/energy.html" },
        { title: "CBC: NB Power emissions surge to 16-year high", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" },
        { title: "CTV News: NB Power applies for 4.75% rate hike", url: "https://www.ctvnews.ca/atlantic/new-brunswick/article/nb-power-applies-for-475-per-cent-rate-hike-for-2026/" },
        { title: "CBC: NB Power proposes net-zero rate premium", url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-energy-poverty-2025-9.7118008" },
        { title: "Reform NB: NB Power's $5.9B Debt Trap", url: "/climate-energy" },
      ]}
    >
      {/* Alert Banner */}
      <div className="bg-crisis-red/10 border border-crisis-red rounded-xl p-6 mb-8 flex items-start gap-4">
        <AlertTriangle className="text-white shrink-0 mt-1" size={24} />
        <div>
          <h3 className="text-lg font-bold text-white mb-2">HEARINGS IN PROGRESS — MARCH 16-20, 2026</h3>
          <p className="text-white text-sm">
            The NB Energy &amp; Utilities Board is holding public hearings on <strong className="text-white">Matter EL-003-2025</strong> — NB Power&apos;s 2026-2027 General Rate Application. The hearings run daily at 9:30 a.m. at the Fredericton Convention Centre. <strong className="text-white">Watch live below.</strong>
          </p>
        </div>
      </div>

      <p className="text-xl text-white leading-relaxed mb-8">
        Starting today, the <strong className="text-white">New Brunswick Energy and Utilities Board</strong> is holding public hearings on NB Power&apos;s rate application for 2026-2027. This is the proceeding where your electricity bills for the next two years will be decided. The hearings are being live-streamed on YouTube — and we have embedded every stream below so you can watch directly from this page.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What&apos;s on the Table</h2>
      <p>
        NB Power has applied for rate increases that would see the average residential customer pay significantly more for electricity. This comes on top of a <strong className="text-white">50% cumulative rate increase</strong> over the past six years — far outpacing inflation and wage growth in a province with one of the lowest median incomes in Canada.
      </p>
      <p>
        The utility is also proposing a <strong className="text-white">&quot;net-zero rate premium&quot;</strong> — a voluntary higher rate for customers who want clean energy. Critics call this greenwashing: the same utility that burned <strong className="text-white">4 million barrels of heavy fuel oil</strong> in the past year is asking customers to pay extra for &quot;clean&quot; power.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Numbers That Matter</h2>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">$5.9 billion</strong> — NB Power&apos;s total debt load, among the highest per-capita utility debt in Canada</li>
        <li><strong className="text-white">$9 million/day</strong> — what NB Power spends buying replacement power when its own generation fails</li>
        <li><strong className="text-white">3.8 million barrels</strong> of heavy fuel oil burned at Coleson Cove in 12 months</li>
        <li><strong className="text-white">3M+ tonnes</strong> of CO₂ emissions — a 16-year high</li>
        <li><strong className="text-white">4.75%</strong> — the proposed rate hike for 2026, compounding previous increases</li>
        <li><strong className="text-white">27%</strong> — NB Power&apos;s capacity utilization rate</li>
        <li><strong className="text-white">15%</strong> — HST on electricity bills (highest in Canada)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Is the EUB?</h2>
      <p>
        The <strong className="text-white">NB Energy and Utilities Board</strong> is an independent quasi-judicial tribunal that regulates electricity, natural gas, pipelines, and motor carriers in New Brunswick. It was established to provide independent oversight of utility rates — a critical check on NB Power&apos;s monopoly.
      </p>
      <p>
        However, critics note that the EUB&apos;s decisions can be overridden by <strong className="text-white">cabinet order</strong>, effectively giving the provincial government final say on rates. This happened most notably with the Mactaquac dam refurbishment, where costs ballooned from $2.9 billion to over $4.5 billion.
      </p>
      <p>
        The EUB is holding these hearings at the <strong className="text-white">Fredericton Convention Centre</strong> in public. Anyone can attend or watch online. The Board will hear from NB Power, intervenors, consumer advocates, and members of the public before issuing its decision.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Who Gets Hurt?</h2>
      <p>
        New Brunswick already has one of the highest rates of <strong className="text-white">energy poverty</strong> in Canada. A 2025 CBC analysis found that low-income families spend up to <strong className="text-white">15% of their income on electricity</strong> — well above the 6% threshold considered &quot;energy poverty.&quot;
      </p>
      <p>
        For seniors on fixed incomes, families in rural areas with electric heating, and Indigenous communities already struggling with infrastructure gaps, each rate increase represents a choice between heating and eating. The 15% HST (highest in Canada) compounds the burden.
      </p>
      <p>
        Meanwhile, NB Power gave <strong className="text-white">$45 million in preferential power rates</strong> to Irving Paper while asking residential customers to absorb increases. The question these hearings must answer: <em>who is this utility serving?</em>
      </p>

      {/* Live Hearing Streams */}
      <h2 className="text-2xl font-bold mt-16 mb-4">📺 Watch Live: EUB Rate Hearings</h2>
      <p className="text-white mb-8">
        All hearings begin at 9:30 a.m. AST at the Fredericton Convention Centre. Click to load the live stream.
      </p>

      <div className="space-y-8">
        {hearingDays.map((h, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-white" size={20} />
              <div>
                <h3 className="text-lg font-bold text-white">{h.day} — {h.date}</h3>
                <p className="text-sm text-white">Start Time: {h.time} AST | Fredericton Convention Centre</p>
              </div>
            </div>
            <YouTubeEmbed videoId={h.videoId} title={`EUB Hearing ${h.day} — ${h.date}`} />
          </div>
        ))}
      </div>

      <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
        <p className="text-sm text-white mb-3">
          Hearing streams provided by the <strong className="text-white">NB Energy &amp; Utilities Board</strong>. For official documents and filings:
        </p>
        <a
          href="https://nbeub.ca"
          target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-white transition-colors font-bold text-sm"
        >
          Visit nbeub.ca <ExternalLink size={14} />
        </a>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-4">How to Participate</h2>
      <p>
        The EUB hearings are <strong className="text-white">public proceedings</strong>. You can:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Attend in person</strong> at the Fredericton Convention Centre</li>
        <li><strong className="text-white">Watch live</strong> via the YouTube streams embedded above</li>
        <li><strong className="text-white">Submit written comments</strong> to the EUB through their official website</li>
        <li><strong className="text-white">Contact your MLA</strong> and demand they attend and represent ratepayers</li>
        <li><strong className="text-white">Share this page</strong> — the more eyes on these hearings, the harder it is to rubber-stamp rate hikes</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Bigger Picture</h2>
      <p>
        These hearings are not happening in isolation. They come at a time when:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li>NB Power burns more fossil fuel than it has in 16 years</li>
        <li>The utility&apos;s $5.9B debt continues to grow</li>
        <li>238,000+ New Brunswickers lack a family doctor</li>
        <li>1,500+ people are chronically homeless</li>
        <li>Child poverty sits at 21.9% (41.2% in Campbellton)</li>
        <li>The Irving family pays 5x less property tax than US refineries</li>
      </ul>
      <p>
        The pattern is clear: <strong className="text-white">costs are socialized, profits are privatized</strong>. NB Power&apos;s rate increases are the mechanism by which ordinary New Brunswickers pay for decades of mismanagement, corporate giveaways, and failure to invest in renewable energy.
      </p>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-gold p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          &quot;Every dollar of NB Power&apos;s $5.9 billion debt will be paid by ratepayers. The hearings are your only formal opportunity to object. Use it.&quot;
        </p>
        <p className="text-sm text-white mt-4">— Reform NB</p>
      </div>

      <p className="text-white italic mt-12">
        Reform NB is monitoring these hearings daily. We will update this page with key testimony, decisions, and analysis as the proceedings unfold. Have information about NB Power you want to share? <a href="mailto:reformnb-tips@proton.me" className="text-white hover:text-white underline">Contact us securely</a>.
      </p>
    </ArticleLayout>
  );
}
