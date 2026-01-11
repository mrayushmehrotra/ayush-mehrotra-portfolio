"use client";
import { AnimateIn } from "lib/animation/Animation";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-between w-full">
        <AnimateIn variant="fadeUp" delay={0.5}>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4 flex items-baseline justify-between">
            <span>
              Hi, I&apos;m Ayush{" "}
              <button
                onClick={toggleTheme}
                className="inline-block hover:scale-125 active:scale-95 transition-transform cursor-pointer"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? "☀️" : "🌙"}
              </button>
            </span>
          </h1>
        </AnimateIn>
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          width={100}
          height={100}
        />
      </nav>
    </>
  );
}
