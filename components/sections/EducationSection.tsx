"use client";

import { education } from "../resources/content";

export default function EducationSection() {
  return (
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
  );
}
