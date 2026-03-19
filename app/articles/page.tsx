import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { FileSearch, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Investigative Journalism: NB Government & Corporate Accountability | Reform NB",
  description: "In-depth investigative reporting on healthcare collapse, corporate oligarchy, environmental destruction, and government corruption in New Brunswick, Canada.",
  alternates: { canonical: "https://reformnb.ca/articles/" },
  openGraph: {
    title: "Investigative Articles | Reform NB",
    description: "In-depth reporting on New Brunswick's systemic governance failures. Real data, real sources.",
  },
};

const articles = [
  {
    slug: "holt-lobbying-scandal",
    title: "Liberal Lobbyists Line Up to Influence Holt Government",
    date: "March 17, 2026",
    category: "Corruption",
    description: "Former Liberal premiers Brian Gallant and Shawn Graham register as lobbyists. Ex-employees now lobbying their former boss. The revolving door spins.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    featured: true,
  },
  {
    slug: "irving-company-province",
    title: "New Brunswick: The Irving Company Province",
    date: "March 17, 2026",
    category: "Oligarchy",
    description: "One family dominates a province. 1.8M acres of forest. 20 newspapers. Canada's largest refinery. An oligarchy unparalleled in the developed world.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    featured: true,
  },
  {
    slug: "blaine-higgs-controversies",
    title: "Blaine Higgs: Policy 713 and the Downfall",
    date: "March 17, 2026",
    category: "Politics",
    description: "The premier who rolled back LGBTQ protections, fired dissenting ministers, and lost his party. How Higgs's social conservatism brought down a government.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    featured: true,
  },
  {
    slug: "nb-community-voices-nb-power",
    title: "Community Voices: What New Brunswickers Are Saying About NB Power",
    date: "March 16, 2026",
    category: "Energy",
    description: "From the NB Power Rants Facebook group (20,000+ members) to EUB hearing testimony — the voices of New Brunswickers struggling with electricity costs.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    featured: true,
  },
  {
    slug: "irving-tax-nb-extraction",
    title: "The Irving Tax: How NB's Richest Family Pays 5x Less Property Tax",
    date: "March 16, 2026",
    category: "Oligarchy",
    description: "Irving Oil pays 5x less property tax than US refineries. 2.7M hectares of Crown forest. $45M in preferential NB Power rates. The full extraction picture.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    featured: true,
  },
  {
    slug: "nb-power-50-percent-hike-explained",
    title: "Why NB Power Wants a 50% Rate Hike While Burning Record Fossil Fuels",
    date: "March 16, 2026",
    category: "Energy",
    description: "NB Power burned 4 million barrels of heavy fuel oil — most in 16 years — while proposing rate hikes. $5.9B debt. 27% capacity. The death spiral explained.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    featured: true,
  },
  {
    slug: "nb-power-rate-hearing-2026",
    title: "NB Power Rate Hearing LIVE: 50% Hike on the Table (EL-003-2025)",
    date: "March 16, 2026",
    category: "Energy",
    description: "The NB Energy & Utilities Board is holding live hearings on NB Power's proposed rate increases. Watch the live streams. Your money is on the line.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    featured: true,
  },
  {
    slug: "irving-monopoly-forestry-media",
    title: "The Irving Empire: 2.7M Hectares of Crown Forest and 90% Media Control",
    date: "March 16, 2026",
    category: "Oligarchy",
    description: "How one family controls 2.7 million hectares of NB public forest at below-market rates and maintained 90% media monopoly for 90+ years.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    featured: true,
  },
  {
    slug: "healthcare-crisis-2026",
    title: "238K Without a Doctor: NB Healthcare in Freefall",
    date: "March 2026",
    category: "Healthcare",
    description: "Nearly 1 in 3 New Brunswickers lacks a family doctor. 2,199 ER deaths in 4 years. 40% of beds blocked by ALC patients. The full picture of healthcare collapse.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    featured: true,
  },
  {
    slug: "dornan-firing-settlement",
    title: "$1.8 Million Settlement: Health Minister Dornan's Firing Exposed",
    date: "March 2026",
    category: "Healthcare",
    description: "Higgs fired Horizon CEO John Dornan. Province paid $1.8M to settle. Now he's Health Minister. Total taxpayer cost: over $2.1M.",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80",
  },
  {
    slug: "glyphosate-spraying-nb",
    title: "Glyphosate in NB Forests: Cancer Study, Corporate Denial, Government Inaction",
    date: "June 2025",
    category: "Environment",
    description: "New study links glyphosate to 15 tumor types. NB sprays 15K+ hectares yearly. 76% want it banned. Irving calls supporters 'Karens.'",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    slug: "healthcare-er-deaths",
    title: "2,199 ER Deaths: Auditor General Confirms Scale of NB Healthcare Failure",
    date: "December 2025",
    category: "Healthcare",
    description: "2,199 patients pronounced dead after ER arrival in just 4 years. 43% never triaged in time. Province has 'no strategy.'",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    slug: "nb-power-emissions",
    title: "NB Power's Coleson Cove: 3M Tonnes of CO₂ and Counting",
    date: "November 2025",
    category: "Environment",
    description: "Coleson Cove burns 3,000+ barrels of heavy fuel oil daily. NB Power's $5.9B debt and 50% rate hike proposal.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    slug: "fredericton-chemical-spill",
    title: "Fredericton Chemical Spill: Cancer-Causing Coating on Roads",
    date: "March 2026",
    category: "Environment",
    description: "Government slow to notify residents as cancer-causing chemical coats city roads. Cleanup questions unanswered.",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800&q=80",
  },
  {
    slug: "housing-crisis-2026",
    title: "NB Housing Crisis 2026: 1,500+ Homeless, Tent Cities Grow",
    date: "February 2026",
    category: "Housing",
    description: "12% population growth in 4 years. 1,500+ chronically homeless. 440 youth without shelter. 100+ unhoused deaths in 2025.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
  },
  {
    slug: "poverty-campbellton",
    title: "2026 Poverty Report: Campbellton Child Poverty Hits 41.2%",
    date: "February 2026",
    category: "Economy",
    description: "Highest child poverty rate in Canada. Indigenous reserves at 51.2%. HST at 15% — highest in the country.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
];

export default function ArticlesPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={FileSearch}
        title="Investigative Articles"
        quote="Every article is sourced. Every claim is documented. We follow the evidence, wherever it leads."
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}/`}
              className="group flex flex-col md:flex-row gap-6 items-stretch bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all"
            >
              <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 256px"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white font-black text-sm font-mono">{article.date}</span>
                  <span className="text-sm font-bold text-white uppercase tracking-widest px-2 py-1 bg-black border border-neutral-800 rounded">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors mb-3 leading-tight">
                  {article.title}
                </h2>
                <p className="text-white group-hover:text-white transition-colors leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        icon={Send}
        title="More Investigations Coming"
        description="We are actively investigating additional stories. Have information? Send us a tip."
        buttonText="Send a Tip"
        buttonHref="mailto:reformnb-tips@proton.me"
      />
    </PageWrapper>
  );
}
