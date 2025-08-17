"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <body className="antialiased relative min-h-fit    overflow-x-hidden  ">
      {/* WHITE BLUR GLOW FOLLOWING MOUSE */}
      <motion.div
        className=" pointer-events-none fixed z-0 rounded-full"
        animate={{
          left: mouse.x - 300,
          top: mouse.y - 300,
        }}
        style={{
          width: 600,
          height: 600,
          overflowX: "hidden",
          background: "radial-gradient(circle, crimson, transparent 60%)",
          filter: "blur(150px)",
        }}
      />

      {/* FULLSCREEN GRID OVERLAY */}
      <div className="absolute inset-0 z-10 scale-105  ">
        <Grid />
      </div>

      {/* MAIN CONTENT ON TOP */}
      <main className="relative z-20 flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-xl mx-auto">
        {children}
      </main>
    </body>
  );
}

function Grid() {
  const rows = 20; // adjust for density
  const cols = 35;

  return (
    <div
      className="grid gap-[2px] w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="bg-black dark:bg-white rounded-sm border border-zinc-700/20 dark:border-zinc-300/20"
        />
      ))}
    </div>
  );
}
