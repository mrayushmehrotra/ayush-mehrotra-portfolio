"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({ url, img, title, description, video, techStack }) => {
  const [hovered, setHovered] = useState(false);
  const [stackHover, setStackHover] = useState(null); // track which icon is hovered

  return (
    <div
      className="group relative p-4 bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link target="_blank" href={url}>
        {/* Image / Video */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src={img}
            alt={title}
            fill
            className={`object-cover rounded-2xl transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {video && (
            <video
              src={video}
              autoPlay
              muted
              loop
              preload="auto"
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl pointer-events-none transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>

          {/* Tech stack icons with tooltips */}
          <div className="flex flex-wrap gap-4 mt-2 relative">
            {techStack.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setStackHover(idx)}
                onMouseLeave={() => setStackHover(null)}
              >
                {/* Tooltip */}
                {stackHover === idx && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded z-50 whitespace-nowrap">
                    {item.split(".")[0]}
                  </span>
                )}

                {/* Icon */}
                <div className="absolute bg-white   w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={`/${item}`}
                    alt={item}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <br />
          {/* Description */}
          <ul className="text-zinc-400 mt-4 list-disc ml-5 space-y-1">
            {description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ProjectSection;
