"use client";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-100 py-24 px-8 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-[1200px] relative">
        {/* Title */}
        <h2
          className="text-xl sm:text-2xl font-bold text-zinc-700 text-center mb-24"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Thanks for stopping by, let's chat! 👋
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              CONTACT ME 💌
            </span>
            <a
              href="mailto:ayusmehrotra007@gmail.com"
              className="text-sm font-bold text-zinc-600 hover:text-black transition-colors"
            >
              ayusmehrotra007@gmail.com
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <span
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              LET'S CONNECT 🤝
            </span>
            <div className="text-sm font-bold text-zinc-600 flex gap-2">
              <Link
                href="https://www.linkedin.com/in/ayushmehrotraa/"
                target="_blank"
                className="hover:text-black transition-colors"
              >
                Linkedin
              </Link>
              <span className="text-zinc-300">|</span>
              <Link
                href="/Ayush_Mehrotra.pdf"
                className="hover:text-black transition-colors"
              >
                Resume
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="/work" className="hover:text-black transition-colors">
                Work
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-start md:pl-20 text-center md:text-left">
            <span
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              &copy; {new Date().getFullYear()} AYUSH MEHROTRA
            </span>
            <span className="text-sm font-bold text-zinc-600">
              Made with 💛 &amp; 🍵
            </span>
          </div>
        </div>

        {/* Scroll to top button absolute positioned on the right */}
        <button
          onClick={scrollToTop}
          className="absolute right-0 bottom-0 md:-right-8 p-2 text-zinc-400 hover:text-black transition-colors"
          aria-label="Back to top"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
