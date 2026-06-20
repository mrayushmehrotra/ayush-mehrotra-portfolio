"use client";

import { useEffect, useState, useRef } from "react";

export function WordReveal({
  words,
  accentIndex,
  className,
  style,
  stagger = 60,
  startDelay = 0,
}: {
  words: string[];
  accentIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  startDelay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300 + startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms,
                         transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms`,
            marginRight: "0.25em",
            fontStyle: accentIndex === i ? "italic" : undefined,
            fontWeight: accentIndex === i ? 400 : undefined,
            color: accentIndex === i ? "var(--accent)" : undefined,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
