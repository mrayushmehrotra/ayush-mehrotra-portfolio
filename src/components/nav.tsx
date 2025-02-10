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
      title: "Linux 🥰",
      link: "/linux",
    },
  ];
  return (
    <nav className="flex flex-row sm:text-xl items-center p-4  justify-between">
      {navItems.map((item) => (
        <Link key={item.title} href={item.link}>
          <button>
            <span className="font-semibold" key={item.title}>
              {item.title}{" "}
            </span>
          </button>
        </Link>
      ))}
      {isDark ? (
        <button
          className="ml-4"
          onClick={() => {
            setTheme("light");
            setIsDark(false);
          }}
        >
          <Moon />
        </button>
      ) : (
        <button
          className="ml-4"
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
