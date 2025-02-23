"use client"; // Required for client-side interactivity

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface LoaderWrapperProps {
  children: React.ReactNode
}

const LoaderWrapper = ({ children }:LoaderWrapperProps) => {
  const [count, setCount] = useState(0); // Track loading progress
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const animateCount = async () => {
      for (let i = 0; i <= 100; i += 2) {
        await controls.start({ opacity: 1, transition: { duration: 0.001 } });
        setCount(i); // Update progress
        await controls.start({ opacity: 0.8, transition: { duration: 0.001 } });
        if (i === 100) {
          // Animate the loader sliding up
          await controls.start({
            y: "-100vh", // Slide up off the screen
            transition: { duration: 0.5, ease: "easeInOut" },
          });
          setIsLoading(false); // Hide the loader
        }
      }
    };

    animateCount(); // Start the animation
  }, [controls]);

  return (
    <>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black"
          animate={controls}
        >
          <motion.div className="text-[48px] font-semibold text-[#4ff0b7]">
            {count}
          </motion.div>
        </motion.div>
      )}
      {!isLoading && children} {/* Render children when loading is complete */}
    </>
  );
};

export default LoaderWrapper;