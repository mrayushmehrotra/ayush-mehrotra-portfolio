"use client";

import { usePathname } from "next/navigation";
import { FaHome, FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "next-view-transitions";

import { GrProjects } from "react-icons/gr";
import { Skiper26 } from "./provider/Theme";

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
        <div
          style={{
            backgroundColor: "var(--nav-bg)",
            color: "var(--nav-text)",
          }}
          className="flex items-center gap-6 px-6 py-2 rounded-full shadow-md"
        >
          {navItems.map(({ path, label, icon }) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                href={path}
                style={{
                  color: isActive ? "var(--nav-active)" : "var(--nav-text)",
                  backgroundColor: isActive
                    ? "var(--nav-hover)"
                    : "transparent",
                }}
                className={`flex items-center rounded-full px-4 py-2 gap-2 text-sm font-medium transition
                hover:opacity-80`}
              >
                <div className="flex  items-center justify-center">{icon}</div>
                <span>{label}</span>
              </Link>
            );
          })}

          {/* Dark Mode Toggle */}
          <div className="ml-2">
            <Skiper26 />
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav
        style={{
          backgroundColor: "var(--nav-bg)",
          color: "var(--nav-text)",
        }}
        className="z-[99] fixed bottom-0 left-0 w-full md:hidden overflow-x-hidden shadow-t py-2"
      >
        <div className="flex justify-around items-center">
          {navItems.map(({ path, icon }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                style={{
                  color: isActive ? "var(--nav-active)" : "var(--nav-text)",
                  backgroundColor: isActive
                    ? "var(--nav-hover)"
                    : "transparent",
                }}
                className="p-2 rounded-full flex justify-center items-center text-xl transition hover:opacity-80"
              >
                {icon}
              </Link>
            );
          })}
          <div className="p-2">
            <Skiper26 />
          </div>
        </div>
      </nav>
    </>
  );
}
