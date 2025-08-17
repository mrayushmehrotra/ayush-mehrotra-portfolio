"use client";

import { motion } from "framer-motion";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const text = `© ${year} / Ayush Mehrotra • `.repeat(10); // repeat to fill width

  return (
    <footer className="relative w-full overflow-hidden border-t border-neutral-700 py-4 bg-black">
      <motion.div
        className="flex whitespace-nowrap text-neutral-600 dark:text-neutral-300"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10, // speed (lower = faster)
          ease: "linear",
        }}
      >
        <span className="mr-8">{text}</span>
      </motion.div>
    </footer>
  );
}
