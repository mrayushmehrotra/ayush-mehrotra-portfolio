"use client";

import { usePathname } from "next/navigation";
import { FaHome, FaRegUser, FaRegMoon } from "react-icons/fa";
import { MdWorkOutline, MdOutlineArticle } from "react-icons/md";
import { Link } from "next-view-transitions";

import { GrProjects } from "react-icons/gr";

const navItems = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaRegUser /> },
  { path: "/work", label: "Work", icon: <MdWorkOutline /> },
  { path: "/projects", label: "Projects", icon: <GrProjects /> },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-center w-full">
        <div className="flex items-center gap-6 px-6 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-md">
          {navItems.map(({ path, label, icon }) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                href={path}
                className={`flex items-center rounded-full px-4 py-2 gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition
                ${isActive ? "bg-neutral-200 dark:bg-neutral-700" : ""}`}
              >
                <div className="flex items-center justify-center">{icon}</div>
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Dark Mode Toggle */}
          <button className="ml-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
            <FaRegMoon />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="z-[99] fixed bottom-0 left-0 w-full md:hidden bg-white overflow-x-hidden  dark:bg-neutral-900 shadow-t py-2">
        <div className="flex justify-around">
          {navItems.map(({ path, icon }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`p-2 rounded-full flex justify-center items-center text-xl transition
                ${isActive ? "text-black dark:text-white" : "text-neutral-400 dark:text-neutral-500"}
                `}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
