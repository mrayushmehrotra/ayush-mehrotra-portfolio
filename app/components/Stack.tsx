"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Tech stacks categorized
const frontend = [
  { name: "React", img: "react.png" },
  { name: "Next.js", img: "nextjs.png" },
  { name: "Tailwind", img: "tailwind.png" },
  { name: "TypeScript", img: "ts.svg.png" },
];

const backend = [
  { name: "Node.js", img: "nodejs.png" },
  { name: "Express", img: "expressjs.png" },
  { name: "FastAPI", img: "fastapi.png" },
  { name: "Python", img: "python.png" },
  { name: "BetterAuth", img: "betterAuth.svg" },
  { name: "Torch", img: "pyTorch.svg" },
];

const databaseTools = [
  { name: "MongoDB", img: "Mongodb.png" },
  { name: "turborepo", img: "turborepo.png" },
  { name: "n8n", img: "n8n.png" },
  { name: "MySQL", img: "mysql.png" },
  { name: "Postman", img: "postman.png" },
  { name: "Prisma", img: "prisma.png" },
  { name: "Docker", img: "docker.png" },
  { name: "Git", img: "git.png" },
  { name: "GitHub", img: "github.png" },
  { name: "Vim", img: "vim.png" },
];

const Marquee = ({ items, reverse = false, duration = 15 }) => (
  <div
    style={{
      overflow: "hidden",
    }}
  >
    <motion.div
      style={{
        display: "flex",
        gap: "20px",
      }}
      animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      {items.concat(items).map((tech, idx: number) => (
        <div
          key={idx}
          className="bg-zinc-300  dark:bg-zinc-800 w-fit py-1 px-4 mt-2 mb-2   rounded-full  "
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "var(--card-bg)",
            justifyContent: "left",
            padding: "1px 38px 0px 19px",
            gap: "10px",
            borderRadius: "555px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
          }}
        >
          <Image
            src={`/${tech.img}`}
            alt={tech.name}
            width={30}
            height={30}
            style={{
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />

          <span
            style={{
              fontWeight: "600",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function TechMarquees() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: "8px",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Marquee items={frontend} reverse={false} duration={20} />
      <Marquee items={backend} reverse={true} duration={25} />
      <Marquee items={databaseTools} reverse={false} duration={30} />
    </div>
  );
}
