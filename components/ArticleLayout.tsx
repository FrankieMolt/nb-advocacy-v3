import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import { ShareButtons } from "./ShareButtons";

interface ArticleLayoutProps {
  title: string;
  date: string;
  author?: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl?: string;
  sources: { title: string; url: string }[];
  children: React.ReactNode;
}

export function ArticleLayout({ title, date, author = "Reform NB Investigative Team", image, imageAlt, imageCredit, imageCreditUrl, sources, children }: ArticleLayoutProps) {
  return (
    <article className="min-h-screen bg-neutral-950 text-white">
      {/* Back link */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-white hover:text-white transition-colors flex items-center gap-2 text-sm">
            <ArrowLeft size={16} /> Back to Reform NB
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white">
              <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
              <span className="flex items-center gap-1"><User size={14} /> {author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image credit */}
      <div className="container mx-auto max-w-4xl px-6">
        <p className="text-sm text-white mt-2">
          Photo: {imageCreditUrl ? <a href={imageCreditUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{imageCredit}</a> : imageCredit}
        </p>
      </div>

      {/* Share buttons */}
      <div className="container mx-auto max-w-4xl px-6 mt-4">
        <ShareButtons title={title} />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>

        {/* Sources */}
        {sources.length > 0 && (
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ExternalLink size={18} /> Sources & Further Reading
            </h3>
            <ul className="space-y-2">
              {sources.map((source, i) => (
                <li key={i}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-crisis-text hover:text-white underline transition-colors text-sm">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
