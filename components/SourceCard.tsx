interface SourceCardProps {
  type: 'article' | 'report' | 'pdf' | 'organization' | 'dashboard';
  title: string;
  url: string;
  description?: string;
  date?: string;
  className?: string;
}

export function SourceCard({ type, title, url, description, date, className = '' }: SourceCardProps) {
  const icons = {
    article: '📰',
    report: '📊',
    pdf: '📄',
    organization: '🏛️',
    dashboard: '📈',
  };

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-crisis-red/50 transition-all group ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl shrink-0">{icons[type]}</span>
        <div className="flex-grow">
          <h4 className="text-white font-bold group-hover:text-crisis-red transition-colors mb-1 text-sm leading-tight">
            {title}
          </h4>
          {description && (
            <p className="text-neutral-500 text-xs leading-relaxed mt-2">
              {description}
            </p>
          )}
          {date && (
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-2 inline-block">
              {date}
            </span>
          )}
        </div>
        <span className="text-neutral-600 group-hover:text-crisis-red transition-colors shrink-0 text-lg">→</span>
      </div>
    </a>
  );
}
