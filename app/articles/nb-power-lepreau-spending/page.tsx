import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { RelatedPages } from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "NB Power Spends $88.4M on Hired Guns for Lepreau",
  description: "NB Power plans to spend $88.4M over 3 years on outside experts to fix chronic reliability problems at Point Lepreau. Plant offline 616 days in 4 years.",
  alternates: { canonical: "https://nbreform.ca/articles/nb-power-lepreau-spending/" },
  openGraph: {
    title: "NB Power Spends $88.4M on Outside Experts for Troubled Lepreau Plant",
    description: "With no interested investors, utility turns to pricey experts. Plant offline 616 of last 1,460 days.",
    images: [{ url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200", width: 1200, height: 675, alt: "Nuclear power plant" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="NB Power Spends $88.4M on 'Hired Guns' to Fix Its Lepreau Problem"
      date="March 17, 2026"
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      imageAlt="Nuclear power plant cooling towers"
      imageCredit="Unsplash"
      sources={[
        { title: "CBC: N.B. Power spending heavily on hired guns to fix Lepreau problem", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-lepreau-problem-spending-9.7132390" },
        { title: "CBC: NB Power rate increases of 50% under spotlight", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-rate-increases-9.7124680" },
        { title: "CBC: NB Power emissions surge despite net-zero claims", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" },
        { title: "NB Power: 10-Year Plan (2021-2030)", url: "https://www.nbpower.com/media/1489656/10-year-plan-2021-to-2030.pdf" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">NB Power Spends $88.4M on Hired Guns for Lepreau</h1>

      <p className="text-white leading-relaxed mb-6">
        New Brunswick Power is spending <strong className="text-white">$88.4 million over three years</strong> on outside experts from Ontario Power Generation to run the chronically unreliable Point Lepreau Nuclear Generating Station — a plant that has been offline for repairs and maintenance a total of <strong className="text-white">616 days in the last four years</strong>.
      </p>

      <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6 uppercase tracking-tighter italic">The Laurentis Deal</h2>
      
      <p className="text-white leading-relaxed mb-6">
        The utility has struck a deal with Laurentis Energy Partners Inc., connected to Ontario Power Generation, to provide experienced nuclear managers to supervise Lepreau for at least three years. The arrangement includes <strong className="text-white">$8 million in bonuses</strong> in Year 3 if the plant performs better.
      </p>

      <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6 uppercase tracking-tighter italic">No Investors, No Options</h2>

      <p className="text-white leading-relaxed mb-6">
        The move comes after NB Power failed to attract any private investors willing to partner on the nuclear facility. The plant's dismal reliability record — offline roughly <strong className="text-white">42% of the time</strong> over four years — has made it toxic to potential partners.
      </p>

      <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6 uppercase tracking-tighter italic">Ratepayers Foot the Bill</h2>

      <p className="text-white leading-relaxed mb-6">
        NB Power is seeking rate increases of <strong className="text-white">50% over six years</strong> while spending $88.4M on consultants. Meanwhile, Irving Paper receives a $45M electricity subsidy. When the corporate monopoly fails, ordinary New Brunswickers pay the price.
      </p>

      <RelatedPages pages={[
        { href: '/climate-energy', title: 'Climate & Energy Crisis', description: 'NB Power burns 4M barrels of oil. Emissions at 16-year high.' },
        { href: '/budget-2026', title: 'Budget 2026 Analysis', description: 'Record $1.39B deficit. $45M to Irving while services cut.' },
        { href: '/oligarchy', title: 'The Corporate Oligarchy', description: 'How Irving controls NB energy policy.' },
      ]} />
    </ArticleLayout>
  );
}
