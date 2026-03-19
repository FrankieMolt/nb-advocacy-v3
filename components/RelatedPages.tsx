import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  href: string;
  title: string;
  description: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
}

export function RelatedPages({ pages, title = "Related Investigations" }: RelatedPagesProps) {
  return (
    <section className="my-16">
      <h3 className="text-xl font-black font-serif uppercase tracking-tight text-white mb-6">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-xl p-5 transition-all"
          >
            <h4 className="text-white font-bold text-sm mb-2 group-hover:text-crisis-text transition-colors flex items-center gap-2">
              {page.title}
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">{page.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
