"use client";

import { Link, useTransitionRouter } from "next-view-transitions";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Play", href: "/play" },
  { label: "Work", href: "/work" },
];

export default function HeroSection() {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0px)"
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)"
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <header
      className="min-h-screen relative flex flex-col overflow-hidden px-8"
      style={{ background: "" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/Splash-2.png"
        style={{
          opacity: 0,
          animation: "hero-fade-in 2s ease 0.3s forwards",
        }}
      >
        <source src="/Background-Animation.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Inline nav */}
      <nav className="relative z-20 flex items-center justify-between w-full pt-6">
        <a
          onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              onTransitionReady: slideInOut,
            });
          }}
          href="/"
          className="flex items-center gap-3 font-cormorant text-xl font-medium tracking-tight cursor-pointer"
          style={{ color: "#FFFFFF" }}
        >
          Ayush<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <ul className="flex gap-6 list-none">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.href, {
                    onTransitionReady: slideInOut,
                  });
                }}
                href={item.href}
                className="text-xs font-normal uppercase transition-opacity duration-300 hover:opacity-60 cursor-pointer"
                style={{ color: "#FFFFFF", letterSpacing: "0.16em" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center -mt-12">
        <span
          className="text-[14px] sm:text-[16px] md:text-xl tracking-[0.3em] font-bold uppercase mb-4 sm:mb-6"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-inter)",
            opacity: 0,
            animation:
              "hero-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
          }}
        >
          Software Engineer
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4rem] font-bold tracking-tighter mb-4 sm:mb-6"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-inter)",
            lineHeight: 1,
            opacity: 0,
            animation:
              "hero-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards",
          }}
        >
          Ayush Mehrotra
        </h1>
        <div
          className="flex flex-col items-center gap-1 sm:gap-1.5 text-sm sm:text-base md:text-lg font-semibold"
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-inter)",
            opacity: 0,
            animation:
              "hero-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards",
          }}
        >
          <p>Full-Stack Engineer @ Wealthfino</p>
          <p className="text-xs text-white sm:text-sm font-medium">
            Previously @ Space AI, Invid.ai
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </header>
  );
}
