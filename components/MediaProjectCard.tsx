"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "lib/cn";
import { Play } from "lucide-react";
import Link from "next/link";

interface MediaProjectCardProps {
  title: string;
  period: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  className?: string;
  initialVolume?: number; // Volume from 0 to 1
  url: string;
}

const MediaProjectCard: React.FC<MediaProjectCardProps> = ({
  title,
  period,
  description,
  videoUrl,
  thumbnailUrl,
  className,
  initialVolume = 0.5, // Default to 50% as requested
  url,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = initialVolume;
    }
  }, [initialVolume, videoUrl]);

  return (
    <div
      draggable={false}
      className={cn(
        "flex items-center gap-5 mb-8 p-3 rounded-xl bg-white shadow-[0_0_15px_rgba(55,65,81,0.1)] w-fit",
        className,
      )}
    >
      {/* Left Accent Line - Minimalist and elegant */}
      <div className="w-[1px] bg-zinc-200 dark:bg-zinc-800 shrink-0 self-stretch group-hover:bg-zinc-400 dark:group-hover:bg-zinc-600 transition-colors" />

      <div className="flex-1 space-y-5">
        {/* Header Section with precise typography */}
        <div className="space-y-2 pt-1">
          <Link target="_blank" href={url}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-xl underline font-bold tracking-tight text-zinc-900 dark:text-zinc-50 decoration-zinc-400 dark:decoration-zinc-400 decoration-3 hover:decoration-zinc-950 dark:hover:decoration-zinc-300 transition-all cursor-pointer">
                {title}
              </h3>
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 tracking-tight">
                {period}
              </span>
            </div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[95%] font-medium tracking-tight">
              {description}
            </p>
          </Link>
        </div>

        {/* Video Container - Only rendered if videoUrl is present */}
        {videoUrl && (
          <div className="relative aspect-[16/9] w-full max-w-2xl rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#0a0a0a] shadow-sm group-hover:shadow-2xl group-hover:shadow-black/10 transition-all duration-500">
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              className="w-full h-full object-cover"
              poster={thumbnailUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaProjectCard;
