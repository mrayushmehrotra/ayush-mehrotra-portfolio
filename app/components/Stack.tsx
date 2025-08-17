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
];

const databaseTools = [
  { name: "MongoDB", img: "Mongodb.png" },
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
          className="w-fit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            padding: "1px 38px 0px 19px",
            gap: "10px",
            borderRadius: "555px",
            backgroundColor: "#111",
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
              color: "white",
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
