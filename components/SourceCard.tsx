import { ExternalLink, FileText, Building, Newspaper, Users, Presentation } from "lucide-react";

interface SourceCardProps {
  type: 'article' | 'report' | 'organization' | 'government' | 'pdf' | 'dashboard' | 'video';
  title: string;
  url?: string;
  description?: string;
  date?: string;
  className?: string;
}

const typeConfig: Record<string, {icon: React.ReactNode, label: string, color: string, bg: string, border: string}> = {
  article: {
    icon: <Newspaper size={18} />,
    label: 'Article',
    color: 'text-red-400',
    bg: 'bg-red-950/30',
    border: 'border-red-900/50',
  },
  report: {
    icon: <FileText size={18} />,
    label: 'Report',
    color: 'text-yellow-400',
    bg: 'bg-yellow-950/20',
    border: 'border-yellow-900/50',
  },
  pdf: {
    icon: <FileText size={18} />,
    label: 'PDF Report',
    color: 'text-orange-400',
    bg: 'bg-orange-950/20',
    border: 'border-orange-900/50',
  },
  dashboard: {
    icon: <Presentation size={18} />,
    label: 'Dashboard',
    color: 'text-purple-400',
    bg: 'bg-purple-950/20',
    border: 'border-purple-900/50',
  },
  organization: {
    icon: <Users size={18} />,
    label: 'Organization',
    color: 'text-blue-400',
    bg: 'bg-blue-950/20',
    border: 'border-blue-900/50',
  },
  government: {
    icon: <Building size={18} />,
    label: 'Government',
    color: 'text-green-400',
    bg: 'bg-green-950/20',
    border: 'border-green-900/50',
  },
  video: {
    icon: <FileText size={18} />,
    label: 'Video',
    color: 'text-pink-400',
    bg: 'bg-pink-950/20',
    border: 'border-pink-900/50',
  },
};

export function SourceCard({ type, title, url, description, date, className = '' }: SourceCardProps) {
  const config = typeConfig[type] || typeConfig.article;
  
  const content = (
    <div className={`
      group relative
      bg-neutral-900 border ${config.border} 
      rounded-lg p-4 
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      ${url ? 'cursor-pointer' : ''}
      ${className}
    `}>
      <div className="flex items-start gap-3 mb-3">
        <div className={`${config.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className={`${config.color} text-xs font-bold uppercase tracking-wider mb-1`}>
            {config.label}
            {date && <span className="text-neutral-500 ml-2">{date}</span>}
          </div>
          <h4 className="text-white font-bold text-sm leading-tight group-hover:text-red-400 transition-colors">
            {title}
            {url && <ExternalLink size={12} className="inline ml-1 opacity-50" />}
          </h4>
        </div>
      </div>
      {description && (
        <p className="text-neutral-400 text-xs leading-relaxed">
          {description}
        </p>
      )}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
  
  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }
  
  return content;
}
