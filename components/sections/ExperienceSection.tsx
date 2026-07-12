"use client";

import { experience } from "../resources/content";

export default function ExperienceSection() {
  return (
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
  );
}
