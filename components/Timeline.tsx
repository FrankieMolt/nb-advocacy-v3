

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  color?: 'red' | 'gold' | 'neutral';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = '' }: TimelineProps) {
  const dotColors = {
    red: 'bg-crisis-red shadow-[0_0_10px_rgba(179,0,0,0.5)]',
    gold: 'bg-crisis-gold shadow-[0_0_10px_rgba(212,160,23,0.5)]',
    neutral: 'bg-neutral-500',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-crisis-red via-neutral-700 to-transparent" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12 group">
            {/* Dot */}
            <div className={`absolute left-2 top-1.5 w-5 h-5 rounded-full ${dotColors[item.color || 'red']} border-2 border-black group-hover:scale-125 transition-transform`} />
            
            {/* Content */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="text-[10px] font-black text-crisis-red uppercase tracking-[0.3em] mb-2 font-mono">
                {item.date}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-crisis-red transition-colors">
                {item.title}
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
