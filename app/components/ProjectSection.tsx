"use client";
import { useState } from "react";
import Image from "next/image";

const ProjectSection = ({ img, title, description, video, techStack }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative p-4 bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        {/* Image as fallback */}
        <Image
          src={img}
          alt={title}
          fill
          className={`object-cover rounded-2xl transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Video */}
        {video && (
          <video
            src={video}
            autoPlay={hovered}
            muted
            loop
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl pointer-events-none transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
        <p className="text-md">
          {" "}
          {techStack.map((item) => (
            <span>{item}</span>
          ))}{" "}
        </p>
        <ul className="text-zinc-400 list-disc ml-5 space-y-1">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSection;
