"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How long does a typical project take?",
    a: "Most core projects reach their first major milestone within a week. I prioritize high-velocity development and iterative shipping to ensure you see progress immediately.",
    tag: "Timeline",
  },
  {
    q: "How is the pricing determined for a project?",
    a: "Pricing is project-based and tailored to your specific requirements. I offer transparent, value-driven quotes after our initial discovery call to ensure full alignment on scope.",
    tag: "Pricing",
  },
  {
    q: "How reliable are your services?",
    a: "I have successfully delivered solutions for clients ranging from startups to SEBI-regulated brokers. My process includes thorough testing, performance audits, and a commitment to clean, maintainable delivery.",
    tag: "Reliability",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. I provide dedicated support windows after every launch to handle updates, optimizations, and any immediate performance tuning your application might need.",
    tag: "Support",
  },
  {
    q: "Can you work with my existing tech stack?",
    a: "Absolutely. Whether it's React, Next.js, NestJS, or complex API integrations, I can jump into your existing codebase and start shipping improvements from day one.",
    tag: "Integration",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
    el: HTMLElement | null,
  ) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--faq-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--faq-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="faq"
      className="px-8 py-40"
      aria-label="Frequently asked questions about Ayush Mehrotra"
      itemScope
      itemType="https://schema.org/FAQPage"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20 fade-up">
          <span
            className="text-xs tracking-[0.5em] uppercase font-medium block mb-6"
            style={{ color: "var(--accent)" }}
          >
            INTEL
          </span>
          <h2
            className="font-cormorant"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--cream)",
              fontStyle: "italic",
              textTransform: "uppercase",
            }}
          >
            FAQ<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="max-w-2xl mx-auto mt-4 text-sm tracking-widest uppercase font-light"
            style={{ color: "rgba(237,229,212,0.45)", letterSpacing: "0.18em" }}
          >
            Clarifying the process of turning vision into digital reality.
          </p>
        </div>

        <ul className="grid gap-4 max-w-4xl mx-auto w-full">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                style={
                  {
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    border: isOpen
                      ? "1px solid rgba(201,163,122,0.25)"
                      : "1px solid rgba(237,229,212,0.06)",
                    background: isOpen
                      ? "rgba(201,163,122,0.05)"
                      : "rgba(237,229,212,0.015)",
                    transition: "border-color 500ms, background 500ms",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                  } as React.CSSProperties
                }
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              >
                <div
                  aria-hidden="true"
                  style={{
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(400px circle at var(--faq-x, 50%) var(--faq-y, 50%), rgba(201,163,122,0.10), transparent 70%)",
                    opacity: isOpen ? 1 : 0,
                    transition: "opacity 500ms",
                  }}
                />

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="relative w-full flex items-start gap-4 md:gap-6 text-left"
                  style={{
                    padding: "1.5rem 2rem",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      border: isOpen
                        ? "1px solid rgba(201,163,122,0.35)"
                        : "1px solid rgba(237,229,212,0.12)",
                      background: isOpen
                        ? "rgba(201,163,122,0.18)"
                        : "rgba(237,229,212,0.05)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition:
                        "transform 400ms cubic-bezier(0.2,0.8,0.2,1), border-color 400ms, background 400ms",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{
                        color: isOpen
                          ? "var(--accent)"
                          : "rgba(237,229,212,0.4)",
                        transition: "color 400ms",
                      }}
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>

                  <div className="flex-1" style={{ paddingTop: 2 }}>
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      style={{ marginBottom: 0 }}
                    >
                      <h3
                        className="font-cormorant text-xl md:text-2xl font-medium leading-snug"
                        style={{
                          color: isOpen
                            ? "var(--cream)"
                            : "rgba(237,229,212,0.75)",
                          letterSpacing: "-0.012em",
                          transition: "color 300ms",
                        }}
                        itemProp="name"
                      >
                        {item.q}
                      </h3>
                      <span
                        className="text-[9px] uppercase font-black w-fit"
                        style={{
                          letterSpacing: "0.22em",
                          padding: "0.3rem 0.75rem",
                          borderRadius: 6,
                          border: isOpen
                            ? "1px solid rgba(201,163,122,0.35)"
                            : "1px solid rgba(237,229,212,0.08)",
                          background: isOpen
                            ? "rgba(201,163,122,0.12)"
                            : "rgba(237,229,212,0.05)",
                          color: isOpen
                            ? "var(--accent)"
                            : "rgba(237,229,212,0.35)",
                          transition: "all 400ms",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <div
                      style={{
                        maxHeight: isOpen ? "300px" : "0px",
                        overflow: "hidden",
                        opacity: isOpen ? 1 : 0,
                        transition:
                          "max-height 600ms cubic-bezier(0.2,0.8,0.2,1), opacity 300ms ease",
                        marginTop: isOpen ? "0.75rem" : 0,
                      }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        className="text-base leading-relaxed"
                        style={{
                          color: "rgba(237,229,212,0.65)",
                          fontWeight: 300,
                          paddingBottom: "0.5rem",
                        }}
                        itemProp="text"
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
