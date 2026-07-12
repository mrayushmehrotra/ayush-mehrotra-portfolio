"use client";

import Image from "next/image";
import { projects } from "../resources/content";

export default function WorkSection() {
  return (
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
                {project.technologies.slice(0, 2).join(" | ")}
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
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1500 hover:scale-105"
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
  );
}
