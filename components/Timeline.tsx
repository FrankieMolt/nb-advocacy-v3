"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  color?: "red" | "gold" | "neutral";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 hover:border-red-900/50 transition-colors"
        >
          <div className="flex items-start gap-4">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider whitespace-nowrap bg-red-950/50 px-2 py-1 rounded">
              {item.date}
            </span>
            <div>
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              {item.description && (
                <p className="text-neutral-400 text-sm">{item.description}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
