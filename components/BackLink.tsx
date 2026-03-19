import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href?: string;
  label?: string;
}

export function BackLink({ href = "/", label = "Back to Hub" }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-white hover:text-white mb-12 transition-colors group text-sm font-black uppercase tracking-widest"
      aria-label={`Navigate ${label.toLowerCase()}`}
    >
      <ArrowLeft
        size={16}
        className="group-hover:-translate-x-1 transition-transform"
      />
      {label}
    </Link>
  );
}
