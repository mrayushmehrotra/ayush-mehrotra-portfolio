"use client";
import { AnimateIn } from "lib/animation/Animation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-between w-full">
        <AnimateIn variant="fadeUp" delay={0.5}>
          <h1 className="dark:text-zinc-300 text-gray-500 underline text-2xl font-semibold tracking-tight mb-4 flex items-baseline justify-between">
            <span>Ayush Mehrotra </span>
          </h1>
        </AnimateIn>
        <button
          onClick={toggleTheme}
          className="inline-block hover:scale-125 active:scale-95 transition-transform cursor-pointer"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <div className=" animate-spin duration-200  ">
              <Sun />
            </div>
          ) : (
            <div className=" animate-pulse hover:rotate-45 duration-200  ">
              <Moon />
            </div>
          )}
        </button>
      </nav>
    </>
  );
}
