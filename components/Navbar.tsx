"use client";

import { useEffect, useState } from "react";
import TextRoll from "@/components/ui/text-roll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const navLinks = ["About", "Work", "Freelance", "Experience", "Contact"];

  const [navHovered, setNavHovered] = useState(false);

  return (
    <>
      {/* ===== Desktop pill navbar ===== */}
      <div 
        className="hidden md:block fixed top-0 left-0 w-full"
        style={{ zIndex: 100, height: '100px' }}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
      >
        <nav
          className="absolute flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            top: navHovered ? (scrolled ? "0.75rem" : "1.5rem") : "1.5rem",
            left: navHovered ? "50%" : "3rem",
            right: navHovered ? "auto" : "3rem",
            transform: navHovered ? "translateX(-50%)" : "none",
            minWidth: navHovered ? (scrolled ? "520px" : "580px") : "auto",
            width: navHovered ? "auto" : "calc(100% - 6rem)",
            padding: navHovered ? "0.75rem 1.25rem" : "0",
            borderRadius: navHovered ? "100px" : "0px",
            background: navHovered ? "rgba(20, 17, 13, 0.55)" : "transparent",
            backdropFilter: navHovered ? "blur(24px) saturate(1.4)" : "none",
            WebkitBackdropFilter: navHovered ? "blur(24px) saturate(1.4)" : "none",
            border: navHovered ? "1px solid rgba(237, 229, 212, 0.18)" : "1px solid transparent",
            boxShadow: navHovered
              ? scrolled
                ? "0 8px 32px rgba(0,0,0,0.4)"
                : "0 4px 24px rgba(0,0,0,0.25)"
              : "none",
          }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-cormorant text-xl font-medium tracking-tight shrink-0"
            style={{ color: "var(--cream)" }}
          >
            Ayush<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          <ul className="flex gap-6 list-none mx-6">
            {navLinks.map((item) => (
              <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                    className="text-xs font-normal uppercase transition-colors duration-300"
                    style={{ color: "rgba(237, 229, 212, 0.82)", letterSpacing: "0.16em" }}
                  onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = "var(--cream)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = "rgba(237, 229, 212, 0.82)"; }}
                >
                  {item}
                </button>
                
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("#contact")}
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-400 shrink-0"
            style={{ color: "var(--charcoal)", background: "var(--accent)", letterSpacing: "0.16em" }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "var(--cream)"; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "var(--accent)"; }}
          >
            Begin a project
          </button>
        </nav>
      </div>

      {/* ===== Mobile top bar ===== */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 transition-all duration-400"
        style={{
          zIndex: 100,
          background: scrolled ? "rgba(20, 17, 13, 0.78)" : "rgba(20, 17, 13, 0.55)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          borderBottom: "1px solid rgba(237, 229, 212, 0.18)",
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-cormorant text-xl font-medium tracking-tight"
          style={{ color: "var(--cream)" }}
        >
          Ayush<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-7 h-6 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span
            className="block w-full h-px transition-all duration-300 origin-center"
            style={{
              background: "var(--cream)",
              transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-full h-px transition-all duration-300"
            style={{
              background: "var(--cream)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-full h-px transition-all duration-300 origin-center"
            style={{
              background: "var(--cream)",
              transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* ===== Mobile fullscreen menu ===== */}
      <div
        className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-500"
        style={{
          zIndex: 99,
          background: "rgba(10, 9, 7, 0.96)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((item, i) => (
          <button
            key={item}
            onClick={() => scrollTo(`#${item.toLowerCase()}`)}
            className="font-cormorant transition-all duration-500 group"
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              color: "var(--cream)",
              letterSpacing: "-0.01em",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? `${80 + i * 70}ms` : "0ms",
            }}
          >
            <TextRoll
              center
              className="font-cormorant font-medium uppercase !text-[var(--cream)] dark:!text-[var(--cream)]"
            >
              {item}
            </TextRoll>
          </button>
        ))}

        <button
          onClick={() => scrollTo("#contact")}
          className="mt-4 text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-500"
          style={{
            color: "var(--charcoal)",
            background: "var(--accent)",
            letterSpacing: "0.16em",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: menuOpen ? `${80 + navLinks.length * 70}ms` : "0ms",
          }}
        >
          Begin a project
        </button>
      </div>
    </>
  );
}
