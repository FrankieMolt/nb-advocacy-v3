import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "NB Power: 4M Barrels Oil, 16-Year High",
  description: "NB Power burned 4 million barrels of oil. Emissions hit 16-year high. $254M at Coleson Cove alone.",
  alternates: { canonical: "https://nbreform.ca/articles/nb-power-emissions/" },
  openGraph: {
    title: "NB Power Burns 4 Million Barrels of Oil: Emissions Hit 16-Year High",
    description: "New EUB filings reveal NB Power burned nearly 4 million barrels of oil in 12 months, pushing emissions to 3M+ tonnes — a 16-year high.",
    images: [{ url: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200", width: 1200, height: 675, alt: "NB Power industrial emissions" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="NB Power Burns 4 Million Barrels of Oil: Emissions Hit 16-Year High"
      date="March 14, 2026"
      image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
      imageAlt="Industrial smokestacks emitting pollution against dark sky"
      imageCredit="Unsplash / @shutter_studio"
      imageCreditUrl="https://unsplash.com/@shutter_studio"
      sources={[
        { title: "CBC: NB Power emissions surge to 16-year high", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" },
        { title: "Stewart McKelvey: Energy Watch 2025", url: "https://www.stewartmckelvey.com/news-and-insights/energy-watch-2025/" },
        { title: "NB Power: 2023-2024 Annual Report", url: "https://www.nbpower.com/en/about-us/annual-report/" },
        { title: "CBC: NB Power proposes net-zero rate premium", url: "https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-energy-poverty-2025-9.7118008" },
        { title: "CTV News: NB Power applies for 4.75% rate hike", url: "https://www.ctvnews.ca/atlantic/new-brunswick/article/nb-power-applies-for-475-per-cent-rate-hike-for-2026/" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">NB Power: 4M Barrels Oil, 16-Year High</h1>

      <p className="text-xl text-white leading-relaxed mb-8">
        New Brunswick's Energy and Utilities Board filings reveal a utility in crisis. NB Power burned nearly <strong className="text-white">4 million barrels of oil</strong> in just 12 months, pushing greenhouse gas emissions past 3 million tonnes — a level not seen since 2010. The data comes as the utility seeks a 4.75% rate increase for 2026, compounding a 50% rate hike over the past six years.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Coleson Cove: The $254 Million Furnace</h2>
      <p>
        Coleson Cove generating station alone consumed <strong>$254 million in heavy fuel oil</strong> over the reporting period. The 1,200 MW plant, one of the largest oil-fired generating stations in North America, continues to burn some of the dirtiest fuel available — despite repeated promises to transition to cleaner alternatives.
      </p>
      <p>
        Heavy fuel oil (HFO) is what remains after petroleum refining extracts everything useful. It is thick, toxic, and produces significantly higher emissions per megawatt-hour than natural gas, let alone renewables. Burning it requires pre-heating and produces sulfur dioxide, nitrogen oxides, and particulate matter — contributing to both climate change and local air quality problems in the Saint John region.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">A Record of Emissions</h2>
      <p>
        The emissions data reveals a stark contradiction between NB Power's marketing and its operations:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li><strong>4 million barrels</strong> of oil burned in 12 months</li>
        <li><strong>3+ million tonnes</strong> of greenhouse gas emissions — the highest since 2010</li>
        <li><strong>$254 million</strong> spent on heavy fuel oil at Coleson Cove alone</li>
        <li><strong>16-year emissions high</strong> despite a &quot;net-zero&quot; premium rate marketed to customers</li>
        <li>Increased reliance on <strong>coal, oil, petroleum coke, and natural gas</strong> simultaneously</li>
      </ul>
      <p>
        While NB Power markets a "net-zero" premium rate and promises a clean energy transition, the utility's actual operations tell a different story. Oil-fired generation surged to fill gaps left by the delayed Point Lepreau nuclear refurbishment and chronic underinvestment in renewable capacity.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Rate Hike Squeeze</h2>
      <p>
        The 4.75% rate increase application for 2026 follows years of aggressive rate hikes. Over the past six years, NB Power rates have climbed by more than <strong>50%</strong> — far outstripping inflation and wage growth in a province where the median household income remains among the lowest in Canada.
      </p>
      <p>
        Advocacy groups have raised alarms about energy poverty, noting that New Brunswick already has one of the highest rates of household energy cost burden in the country. A 2025 CBC analysis found that low-income families in NB spend up to <strong>15% of their income on electricity</strong> — well above the 6% threshold considered "energy poverty."
      </p>
      <p>
        "NB Power is asking the poorest ratepayers in Canada to subsidize their own pollution," said one energy advocate. "Every rate increase pushes more families into the cold."
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The $5.9 Billion Debt Spiral</h2>
      <p>
        NB Power carries <strong>$5.9 billion in debt</strong> — the highest per-capita utility debt in Canada. Interest payments alone consume a growing share of revenue, creating a vicious cycle: the utility borrows to cover operating costs, then raises rates to service the debt, driving customers to reduce consumption, which reduces revenue, requiring more borrowing.
      </p>
      <p>
        As of March 2025, NB Power held a <strong>$566 million sinking fund receivable</strong> from the Province of New Brunswick (up from $502 million in 2024) — an accounting instrument that papers over the fundamental structural deficit.
      </p>
      <p>
        Critics argue the utility's governance structure — tightly controlled by the provincial government — has prevented the kind of independent oversight and long-term planning that would have avoided the current crisis. Multiple EUB decisions have been overridden by cabinet orders, most notably the forced approval of the Mactaquac dam refurbishment at costs that have ballooned from $2.9 billion to over $4.5 billion.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The 400 MW Gas Plant Decision</h2>
      <p>
        In December 2024, NB Power entered a power purchase agreement for a 400 MW natural gas plant — a decision that locks in fossil fuel generation for decades. Environmental groups argue this contradicts the province's stated climate commitments and represents a failure of long-term planning.
      </p>
      <p>
        The move to natural gas, while cleaner than heavy fuel oil, is still a carbon-intensive choice that will produce emissions well past 2050 — the federal government's net-zero target date. Critics say the investment should have gone toward wind, solar, and battery storage — technologies that have seen dramatic cost reductions in recent years.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">What Comes Next</h2>
      <p>
        The EUB is expected to rule on the 2026 rate application by late spring. If approved, the average residential customer would see their monthly bill increase by approximately $7-9. For families already choosing between heating and eating, the increase is not trivial.
      </p>
      <p>
        Meanwhile, the province has committed to achieving 80% renewable electricity by 2030 — a target that energy analysts say is increasingly unrealistic given current investment levels and the pace of project approvals.
      </p>
      <p className="text-white italic mt-8">
        Reform NB is tracking NB Power's emissions, debt, and rate decisions. If rising energy costs have affected your household, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
