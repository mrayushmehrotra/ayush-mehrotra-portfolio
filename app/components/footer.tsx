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
      className="inline mx-2"
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

  // Repeat as an array of React nodes
  const items = Array.from({ length: 20 }).map((_, i) => (
    <span key={i} className="flex items-center mr-6">
      © {year} / Ayush Mehrotra
      <ArrowIcon />
    </span>
  ));

  return (
    <footer className="hidden md:flex relative w-full overflow-hidden border-t border-neutral-700 py-4  ">
      <motion.div
        className="flex whitespace-nowrap text-neutral-600 dark:text-neutral-300"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {items}
      </motion.div>
    </footer>
  );
}
