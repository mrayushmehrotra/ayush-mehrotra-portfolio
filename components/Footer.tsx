export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className="py-8 px-8 h-full w-full flex flex-col justify-between"
      style={{ background: "#1A1815" }}
    >
      <div className="flex justify-between items-end">
        <h1
          className="font-cormorant"
          style={{
            fontSize: "clamp(3rem, 14vw, 10rem)",
            lineHeight: 0.8,
            color: "var(--cream)",
            fontWeight: 500,
          }}
        >
          Ayush Mehrotra
        </h1>
        <p
          className="text-xs tracking-widest uppercase shrink-0"
          style={{ color: "rgba(237,229,212,0.5)", letterSpacing: "0.16em" }}
        >
          &copy; {year}
        </p>
      </div>
    </div>
  );
}
