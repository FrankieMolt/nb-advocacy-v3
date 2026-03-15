interface DataCardProps {
  value: string;
  label: string;
  sublabel?: string;
  color?: 'red' | 'gold' | 'neutral';
  className?: string;
}

export function DataCard({ value, label, sublabel, color = 'red', className = '' }: DataCardProps) {
  const colorClasses = {
    red: 'border-crisis-red/30 hover:border-crisis-red text-crisis-red',
    gold: 'border-crisis-gold/30 hover:border-crisis-gold text-crisis-gold',
    neutral: 'border-neutral-700 hover:border-neutral-500 text-white',
  };

  return (
    <div className={`bg-neutral-900 border ${colorClasses[color]} rounded-2xl p-8 transition-all hover:-translate-y-1 shadow-xl group ${className}`}>
      <div className="text-5xl md:text-6xl font-black tracking-tighter mb-3 group-hover:scale-105 transition-transform origin-left">
        {value}
      </div>
      <div className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 mb-1">
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-neutral-600 mt-2 leading-relaxed">
          {sublabel}
        </div>
      )}
    </div>
  );
}
