"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  size: number;
  topics: string[];
}

// ─── Language Config ──────────────────────────────────────────────────────────
const langConfig: Record<string, { gradient: string; dot: string }> = {
  TypeScript: { gradient: "from-violet-500 to-fuchsia-500", dot: "bg-violet-400" },
  JavaScript: { gradient: "from-amber-400 to-orange-500",  dot: "bg-amber-400"  },
  Python:     { gradient: "from-emerald-400 to-teal-500",  dot: "bg-emerald-400"},
  Astro:      { gradient: "from-rose-500 to-pink-500",     dot: "bg-rose-400"   },
  HTML:       { gradient: "from-sky-400 to-blue-500",      dot: "bg-sky-400"    },
  Shell:      { gradient: "from-green-400 to-lime-500",    dot: "bg-green-400"  },
  CSS:        { gradient: "from-purple-500 to-indigo-500", dot: "bg-purple-400" },
  default:    { gradient: "from-zinc-400 to-zinc-600",     dot: "bg-zinc-400"   },
};

// Vary card aspect ratios for natural masonry height variation
const ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[2/3]",
  "aspect-[5/4]",
  "aspect-[4/5]",
];

function getLang(lang: string | null) {
  return langConfig[lang ?? ""] ?? langConfig.default;
}

function relativeTime(dateStr: string) {
  const days = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 86_400_000
  );
  if (days < 1) return "today";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
function SkeletonCard({ aspectClass }: { aspectClass: string }) {
  return (
    <div
      className={`w-full ${aspectClass} rounded-2xl bg-zinc-100 border border-zinc-200 animate-pulse`}
    />
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ repo, index }: { repo: GithubRepo; index: number }) {
  const cfg = getLang(repo.language);
  const href = repo.homepage || repo.html_url;
  const aspectClass = ASPECTS[repo.id % ASPECTS.length];
  // Picsum: seeded by repo.id → always same image per project, free, no API key
  const imageUrl = `https://picsum.photos/seed/${repo.id}/800/900`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative ${aspectClass} rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl`}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* ── Stock photo fill ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* ── Gradient overlays ── */}
      {/* Ambient dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {/* Subtle top vignette for badges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

      {/* ── Top accent strip (language colour) ── */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cfg.gradient}`}
      />

      {/* ── Arrow button — top right ── */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      {/* ── Live pill — top left ── */}
      {repo.homepage && (
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-[10px] font-medium text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live
        </div>
      )}

      {/* ── Bottom content ── */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        {/* Language + Stars row */}
        <div className="flex items-center gap-2 mb-2.5">
          {repo.language && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] text-white/70">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {repo.stargazers_count}
            </span>
          )}
          <span className="ml-auto text-[11px] text-white/40">
            {relativeTime(repo.updated_at)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-[15px] leading-snug mb-1.5 drop-shadow-sm">
          {repo.name
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h3>

        {/* Description */}
        {repo.description && (
          <p className="text-white/65 text-[12px] leading-relaxed line-clamp-2 drop-shadow-sm">
            {repo.description}
          </p>
        )}
      </div>
    </motion.a>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
const INITIAL_SHOW = 12;
const SKELETON_ASPECTS = [
  "aspect-[3/4]", "aspect-[4/3]", "aspect-square",
  "aspect-[2/3]", "aspect-[5/4]", "aspect-[4/5]",
  "aspect-[3/4]", "aspect-[4/3]", "aspect-square",
  "aspect-[4/5]", "aspect-[5/4]", "aspect-[2/3]",
];

export default function PlaySection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // ── Parallax scroll refs ──
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Middle column rises, outer columns sink
  const yMiddle = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yOuter  = useTransform(scrollYProgress, [0, 1], [0, 400]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/mrayushmehrotra/repos?per_page=100&sort=updated"
    )
      .then((r) => r.json())
      .then((data: GithubRepo[]) => {
        const filtered = data
          .filter(
            (r) =>
              !r.fork &&
              !r.archived &&
              r.name !== "mrayushmehrotra" &&
              r.name !== "dotfiles" &&
              r.name !== "learn" &&
              r.language !== null
          )
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const visible = showAll ? repos : repos.slice(0, INITIAL_SHOW);

  // Split into 3 explicit columns for desktop parallax
  const col0 = visible.filter((_, i) => i % 3 === 0); // left
  const col1 = visible.filter((_, i) => i % 3 === 1); // middle
  const col2 = visible.filter((_, i) => i % 3 === 2); // right

  return (
    <section
      ref={sectionRef}
      id="play"
      className="relative min-h-screen bg-[#FFFFFF] py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-20 overflow-hidden"
    >
      {/* Ambient tints */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-zinc-300" />
            <span className="text-zinc-400 text-[11px] tracking-[0.3em] uppercase font-medium">
              Open Source
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] text-zinc-900"
              style={{ letterSpacing: "-0.02em" }}
            >
              PROJECTS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xs leading-relaxed sm:text-right">
              Every project I&apos;ve shipped — fetched live from GitHub.
            </p>
          </div>
        </motion.div>

        {/* ── Error ── */}
        {error && (
          <div className="text-center py-24 text-zinc-400">
            <p className="text-base mb-2">Couldn&apos;t load repositories.</p>
            <a
              href="https://github.com/mrayushmehrotra"
              className="text-violet-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        )}

        {/* ── Loading skeletons ── */}
        {loading && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {SKELETON_ASPECTS.map((a, i) => (
              <div key={i} className="break-inside-avoid mb-4">
                <SkeletonCard aspectClass={a} />
              </div>
            ))}
          </div>
        )}

        {/* ── Masonry grid ── */}
        {!loading && !error && (
          <>
            {/* Mobile / tablet: CSS columns (no parallax) */}
            <div className="columns-1 sm:columns-2 lg:hidden gap-4">
              <AnimatePresence>
                {visible.map((repo, i) => (
                  <div key={repo.id} className="break-inside-avoid mb-4">
                    <ProjectCard repo={repo} index={i} />
                  </div>
                ))}
              </AnimatePresence>
            </div>

            {/* Desktop: 3 explicit columns with scroll-driven parallax */}
            <div className="hidden lg:flex items-start gap-4">
              {/* Left — sinks down */}
              <motion.div style={{ y: yOuter }} className="flex-1 flex flex-col gap-4 will-change-transform">
                {col0.map((repo, i) => (
                  <ProjectCard key={repo.id} repo={repo} index={i * 3} />
                ))}
              </motion.div>

              {/* Middle — rises up */}
              <motion.div style={{ y: yMiddle }} className="flex-1 flex flex-col gap-4 will-change-transform">
                {col1.map((repo, i) => (
                  <ProjectCard key={repo.id} repo={repo} index={i * 3 + 1} />
                ))}
              </motion.div>

              {/* Right — sinks down */}
              <motion.div style={{ y: yOuter }} className="flex-1 flex flex-col gap-4 will-change-transform">
                {col2.map((repo, i) => (
                  <ProjectCard key={repo.id} repo={repo} index={i * 3 + 2} />
                ))}
              </motion.div>
            </div>

            {/* Show More / Less */}
            {repos.length > INITIAL_SHOW && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-zinc-200 text-zinc-500 text-sm font-medium hover:border-zinc-300 hover:text-zinc-800 transition-all duration-300"
                >
                  <span>
                    {showAll
                      ? "Show less"
                      : `Show ${repos.length - INITIAL_SHOW} more projects`}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="https://github.com/mrayushmehrotra"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800"
              >
                <span>View GitHub Profile</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}