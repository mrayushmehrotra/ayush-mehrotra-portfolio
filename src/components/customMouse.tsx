"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface CustomMouseProps {
  colorInTailwind?: string;
  innerText?: string;
  scale?: number;
}

const CustomMouse: React.FC<CustomMouseProps> = ({
  colorInTailwind = "bg-zinc-400",
  innerText = "",
  scale = 1,
}) => {
  const [mouseState, setMouseState] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseState({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mouseState.x - 15 + "px",
        y: mouseState.y - 15 + "px",
        scale: scale,
      }}
      transition={{
        ease: "backOut",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <div
        className={`h-[30px] w-[30px] ${colorInTailwind} rounded-full flex items-center justify-center`}
      >
        <p className="text-xs">{innerText}</p>
      </div>
    </motion.div>
  );
};

export default CustomMouse;
