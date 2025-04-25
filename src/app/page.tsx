"use client";

import TechStack from "@/components/techstack";
import HoverSvg from "@/components/HoverSVG";
import Lenis from "lenis";
import { useEffect } from "react";
import { GithubMap } from "@/components/githubCalendar";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
import Main from "@/components/Home";
import { motion } from "motion/react";

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
        <Main />
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
        <TechStack />
        <hr className="border-b border-zinc-700" />
      </motion.section>
    </>
  );
}
