"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Ensure correct import

interface CustomMouseProps {
  colorInTailwind?: string;
  innerText?: string;
  textClassName?: string;
  scale?: number;
}

const CustomMouse: React.FC<CustomMouseProps> = ({
  colorInTailwind = "bg-zinc-400",
  innerText = "",
  textClassName = "",
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
        x: mouseState.x - 15 + "px", // Center the mouse circle
        y: mouseState.y - 15 + "px",
      }}
      transition={{
        ease: "backOut",
        duration: 0.3,
      }}
      style={{
        scale: scale,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
   
    >
      <div
        className={`h-[30px] z-[0]  w-[30px] ${colorInTailwind} rounded-full flex items-center justify-center transition-all duration-300`}
      >
        <p className={`${textClassName}  `}>{innerText}</p>{" "}
        {/* Show text only when hovering */}
      </div>
    </motion.div>
  );
};

export default CustomMouse;
