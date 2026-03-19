import { Metadata } from "next";
import Image from "next/image";
import {
  Megaphone,
  Bitcoin,
  PenTool,
  Share2,
  ShieldAlert,
  Info,
  Globe,
  CheckCircle2,
  Mail as LucideMail,
  ExternalLink as LucideExternalLink,
} from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";
import { PageHeader } from "@/components/PageHeader";
import { ScrollLink } from "@/components/ScrollLink";

export const metadata: Metadata = {
  title: "Take Action: Demand Accountability | Reform NB",
  description:
    "Contact Premier Susan Holt and Prime Minister Mark Carney. Support whistleblowers and sign petitions to save New Brunswick.",
};

export default function TakeActionPage() {
  const emailSubject =
    "URGENT: New Brunswick is a Failed Province - Federal RCMP Investigation Required";
  const emailBody = `Dear Premier Holt and Prime Minister Mark Carney,

I am writing to demand immediate, federal intervention into the systematic governance failure and corporate capture of New Brunswick. The provincial government operates as a corporate HR department for monopolies, requiring a sweeping Public Inquiry and RCMP Commercial Crime investigation to dismantle the corruption.

**FISCAL COLLAPSE & FRAUD:**
- $1.39 billion deficit for Budget 2026-27 - highest in provincial history.
- NB Power carries $5.9 billion in debt, paying $9M per day for replacement power during generation failures.
- Failed corporate welfare investments like the $63.4M Atcon Group scandal result in total write-offs while social services are gutted.
- The 2026 leaked 16-point plan attacking UNB & STU and slashing student financial aid.
- $45M 'Industrial Blackmail' grant to Irving Paper while cutting education funding.

**CORPORATE OLIGARCHY:**
- The Irving, McCain, and Cooke families maintain absolute control over resources, media, and aquaculture.
- The 2014 Crown Lands Act changes handed J.D. Irving a 21% increase in allowable cut while slashing wildlife habitat.
- Billionaire tax deferrals like McCain's 15-year forgiveness scheme while families face the lowest median income in Canada ($62,700).

**INSTITUTIONAL FAILURE & DEATH:**
- 2,199 patients deceased after arriving at NB ERs (2020-2024), with 43% not seen in safe triage times.
- Fatal negligence: The deaths of Darrell Mesheau (Fredericton), Jonah Imeson's 12-hour heart attack wait (Moncton), and the Edmundston waiting room death.
- Over 1,500 chronically homeless across major cities, with over 100 unhoused deaths in 2025.
- 96% collapse of Miramichi salmon due to DFO negligence and glyphosate spraying.

I demand you:
1. Launch a federal Public Inquiry and RCMP commercial crime investigation into the corporate capture of the NB government and the $173.9M travel nurse scandal.
2. Cancel Irving's preferential power rates and reverse the 2014 Crown Lands Act giveaways.
3. Hold DFO and provincial regulators accountable for the 96% salmon collapse.
4. Declare a provincial state of emergency on the housing, addiction, and healthcare crises.

Sincerely,
[Your Name]
[Your Address]`;

  const mailtoLink = `mailto:pm@pm.gc.ca,premier@gnb.ca?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <PageWrapper>
      <BackLink />

      <PageHeader
        icon={Megaphone}
        title="Mobilize"
      />
      
      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1200&q=80" 
          alt="Protest rally representing New Brunswick citizens demanding accountability"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="bg-neutral-900 p-3 text-xs text-neutral-400 uppercase tracking-widest text-center relative z-10">
          New Brunswickers are mobilizing — from healthcare protests to housing advocacy, people are demanding change
        </div>
      </div>

      <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
        The corporate oligarchy relies on your exhaustion and your silence.{" "}
        <strong>Don&apos;t give it to them.</strong> Use the intelligence reports
        on this platform to demand immediate federal intervention.
      </p>

      {/* The Reform Plan */}
      <section className="mb-20 bg-neutral-900 border border-neutral-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12" aria-hidden="true">
          <ShieldAlert size={200} />
        </div>
        <h2 className="text-3xl font-black font-serif uppercase tracking-tighter text-white mb-8 border-b border-neutral-800 pb-4 italic">
          The Citizen Reform Plan
        </h2>
        <div className="grid gap-6" role="list">
          <div className="flex gap-4 items-start group" role="listitem">
            <CheckCircle2
              className="text-crisis-text shrink-0 mt-1 group-hover:scale-110 transition-transform"
              size={24}
              aria-hidden="true"
            />
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest text-white mb-1">
                Abolish the 20% Rule
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                End the loophole that allows corporate lobbyists to operate
                without public registration. All meetings with Cabinet must be
                recorded.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 items-start group border-t border-neutral-800 pt-6"
            role="listitem"
          >
            <CheckCircle2
              className="text-crisis-text shrink-0 mt-1 group-hover:scale-110 transition-transform"
              size={24}
              aria-hidden="true"
            />
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest text-white mb-1">
                Tax Equity Reform
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Eliminate heavy-machinery property tax exemptions. Industrial
                assessment rates must reflect the actual market value of the
                facility.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 items-start group border-t border-neutral-800 pt-6"
            role="listitem"
          >
            <CheckCircle2
              className="text-crisis-text shrink-0 mt-1 group-hover:scale-110 transition-transform"
              size={24}
              aria-hidden="true"
            />
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest text-white mb-1">
                Independent Health Audit
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A permanent, independent ombudsman with the power to penalize
                Regional Health Authorities for data manipulation and negligence.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 items-start group border-t border-neutral-800 pt-6"
            role="listitem"
          >
            <CheckCircle2
              className="text-crisis-text shrink-0 mt-1 group-hover:scale-110 transition-transform"
              size={24}
              aria-hidden="true"
            />
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest text-white mb-1">
                Forestry Restitution
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Repeal the 2014 Crown Lands Act changes. Reinstate conservation
                buffers and ban glyphosate spraying on public lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Action 1: Email Officials */}
        <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-2xl hover:border-crisis-red transition-all shadow-xl group relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <LucideMail size={100} />
          </div>
          <LucideMail
            className="text-crisis-text mb-6 group-hover:scale-110 transition-transform"
            size={40}
            aria-hidden="true"
          />
          <h3 className="text-2xl font-black font-serif mb-4 uppercase tracking-tight">
            Direct Intervention
          </h3>
          <p className="text-neutral-400 mb-8 leading-relaxed text-sm">
            Send our full evidence package directly to Prime Minister
            Mark Carney and Premier Susan Holt. Demand a federal investigation.
          </p>
          <a
            href={mailtoLink}
            className="w-full block text-center bg-crisis-red text-white font-black py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg uppercase tracking-widest text-xs"
            aria-label="Email the PM and Premier"
          >
            Email the PM & Premier
          </a>
        </div>

        {/* Action 1.5: Federal Investigation CTA */}
        <div className="bg-crisis-red/20 p-8 border-2 border-crisis-red rounded-2xl hover:border-red-600 transition-all shadow-xl group relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <ShieldAlert size={100} />
          </div>
          <ShieldAlert
            className="text-red-500 mb-6 group-hover:scale-110 transition-transform"
            size={40}
            aria-hidden="true"
          />
          <h3 className="text-2xl font-black font-serif mb-4 uppercase tracking-tight text-red-500">
            Demand Federal Investigation
          </h3>
          <p className="text-white/90 mb-8 leading-relaxed text-sm">
            The evidence of corporate capture and government corruption in New Brunswick requires federal intervention. Join the call for an RCMP investigation into the $173.9M travel nurse scandal and systematic governance failure.
          </p>
          <ScrollLink
            href="#petition"
            className="w-full block text-center bg-white text-red-500 font-black py-4 rounded-lg hover:bg-neutral-100 transition-all shadow-lg uppercase tracking-widest text-xs"
            aria-label="Sign the Federal Investigation Petition"
          >
            Sign Federal Investigation Petition
          </ScrollLink>
        </div>

        {/* Action 2: Allied Advocacy */}
        <div className="bg-neutral-900/50 p-8 border border-neutral-800 rounded-2xl hover:border-crisis-red transition-all shadow-xl group relative overflow-hidden text-white text-center">
          <div className="absolute top-0 right-0 p-4 opacity-5" aria-hidden="true">
            <Globe size={100} />
          </div>
          <PenTool
            className="text-crisis-text mb-6 group-hover:scale-110 transition-transform mx-auto"
            size={40}
            aria-hidden="true"
          />
          <h3 className="text-2xl font-black font-serif mb-4 uppercase tracking-tight">
            Allied Assets
          </h3>
          <p className="text-neutral-400 mb-8 leading-relaxed text-xs italic">
            &ldquo;A province-wide movement is already underway. Support the
            groups on the front lines.&rdquo;
          </p>
          <div className="space-y-3">
            <a
              href="https://savemiramichisalmon.com"
              target="_blank"
              rel="noopener noreferrer" className="w-full block bg-white text-black font-black py-2 rounded hover:bg-neutral-200 transition-colors uppercase text-[10px] tracking-[0.2em]"
              aria-label="Visit Save Miramichi Salmon"
            >
              Save Miramichi Salmon
            </a>
            <a
              href="https://stopsprayingnb.ca/"
              target="_blank"
              rel="noopener noreferrer" className="w-full block bg-neutral-800 text-white font-black py-2 rounded hover:bg-neutral-700 transition-colors uppercase text-[10px] tracking-[0.2em]"
              aria-label="Visit Stop Spraying NB"
            >
              Stop Spraying NB
            </a>
            <a
              href="https://nbmediacoop.org/"
              target="_blank"
              rel="noopener noreferrer" className="w-full block bg-neutral-800 text-white font-black py-2 rounded hover:bg-neutral-700 transition-colors uppercase text-[10px] tracking-[0.2em]"
              aria-label="Visit NB Media Co-op"
            >
              NB Media Co-op
            </a>
          </div>
        </div>

        {/* Action 3: Contact Guide */}
        <div className="bg-neutral-900/30 p-10 border border-neutral-800 rounded-2xl md:col-span-2 shadow-xl text-white">
          <div className="flex items-center gap-3 mb-6 text-crisis-gold">
            <Info size={24} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif uppercase tracking-tight">
              MP Contact Protocol
            </h3>
          </div>
          <p className="text-neutral-400 mb-6 text-sm">
            Postage to the Prime Minister and Members of Parliament is{" "}
            <strong>free in Canada.</strong> Use the physical mail system to
            ensure your demand for an investigation is officially recorded.
          </p>
          <div className="bg-black/50 p-8 rounded-xl border border-neutral-800 font-mono text-sm text-neutral-300 mb-8 shadow-inner relative text-left">
            <div className="absolute top-2 right-4 text-[10px] font-black text-neutral-700 uppercase tracking-widest italic font-sans">
              Encrypted Transmission Path
            </div>
            <p className="font-bold text-crisis-text mb-2 tracking-tighter"></p>
            <p>Office of the Prime Minister</p>
            <p>80 Wellington Street</p>
            <p>Ottawa, ON K1A 0A2</p>
            <p className="mt-4 text-neutral-400 lowercase">pm@pm.gc.ca</p>
          </div>
          <a
            href="https://www.ourcommons.ca/members/en"
            target="_blank"
            rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-neutral-800 text-white font-black py-3 px-8 rounded-lg hover:bg-neutral-700 transition-all uppercase tracking-widest text-[10px]"
            aria-label="Find your MP on the House of Commons website"
          >
            Find Your MP Locator <LucideExternalLink size={12} />
          </a>
        </div>

        {/* Action 4: XMR Donation */}
        <div className="bg-neutral-900/50 p-10 border border-neutral-800 rounded-2xl md:col-span-2 shadow-xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-white" aria-hidden="true">
            <Bitcoin size={120} />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Bitcoin className="text-[#FF6600]" size={40} aria-hidden="true" />
            <h3 className="text-2xl font-black font-serif uppercase tracking-tight">
              Operational Funding
            </h3>
          </div>
          <p className="text-neutral-400 mb-8 max-w-2xl leading-relaxed text-sm">
            We operate without corporate funding. To protect our whistleblower
            sources and maintain our infrastructure, we only accept{" "}
            <strong>Monero (XMR)</strong>. XMR ensures that your support cannot
            be tracked by provincial surveillance.
          </p>

          <div className="bg-black/80 p-6 rounded-xl border border-neutral-800 break-all font-mono text-[10px] md:text-sm text-[#FF6600] mb-6 text-center shadow-inner select-all selection:bg-[#FF6600] selection:text-black">
            47K21zBzgH5gdoTvLbF2pTQrsRUYsLRTVZkXCuQnyp4tXa4qWqNpfD8dXf2o5PL4R5PeQbEf7Z3xh9hy2BSqCnbD7SrRHHg
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="https://cakewallet.com/"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#FF6600] text-black font-black py-2 px-4 rounded-lg hover:bg-[#ff8533] transition-all uppercase tracking-widest text-[10px]"
              aria-label="Download CakeWallet for Monero"
            >
              <Bitcoin size={14} /> Get CakeWallet
            </a>
            <a
              href="https://www.getmonero.org/get-started/what-is-monero/"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-neutral-800 text-white font-black py-2 px-4 rounded-lg hover:bg-neutral-700 transition-all uppercase tracking-widest text-[10px]"
              aria-label="Learn about Monero cryptocurrency"
            >
              Learn XMR
            </a>
          </div>
        </div>

        {/* Action 5: Share */}
        <div className="bg-crisis-red p-12 rounded-3xl text-center md:col-span-2 shadow-[0_0_50px_rgba(179,0,0,0.3)] group cursor-pointer text-white">
          <Share2
            className="text-white mx-auto mb-6 group-hover:scale-110 transition-transform"
            size={48}
            aria-hidden="true"
          />
          <h3 className="text-3xl font-black font-serif mb-4 uppercase tracking-tighter italic">
            Break the Silence
          </h3>
          <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg font-medium leading-relaxed italic">
            &ldquo;The corporate oligarchy relies on the suppression of
            information. The most effective weapon you have is the truth.&rdquo;
          </p>
          <a
            href="https://twitter.com/intent/tweet?text=Investigate%20the%20New%20Brunswick%20government%20failure.%20End%20the%20Company%20Province.%20Read%20the%20full%20report%20at%20https://reformnb.ca%20%23ReformNB%20%23nbpoli"
            target="_blank"
            rel="noopener noreferrer" className="inline-block bg-white text-crisis-text font-black py-4 px-12 rounded-lg text-lg hover:bg-neutral-100 transition-all shadow-2xl hover:scale-105 uppercase tracking-[0.2em]"
            aria-label="Share on X (Twitter)"
          >
            Dispatch to X
          </a>
        </div>

        {/* Action 6: Secure Tips */}
        <div className="bg-neutral-900 p-12 border-2 border-dashed border-crisis-red rounded-3xl text-center md:col-span-2 mt-8 shadow-xl relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-red-900/5 pointer-events-none" aria-hidden="true"></div>
          <ShieldAlert
            className="text-crisis-text mx-auto mb-6 animate-pulse"
            size={64}
            aria-hidden="true"
          />
          <h3 className="text-3xl font-black font-serif mb-4 uppercase tracking-tighter">
            Whistleblower Hotline
          </h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Are you a government employee or corporate whistleblower with
            evidence of fraud, corruption, or environmental crimes?{" "}
            <strong>We protect our sources.</strong>
          </p>
          <div className="inline-block bg-black p-6 rounded-xl border border-neutral-800 font-mono text-xl text-white shadow-inner select-all relative">
            <div className="absolute -top-3 left-4 bg-neutral-900 px-2 text-[10px] font-black uppercase tracking-widest text-crisis-text border border-crisis-red rounded-full">
              Encrypted Node
            </div>
            reformnb-tips@proton.me
          </div>
          <p className="text-sm text-neutral-500 mt-8 italic font-black uppercase tracking-widest">
            VPN Recommended End-to-End Encryption Required
          </p>
        </div>

        {/* Federal Investigation Petition */}
        <section id="petition" className="mb-12 bg-crisis-red/10 border-2 border-crisis-red rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black font-serif uppercase tracking-tight mb-6">
              Petition: Federal Investigation into NB Corruption
            </h3>
            <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              We, the undersigned citizens of New Brunswick and Canada, demand that Prime Minister Mark Carney and Premier Susan Holt immediately:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-crisis-gold">1. Public Inquiry</h4>
                <p className="text-neutral-300">
                  Launch a federal Public Inquiry into the corporate capture of the New Brunswick government, including the $173.9M travel nurse scandal, NB Power debt crisis, and systematic tax evasion by billionaire families.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-crisis-gold">2. RCMP Investigation</h4>
                <p className="text-neutral-300">
                  Initiate a Royal Canadian Mounted Police Commercial Crime investigation into the corruption, fraud, and collusion between government officials and corporate monopolies.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-crisis-gold">3. Transparency Measures</h4>
                <p className="text-neutral-300">
                  Implement immediate transparency measures including publishing all government contracts, lobbyist meeting records, and corporate tax payment data.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-crisis-gold">4. Protection Measures</h4>
                <p className="text-neutral-300">
                  Establish whistleblower protection programs and anti-retaliation safeguards for government employees who come forward with evidence of corruption.
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg mb-8">
              <p className="text-sm italic">
                This petition represents the collective voice of New Brunswickers who have lost faith in provincial governance and demand federal intervention to restore democracy and accountability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-crisis-red hover:bg-red-700 text-white font-black py-3 px-8 rounded-lg transition-all uppercase tracking-widest text-sm">
                Sign the Petition
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 text-white font-black py-3 px-8 rounded-lg transition-all uppercase tracking-widest text-sm">
                Download PDF Version
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
