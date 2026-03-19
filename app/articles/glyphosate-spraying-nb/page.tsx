import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Glyphosate Spraying: 15K+ Hectares, New Cancer Study, NB's Refusal to Act",
  description: "New study links glyphosate to cancer. NB sprays 15,000+ hectares annually. 76% of residents want it banned. Premier says she'd ban it if linked to mystery brain illness.",
  alternates: { canonical: "https://reformnb.ca/articles/glyphosate-spraying-nb/" },
  openGraph: {
    title: "Glyphosate Spraying in NB Forests: Cancer Study, Corporate Influence, Government Inaction",
    description: "Ramazzini Institute study finds tumors in rats exposed to glyphosate. NB sprays 15K+ hectares yearly. Irving director calls ban supporters 'Karens.' Government won't act.",
    images: [{ url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200", width: 1200, height: 675, alt: "Forest landscape" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Glyphosate in NB Forests: The Chemical They Spray, The Cancer They Deny, The Government That Won't Act"
      date="June 2025"
      image="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
      imageAlt="NB forest landscape — 15,000+ hectares sprayed with glyphosate annually"
      imageCredit="Unsplash / @seanpollock"
      imageCreditUrl="https://unsplash.com/@seanpollock"
      sources={[
        { title: "CBC: Premier ready to ban glyphosate if link found to mystery brain illness (Dec 2024)", url: "https://www.cbc.ca/news/canada/new-brunswick/susan-holt-mystery-brain-illness-glyphosate-1.7416196" },
        { title: "Telegraph-Journal: New glyphosate study sparks questions about N.B. use (Jun 2025)", url: "https://tj.news/new-brunswick/new-glyphosate-study-sparks-questions-about-n-b-use" },
        { title: "Safe Food Matters: New Report Shows Repeat Spraying of BC and NB Forests (Mar 2025)", url: "https://safefoodmatters.org/2025/03/28/new-report-shows-repeat-spraying-of-bc-and-new-brunswick-forests-contrary-to-federal-approval/" },
        { title: "CCNB: Herbicide Spraying in New Brunswick", url: "https://www.conservationcouncil.ca/herbicides/" },
        { title: "Stop Spraying NB — Community advocacy group", url: "https://www.stopsprayingnb.ca/" },
        { title: "NB Environment: Vegetation Management and Herbicide Use (Government)", url: "https://www2.gnb.ca/content/gnb/en/departments/erd/forestry-conservation/content/vegetation-management-herbicides.html" },
      ]}
    >
      <h2>The Scale of Spraying</h2>
      <p>
        Every year, New Brunswick's Crown forests are sprayed with glyphosate — the active ingredient in Roundup — on <strong>15,000+ hectares</strong> of public land. The purpose: kill hardwood trees so softwood (spruce, fir) can grow faster for the forestry industry. Since 2005, spraying has increased by 30%.
      </p>
      <p>
        <strong>76% of New Brunswick residents</strong> want glyphosate banned. Indigenous leaders have called for a ban, citing contamination of traditional food sources. The spraying continues.
      </p>

      <h2>New Cancer Study (June 2025)</h2>
      <p>
        The Italian-based Ramazzini Institute released a major study in June 2025 exposing rats to small, consistent amounts of glyphosate for over two years. The findings:
      </p>
      <ul>
        <li>"Statistically significant dose-related increased trends or increased incidences of benign and malignant tumors"</li>
        <li>Tumors found in: <strong>leukemia, skin, liver, thyroid, nervous system, ovary, mammary gland, adrenal glands, kidney, urinary bladder, bone, endocrine pancreas, uterus, and spleen</strong></li>
        <li>Increased incidences in <strong>both sexes</strong></li>
      </ul>
      <p>
        Bayer (which owns Roundup) called the study flawed. The NB government's initial response was that the study wasn't applicable because two of the three products tested aren't used in Canada — <em>but the study also tested glyphosate itself</em>. When pressed, the government said only that glyphosate "continues to be used" and that applicators need certification.
      </p>

      <h2>The Government's Position: "Show Us the Link"</h2>
      <p>
        Premier Susan Holt said in December 2024 she would be "willing to ban" glyphosate <strong>if a link is found</strong> to the mystery brain illness that Moncton neurologist Dr. Alier Marrero is tracking. She acknowledged residents are "afraid about what glyphosate might do" but said "we don't have good science to tell us that that is what's making New Brunswickers sick."
      </p>
      <p>
        The Canadian Forest Service's 2023 study found glyphosate in only 1 of 296 water samples — at 17 parts per billion, below the 280 ppb safe drinking water threshold. Lead researcher Chris Edge said glyphosate "is present at concentrations that are lower than where we'd expect adverse effects to occur."
      </p>
      <p>
        But critics argue this misses the point: the issue isn't just water contamination. It's the <strong>systemic destruction of forest ecosystems</strong> — killing the plants that wildlife eat, disrupting salmon habitat, and contaminating the food chain in ways that aren't captured by single water samples.
      </p>

      <h2>The Irving Connection</h2>
      <p>
        J.D. Irving Ltd. is the primary beneficiary of glyphosate spraying on Crown forests. The company holds long-term licenses on 2.7 million hectares of NB forest. Glyphosate allows them to convert diverse forests into monoculture softwood plantations — maximizing lumber yield at the expense of biodiversity.
      </p>
      <p>
        When the Stop Spraying NB movement gained momentum, <strong>J.D. Irving's director of forestry compared ban supporters to "Karens"</strong> — a dismissive remark that crystallized the corporate contempt for public concern about public land.
      </p>

      <h2>Mystery Brain Illness</h2>
      <p>
        Since 2021, Dr. Alier Marrero has been tracking a cluster of neurological symptoms in NB patients: cognitive decline, muscle wasting, hallucinations, and rapid deterioration. The province initially downplayed the cases, then launched an investigation, then cut off Dr. Marrero's access to data — which he described as being done for "political" reasons.
      </p>
      <p>
        The link to glyphosate remains unproven but not ruled out. Dr. Marrero has hypothesized that glyphosate contributes to blue-green algae blooms, which produce toxins that can affect the brain. The federal government's own scientist acknowledged that algae can feed on phosphate molecules in glyphosate.
      </p>

      <h2>What Other Provinces Are Doing</h2>
      <ul>
        <li><strong>Quebec:</strong> Banned cosmetic pesticide use including glyphosate products (2003)</li>
        <li><strong>Nova Scotia:</strong> Tightening restrictions; recent approval of 3,577 acres drew criticism during drought/fire conditions</li>
        <li><strong>British Columbia:</strong> Under pressure over repeat spraying contrary to federal approval</li>
        <li><strong>New Brunswick:</strong> Spraying 15,000+ hectares annually with no plans to stop</li>
      </ul>

      <blockquote>
        "New Brunswickers are afraid about what glyphosate might do, and the mysterious neurological illness has given them reason to be more afraid."
        <cite>— Premier Susan Holt, December 2024</cite>
      </blockquote>

      <p>
        The science may not be conclusive. But when 76% of your residents want something banned, when Indigenous peoples are calling for protection of their food sources, and when a new international study links the chemical to tumors in 15 different organs — the burden of proof should be on those who want to keep spraying, not those who want to stop.
      </p>
    </ArticleLayout>
  );
}
