"use client";

import TechStack from "@/components/techstack";
import { BlogData } from "./blogs/utils";
import { MarioAnimation } from "@/components/marioAnimation";
import { Typewriter } from "react-simple-typewriter";
import HoverSvg from "@/components/HoverSVG";
import {motion} from "motion/react"
export default function Home() {
 

  const typerEffect = () => {
    return (
      <div>
        <Typewriter
          words={[
            "FRONTEND ENGINEER",
            "BACKEND ENGINEER",
            "FULL STACK ENGINEER",
            "AND A HUMAN TOO :)",
          ]}
          loop={true} // Enable looping
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
        delayChildren: 0.2, // Initial delay before animations start
      },
    },
  };
  
  const childVariants = {
    hidden: { y: -20, opacity: 0 }, // Initial state for each line
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Use spring animation for bounciness
        stiffness: 100, // Controls the spring stiffness
        damping: 10, // Controls the spring damping
        ease: "easeOut", // Smooth easing function
        duration: 0.5, // Duration of the animation
      },
    },
  };
  


  return (
    <>
        <section className="mt-8 w-full">
          <hr />
          <br />
          <div className="flex gap-y-5 h-[60vh] p-4 flex-col sm:flex-col lg:flex-row">
            <div className="w-full flex flex-col lg:w-[40%] leading-[0.7]">
              <div className="flex flex-col lg:flex-col lg:items-start lg:justify-between">
                <motion.h1    transition={{ duration: 2 }} initial={{ x: -100 }}  animate={{
                  x:10
                }}  className="mb-4 text-center text-6xl md:text-[120px] font-semibold tracking-tighter">
                  Ayush
                </motion.h1>

                <motion.h1
                initial={{ x: -100}}
                  animate={{
                    x: 50,
                  }}
                  transition={{ duration: 2 }}
                  className="lg:mb-8 text-6xl md:text-[120px] font-semibold tracking-tighter"
                >
                  Mehrotra
                </motion.h1>
              </div>
            </div>
            <div className="w-full text-center lg:w-[60%] lg:ml-5">
            <motion.div
      className="mb-4 uppercase text-start lg:text-5xl text-[1.2em]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex text-center" variants={childVariants}>
        <span>I&apos;m a &nbsp;</span>
        <span className="font-bold text-[#4ff0b7]">{typerEffect()}</span>
      </motion.div>

      <motion.p variants={childVariants}>
        with expertise in JavaScript and its frameworks.
      </motion.p>

      <motion.p variants={childVariants}>
        I love Linux because it enhances productivity.
      </motion.p>

      <motion.p variants={childVariants}>
        I&apos;m 21 years old and live in Varanasi, UP, India.
      </motion.p>

      <motion.p variants={childVariants}>
        I&apos;m open to new ideas, learn quickly, and adapt easily to new
        situations.
      </motion.p>
    </motion.div>
  
            </div>
          </div>{" "}
          <HoverSvg />
          <br />
          <TechStack />
          <hr className="border-b border-zinc-700" />
          <br />
          <div className="flex flex-col px-8 items-center justify-around">
            <div>
              <BlogData />
            </div>
            <div className="scale-150 mr-5">
              <MarioAnimation />
            </div>
          </div>
        </section>
 
    </>
  );
}