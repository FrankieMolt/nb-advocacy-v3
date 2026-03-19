"use client";

import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Users, FileText, Building, Scale, MapPin, Clock, Headphones, Share2, Truck, Zap, Heart, Shield, Globe, TrendingDown, Activity, Banknote } from "lucide-react";

type IconKey = "warning" | "money" | "users" | "document" | "building" | "scale" | "map" | "clock" | "headset" | "share" | "truck" | "zap" | "heart" | "shield" | "globe" | "trending-down" | "activity" | "dollar-sign" | "banknote" | "alert-triangle";

interface KeyFact {
  icon?: IconKey;
  title: string;
  value?: string;
  description: string;
  source?: string;
}

interface KeyFactsGridProps {
  facts: KeyFact[];
  title?: string;
  className?: string;
}

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  warning: AlertTriangle,
  money: DollarSign,
  users: Users,
  document: FileText,
  building: Building,
  scale: Scale,
  map: MapPin,
  clock: Clock,
  headset: Headphones,
  share: Share2,
  truck: Truck,
  zap: Zap,
  heart: Heart,
  shield: Shield,
  globe: Globe,
  "trending-down": TrendingDown,
  activity: Activity,
  "dollar-sign": DollarSign,
  banknote: Banknote,
  "alert-triangle": AlertTriangle,
};

export function KeyFactsGrid({ facts, title = "Key Facts", className = "" }: KeyFactsGridProps) {
  return (
    <div className={className}>
      <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 border-l-4 border-crisis-red pl-4">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {facts.map((fact, i) => {
          const Icon = fact.icon ? iconMap[fact.icon] : AlertTriangle;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-xl p-6 hover:border-red-900/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-950/50 border border-red-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-1">{fact.title}</h4>
                  {fact.value && (
                    <p className="text-2xl font-black text-red-400 mb-2">{fact.value}</p>
                  )}
                  <p className="text-neutral-400 text-sm leading-relaxed">{fact.description}</p>
                  {fact.source && (
                    <p className="text-neutral-500 text-xs mt-2 italic">Source: {fact.source}</p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
