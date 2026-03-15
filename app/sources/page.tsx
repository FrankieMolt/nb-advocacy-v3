import { Metadata } from "next";
import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  FileText,
  Database,
  Newspaper,
  AlertTriangle,
} from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Intelligence Archive: Sources & Data | Reform NB",
  description:
    "The evidentiary basis for Reform NB's investigations. Every claim linked to original documents, audited reports, and verifiable journalism.",
};

export default function SourcesPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]"
          aria-hidden="true"
        >
          <BookOpen size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight uppercase">
          Intelligence Archive
        </h1>
      </div>

      <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
        The following records form the evidentiary basis for our investigations.
        We believe in <strong>radical transparency</strong>—every claim made on
        this platform is linked to original documents, audited reports, or
        verifiable journalism.
      </p>

      <div className="space-y-12">
        {/* Healthcare & Corruption */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <ShieldCheck size={120} />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-crisis-red" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Healthcare & High-Level Fraud
            </h3>
          </div>
          <ul className="space-y-10" role="list">
            <li className="flex flex-col gap-3 group">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                The $173.9M Travel Nurse Scandal
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Auditor General Paul Martin&apos;s comprehensive 2024 review of
                untendered staffing contracts and the Vitalité &quot;litigation
                privilege&quot; cover-up.
              </p>
              <a
                href="https://www.agnb-vgnb.ca/uploads/volume_translations/81/report/agnb-V2-2025-Report_E.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Read official Auditor General report (PDF)"
              >
                <FileText size={14} /> Official AG Report: Travel Nurse Contracts (PDF)
              </a>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                The 3+ Corporation Fraud Investigation
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                RCMP charges against Daniel Bard involving financial
                irregularities exceeding $1 million in Moncton economic
                development funds.
              </p>
              <a
                href="https://nbmediacoop.org/?s=daniel+bard+3+corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Read about 3+ Corporation fraud case"
              >
                <Newspaper size={14} /> NB Media Co-op: 19 criminal charges laid
              </a>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                High-Level Embezzlement Records
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Journalistic documentation of the Tim Richardson ($700k) and
                Yassin Choukri ($481k) cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/tim-richardson-lieutenant-governor-fraud-embezzlement-1.5706694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  aria-label="Read about Richardson case on CBC"
                >
                  <ExternalLink size={14} /> Richardson Case (CBC)
                </a>
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/yassin-choukri-guilty-plea-1.6986538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  aria-label="Read about Choukri case on CBC"
                >
                  <ExternalLink size={14} /> Choukri Case (CBC)
                </a>
              </div>
            </li>
          </ul>
        </section>

        {/* NB Power & Economy */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <Database size={120} />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-crisis-red" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              NB Power & Fiscal Failure
            </h3>
          </div>
          <ul className="space-y-10" role="list">
            <li className="flex flex-col gap-3 group">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                2026 Child Poverty Report Card
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Human Development Council data exposing the 21.9% child poverty
                rate and the 41.2% surge in Campbellton. 32,140 children in poverty.
                51.2% child poverty rate on Indigenous reserves.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  aria-label="Read CBC article on child poverty"
                >
                  <Newspaper size={14} /> CBC (Feb 2026)
                </a>
                <a
                  href="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  aria-label="Download Campaign 2000 report card PDF"
                >
                  <FileText size={14} /> Report (PDF)
                </a>
                <a
                  href="https://sjhdc.ca/report-category/poverty-reduction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  aria-label="Visit HDC Report Portal"
                >
                  <ExternalLink size={14} /> HDC Portal
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                41,000 Left NB ERs Without Treatment (MEI Report, Sep 2025)
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Montreal Economic Institute report revealing NB has the third-highest
                ER walkout rate in Canada (12.9%) — 41,000+ from Horizon alone, plus 22,000 from Vitalité.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-emergency-patient-leave-horizon-mei-report-vitalit%C3%A9-1.7637201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <Newspaper size={14} /> CBC (Sep 2025)
                </a>
                <a
                  href="https://www.iedm.org/wp-content/uploads/2025/09/2025-09-18-NR-Leaving-ER-NB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <FileText size={14} /> MEI Report (PDF)
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                The Orimulsion & Joi Scientific Boondoggles
              </span>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Detailed histories of NB Power&apos;s failed out-of-province
                investments and technologically unproven ventures.
              </p>
              <a
                href="https://nbmediacoop.org/?s=joi+scientific"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Read Joi Scientific investigation"
              >
                <ExternalLink size={14} /> NB Media Co-op: Joi Scientific Investigation
              </a>
            </li>
          </ul>
        </section>

        {/* Corporate Oligarchy */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-crisis-red" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              The Oligarchy Dossier
            </h3>
          </div>
          <ul className="space-y-10" role="list">
            <li className="flex flex-col gap-3 group">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                The Paradise Papers: Bermuda Trusts
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Leaked Appleby records exposing the complex offshore strategies
                of the Irving family.
              </p>
              <a
                href="https://www.icij.org/investigations/paradise-papers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Read Paradise Papers investigation by ICIJ"
              >
                <ExternalLink size={14} /> ICIJ: Paradise Papers Investigation
              </a>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                Saint John Refinery Property Tax Scandal
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Documentation of the 42-year Canaport exemption and the recent
                $700,000 retroactive refunds.
              </p>
              <a
                href="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Read property tax investigative report on CBC"
              >
                <ExternalLink size={14} /> CBC: Property tax investigative
                report
              </a>
            </li>
          </ul>
        </section>

        {/* Environmental */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-crisis-red" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Ecological Failure
            </h3>
          </div>
          <ul className="space-y-10" role="list">
            <li className="flex flex-col gap-3 group">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                Miramichi Salmon DFO Negligence Suit
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Federal Court File No. T-840-25 documenting the catastrophic
                management of Atlantic Salmon stocks.
              </p>
              <a
                href="https://savemiramichisalmon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Visit Save Miramichi Salmon campaign"
              >
                <ExternalLink size={14} /> Campaign Evidence Archive
              </a>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                Legacy DDT study (2025)
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Scientific findings showing DDT levels in local brook trout at
                10x the health safety limit.
              </p>
              <a
                href="https://stopsprayingnb.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                aria-label="Visit Stop Spraying NB"
              >
                <ExternalLink size={14} /> Visit Stop Spraying NB
              </a>
            </li>
          </ul>
        </section>

        {/* Housing & Social */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-crisis-red" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Housing & Social Crisis
            </h3>
          </div>
          <ul className="space-y-10" role="list">
            <li className="flex flex-col gap-3 group">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                NB Homelessness Data (2025-2026)
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                830 unhoused in Moncton, 437 in Saint John, 275 in Fredericton. 
                Over 440 youth homeless. 100+ unhoused deaths from toxic supply and exposure.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://sjhdc.ca/research-and-reports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <ExternalLink size={14} /> Human Development Council Reports
                </a>
                <a
                  href="https://www2.gnb.ca/content/dam/gnb/Departments/esic/pdf/overcoming-poverty-4-2025-2030.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <FileText size={14} /> NB Poverty Plan 2025-2030 (PDF)
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                NB Power Emissions Surge to 3M+ Tonnes (Mar 2026)
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                EUB filings: NB Power burned nearly 4 million barrels of oil in 12 months. 
                Coleson Cove consumed $254M in heavy fuel oil. Emissions up 60% year-over-year, 
                hitting 16-year high for thermal generation. Carbon penalties: $49M next year.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <Newspaper size={14} /> CBC: NB Power Emissions Surge (Mar 14, 2026)
                </a>
                <a
                  href="https://www.cbc.ca/news/canada/new-brunswick/nb-power-rate-hearings-online-9.7126504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <Newspaper size={14} /> CBC: Rate Hearing Online Coverage
                </a>
              </div>
            </li>
            <li className="flex flex-col gap-3 group border-t border-neutral-800 pt-8">
              <span className="font-black text-white text-xl uppercase tracking-tighter group-hover:text-crisis-red transition-colors italic">
                NB Liquor Markups Strangle Local Distillers (Mar 2026)
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed">
                During the tariff war, NB pulled U.S. alcohol from shelves. Local distillers 
                saw demand surge — but NB Liquor's steep provincial markups prevent them from 
                scaling up. A government monopoly hurting its own producers.
              </p>
              <a
                href="https://www.cbc.ca/news/canada/new-brunswick/alcohol-tariff-war-markups-9.7126326"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crisis-red hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
              >
                <Newspaper size={14} /> CBC: N.B. Distillers Say High Markups Limiting Growth (Mar 14, 2026)
              </a>
            </li>
          </ul>
        </section>

        {/* Recent Investigations */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl">
          <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight mb-6">
            Recent Investigations (March 2026)
          </h3>
          <div className="space-y-4">
            <a href="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: "Raise taxes on super-rich" — Open Letter to Holt (Mar 10, 2026)
            </a>
            <a href="https://nbmediacoop.org/2024/05/19/dismal/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Alain Deneault — "Feudalistic counter-model" (May 2024)
            </a>
            <a href="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: The Irvings Get Trumped — Cartoonist de Adder fired (Mar 2025)
            </a>
            <a href="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 CBC: NB Power emissions surge to 3M+ tonnes — 16-year high (Mar 13, 2026)
            </a>
          </div>
        </section>

        {/* Environmental & Salmon */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl mt-8">
          <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight mb-6">
            Environment & Salmon
          </h3>
          <div className="space-y-4">
            <a href="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Irving threatens Miramichi salmon group over glyphosate opposition (2017)
            </a>
            <a href="https://nbmediacoop.org/2021/08/18/wolastoqiyik-women-stop-smallmouth-bass-poisoning-in-miramichi-lake-for-now/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Wolastoqiyik women stop rotenone poisoning of Miramichi Lake (2021)
            </a>
            <a href="https://nbmediacoop.org/2021/12/01/wolastoqey-nations-claim-title-to-land-owned-by-jd-irving-and-other-companies-due-to-reckless-resource-extraction/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Wolastoqey Nations claim title to Irving-held land (2021)
            </a>
            <a href="https://nbmediacoop.org/2025/10/24/forestry-companies-wolastoqey-nation-fight-over-court-fees-in-historic-land-title-case/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Forestry companies vs Wolastoqey Nation — court fees fight (Oct 2025)
            </a>
            <a href="https://nbmediacoop.org/2015/11/13/wild-salmons-knock-out-blow/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Wild salmon's knock-out blow — Inka Milewski (2015)
            </a>
            <a href="https://nbmediacoop.org/2023/03/14/terry-ann-sappier-on-protecting-miramichi-lake-and-the-heart-of-the-land-video/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Terry Ann Sappier on protecting Miramichi Lake [video] (2023)
            </a>
            <a href="https://nbmediacoop.org/2021/10/18/j-d-irving-gets-last-word-at-glyphosate-hearings/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: J.D. Irving gets last word at glyphosate hearings (2021)
            </a>
            <a href="https://nbmediacoop.org/2021/09/27/irving-and-coon-spar-over-glyphosate-use-in-forestry/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Irving and David Coon spar over glyphosate in forestry (2021)
            </a>
          </div>
        </section>

        {/* Intimidation & Censorship */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl mt-8">
          <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight mb-6">
            Intimidation & Corporate Capture
          </h3>
          <div className="space-y-4">
            <a href="https://nbmediacoop.org/2020/09/01/are-jdirving-and-forestnb-breaking-elections-nb-laws/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Are J.D. Irving and ForestNB breaking Elections NB laws? (2020)
            </a>
            <a href="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Forestry college purges glyphosate critic (2019)
            </a>
            <a href="https://nbmediacoop.org/2023/06/09/wire-crossed-how-the-irving-empire-jeopardized-free-press-in-new-brunswick/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: How Irving jeopardized free press in New Brunswick (2023)
            </a>
            <a href="https://nbmediacoop.org/2019/12/19/may-the-forest-be-with-you-community-forestry-confronts-corporate-control-of-nb-forests/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Community forestry confronts corporate control (2019)
            </a>
            <a href="https://nbmediacoop.org/2026/02/25/consultations-hollow-without-greater-self-determination-indigenous-owned-forestry-company-tells-government/" target="_blank" rel="noopener noreferrer" className="block text-neutral-400 hover:text-crisis-red transition-colors text-sm">
              📰 NB Media Co-op: Indigenous forestry company says consultations "hollow" (Feb 2026)
            </a>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
