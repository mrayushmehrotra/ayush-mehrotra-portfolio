export default function ExpertiseSection() {
  return (
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
  );
}
