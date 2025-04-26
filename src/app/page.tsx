"use client";

import TechStack from "@/components/techstack";
import HoverSvg from "@/components/HoverSVG";
import Lenis from "lenis";
import { useEffect } from "react";
import { GithubMap } from "@/components/githubCalendar";
import Projects from "@/components/Projects";

import Footer from "@/components/footer";
import { Experience } from "@/components/Experience";
import Main from "@/components/Home";

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
      <section>
        <br />
        <Main />
        <div className="m-8      ">
          <HoverSvg svgHeigh={200} />
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
        </div>
        <Experience />
        <Footer />
      </section>
    </>
  );
}
