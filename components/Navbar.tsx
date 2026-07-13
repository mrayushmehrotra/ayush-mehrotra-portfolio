"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar({
  textColor = "black",
}: {
  textColor?: "black" | "white";
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Play", href: "/play" },
    { label: "Work", href: "/work" },
  ];

  const isWhite = textColor === "white";
  const primaryTextColor = isWhite ? "#FFFFFF" : "#000000";
  const hoverTextColor = isWhite
    ? "rgba(255, 255, 255, 0.6)"
    : "rgba(0, 0, 0, 0.6)";

  return (
    <>
      {/* ===== Desktop static navbar ===== */}
      <div className="hidden md:block w-full px-8 pt-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-cormorant text-xl font-medium tracking-tight shrink-0"
            style={{ color: primaryTextColor }}
          >
            Ayush<span style={{ color: "var(--accent)" }}>.</span>
          </Link>

          <ul className="flex gap-6 list-none mx-6">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-normal uppercase transition-colors duration-300"
                  style={{ color: primaryTextColor, letterSpacing: "0.16em" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = hoverTextColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = primaryTextColor;
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ===== Mobile top bar ===== */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4"
        style={{ zIndex: 100 }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 font-cormorant text-xl font-medium tracking-tight"
          style={{ color: primaryTextColor }}
        >
          Ayush<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-7 h-6 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span
            className="block w-full h-px transition-all duration-300 origin-center"
            style={{
              background: primaryTextColor,
              transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-full h-px transition-all duration-300"
            style={{
              background: primaryTextColor,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-full h-px transition-all duration-300 origin-center"
            style={{
              background: primaryTextColor,
              transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* ===== Mobile fullscreen menu ===== */}
      <div
        className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 transition-opacity duration-300"
        style={{
          zIndex: 99,
          background: "rgba(10, 9, 7, 0.96)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-cormorant font-medium uppercase text-white transition-opacity duration-300 hover:opacity-70"
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-opacity duration-300 hover:opacity-80"
          style={{
            color: "#000000",
            background: "var(--accent)",
            letterSpacing: "0.16em",
          }}
        >
          Begin a project
        </Link>
      </div>
    </>
  );
}
