"use client";

import Image from "next/image";
import { WordReveal } from "../WordReveal";

export default function HeroSection() {
  return (
    <header
      className="min-h-screen flex items-end relative overflow-hidden px-8 pt-32 pb-20"
      style={{ background: "var(--bg)" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/Splash-2.png"
      >
        <source src="/Background-Animation.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-[1400px] mx-auto items-stretch">
        <div className="self-end">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <span
              className="w-10 h-px"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.36em",
                fontFamily: "var(--font-inter)",
              }}
            >
              Portfolio &middot; 2026
            </span>
          </div>

          <h1
            className="font-cormorant"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.022em",
              color: "var(--cream)",
              marginBottom: "2rem",
            }}
          >
            <WordReveal
              words={["Software", "engineer"]}
              className="block"
              startDelay={0}
              stagger={80}
            />
            <WordReveal
              words={["building", "considered"]}
              accentIndex={1}
              className="block"
              startDelay={200}
              stagger={80}
            />
            <WordReveal
              words={["interfaces."]}
              className="block"
              startDelay={400}
              stagger={80}
            />
          </h1>

          <p
            className="fade-up delay-2 mt-8 text-lg leading-relaxed max-w-xl"
            style={{ color: "rgba(237,229,212,0.92)" }}
          >
            I'm Ayush Mehrotra &mdash; a full-stack frontend engineer from
            India. Currently at{" "}
            <a
              href="#experience"
              style={{
                color: "var(--accent)",
                borderBottom: "1px solid",
                paddingBottom: 1,
              }}
            >
              Wealthfino
            </a>{" "}
            building broker-compliance tooling, recently shipped an AI email
            client at Space AI. Four years across React, TypeScript, and the
            slow craft of accessible web.
          </p>

          <div
            className="fade-up delay-3 flex flex-wrap pt-8 mt-8"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {[
              { label: "Based in", value: "India &middot; Remote" },
              { label: "Currently", value: "Wealthfino" },
              { label: "Stack", value: "React &middot; Next &middot; TS" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-8 pr-8">
                {i > 0 && (
                  <div className="w-px h-10 shrink-0" style={{ background: "var(--line)" }} />
                )}
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[10px] tracking-[0.28em] uppercase font-medium"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-cormorant text-lg"
                    style={{ color: "var(--cream)" }}
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up delay-2 relative w-full h-full min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-white/[0.06]">
            <Image
              src="/Ayush_Mehrotra_Image.jpg"
              alt="Ayush Mehrotra Profile picture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110D]/70 via-transparent to-transparent" />
          </div>
          <div
            className="absolute bottom-0 left-0 w-[180px] h-[180px] -translate-x-3 translate-y-3 z-5 hidden md:block"
            style={{ width: 180, height: 180 }}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ animation: "spin-cw 22s linear infinite" }}
            >
              <defs>
                <path
                  id="orbitalPath"
                  d="M100,18 A82,82 0 1,1 99.99,18"
                  fill="none"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="#EDE5D4"
                strokeWidth="0.4"
                opacity="0.22"
              />
              <circle
                cx="100"
                cy="100"
                r="62"
                fill="#1F1B15"
                opacity="0.96"
              />
              <text
                fill="#EDE5D4"
                fontFamily="Inter"
                fontSize="19"
                fontWeight="500"
                letterSpacing="2.8"
              >
                <textPath href="#orbitalPath" startOffset="0%">
                  FULLSTACK &middot; FRONTEND &middot; BACKEND &middot; ENG
                  &middot;
                </textPath>
              </text>
              <text
                fill="#EDE5D4"
                fontFamily="Inter"
                fontSize="9"
                fontWeight="500"
                letterSpacing="2.8"
              >
                <textPath href="#orbitalPath" startOffset="100%">
                  FULL-STACK &middot; FRONTEND &middot; ENGINEER &middot;{" "}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
              <span
                className="font-cormorant text-3xl italic"
                style={{ color: "var(--accent)" }}
              >
                A
              </span>
              <span
                className="text-[9px] tracking-widest uppercase mt-1"
                style={{
                  color: "rgba(237,229,212,0.82)",
                  letterSpacing: "0.24em",
                }}
              >
                Est. 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
