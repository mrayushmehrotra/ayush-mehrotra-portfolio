"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced duration since the animation is simpler now

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed scale-[200%]    inset-0 z-50 bg-white overflow-hidden"
          >
            <motion.svg
              viewBox="0 0 1335 1081"
              className="w-full h-full   "
              initial={{ y: 0 }}
              animate={{ y: "-1000vh" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <path
                d="M0 0 L1335 0 L1335 1081 Q667.5 881 0 1081 L0 0"
                fill="black"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && children}
    </>
  );
};

export default LoaderWrapper;
