import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CTASectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CTASection({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <div className="mt-24 bg-neutral-900 border border-neutral-800 p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
      <Icon
        className="text-crisis-gold mx-auto mb-8 animate-pulse"
        size={80}
        aria-hidden="true"
      />
      <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">
        {title}
      </h3>
      <p className="text-xl text-white mb-10 max-w-2xl mx-auto font-light italic leading-relaxed">
        &ldquo;{description}&rdquo;
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href={buttonHref}
          className="bg-crisis-red hover:bg-red-700 text-white font-black py-5 px-16 rounded-xl text-xl transition-all shadow-lg hover:scale-105 uppercase tracking-[0.3em] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-neutral-900"
          aria-label={buttonText}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
