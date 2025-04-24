"use client";

import TechStack from "@/components/techstack";
import { Typewriter } from "react-simple-typewriter";
import HoverSvg from "@/components/HoverSVG";
import { motion } from "motion/react";
import Lenis from "lenis";
import { useEffect } from "react";
import { GithubMap } from "@/components/githubCalendar";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
import { CutterText } from "@/components/LoaderWrapper";

const Navbar = dynamic(() => import("@/components/nav"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8 w-full  "
      >
        <br />
        <motion.div className="flex homeContainer  gap-y-5 h-[60vh] p-4 flex-col sm:flex-col lg:flex-row">
          <div className="w-full flex flex-col lg:w-[40%] leading-[0.7]">
            <div className="flex overflow-hidden  flex-col lg:flex-col lg:items-start   lg:justify-between">
              <motion.h1
                transition={{ duration: 2 }}
                initial={{ x: -100 }}
                animate={{
                  x: 10,
                  mixBlendMode: "difference",
                }}
                className="mb-4 text-center text-6xl md:text-[120px] font-semibold tracking-tighter"
              >
                Ayush
              </motion.h1>

              <motion.h1
                animate={{
                  x: 10,
                }}
                transition={{ duration: 2 }}
                className="lg:mb-8   teyt-6xl md:text-[120px] font-semibold tracking-tighter textStroke  "
              >
                <CutterText text="Mehrotra" />
              </motion.h1>
            </div>
          </div>
          <div className="w-full text-center lg:w-[60%] lg:ml-5">
            <motion.div
              className="mb-4   uppercase text-start lg:text-5xl text-[1.2em]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex text-center" variants={childVariants}>
                <span>I&apos;m a &nbsp;</span>
                <span className="font-bold text-[#4ff0b7]">
                  {typerEffect()}
                </span>
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
                I&apos;m open to new ideas, learn quickly, and adapt easily to
                new situations.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>{" "}
        <div className="m-8">
          <HoverSvg svgHeigh={200} />
        </div>
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <GithubMap />
        <br />
        <br />
        <br />
        <TechStack />
        <hr className="border-b border-zinc-700" />
      </motion.section>
    </>
  );
}
