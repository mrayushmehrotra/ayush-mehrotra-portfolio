import { cn } from "@/lib/utils";
import Navbar from "../nav";

export default function Home() {
  const Developer = "<Developer />";
  return (
    <div>
      <Navbar />
      <div className="h-[70vh] overflow-hidden relative w-full flex flex-col items-center justify-center rounded-lg">
        <div className="absolute hidden md:flex inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        {/* Name */}
        <div className="flex z-30">
          <h1
            className={cn(
              "md:text-[5vw] font-[editorialNew] flex uppercase text-4xl text-white animate-fade-in",
            )}
          >
            <span className="italic">A</span>
            yush&nbsp;
            <span className="italic">M</span>
            ehrotra
          </h1>
        </div>

        {/* Spacer */}
        <br className="md:flex hidden" />
        <br className="md:flex hidden" />

        {/* Text with Background Mask */}
        <div className="relative">
          <div className="tracking-tight text-center text-white font-[editorialNew] uppercase text-2xl md:text-[5vw]">
            <h1>Independent Full Stack</h1>
            <h1 className="tracking-tight relative inline-block">
              {/* Blurred background for glow effect */}
              <span
                className="absolute inset-0 opacity-70 blur-md z-0"
                style={{
                  backgroundImage:
                    "url('/assets/images/mesh-gradient-optimized.webp')",
                  backgroundSize: "100% 400%",
                  backgroundPositionY: "84.4573%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  animation: "pulse 3s infinite",
                }}
              >
                {Developer}
              </span>

              {/* Animated foreground text */}
              <span
                className="relative z-10"
                style={{
                  backgroundImage:
                    "url('/assets/images/mesh-gradient-optimized.webp')",
                  backgroundSize: "100% 400%",
                  backgroundPositionY: "84.4573%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "red",
                  animation: "pulse 3s infinite",
                }}
              >
                {Developer}
              </span>
            </h1>
          </div>
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
      `}</style>
    </div>
  );
}
