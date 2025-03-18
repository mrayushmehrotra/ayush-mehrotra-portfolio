"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div className="h-full p-8 w-full">
      {/* Header Row */}
      <motion.div className="grid grid-cols-3 text-zinc-400 p-2 border-b">
        <p className="text-left px-2">Project</p>
        <p className="text-center">Category</p>
        <p className="text-right px-2">YEAR</p>
      </motion.div>

      {/* Data Rows */}
      {Array(1)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="relative overflow-hidden">
            <motion.hr
              className="bg-white   h-px w-full absolute bottom-0 left-0"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: isHovering ? -200 : 0,
                animationDuration: "3s",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 0.2,
              }}
            />
            <motion.div
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              className={`grid ${isHovering ? "text-black" : "text-white"} ${isHovering ? "ml-4 mr-4" : "ml-0 mr-0"} transition-all duration-75      grid-cols-3 border-b p-2 relative z-10`}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#000",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <p className="text-left px-2">Admin Dashboard</p>
              <p className="text-center">Development</p>
              <p className="text-right px-2">2023</p>
            </motion.div>
          </div>
        ))}
    </motion.div>
  );
};
