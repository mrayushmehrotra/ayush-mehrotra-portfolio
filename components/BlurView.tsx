"use client";

import { motion } from "framer-motion";

const BlurView = ({ children }) => {
  return (
    <motion.div
      initial={{
        filter: "blur(20px)",
        y: 10,
        opacity: 0,
      }}
      animate={{
        filter: "blur(0px)",
        y: 0,

        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        staggerChildren: 0.5,
      }}
      className="mt-4"
    >
      {children}
    </motion.div>
  );
};

export default BlurView;
