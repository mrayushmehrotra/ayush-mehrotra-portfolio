export default function AboutSection() {
  return (
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
  );
}
