import { Metadata } from "next";
import {
  BookOpen,
  ExternalLink,
  ShieldCheck,
  FileText,
  Database,
  Newspaper,
  AlertTriangle,
  Home,
  Activity,
  DollarSign,
} from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { SourceCard } from "@/components/SourceCard";

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
            <Activity className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Healthcare & High-Level Fraud
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: 41,000 Left Horizon ERs Without Treatment" url="https://www.cbc.ca/news/canada/new-brunswick/new-brunswick-emergency-patient-leave-horizon-mei-report-vitalit%C3%A9-1.7637201" description="MEI Report on 12.9% walkout rate — 3rd highest in Canada" date="SEP 2025" />
            <SourceCard type="pdf" title="MEI Report: Patients Leaving NB Emergency Departments" url="https://www.iedm.org/wp-content/uploads/2025/09/2025-09-18-NR-Leaving-ER-NB.pdf" description="Full academic report with methodology and data" date="SEP 2025" />
            <SourceCard type="pdf" title="Auditor General: $173.9M Travel Nurse Contract Scandal" url="https://www.agnb-vgnb.ca/uploads/volume_translations/81/report/agnb-V2-2025-Report_E.pdf" description="2025 Report — Chapter 2: Untendered Contracts" date="2025" />
            <SourceCard type="article" title="National Post: Canada's ER 'Hidden Pandemic'" url="https://nationalpost.com/news/canada/emergency-department-deaths" description="Investigating preventable ER deaths across Canada" date="MAR 2026" />
            <SourceCard type="article" title="CTV: Darrell Mesheau ER Death Lawsuit" url="https://www.ctvnews.ca/atlantic/new-brunswick/article/hospital-and-nurses-deny-negligence-in-nb-emergency-room-death-of-78-year-old-man/" description="Chalmers ER negligence — 7-hour wait" date="2023" />
            <SourceCard type="report" title="NB Government: Official Health Plan" url="https://www2.gnb.ca/content/gnb/en/corporate/promo/new-brunswick-health-plan.html" description="Government's own acknowledgment of the crisis" date="2024" />
            <SourceCard type="organization" title="NB Nurses' Union — Advocacy & Reports" url="https://nbnu.ca/" description="Union representing 8,000+ NB nurses" />
            <SourceCard type="article" title="CBC: Oromocto Nursing Home Won't Fix Waitlist" url="https://www.cbc.ca/news/canada/new-brunswick" description="60-bed facility won't 'really' reduce long-term care waitlist" date="MAR 2026" />
          </div>
        </section>

        {/* NB Power & Economy */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <Database size={120} />
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Database className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              NB Power & Fiscal Failure
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High'" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="21.9% rate, 41.2% Campbellton, 51.2% Indigenous reserves" date="FEB 2026" />
            <SourceCard type="pdf" title="Campaign 2000: 2025 NB Report Card" url="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" description="Full report with regional breakdowns — 32,140 children in poverty" date="FEB 2026" />
            <SourceCard type="dashboard" title="NB Economic & Social Inclusion Dashboard" url="https://www.nbtogether.ca/gendashboard" description="Official provincial data portal" />
            <SourceCard type="report" title="Statistics Canada: Poverty Dashboard" url="https://www.statcan.gc.ca/" description="National comparison data" date="NOV 2025" />
            <SourceCard type="article" title="CBC: NB Power Emissions Surge to 16-Year High" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="4M barrels of oil burned, 60% emissions increase" date="MAR 2026" />
            <SourceCard type="article" title="CBC: NB Power Rate Hearing Coverage" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-rate-hearings-online-9.7126504" description="50% rate increases proposed over 6 years" date="MAR 2026" />
            <SourceCard type="article" title="NB Media Co-op: 'Raise Taxes on Super-Rich' Open Letter" url="https://nbmediacoop.org/2026/03/10/raise-taxes-on-super-rich-new-brunswickers-instead-of-cutting-services-open-letter/" description="200+ activists demand wealth tax from Premier Holt" date="MAR 2026" />
            <SourceCard type="organization" title="Human Development Council: Research & Reports" url="https://sjhdc.ca/research-and-reports/" description="Saint John-area poverty and social research" />
          </div>
        </section>

        {/* Corporate Oligarchy */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              The Oligarchy Dossier
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: U.S. Refineries Pay 5x More Property Taxes" url="https://www.cbc.ca/news/canada/new-brunswick/propery-taxes-irving-refineries-1.6671058" description="Irving Oil pays lowest property taxes of any refinery in North America" />
            <SourceCard type="article" title="ICIJ: Paradise Papers — Irving Bermuda Insurance" url="https://www.icij.org/investigations/paradise-papers/" description="Offshore tax shelter: F.M.A. Ltd. in Bermuda" />
            <SourceCard type="article" title="CBC: Irving Bermuda Insurance Company" url="https://www.cbc.ca/news/canada/new-brunswick" description="Detailed Paradise Papers coverage" />
            <SourceCard type="article" title="NB Media Co-op: Alain Deneault on Arthur Irving" url="https://nbmediacoop.org/2024/05/19/dismal/" description="'Feudalistic counter-model' analysis" date="MAY 2024" />
            <SourceCard type="article" title="NB Media Co-op: The Irvings Get Trumped" url="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" description="Cartoonist de Adder fired for Trump cartoon" date="MAR 2025" />
            <SourceCard type="article" title="NB Media Co-op: How Irving Jeopardized Free Press" url="https://nbmediacoop.org/2023/06/09/wire-crossed-how-the-irving-empire-jeopardized-free-press-in-new-brunswick/" description="Detailed media monopoly probe" date="2023" />
          </div>
        </section>

        {/* Environmental */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Ecological Failure
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="NB Media Co-op: Irving Threatens Salmon Group" url="https://nbmediacoop.org/2017/08/03/we-wont-be-intimidated-miramichi-salmon-group-on-forest-spraying/" description="Glyphosate intimidation campaign" date="2017" />
            <SourceCard type="article" title="NB Media Co-op: Wolastoqiyik Women Stop Lake Poisoning" url="https://nbmediacoop.org/2021/08/18/wolastoqiyik-women-stop-smallmouth-bass-poisoning-in-miramichi-lake-for-now/" description="Rotenone opposition by First Nations" date="2021" />
            <SourceCard type="article" title="NB Media Co-op: Wolastoqey Claim Title to Irving Land" url="https://nbmediacoop.org/2021/12/01/wolastoqey-nations-claim-title-to-land-owned-by-jd-irving-and-other-companies-due-to-reckless-resource-extraction/" description="5M hectare land title claim" date="2021" />
            <SourceCard type="article" title="NB Media Co-op: Wild Salmon's Knock-Out Blow" url="https://nbmediacoop.org/2015/11/13/wild-salmons-knock-out-blow/" description="Inka Milewski: forestry, not fishing, kills salmon" date="2015" />
            <SourceCard type="article" title="CBC: NB Power Emissions Surge" url="https://www.cbc.ca/news/canada/new-brunswick/nb-power-emissions-surge-9.7128321" description="3M+ tonnes CO₂ — 16-year high" date="MAR 2026" />
            <SourceCard type="organization" title="Save Miramichi Salmon" url="https://savemiramichisalmon.com" description="Federal Court evidence and DFO negligence campaign" />
            <SourceCard type="organization" title="Stop Spraying NB" url="https://stopsprayingnb.ca/" description="Glyphosate ban advocacy and DDT evidence archive" />
            <SourceCard type="article" title="NB Media Co-op: Forestry Companies vs Wolastoqey Court Fees" url="https://nbmediacoop.org/2025/10/24/forestry-companies-wolastoqey-nation-fight-over-court-fees-in-historic-land-title-case/" description="Corporate resistance to land claim costs" date="OCT 2025" />
          </div>
        </section>

        {/* Housing & Social */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <Home className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Housing & Social Crisis
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="organization" title="Human Development Council: Research & Reports" url="https://sjhdc.ca/research-and-reports/" description="Homelessness and poverty data for Greater Saint John" />
            <SourceCard type="pdf" title="NB Government: Overcoming Poverty Together 4" url="https://www2.gnb.ca/content/dam/gnb/Departments/esic/pdf/overcoming-poverty-4-2025-2030.pdf" description="Official provincial poverty reduction strategy (2025-2030)" date="2025" />
            <SourceCard type="report" title="National Advisory Council on Poverty: 2025 Annual Report" url="https://www.canada.ca/en/employment-social-development/programs/poverty-reduction/national-advisory-council/reports/2025-annual.html" description="Federal report with NB-specific data" date="2025" />
            <SourceCard type="article" title="CBC: Child Poverty 'Alarmingly High' — Housing Impact" url="https://www.cbc.ca/news/canada/new-brunswick/child-poverty-alarmingly-high-in-n-b-says-human-development-council-9.7105164" description="February 2026 HDC report coverage" date="FEB 2026" />
            <SourceCard type="pdf" title="Campaign 2000: 2025 NB Child Poverty Report Card" url="https://campaign2000.ca/wp-content/uploads/2026/02/2025-NB-Report-Card-on-Child-and-Family-Poverty.pdf" description="Full poverty breakdown by region" date="FEB 2026" />
            <SourceCard type="organization" title="NB Housing" url="https://www.gnb.ca/housing" description="Provincial housing authority" />
          </div>
        </section>

        {/* Intimidation & Censorship */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Intimidation & Corporate Capture
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="NB Media Co-op: Irving Breaking Election Laws?" url="https://nbmediacoop.org/2020/09/01/are-jdirving-and-forestnb-breaking-elections-nb-laws/" description="Full-page political ads without third-party registration" date="2020" />
            <SourceCard type="article" title="NB Media Co-op: Forestry College Purges Critic" url="https://nbmediacoop.org/2019/07/06/new-brunswick-forestry-college-purges-critic-of-glyphosate-and-defender/" description="Academic freedom suppressed by corporate dependency" date="2019" />
            <SourceCard type="article" title="NB Media Co-op: Community Forestry Confronts Corporate Control" url="https://nbmediacoop.org/2019/12/19/may-the-forest-be-with-you-community-forestry-confronts-corporate-control-of-nb-forests/" description="Independent operators squeezed out" date="2019" />
            <SourceCard type="article" title="NB Media Co-op: Indigenous Consultations 'Hollow'" url="https://nbmediacoop.org/2026/02/25/consultations-hollow-without-greater-self-determination-indigenous-owned-forestry-company-tells-government/" description="Indigenous forestry company demands self-determination" date="FEB 2026" />
            <SourceCard type="article" title="NB Media Co-op: The Irvings Get Trumped" url="https://nbmediacoop.org/2025/03/02/the-irvings-get-trumped/" description="Cartoonist de Adder fired for Trump cartoon" date="MAR 2025" />
            <SourceCard type="article" title="NB Media Co-op: Deneault 'Dismal'" url="https://nbmediacoop.org/2024/05/19/dismal/" description="'Feudalistic counter-model' — Irving empire analysis" date="MAY 2024" />
          </div>
        </section>

        {/* Corruption Cases */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="text-crisis-text" size={28} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight">
              Corruption & Embezzlement Cases
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SourceCard type="article" title="CBC: Tim Richardson — $700K Embezzlement" url="https://www.cbc.ca/news/canada/new-brunswick/tim-richardson-lieutenant-governor-fraud-embezzlement-1.5706694" description="Former Lt. Governor's principal secretary" />
            <SourceCard type="article" title="CBC: Yassin Choukri — Deputy AG Guilty Plea" url="https://www.cbc.ca/news/canada/new-brunswick/yassin-choukri-guilty-plea-1.6986538" description="$481K stolen from law society trust" />
            <SourceCard type="article" title="CBC: 3+ Corporation Fraud Charges" url="https://www.cbc.ca/news/canada/new-brunswick" description="19 RCMP charges, $1M+ irregularities" date="JUL 2022" />
            <SourceCard type="article" title="NB Media Co-op: 3+ Corporation Investigation" url="https://nbmediacoop.org/?s=daniel+bard+3+corporation" description="Full coverage of procurement fraud" />
            <SourceCard type="pdf" title="Auditor General: Travel Nurse Contracts (PDF)" url="https://www.agnb-vgnb.ca/uploads/volume_translations/81/report/agnb-V2-2025-Report_E.pdf" description="$173.9M in untendered contracts" date="2025" />
            <SourceCard type="article" title="NB Media Co-op: NB Liquor Markups Strangle Distillers" url="https://www.cbc.ca/news/canada/new-brunswick/alcohol-tariff-war-markups-9.7126326" description="Provincial monopoly hurts local producers" date="MAR 2026" />
          </div>
        </section>

        {/* Data Verification */}
        <section className="bg-neutral-900 p-10 rounded-2xl border border-neutral-800 shadow-2xl">
          <h3 className="text-2xl font-black font-serif text-white uppercase tracking-tight mb-6">
            Data Verification Status
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left p-3 text-white font-black uppercase tracking-wider text-xs">Data Point</th>
                  <th className="text-left p-3 text-neutral-400 font-black uppercase tracking-wider text-xs">Source</th>
                  <th className="text-left p-3 text-neutral-400 font-black uppercase tracking-wider text-xs">Verified</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">21.9% child poverty rate</td><td className="p-3">Campaign 2000 / CBC Feb 2026</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">41.2% Campbellton rate</td><td className="p-3">CBC Feb 2026</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">41,000 ER walkouts</td><td className="p-3">MEI/CBC Sep 2025</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">12.9% walkout rate</td><td className="p-3">MEI Report Sep 2025</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">Irving 5x less taxes than US</td><td className="p-3">CBC/Univ Michigan study</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">$5.9B NB Power debt</td><td className="p-3">NB Power filings</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">$173.9M travel nurse scandal</td><td className="p-3">Auditor General 2025</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">1,500+ homeless</td><td className="p-3">HDC / Municipal data</td><td className="p-3 text-green-500">✅</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-3 text-white">3M+ tonnes CO₂ emissions</td><td className="p-3">CBC/EUB Mar 2026</td><td className="p-3 text-green-500">✅</td></tr>
                <tr><td className="p-3 text-white">96% salmon collapse</td><td className="p-3">DFO / Save Miramichi Salmon</td><td className="p-3 text-green-500">✅</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
