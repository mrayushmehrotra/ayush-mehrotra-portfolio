"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "globe",
    tag: "Conversion-Focused",
    title: "Landing Pages",
    subtitle: "Convert visitors into customers.",
    description:
      "High-converting, lightning-fast landing pages with clear messaging, premium typography, and mobile-first responsive layouts.",
    features: [
      "SEO & Speed Optimization",
      "Interactive micro-animations",
      "Analytics & Form integration",
    ],
    timeline: "1-2 Weeks",
  },
  {
    icon: "layout-dashboard",
    tag: "Full-Stack React",
    title: "Web Applications",
    subtitle: "Scalable tools & dashboards.",
    description:
      "Robust internal tools, admin dashboards, and client portals built with Next.js, relational databases, and secure APIs.",
    features: [
      "Database & API Integration",
      "Role-based authentication",
      "Real-time data synchronization",
    ],
    timeline: "3-4 Weeks",
  },
  {
    icon: "rocket",
    tag: "Rapid Prototyping",
    title: "SaaS MVPs",
    subtitle: "Launch & validate in weeks.",
    description:
      "Fully functional SaaS prototypes designed to test your core value proposition with real users and secure early funding.",
    features: [
      "Stripe payment workflows",
      "Authentication & Database",
      "Deploy-ready infrastructure",
    ],
    timeline: "2-4 Weeks",
  },
  {
    icon: "smartphone",
    tag: "Cross-Platform",
    title: "Mobile Development",
    subtitle: "Custom iOS & Android apps.",
    description:
      "Polished cross-platform mobile apps built with React Native / Expo, featuring smooth transitions and native integrations.",
    features: [
      "App Store submission ready",
      "Push notifications support",
      "Offline storage & sync",
    ],
    timeline: "4-6 Weeks",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headingText = "My Services";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]" />
      <div
        className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:6rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#A2203C_0%,transparent_50%)] opacity-20" />

      {/* Navbar */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <img
            alt="Ayush Mehrotra Logo"
            className="h-7 sm:h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105 rounded-lg"
            width="40"
            height="40"
            src="/profile.jpg"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-[#A2203C]/10 border border-[#A2203C]/20 hover:bg-[#A2203C]/20 hover:border-[#A2203C]/40 transition-all duration-300 group/avail"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] lg:text-xs font-semibold tracking-wider text-white/80 group-hover/avail:text-white uppercase">
              Available for Work
            </span>
          </Link>

          <div className="relative">
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="fixed right-4 top-4 sm:right-6 sm:top-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-2xl"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                <span
                  className={`block h-[2.5px] w-full bg-white rounded-full transition-transform duration-300 ${
                    menuOpen ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-full bg-white rounded-full transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2.5px] w-full bg-white rounded-full transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 bg-[#0a0a0a]/[0.96] backdrop-blur-2xl ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "About", "Projects", "Services", "Contact"].map(
          (item, i) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`
              }
              onClick={() => setMenuOpen(false)}
              className="text-white font-bold transition-all duration-500"
              style={{
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                letterSpacing: "-0.01em",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transitionDelay: menuOpen
                  ? `${80 + i * 70}ms`
                  : "0ms",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#A2203C";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#fff";
              }}
            >
              {item}
            </Link>
          )
        )}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-500 bg-[#A2203C] text-white font-bold"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: menuOpen
              ? `${80 + 5 * 70}ms`
              : "0ms",
          }}
        >
          Begin a project
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full relative z-10 pt-12 sm:pt-14 md:pt-16 lg:pt-20 overflow-x-hidden min-h-[90vh]">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-white min-h-screen">
            <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-3 sm:px-4 md:px-6 max-w-[1400px]">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10 md:mb-16">
                <h1 className="sr-only">
                  Web Development Services | Ayush Mehrotra
                </h1>

                <motion.div
                  className="relative text-center mb-6 sm:mb-8 md:mb-12 py-4 sm:py-6 md:py-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold select-none tracking-tighter whitespace-nowrap text-white/10">
                      My Services
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
                      <span className="text-white">My</span>
                      <span className="text-transparent bg-gradient-to-r from-[#A2203C] to-[#E5C09F] bg-clip-text">
                        Services
                      </span>
                    </h2>
                  </div>
                </motion.div>

                <motion.p
                  className="mt-3 sm:mt-4 text-white/60 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  I help startups and small businesses turn ideas into fast,
                  modern, and reliable web products.
                </motion.p>
              </div>

              {/* Service Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {services.map((service, idx) => (
                  <motion.div key={idx} variants={cardVariants}>
                    <div className="group relative rounded-3xl p-[1px] hover:from-[#A2203C] hover:to-[#A2203C]/30 transition-all duration-500 shadow-2xl h-full flex flex-col overflow-hidden bg-gradient-to-b from-white/10 to-white/5">
                      <div className="backdrop-blur-3xl rounded-[23px] p-6 sm:p-8 flex flex-col h-full relative z-10 bg-zinc-950/80">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#A2203C]/5 via-transparent to-transparent opacity-50 rounded-[23px] pointer-events-none" />
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#A2203C]/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#A2203C]/30 group-hover:bg-[#A2203C]/5 transition-all duration-500">
                            <Icon name={service.icon} />
                          </div>
                          <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-[#A2203C]/5 text-[#A2203C] border border-[#A2203C]/15 font-semibold shadow-sm">
                            {service.tag}
                          </span>
                        </div>

                        <div className="relative z-10">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#A2203C] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-[#A2203C] font-mono tracking-wider mb-4 uppercase">
                            {service.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-3 mb-6 pt-5 relative z-10 border-t border-white/5">
                          {service.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                              <svg
                                className="w-3.5 h-3.5 text-[#A2203C] shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-xs text-white/60 font-light">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto pt-5 flex items-center justify-between relative z-10 border-t border-white/5">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono">
                              Est. Timeline
                            </span>
                            <span className="text-xs text-white font-bold font-mono">
                              {service.timeline}
                            </span>
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A2203C] hover:text-white transition-all duration-300 group/link px-3.5 py-1.5 rounded-full hover:bg-[#A2203C] hover:border-[#A2203C] hover:shadow-[0_0_15px_#A2203C/40] bg-white/[0.02] border border-white/10"
                          >
                            <span>Inquire</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Budget Info */}
              <motion.div
                className="mt-8 sm:mt-12 md:mt-16 flex justify-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-sm bg-white/[0.02] border border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400"
                  >
                    <path d="M6 3h12" />
                    <path d="M6 8h12" />
                    <path d="m6 13 8.5 8" />
                    <path d="M6 13h3" />
                    <path d="M9 13c6.667 0 6.667-10 0-10" />
                  </svg>
                  <span className="text-xs sm:text-sm text-white/60 font-medium">
                    Average project budget:{" "}
                    <span className="text-white font-semibold">
                      ₹6k – ₹42k
                    </span>{" "}
                    depending on scope
                  </span>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="mt-10 sm:mt-16 md:mt-24 text-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-16 backdrop-blur-xl relative overflow-hidden border border-white/5 bg-white/[0.02]">
                  <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-40 sm:w-60 h-40 sm:h-60 bg-[#A2203C]/12 rounded-full blur-[80px] sm:blur-[100px] -z-10" />
                  <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-[#A2203C]/8 rounded-full blur-[80px] sm:blur-[100px] -z-10" />

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase mb-3 sm:mb-4">
                    Need Something Custom?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-xl mx-auto mb-5 sm:mb-6 md:mb-8 font-light leading-relaxed px-2">
                    Every project is different. Let&apos;s discuss your specific
                    requirements and I&apos;ll craft a solution tailored to your
                    needs and budget.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Link href="/contact">
                      <button className="inline-flex items-center justify-center whitespace-nowrap py-2 rounded-full h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 bg-[#A2203C] hover:bg-[#8a1b32] text-white font-bold tracking-wider text-xs sm:text-sm md:text-base shadow-[0_0_30px_#A2203C/30] hover:shadow-[0_0_40px_#A2203C/50] transition-all duration-300 w-full">
                        Get a Free Quote
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                    <Link href="/projects">
                      <button className="inline-flex items-center justify-center whitespace-nowrap border bg-transparent hover:bg-white/5 py-2 rounded-full h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 font-bold tracking-wider text-xs sm:text-sm md:text-base transition-all duration-300 w-full border-white/20 hover:border-white/40 text-white">
                        See Past Work
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <footer className="relative w-full border-t border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="relative z-10 border-b border-white/5 bg-gradient-to-r from-[#A2203C]/6 via-transparent to-[#A2203C]/6">
            <div className="mx-auto max-w-[1400px] px-2 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-4 md:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-tighter uppercase">
                  Got a project in mind?
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 mt-0.5 sm:mt-1">
                  Let&apos;s talk about it. Free consultation, no obligations.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto flex-shrink-0"
              >
                <button className="inline-flex items-center justify-center py-2 rounded-full h-10 sm:h-11 md:h-12 px-5 sm:px-6 md:px-8 bg-[#A2203C] hover:bg-[#8a1b32] text-white font-bold tracking-wider text-xs sm:text-sm shadow-[0_0_20px_#A2203C/30] hover:shadow-[0_0_30px_#A2203C/50] transition-all duration-300 whitespace-nowrap w-full sm:w-auto">
                  Start a Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative isolate overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#A2203C]/6 to-transparent" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[300px] sm:size-[400px] md:size-[500px] rounded-full bg-[#A2203C]/12 blur-[80px] sm:blur-[120px]" />
              <div className="absolute bottom-0 right-0 size-[200px] sm:size-[300px] rounded-full bg-white/6 blur-[80px] sm:blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-8 sm:gap-12 md:gap-16 md:flex-row md:items-start md:justify-between">
              {/* Brand */}
              <div className="w-full max-w-sm space-y-5 sm:space-y-6 md:space-y-8">
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 group cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#A2203C]/15 blur-xl rounded-full" />
                    <img
                      alt="Ayush Mehrotra logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110 rounded-full"
                      src="/profile.jpg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-transparent">
                      Ayush<span style={{ color: "#A2203C" }}>.</span>
                    </h2>
                    <div className="h-0.5 w-0 bg-[#A2203C] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
                <p className="max-w-[340px] text-sm sm:text-base md:text-lg leading-relaxed font-medium italic text-zinc-400">
                  &ldquo;Crafting digital artifacts where{" "}
                  <span className="text-white font-bold">physics</span> meets{" "}
                  <span className="text-white font-bold">logic</span>.&rdquo;
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4">
                  {[
                    {
                      label: "Twitter",
                      href: "https://x.com/AYUSH070707",
                      icon: "twitter",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
                      icon: "linkedin",
                    },
                    {
                      label: "GitHub",
                      href: "https://github.com/mrayushmehrotra",
                      icon: "github",
                    },
                    {
                      label: "Email",
                      href: "mailto:ayushmehrotra.dev@gmail.com",
                      icon: "mail",
                    },
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/ayush_mehrotra_csdev/",
                      icon: "instagram",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group block"
                      aria-label={social.label}
                    >
                      <button className="inline-flex items-center justify-center text-sm font-medium size-9 sm:size-10 md:size-12 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:border-[#A2203C]/50 hover:bg-[#A2203C]/10 hover:shadow-[0_0_15px_#A2203C/40] border border-white/10 bg-white/5 text-white">
                        <SocialIcon name={social.icon} />
                      </button>
                      <div className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[7px] sm:text-[8px] md:text-[10px] font-bold tracking-widest uppercase whitespace-nowrap pointer-events-none text-[#A2203C]">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-16 lg:gap-24 xl:gap-32">
                <div className="min-w-[110px] sm:min-w-[130px] md:min-w-[160px]">
                  <div className="mb-2">
                    <h3 className="mb-3 sm:mb-5 md:mb-8 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#A2203C]/80">
                      Explore
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                      {[
                        { label: "Home", href: "/" },
                        { label: "About", href: "/about" },
                        { label: "Projects", href: "/projects" },
                        { label: "Services", href: "/services" },
                        { label: "Contact", href: "/contact" },
                      ].map((link) => (
                        <li key={link.label} className="group/link overflow-hidden">
                          <Link
                            href={link.href}
                            className="relative inline-flex items-center text-sm sm:text-base md:text-lg font-bold transition-all duration-500 text-zinc-500 hover:text-white"
                          >
                            <span className="relative z-10">{link.label}</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A2203C] transition-all duration-500 group-hover/link:w-full" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="min-w-[110px] sm:min-w-[130px] md:min-w-[160px]">
                  <div className="mb-2">
                    <h3 className="mb-3 sm:mb-5 md:mb-8 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#A2203C]/80">
                      Connect
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                      {[
                        {
                          label: "Email",
                          href: "mailto:ayushmehrotra.dev@gmail.com",
                        },
                        {
                          label: "LinkedIn",
                          href: "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
                        },
                        {
                          label: "GitHub",
                          href: "https://github.com/mrayushmehrotra",
                        },
                        {
                          label: "Instagram",
                          href: "https://www.instagram.com/ayush_mehrotra_csdev/",
                        },
                      ].map((link) => (
                        <li key={link.label} className="group/link overflow-hidden">
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center text-sm sm:text-base md:text-lg font-bold transition-all duration-500 text-zinc-500 hover:text-white"
                          >
                            <span className="relative z-10">{link.label}</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A2203C] transition-all duration-500 group-hover/link:w-full" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 mt-8 sm:mt-12 md:mt-20 flex flex-col items-center justify-between gap-3 sm:gap-4 md:gap-6 border-t border-white/5 pt-4 sm:pt-6 md:pt-10 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-widest text-zinc-600 md:flex-row md:text-sm">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-wrap justify-center">
                <p>© 2026 AYUSH MEHROTRA</p>
                <div className="h-1 w-1 rounded-full bg-[#A2203C]" />
                <p>BASED IN INDIA</p>
              </div>
              <div className="flex items-center">
                <a
                  href="mailto:ayushmehrotra.dev@gmail.com"
                  className="group relative transition-colors hover:text-white text-center text-[9px] sm:text-[10px] md:text-xs"
                >
                  AYUSHMEHROTRA.DEV@GMAIL.COM
                  <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-[#A2203C] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-right hover:origin-left" />
                </a>
              </div>
            </div>

            <div
              className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full select-none overflow-hidden whitespace-nowrap text-center font-black leading-none text-white/[0.03]"
              style={{
                fontSize: "clamp(3rem, 15vw, 15rem)",
                letterSpacing: "-0.07em",
                transform: "translateX(-65%)",
              }}
            >
              AYUSH
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className:
      "w-6 h-6 text-zinc-300 group-hover:text-[#A2203C] transition-colors duration-500",
  };

  switch (name) {
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "layout-dashboard":
      return (
        <svg {...props}>
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...props}>
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIcon({ name }: { name: string }) {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className:
      "size-4 sm:size-5 md:size-6 transition-all duration-500 group-hover:scale-110 group-hover:text-[#A2203C]",
  };

  switch (name) {
    case "twitter":
      return (
        <svg {...props}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "github":
      return (
        <svg {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect width="20" height="16" x="2" y="4" rx="2" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}
