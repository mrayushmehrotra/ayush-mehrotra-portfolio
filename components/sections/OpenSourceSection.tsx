"use client";

import { openSource } from "../resources/content";

export default function OpenSourceSection() {
  return (
    <section className="px-8 py-40">
      <div className="max-w-[1300px] mx-auto">
        <span className="eyebrow mb-6 fade-up">Contributions</span>
        <h2
          className="font-cormorant text-4xl sm:text-5xl font-medium mb-16 fade-up delay-1"
          style={{ color: "var(--cream)", lineHeight: 1.15 }}
        >
          Open Source {"</>"}
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
  );
}
