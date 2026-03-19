import { AlertCircle, Clock, User, ShieldAlert } from "lucide-react";

interface CaseStudyProps {
  type: "fatality" | "fraud" | "environmental";
  date: string;
  title: string;
  location: string;
  content: string;
  status: string;
}

export function CaseStudy({ type, date, title, location, content, status }: CaseStudyProps) {
  const icons = {
    fatality: <User className="text-crisis-text" size={20} />,
    fraud: <ShieldAlert className="text-crisis-gold" size={20} />,
    environmental: <AlertCircle className="text-green-600" size={20} />,
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all shadow-xl group">
      <div className="p-1 bg-neutral-800 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          {icons[type]}
          <span className="text-sm font-black uppercase tracking-tighter text-white">{type} REPORT {'//'} {date}</span>
        </div>
        <span className="text-sm font-bold text-crisis-text uppercase">{status}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-crisis-text transition-colors">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-white mb-4 font-mono uppercase tracking-widest">
          <Clock size={12} /> {location}
        </div>
        <p className="text-white text-sm leading-relaxed mb-4 italic border-l-2 border-neutral-800 pl-4">
          &quot;{content}&quot;
        </p>
      </div>
    </div>
  );
}
