import { Metadata } from "next";
import { AlertTriangle, Activity, Award, Banknote, DollarSign, Share2, ShieldAlert, TrendingDown, Zap } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tax Fairness in New Brunswick | Reform NB",
  description:
    "Analyzing New Brunswick's regressive tax system. Irving pays 5x less property tax than US refineries. No wealth tax while services cut.",
};

export default function TaxFairnessPage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={DollarSign}
        title="Tax Fairness"
        quote="New Brunswick has the most regressive tax system in Canada. While families struggle with the highest HST in the country, billionaires pay pennies in property tax and use offshore havens."
      />

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1583430890357-6dbc4c8d807e?w=1440&q=80" 
          alt="Tax documents and coins representing fiscal inequality"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Tax Fairness Analysis</h2>
          <p className="text-gray-300 text-lg">Who pays? Who benefits? The rigged system.</p>
        </div>
      </div>

      {/* Key Facts */}
      <KeyFactsGrid
        facts={[
          {
            icon: "dollar-sign" as const,
            title: "Highest HST in Canada",
            value: "15%",
            description:
              "New Brunswick shares the highest Harmonized Sales Tax rate in Canada with Nova Scotia and Prince Edward Island. This regressive tax hits low-income families hardest.",
            source: "Statistics Canada",
          },
          {
            icon: "alert-triangle" as const,
            title: "Irving's 5x Tax Advantage",
            value: "5x less",
            description:
              "Irving Oil pays approximately 5 times less property tax than comparable US refineries. Their Saint John refinery produces $10B+ in annual output yet pays minimal municipal taxes.",
            source: "NB Media Co-op",
          },
          {
            icon: "banknote" as const,
            title: "No Wealth Tax",
            value: "0%",
            description:
              "New Brunswick has no wealth tax, net worth tax, or inheritance tax. While Ontario, Quebec, and other provinces have various wealth measures, NB relies on regressive consumption taxes.",
            source: "Department of Finance",
          },
          {
            icon: "activity" as const,
            title: "Median Income $62,700",
            value: "$62,700",
            description:
              "New Brunswick has the lowest median after-tax family income in Canada. Families struggle while industrial grants flow to billionaire-owned companies.",
            source: "Statistics Canada 2023",
          },
          {
            icon: "trending-down" as const,
            title: "Corporate Tax Revenue Down",
            value: "-15%",
            description:
              "Corporate income tax revenue as percentage of GDP has declined in NB over the past decade, while corporate profits have risen - indicating decreasing effective tax rates on corporations.",
            source: "NB Budget Documents",
          },
          {
            icon: "zap" as const,
            title: "Energy Poverty 25.6%",
            value: "25.6%",
            description:
              "Over a quarter of New Brunswick households experience energy poverty - spending more than 6% of income on home energy costs. Meanwhile, Irving gets preferential power rates.",
            source: "NB Energy Institute",
          },
        ]}
        title="Tax System By The Numbers"
        className="mb-16"
      />

      {/* Wealth Tax Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          The Case for a Wealth Tax
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            With the Irving family's wealth estimated at <strong className="text-white">$30+ billion</strong>, a modest wealth tax could generate significant revenue for public services while addressing extreme inequality.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Wealth Tax Scenarios</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">1% on wealth {'>'} $1B</span>
                  <span className="text-white font-bold">~$300M/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">0.5% on wealth {'>'} $500M</span>
                  <span className="text-white font-bold">~$250M/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">2% on wealth {'>'} $5B</span>
                  <span className="text-white font-bold">~$500M/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-center mt-4 text-sm">
              Estimates based on Irving family wealth and other known NB fortunes. Actual revenue would depend on implementation thresholds and exemptions.
            </p>
          </div>
        </div>
      </section>

      {/* Royalty Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Natural Resource Royalties
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            New Brunswick's natural resources - forests, minerals, and potential oil/gas - are extracted with minimal return to the public. Royalty rates lag behind other resource-rich jurisdictions.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Royalty Comparison</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">NB Forestry Stumpage</span>
                  <span className="text-white font-bold">Below market</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-500 h-4 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Quebec Forestry</span>
                  <span className="text-white font-bold">Market rate</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-500 h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">NB Mineral Royalties</span>
                  <span className="text-white font-bold">1-3%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-500 h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Saskatchewan Potash</span>
                  <span className="text-white font-bold">20-40%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-500 h-4 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Alberta Oil/Gas</span>
                  <span className="text-white font-bold">5-15%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-500 h-4 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-center mt-4 text-sm">
              New Brunswick's forestry and mineral royalty rates are among the lowest in Canada, providing minimal return for the extraction of public resources.
            </p>
          </div>
        </div>
      </section>

      {/* Property Tax Inequality */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Property Tax Disparities
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            New Brunswick's property tax system creates significant inequities between residential homeowners and industrial complexes, particularly those owned by billionaire families.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Tax Rate Comparison</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Residential (Moncton)</span>
                  <span className="text-white font-bold">1.8-2.2%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Residential (Saint John)</span>
                  <span className="text-white font-bold">2.0-2.5%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Irving Refinery (Saint John)</span>
                  <span className="text-white font-bold">~0.4%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Irving Forestry Lands</span>
                  <span className="text-white font-bold">~0.1%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '10%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Average US Refinery</span>
                  <span className="text-white font-bold">2.0-2.5%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-center mt-4 text-sm">
              Irving's industrial properties pay a fraction of what homeowners pay - despite generating billions in annual revenue and using significant municipal services.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Transfers & Expenditures */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Federal Tax Expenditures in NB
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            Federal tax expenditures - subsidies and tax breaks delivered through the tax system - disproportionately benefit corporations and high-income individuals in New Brunswick.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Major Federal Tax Expenditures</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Accelerated Capital Cost Allowance</span>
                  <span className="text-white font-bold">$40M+/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Stock Option Deduction</span>
                  <span className="text-white font-bold">$15M+/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Atlantic Investment Tax Credit</span>
                  <span className="text-white font-bold">$10M+/year</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Irving-Specific Subsidies</span>
                  <span className="text-white font-bold">$45M+/3 years</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-center mt-4 text-sm">
              These federal measures reduce government revenue that could fund public services, while primarily benefiting corporations and wealthy individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Analysis */}
      <section className="mb-16">
        <div className="prose prose-invert max-w-none">
          <QuoteBlock
            quote="New Brunswick's tax system asks the least from those who have the most, while placing the heaviest burden on those who can least afford it."
            author="Tax Justice NB"
            role="Advocacy Group"
            className="mt-8"
          />
          <QuoteBlock
            quote="When Irving pays 5x less in property tax than a US competitor, it's not competitiveness - it's a subsidy extracted from New Brunswick families and small businesses."
            author="Economist Richard Saillant"
            role="CBC Commentator"
            className="mt-4"
          />
        </div>
      </section>

      {/* Sources */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Sources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900 p-4 rounded border border-neutral-800">
            <h4 className="font-bold text-white mb-3">Primary Sources</h4>
            <p className="text-neutral-300 text-sm">
              • Statistics Canada income and tax data<br/>
              • New Brunswick Department of Finance<br/>
              • NB Media Co-op investigations<br/>
              • Auditor General reports<br/>
              • CBC New Brunswick reporting
            </p>
          </div>
          <div className="bg-neutral-900 p-4 rounded border border-neutral-800">
            <h4 className="font-bold text-white mb-3">Further Reading</h4>
            <p className="text-neutral-300 text-sm">
              • Canadian Centre for Policy Alternatives NB<br/>
              • Institute for Research on Public Policy<br/>
              • Parliamentary Budget Officer reports<br/>
              • International Consortium of Investigative Journalists (ICJI)<br/>
              • Corporate Tax Haven databases
            </p>
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="Demand Tax Justice"
        description="New Brunswick's tax system is rigged against ordinary families. It's time for fair taxation that funds public services instead of subsidizing billionaires."
        buttonText="Take Action Now"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
