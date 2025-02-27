"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

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

  // Memoizing the entire stack data with unique IDs
  const memoizedStackData: StackData = useMemo(() => {
    const addUniqueId = (data: StackItem[]): StackItem[] =>
      data.map((item) => ({
        ...item,
        id: `${item.stack}-${Math.random()}`, // Adding a unique ID
      }));
    return {
      frontend: addUniqueId(stackdata.frontend),
      backend: addUniqueId(stackdata.backend),
      databases: addUniqueId(stackdata.databases),
      tools: addUniqueId(stackdata.tools),
      others: addUniqueId(stackdata.others),
    };
  }, [
    stackdata.backend,
    stackdata.frontend,
    stackdata.databases,
    stackdata.tools,
    stackdata.others,
  ]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const splitCategoryName = (category: string) => {
    const half = Math.ceil(category.length / 2);
    const firstHalf = category.slice(0, half);
    const secondHalf = category.slice(half);
    return { firstHalf, secondHalf };
  };

  return (
    <>
      <div ref={mouseRef} className="w-full overflow-hidden ">
        <ScrollingText />
        {/* Big 4 List */}
        <div className="space-y-4">
          {Object.entries(memoizedStackData).map(([category, items]) => {
            const { firstHalf, secondHalf } = splitCategoryName(category);
            const isActive = activeCategory === category;

            return (
              <motion.div
                key={category}
                className="h-[100px] md:h-[150px] lg:h-[200px] w-full relative overflow-hidden border-t border-b border-gray-300 dark:border-gray-700 group"
                style={{ perspective: "1000px" }} // Add perspective for 3D effect
                whileInView={{ x: 0 }}
                initial={{ x: "100%" }}
                transition={{ delay: 0.3 }}
                onClick={() => handleCategoryClick(category)}
              >
                {/* Front Side (Category Name) */}
                <motion.div
                  className="w-full h-full flex justify-center items-center absolute inset-0 bg-white dark:bg-[#222]"
                  initial={{ x: 0 }}
                  animate={{ x: isActive ? "-100%" : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-2xl md:text-4xl lg:text-8xl uppercase font-bold z-10 text-center bg-gradient-to-r from-emerald-400 to-zinc-400    bg-clip-text text-transparent transition duration-300 hover:brightness-125 hover:drop-shadow-lg">
                    <span>{firstHalf}</span>
                    <span>{secondHalf}</span>
                  </div>
                </motion.div>

                {/* Back Side (Tech Stack Icons) */}
                <motion.div
                  className="w-full h-full flex justify-center items-center bg-white dark:bg-[#222] absolute inset-0"
                  initial={{ x: "100%" }} // Start off-screen to the right
                  animate={{ x: isActive ? 0 : "100%" }} // Swipe in from the right when active
                  transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring transition
                  style={{ backfaceVisibility: "hidden" }} // Hide the back side during flip
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex gap-2 md:gap-4 z-10">
                    {items.map((item: StackItem) => (
                      <motion.div
                        key={item.id}
                        drag
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2"
                      >
                        <Image
                          src={item.imageurl}
                          alt={item.stack}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="text-sm md:text-lg font-semibold text-black dark:text-white">
                          {item.stack}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
