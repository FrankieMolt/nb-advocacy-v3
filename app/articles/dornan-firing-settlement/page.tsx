import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "$1.8M Settlement: Health Minister Dornan's Firing Exposed",
  description: "Province paid $1.8M to settle Dr. John Dornan's unjust dismissal case. Fired as Horizon CEO after ER patient death, now NB Health Minister.",
  alternates: { canonical: "https://nbreform.ca/articles/dornan-firing-settlement/" },
  openGraph: {
    title: "$1.8M Settlement: The Dornan Firing Scandal | Reform NB",
    description: "Higgs fired Horizon CEO John Dornan during a press conference. The province fought him in court for 2 years, then quietly paid $1.8M of taxpayer money to settle. Dornan is now Health Minister.",
    images: [{ url: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1200", width: 1200, height: 675, alt: "Government building" }],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="$1.8 Million Settlement: How the Province Fired Its Own Health CEO — Then Made Him Health Minister"
      date="March 2026"
      image="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1920&q=80"
      imageAlt="Government building representing political accountability failure"
      imageCredit="Unsplash / @mike_van_den_bos"
      imageCreditUrl="https://unsplash.com/@mike_van_den_bos"
      sources={[
        { title: "CBC: Province paid Dr. John Dornan nearly $1.8M in settlement (Mar 2026)", url: "https://www.cbc.ca/news/canada/new-brunswick/john-dornan-settlement-amount-province-fired-horizon-ceo-1.7560571" },
        { title: "CBC: Higgs fires Horizon CEO, health minister during press conference (2022)", url: "https://www.cbc.ca/news/canada/new-brunswick/higgs-health-minister-1.6522029" },
        { title: "CBC: Record-breaking $2M unjust dismissal payout to Dornan (2023)", url: "https://www.cbc.ca/news/canada/new-brunswick/john-dornan-unjust-dismissal-horizon-new-brunswick-2-million-higgs-chalmers-er-death-1.6749552" },
        { title: "CBC: Darrell Mesheau inquest — 7-hour ER wait before death", url: "https://www.cbc.ca/news/canada/new-brunswick/inquest-chalmers-hospital-er-death-darrell-mesheau-fredericton-1.7167872" },
        { title: "CBC: Dornan drops appeal of $2M payout (2024)", url: "https://www.cbc.ca/news/canada/new-brunswick/province-drops-appeal-john-dornan-fired-horizon-ceo-2-million-payout-1.7174114" },
      ]}
    >
      <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase mb-8">$1.8M Settlement: Health Minister Dornan's Firing Exposed</h1>

      <h2>The Firing</h2>
      <p>
        On July 12, 2022, Darrell Mesheau, 78, spent seven hours waiting for care at the Dr. Everett Chalmers Regional Hospital emergency department in Fredericton. He was discovered unresponsive by a nurse at 4:30 a.m. He died.
      </p>
      <p>
        What followed was not accountability for a failing system — it was a public execution of leadership. Premier Blaine Higgs used a press conference to announce the firing of Dr. John Dornan as President and CEO of Horizon Health Network, along with Health Minister Dorothy Shephard and the boards of both Horizon and Vitalité health networks.
      </p>
      <p>
        Dornan was only four months into his five-year contract.
      </p>

      <h2>The Legal Battle</h2>
      <p>
        Dornan filed a grievance under the Public Service Labour Relations Act in summer 2022. In 2023, a labour adjudicator awarded him a record-breaking <strong>$2 million</strong> for unjust dismissal — finding that the province had no legitimate cause to terminate him.
      </p>
      <p>
        The Higgs government appealed the decision, dragging the case out further. It wasn't until April 18, 2024 — nearly two years after the firing — that the province quietly settled for <strong>$1,785,000</strong>, which is 90% of the original award.
      </p>
      <p>
        Both parties were bound by a non-disclosure agreement. The settlement amount was only disclosed in March 2026 after Dornan and the province waived the NDA.
      </p>

      <h2>The Irony: Now Health Minister</h2>
      <p>
        In a twist that defies parody, Dr. John Dornan was elected as the MLA for Saint John Portland-Simonds in the 2024 provincial election and appointed as <strong>Minister of Health</strong> by Premier Susan Holt. He now earns $94,523 per year as an MLA plus $62,952 as minister — a total of $157,475 annually.
      </p>
      <p>
        The man who was publicly scapegoated for systemic healthcare failures is now responsible for fixing the very system that fired him. The province paid $1.8 million of taxpayer money for the privilege of learning that lesson.
      </p>

      <h2>What the Province Spent (That We Know Of)</h2>
      <ul>
        <li><strong>$360,000</strong> — Initial severance (one year's salary)</li>
        <li><strong>$1,785,000</strong> — Settlement payment (April 2024)</li>
        <li><strong>Unknown</strong> — Province's own legal fees (Department of Justice could not provide the amount)</li>
        <li><strong>$215,000</strong> — Difference between settlement and original $2M award (potential legal cost savings or additional loss)</li>
      </ul>
      <p>
        Total taxpayer cost: <strong>over $2.1 million</strong> — and that's before the province's own legal bills.
      </p>

      <h2>Pattern of Reckless Dismissal</h2>
      <p>
        The Dornan case isn't isolated. It follows a pattern in NB politics of firing officials who become inconvenient, then using taxpayer money to clean up the mess:
      </p>
      <ul>
        <li><strong>$700,000</strong> embezzled by Lt. Governor's secretary</li>
        <li><strong>$481,000</strong> stolen by Deputy Attorney General</li>
        <li><strong>$173.9 million</strong> in untendered travel nurse contracts</li>
        <li><strong>$1.8 million</strong> for firing the wrong person</li>
      </ul>
      <p>
        When the province's own Auditor General tries to investigate the travel nurse contracts, the government invoked <strong>"litigation privilege"</strong> to block the investigation. Chief Justice DeWare ruled the government could legally hide the information from its own watchdog.
      </p>

      <h2>The Real Victims</h2>
      <p>
        While the government spent years and millions fighting in court, 238,000 New Brunswickers still don't have a family doctor. 2,199 patients have been pronounced dead after ER arrival since 2020. 63,000+ walk out of ERs every year without being seen.
      </p>
      <p>
        Darrell Mesheau's death was supposed to trigger accountability. Instead, it triggered a political purge, a legal battle, and a $1.8 million settlement — while the system that killed him remains fundamentally unchanged.
      </p>

      <blockquote>
        "The total settlement awarded to me was $1,785,000, which was issued on April 18, 2024, with taxes appropriately withheld."
        <cite>— Dr. John Dornan, now NB Minister of Health</cite>
      </blockquote>
    </ArticleLayout>
  );
}
