"use client";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  FileText,
} from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      title: "GitHub",
      link: "https://github.com/mrayushmehrotra",
      icon: (
        <Github
          size={32}
          className="hover:text-white transition-colors duration-300"
        />
      ),
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
      icon: (
        <Linkedin
          size={32}
          className="hover:text-white transition-colors duration-300"
        />
      ),
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/mein.ayush.hoon/",
      icon: (
        <Instagram
          size={32}
          className="hover:text-white transition-colors duration-300"
        />
      ),
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
      icon: (
        <FileText
          size={32}
          className="hover:text-white transition-colors duration-300"
        />
      ),
    },
  ];

  return (
    <footer
      className="fixed bottom-0 w-full transition-transform duration-500 ease-in-out"
      style={{
        transform: showFooter ? "translateY(0)" : "translateY(100%)",
        clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="bg-zinc-900 min-h-[40vh] p-4 flex flex-col justify-between">
        {/* Social Icons Section */}
        <div className="w-full mb-4 px-4">
          <div className="flex justify-end">
            <ul className="flex gap-3 sm:gap-4 md:gap-6">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-1 sm:p-2 hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-8 gap-4 md:gap-6">
          <div className="text-center md:text-left space-y-2 md:space-y-4">
            <pre className="text-xs sm:text-sm md:text-base opacity-80">
              Got a Project in Mind?
            </pre>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl uppercase leading-tight">
              LET&apos;S TALK
            </h1>
          </div>
          <div className="md:self-end">
            <a
              href="mailto:ayusmehrotra007@gmail.com"
              className="block p-2 hover:scale-110 transition-transform"
            >
              <ArrowUpRight
                size={48}
                className="hover:text-white md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-left text-xs sm:text-sm mt-2 md:mt-4 px-4 pb-2 md:pb-4 opacity-75">
          copyright © ayush mehrotra 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
