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
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b/",
      icon: <Linkedin size={24} />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/mein.ayush.hoon/",
      icon: <Instagram size={24} />,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Y3FuHpTCSdUxr2nzRh8v5pPqIXVtmYx3/view?usp=sharing",
      icon: <FileText size={24} />,
    },
    {
      title: "Email",
      link: "mailto:ayusmehrotra007@gmail.com",
      icon: <ArrowUpRight size={24} />,
    },
  ];

  return (
    <>
      <footer className="w-full   mt-12 border-t border-zinc-700 text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="overflow-hidden">
            <HoverSvg svgHeigh={100} />
          </div>
          <div className="flex border-[20px] rounded-full px-8 py-2   flex-col items-center justify-between md:flex-row">
            <h1 className="text-lg font-semibold mb-4 md:mb-0 text-center md:text-left">
              AYUSH MEHROTRA
            </h1>
            <ul className="flex gap-4">
              {socialLinks.map((item, index) => (
                <li
                  key={index}
                  className="hover:translate-x-2 duration-75 ease-in  "
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition duration-300 hover:scale-110 p-2"
                    aria-label={item.title}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-center mt-6 text-zinc-300">
            © {new Date().getFullYear()} Ayush Mehrotra. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
