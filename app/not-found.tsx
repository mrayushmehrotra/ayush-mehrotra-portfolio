import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{ background: "var(--bg)" }}
    >
      <h1
        className="font-cormorant"
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: 500,
          lineHeight: 0.9,
          letterSpacing: "-0.03em",
          color: "var(--cream)",
        }}
      >
        404
      </h1>
      <p
        className="mt-6 text-lg leading-relaxed text-center max-w-md"
        style={{ color: "rgba(237,229,212,0.82)" }}
      >
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-10 text-xs tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-400"
        style={{
          color: "var(--charcoal)",
          background: "var(--accent)",
          letterSpacing: "0.16em",
        }}
      >
        Go back home
      </Link>
    </main>
  );
}
