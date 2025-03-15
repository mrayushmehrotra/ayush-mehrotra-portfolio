"use client";
import { motion } from "framer-motion";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-[#222]">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Loading;

