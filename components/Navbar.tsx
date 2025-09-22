"use client";
import { AnimateIn } from "lib/animation/Animation";
import { Skiper26 } from "./provider/Theme";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between  w-full">
        <AnimateIn variant="fadeUp" delay={0.5}>
          <h1 className="text-xl font-medium tracking-tight mb-4 flex items-baseline justify-between">
            <span>Hey, I&apos;m Ayush</span>
          </h1>
        </AnimateIn>
        <Skiper26 />
      </nav>
    </>
  );
}
