import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Tent Cities: NB Housing Catastrophe",
  description: "1,500+ homeless across NB cities. 440 youth without shelter. 100+ deaths in 2025.",
  alternates: { canonical: "https://reformnb.ca/articles/housing-crisis-2026/" },
  openGraph: {
    title: "Tent Cities and 440 Youth Without Shelter: NB's Housing Catastrophe",
    description: "1,500+ chronically homeless across Moncton, Saint John, and Fredericton. 440 youth without shelter. 100+ deaths.",
    images: [{ url: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200", width: 1200, height: 675, alt: "Housing crisis tent encampment" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Tent Cities and 440 Youth Without Shelter: New Brunswick's Housing Catastrophe"
      date="March 2026"
      image="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1920&q=80"
      imageAlt="Tent encampment in an urban park during winter"
      imageCredit="Unsplash / @marjan_blan"
      imageCreditUrl="https://unsplash.com/@marjan_blan"
      sources={[
        { title: "CBC: More than 100 homeless New Brunswickers died in 2025", url: "https://www.cbc.ca/news/canada/new-brunswick/nb-homeless-deaths-2025-9.7038075" },
        { title: "Fraser Institute: NB risks losing affordability advantage", url: "https://www.fraserinstitute.org/commentary/new-brunswick-risks-losing-its-affordability-advantage-without-more-homebuilding" },
        { title: "NB Media Co-op: Affordable housing target 'not enough'", url: "https://nbmediacoop.org/2025/10/22/affordable-housing-target-not-enough-to-significantly-reduce-waitlist-says-researcher/" },
        { title: "Global News: Dear Moncton — homelessness crisis doubles", url: "https://globalnews.ca/news/nb-homelessness-crisis-moncton/" },
      ]}
    >
      <p className="text-xl text-white leading-relaxed mb-8">
        New Brunswick's population surged by <strong className="text-white">12% in just four years</strong> — from 775,000 to 869,000 — driven by aggressive immigration targets and interprovincial migration. But the housing supply didn't keep pace. The result: <strong className="text-white">1,500+ people now chronically homeless</strong> across Moncton, Saint John, and Fredericton, with tent cities becoming a permanent fixture of the urban landscape.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        More than <strong className="text-white">100 homeless New Brunswickers died in 2025</strong> — from toxic drug supply, exposure, violence, and the cascading health failures that come with sleeping outside. In the same year, 59 homeless deaths were recorded in Toronto. New Brunswick, with a fraction of Toronto's population, nearly matched that toll.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Youth Without Futures</h2>
      <p>
        The most alarming statistic: <strong>440 youth aged 16-26</strong> became homeless in 2025 alone. They're sleeping in parks, under bridges, in abandoned buildings, and in cars during -20°C winters. For those who survive, the long-term prognosis is grim — youth homelessness correlates strongly with chronic adult homelessness, addiction, and early death.
      </p>
      <p>
        Youth homelessness in NB is driven by a toxic combination: foster care "aging out" at 19 with no transition support, family breakdown, mental health crises with no available services, and a rental market that has priced out anyone earning minimum wage. Some have called it "a generation being lost."
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Population Explosion</h2>
      <p>
        Between 2021 and 2025, New Brunswick's population grew by nearly 100,000 people — an unprecedented surge for a province that had barely grown in decades. The growth was intentional: the province pursued aggressive immigration targets to fill labour shortages and grow the tax base.
      </p>
      <p>
        But no one built the houses. New Brunswick's annual housing starts peaked at roughly 4,000 units — far below what was needed to accommodate population growth. The housing minister acknowledged in early 2026 that "priorities are on track, but more work needs to do" — a statement that critics called an understatement bordering on denial.
      </p>
      <p>
        The homeless population nearly <strong>doubled in each of the province's three major cities</strong> between 2022 and 2025. Moncton, Saint John, and Fredericton all saw their street populations double or triple as the rental market tightened and low-income residents were pushed out.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Math Doesn't Work</h2>
      <p>
        Average rent in Moncton has risen from $750/month in 2020 to over $1,400/month in 2026. Minimum wage in New Brunswick is $15.30/hour — or about $2,450/month before taxes. That means rent consumes <strong>57% of gross income</strong> for minimum-wage workers, well above the 30% threshold considered "affordable."
      </p>
      <p>
        The vacancy rate — the share of available rental units — hovers around 1.5% in major cities. A healthy market requires 3-5%. Below 2%, landlords can be as selective as they want, driving up prices and screening out anyone with imperfect credit, past evictions, or unconventional income sources.
      </p>
      <p>
        For people on social assistance — $693/month for a single adult — the math is impossible. Rent doesn't exist at that price point. The only options are shelters, tents, or couches. And shelters are perpetually full.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Government Response: Too Little, Too Late</h2>
      <p>
        The Holt government announced a target of 1,200 new affordable housing units. Housing researchers immediately called it "not enough to significantly reduce the waitlist." The current waitlist for social housing exceeds 5,000 households. At the pace of new construction, it would take over a decade to clear the backlog — and that's assuming no new applications.
      </p>
      <p>
        Meanwhile, the province continues to rely on market-driven solutions in a market that has clearly failed. Corporate landlords and REITs have bought up hundreds of properties, converting them to short-term rentals or luxury units while the affordable stock shrinks.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Human Cost</h2>
      <p>
        Beyond the statistics are human stories that should shame a wealthy province. Single mothers living in cars with their children. Seniors choosing between rent and medication. University students couch-surfing because they can't afford both tuition and housing. Indigenous communities on reserves where housing conditions would be considered unacceptable in any urban center.
      </p>
      <p>
        The 100+ deaths in 2025 are not abstract. They are people who died on sidewalks, in parks, in tents, in hospital corridors — people who had names, families, and futures that were cut short because a province that could house everyone chose not to.
      </p>
      <p className="text-white italic mt-8">
        Reform NB is tracking the housing crisis across all three cities. If you or someone you know is affected by housing insecurity, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
