"use client";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {motion} from "motion/react"
interface NavItem {
  title: string;
  link: string;
}

export default function Navbar() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  const navItems: NavItem[] = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "blogs",
      link: "/blogs",
    },
    {
      title: "experience",
      link: "/exp",
    },
    {
      title: "Linux",
      link: "/linux",
    },
  ];


  return (
      <>
    <nav className="flex flex-row text-sm md:text-3xl sm:px-2  px-8 items-center  justify-around">
      {navItems.map((item) => (
        <Link key={item.title} href={item.link}>
          <motion.button id="NavButton" initial={{scale: 0.5,  }} transition={{duration: 1, delay: 0.3,   ease: [0, 0.71, 0.2, 1.01]}}    animate={{scale:1  }}   >
            <span className="font-semibold uppercase" key={item.title}>
              {item.title}{" "}
            </span>
          </motion.button>
        </Link>
      ))}
      {isDark ? (
        <button
          className="ml-2"
          onClick={() => {
            setTheme("light");
            setIsDark(false);
          }}
        >
          <Moon />
        </button>
      ) : (
        <button
          className="ml-2"
          onClick={() => {
            setTheme("dark");
            setIsDark(true);
          }}
        >
          <Sun />
        </button>
      )}
    </nav>
    <br />
      <hr />
      </>
  );
}
