import { ProjectCard } from "@/components/ui/ProjectCard";
import Image from "next/image";
import { experience } from "../resources/content";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-8 py-32 lg:py-48 max-w-[1200px] mx-auto w-full bg-[#FFFFFF]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-32">
        {/* Left Column: About Me & Quick Facts */}
        <div className="flex flex-col">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-12 relative shadow-sm">
            <Image
              src="/Ayush_Mehrotra_Image.jpg"
              alt="Ayush Mehrotra"
              fill
              className="object-cover grayscale-[100%]"
            />
          </div>

          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A LITTLE ABOUT ME
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-zinc-800 leading-tight mb-8"
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I'm Ayush!
          </h2>

          <div className="text-zinc-500 text-[14.5px] sm:text-[15px] font-normal leading-[1.8] space-y-5 max-w-lg pr-4 mb-16">
            <p>
              I'm a software engineer focused on building scalable web
              applications, AI-powered products, and developer tools. My primary
              expertise lies in full-stack JavaScript and TypeScript, where I
              enjoy designing systems that are fast, maintainable, and pleasant
              to use.
            </p>
            <p>
              I'm currently pursuing a B.Sc. in Mathematics while managing my
              family's retail business alongside my studies. Balancing
              academics, business responsibilities, and self-learning has taught
              me discipline, consistency, and the ability to learn independently
              under real-world constraints.
            </p>
            <p>
              Most of my work revolves around modern web technologies including
              React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Redis,
              Docker, and cloud deployment. Recently, I've been expanding into
              AI engineering, backend architecture, distributed systems, and
              machine learning.
            </p>
            <p>
              I enjoy solving engineering problems more than simply writing
              code. Whether it's optimizing APIs, designing scalable
              architectures, building AI workflows, or creating polished
              frontend experiences, I like understanding how systems work from
              first principles.
            </p>
            <p>
              Outside software, I spend time training in boxing, volleyball,
              wrestling, and strength training. Sports have shaped my approach
              to engineering by teaching discipline, adaptability, and
              continuous improvement. I also enjoy experimenting with product
              ideas, building side projects, and exploring new technologies.
            </p>
            <p>
              Today, my goal is simple: become an engineer capable of building
              products that solve meaningful problems while continually
              improving my technical depth across software engineering, AI, and
              distributed systems.
            </p>
          </div>

          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            EXPERIENCE
          </span>

          <div className="flex flex-col space-y-7 max-w-lg mb-10">
            {experience.map((job, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-zinc-700 font-bold text-[14.5px] mb-1">
                  {job.role} @ {job.company}
                </h4>
                <span className="text-zinc-500 text-[14px] font-normal">
                  {job.period}
                </span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="/Ayush_Mehrotra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 text-[14.5px] hover:text-zinc-800 border-b border-zinc-400 hover:border-zinc-800 pb-0.5 transition-colors inline-block"
            >
              Download full resume here &darr;
            </a>
          </div>
        </div>

        {/* Right Column: My Values */}
        <div className="flex flex-col lg:pt-3">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            MY VALUES
          </span>

          <div className="space-y-10">
            {/* Value 1 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>🛠️</span> Build Things That Matter.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                Technology should solve real problems. I prefer creating
                products that people actually use instead of building projects
                solely to fill a portfolio.
              </p>
            </div>

            {/* Value 2 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>📚</span> Never Stop Learning.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                The technology landscape changes constantly. I dedicate time to
                learning computer science fundamentals, distributed systems, AI,
                backend engineering, and software architecture because strong
                fundamentals outlast frameworks.
              </p>
            </div>

            {/* Value 3 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>🧠</span> Think From First Principles.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                Rather than memorizing solutions, I prefer understanding why
                systems work. Breaking complex problems into smaller pieces
                helps me build reliable software and learn faster.
              </p>
            </div>

            {/* Value 4 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>📈</span> Consistency Beats Motivation.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                Progress comes from showing up every day, even when time is
                limited. Managing college, business responsibilities, fitness,
                and software development has reinforced the value of disciplined
                execution.
              </p>
            </div>

            {/* Value 5 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>⚡</span> Performance Matters.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                Whether it's application performance, clean architecture, user
                experience, or developer experience, I believe thoughtful
                engineering creates products that people enjoy using.
              </p>
            </div>

            {/* Value 6 */}
            <div>
              <h3 className="text-zinc-700 font-bold text-[15px] mb-2 flex items-center gap-2">
                <span>📢</span> Build Publicly.
              </h3>
              <p className="text-zinc-500 text-[14px] font-normal leading-[1.7]">
                Sharing projects, documenting progress, and contributing back to
                the developer community creates opportunities to learn from
                others while helping them solve similar problems.
              </p>
            </div>
          </div>

          {/* Bottom Image Polaroid Style */}
          <div className="mt-14 p-4 pb-16 sm:p-5 sm:pb-20 bg-white w-full rounded shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative transition-transform duration-700 hover:scale-[1.02] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-zinc-100">
              <Image
                src="/ayush_mehrotra_2.jpg"
                alt="Aesthetics"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-5 sm:bottom-7 text-zinc-300 font-serif tracking-[0.4em] text-[10px] sm:text-[11px] uppercase font-bold w-full text-center">
              Do what you love
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
