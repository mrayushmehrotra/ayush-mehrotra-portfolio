"use client";

import { useTransitionRouter } from "next-view-transitions";

export function Navbar({
  textColor = "black",
}: {
  textColor?: "black" | "white";
}) {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0px)"
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)"
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",

      }
    )
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Play", href: "/play" },
    { label: "Work", href: "/work" },
  ];

  const isWhite = textColor === "white";
  const primaryTextColor = isWhite ? "#FFFFFF" : "#000000";
  const hoverTextColor = isWhite
    ? "rgba(255, 255, 255, 0.6)"
    : "rgba(0, 0, 0, 0.6)";

  return (
    <>
      {/* ===== Desktop static navbar ===== */}
      <div className="hidden md:block w-full px-8 pt-6">
        <nav className="">
         

          <ul className="flex  items-center justify-between gap-6 list-none mx-6">
            <>
             <a 
          onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              onTransitionReady: slideInOut,
            });
          }}
          aria-label="Ayush Mehrotra"
            href="/"
            className="flex items-center gap-3 font-cormorant text-xl font-medium tracking-tight shrink-0"
            style={{ color: primaryTextColor }}
          >
            Ayush<span style={{ color: "var(--accent)" }}>.</span>
          </a>
          <div className="flex gap-6">

            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.href, {
                    onTransitionReady: slideInOut,
                  });
                }}
                href={item.href}
                className="text-xs font-normal uppercase transition-colors duration-300"
                style={{ color: primaryTextColor, letterSpacing: "0.16em" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = hoverTextColor;
                }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = primaryTextColor;
                  }}
                  >
                  {item.label}
                </a>
              </li>
            ))}
            </div>
            </>
          </ul>
        </nav>
      </div>

      {/* ===== Mobile navbar ===== */}
      <div className="md:hidden w-full px-4 pt-4">
        <nav>
          <ul className="flex items-center justify-between gap-4 list-none mx-2">
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push("/", {
                  onTransitionReady: slideInOut,
                });
              }}
              aria-label="Ayush Mehrotra"
              href="/"
              className="flex items-center gap-3 font-cormorant text-lg font-medium tracking-tight shrink-0"
              style={{ color: primaryTextColor }}
            >
              Ayush<span style={{ color: "var(--accent)" }}>.</span>
            </a>
            <div className="flex gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(item.href, {
                        onTransitionReady: slideInOut,
                      });
                    }}
                    href={item.href}
                    className="text-[10px] font-normal uppercase transition-colors duration-300"
                    style={{ color: primaryTextColor, letterSpacing: "0.16em" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = hoverTextColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = primaryTextColor;
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
