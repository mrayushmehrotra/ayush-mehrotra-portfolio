import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ScrollingText = () => {
  const [rotate, setRotate] = useState(0);

  const items = [
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
    { text: "Tech Stack", image: "/arrow-br.svg" },
  ];

  // Add event listener for wheel event
  useEffect(() => {
    const handleWheel = (dets: WheelEvent) => {
      if (dets.deltaY > 0) {
        setRotate(180); // Rotate arrow and change scroll direction
      } else {
        setRotate(0); // Reset rotation and scroll direction
      }
    };

    window.addEventListener("wheel", handleWheel);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-emerald-400 w-full p-4 flex flex-nowrap  flex-shrink-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center mx-9 gap-x-8 justify-center whitespace-nowrap"
          initial={{ transform: "translateX(-100%)" }} // Start from the middle (50%)
          animate={{
            transform: rotate > 0 ? "translateX(-200%)" : "translateX(0%)",
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <h1 className="mb-8 font-[Neuka] text-4xl md:text-6xl lg:text-8xl text-center font-semibold tracking-tighter text-black">
            {item.text}
          </h1>
          <motion.div
            className="h-[64px] w-[64px]"
            animate={{ rotate: rotate }} // Rotate the arrow
            transition={{ type: "spring", stiffness: 100 }} // Smooth rotation
          >
            <Image src={item.image} height={64} width={64} alt="arrow" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingText;
