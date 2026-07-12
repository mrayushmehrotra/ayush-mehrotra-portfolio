"use client";

import React, { useEffect, useRef } from "react";

interface GradientMeshProps {
  className?: string;
  style?: React.CSSProperties;
}

interface Blob {
  color: string;
  bx: number;
  by: number;
  ampX: number;
  ampY: number;
  speedX: number;
  speedY: number;
  phase: number;
  radius: number;
  radiusAmp: number;
}

const FALLBACK_COLORS = {
  bg: "#14110D",
  accent: "#C9A37A",
  cream: "#EDE5D4",
  earth: "#1F1B15",
};

function readVar(name: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const n = parseInt(h, 16);
  if (Number.isNaN(n) || h.length !== 6) return [201, 163, 122];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const GradientMesh = ({ className, style }: GradientMeshProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const bg = readVar("--bg", FALLBACK_COLORS.bg);
    const accent = readVar("--accent", FALLBACK_COLORS.accent);
    const cream = readVar("--cream", FALLBACK_COLORS.cream);
    const earth = readVar("--earth", FALLBACK_COLORS.earth);

    const [ar, ag, ab] = hexToRgb(accent);
    const [cr, cg, cb] = hexToRgb(cream);
    const [er, eg, eb] = hexToRgb(earth);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let blobs: Blob[] = [];
    let rafId = 0;
    let start = performance.now();

    const rgba = (r: number, g: number, b: number, a: number) =>
      `rgba(${r},${g},${b},${a})`;

    function buildBlobs() {
      const minDim = Math.min(width, height) || 1;
      const base = minDim * 0.55;
      // Palette derived from the theme — gold, cream, earth, a bronze mid.
      blobs = [
        {
          color: rgba(ar, ag, ab, 0.55),
          bx: 0.32,
          by: 0.3,
          ampX: 0.16,
          ampY: 0.12,
          speedX: 0.00021,
          speedY: 0.00017,
          phase: 0,
          radius: base * 1.05,
          radiusAmp: base * 0.12,
        },
        {
          color: rgba(cr, cg, cb, 0.22),
          bx: 0.7,
          by: 0.28,
          ampX: 0.14,
          ampY: 0.18,
          speedX: 0.00016,
          speedY: 0.00024,
          phase: 1.7,
          radius: base * 0.9,
          radiusAmp: base * 0.1,
        },
        {
          color: rgba(ar, ag, ab, 0.4),
          bx: 0.66,
          by: 0.72,
          ampX: 0.18,
          ampY: 0.13,
          speedX: 0.00019,
          speedY: 0.00022,
          phase: 3.1,
          radius: base * 1.0,
          radiusAmp: base * 0.14,
        },
        {
          color: rgba(er, eg, eb, 0.85),
          bx: 0.28,
          by: 0.74,
          ampX: 0.12,
          ampY: 0.16,
          speedX: 0.00026,
          speedY: 0.00014,
          phase: 4.6,
          radius: base * 1.2,
          radiusAmp: base * 0.1,
        },
        {
          color: rgba(ar, ag, ab, 0.28),
          bx: 0.5,
          by: 0.5,
          ampX: 0.22,
          ampY: 0.2,
          speedX: 0.00012,
          speedY: 0.00013,
          phase: 2.2,
          radius: base * 0.7,
          radiusAmp: base * 0.18,
        },
      ];
    }

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildBlobs();
    }

    function drawFrame(t: number) {
      if (!ctx) return;
      // base
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const elapsed = t - start;
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        const cx = (b.bx + Math.sin(elapsed * b.speedX + b.phase) * b.ampX) * width;
        const cy =
          (b.by + Math.cos(elapsed * b.speedY + b.phase * 1.3) * b.ampY) *
          height;
        const r = b.radius + Math.sin(elapsed * 0.0004 + b.phase) * b.radiusAmp;
        const safeR = Math.max(1, r);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, safeR);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, safeR, 0, Math.PI * 2);
        ctx.fill();
      }

      // gentle darken at edges for depth (vignette), non-additive
      ctx.globalCompositeOperation = "source-over";
      const vg = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.3,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75,
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);
    }

    function loop(t: number) {
      drawFrame(t);
      rafId = requestAnimationFrame(loop);
    }

    const handleResize = () => {
      resize();
      drawFrame(performance.now());
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    resize();

    if (prefersReduced) {
      drawFrame(performance.now());
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          filter: "blur(28px) saturate(1.15) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </div>
  );
};

export default GradientMesh;
