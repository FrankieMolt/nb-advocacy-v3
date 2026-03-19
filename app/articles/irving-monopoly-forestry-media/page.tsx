import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { DollarSign, TreePine, Newspaper, Building2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Irving Empire: 2.7M Hectares of Crown Forest and 90% Media Control",
  description: "How the Irving family controls 2.7 million hectares of NB public forest at below-market rates and maintained 90% media monopoly for 90+ years. The anatomy of a Canadian oligarchy.",
  keywords: "Irving, J.D. Irving, NB forests, Crown Lands Act, media monopoly, NB newspapers, Irving Oil, oligarchy, New Brunswick, clear-cutting, glyphosate, Arthur Irving, James Irving",
  alternates: { canonical: "https://reformnb.ca/articles/irving-monopoly-forestry-media/" },
  openGraph: {
    title: "The Irving Empire: 2.7M Hectares, 90% Media, $30B Wealth | Reform NB",
    description: "How one family controls New Brunswick's forests, newspapers, oil, and government. The anatomy of a Canadian oligarchy.",
    images: [{ url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200", width: 1200, height: 675, alt: "Industrial refinery representing the Irving empire" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="The Irving Empire: How One Family Controls New Brunswick"
      date="March 16, 2026"
      image="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&q=80"
      imageAlt="Industrial refinery at sunset representing the Irving corporate empire"
      imageCredit="Unsplash"
      sources={[
        { title: "CBC: Irving's Crown Lands (2014-2025)", url: "https://www.cbc.ca/news/canada/new-brunswick" },
        { title: "NB Media Co-op: Irving Media Monopoly", url: "https://nbmediacoop.org/" },
        { title: "Canadian Centre for Policy Alternatives: Irving Wealth", url: "https://www.policyalternatives.ca/" },
        { title: "NB Auditor General Reports on Crown Lands", url: "https://www5.gnb.ca/content/gnb/en/departments/auditor_general.html" },
        { title: "Forbes: Irving Family Net Worth", url: "https://www.forbes.com/" },
        { title: "Stop Spraying NB: Glyphosate Data", url: "https://stopsprayingnb.ca/" },
        { title: "Reform NB: The Oligarchy", url: "/oligarchy" },
      ]}
    >
      <p className="text-xl text-white leading-relaxed mb-8">
        In New Brunswick, one family controls the forests, the oil, the newspapers, the construction contracts, and the political machinery that keeps it all running. The Irving group of companies — spanning forestry, oil refining, media, transportation, shipbuilding, and agriculture — is not just the largest employer in the province. It is the <strong className="text-white">de facto government</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">By the Numbers</h2>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">$30 billion+</strong> — Combined wealth of the Irving, McCain, and Cooke families</li>
        <li><strong className="text-white">$14.5 billion</strong> — Irving family net worth (Forbes estimate)</li>
        <li><strong className="text-white">2.7 million hectares</strong> — Crown forest under Irving management (public land, below-market rates)</li>
        <li><strong className="text-white">90%</strong> — Irving&apos;s former control of English-language newspapers in NB</li>
        <li><strong className="text-white">5x lower</strong> — Irving&apos;s property tax rate compared to equivalent US refineries</li>
        <li><strong className="text-white">21%</strong> — increase in Irving&apos;s allowable timber cut after the 2014 Crown Lands Act</li>
        <li><strong className="text-white">$45 million</strong> — preferential power rate given to Irving Paper by NB Power</li>
        <li><strong className="text-white">15,000+ hectares</strong> — NB forests sprayed with glyphosate annually (primarily for Irving plantations)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Forest: Public Land, Private Profit</h2>
      <p>
        New Brunswick&apos;s Crown forests — <strong className="text-white">publicly owned land</strong> — cover roughly 3.2 million hectares. Of that, J.D. Irving manages approximately <strong className="text-white">2.7 million hectares</strong>, making it one of the largest private forest managers on public land in North America.
      </p>
      <p>
        The 2014 <strong className="text-white">Crown Lands Act</strong> changes, pushed through by the Alward Conservative government, gave J.D. Irving a <strong className="text-white">21% increase in allowable cut</strong> while slashing wildlife habitat conservation buffers. The changes were widely criticized by environmental groups, Indigenous nations, and former forestry scientists — but passed with minimal public debate.
      </p>
      <p>
        The forestry model is simple: clear-cut public forests, replant with monoculture softwood plantations, spray glyphosate to kill competing vegetation, and export raw logs or low-value pulp. The profits flow to Irving; the environmental costs — salmon collapse, water contamination, habitat destruction — are borne by the public.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Glyphosate Machine</h2>
      <p>
        Every year, <strong className="text-white">15,000+ hectares</strong> of New Brunswick forests are sprayed with glyphosate — a herbicide linked to cancer by the WHO&apos;s International Agency for Research on Cancer. The spraying is primarily used to kill hardwoods and competing vegetation in Irving&apos;s softwood plantations.
      </p>
      <p>
        A 2025 study linked glyphosate to <strong className="text-white">15 types of tumors</strong>. The European Union has moved to ban agricultural use. But in New Brunswick, where 76% of residents support a ban, the practice continues — protected by a government that receives significant political support from the forestry industry.
      </p>
      <p>
        When Dr. Rod Cumberland, the province&apos;s former chief deer biologist, published research linking glyphosate to declining deer populations, he was <strong className="text-white">fired</strong>. Other scientists have reported similar retaliation. Irving&apos;s VP of forestry dismissed ban supporters as <strong className="text-white">&quot;Karens.&quot;</strong>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Media Monopoly: 90+ Years of Control</h2>
      <p>
        For over 90 years, the Irving family owned all three major English-language daily newspapers in New Brunswick — the <strong className="text-white">Telegraph-Journal</strong> (Saint John), the <strong className="text-white">Daily Gleaner</strong> (Fredericton), and the <strong className="text-white">Times & Transcript</strong> (Moncton). In 2022, Irving sold Brunswick News to Postmedia — a company with its own concentration-of-media concerns.
      </p>
      <p>
        During the Irving newspaper era, critical coverage of the family&apos;s business interests was virtually nonexistent. Journalists who investigated Irving operations reported being sidelined, reassigned, or let go. Coverage of forestry practices, environmental contamination, and labor disputes was filtered through an editorial lens that rarely challenged corporate interests.
      </p>
      <p>
        The legacy persists. While Irving no longer directly owns the papers, the editorial culture built over 90 years doesn&apos;t change overnight. And Postmedia&apos;s own financial ties to extractive industries raise questions about whether the monopoly has truly ended — or just changed hands.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Vertical Monopoly</h2>
      <p>
        What makes the Irving empire unique is its <strong className="text-white">vertical integration</strong>. The same family controls:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Forestry</strong> — J.D. Irving manages 2.7M hectares of public forest</li>
        <li><strong className="text-white">Oil</strong> — Irving Oil operates Canada&apos;s largest refinery in Saint John (300K+ bpd)</li>
        <li><strong className="text-white">Media</strong> — Former monopoly on English-language newspapers</li>
        <li><strong className="text-white">Construction</strong> — Irving-owned companies build roads, bridges, and infrastructure</li>
        <li><strong className="text-white">Shipbuilding</strong> — Irving Shipbuilding holds federal shipbuilding contracts</li>
        <li><strong className="text-white">Transportation</strong> — Irving-owned trucking and rail infrastructure</li>
        <li><strong className="text-white">Agriculture</strong> — Cavendish Farms (potato processing)</li>
        <li><strong className="text-white">Real Estate</strong> — Commercial and industrial property holdings</li>
      </ul>
      <p>
        This means that when the government awards a road construction contract, it may go to an Irving company. When the newspaper reports on that contract, it was historically an Irving newspaper. When the refinery needs a regulatory exception, the politicians depend on Irving for campaign donations and jobs in their ridings.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Tax Advantage</h2>
      <p>
        Irving&apos;s Saint John refinery pays <strong className="text-white">5 times less property tax</strong> than equivalent refineries in the United States. The company has received billions in provincial and federal subsidies, tax breaks, and preferential utility rates over the decades.
      </p>
      <p>
        In 2023, Irving Oil sought to convert the Canaport LNG terminal back to an import facility — with regulatory fast-tracking. Meanwhile, NB Power gave Irving Paper <strong className="text-white">$45 million in preferential electricity rates</strong> while residential customers faced double-digit increases.
      </p>
      <p>
        The pattern is consistent: costs are socialized through rate increases and tax burdens on ordinary New Brunswickers; profits are privatized through preferential treatment of Irving operations.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Indigenous Resistance</h2>
      <p>
        The <strong className="text-white">Wolastoqey Nation</strong> has filed a title claim over 60% of New Brunswick — including lands heavily managed by Irving for forestry. The claim, which has survived multiple court challenges and is now heading to the Supreme Court of Canada, argues that the province&apos;s allocation of Crown lands to Irving has systematically denied Indigenous rights.
      </p>
      <p>
        In 2013, the <strong className="text-white">Elsipogtog First Nation</strong> led massive protests against SWN Resources&apos; seismic testing for fracking on traditional Mi&apos;kmaq territory. The protests — met with RCMP tactical teams — became a national symbol of Indigenous resistance to corporate extraction in the Maritimes.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Political Machine</h2>
      <p>
        The Irving family&apos;s political influence operates through multiple channels: campaign donations, employment in Irving ridings, revolving-door appointments between government and Irving companies, and the implicit threat that challenging Irving interests will trigger economic consequences.
      </p>
      <p>
        Former Premier <strong className="text-white">Frank McKenna</strong> — who oversaw significant Irving-favorable policy — later joined an Irving-affiliated board. The 2014 Crown Lands Act was passed by a government that had received substantial forestry industry support. The pattern is not hidden; it is simply accepted.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Must Change</h2>
      <p>
        Reform NB&apos;s position is clear:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6 text-white">
        <li><strong className="text-white">Repeal the 2014 Crown Lands Act</strong> and restore conservation buffers on public forests</li>
        <li><strong className="text-white">Ban glyphosate spraying</strong> on Crown land (76% of residents agree)</li>
        <li><strong className="text-white">End preferential industrial power rates</strong> until residential rates are affordable</li>
        <li><strong className="text-white">Enforce market-rate property assessments</strong> for all industrial facilities</li>
        <li><strong className="text-white">Strengthen media ownership rules</strong> to prevent re-concentration</li>
        <li><strong className="text-white">Implement anti-SLAPP legislation</strong> to protect journalists and whistleblowers</li>
      </ul>

      <div className="mt-12 bg-neutral-900 border-l-4 border-crisis-red p-8 rounded-r-xl">
        <p className="text-xl text-white font-serif italic leading-relaxed">
          &quot;New Brunswick is not a province. It is a company town with a flag.&quot;
        </p>
        <p className="text-sm text-white mt-4">— Common observation among NB political commentators</p>
      </div>

      <p className="text-white italic mt-12">
        This article is part of Reform NB&apos;s investigation into corporate capture in New Brunswick. The Irving family did not respond to requests for comment. If you have information about forestry practices, media interference, or preferential treatment, <a href="mailto:reformnb-tips@proton.me" className="text-white hover:text-white underline">contact us securely</a>.
      </p>
    </ArticleLayout>
  );
}
