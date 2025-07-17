import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function Home() {
  const Developer = "Web & Android Developer  ";
  return (
    <>
      <div className="flex pt-5 ">
        <div className="md:pl-24   pl-12">
          <div className="md:h-[60vh] md:w-[70vw] h-[50vh] overflow-hidden relative flex flex-col items-start justify-center">
            <div>
              <h1
                className={cn(
                  "  text-7xl md:text-8xl lg:text-9xl 2xl:text-10xl font-bold font-[editorialNew] flex text-4xl text-white animate-fade-in text-left",
                )}
              >
                <span>A</span>
                yush&nbsp;
                <span>M</span>
                ehrotra
              </h1>
            </div>

            <br className="md:flex hidden" />
            <br className="md:flex hidden" />
            <br className="md:flex hidden" />

            <div
              className="relative w-full flex flex-col items-start justify-start"
              style={{ minHeight: 200 }}
            >
              <h1
                className="md:text-9xl GradientText blur pointer-events-none text-4xl font-[editorialNew] absolute font-bold text-left"
                style={{
                  backgroundImage: "url('/mesh-gradient-optimized.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "zoom 10s infinite",
                  left: 0,
                  width: "100%",
                  paddingLeft: "0.5rem",
                }}
              >
                {Developer}
              </h1>
              <h1
                className="md:text-9xl GradientText pointer-events-none text-4xl font-[editorialNew] absolute font-bold text-left"
                style={{
                  backgroundImage: "url('/mesh-gradient-optimized.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "zoom 10s infinite",
                  left: 0,
                  width: "100%",
                  paddingLeft: "0.5rem",
                }}
              >
                {Developer}
              </h1>{" "}
              <h1
                className="md:text-9xl GradientText text-4xl z-[10] selection:bg-purple-500 font-[editorialNew] absolute font-bold text-left"
                style={{
                  backgroundImage: "url('/mesh-gradient-optimized.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "zoom 10s infinite",
                  left: 0,
                  width: "100%",
                  paddingLeft: "0.5rem",
                }}
              >
                {Developer}
              </h1>
            </div>
          </div>

          <style jsx global>{`
            @keyframes pulse {
              0%,
              100% {
                background-size: 100% 400%;
              }
              50% {
                background-size: 120% 420%;
              }
            }
            .GradientText::selection {
              background: #a855f7; /* Tailwind's purple-500 */
              color: black;
            }
          `}</style>
        </div>
        <TechStackSemicircle />
      </div>
    </>
  );
}

// Semicircle tech stack icons with glow on hover
function TechStackSemicircle() {
  const [hovered, setHovered] = useState(-1);
  const icons = [
    { src: "/react.png", alt: "React" },
    { src: "/vim.png", alt: "Vim" },
    { src: "/nodejs.png", alt: "Node.js" },
    { src: "/tailwind.png", alt: "Tailwind CSS" },
    { src: "/python.png", alt: "Python" },
    { src: "/docker.png", alt: "Docker" },
    { src: "/git.png", alt: "Git" },
    { src: "/github.png", alt: "GitHub" },
    { src: "/mongodb.svg", alt: "MongoDB" },
    { src: "/mysql.png", alt: "MySQL" },
    { src: "/prisma.png", alt: "Prisma" },
    { src: "/graphql.png", alt: "GraphQL" },
    { src: "/express.png", alt: "Express" },
    { src: "/linux.png", alt: "Linux" },
  ];
  return (
    <div className="h-[360px] w-[360px] hidden md:flex relative items-center ml-4">
      <div className="w-full h-full relative" style={{ minHeight: 360 }}>
        {icons.map((icon, i, arr) => {
          const radius = 360;
          const angle = Math.PI * (i / (arr.length - 1)) + 11;
          const x = Math.cos(angle - Math.PI) * radius + radius;
          const y = Math.sin(angle - Math.PI) * radius;
          const isHovered = hovered === i;
          const isAnyHovered = hovered !== -1;
          return (
            <img
              key={icon.src}
              src={icon.src}
              alt={icon.alt}
              className={
                `absolute scale-150 transition-all duration-300 cursor-pointer ` +
                (isHovered
                  ? "opacity-100 drop-shadow-[0_0_16px_#a855f7] z-20"
                  : isAnyHovered
                    ? "opacity-30"
                    : "opacity-50")
              }
              style={{
                left: `${x}px`,
                bottom: `${y}px`,
                width: 48,
                height: 48,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
            />
          );
        })}
      </div>
    </div>
  );
}
