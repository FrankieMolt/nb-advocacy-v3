import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Fredericton Chemical Spill: Cancer Risk",
  description: "Cancer-causing chemical coats Fredericton roads. XL Plating responsible. Government slow to respond.",
  alternates: { canonical: "https://nbreform.ca/articles/fredericton-chemical-spill/" },
  openGraph: {
    title: "Fredericton Chemical Spill: Cancer-Causing Substance Coats City Roads",
    description: "Cancer-causing chemical coated Fredericton roads. Government slow to respond. Preliminary sodium traces detected.",
    images: [{ url: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1200", width: 1200, height: 675, alt: "Chemical contamination" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Fredericton Chemical Spill: Cancer-Causing Substance Coats City Roads"
      date="March 2026"
      image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
      imageAlt="Chemical contamination on industrial site"
      imageCredit="Unsplash / @shutter_studio"
      imageCreditUrl="https://unsplash.com/@shutter_studio"
      sources={[
        { title: "GNB: Vanier Highway chemical spill update", url: "https://www2.gnb.ca/content/gnb/en/news.html" },
        { title: "CBC: Fredericton chemical spill — politicians call for transparency", url: "https://www.cbc.ca/news/canada/new-brunswick/fredericton-chemical-spill-march-2026" },
        { title: "CBC: Fredericton firm identified in chemical spill", url: "https://www.cbc.ca/news/canada/new-brunswick/fredericton-chemical-spill-firm-identified" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">Fredericton Chemical Spill: Cancer Risk</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        A potentially <strong className="text-white">cancer-causing chemical</strong> coated roads across Fredericton in early March 2026. Preliminary testing detected traces of sodium-based compounds. Residents reported a strong chemical odor across multiple neighborhoods hours before any official notification. By the time the province issued a public advisory, the substance had been present on roads and in storm drains for approximately 18 hours.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Happened</h2>
      <p>
        The spill occurred on the Vanier Highway, a major arterial route south of Fredericton. Evidence suggests multiple trucks were involved, with some reports indicating the chemical was being transported in the middle of the night. Routes diverged — some trucks heading toward Fredericton, others in different directions — raising questions about the full extent of contamination.
      </p>
      <p>
        Preliminary testing by the Environment Department detected traces of sodium-based chemical compounds on road surfaces and in storm drain samples. The full chemical composition has not been publicly released. The responsible company — <strong className="text-white">XL Plating & Machining</strong> — was identified but faces potential fines up to <strong className="text-white">$1 million</strong> under environmental regulations. The spill involved approximately 900 litres of toxic material on the Trans-Canada Highway.
      </p>
      <p>
        The Environment Department confirmed it was not notified by the responsible party or by other government departments until well after the spill was discovered. This delay prevented timely testing of drinking water sources and storm sewer outflows that connect to the Saint John River.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">From Stem to Stern: A Failed Response</h2>
      <p>
        Politicians and environmentalists across party lines called for transparency. "From stem to stern, their spill response and public notification failed," said one critic. The timeline tells the story:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li><strong>Night of spill:</strong> Multiple trucks transporting chemicals on Vanier Highway</li>
        <li><strong>Early morning:</strong> Residents report strong chemical odor across neighborhoods</li>
        <li><strong>18 hours later:</strong> Province issues first public advisory</li>
        <li><strong>Environment Department:</strong> Notified hours after public discovery</li>
        <li><strong>Preliminary testing:</strong> Sodium-based compound traces detected on roads and storm drains</li>
        <li><strong>Full testing:</strong> Results not publicly released as of publication</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Regulatory Capture Pattern</h2>
      <p>
        The incident fits a pattern that critics call "regulatory capture" — where the agencies meant to oversee industry become too close to the companies they regulate. New Brunswick's small size and concentrated corporate power create natural conflicts: former industry executives sit on regulatory boards, government officials retire to corporate boardrooms, and enforcement budgets are cut while promotional spending grows.
      </p>
      <p>
        This is not the first chemical incident in Fredericton. Multiple spills over the past decade have followed the same pattern: delayed notification, minimal enforcement, no meaningful penalties, and no systemic reforms. Each incident generates a few days of headlines, followed by a return to business as usual.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Health Concerns</h2>
      <p>
        Residents in affected neighborhoods are demanding independent health testing. The province has offered air quality monitoring but has not committed to long-term health surveillance for exposed populations — a critical gap given that cancer risks from chemical exposure may not manifest for 10-20 years.
      </p>
      <p>
        The roads and storm drains feed into the Saint John River watershed — the drinking water source for tens of thousands of Fredericton residents. Questions remain about whether contaminated stormwater reached the river before cleanup began.
      </p>
      <p>
        "They'll tell us it's safe today," said one affected resident. "But who's going to be accountable when people in this neighborhood get cancer in 15 years?"
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Comes Next</h2>
      <p>
        Environmental groups are calling for an independent review of the province's spill response protocols, mandatory real-time notification systems for chemical transport incidents, and long-term health monitoring for exposed populations. As of publication, the province has committed only to "reviewing" its existing procedures.
      </p>
      <p className="text-white italic mt-8">
        Reform NB is tracking the chemical spill investigation. If you were affected by the spill or have information about chemical transport in the Fredericton area, we want to hear from you.
      </p>
    </ArticleLayout>
  );
}
