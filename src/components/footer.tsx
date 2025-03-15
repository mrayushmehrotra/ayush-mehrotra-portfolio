"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="mt-8 flex bg-[#2E2E2E] h-[40vh] w-full p-8 fixed bottom-0 flex-col sm:items-center gap-y-4 sm:flex-col md:flex-row md:justify-around lg:justify-around"
      style={{ zIndex: 1 }}
      initial={{ y: "100%" }} // Start off-screen (below the viewport)
      whileInView={{ y: 0 }} // Animate to its natural position when in view
      viewport={{ once: true }} // Only animate once
      transition={{ type: "spring", stiffness: 50, damping: 10 }} // Spring animation
    >
      <motion.h1
        className="text-[140px] text-[#D6CFE1]"
        initial={{ opacity: 0, scale: 0.8 }} // Start invisible and slightly scaled down
        whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale up when in view
        viewport={{ once: true }} // Only animate once
        transition={{ delay: 0.5, duration: 0.8 }} // Delay and duration for the animation
      >
        Hello world
      </motion.h1>
    </motion.footer>
  );
};
