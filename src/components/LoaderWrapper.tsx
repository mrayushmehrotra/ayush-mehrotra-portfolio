"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

export const CutterText = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
            ease: "easeInOut",
          }}
          className="inline-block font-extrabold text-8xl  "
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const CutterText = ({ text }: { text: string }) => {
    return (
      <div className="inline-flex overflow-hidden">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: isLoading ? index * 0.06 : (text.length - index) * 0.02,
              ease: "easeInOut",
            }}
            className="inline-block font-extrabold text-8xl  "
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-white grid grid-cols-9"
          >
            <div className="text-black overflow-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[neuka] font-extrabold md:text-8xl text-3xl uppercase text-center">
              <motion.h1>
                <CutterText text="Ayush Mehrotra" />
              </motion.h1>
            </div>
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ y: "-100vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100vh" }}
                  transition={{
                    duration: 3.2,
                    ease: "easeInOut",
                    delay: isLoading ? index * 0.2 : (6 - index) * 0.1,
                  }}
                  className="h-screen bg-black flex items-center justify-center"
                ></motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && children}
    </>
  );
};

export default LoaderWrapper;
