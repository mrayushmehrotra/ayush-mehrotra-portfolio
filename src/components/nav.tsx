"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface NavItem {
  title: string;
  link: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navImgIndex, setNavImgIndex] = useState(0);
  const navItems: NavItem[] = [
    { title: "GitHub", link: "https://github.com/mrayushmehrotra" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
    },
    { title: "Instagram", link: "https://www.instagram.com/mein.ayush.hoon/" },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
    },
    {
      title: "Email",
      link: "mailto:ayusmehrotra007@gmail.com",
    },
  ];

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "easeInOut", duration: 0.5 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { type: "easeInOut", duration: 0.3 },
    },
  };
  const navImages = [
    "/tanjiro_happy.jpg",
    "/tanjiro_shock.jpg",
    "/question_mark.png",
    "/crying.gif",
  ];

  // Function to cycle through images
  const cycleNavImage = () => {
    setNavImgIndex((prev) => (prev + 1) % navImages.length);
  };

  return (
    <>
      <div className="w-full container py-6   mx-auto flex items-center justify-between sm:px-2 px-4 relative">
        <motion.div
          className="w-[80px] h-[80px]   cursor-help   rounded-sm  relative overflow-hidden"
          onClick={cycleNavImage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            <motion.div
              className="absolute w-[140%] h-[140%] bg-[conic-gradient(#F1C830_60%,#000_40%)] top-[-20%] left-[-20%]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>

          {/* Image container */}
          <div className="absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)]  rounded-sm overflow-hidden z-10">
            <Image
              src={navImages[navImgIndex]}
              alt="navImg"
              height={90}
              width={90}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={34} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-full h-screen bg-zinc-900/95 backdrop-blur-lg z-50"
          >
            <div className="container mx-auto p-6 relative">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8"
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <X size={34} />
              </motion.button>

              <motion.ul className="flex flex-col items-center justify-center h-full    gap-8">
                {navItems.map((item, index) => (
                  <motion.div key={index} className=" w-full p-2   ">
                    <motion.li
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 w-full gap-8  "
                    >
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl    font-[neuka]   md:text-5xl lg:text-8xl font-bold hover:text-emerald-300 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  </motion.div>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
