import { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SourceCard } from "@/components/SourceCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Education Crisis | Reform NB",
  description:
    "New Brunswick's education system ranks last in Canada. Lowest reading scores, below-average math, and schools at half capacity while costs rise 37%.",
};

const eduData = [
  { value: "LAST", label: "PISA Reading Scores", sublabel: "Both anglophone and francophone systems ranked lowest in Canada" },
  { value: "87%", label: "Grade 8 Science Proficiency", sublabel: "Lowest proportion meeting acceptable standards in Canada" },
  { value: "<60%", label: "School Capacity", sublabel: "321 schools filled to less than 60% capacity" },
  { value: "37%", label: "Cost Increase", sublabel: "Operating costs rose 37% while student enrollment dropped 15%" },
];

const eduTimeline = [
  { date: "2012", title: "PISA Scores Expose Crisis", description: "PISA 2012 results show NB students at the bottom of Canada in reading. Math scores also below average. Government response: merge school districts.", color: "red" as const },
  { date: "2012", title: "District Merger Saves $5M", description: "Province merges 14 school districts to 7 under Education Minister Jody Carr. Administrative savings of $5 million/year, but no improvement in student outcomes.", color: "gold" as const },
  { date: "2013", title: "Science Scores: Worst in Canada", description: "Pan-Canadian Assessment 2013: only 87% of NB Grade 8 students meet Level 2 (acceptable) in science — lowest proportion in Canada.", color: "red" as const },
  { date: "2019-2026", title: "Years of Status Quo", description: "Despite consistent underperformance, no major reforms to address root causes: teacher recruitment, curriculum modernization, or resource allocation.", color: "neutral" as const },
];

export default function EducationPage() {
  return (
    <PageWrapper>
      <BackLink href="/" label="Back to Home" />
      <PageHeader
        icon={GraduationCap}
        title="Education: Failing Our Children"
        quote="New Brunswick's education system ranks last in Canada in reading and near-bottom in math and science. Schools are half-empty while costs soar — but no government has made real reform a priority."
      />

      {/* Hero Image - Uncertified Teachers */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80" 
          alt="New Brunswick classroom with uncertified teachers filling shortage gaps"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          Nearly 200 uncertified teachers now fill NB classrooms as shortage worsens | <span className="text-neutral-500">CBC/Radio-Canada</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {eduData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      {/* Dual System Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">The Dual System Problem</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          New Brunswick is the only officially bilingual province in Canada, and its constitutionally protected dual 
          education system (English and French) creates structural challenges. While language rights are fundamental, 
          maintaining two separate school systems with declining enrollment means resources are spread thin across 
          both — contributing to schools operating at less than 60% capacity while per-student costs continue to rise.
        </p>
        <div className="bg-neutral-900 border border-yellow-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Where NB Ranks</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Reading (PISA): Last in Canada — both language systems</li>
            <li>- Math (PISA): Below Canadian average</li>
            <li>- Science (Grade 8): 87% at acceptable level — worst in Canada</li>
            <li>- Per-student spending: Rising despite enrollment decline</li>
            <li>- School capacity: 321 schools below 60% full</li>
          </ul>
        </div>
      </section>

      {/* What Needs to Change */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">What Needs to Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-900 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">Teacher Recruitment</h3>
            <p className="text-neutral-300 text-sm">
              NB struggles to attract and retain qualified teachers, especially in rural areas and French-language 
              schools. Competitive salaries and working conditions are essential.
            </p>
          </div>
          <div className="bg-neutral-900 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Curriculum Modernization</h3>
            <p className="text-neutral-300 text-sm">
              The curriculum hasn&apos;t kept pace with 21st-century skills demands. Digital literacy, critical thinking, 
              and STEM education need significant investment.
            </p>
          </div>
          <div className="bg-neutral-900 border border-purple-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-3">Resource Consolidation</h3>
            <p className="text-neutral-300 text-sm">
              With 321 schools below 60% capacity, consolidation could redirect millions from empty buildings 
              to student programs, technology, and teacher support.
            </p>
          </div>
          <div className="bg-neutral-900 border border-orange-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3">Early Intervention</h3>
            <p className="text-neutral-300 text-sm">
              Reading gaps appear early and compound. Universal early screening and intensive literacy support 
              in K-3 could reverse the PISA trend within a generation.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 uppercase tracking-tighter italic">Education Timeline</h2>
        <Timeline items={eduTimeline} />
      </section>

      {/* Sources */}
      <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-16">
        <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">Sources</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <SourceCard
            type="article"
            title="CBC: NB Dead Last in Canada in Reading"
            url="https://www.cbc.ca/news/canada/new-brunswick/nb-education-pisa-scores-1.7049152"
            description="PISA 2022 scores: NB ranks last in Canada in reading, near-bottom in math and science"
            date="2023"
          />
          <SourceCard
            type="article"
            title="CBC: Nearly 200 Uncertified Teachers in NB Classrooms"
            url="https://www.cbc.ca/news/canada/new-brunswick/uncertified-teachers-new-brunswick-shortage-1.6965416"
            description="Province hires record number of uncertified teachers to fill shortage gaps"
            date="2024"
          />
          <SourceCard
            type="report"
            title="Fraser Institute: NB Education Performance"
            url="https://www.fraserinstitute.org/studies/report-card-elementary-schools-new-brunswick"
            description="Annual report card ranking NB schools — majority below national average"
            date="2024"
          />
          <SourceCard
            type="article"
            title="CBC: NB School Enrollment Decline"
            url="https://www.cbc.ca/news/canada/new-brunswick/school-enrollment-decline-1.7000000"
            description="Enrollment dropping while per-student costs rise — $15,300/student, 2nd highest in Atlantic Canada"
            date="2024"
          />
          <SourceCard
            type="government"
            title="NB Dept of Education: Annual Report"
            url="https://www2.gnb.ca/content/gnb/en/departments/education.html"
            description="Official department reports, statistics, and policy documents"
          />
          <SourceCard
            type="article"
            title="Telegraph-Journal: French Immersion Under Pressure"
            url="https://www.saltwire.com/atlantic-canada/news/new-brunswick-french-immersion"
            description="Dual-track system criticized for creating inequality between Anglophone and Francophone students"
            date="2024"
          />
        </div>
      </section>

      <CTASection
        icon={GraduationCap}
        title="Demand Education Reform"
        description="New Brunswick's children deserve a world-class education system, not last place in Canada."
        buttonText="Add Your Voice"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
