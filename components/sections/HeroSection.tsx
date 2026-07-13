"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Play", href: "/play" },
  { label: "Work", href: "/work" },
];

export default function HeroSection() {
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
        <Link
          href="/"
          className="flex items-center gap-3 font-cormorant text-xl font-medium tracking-tight"
          style={{ color: "#FFFFFF" }}
        >
          Ayush<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <ul className="flex gap-6 list-none">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs font-normal uppercase transition-opacity duration-300 hover:opacity-60"
                style={{ color: "#FFFFFF", letterSpacing: "0.16em" }}
              >
                {item.label}
              </Link>
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
