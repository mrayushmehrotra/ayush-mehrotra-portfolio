"use client";

import { useEffect, useState } from "react";

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

  return (
    <>
      {/* ===== Desktop pill navbar ===== */}
      <nav
        className="hidden md:flex fixed left-1/2 items-center justify-between px-5 py-3 transition-all duration-400"
        style={{
          zIndex: 100,
          top: scrolled ? "0.75rem" : "1.5rem",
          transform: "translateX(-50%)",
          minWidth: scrolled ? "520px" : "580px",
          maxWidth: "90vw",
          borderRadius: "100px",
          background: "rgba(20, 17, 13, 0.55)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(237, 229, 212, 0.18)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "0 4px 24px rgba(0,0,0,0.25)",
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
            className="font-cormorant transition-all duration-500"
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              color: "var(--cream)",
              letterSpacing: "-0.01em",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: menuOpen ? `${80 + i * 70}ms` : "0ms",
            }}
            onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = "var(--cream)"; }}
          >
            {item}
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
