"use client";

import { cn } from "lib/cn";
import { useEffect, useRef, useState } from "react";

type AnimationVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "reveal"
  | "scale"
  | "none";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  once?: boolean;
};

export function AnimateIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  once = true,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let observer: IntersectionObserver | undefined;

    // Always set up the initial animation
    timeout = setTimeout(() => {
      setIsVisible(true);
      if (once) setHasAnimated(true);
    }, delay * 1000);

    // Set up intersection observer for scroll-based animations
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (once) setHasAnimated(true);
            } else if (!once) {
              setIsVisible(false);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px' // Start animation when element is 50px from viewport
        },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      clearTimeout(timeout);
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, once]);

  const getAnimationStyles = () => {
    if (hasAnimated && once) return { opacity: 1, transform: 'none' };

    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: "none",
      willChange: 'opacity, transform',
      transition: `opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}s`,
    };

    if (!isVisible) {
      switch (variant) {
        case "fadeUp":
          return { ...baseStyles, transform: "translateY(20px)" };
        case "fadeLeft":
          return { ...baseStyles, transform: "translateX(-20px)" };
        case "fadeRight":
          return { ...baseStyles, transform: "translateX(20px)" };
        case "scale":
          return { ...baseStyles, transform: "scale(0.95)" };
        case "reveal":
          return {
            ...baseStyles,
            clipPath: "inset(0 100% 0 0)",
            transform: "none",
          };
        case "none":
          return { opacity: 1 };
        default:
          return baseStyles;
      }
    }

    if (variant === "reveal" && isVisible) {
      return {
        ...baseStyles,
        clipPath: "inset(0 0 0 0)",
      };
    }

    return baseStyles;
  };

  return (
    <div ref={ref} className={cn(className)} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
