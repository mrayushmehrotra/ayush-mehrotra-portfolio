"use client"; // Mark this component as a Client Component

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export default function Loading() {
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    // Animate the count from 0 to 100
    controls.start({
      innerHTML: 100,
      transition: { duration: 2, ease: "circOut" },
    });
  }, [controls]);

  return (
    <div className="text-center">
      <motion.pre
        id="count"
        className="text-[64px] text-[#4ff0b7]"
        initial={{ innerHTML: 0 }} // Start from 0
        animate={controls} // Use the animation controls
        onUpdate={(latest) => {
          // Round the value and update the innerHTML
          if (latest.innerHTML !== undefined) {
            latest.innerHTML = Math.round(latest.innerHTML);
          }
        }}
      >
        0
      </motion.pre>
    </div>
  );
}
