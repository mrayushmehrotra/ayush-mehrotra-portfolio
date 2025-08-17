"use client";

import Section from "./components/MySection";
import TechMarquee from "./components/Stack";
import { home, person } from "./components/resources/content";
import BlurView from "./components/BlurView";
export default function Page() {
  return (
    <BlurView>
      <div className="flex mt-4 relative  justify-between">
        <h1 className="  text-2xl font-semibold tracking-tighter">
          {person.name}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="bg-zinc-800 w-fit py-1 px-4 mt-2 mb-2   rounded-full  ">
          {person.role}
        </div>
      </div>

      <Section title={home.label}>
        <p className="mb-4">{home.subline}</p>
      </Section>
      <br />
      <TechMarquee />

      <br />
      <br />
    </BlurView>
  );
}
