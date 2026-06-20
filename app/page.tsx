"use client";

import { useEffect } from "react";
import {
  projects,
  experience,
  certifications,
  education,
  openSource,
} from "../components/resources/content";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { WordReveal } from "../components/WordReveal";
import { StatsCounter } from "../components/StatsCounter";
import { ScrollProgress } from "../components/ScrollProgress";
import Image from "next/image";

import ReactIcon from "../components/icons/React";
import NextIcon from "../components/icons/Next";
import TypeScriptIcon from "../components/icons/Typescript";
import TailwindIcon from "../components/icons/Tailwind";
import TrpcIcon from "../components/icons/Trpc";
import NestjsIcon from "../components/icons/Nestjs";
import BunIcon from "../components/icons/Bun";
import PostgresIcon from "../components/icons/Postgres";
import PrismaIcon from "../components/icons/Prisma";
import DrizzleIcon from "../components/icons/Drizzle";
import AwsIcon from "../components/icons/Aws";
import DockerIcon from "../components/icons/Docker";
import VercelIcon from "../components/icons/Vercel";
import TanstackIcon from "../components/icons/Tanstack-Query";
import NodejsIcon from "../components/icons/Nodejs";
import CloudflareIcon from "../components/icons/Cloudflare";
import GitIcon from "../components/icons/Git";
import ParticleText from "components/ui/particle-text-split";

/* ---------- Scroll reveal hook ---------- */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    if (!window.IntersectionObserver) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Page() {
  useScrollReveal();

  return (
    <div className="page-reveal">
      <ScrollProgress />
      <Navbar />

      {/* ============ HERO ============ */}
      <header
        className="min-h-screen flex items-end relative overflow-hidden px-8 pt-32 pb-20"
        style={{ background: "var(--bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-[1400px] mx-auto items-end">
          <div>
            <div className="flex items-center gap-4 mb-10 fade-up">
              <span
                className="w-10 h-px"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{
                  color: "var(--accent)",
                  letterSpacing: "0.36em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Portfolio &middot; 2024 &mdash; 2025
              </span>
            </div>

            <h1
              className="font-cormorant"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.022em",
                color: "var(--cream)",
                marginBottom: "2rem",
              }}
            >
              <WordReveal
                words={["Software", "engineer"]}
                className="block"
                startDelay={0}
                stagger={80}
              />
              <WordReveal
                words={["building", "considered"]}
                accentIndex={1}
                className="block"
                startDelay={200}
                stagger={80}
              />
              <WordReveal
                words={["interfaces."]}
                className="block"
                startDelay={400}
                stagger={80}
              />
            </h1>

            <p
              className="fade-up delay-2 mt-8 text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(237,229,212,0.92)" }}
            >
              I'm Ayush Mehrotra &mdash; a full-stack frontend engineer from
              India. Currently at{" "}
              <a
                href="#experience"
                style={{
                  color: "var(--accent)",
                  borderBottom: "1px solid",
                  paddingBottom: 1,
                }}
              >
                Wealthfino
              </a>{" "}
              building broker-compliance tooling, recently shipped an AI email
              client at Space AI. Four years across React, TypeScript, and the
              slow craft of accessible web.
            </p>

            <div
              className="fade-up delay-3 flex flex-wrap gap-12 pt-8 mt-8"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              {[
                { label: "Based in", value: "India &middot; Remote" },
                { label: "Currently", value: "Wealthfino" },
                { label: "Stack", value: "React &middot; Next &middot; TS" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{
                      color: "var(--accent)",
                      letterSpacing: "0.24em",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-cormorant text-xl"
                    style={{ color: "var(--cream)" }}
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up delay-2 relative">
            <div
              className="aspect-[4/5] overflow-hidden rounded-2xl relative"
              style={{ borderRadius: "1.5rem" }}
            >
              <Image
                src="/profile.jpg"
                alt="Ayush Mehrotra, portrait"
                fill
                className="object-cover hero__portrait"
                style={{
                  filter: "contrast(1.05) saturate(0.65) brightness(0.82)",
                }}
                priority
              />
            </div>

            <div
              className="absolute w-[180px] h-[180px] -bottom-15 -left-15 z-5 hidden md:block"
              style={{ width: 180, height: 180, bottom: -60, left: -60 }}
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ animation: "spin-cw 22s linear infinite" }}
              >
                <defs>
                  <path
                    id="orbitalPath"
                    d="M100,18 A82,82 0 1,1 99.99,18"
                    fill="none"
                  />
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  fill="none"
                  stroke="#EDE5D4"
                  strokeWidth="0.4"
                  opacity="0.22"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="62"
                  fill="#1F1B15"
                  opacity="0.96"
                />
                <text
                  fill="#EDE5D4"
                  fontFamily="Inter"
                  fontSize="19"
                  fontWeight="500"
                  letterSpacing="2.8"
                >
                  <textPath href="#orbitalPath" startOffset="0%">
                    FULLSTACK &middot; FRONTEND &middot; BACKEND &middot; ENG
                    &middot;
                  </textPath>
                </text>
                <text
                  fill="#EDE5D4"
                  fontFamily="Inter"
                  fontSize="9"
                  fontWeight="500"
                  letterSpacing="2.8"
                >
                  <textPath href="#orbitalPath" startOffset="100%">
                    FULL-STACK &middot; FRONTEND &middot; ENGINEER &middot;{" "}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <span
                  className="font-cormorant text-3xl italic"
                  style={{ color: "var(--accent)" }}
                >
                  A
                </span>
                <span
                  className="text-[9px] tracking-widest uppercase mt-1"
                  style={{
                    color: "rgba(237,229,212,0.82)",
                    letterSpacing: "0.24em",
                  }}
                >
                  Est. 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ MARQUEE STRIP ============ */}
      <div
        className="py-6 overflow-hidden"
        style={{
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          background: "var(--charcoal)",
        }}
      >
        <div
          className="strip__track font-cormorant text-2xl italic"
          style={{ color: "var(--cream)" }}
        >
          {[...Array(2)].map((_, idx) => (
            <span key={idx} className="strip__track-inner">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind</span>
              <span>tRPC</span>
              <span>NestJS</span>
              <span>Bun</span>
              <span>PostgreSQL</span>
              <span>Prisma</span>
              <span>Drizzle</span>
              <span>AWS</span>
              <span>Vercel</span>
              <span>Docker</span>
              <span>Tanstack Query</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ ABOUT ============ */}
      <section id="about" className="px-8 py-36">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 mb-24 items-end">
            <h2
              className="font-cormorant fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.018em",
                color: "var(--cream)",
              }}
            >
              A quiet
              <br />
              practice in{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                front-end
              </em>
              <br />
              engineering.
            </h2>
            <p
              className="text-xl leading-relaxed fade-up delay-1 max-w-2xl"
              style={{ color: "rgba(237,229,212,0.95)" }}
            >
              I build interfaces that hold up under use &mdash; accessible,
              performant, and patient enough to let the design do the talking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1100px]">
            <div className="fade-up">
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                My work begins where the design file ends. I translate a
                designer's intent into systems that survive real data, real
                latency, and real users &mdash; close to the metal of the
                browser: semantic HTML, considered CSS, and TypeScript that
                earns its weight.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                Over the last four years I've shipped internal tooling for a
                SEBI-regulated broker, an AI-powered email client, e-commerce
                storefronts, and a fair share of clones and experiments. The
                thread running through all of it is a respect for the person on
                the other side of the glass &mdash; their attention, their
                device, their bandwidth.
              </p>
            </div>
            <div className="fade-up delay-1">
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                I reach for React and Next.js when state and composition need to
                scale, tRPC and Drizzle when types should travel end-to-end, and
                Bun when startup time matters. I've built CI pipelines, Postgres
                schemas, and Docker images &mdash; full-stack in the literal
                sense, though frontend is where I keep my workshop.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                Outside the editor I'm learning Rust and Go, reading typography
                monographs, and adding to a GitHub that's &mdash; by my own
                admission &mdash; a mix of good and bad code. Learning new
                things all the time.
              </p>
              <div
                className="font-cormorant text-2xl italic"
                style={{ color: "var(--accent)" }}
              >
                &mdash; Ayush
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="px-8 py-28" style={{ background: "var(--earth)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
          {[
            {
              num: "2",
              sup: "+",
              label: "Years shipping",
              desc: "From first commit to production &mdash; across startups, studios, and freelance clients.",
            },
            {
              num: "5",
              sup: "+",
              label: "Products shipped",
              desc: "Invid.ai, Clip.AI, SpidyUI, Shawtify, Promptier &mdash; and counting.",
            },
            {
              num: "3",
              sup: "+",
              label: "Freelance projects",
              desc: "working with offline businesses, startups and pushing them online.",
            },
            {
              num: "15",
              sup: "",
              label: "Tools in rotation",
              desc: "React, Next, tRPC, Drizzle, Prisma, Bun, Docker, AWS, Postgres, and friends.",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="fade-up"
              style={{
                borderLeft: "1px solid rgba(237,229,212,0.32)",
                paddingLeft: "2rem",
              }}
            >
              <div
                className="font-cormorant"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "var(--cream)",
                  letterSpacing: "-0.02em",
                }}
              >
                <StatsCounter end={parseInt(stat.num)} suffix={stat.sup} />
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-4"
                style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
              >
                {stat.label}
              </div>
              <p
                className="text-sm leading-relaxed mt-6 max-w-64"
                style={{ color: "rgba(237,229,212,0.82)" }}
                dangerouslySetInnerHTML={{ __html: stat.desc }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============ STACK ============ */}
      <section className="px-8 py-40" style={{ background: "var(--bg)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="eyebrow justify-center">Toolbelt</span>
            <h2
              className="font-cormorant fade-up mt-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1,
                color: "var(--cream)",
              }}
            >
              Everything I{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                reach for
              </em>
              .
            </h2>
          </div>

          {[
            {
              label: "Frontend",
              items: [
                { name: "React", icon: ReactIcon },
                { name: "Next.js", icon: NextIcon },
                { name: "TypeScript", icon: TypeScriptIcon },
                { name: "Tailwind", icon: TailwindIcon },
                { name: "Tanstack Query", icon: TanstackIcon },
                { name: "Node.js", icon: NodejsIcon },
              ],
            },
            {
              label: "Backend & Data",
              items: [
                { name: "NestJS", icon: NestjsIcon, img: "/nestjs.png" },
                { name: "tRPC", icon: TrpcIcon },
                { name: "Prisma", icon: PrismaIcon, img: "/prisma.png" },
                { name: "Drizzle", icon: DrizzleIcon },
                { name: "PostgreSQL", icon: PostgresIcon },
                { name: "Bun", icon: BunIcon },
              ],
            },
            {
              label: "Infrastructure",
              items: [
                { name: "Docker", icon: DockerIcon, img: "/docker.png" },
                { name: "AWS", icon: AwsIcon },
                { name: "Vercel", icon: VercelIcon, img: "/vercel.svg" },
                { name: "Cloudflare", icon: CloudflareIcon },
                { name: "Git", icon: GitIcon },
                { name: "Express", img: "/express.png" },
              ],
            },
          ].map((group) => (
            <div key={group.label} className="mb-20 last:mb-0 fade-up">
              <div
                className="text-xs tracking-widest uppercase mb-8"
                style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
              >
                {group.label}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl transition-all duration-400 group"
                    style={{
                      border: "1px solid var(--line)",
                      background: "rgba(20,17,13,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--line)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="w-9 h-9 relative flex items-center justify-center">
                      {tech.img ? (
                        <Image
                          src={tech.img}
                          alt={tech.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      ) : tech.icon ? (
                        <tech.icon
                          className="w-full h-full"
                          style={{ filter: "brightness(1.3)" }}
                        />
                      ) : null}
                    </div>
                    <span
                      className="text-xs font-medium text-center leading-tight"
                      style={{ color: "rgba(237,229,212,0.90)" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <section id="expertise" className="px-8 py-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <span className="eyebrow mb-8">What I do</span>
              <h2
                className="font-cormorant fade-up mt-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 1,
                  color: "var(--cream)",
                }}
              >
                Three columns
                <br />
                of{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  practice
                </em>
                .
              </h2>
            </div>
            <p
              className="text-base leading-relaxed fade-up delay-1 max-w-md"
              style={{ color: "rgba(237,229,212,0.92)" }}
            >
              My work tends to fall into three lanes &mdash; they overlap on
              every project, but separating them makes the scope clearer. Here's
              what each lane looks like in plain terms.
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ borderTop: "1px solid var(--line-strong)" }}
          >
            {[
              {
                num: "01 &mdash; Interface",
                title: "Frontend architecture",
                desc: "Component systems built to scale across teams. Type-safe, accessible by default, and structured so the next engineer doesn't need a week to find their bearings.",
                tags: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Tanstack Query",
                  "React Router",
                ],
              },
              {
                num: "02 &mdash; Backend",
                title: "Servers & data",
                desc: "The connective tissue &mdash; type-safe APIs, schema-first databases, and runtimes that start fast and stay quiet under load.",
                tags: [
                  "NestJS",
                  "tRPC",
                  "Bun",
                  "PostgreSQL",
                  "Prisma",
                  "Drizzle",
                ],
              },
              {
                num: "03 &mdash; Infra",
                title: "Cloud & deployment",
                desc: "Shipping pipelines, containerised services, and edge deployments &mdash; plus the occasional dip into systems languages for tooling.",
                tags: ["AWS", "Vercel", "Docker", "Rust", "Go", "Bash"],
              },
            ].map((col, i) => (
              <div
                key={col.num}
                className={`fade-up px-8 py-12 ${i < 2 ? "lg:border-r" : ""}`}
                style={{
                  borderColor: "var(--line-strong)",
                  borderBottom: "1px solid var(--line-strong)",
                  paddingLeft: i > 0 ? "2.5rem" : "0",
                  paddingRight: i < 2 ? "2.5rem" : "0",
                }}
              >
                <span
                  className="font-cormorant text-base italic mb-6 block"
                  style={{ color: "var(--accent)" }}
                  dangerouslySetInnerHTML={{ __html: col.num }}
                />
                <h3
                  className="font-cormorant text-3xl font-medium mb-6 leading-tight"
                  style={{ color: "var(--cream)" }}
                >
                  {col.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "rgba(237,229,212,0.88)" }}
                >
                  {col.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {col.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                      style={{
                        border: "1px solid var(--line-strong)",
                        color: "var(--cream)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section id="work" className="px-8 py-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-28">
            <span className="eyebrow justify-center mb-8">Selected work</span>
            <h2
              className="font-cormorant fade-up mt-6"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: "var(--cream)",
              }}
            >
              Five projects,
              <br />
              each a{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                different
              </em>{" "}
              problem.
            </h2>
            <p
              className="font-cormorant text-lg italic mt-6 fade-up delay-1"
              style={{ color: "var(--accent)" }}
            >
              A short edit &mdash; 05 of many
            </p>
          </div>

          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`fade-up grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-36 last:mb-0`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span
                  className="font-cormorant text-base italic mb-4 block"
                  style={{ color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <div
                  className="text-xs tracking-widest uppercase mb-6"
                  style={{ color: "var(--accent)", letterSpacing: "0.28em" }}
                >
                  {project.technologies.slice(0, 2).join(" &middot; ")}
                </div>
                <h3
                  className="font-cormorant font-medium mb-6 leading-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "var(--cream)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{ color: "rgba(237,229,212,0.92)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(237,229,212,0.06)",
                        border: "1px solid var(--line)",
                        color: "var(--cream)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mb-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase inline-flex items-center gap-2 pb-1 transition-all duration-300"
                      style={{
                        color: "var(--accent)",
                        borderBottom: "1px solid var(--accent)",
                        letterSpacing: "0.18em",
                      }}
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase inline-flex items-center gap-2 pb-1 transition-all duration-300"
                      style={{
                        color: "var(--accent)",
                        borderBottom: "1px solid var(--accent)",
                        letterSpacing: "0.18em",
                      }}
                    >
                      Live &rarr;
                    </a>
                  )}
                </div>
                <div
                  className="w-16 h-px mt-4"
                  style={{ background: "var(--accent)" }}
                />
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className="aspect-[4/3] overflow-hidden rounded-xl image-reveal fade-up"
                  style={{ borderRadius: "1.2rem" }}
                >
                  <img
                    src={`https://picsum.photos/seed/work-${project.title.toLowerCase().replace(/\s+/g, "-")}/1200/900`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1500 hover:scale-105"
                    style={{
                      filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ FREELANCE ============ */}

      {/* ============ FREELANCE ============ */}
      <section
        id="freelance"
        className="px-8 py-40"
        style={{ background: "var(--earth)" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <span className="eyebrow mb-8">Freelance</span>
              <h2
                className="font-cormorant fade-up mt-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 1,
                  color: "var(--cream)",
                }}
              >
                Client work that
                <br />
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  solved real
                </em>{" "}
                problems.
              </h2>
            </div>
            <p
              className="text-base leading-relaxed fade-up delay-1 max-w-lg"
              style={{ color: "rgba(237,229,212,0.92)" }}
            >
              Freelance projects built for businesses in Mau, UP &mdash; from
              hospital management to pharmacy billing systems, focused on
              practical tooling that improves daily operations.
            </p>
          </div>

          {/* Featured freelance project */}
          <div
            className="fade-up rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
            style={{
              background: "rgba(20,17,13,0.6)",
              border: "1px solid var(--line-strong)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--accent)", letterSpacing: "0.28em" }}
                  >
                    Healthcare &middot; SaaS
                  </span>
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "#4ade80" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(237,229,212,0.7)" }}
                  >
                    Delivered
                  </span>
                </div>

                <h3
                  className="font-cormorant font-medium mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "var(--cream)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  Up Singh Hospital
                  <br />
                  Patient Management System
                </h3>

                <p
                  className="text-sm tracking-widest uppercase mb-8"
                  style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                >
                  Mau, Uttar Pradesh
                </p>

                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{ color: "rgba(237,229,212,0.92)" }}
                >
                  A full-stack web application built for Up Singh Hospital to
                  digitize patient records, streamline billing, and bring
                  transparency across every department. Replaced manual
                  register-based tracking with a real-time system accessible to
                  doctors, reception, and administration &mdash; reducing wait
                  times and eliminating record discrepancies.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    {
                      label: "Patient records",
                      desc: "Digital registration, history, and prescriptions",
                    },
                    {
                      label: "Billing & payments",
                      desc: "Transparent invoicing with receipt generation",
                    },
                    {
                      label: "Appointment tracking",
                      desc: "Real-time schedule for doctors and staff",
                    },
                    {
                      label: "Dashboard & reports",
                      desc: "Daily, weekly, and monthly analytics",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.label}
                      className="p-4 rounded-xl"
                      style={{ background: "rgba(237,229,212,0.04)" }}
                    >
                      <div
                        className="text-sm font-medium mb-1"
                        style={{ color: "var(--cream)" }}
                      >
                        {feature.label}
                      </div>
                      <div
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(237,229,212,0.7)" }}
                      >
                        {feature.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "Prisma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(237,229,212,0.06)",
                        border: "1px solid var(--line)",
                        color: "var(--cream)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden image-reveal fade-up"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.8)",
                  }}
                >
                  <img
                    src="https://picsum.photos/seed/hospital-dashboard-mgmt/1200/900"
                    alt="Up Singh Hospital Patient Management System dashboard"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                    }}
                  />
                </div>

                {/* Stats overlay */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-xl hidden md:block"
                  style={{
                    background: "rgba(20,17,13,0.9)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <div
                    className="font-cormorant text-3xl font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                  >
                    Records digitized
                  </div>
                </div>

                <div
                  className="absolute -top-6 -right-6 p-5 rounded-xl hidden md:block"
                  style={{
                    background: "rgba(20,17,13,0.9)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <div
                    className="font-cormorant text-3xl font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    Zero
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                  >
                    Paper registers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dawavale — billing system */}
          <div
            className="fade-up rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden mt-12"
            style={{
              background: "rgba(20,17,13,0.6)",
              border: "1px solid var(--line-strong)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--accent)", letterSpacing: "0.28em" }}
                  >
                    Pharmacy &middot; React Native
                  </span>
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "#4ade80" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(237,229,212,0.7)" }}
                  >
                    Delivered
                  </span>
                </div>

                <h3
                  className="font-cormorant font-medium mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: "var(--cream)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  Dawavale
                  <br />
                  Pharmacy Billing System
                </h3>

                <p
                  className="text-sm tracking-widest uppercase mb-8"
                  style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                >
                  React Native &middot; Mobile-first
                </p>

                <p
                  className="text-base leading-relaxed mb-8 max-w-lg"
                  style={{ color: "rgba(237,229,212,0.92)" }}
                >
                  A cross-platform mobile billing system built for Dawavale, an
                  online pharmacy. Designed with a clean, modern interface to
                  streamline order processing, invoice generation, and inventory
                  tracking &mdash; making daily billing faster and more accurate
                  for the pharmacy staff.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    {
                      label: "Smart billing",
                      desc: "Auto-calculated orders with tax & discounts",
                    },
                    {
                      label: "Invoice PDF",
                      desc: "Digital receipts ready to share or print",
                    },
                    {
                      label: "Inventory sync",
                      desc: "Real-time stock updates on every sale",
                    },
                    {
                      label: "Customer history",
                      desc: "Past orders and prescription records",
                    },
                  ].map((feature) => (
                    <div
                      key={feature.label}
                      className="p-4 rounded-xl"
                      style={{ background: "rgba(237,229,212,0.04)" }}
                    >
                      <div
                        className="text-sm font-medium mb-1"
                        style={{ color: "var(--cream)" }}
                      >
                        {feature.label}
                      </div>
                      <div
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(237,229,212,0.7)" }}
                      >
                        {feature.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "React Native",
                    "TypeScript",
                    "Expo",
                    "SQLite",
                    "Zustand",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(237,229,212,0.06)",
                        border: "1px solid var(--line)",
                        color: "var(--cream)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden image-reveal fade-up"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.8)",
                  }}
                >
                  <img
                    src="https://picsum.photos/seed/dawavale-pharmacy-billing/1200/900"
                    alt="Dawavale Pharmacy Billing System"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                    }}
                  />
                </div>

                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-xl hidden md:block"
                  style={{
                    background: "rgba(20,17,13,0.9)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <div
                    className="font-cormorant text-3xl font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    2x
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                  >
                    Faster billing
                  </div>
                </div>

                <div
                  className="absolute -top-6 -right-6 p-5 rounded-xl hidden md:block"
                  style={{
                    background: "rgba(20,17,13,0.9)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid var(--line-strong)",
                  }}
                >
                  <div
                    className="font-cormorant text-3xl font-medium"
                    style={{ color: "var(--cream)" }}
                  >
                    Mobile
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
                  >
                    Cross-platform app
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="px-8 py-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <span className="eyebrow mb-8">Path</span>
              <h2
                className="font-cormorant fade-up mt-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 1,
                  color: "var(--cream)",
                }}
              >
                Four years,
                <br />
                five{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                  chapters
                </em>
                .
              </h2>
            </div>
            <p
              className="text-base leading-relaxed fade-up delay-1 max-w-md"
              style={{ color: "rgba(237,229,212,0.92)" }}
            >
              A condensed timeline of the teams I've worked with and the work
              that came out of each chapter. Full details on request.
            </p>
          </div>

          <div
            className="max-w-[1100px] mx-auto relative"
            style={{ paddingLeft: "3rem" }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "var(--line-strong)" }}
            />

            {experience.map((job, i) => (
              <div
                key={job.period + job.role}
                className="fade-up grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 py-12 relative"
                style={{
                  borderBottom:
                    i < experience.length - 1
                      ? "1px solid var(--line)"
                      : "none",
                }}
              >
                <div
                  className="absolute w-[11px] h-[11px] rounded-full"
                  style={{
                    left: "-3.3rem",
                    top: "3.5rem",
                    background: "var(--bg)",
                    border: "1px solid var(--accent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLDivElement).style.background =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLDivElement).style.background = "var(--bg)";
                  }}
                />
                <div
                  className="font-cormorant text-lg italic pt-1"
                  style={{ color: "var(--accent)" }}
                >
                  {job.period}
                </div>
                <div>
                  <h3
                    className="font-cormorant text-2xl font-medium mb-1 leading-snug"
                    style={{ color: "var(--cream)", letterSpacing: "-0.012em" }}
                  >
                    {job.role}
                  </h3>
                  {job.company && (
                    <div
                      className="text-xs tracking-widest uppercase mb-6"
                      style={{
                        color: "var(--accent)",
                        letterSpacing: "0.18em",
                      }}
                    >
                      {job.company}
                    </div>
                  )}
                  <p
                    className="text-base leading-relaxed max-w-lg"
                    style={{ color: "rgba(237,229,212,0.92)" }}
                  >
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs tracking-wide uppercase px-3 py-1.5 rounded-full"
                        style={{
                          border: "1px solid var(--line-strong)",
                          color: "var(--cream)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="px-8 py-40" style={{ background: "var(--earth)" }}>
        <div className="text-center mb-24">
          <span className="eyebrow justify-center">How I work</span>
          <h2
            className="font-cormorant fade-up mt-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1,
              color: "var(--cream)",
            }}
          >
            Four principles
            <br />I{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              actually
            </em>{" "}
            keep.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1300px] mx-auto">
          {[
            {
              num: "01",
              title: "Performance is a feature.",
              body: "Every millisecond is a decision made about someone's attention. I treat bundle size, LCP, and interaction latency as design problems &mdash; not afterthoughts. The 60s &rarr; 10s cut at Wealthfino was a frontend decision, not a backend one.",
            },
            {
              num: "02",
              title: "Accessibility is the floor.",
              body: "WCAG 2.1 AA isn't a checkbox &mdash; it's the minimum. Semantic HTML, keyboard navigation, and screen-reader semantics are part of the craft. SEBI compliance at Wealthfino was accessibility work dressed up as legal work.",
            },
            {
              num: "03",
              title: "Types travel end-to-end.",
              body: "tRPC, Drizzle, Zod &mdash; types should travel from database to UI without manual translation. The compiler is a member of the team. When the schema changes, the frontend breaks at build time, not in production.",
            },
            {
              num: "04",
              title: "Ship, then refine.",
              body: "A deployed imperfect thing teaches more than a perfect local branch. I prefer small, observable releases to big-bang launches. The GitHub is a mix of good and bad code on purpose &mdash; that's what learning looks like in public.",
            },
          ].map((principle, i) => (
            <div
              key={principle.num}
              className={`fade-up p-12 rounded-xl flex flex-col gap-6 transition-all duration-400 hover:-translate-y-1`}
              style={{
                border: "1px solid rgba(237,229,212,0.24)",
                background: "rgba(20,17,13,0.4)",
                borderRadius: "1.2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(237,229,212,0.24)";
              }}
            >
              <span
                className="font-cormorant text-base italic"
                style={{ color: "var(--accent)" }}
              >
                {principle.num}
              </span>
              <h3
                className="font-cormorant text-2xl font-medium leading-tight"
                style={{ color: "var(--cream)" }}
              >
                {principle.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(237,229,212,0.92)" }}
              >
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section className="px-8 py-40">
        <div className="max-w-[1300px] mx-auto">
          <span className="eyebrow mb-6 fade-up">Credentials</span>
          <h2
            className="font-cormorant text-4xl sm:text-5xl font-medium mb-16 fade-up delay-1"
            style={{ color: "var(--cream)", lineHeight: 1.15 }}
          >
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-up block group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="p-8 rounded-xl h-full"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.4)",
                    transition:
                      "border-color 0.4s var(--ease-quiet), transform 0.4s var(--ease-quiet)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                  >
                    {cert.issuer} &middot; {cert.date}
                  </div>
                  <h3
                    className="font-cormorant text-2xl font-medium mb-3"
                    style={{ color: "var(--cream)" }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(237,229,212,0.82)" }}
                  >
                    {cert.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EDUCATION ============ */}
      <section className="px-8 py-40" style={{ background: "var(--earth)" }}>
        <div className="max-w-[1300px] mx-auto">
          <span className="eyebrow mb-6 fade-up">Background</span>
          <h2
            className="font-cormorant text-4xl sm:text-5xl font-medium mb-16 fade-up delay-1"
            style={{ color: "var(--cream)", lineHeight: 1.15 }}
          >
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="p-8 rounded-xl"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.4)",
                  }}
                >
                  <div
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                  >
                    {edu.period}
                  </div>
                  <h3
                    className="font-cormorant text-2xl font-medium mb-2"
                    style={{ color: "var(--cream)" }}
                  >
                    {edu.degree}
                  </h3>
                  <div
                    className="text-sm mb-3"
                    style={{ color: "rgba(237,229,212,0.82)" }}
                  >
                    {edu.institution}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(237,229,212,0.7)" }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OPEN SOURCE ============ */}
      <section className="px-8 py-40">
        <div className="max-w-[1300px] mx-auto">
          <span className="eyebrow mb-6 fade-up">Contributions</span>
          <h2
            className="font-cormorant text-4xl sm:text-5xl font-medium mb-16 fade-up delay-1"
            style={{ color: "var(--cream)", lineHeight: 1.15 }}
          >
            Open Source
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSource.map((item, i) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-up block group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="p-8 rounded-xl h-full"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.4)",
                    transition:
                      "border-color 0.4s var(--ease-quiet), transform 0.4s var(--ease-quiet)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="font-cormorant text-2xl font-medium"
                      style={{ color: "var(--cream)" }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-xs tracking-widest shrink-0 ml-4"
                      style={{
                        color: "var(--accent)",
                        letterSpacing: "0.16em",
                      }}
                    >
                      &#9733; {item.stars}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(237,229,212,0.82)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="px-8 py-48 pb-32 relative overflow-hidden"
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-24 items-end">
          <div>
            <span className="eyebrow mb-8">Begin a project</span>

            {/* Desktop: particle text canvas */}
            <div className="hidden lg:block">
              <ParticleText />
            </div>

            {/* Mobile / tablet: static heading */}
            <h2
              className="lg:hidden font-cormorant fade-up mt-8"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "var(--cream)",
              }}
            >
              Let's build
              <br />
              something
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                considered
              </em>
              .
            </h2>
            <p
              className="text-base leading-relaxed mt-12 max-w-lg fade-up delay-1"
              style={{ color: "rgba(237,229,212,0.92)" }}
            >
              Open to senior frontend, full-stack, and design-systems work
              &mdash; remote-first, with monthly on-site where useful. A short
              note about your project is the best way to start, or book a
              15-minute intro on Cal.com.
            </p>
            <a
              href="mailto:ayusmehrotra007@gmail.com"
              className="fade-up delay-2 inline-flex items-center gap-4 mt-12 font-cormorant text-2xl italic relative pb-2"
              style={{
                color: "var(--cream)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              }}
            >
              ayusmehrotra007@gmail.com
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6"
                style={{ color: "var(--accent)" }}
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              <span
                className="absolute left-0 right-0 bottom-0 h-px"
                style={{
                  background: "var(--accent)",
                  transform: "scaleX(1)",
                  transformOrigin: "right",
                }}
              />
            </a>

            <div className="fade-up delay-3 flex flex-wrap gap-3 mt-12">
              <SocialMedia />
              <a
                href="https://ayush-mehrotra-portfolio-two.vercel.app/Ayush_Mehrotra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-400"
                style={{
                  background: "var(--accent)",
                  color: "var(--charcoal)",
                  border: "1px solid var(--accent)",
                  letterSpacing: "0.16em",
                }}
              >
                R&eacute;sum&eacute; &darr;
              </a>
            </div>
          </div>

          <aside className="fade-up delay-1 flex flex-col gap-10">
            <div className="w-[140px] h-[140px] relative self-end hidden md:block">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                style={{ animation: "spin-cw 22s linear infinite" }}
              >
                <defs>
                  <path
                    id="badgePath"
                    d="M100,18 A82,82 0 1,1 99.99,18"
                    fill="none"
                  />
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  fill="none"
                  stroke="#C9A37A"
                  strokeWidth="0.6"
                />
                <text
                  fill="#C9A37A"
                  fontFamily="Inter"
                  fontSize="20"
                  fontWeight="500"
                  letterSpacing="3"
                >
                  <textPath href="#badgePath" startOffset="0%">
                    OPEN FOR WORK &middot; 2025 &middot; OPEN FOR WORK &middot;
                    2025 &middot;{" "}
                  </textPath>
                </text>
              </svg>
              <div
                className="absolute inset-0 flex items-center justify-center font-cormorant text-2xl italic"
                style={{ color: "var(--accent)" }}
              >
                &loz;
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  label: "Located",
                  value: "India &middot; Remote &middot; IST",
                },
                { label: "Response", value: "Within two working days" },
                { label: "Engagements", value: "Full-time &middot; Contract" },
              ].map((detail) => (
                <div
                  key={detail.label}
                  className="pt-5"
                  style={{ borderTop: "1px solid var(--line-strong)" }}
                >
                  <div
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
                  >
                    {detail.label}
                  </div>
                  <div
                    className="font-cormorant text-xl"
                    style={{ color: "var(--cream)" }}
                    dangerouslySetInnerHTML={{ __html: detail.value }}
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <div
        className="relative"
        style={{
          height: "300px",
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div className="fixed bottom-0 h-[300px] w-full" style={{ zIndex: 1 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
