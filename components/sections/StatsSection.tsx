import { StatsCounter } from "../StatsCounter";

export default function StatsSection() {
  return (
    <section className="px-8 py-28" style={{ background: "var(--earth)" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
        {[
          {
            num: "2",
            sup: "+",
            label: "Years shipping",
            desc: "From first commit to production &mdash; across startups, studios, and freelance clients.",
          },
          {
            num: "5",
            sup: "+",
            label: "Products shipped",
            desc: "Invid.ai, Clip.AI, SpidyUI, Shawtify, Promptier &mdash; and counting.",
          },
          {
            num: "3",
            sup: "+",
            label: "Freelance projects",
            desc: "working with offline businesses, startups and pushing them online.",
          },
          {
            num: "15",
            sup: "",
            label: "Tools in rotation",
            desc: "React, Next, tRPC, Drizzle, Prisma, Bun, Docker, AWS, Postgres, and friends.",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="fade-up"
            style={{
              borderLeft: "1px solid rgba(237,229,212,0.32)",
              paddingLeft: "2rem",
            }}
          >
            <div
              className="font-cormorant"
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 1,
                color: "var(--cream)",
                letterSpacing: "-0.02em",
              }}
            >
              <StatsCounter end={parseInt(stat.num)} suffix={stat.sup} />
            </div>
            <div
              className="text-xs tracking-widest uppercase mt-4"
              style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
            >
              {stat.label}
            </div>
            <p
              className="text-sm leading-relaxed mt-6 max-w-64"
              style={{ color: "rgba(237,229,212,0.82)" }}
              dangerouslySetInnerHTML={{ __html: stat.desc }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
