import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Campbellton 41%: NB Child Poverty",
  description: "41% child poverty in Campbellton. Provincial average 21.9%. Indigenous reserves at 51%.",
  alternates: { canonical: "https://reformnb.ca/articles/poverty-campbellton/" },
  openGraph: {
    title: "Campbellton at 41%: The 2026 NB Poverty Report Card",
    description: "4 out of 10 children in Campbellton in poverty. Indigenous reserves at 51.2%. Provincial average 21.9%.",
    images: [{ url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200", width: 1200, height: 675, alt: "Child poverty in Canada" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Campbellton at 41%: The 2026 NB Poverty Report Card"
      date="February 25, 2026"
      image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      imageAlt="Child looking through a window on a rainy day"
      imageCredit="Unsplash / @falco"
      imageCreditUrl="https://unsplash.com/@falco"
      sources={[
        { title: "Human Development Council: NB 2024 Child & Family Poverty Report Card", url: "https://www.cbc.ca/news/canada/new-brunswick/2026-poverty-report-card-campbellton" },
        { title: "CBC: 2026 Poverty Report Card — Campbellton at 41%", url: "https://www.cbc.ca/news/canada/new-brunswick/2026-poverty-report-card-campbellton" },
        { title: "CBC: Child poverty rate 'alarmingly high' — February 2026", url: "https://www.cbc.ca/news/canada/new-brunswick/child-poverty-rate-alarmingly-high-2026" },
        { title: "SJ HDC: Living Wages in New Brunswick 2025", url: "https://sjhdc.ca/research-and-reports/" },
      ]}
    >
      <p className="text-xl text-white leading-relaxed mb-8">
        The latest Human Development Council data delivers a stark verdict: <strong className="text-white">4 out of 10 children in Campbellton</strong> are living in poverty. On Indigenous reserves, the rate hits 51.2% — more than half of all children. The provincial average of 21.9% masks staggering regional inequality that splits the province into two realities.
      </p>

      <p className="text-lg text-white leading-relaxed mb-8">
        Without government transfers, New Brunswick's child poverty rate would be <strong className="text-white">38.8%</strong>. The Canada Child Benefit alone lifted 14,580 children out of poverty. But that still leaves nearly a quarter of NB children in poverty — a rate the Human Development Council calls &quot;alarmingly high.&quot;
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Two New Brunswicks</h2>
      <p>
        In affluent Fredericton suburbs, child poverty rates hover around 8-10%. Drive 4 hours northeast to Campbellton, and it's 41.2%. On Eel Ground First Nation, it's over 50%. These aren't different countries — they're different postal codes in the same province.
      </p>
      <p>
        The geography of poverty in NB follows predictable patterns: former mill towns where the factory closed, Indigenous communities underfunded for generations, fishing villages hit by stock collapses, and urban cores hollowed out by suburban sprawl.
      </p>
      <p>
        The February 2026 HDC report confirmed what advocates have warned for years: the percentage of children living in poverty in New Brunswick remains &quot;alarmingly high.&quot; Not improving. Not stable. Alarming.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Transfer Safety Net</h2>
      <p>
        Government transfers are doing the heavy lifting. Without them, nearly <strong>4 in 10</strong> NB children would be in poverty. With transfers, the rate drops to 21.9% — still the second-highest rate in Atlantic Canada.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-6">
        <li><strong>38.8%</strong> — child poverty rate before government transfers</li>
        <li><strong>21.9%</strong> — rate after transfers (still "alarmingly high")</li>
        <li><strong>14,580</strong> children lifted out of poverty by the Canada Child Benefit</li>
        <li><strong>41.2%</strong> — child poverty rate in Campbellton</li>
        <li><strong>51.2%</strong> — rate on Indigenous reserves</li>
      </ul>
      <p>
        The data makes clear: without federal transfers, NB's child poverty would be catastrophic. But the transfers are not enough. They reduce poverty; they do not eliminate it. And they do nothing to address the root causes — low wages, inadequate housing, and underfunded services.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">The Wealth Contrast</h2>
      <p>
        While child poverty devastates communities, the province's wealthiest families operate under a different set of rules. The Irving family's combined wealth exceeds $30 billion. They pay property tax rates on their Saint John refinery that are <strong>5 times lower per dollar</strong> of assessed value than equivalent industrial facilities in Texas.
      </p>
      <p>
        New Brunswick has the highest sales tax in Canada at 15% HST — a regressive tax that hits low-income families hardest. A family spending $30,000 on taxable goods pays $4,500 in HST. The proportion of income consumed by consumption tax falls dramatically as income rises, making the HST one of the most regressive features of Canada's tax system.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Food Insecurity</h2>
      <p>
        Food bank usage in New Brunswick increased by 32% between 2023 and 2025. In Campbellton, the local food bank reports serving 600 families per month — in a community of just 7,000 people. That means roughly <strong>1 in 3 households</strong> depends on food banks.
      </p>
      <p>
        School breakfast programs, once a stopgap, have become essential infrastructure. Teachers report children arriving at school having not eaten since the previous day's school lunch. "We can't teach a hungry child," one teacher told us. "And we're seeing more hungry children every month."
      </p>
      <p>
        The 2025 Living Wages report for New Brunswick calculated that a living wage — enough to cover basic needs including food, housing, and childcare — ranges from $19.50 to $22.30 depending on the region. Minimum wage is $15.30. That gap, for a family with two working parents, represents thousands of dollars in annual shortfall.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">Breaking the Cycle</h2>
      <p>
        Anti-poverty advocates point to proven interventions: universal school meals, affordable childcare, higher social assistance rates, and targeted investment in Indigenous housing. Other Atlantic provinces have made more aggressive moves — Nova Scotia's rent cap, PEI's universal school lunch program — while NB lags behind.
      </p>
      <p>
        "Child poverty is a policy choice," says the Human Development Council. "Every child in poverty represents a failure of political will, not a lack of resources."
      </p>
      <p className="text-white italic mt-8">
        Reform NB is tracking poverty data across all regions. If rising costs have affected your family, we want to hear your story.
      </p>
    </ArticleLayout>
  );
}
