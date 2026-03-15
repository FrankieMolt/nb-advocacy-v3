'use client';

import { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
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
