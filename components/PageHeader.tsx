import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  quote?: string;
}

export function PageHeader({ icon: Icon, title, quote }: PageHeaderProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]"
          aria-hidden="true"
        >
          <Icon size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-white uppercase">
          {title}
        </h1>
      </div>
      {quote && (
        <div className="bg-neutral-900 border-l-4 border-crisis-red p-10 mb-12 rounded-r-lg shadow-xl relative overflow-hidden">
          <p className="text-2xl font-serif italic leading-relaxed text-white relative z-10">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      )}
    </>
  );
}
