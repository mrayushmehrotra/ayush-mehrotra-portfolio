"use client";

import { certifications } from "../resources/content";

export default function CertificationsSection() {
  return (
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
  );
}
