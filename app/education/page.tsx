import { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { DataCard } from "@/components/DataCard";
import { Timeline } from "@/components/Timeline";
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
      />

      {/* Hero Image - Uncertified Teachers */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://i.cbc.ca/ais/1.7598315,1753966961000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C163%2C4032%2C2268%29%3BResize%3D1200" 
          alt="New Brunswick classroom with uncertified teachers filling shortage gaps"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          Nearly 200 uncertified teachers now fill NB classrooms as shortage worsens | <span className="text-neutral-600">CBC/Radio-Canada</span>
        </div>
      </div>

      <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
        New Brunswick's education system ranks last in Canada in reading and near-bottom in math and science. 
        Schools are half-empty while costs soar — but no government has made real reform a priority.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {eduData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Dual System Problem</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          New Brunswick is the only officially bilingual province in Canada, and its constitutionally protected dual 
          education system (English and French) creates structural challenges. While language rights are fundamental, 
          maintaining two separate school systems with declining enrollment means resources are spread thin across 
          both — contributing to schools operating at less than 60% capacity while per-student costs continue to rise.
        </p>
        <div className="bg-zinc-900 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Where NB Ranks</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Reading (PISA): Last in Canada — both language systems</li>
            <li>- Math (PISA): Below Canadian average</li>
            <li>- Science (Grade 8): 87% at acceptable level — worst in Canada</li>
            <li>- Per-student spending: Rising despite enrollment decline</li>
            <li>- School capacity: 321 schools below 60% full</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">What Needs to Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">Teacher Recruitment</h3>
            <p className="text-neutral-300 text-sm">
              NB struggles to attract and retain qualified teachers, especially in rural areas and French-language 
              schools. Competitive salaries and working conditions are essential.
            </p>
          </div>
          <div className="bg-zinc-900 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Curriculum Modernization</h3>
            <p className="text-neutral-300 text-sm">
              The curriculum hasn't kept pace with 21st-century skills demands. Digital literacy, critical thinking, 
              and STEM education need significant investment.
            </p>
          </div>
          <div className="bg-zinc-900 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-3">Resource Consolidation</h3>
            <p className="text-neutral-300 text-sm">
              With 321 schools below 60% capacity, consolidation could redirect millions from empty buildings 
              to student programs, technology, and teacher support.
            </p>
          </div>
          <div className="bg-zinc-900 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3">Early Intervention</h3>
            <p className="text-neutral-300 text-sm">
              Reading gaps appear early and compound. Universal early screening and intensive literacy support 
              in K-3 could reverse the PISA trend within a generation.
            </p>
          </div>
        </div>
      </div>

      <Timeline items={eduTimeline} />

      <CTASection
        icon={GraduationCap}
        title="Demand Education Reform"
        description="New Brunswick's children deserve a world-class education system, not last place in Canada."
        buttonText="Add Your Voice"
        buttonHref="/take-action"
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Sources</h2>
        <div className="space-y-3">
          <SourceCard
            type="article"
            title="Wikipedia: Education in New Brunswick"
            url="https://en.wikipedia.org/wiki/Education_in_New_Brunswick"
            description="Comprehensive history and statistics including PISA scores, district mergers, and system structure"
            date="WIKI"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
