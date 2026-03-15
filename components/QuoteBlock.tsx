interface QuoteBlockProps {
  quote: string;
  author: string;
  role?: string;
  color?: 'red' | 'gold' | 'green';
  className?: string;
}

export function QuoteBlock({ quote, author, role, color = 'red', className = '' }: QuoteBlockProps) {
  const colorClasses = {
    red: 'border-crisis-red/30 bg-crisis-red/5',
    gold: 'border-crisis-gold/30 bg-crisis-gold/5',
    green: 'border-green-600/30 bg-green-600/5',
  };

  const textColors = {
    red: 'text-crisis-red',
    gold: 'text-crisis-gold',
    green: 'text-green-500',
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-8 rounded-r-2xl ${className}`}>
      <blockquote className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col">
        <span className={`text-sm font-black uppercase tracking-[0.3em] ${textColors[color]}`}>
          — {author}
        </span>
        {role && (
          <span className="text-xs text-neutral-500 mt-1 tracking-wider">
            {role}
          </span>
        )}
      </div>
    </div>
  );
}
