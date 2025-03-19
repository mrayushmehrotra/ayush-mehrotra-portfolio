"use client"; // Required for client-side interactivity

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white grid grid-cols-9">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: "-100vh" }} // Start from bottom
                animate={{ y: 0 }} // Move to top
                transition={{
                  duration: 0.8, // Animation duration
                  ease: "easeInOut",
                  delay: index * 0.1, // Stagger effect
                }}
                className="h-screen bg-black flex items-center justify-center"
              >
                <div className="text-white text-lg font-semibold"></div>
              </motion.div>
            ))}
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default LoaderWrapper;
