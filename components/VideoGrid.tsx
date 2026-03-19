import { YouTubeEmbed } from './YouTubeEmbed';

interface VideoGridProps {
  videos: Array<{
    videoId: string;
    title: string;
    caption?: string;
  }>;
  columns?: 1 | 2;
  className?: string;
}

export function VideoGrid({ videos, columns = 1, className = '' }: VideoGridProps) {
  const gridClass = columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid ${gridClass} gap-8 ${className}`}>
      {videos.map((video, index) => (
        <div key={index}>
          <YouTubeEmbed videoId={video.videoId} title={video.title} />
          {video.caption && (
            <p className="text-center text-sm text-white mt-4 italic">
              {video.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
