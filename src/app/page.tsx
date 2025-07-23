"use client";

import TechStack from "@/components/techstack";
import HoverSvg from "@/components/HoverSVG";
import React, { useEffect } from "react";

import { GithubMap } from "@/components/githubCalendar";
import Projects from "@/components/Projects";

import Footer from "@/components/footer";
import { Experience } from "@/components/Experience";
import Main from "@/components/Home";
import Lenis from "lenis";
import Navbar from "../components/nav";

export default function Home() {
  useEffect(() => {
    (async () => {
      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <br />
        <Main />
        <div className="hidden lg:flex items-end h-[60vh]  ">
          <HoverSvg svgHeigh={400} />
        </div>
        <Projects />

        <br />
        <br />
        <GithubMap />

        <br />

        <br />
        <TechStack />
        <hr className="border-b border-zinc-700" />

        <Experience />
        <Footer />
      </section>
    </>
  );
}
