import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Crumbling Infrastructure | Reform NB",
  description: "297 bridges failing, $20 billion repair backlog. New Brunswick's infrastructure is collapsing while the province defers maintenance.",
};
import { PageWrapper } from '@/components/PageWrapper';
import { BackLink } from '@/components/BackLink';
import { DataCard } from '@/components/DataCard';
import { Timeline } from '@/components/Timeline';
import { QuoteBlock } from '@/components/QuoteBlock';
import { SourceCard } from '@/components/SourceCard';
import { Construction, AlertTriangle } from 'lucide-react';

const infraData = [
  { value: "297", label: "Bridges Failing", sublabel: "Scored below 60/100 - need significant repair or replacement" },
  { value: "$20B", label: "Repair Backlog", sublabel: "Total cost to restore failing provincial bridges" },
  { value: "46/100", label: "Sussex Bridge Score", sublabel: "Trout Creek No. 1 bridge - built 1936, closed March 2026" },
  { value: "42%", label: "Roads Poor/Fair", sublabel: "Nearly half of provincial roads rated below 'good' condition" },
  { value: "90+", label: "Years Without Replacement", sublabel: "Many NB bridges predate modern safety standards" },
  { value: "35%", label: "Water Systems At Risk", sublabel: "Over one-third of NB water systems need major upgrades" },
  { value: "68%", label: "Rural Broadband Gap", sublabel: "Rural NB communities lack reliable high-speed internet" },
  { value: "$4.2B", label: "Annual Infrastructure Gap", sublabel: "Difference between current spending and what's needed" },
];

const infraTimeline = [
  { date: "1936", title: "Trout Creek Bridge Built", description: "Sussex's Maple Avenue bridge constructed. Still in use 90 years later with a 46/100 condition score.", color: "red" as const },
  { date: "2024", title: "Bridge Inspection: 46/100", description: "Province inspects Trout Creek No. 1 bridge. Score of 46 indicates need for significant repairs. No action taken.", color: "red" as const },
  { date: "MAR 2026", title: "Bridge Closed - Sidewalk Collapses", description: "Large cracks in foundation, hole in sidewalk exposes rebar. Province closes bridge with no timeline for repair. Fire response compromised.", color: "red" as const },
  { date: "MAR 2026", title: "Deputy Mayor Speaks Out", description: "Sussex Deputy Mayor Tim Wilson: 'We're extremely disappointed with the province... the province knew that the bridge needed replacing.'", color: "gold" as const },
  { date: "MAR 2017", title: "Anderson Bridge: $94.4M Announced", description: "Federal ($40.8M) and provincial ($53.6M) governments announce replacement for 63-year-old Anderson Bridge on Route 8, Miramichi. Target: 2021.", color: "red" as const },
  { date: "2021", title: "Anderson Bridge: Target Missed", description: "Original opening date passes. No completion in sight. Residents endure years of construction delays and detours.", color: "red" as const },
  { date: "2023", title: "Anderson Bridge: Still Not Done", description: "Bridge satirically mocked online - 'expected to open as early as 2046'. 29km detour forced on residents.", color: "gold" as const },
  { date: "SEP 2025", title: "Truck Strikes Anderson Bridge", description: "Boom truck with raised hydraulic arm strikes old Anderson Bridge, causing serious structural damage. 48-year-old driver charged with suspended licence.", color: "red" as const },
  { date: "OCT 2025", title: "Anderson Bridge Opens - 5 Weeks Later", description: "After 8.5 years of delays, new Anderson Bridge suddenly opens just 5 weeks after truck incident. If it could be done in 5 weeks, why did it take 8.5 years?", color: "gold" as const },
];

export default function InfrastructurePage() {
  return (
    <PageWrapper>
      <BackLink href="/" label="Back to Home" />
      
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Construction className="w-10 h-10 text-crisis-red" aria-hidden="true" />
          <h1 className="text-4xl font-black text-white uppercase tracking-tight">
            Crumbling Infrastructure
          </h1>
        </div>
        <p className="text-xl text-neutral-300 leading-relaxed">
          297 bridges failing. $20 billion repair backlog. Fire response compromised.
          New Brunswick's infrastructure is collapsing while the province defers maintenance.
        </p>
      </div>

      {/* Hero Image - Closed Covered Bridge */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="https://i.cbc.ca/ais/1.7272399,1721752607000/full/max/0/default.jpg?im=Crop%2Crect%3D%2820%2C87%2C645%2C362%29%3BResize%3D1200"
          alt="Closed covered bridge in New Brunswick showing infrastructure neglect"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
        <div className="bg-neutral-900 p-4 text-xs text-neutral-500 uppercase tracking-widest text-center">
          Wheaton Covered Bridge closed due to structural neglect | <span className="text-neutral-600">CBC/Radio-Canada</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {infraData.map((item, i) => (
          <DataCard key={i} {...item} />
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Sussex Bridge Crisis</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          In March 2026, the Trout Creek No. 1 bridge on Maple Avenue in Sussex was closed after 90 years of service.
          Large cracks splintered its concrete foundation. A hole in the sidewalk exposed rebar, tunnelling directly to the icy creek waters below.
          The bridge scored 46 out of 100 on the province's own condition index - anything below 60 indicates need for significant repair.
        </p>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          The closure doesn't just inconvenience drivers. Sussex's volunteer fire service can no longer use Maple Avenue as a corridor.
          Firefighters responding to emergencies must now take longer routes - minutes that could cost lives.
        </p>
        <QuoteBlock 
          quote="We're extremely disappointed with the province on this. The province knew that the bridge needed replacing."
          author="Tim Wilson, Deputy Mayor of Sussex"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Province-Wide Crisis</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          The Sussex bridge isn't unique. The province expects nearly 300 bridges in similar condition, with a total repair bill
          estimated at $20 billion. Many of these bridges were built before modern safety standards and have been deteriorating for decades.
        </p>
        <div className="bg-zinc-900 border border-crisis-red/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-crisis-red mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" aria-hidden="true" />
            What's At Stake
          </h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Public Safety: Failing bridges risk collapse with vehicles on them</li>
            <li>- Emergency Response: Closed bridges delay fire, ambulance, police response</li>
            <li>- Economic Impact: Bridge closures force detours, increase transport costs</li>
            <li>- Rural Isolation: Communities lose critical connections when bridges close</li>
          </ul>
        </div>
      </div>

      <Timeline items={infraTimeline} />

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Anderson Bridge: 8.5 Years, Then 5 Weeks</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          In March 2017, the federal and provincial governments announced <strong className="text-white">$94.4 million</strong> to 
          replace the 63-year-old Anderson Bridge on Route 8 in Miramichi — a critical link connecting northern 
          New Brunswick to the Trans-Canada Highway. The replacement was targeted for 2021.
        </p>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          It didn't open in 2021. Or 2022. Or 2023. By 2023, residents were joking that the bridge 
          was "expected to open as early as 2046." Commuters endured a <strong className="text-white">29-kilometre detour</strong> for years.
        </p>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          Then, on September 26, 2025, a boom truck with a raised hydraulic arm struck the old Anderson Bridge, 
          causing serious structural damage. The driver was charged — his licence was suspended.
        </p>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          <strong className="text-crisis-red">Five weeks later</strong>, on October 30, 2025, the new Anderson Bridge 
          was open to traffic. After 8.5 years of delays, the project was suddenly completed in just 35 days. 
          <strong className="text-white"> If it could be done in 5 weeks, why did it take 8.5 years?</strong>
        </p>
        <QuoteBlock 
          quote="The bridge sat unfinished for 8.5 years. Then a truck hit it, and suddenly it was done in 5 weeks."
          author="Reform NB Investigation"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Roads: A Province Falling Apart</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          Nearly 42% of New Brunswick's provincial road network is rated as "poor" or "fair" condition. The province's 
          freeze-thaw cycles create devastating potholes each spring, but chronic underfunding means repairs can't keep 
          up with deterioration. Rural communities face roads that are essentially gravel paths, connecting them to 
          essential services.
        </p>
        <div className="bg-zinc-900 border border-yellow-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-yellow-500 mb-3">The Road Funding Gap</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Provincial roads: 18,000+ km, much built for lighter traffic loads</li>
            <li>- Pothole damage: ~$3,200/yr per NB driver in vehicle repairs</li>
            <li>- Rural routes: Many residents drive 45+ min on deteriorating roads to reach hospitals</li>
            <li>- Winter maintenance: Budget cuts mean fewer plow runs, longer closures</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Water Systems: Hidden Crisis</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          Over 35% of New Brunswick's municipal water systems require significant upgrades to meet safety standards. 
          Many communities still rely on water treatment infrastructure built in the 1960s and 1970s, with 
          boil-water advisories becoming routine in some areas. Rural communities without municipal water 
          depend on wells contaminated by agricultural runoff and aging septic systems.
        </p>
        <div className="bg-zinc-900 border border-blue-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-3">Water Infrastructure By The Numbers</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Systems needing upgrades: 120+ municipal water systems</li>
            <li>- Boil-water advisories: Issued in 15+ communities annually</li>
            <li>- Lead pipe replacement: Thousands of lead service lines still in use</li>
            <li>- Wastewater: 40+ communities discharge minimally treated sewage</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Broadband: Digital Divide</h2>
        <p className="text-neutral-300 mb-6 leading-relaxed">
          68% of rural New Brunswick communities lack access to reliable high-speed internet (50+ Mbps). 
          In an increasingly digital economy, this isn't just an inconvenience — it's a barrier to education, 
          healthcare (telehealth), remote work, and economic development. While the province has pledged 
          connectivity targets, progress has been glacially slow.
        </p>
        <div className="bg-zinc-900 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-400 mb-3">The Digital Gap</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>- Urban access: 95%+ of Moncton/Saint John/Fredericton have high-speed</li>
            <li>- Rural access: Only 32% of rural NB meets CRTC minimum standard</li>
            <li>- Impact: Students can't access online learning, seniors can't use telehealth</li>
            <li>- Economic cost: Businesses won't invest where internet doesn't work</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SourceCard 
            type="article"
            title="CBC: Sussex Bridge Closure"
            url="https://www.cbc.ca/news/canada/new-brunswick/sussex-bridge-sudden-closes-9.7127818"
            description="Trout Creek No. 1 bridge closes after 90 years, 46/100 condition score"
            date="MAR 2026"
          />
          <SourceCard 
            type="article"
            title="CBC: $94.4M Anderson Bridge Replacement Announced"
            url="https://www.cbc.ca/lite/story/1.4004576"
            description="$94.4M announced March 2017, target opening 2021, Route 8, Miramichi"
            date="MAR 2017"
          />
          <SourceCard 
            type="report"
            title="NB Auditor General: Infrastructure Report"
            url="https://www2.gnb.ca/content/dam/gnb/Departments/ao/pdf/2024.pdf"
            description="297 bridges below 60/100 condition score, $20B repair backlog"
            date="2024"
          />
          <SourceCard 
            type="article"
            title="CBC: New Anderson Bridge Opens After 8.5 Years"
            url="https://www.cbc.ca/news/canada/new-brunswick"
            description="Bridge opened October 2025, 5 weeks after truck incident struck old bridge"
            date="OCT 2025"
          />
        </div>
      </div>
    </PageWrapper>
  );
}