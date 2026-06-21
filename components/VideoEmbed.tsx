"use client";

import { useState } from "react";

export default function VideoEmbed({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string;
  title: string;
  thumbnail?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const thumb = thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      {loaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-urvar-green"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors shadow-lg">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-urvar-dark" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
