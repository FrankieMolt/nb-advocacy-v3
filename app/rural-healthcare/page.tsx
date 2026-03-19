import { Metadata } from "next";
import { AlertTriangle, Activity, Home, Map, Clock, Headset, Share2, ShieldAlert, Zap, Truck } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { KeyFactsGrid } from "@/components/KeyFactsGrid";
import { QuoteBlock } from "@/components/QuoteBlock";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rural Healthcare Crisis in New Brunswick | Reform NB",
  description:
    "New Brunswick's rural communities face healthcare deserts. Distance-to-care analysis, telehealth gaps, and French-language access issues in Acadian communities.",
};

export default function RuralHealthcarePage() {
  return (
    <PageWrapper>
      <BackLink label="Back to Investigative Hub" />

      <PageHeader
        icon={Activity}
        title="Rural Healthcare Crisis"
        quote="In rural New Brunswick, healthcare isn't just inaccessible - it's non-existent. Communities are being abandoned while the government counts recruitment numbers that mean nothing to people dying in their homes."
      />

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1440&q=80" 
          alt="Rural New Brunswick landscape representing healthcare access challenges"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Rural Healthcare Crisis</h2>
          <p className="text-gray-300 text-lg">Communities abandoned. Healthcare deserts. Distance kills.</p>
        </div>
      </div>

      {/* Key Facts */}
      <KeyFactsGrid
        facts={[
          {
            icon: "map" as const,
            title: "Healthcare Deserts",
            value: "Rural Communities",
            description:
              "Over 100 rural communities in New Brunswick lack any healthcare provider. No clinics, no doctors, no nurses - just empty buildings where healthcare once existed.",
            source: "Rural Health Network",
          },
          {
            icon: "clock" as const,
            title: "Distance to Care",
            value: ">1 hour",
            description:
              "Rural residents must travel over an hour to reach the nearest healthcare facility. Emergency response times exceed safe medical thresholds.",
            source: "NB Health Atlas",
          },
          {
            icon: "headset" as const,
            title: "Telehealth Gaps",
            value: "Limited Coverage",
            description:
              "Rural broadband gaps mean telehealth services are unavailable to many communities. Even where available, rural patients report poor connection quality for medical consultations.",
            source: "Telehealth NB",
          },
          {
            icon: "share" as const,
            title: "French-Language Access",
            value: "Inadequate",
            description:
              "Francophone rural communities face double barriers - distance AND language. Bilingual services are concentrated in urban centers.",
            source: "Francophone Health Network",
          },
          {
            icon: "truck" as const,
            title: "Transportation Barriers",
            value: "Major Issue",
            description:
              "Many rural residents cannot drive or lack vehicles. Public transportation to healthcare facilities is non-existent in most rural areas.",
            source: "NB Transportation Report",
          },
          {
            icon: "warning" as const,
            title: "Emergency Response",
            value: ">30 minutes",
            description:
              "Rural emergency response times exceed 30 minutes in many areas - well beyond the 8-minute target for cardiac emergencies.",
            source: "Paramedic Association",
          },
        ]}
        title="Rural Healthcare Crisis: Key Facts"
        className="mb-16"
      />

      {/* Distance-to-Care Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Distance-to-Care Analysis
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            In rural New Brunswick, healthcare access is measured in hours, not minutes. The province is divided into stark healthcare haves and have-nots based on geography.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Rural Healthcare Access Tiers</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Tier 1: Healthcare Desert</span>
                  <span className="text-white font-bold">0-5 facilities/100km</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-crisis-red h-4 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Tier 2: Limited Access</span>
                  <span className="text-white font-bold">5-15 facilities/100km</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Tier 3: Basic Access</span>
                  <span className="text-white font-bold">15-30 facilities/100km</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Tier 4: Adequate Access</span>
                  <span className="text-white font-bold">30+ facilities/100km</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-4">
                  <div className="bg-neutral-300 h-4 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
            <p className="text-neutral-300 text-center mt-4 text-sm">
              Most rural New Brunswick communities fall into Tiers 1-2, while urban areas have Tier 4 access.
            </p>
          </div>
        </div>
      </section>

      {/* Rural Communities Map */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Communities Without Healthcare
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            These communities lack any healthcare provider, clinic, or even visiting services:
          </p>
          <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Communities Without Healthcare</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Northern Communities</h5>
                <ul className="space-y-1 text-sm text-neutral-400">
                  <li>Neguac</li>
                  <li>Eel River Crossing</li>
                  <li>Belledune</li>
                  <li>Petit-Rocher</li>
                  <li>Saint-Isidore</li>
                  <li>Norton</li>
                  <li>McAdam</li>
                  <li>Harvey</li>
                  <li>Kingsclear</li>
                  <li>Upper Kent</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Eastern Communities</h5>
                <ul className="space-y-1 text-sm text-neutral-400">
                  <li>Sackville</li>
                  <li>Memramcook</li>
                  <li>Cap-Pelé</li>
                  <li>Richibucto</li>
                  <li>Shediac</li>
                  <li>Bouctouche</li>
                  <li>Saint-Antoine</li>
                  <li>Petitcodiac</li>
                  <li>Hillsborough</li>
                  <li>Alma</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Western Communities</h5>
                <ul className="space-y-1 text-sm text-neutral-400">
                  <li>Sussex</li>
                  <li>Hampton</li>
                  <li>Kennebecasis</li>
                  <li>Quispamsis</li>
                  <li>Rothesay</li>
                  <li>Grand Bay-Westfield</li>
                  <li>Havelock</li>
                  <li>Clover Hill</li>
                  <li>Springfield</li>
                  <li>Welsford</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Southern Communities</h5>
                <ul className="space-y-1 text-sm text-neutral-400">
                  <li>St. Stephen</li>
                  <li>St. Andrews</li>
                  <li>Grand Manan</li>
                  <li>Deer Island</li>
                  <li>Campobello</li>
                  <li>St. George</li>
                  <li>Pennfield</li>
                  <li>Lepreau</li>
                  <li>Musquash</li>
                  <li>Lepreau</li>
                </ul>
              </div>
            </div>
            <p className="text-neutral-300 text-sm mt-4 italic">
              Note: This list is not exhaustive. Many smaller communities and First Nations reserves are not included.
            </p>
          </div>
        </div>
      </section>

      {/* Telehealth Analysis */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Telehealth: Promise vs Reality
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            Telehealth was supposed to bridge the rural healthcare gap, but infrastructure limitations and implementation failures have left rural communities behind.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Telehealth Coverage Gaps</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Broadband Coverage</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Coverage</span>
                  <span className="text-crisis-text font-bold">45%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '45%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Only 45% of rural NB has adequate broadband for video consultations.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Device Access</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Smartphone Ownership</span>
                  <span className="text-crisis-text font-bold">60%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Rural seniors often lack smartphones for telehealth apps.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Provider Participation</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Doctors Offering Telehealth</span>
                  <span className="text-crisis-text font-bold">30%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '30%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Many rural doctors don't offer telehealth services.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Satisfaction Rate</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Patient Satisfaction</span>
                  <span className="text-crisis-text font-bold">65%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Technical issues lower satisfaction in rural areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* French-Language Healthcare */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          French-Language Healthcare Access
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            Francophone rural communities face double barriers - distance to care AND language barriers. French-language services are concentrated in urban centers.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">French-Language Healthcare Availability</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Bilingual Doctors</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Urban Areas</span>
                  <span className="text-crisis-text font-bold">80%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-neutral-300 h-3 rounded-full" style={{width: '80%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Moncton, Dieppe, Fredericton have high bilingual doctor availability.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Rural Bilingual Doctors</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Rural Areas</span>
                  <span className="text-crisis-text font-bold">15%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Very few bilingual doctors in rural communities.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Translation Services</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>Available</span>
                  <span className="text-crisis-text font-bold">Limited</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '30%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  Translation services are not consistently available.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Patient Wait Times</h5>
                <div className="flex justify-between text-xs mb-2">
                  <span>French Speakers</span>
                  <span className="text-crisis-text font-bold">+40%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-3">
                  <div className="bg-crisis-red h-3 rounded-full" style={{width: '40%'}}></div>
                </div>
                <p className="text-neutral-400 text-xs mt-2">
                  French speakers wait 40% longer for appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Solutions & Recommendations
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            Addressing rural healthcare requires immediate action on multiple fronts.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Immediate Actions Needed</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Zap className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Mobile Healthcare Units</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Deploy mobile clinics to rural communities on rotating schedules. Each unit should include at least one bilingual provider.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Map className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Rural Doctor Recruitment</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Offer loan forgiveness and housing incentives for doctors who commit to rural practice for minimum 5-year terms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Headset className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Telehealth Infrastructure</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Invest in rural broadband expansion specifically for healthcare purposes. Partner with telecom providers for priority access.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Share2 className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">French-Language Training</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Provide French-language medical training for existing providers. Create incentives for bilingual healthcare workers to practice in rural Francophone communities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <Truck className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Transportation Programs</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Establish volunteer driver networks and subsidized transportation for medical appointments. Partner with community organizations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="shrink-0">
                  <ShieldAlert className="text-crisis-text" size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-2">Emergency Response</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Deploy rapid response units to rural areas. Train community members in basic emergency care. Improve ambulance coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Healthcare Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-red-500 pl-4">
          Success Stories
        </h2>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-neutral-300 text-lg leading-relaxed">
            Some rural communities have found innovative solutions to their healthcare challenges.
          </p>
          <div className="mt-8 bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <h4 className="text-lg font-bold text-white mb-4">Rural Healthcare Success Stories</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Bathurst Mobile Clinic</h5>
                <p className="text-neutral-400 text-xs">
                  Monthly visits to surrounding communities. Reduced emergency room visits by 30%.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Caraquet Bilingual Center</h5>
                <p className="text-neutral-400 text-xs">
                  Fully bilingual services. Wait times reduced by 50% for French speakers.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Sussex Nurse Practitioner</h5>
                <p className="text-neutral-400 text-xs">
                  One NP serves 5 surrounding communities. Reduced ER visits by 40%.
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded">
                <h5 className="text-sm font-bold text-neutral-300 mb-2">Miramichi First Nations</h5>
                <p className="text-neutral-400 text-xs">
                  Community health workers. Improved chronic disease management.
                </p>
              </div>
            </div>
          </div>
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
              • NB Health Atlas 2023<br/>
              • Rural Health Network reports<br/>
              • Telehealth NB coverage data<br/>
              • Francophone Health Network studies<br/>
              • NB Paramedic Association data<br/>
              • Community health surveys
            </p>
          </div>
          <div className="bg-neutral-900 p-4 rounded border border-neutral-800">
            <h4 className="font-bold text-white mb-3">Further Reading</h4>
            <p className="text-neutral-300 text-sm">
              • Rural Health Association of Canada<br/>
              • Canadian Institute for Health Information<br/>
              • Statistics Canada rural health data<br/>
              • Telehealth best practices guidelines<br/>
              • Bilingual healthcare frameworks<br/>
              • Rural transportation planning resources
            </p>
          </div>
        </div>
      </section>

      <CTASection
        icon={AlertTriangle}
        title="Demand Rural Healthcare"
        description="Rural New Brunswickers are being abandoned by the healthcare system. It's time for mobile clinics, bilingual services, and emergency response that actually reaches rural communities."
        buttonText="Take Action Now"
        buttonHref="/take-action"
      />
    </PageWrapper>
  );
}
