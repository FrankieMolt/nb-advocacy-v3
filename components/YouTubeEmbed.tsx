'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          {!imgError && (
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              unoptimized
            />
          )}
          {imgError && (
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <p className="text-neutral-400 text-sm px-4 text-center">{title}</p>
            </div>
          )}
          <button
            onClick={() => setLoaded(true)}
            className="relative z-10 w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl"
            aria-label={`Play: ${title}`}
          >
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
      {loaded && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
