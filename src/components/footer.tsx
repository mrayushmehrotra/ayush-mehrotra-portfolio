"use client";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  FileText,
} from "lucide-react";
import HoverSvg from "./HoverSVG";

const Footer = () => {
  const socialLinks = [
    {
      title: "GitHub",
      link: "https://github.com/mrayushmehrotra",
      icon: <Github size={24} />,
      color: "#f2f2f2",
      hoverClass: "hover:bg-gray-800 hover:text-white",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
      icon: <Linkedin size={24} />,
      color: "#0C61BF",
      hoverClass: "hover:bg-blue-600 hover:text-white",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/mein.ayush.hoon/",
      icon: <Instagram size={24} />,
      color: "#CE34B1",
      hoverClass: "hover:bg-pink-600 hover:text-white",
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
      icon: <FileText size={24} />,
      color: "black",
      hoverClass: "hover:bg-gray-700 hover:text-white",
    },
    {
      title: "Email",
      link: "mailto:ayusmehrotra007@gmail.com",
      icon: <ArrowUpRight size={24} />,
      color: "#B9B9B9",
      hoverClass: "hover:bg-gray-500 hover:text-white",
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full relative overflow-hidden mt-24 border-t border-zinc-700 text-zinc-400 bg-gradient-to-b from-transparent to-zinc-900/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="overflow-hidden hidden md:flex  mb-12">
          <HoverSvg svgHeigh={100} />
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              AYUSH MEHROTRA
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 rounded-full h-[50px] w-[50px] group transition-all duration-300 ${item.hoverClass} border border-zinc-700 hover:border-transparent`}
                aria-label={item.title}
              >
                {/* Container for stacking icons */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Top icon */}
                  <div className="absolute transition-transform duration-300 group-hover:-translate-y-6">
                    {item.icon}
                  </div>
                  {/* Bottom icon that comes up */}
                  <div className="absolute transition-transform duration-300 translate-y-6 group-hover:translate-y-0">
                    {item.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Ayush Mehrotra. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            Crafted with passion and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
