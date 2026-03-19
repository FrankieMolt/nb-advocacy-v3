"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white py-20 selection:bg-crisis-red selection:text-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AlertTriangle
          className="text-crisis-text mb-8 animate-pulse"
          size={80}
          aria-hidden="true"
        />
        <h1 className="text-4xl md:text-5xl font-black font-serif text-white mb-6 uppercase tracking-tighter italic">
          System Error
        </h1>
        <p className="text-xl text-neutral-400 mb-12 max-w-lg leading-relaxed">
          An unexpected error occurred while processing your request. The
          intelligence network may be experiencing interference.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={reset}
            className="bg-crisis-red hover:bg-red-700 text-white font-black py-4 px-12 rounded-xl transition-all shadow-lg hover:scale-105 uppercase tracking-widest text-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-black py-4 px-12 rounded-xl transition-all uppercase tracking-widest text-sm"
            aria-label="Return to homepage"
          >
            Return to Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
