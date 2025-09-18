"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title: string;
  glowColor?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  glowColor = "#555",
  className = "",
  title,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const blurSize = 96;
  const blurRadius = blurSize / 2;

  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
      className={`relative overflow-hidden mt-4 mb-4 p-6 
              border border-zinc-300 dark:border-zinc-700 
              rounded-lg shadow-sm ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
      {isHovering && (
        <motion.div
          className="absolute w-24 h-24 rounded-full blur-3xl pointer-events-none"
          style={{
            top: mousePos.y - blurRadius,
            backgroundColor: "var(--nav-hover)",
            left: mousePos.x - blurRadius,
          }}
          animate={{
            top: mousePos.y - blurRadius,
            left: mousePos.x - blurRadius,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </section>
  );
};

export const WorkExpSection = ({
  companyTitle,
  points,
  time,
  jobTitle,
  className = "",
}) => {
  return (
    <>
      <section className={` overflow-hidden mt-4 mb-4 p-6  ${className}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl tracking-tighter font-semibold">
            <b>{companyTitle}</b>
          </h1>
          <p className="text-zinc-500">{time}</p>
        </div>
        <span className="text-xl tracking-tighter font-semibold">
          {jobTitle}
        </span>
        {points.map((item, idx) => (
          <ul key={idx}>
            <li className="flex gap-x-2">
              <span className="">•</span>
              <p> {item}</p>
            </li>
            <br />
          </ul>
        ))}
      </section>
    </>
  );
};

export default Section;
