import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectCardProps {
  eyebrow?: string;
  title: string;
  tags?: string[];
  description: string;
  linkText?: string;
  linkUrl?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageContainerClassName?: string;
}

export function ProjectCard({
  eyebrow = "PROJECT",
  title,
  tags = [],
  description,
  linkText = "VIEW PROJECT ➞",
  linkUrl = "#",
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageContainerClassName = "bg-green-600",
}: ProjectCardProps) {
  const isImageRight = imagePosition === "right";
  
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // If image is on the right, move the sliver to the left (negative x).
  // If image is on the left, move the sliver to the right (positive x).
  const moveX = useTransform(
    scrollYProgress, 
    [0, 1], 
    isImageRight ? [40, -40] : [-40, 40]
  );

  return (
    <article ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-32 last:mb-0 fade-up">
      <div className={`flex flex-col ${isImageRight ? "lg:pr-10" : "lg:order-2 lg:pl-10"}`}>
        <span 
          className="text-[14px] sm:text-[16px] font-bold uppercase tracking-widest text-zinc-600 mb-3 block" 
          style={{fontFamily: "var(--font-inter)"}}
        >
          {eyebrow}
        </span>
        
        <h3 
          className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-zinc-800 leading-tight mb-5" 
          style={{fontFamily: "var(--font-inter)"}}
        >
          {title}
        </h3>
        
        {tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-green-100 text-green-500 text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-zinc-500  text-md sm:text-[18px] font-normal leading-[1.6] mb-8 max-w-md">
          {description}
        </p>
        
        {linkUrl && (
          <div>
            <Link 
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-1.5 hover:text-black transition-colors"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>

      <div className={`flex items-stretch gap-6 lg:gap-12 w-full ${isImageRight ? "" : "lg:order-1 flex-row-reverse"}`}>
        {/* Main Full Image */}
        <div className={`aspect-square relative w-[85%] shrink-0 overflow-hidden transition-transform duration-700 hover:scale-[1.02] ${imageContainerClassName}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* 10-15% Cut-off Sliver */}
        <motion.div 
          style={{ x: moveX }}
          className={`relative w-[15%] shrink-0 overflow-hidden ${imageContainerClassName}`}
        >
          <Image
            src={imageSrc}
            alt={`${imageAlt} partial`}
            fill
            className="object-cover object-[right]"
          />
        </motion.div>
      </div>
    </article>
  );
}
