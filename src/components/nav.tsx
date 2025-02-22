"use client";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
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
    <nav className="flex flex-row text-sm md:text-3xl sm:px-2  px-8 items-center  justify-around">
      {navItems.map((item) => (
        <Link key={item.title} href={item.link}>
          <button>
            <span className="font-semibold uppercase" key={item.title}>
              {item.title}{" "}
            </span>
          </button>
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
  );
}
