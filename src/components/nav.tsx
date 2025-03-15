"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import the hamburger and close icons from Lucide React
import { useState } from "react"; // Import useState for managing the hamburger menu state

interface NavItem {
  title: string;
  link: string;
}

const StyledTitle = ({ title, link }: { title: string; link: string }) => {
  return (
    <motion.div className="flex group relative h-fit w-fit px-4 py-2">
      <Link href={link}>
        <motion.span
          className="w-fit font-bold whitespace-nowrap"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <button>
            <div className="text">
              <span>{title}</span>
            </div>
            <div className="clone">
              <span>{title}</span>
            </div>
            <svg
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </motion.span>
      </Link>
    </motion.div>
  );
};

const navItems: NavItem[] = [
  { title: "GitHub", link: "https://github.com/mrayushmehrotra" },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
  },
  { title: "Instagram", link: "https://www.instagram.com/mein.ayush.hoon/" },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full flex items-center sm:justify-center sm:px-2 px-8 relative">
        <nav className="flex backdrop-blur-lg bg-opacity-80 bg-neutral-900 w-[60%] rounded-full px-8 py-2 flex-row items-center justify-between">
          <div>
            <h1 className="uppercase font-semibold text-2xl">Ayush Mehrotra</h1>
          </div>

          {/* Hamburger Menu Icon for small and medium screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Items for larger screens */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <StyledTitle link={item.link} key={index} title={item.title} />
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-20 inset-x-0 bg-neutral-900 bg-opacity-95 backdrop-blur-lg z-50 rounded-lg p-4 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <StyledTitle link={item.link} key={index} title={item.title} />
            ))}
          </motion.div>
        )}
      </div>
      <br />
      <hr />
    </>
  );
}
