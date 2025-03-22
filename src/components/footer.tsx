"use client";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-zinc-900 min-h-[40vh] flex flex-col justify-between">
      <div
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        className="p-4"
      >
        {/* Social Icons Section */}
        <div className="relative md:fixed bottom-0 w-full mb-4 flex justify-center">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2">
            <ul className="flex items-center justify-center md:justify-start gap-4 md:gap-9">
              <li>
                <Youtube
                  size={44}
                  className="hover:text-white transition-colors duration-300"
                />
              </li>
              <li>
                <Twitter
                  size={44}
                  className="hover:text-white transition-colors duration-300"
                />
              </li>
              <li>
                <Github
                  size={44}
                  className="hover:text-white transition-colors duration-300"
                />
              </li>
              <li>
                <Instagram
                  size={44}
                  className="hover:text-white transition-colors duration-300"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <pre>Got a Project in Mind?</pre>
            <h1 className="text-3xl md:text-8xl uppercase">LET&apos;S TALK</h1>
          </div>
          <div>
            <ArrowUpRight
              size={80}
              className="hover:text-white transition-colors duration-300"
            />
          </div>
        </div>

        {/* Copyright Section */}
        <pre className="text-center md:text-left mt-4">
          copyright © ayush mehrotra 2025
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
