import React from 'react';
import { trackEvent } from '../../../utils/analytics';

interface VideoDemoProps {
  videoLink?: string;
}

export default function VideoDemo({ videoLink }: VideoDemoProps) {
  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const embedUrl = videoLink ? getYoutubeEmbedUrl(videoLink) : null;

  React.useEffect(() => {
    if (embedUrl) {
      trackEvent('video_view', 'engagement', 'Video Demo');
    }
  }, [embedUrl]);

  return (
    <div className="mt-16 mb-8">
      <h2 className="text-2xl font-display font-semibold mb-6">Video Demo</h2>
      
      {embedUrl ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="Video Demo"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          <div className="text-center p-6">
            <svg className="w-12 h-12 mx-auto text-zinc-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="text-xl font-medium text-zinc-600 dark:text-zinc-300">Video Demo Coming Soon</h3>
          </div>
        </div>
      )}
    </div>
  );
}
