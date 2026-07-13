"use client";

import Image from "next/image";
import { projects } from "../resources/content";

export default function PlaySection() {
  return (
    <section id="play" className="px-8 py-40">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-28">
          <span className="eyebrow justify-center mb-8">Playground</span>
          <h2
            className="font-cormorant fade-up mt-6"
            style={{
              fontSize: "clamp(3rem, 6.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
            }}
          >
            Side projects,
            <br />
            built for the{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              fun
            </em>{" "}
            of it.
          </h2>
          <p
            className="font-cormorant text-lg italic mt-6 fade-up delay-1"
            style={{ color: "var(--accent)" }}
          >
            Experiments, tools &amp; toys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="fade-up group relative overflow-hidden rounded-xl"
              style={{
                borderRadius: "1.2rem",
                background: "rgba(237,229,212,0.03)",
                border: "1px solid var(--line)",
                transition: "all 0.5s var(--ease-quiet)",
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter: "contrast(0.95) saturate(0.72) brightness(0.86)",
                  }}
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-cormorant font-medium mb-2"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "var(--cream)",
                    letterSpacing: "-0.018em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(237,229,212,0.8)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-wide uppercase px-2 py-1 rounded-full"
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
                <div className="flex gap-4">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
