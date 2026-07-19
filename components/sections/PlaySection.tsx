"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "../resources/content";

export default function PlaySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="play" className="relative w-full min-h-screen bg-[#FDFDFD] py-32 flex flex-col justify-center overflow-hidden">
      
      {/* Decorative text from screenshot */}
      <div className="absolute top-8 left-8 z-30">
        <span className="text-[10px] tracking-widest text-black/50 uppercase">Image Tiles Menu Animation ↗</span>
      </div>
      <div className="absolute top-8 right-8 z-30 max-w-[200px] text-right hidden md:block">
        <p className="text-[10px] tracking-widest leading-relaxed text-black/50 uppercase">
          With Readymag, nothing stands between your ideas and the final result ↗
        </p>
      </div>
      <div className="absolute bottom-8 left-8 z-30">
        <span className="text-[10px] tracking-widest text-black/50 uppercase border-b border-black/50 pb-1 cursor-pointer">All Demos</span>
      </div>

      {/* Background Images */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {projects.map((project, index) => (
          <div 
            key={`bg-${index}`} 
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: hoveredIndex === index ? 1 : 0 }}
          >
            {/* Image 1 - Left */}
            <div 
              className="absolute top-[20%] left-[5%] w-[35vw] max-w-[450px] aspect-[4/3] shadow-2xl transition-transform duration-[2s] ease-out" 
              style={{ transform: hoveredIndex === index ? 'scale(1)' : 'scale(1.05)' }}
            >
              <Image src={`/${project.image}`} fill alt={`${project.title} 1`} className="object-cover" />
            </div>
            {/* Image 2 - Top Right */}
            <div 
              className="absolute top-[10%] right-[5%] w-[25vw] max-w-[350px] aspect-video shadow-2xl transition-transform duration-[2s] ease-out delay-75" 
              style={{ transform: hoveredIndex === index ? 'scale(1)' : 'scale(1.05)' }}
            >
              <Image src={`/${project.image}`} fill alt={`${project.title} 2`} className="object-cover object-left-top" />
            </div>
            {/* Image 3 - Bottom Right */}
            <div 
              className="absolute bottom-[15%] right-[25%] w-[20vw] max-w-[300px] aspect-[3/4] shadow-2xl transition-transform duration-[2s] ease-out delay-150" 
              style={{ transform: hoveredIndex === index ? 'scale(1)' : 'scale(1.05)' }}
            >
              <Image src={`/${project.image}`} fill alt={`${project.title} 3`} className="object-cover object-bottom" />
            </div>
          </div>
        ))}
        {/* Light overlay to make black text readable even over images */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] transition-opacity duration-700" style={{ opacity: hoveredIndex !== null ? 1 : 0 }} />
      </div>

      {/* Projects List Container */}
      <div className="relative z-10 w-full flex flex-col">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <a
              key={project.title}
              href={project.link || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full border-t border-black/5 flex items-center justify-center py-4 md:py-6 lg:py-8 cursor-pointer transition-colors duration-500 last:border-b"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Title */}
              <h2 
                className="font-cormorant transition-all duration-500 z-20 text-center"
                style={{ 
                  fontSize: "clamp(3rem, 10vw, 9rem)", 
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                  color: isHovered ? "#000000" : "rgba(0,0,0,0.15)",
                }}
              >
                {project.title}
              </h2>
              
              {/* Description Reveal on Hover */}
              <div 
                className="hidden md:block absolute left-[55%] md:left-[60%] lg:left-[55%] top-1/2 -translate-y-1/2 max-w-xs transition-all duration-500 z-20 pointer-events-none"
                style={{ 
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(-20px)"
                }}
              >
                <p className="text-[9px] md:text-[10px] tracking-[0.2em] leading-relaxed uppercase text-black/90 font-medium">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
