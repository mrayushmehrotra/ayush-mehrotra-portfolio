"use client";

export default function PrinciplesSection() {
  return (
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
        ].map((principle) => (
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
  );
}
