"use client";

import { useEffect } from "react";
import { ScrollProgress } from "../components/ScrollProgress";
import HeroSection from "components/sections/HeroSection";
import StatsSection from "components/sections/StatsSection";
import StackSection from "components/sections/StackSection";
import OpenSourceSection from "components/sections/OpenSourceSection";
import ContactSection from "components/sections/ContactSection";
import FooterSection from "components/sections/FooterSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    if (!window.IntersectionObserver) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Page() {
  useScrollReveal();

  return (
    <div itemScope itemType="https://schema.org/Person">
      <span
        itemProp="name"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
        }}
      >
        Ayush Mehrotra
      </span>
      <link
        itemProp="url"
        href="https://ayush-mehrotra-portfolio-two.vercel.app"
      />
      <ScrollProgress />
      <HeroSection />
      <ExperienceSection />
      <FooterSection />
    </div>
  );
}
