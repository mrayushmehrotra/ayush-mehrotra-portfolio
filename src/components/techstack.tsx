"use client";

import { useEffect, useMemo } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import ScrollingText from "./ScrollingText";

interface StackItem {
  stack: string;
  imageurl: string;
  id?: string;
}

interface StackData {
  frontend: StackItem[];
  backend: StackItem[];
  databases: StackItem[];
  tools: StackItem[];
  others: StackItem[];
}

export default function TechStack() {
  const stackdata: StackData = {
    frontend: [
      { stack: "React", imageurl: "/react.png" },
      { stack: "Next.js", imageurl: "/nextjs.png" },
      { stack: "TailwindCSS", imageurl: "/tailwind.png" },
      { stack: "TypeScript", imageurl: "/ts.svg.png" },
    ],
    backend: [
      { stack: "Node.JS", imageurl: "/nodejs.png" },
      { stack: "Express.JS", imageurl: "/express.png" },
      { stack: "Python", imageurl: "/python.png" },
      { stack: "FastAPI", imageurl: "/fastapi.png" },
    ],
    databases: [
      { stack: "MongoDB", imageurl: "/Mongodb.png" },
      { stack: "MySQL", imageurl: "/mysql.png" },
      { stack: "Prisma", imageurl: "/prisma.png" },
    ],
    tools: [
      { stack: "Git", imageurl: "/git.png" },
      { stack: "Docker", imageurl: "/docker.png" },
      { stack: "NeoVim", imageurl: "/vim.png" },
    ],
    others: [
      { stack: "GraphQL", imageurl: "/graphql.png" },
      { stack: "Linux", imageurl: "/linux.png" },
    ],
  };

  const memoizedStackData: StackData = useMemo(() => {
    const addUniqueId = (data: StackItem[]): StackItem[] =>
      data.map((item) => ({
        ...item,
        id: `${item.stack}-${Math.random()}`,
      }));
    return {
      frontend: addUniqueId(stackdata.frontend),
      backend: addUniqueId(stackdata.backend),
      databases: addUniqueId(stackdata.databases),
      tools: addUniqueId(stackdata.tools),
      others: addUniqueId(stackdata.others),
    };
  }, [stackdata]);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="w-full h-fit overflow-hidden">
      <ScrollingText />
      <div className="h-fit p-4 md:p-8 space-y-8">
        {Object.entries(memoizedStackData).map(([category, items], index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center justify-around px-4 py-8 md:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          >
            <div className="w-full m-4 md:w-[40%] space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-7xl font-bold capitalize font-[neuka]">
                {category}
              </h1>
              <p className="text-base md:text-lg text-neutral-400">
                {getCategoryDescription(category)}
              </p>
            </div>
            <div className="   w-full md:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8 border rounded-xl bg-neutral-900/50 backdrop-blur-sm">
              {items.map((item: StackItem) => (
                <motion.div
                  drag
                  key={item.id}
                  dragConstraints={{ left: 2, right: 20, top: 0, bottom: 0 }}
                  className="relative p-[3px] overflow-hidden rounded-md group"
                  whileHover={{ scale: 0.95 }}
                >
                  {/* Moving gradient background */}
                  <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-[#34D399]  via-zinc-500 to-emerald-600 animate-moving-background bg-[length:200%_200%]" />

                  {/* Content container */}
                  <div className="relative z-10 flex items-center gap-4 p-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors">
                    <Image
                      src={item.imageurl}
                      alt={item.stack}
                      width={48}
                      height={48}
                      className="object-contain  rounded-lg"
                    />
                    <span className="text-lg md:text-xl font-medium">
                      {item.stack}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getCategoryDescription(category: string): string {
  switch (category) {
    case "frontend":
      return "Crafting immersive user experiences with modern frontend technologies and responsive design principles.";
    case "backend":
      return "Building robust and scalable server-side architectures with performance in mind.";
    case "databases":
      return "Designing efficient data storage solutions and optimized query systems.";
    case "tools":
      return "Utilizing industry-standard tools for version control, containerization, and development workflows.";
    case "others":
      return "Implementing additional technologies to enhance application capabilities and infrastructure.";
    default:
      return "Technical expertise in modern development technologies and best practices.";
  }
}
