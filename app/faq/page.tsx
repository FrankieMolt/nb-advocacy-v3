import { Metadata } from "next";
import { HelpCircle, ChevronDown, Baby, AlertTriangle, DollarSign, Heart, Building, TreePine, Fish, Megaphone } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions: New Brunswick Accountability | Reform NB",
  description: "Frequently asked questions about Reform NB, our methodology, sources, and how to get involved.",
};

interface FAQItem {
  question: string;
  answer: string;
  eli5: string;
  icon: React.ReactNode;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Healthcare",
    icon: <Heart size={20} className="text-white" />,
    question: "Why don't 238,000 New Brunswickers have a family doctor?",
    answer: "New Brunswick has the lowest doctor-to-patient ratio in Canada at ~220 per 100,000 (national average: 260). The province trains fewer doctors than any other, and rural/French-language positions are chronically understaffed. Meanwhile, 635 seniors occupy acute hospital beds while waiting for long-term care (ALC patients), blocking ER admissions. The result: 63,000+ ER walkouts per year, 2,199 patients pronounced dead after ER arrival (2020-2024), and wait times of 8+ hours for moderate emergencies.",
    eli5: "🏠 Imagine a town where 1 in 3 people can't find a doctor. When they get sick, they have to go to the emergency room — but the emergency room is SO full of old people who need to be somewhere else, there's no room! So sick people wait and wait in hard chairs until some of them... don't make it. That's happening RIGHT NOW in New Brunswick.",
  },
  {
    category: "Corporate Power",
    icon: <Building size={20} className="text-yellow-400" />,
    question: "Who are the Irvings and why do they control everything?",
    answer: "The Irving family has built a $30+ billion empire over four generations, owning oil refineries, forestry operations, media outlets (90% of NB newspapers), trucking, construction, and shipbuilding. They employ ~15,000 people directly, making them the province's largest private employer. This concentration means the Irvings can influence government policy, environmental regulations, and media coverage. J.D. Irving controls 2.4 million acres of NB forest — more than any other private landowner.",
    eli5: "🧱 Imagine if one family in your town owned the school, the grocery store, the newspaper, the gas station, AND the place where most people work. If you made them mad, you might lose your job AND nobody would write about it in the newspaper because they own that too. That's kind of what the Irving family is to New Brunswick.",
  },
  {
    category: "Environment",
    icon: <TreePine size={20} className="text-green-500" />,
    question: "What is glyphosate spraying and why is it controversial?",
    answer: "Glyphosate (the active ingredient in Roundup) is sprayed on 15,000+ hectares of New Brunswick's Crown forests annually to kill hardwood trees and promote softwood growth for the forestry industry. Spraying has increased 30% since 2005. 76% of NB residents want it banned. Indigenous leaders have called for a ban, citing traditional food source contamination. Premier Holt has said she'd ban it if linked to the province's mystery brain illness cluster. J.D. Irving's director compared ban supporters to 'Karens.'",
    eli5: "🌲 Imagine if someone sprayed poison all over the forest so the trees they want to sell would grow better. The poison kills the plants animals eat, might make people sick, and most people in the province said 'STOP!' — but the company keeps doing it anyway because they make lots of money from those trees.",
  },
  {
    category: "Environment",
    icon: <Fish size={20} className="text-blue-400" />,
    question: "What happened to the salmon in the Miramichi River?",
    answer: "Atlantic salmon populations in the Miramichi River have collapsed by 96% between 2010-2024. The annual count at the barrier dropped from 1,039 fish in 2011 to just 51 in recent years. Save Miramichi Salmon Inc. has filed a lawsuit against DFO (Fisheries and Oceans Canada), alleging the federal government failed to balance striped bass and salmon populations. DFO's own data shows a 64% decline from 2012-2024. Salmon pool auction prices have dropped 75% as the fishery becomes unviable.",
    eli5: "🐟 Imagine a river that used to be FULL of big beautiful fish that people came from all over to catch. Now there are almost NONE left — like going from 1,000 fish to fewer than 100! The government people who were supposed to protect the fish didn't do their job, so now people are suing them in court.",
  },
  {
    category: "Energy",
    icon: <DollarSign size={20} className="text-yellow-500" />,
    question: "Why are NB Power rates so high?",
    answer: "NB Power carries $5.9 billion in debt — the highest per-capita utility debt in Canada. The Point Lepreau nuclear plant operates at only 27% capacity, forcing the utility to buy power at market rates ($9M/day peak). Rate increases of 50% over six years are planned: 9% in 2024, 9% in 2025, 4.75% proposed for 2026, and 6.5% each for 2027-2028. New Brunswick has Canada's second-highest energy poverty rate at 25.6% — more than double the national average of 11%.",
    eli5: "💡 Imagine your family's power bill keeps getting bigger and bigger every year — and now it's SO expensive that 1 in 4 families can't afford to heat their homes in winter without going hungry. The company that makes the power borrowed way too much money and made bad choices, and now regular people have to pay for it.",
  },
  {
    category: "Corruption",
    icon: <AlertTriangle size={20} className="text-orange-500" />,
    question: "What was the $173.9M travel nurse scandal?",
    answer: "The Vitalité Health Network spent $173.9 million on untendered travel nurse contracts through Canadian Health Labs (CHL) — paying $300.72/hour per nurse while local RNs earned $45-55/hour. The Auditor General's investigation was blocked when Vitalité invoked 'litigation privilege.' In June 2025, Chief Justice DeWare ruled this privilege overrides the AG's mandate, effectively legalizing the cover-up. The $173.9M could have funded 2,500 full-time nursing positions for a year.",
    eli5: "🏥 Imagine your school needed teachers really badly. Instead of hiring normal teachers, they paid a special company SIX TIMES more for substitute teachers — with YOUR allowance money! When the principal tried to check if this was okay, the company said 'You're not allowed to look!' and a judge agreed. That's basically what happened with nurses in NB hospitals.",
  },
  {
    category: "Housing",
    icon: <Building size={20} className="text-purple-500" />,
    question: "How bad is the homelessness crisis?",
    answer: "Over 100 homeless New Brunswickers died in 2025. In Saint John alone, 38 people died from housing-related issues. In January 2026, 829 people experienced homelessness in Moncton. The government announced a strategy to reduce chronic homelessness by 40% over three years, but UNB researchers called it insufficient. Many deaths were linked to drug overdoses and occurred shortly after individuals had secured housing — indicating inadequate support systems.",
    eli5: "🏠 Imagine if every week, two people in your town died because they didn't have a home to sleep in. Some died from being too cold, some from being sick, and some from really bad medicine they took because being outside with no home is SO scary and hard. That happened over 100 times last year in New Brunswick.",
  },
  {
    category: "Media",
    icon: <Megaphone size={20} className="text-white" />,
    question: "Do the Irvings really control NB media?",
    answer: "J.D. Irving's Brunswick News (BNI) owns or owned virtually all English-language daily newspapers in New Brunswick: the Telegraph-Journal (Saint John), Times & Transcript (Moncton), and Daily Gleaner (Fredericton), plus dozens of weeklies. Independent reporting on Irving businesses has been suppressed — journalists who covered Irving critically faced career consequences. While Postmedia acquired BNI in 2022, the legacy of decades of corporate media ownership continues to shape information access in NB.",
    eli5: "📰 Imagine if one family owned ALL the newspapers in your town. If they did something bad, the newspapers wouldn't write about it because their BOSS is the one who did the bad thing! For a long time, that's how New Brunswick worked — and some people say it still kind of does.",
  },
];

const categories = [...new Set(faqs.map(f => f.category))];

export default function FAQPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Hub" />
      <PageHeader
        icon={HelpCircle}
        title="Frequently Asked Questions"
        quote="The truth doesn't need to be complicated. It just needs to be told."
      />

      <p className="text-white mb-8 leading-relaxed text-lg">
        Everything you need to know about what&apos;s gone wrong in New Brunswick — and what we can do about it. 
        Each answer includes an &quot;Explain Like I&apos;m 5&quot; section for those who prefer plain language.
      </p>

      {/* ELI5 Badge Explanation */}
      <div className="bg-neutral-900 border border-crisis-red/30 rounded-2xl p-6 mb-12 flex items-start gap-4">
        <Baby size={24} className="text-white shrink-0 mt-1" />
        <div>
          <h3 className="text-white font-bold mb-2">🧸 Look for the ELI5 Badge</h3>
          <p className="text-white text-sm">
            Every answer includes an &quot;Explain Like I&apos;m 5&quot; section that breaks down complex issues into 
            simple language. No jargon, no politics — just the truth, explained like you&apos;re talking to a kid. 
            Because these issues affect everyone, and everyone deserves to understand them.
          </p>
        </div>
      </div>

      {/* FAQ by Category */}
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-black font-serif uppercase tracking-tighter italic text-white mb-6 border-b border-neutral-800 pb-2">
            {category}
          </h2>
          <div className="space-y-6">
            {faqs.filter(f => f.category === category).map((faq, i) => (
              <details 
                key={i} 
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group"
              >
                <summary className="p-6 cursor-pointer flex items-start gap-4 hover:bg-neutral-800/50 transition-colors list-none">
                  <div className="shrink-0 mt-1">{faq.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{faq.question}</h3>
                  </div>
                  <ChevronDown size={20} className="text-white group-open:rotate-180 transition-transform shrink-0 mt-1" />
                </summary>
                <div className="px-6 pb-6">
                  {/* Full Answer */}
                  <div className="mb-6">
                    <h4 className="text-sm font-black uppercase tracking-widest text-white mb-3">FULL ANSWER</h4>
                    <p className="text-white leading-relaxed">{faq.answer}</p>
                  </div>
                  
                  {/* ELI5 */}
                  <div className="bg-crisis-red/10 border border-crisis-red/30 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Baby size={16} className="text-white" />
                      <h4 className="text-sm font-black uppercase tracking-widest text-white">EXPLAIN LIKE I&apos;M 5</h4>
                    </div>
                    <p className="text-white leading-relaxed italic">{faq.eli5}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}

      {/* Quick Stats */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">
          Quick Stats: New Brunswick by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "238K+", label: "No family doctor" },
            { value: "100+", label: "Homeless deaths (2025)" },
            { value: "96%", label: "Salmon decline" },
            { value: "25.6%", label: "Energy poverty" },
            { value: "$173.9M", label: "Travel nurse scandal" },
            { value: "$5.9B", label: "NB Power debt" },
            { value: "15%", label: "HST (highest)" },
            { value: "2,199", label: "ER arrival deaths" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-black/50 rounded-lg">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <CTASection
        icon={HelpCircle}
        title="Have More Questions?"
        description="Submit your questions anonymously. We investigate every lead."
        buttonText="Ask Us Anything"
        buttonHref="/contact"
      />
    </PageWrapper>
  );
}
