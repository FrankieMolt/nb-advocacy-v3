import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irving Tax: 5x Less Property Tax Than US Refineries",
  description: "Irving Oil pays 5x less property tax than US refineries. Controls 2.7M hectares of Crown forest. Owned 90% of NB media. The full extraction picture.",
  keywords: "Irving family New Brunswick, Irving property tax, Irving monopoly, Irving Oil taxes, Irving forestry Crown land, Irving media monopoly, James Irving, Arthur Irving, Irving wealth $30 billion, New Brunswick oligarchy, Irving Paper electricity, corporate capture New Brunswick, vertical monopoly Irving",
  alternates: { canonical: "https://nbreform.ca/articles/irving-tax-nb-extraction/" },
  openGraph: {
    title: "Irving Tax: 5x Less Property Tax | Reform NB",
    description: "The Irving family's $30B+ empire: below-market Crown forest access, preferential NB Power rates, lowest property taxes in North America. NB pays the price.",
    images: [{ url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200", width: 1200, height: 675, alt: "Industrial refinery representing Irving empire" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="The Irving Tax: How New Brunswick's Richest Family Pays the Least"
      date="March 16, 2026"
      image="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&q=80"
      imageAlt="Industrial refinery at sunset"
      imageCredit="Unsplash"
      sources={[
        { title: "Policy Alternatives: The Irving Group — Corporate Power in NB", url: "https://www.policyalternatives.ca/" },
        { title: "CBC: NB property tax assessments under fire", url: "https://www.cbc.ca/news/canada/new-brunswick" },
        { title: "NB Media Co-op: Irving Crown forest leases", url: "https://nbmediacoop.org/" },
        { title: "Parliament of Canada: Committee on corporate concentration", url: "https://www.ourcommons.ca/" },
        { title: "Reform NB: Irving Monopoly — Forestry & Media", url: "/articles/irving-monopoly-forestry-media/" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">Irving Tax: 5x Less Property Tax Than US Refineries</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        In any functioning democracy, the wealthiest pay proportionally. In New Brunswick, the <strong className="text-white">Irving family</strong> — worth an estimated <strong className="text-white">$14.5 billion</strong> — pays property taxes at a fraction of what comparable operations pay in the United States. This isn't a loophole. It's the system working exactly as designed.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Property Tax Gap</h2>
      <p>
        Irving Oil's <strong className="text-white">Saint John refinery</strong> is one of the largest in eastern North America, processing over 300,000 barrels per day. Despite its massive footprint, the refinery pays property taxes assessed at roughly <strong className="text-white">one-fifth</strong> the rate of comparable facilities in the United States.
      </p>
      <p>
        How? New Brunswick's property assessment system allows industrial properties to be valued based on their <strong className="text-white">"current use"</strong> rather than market value. For Irving's vast industrial holdings, this means assessments that bear little relationship to what those assets would sell for on an open market.
      </p>
      <p>
        The gap isn't small. A comparable refinery in, say, Pennsylvania or Louisiana would pay $30-50 million annually in property taxes. Irving's Saint John operation pays a fraction of that. The difference is effectively a <strong className="text-white">subsidy extracted from every other taxpayer</strong> in the province.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">2.7 Million Hectares of Crown Forest</h2>
      <p>
        The Irving family controls access to approximately <strong className="text-white">2.7 million hectares of Crown land</strong> — publicly owned forest — through long-term timber licenses. These licenses were granted at below-market rates and renewed for decades with minimal public scrutiny.
      </p>
      <p>
        To understand the scale: 2.7 million hectares is larger than the entire country of Jamaica. It represents a significant portion of New Brunswick's total land mass. The wood from these public forests feeds Irving's pulp mills, sawmills, and biomass operations — generating billions in private revenue from public resources.
      </p>
      <p>
        When the Wolastoqey Nation filed a title claim over 60% of New Brunswick — including much of this Crown land — the province spent millions in legal fees fighting the claim rather than addressing the underlying issue: <strong className="text-white">public resources being extracted for private profit</strong> while Indigenous communities receive nothing.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Vertical Monopoly</h2>
      <p>
        What makes the Irving empire unique isn't any single business — it's the <strong className="text-white">vertical integration</strong>. The family controls:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Oil:</strong> Irving Oil refinery, terminals, and 900+ gas stations</li>
        <li><strong className="text-white">Forestry:</strong> J.D. Irving Limited — Crown land licenses, pulp mills, sawmills</li>
        <li><strong className="text-white">Transportation:</strong> Midland Transport, Kent Lines, fleet operations</li>
        <li><strong className="text-white">Construction:</strong> Irving-owned building supply chains</li>
        <li><strong className="text-white">Shipbuilding:</strong> Irving Shipbuilding — $25B federal naval contract</li>
        <li><strong className="text-white">Agriculture:</strong> Cavendish Farms — potato processing monopoly</li>
        <li><strong className="text-white">Media:</strong> Formerly owned all 3 English-language daily newspapers (sold 2022, but influence remains)</li>
      </ul>
      <p>
        This vertical integration means that when the government makes decisions about forestry, energy, transportation, or media — Irving has interests in every dimension. Every regulatory decision becomes a potential conflict of interest.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The NB Power Connection</h2>
      <p>
        Irving Paper received <strong className="text-white">$45 million in preferential electricity rates</strong> from NB Power — a public utility. While residential ratepayers face 50% cumulative increases, a private industrial operation receives subsidized power from the same grid.
      </p>
      <p>
        This isn't unique to Irving Paper. Large industrial customers across New Brunswick negotiate confidential rate agreements with NB Power. The terms are not public. The rationale is "economic development" — the argument being that cheap power keeps factories open and workers employed.
      </p>
      <p>
        But the math doesn't add up. If cheap industrial power were driving economic development, New Brunswick wouldn't have Canada's <strong className="text-white">highest child poverty rate</strong> (21.9%) and one of the lowest median incomes in the country. The subsidy flows to corporate bottom lines, not to community prosperity.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Media Shield</h2>
      <p>
        For over 90 years, the Irving family owned all three English-language daily newspapers in New Brunswick: the <em>Saint John Telegraph-Journal</em>, the <em>Fredericton Daily Gleaner</em>, and the <em>Moncton Times & Transcript</em>. In 2022, they sold to PostMedia — a chain with its own corporate interests.
      </p>
      <p>
        The effect of near-total media control is difficult to overstate. When one family controls the primary news sources for an entire province:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li>Stories about Irving environmental violations don't get covered</li>
        <li>Journalists who investigate corporate power face career consequences</li>
        <li>Public discourse is shaped by what the monopoly chooses to highlight — or ignore</li>
        <li>Political candidates learn quickly which topics are "off limits"</li>
      </ul>
      <p>
        The sale to PostMedia changed the masthead but not the structural reality. New Brunswick's media landscape remains one of the most concentrated in the developed world.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Would Fair Look Like?</h2>
      <p>
        Reform doesn't require confiscation or radical change. It requires <strong className="text-white">normalization</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Property tax at market rates</strong> — matching what comparable operations pay in peer jurisdictions</li>
        <li><strong className="text-white">Crown forest license fees at market value</strong> — reflecting the true worth of public timber</li>
        <li><strong className="text-white">Transparent industrial electricity rates</strong> — ending confidential preferential agreements</li>
        <li><strong className="text-white">Independent media funding</strong> — ensuring journalism that serves the public, not corporate interests</li>
        <li><strong className="text-white">Environmental bond requirements</strong> — ensuring companies clean up after extraction</li>
      </ul>
      <p>
        None of these are radical. Most are standard practice in other provinces and states. The only reason they're controversial in New Brunswick is that <strong className="text-white">the current system serves a very small, very powerful constituency</strong>.
      </p>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-gold p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          "New Brunswick doesn't have a revenue problem. It has a collection problem. The province's wealthiest family has engineered a system where public resources flow to private accounts, and the rest of the province picks up the tab."
        </p>
        <p className="text-sm text-white mt-4">— Reform NB</p>
      </div>

      <p className="text-white italic mt-12">
        This is the second in our series on corporate capture in New Brunswick. Read Part 1:{" "}
        <Link href="/articles/irving-monopoly-forestry-media/" className="text-white underline hover:text-white">
          The Irving Empire: 2.7M Hectares and 90% Media Control
        </Link>
        . Have information about corporate tax arrangements?{" "}
        <a href="mailto:reformnb-tips@proton.me" className="text-white underline hover:text-white">Contact us securely</a>.
      </p>
    </ArticleLayout>
  );
}
