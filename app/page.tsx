"use client";

import { motion } from "framer-motion";
import { Activity, DollarSign, ArrowRight, ShieldAlert, Zap, FileSearch, AlertTriangle, Ban } from "lucide-react";
import Link from "next/link";
import { InvestigationsFeed } from "@/components/InvestigationsFeed";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-crisis-red selection:text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80" 
            alt="New Brunswick industrial landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-block bg-crisis-red text-white text-[10px] font-black uppercase tracking-[0.5em] px-6 py-3 mb-8 rounded-sm shadow-[0_0_40px_rgba(179,0,0,0.3)] border border-white/10">
            Provincial Intelligence Protocol {/* // Active */}
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-[10rem] font-black font-serif leading-[0.85] mb-8 tracking-tighter uppercase italic">
            The <span className="text-crisis-red not-italic underline decoration-8 underline-offset-[16px]">Cost</span> <br/>of Silence
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            New Brunswick is an extraction zone for billionaire dynasties. Behind the {"\""}balanced budgets{"\""} are shuttered ERs and hungry children. We are the <strong className="text-white">Investigative Hub</strong> for a captured province.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#crises" className="bg-crisis-red hover:bg-red-700 text-white font-black py-5 px-12 rounded-lg flex items-center justify-center gap-3 transition-all shadow-2xl hover:scale-105 uppercase tracking-widest text-sm border border-white/10">
              Access the Files <FileSearch size={20} />
            </Link>
            <Link href="/take-action" className="bg-transparent border-2 border-white/10 hover:border-white/40 hover:bg-neutral-900 text-white font-black py-5 px-12 rounded-lg transition-all uppercase tracking-widest text-sm">
              Mobilize
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Live Metrics Ticker */}
      <div className="bg-neutral-900 border-y border-neutral-800 py-4 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-marquee gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
              <span>{/* PROJECTED DEFICIT */}$1.33B</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* CHILD POVERTY (CAMPBELLTON) */}41.2%</span>
              <span>{/* CITIZENS WITHOUT DOCTORS */}238,000+</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* NB POWER DEBT */}$5.9B</span>
              <span>{/* TAX REBATES TO OLIGARCHY */}$700K+</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* HST */}15% (HIGHEST IN CANADA)</span>
              <span>{/* ER WALKOUT RATE */}12.9%</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* UNHOUSED */}1,500+</span>
              <span>{/* PROJECTED DEFICIT */}$1.33B</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* CHILD POVERTY (CAMPBELLTON) */}41.2%</span>
              <span>{/* CITIZENS WITHOUT DOCTORS */}238,000+</span>
              <span className="text-crisis-red underline italic underline-offset-4">{/* NB POWER DEBT */}$5.9B</span>
              <span>{/* TAX REBATES TO OLIGARCHY */}$700K+</span>
            </div>
      </div>

      <InvestigationsFeed />

      {/* Pillars Section */}
      <section id="crises" className="py-32 bg-black relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 uppercase tracking-tighter leading-tight italic">The Pillars of <br/><span className="text-crisis-red">Extraction</span></h2>
              <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-12 max-w-lg">
                The capture of New Brunswick is not a conspiracy; it is a business model. We have documented the structural mechanisms used to transfer public wealth into private hands.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-crisis-gold bg-crisis-gold/10 w-fit px-4 py-2 rounded-full border border-crisis-gold/20">
                  <ShieldAlert size={14} /> Intelligence Status: Confirmed
                </div>
              </div>
            </div>

            <div className="space-y-24">
              {/* Healthcare */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <Activity className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">Healthcare Collapse</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  2,199 patients pronounced deceased upon arrival at ERs since 2020. 40% of beds occupied by ALC seniors. The government calls it {'"'}efficiency{'"'}; we call it <strong>abandonment</strong>.
                </p>
                <Link href="/healthcare" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Oligarchy */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <DollarSign className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">The Oligarchy</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  A vertical monopoly controlling land, media, and energy. $30 Billion in private wealth generated by the extraction of New Brunswick{"'"}s natural heritage.
                </p>
                <Link href="/oligarchy" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Economy */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">Economic Fraud</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  $5.9 Billion in utility debt. $9 Million per day in replacement power costs. 1 in 4 families live in energy poverty while industrial grants explode.
                </p>
                <Link href="/economy" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Environmental */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">Ecological Failure</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  96% collapse of Miramichi Salmon. Systemic glyphosate saturation. Irving intimidation of conservation groups. Wolastoqey land title claim against reckless extraction. The data is irrefutable.
                </p>
                <Link href="/environment" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Intimidation */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <Ban className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">Intimidation & Censorship</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Cartoonist fired for drawing Trump. Salmon conservationists threatened with river access revocation. Academics purged for glyphosate criticism. Election laws broken with impunity. Irving controls the message.
                </p>
                <Link href="/intimidation" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Corruption */}
              <div className="group border-t border-neutral-900 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldAlert className="text-crisis-red group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">Systemic Corruption</h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  $700K embezzlement from the Lt. Governor. $481K stolen by the Deputy AG. $173.9M travel nurse scandal hidden behind &quot;litigation privilege.&quot; The system is the crime.
                </p>
                <Link href="/corruption" className="text-sm font-black uppercase tracking-[0.3em] text-crisis-red hover:text-white transition-colors flex items-center gap-2 group/link">
                  Open Dossier <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-neutral-900 border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-crisis-red/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tighter mb-8 italic">Break the Media Monopoly.</h2>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            The corporate dynasties rely on your silence. Every time this intelligence is shared, their enclosure weakens. <strong>It is time to take back New Brunswick.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/take-action" className="bg-crisis-red hover:bg-red-700 text-white font-black py-5 px-16 rounded-xl text-xl transition-all shadow-2xl hover:scale-105 uppercase tracking-[0.2em]">
              Mobilize
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
