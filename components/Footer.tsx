export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: "https://github.com/mrayushmehrotra" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-mehrotra-99419724b" },
    { label: "X", href: "https://x.com/AYUSH070707" },
    { label: "YouTube", href: "https://www.youtube.com/@ayush_mehrotra_csdev" },
    { label: "Résumé", href: "https://ayush-mehrotra-portfolio-two.vercel.app/Ayush_Mehrotra.pdf" },
  ];

  return (
    <footer
      className="py-6 px-8 border-t"
      style={{
        background: "var(--charcoal)",
        borderColor: "var(--line)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(237,229,212,0.65)", letterSpacing: "0.16em" }}>
          &copy; {year} Ayush Mehrotra &middot; Built by hand
        </p>
        <ul className="flex gap-8 flex-wrap list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "rgba(237,229,212,0.82)", letterSpacing: "0.16em" }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "rgba(237,229,212,0.82)"; }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
