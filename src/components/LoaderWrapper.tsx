"use client"; // Required for client-side interactivity

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Wait for all animations before removing loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
          <motion.video
            src="/marvel.mp4"
            autoPlay
            muted
            className="absolute z-[9] w-full h-full object-cover md:w-[100vw] md:h-[100vh]"
            initial={{ y: 0 }} // Offset each video vertically
            animate={{ translateY: "-100%" }} // Move them up sequentially
            transition={{
              type: "spring",
              delay: 2, // Each video moves 2s after the previous
              duration: 7,
              ease: "easeInOut",
            }}
          />
          <motion.video
            src="/marvel.mp4"
            autoPlay
            muted
            className="absolute z-[8] w-full h-full object-cover md:w-[100vw] md:h-[100vh]"
            initial={{ y: 0 }} // Offset each video vertically
            animate={{ translateY: "-100%" }} // Move them up sequentially
            transition={{
              delay: 4, // Each video moves 2s after the previous
              type: "spring",
              duration: 9,
              ease: "easeInOut",
            }}
          />
          <motion.video
            src="/marvel.mp4"
            autoPlay
            muted
            className="absolute z-[7] w-full h-full object-cover md:w-[100vw] md:h-[100vh]"
            initial={{ y: 0 }} // Offset each video vertically
            animate={{ translateY: "-100%" }} // Move them up sequentially
            transition={{
              delay: 5, // Each video moves 2s after the previous
              duration: 9,
              type: "spring",
              ease: "easeInOut",
            }}
          />
        </div>
      )}
      {!isLoading && children} {/* Show content after animation */}
    </>
  );
};

export default LoaderWrapper;
