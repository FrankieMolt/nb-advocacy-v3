import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white py-20 selection:bg-crisis-red selection:text-white">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AlertTriangle
          className="text-crisis-text mb-8 animate-pulse"
          size={80}
          aria-hidden="true"
        />
        <h1 className="text-8xl md:text-9xl font-black font-serif text-white mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-black font-serif text-white mb-6 uppercase tracking-tighter italic">
          File Not Found
        </h2>
        <p className="text-xl text-neutral-400 mb-12 max-w-lg leading-relaxed">
          The intelligence you are looking for has either been redacted, moved,
          or does not exist in our archive.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/"
            className="bg-crisis-red hover:bg-red-700 text-white font-black py-4 px-12 rounded-xl transition-all shadow-lg hover:scale-105 uppercase tracking-widest text-sm"
            aria-label="Return to homepage"
          >
            Return to Hub
          </Link>
          <Link
            href="/sources"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-black py-4 px-12 rounded-xl transition-all uppercase tracking-widest text-sm"
            aria-label="Browse intelligence archive"
          >
            Browse Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
