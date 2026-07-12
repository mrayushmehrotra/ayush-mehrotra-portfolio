export default function MarqueeStrip() {
  return (
    <div
      className="py-6 overflow-hidden"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--charcoal)",
      }}
    >
      <div
        className="strip__track font-cormorant text-2xl italic"
        style={{ color: "var(--cream)" }}
      >
        {[...Array(2)].map((_, idx) => (
          <span key={idx} className="strip__track-inner">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>tRPC</span>
            <span>NestJS</span>
            <span>Bun</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>Drizzle</span>
            <span>AWS</span>
            <span>Vercel</span>
            <span>Docker</span>
            <span>Tanstack Query</span>
          </span>
        ))}
      </div>
    </div>
  );
}
