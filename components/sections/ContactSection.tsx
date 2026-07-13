"use client";

import ParticleText from "components/ui/particle-text-split";
import SocialMedia from "../SocialMedia";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-8 py-48 pb-32 relative overflow-hidden"
      style={{ background: "#000" }}
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-24 items-end">
        <div>
          <span className="eyebrow mb-8">Begin a project</span>

          <div className="hidden lg:block">
            <ParticleText text={"wanna build ?"} />
          </div>

          <h2
            className="lg:hidden font-cormorant fade-up mt-8"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
            }}
          >
            Let's build
            <br />
            something
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              considered
            </em>
            .
          </h2>
          <p
            className="text-base leading-relaxed mt-12 max-w-lg fade-up delay-1"
            style={{ color: "rgba(237,229,212,0.92)" }}
          >
            Open to senior frontend, full-stack, and design-systems work
            &mdash; remote-first, with monthly on-site where useful. A short
            note about your project is the best way to start, or book a
            15-minute intro on Cal.com.
          </p>
          <a
            href="mailto:ayusmehrotra007@gmail.com"
            className="fade-up delay-2 inline-flex items-center gap-4 mt-12 font-cormorant text-2xl italic relative pb-2"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            ayusmehrotra007@gmail.com
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-6 h-6"
              style={{ color: "var(--accent)" }}
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
            <span
              className="absolute left-0 right-0 bottom-0 h-px"
              style={{
                background: "var(--accent)",
                transform: "scaleX(1)",
                transformOrigin: "right",
              }}
            />
          </a>

          <div className="fade-up delay-3 flex flex-wrap gap-3 mt-12">
            <SocialMedia />
            <a
              href="https://ayush-mehrotra-portfolio-two.vercel.app/Ayush_Mehrotra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-400"
              style={{
                background: "var(--accent)",
                color: "var(--charcoal)",
                border: "1px solid var(--accent)",
                letterSpacing: "0.16em",
              }}
            >
              R&eacute;sum&eacute; &darr;
            </a>
          </div>
        </div>

        <aside className="fade-up delay-1 flex flex-col gap-10">
          <div className="w-[140px] h-[140px] relative self-end hidden md:block">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ animation: "spin-cw 22s linear infinite" }}
            >
              <defs>
                <path
                  id="badgePath"
                  d="M100,18 A82,82 0 1,1 99.99,18"
                  fill="none"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="#C9A37A"
                strokeWidth="0.6"
              />
              <text
                fill="#C9A37A"
                fontFamily="Inter"
                fontSize="20"
                fontWeight="500"
                letterSpacing="3"
              >
                <textPath href="#badgePath" startOffset="0%">
                  OPEN FOR WORK &middot; 2025 &middot; OPEN FOR WORK &middot;
                  2025 &middot;{" "}
                </textPath>
              </text>
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center font-cormorant text-2xl italic"
              style={{ color: "var(--accent)" }}
            >
              &loz;
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { label: "Located", value: "India &middot; Remote &middot; IST" },
              { label: "Response", value: "Within two working days" },
              { label: "Engagements", value: "Full-time &middot; Contract" },
            ].map((detail) => (
              <div
                key={detail.label}
                className="pt-5"
                style={{ borderTop: "1px solid var(--line-strong)" }}
              >
                <div
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                >
                  {detail.label}
                </div>
                <div
                  className="font-cormorant text-xl"
                  style={{ color: "var(--cream)" }}
                  dangerouslySetInnerHTML={{ __html: detail.value }}
                />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
