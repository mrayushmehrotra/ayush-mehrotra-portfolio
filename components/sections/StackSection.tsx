"use client";

import Image from "next/image";
import ReactIcon from "../icons/React";
import NextIcon from "../icons/Next";
import TypeScriptIcon from "../icons/Typescript";
import TailwindIcon from "../icons/Tailwind";
import TrpcIcon from "../icons/Trpc";
import NestjsIcon from "../icons/Nestjs";
import BunIcon from "../icons/Bun";
import PostgresIcon from "../icons/Postgres";
import PrismaIcon from "../icons/Prisma";
import DrizzleIcon from "../icons/Drizzle";
import AwsIcon from "../icons/Aws";
import DockerIcon from "../icons/Docker";
import VercelIcon from "../icons/Vercel";
import TanstackIcon from "../icons/Tanstack-Query";
import NodejsIcon from "../icons/Nodejs";
import CloudflareIcon from "../icons/Cloudflare";
import GitIcon from "../icons/Git";

export default function StackSection() {
  return (
    <section className="px-8 py-40" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <span className="eyebrow justify-center">Toolbelt</span>
          <h2
            className="font-cormorant fade-up mt-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1,
              color: "var(--cream)",
            }}
          >
            Everything I{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              reach for
            </em>
            .
          </h2>
        </div>

        {[
          {
            label: "Frontend",
            items: [
              { name: "React", icon: ReactIcon },
              { name: "Next.js", icon: NextIcon },
              { name: "TypeScript", icon: TypeScriptIcon },
              { name: "Tailwind", icon: TailwindIcon },
              { name: "Tanstack Query", icon: TanstackIcon },
              { name: "Node.js", icon: NodejsIcon },
            ],
          },
          {
            label: "Backend & Data",
            items: [
              { name: "NestJS", icon: NestjsIcon, img: "/nestjs.png" },
              { name: "tRPC", icon: TrpcIcon },
              { name: "Prisma", icon: PrismaIcon, img: "/prisma.png" },
              { name: "Drizzle", icon: DrizzleIcon },
              { name: "PostgreSQL", icon: PostgresIcon },
              { name: "Bun", icon: BunIcon },
            ],
          },
          {
            label: "Infrastructure",
            items: [
              { name: "Docker", icon: DockerIcon, img: "/docker.png" },
              { name: "AWS", icon: AwsIcon },
              { name: "Vercel", icon: VercelIcon, img: "/vercel.svg" },
              { name: "Cloudflare", icon: CloudflareIcon },
              { name: "Git", icon: GitIcon },
              { name: "Express", img: "/express.png" },
            ],
          },
        ].map((group) => (
          <div key={group.label} className="mb-20 last:mb-0 fade-up">
            <div
              className="text-xs tracking-widest uppercase mb-8"
              style={{ color: "var(--accent)", letterSpacing: "0.24em" }}
            >
              {group.label}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl transition-all duration-400 group"
                  style={{
                    border: "1px solid var(--line)",
                    background: "rgba(20,17,13,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="w-9 h-9 relative flex items-center justify-center">
                    {tech.img ? (
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    ) : tech.icon ? (
                      <tech.icon
                        className="w-full h-full"
                        style={{ filter: "brightness(1.3)" }}
                      />
                    ) : null}
                  </div>
                  <span
                    className="text-xs font-medium text-center leading-tight"
                    style={{ color: "rgba(237,229,212,0.90)" }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
