"use client";

import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { ScrollProgress } from "../../components/ScrollProgress";
import WorkCarouselSection from "../../components/sections/WorkCarouselSection";
import FooterSection from "../../components/sections/FooterSection";

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

export default function WorkPage() {
  useScrollReveal();

  return (
    <div>
      <ScrollProgress />
      <WorkCarouselSection />
    </div>
  );
}
