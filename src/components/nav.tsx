"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import confetti from "canvas-confetti";
interface NavItem {
  title: string;
  link: string;
}

export default function Navbar() {
  const [navImgIndex, setNavImgIndex] = useState(0);
  const navItems: NavItem[] = [
    { title: "Let's Work Together", link: "#footer" },
  ];

  const navImages = [
    "/tanjiro_happy.jpg",
    "/tanjiro_shock.jpg",
    "/question_mark.png",
    "/crying.gif",
  ];

  const cycleNavImage = () => {
    confetti();

    setNavImgIndex((prev) => (prev + 1) % navImages.length);
  };

  return (
    <>
      <div className="w-full container py-2  mx-auto flex items-center justify-between sm:px-2 px-4 relative">
        <motion.div
          className="w-[65px] h-[65px]   cursor-help   rounded-sm  relative overflow-hidden"
          onClick={cycleNavImage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            <motion.div
              className="absolute w-[140%] h-[140%] bg-[conic-gradient(#fff_60%,#000_40%)] top-[-20%] left-[-20%]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>

          <div className="absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)]  rounded-sm overflow-hidden ">
            <Image
              priority
              src={navImages[navImgIndex]}
              alt="navImg"
              height={90}
              width={90}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <ul className="flex  gap-8">
          {navItems.map((item, index) => (
            <motion.div key={index} className=" w-full p-2">
              <motion.li className="mt-8 w-full gap-8  ">
                <a
                  href={item.link}
                  className="md:text-2xl text-md  font-[MyFont] "
                >
                  <button
                    className="px-4 rounded-lg border-2 border-transparent font-extrabold transition-all duration-300 ease-in-out inline-flex justify-center items-center gap-2 relative light:bg-black bg-white light:text-white text-black disabled:opacity-60 hover:opacity-90 h-12 text-lg"
                    aria-expanded="false"
                    aria-haspopup="dialog"
                  >
                    <span className="">
                      <span className="hidden md:inline ">{item.title}</span>
                      <span className="inline md:hidden">Hire Me</span>
                    </span>
                  </button>
                </a>
              </motion.li>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}
