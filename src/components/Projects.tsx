"use client";

import React, { useRef } from "react";
import { Projects } from "@/assets/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = Projects.length;
  const gapSize = 20; // Gap between cards in pixels

  return (
    <section
      ref={containerRef}
      style={{ height: `${n * 100}vh` }}
      className="relative  bg-black"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <h1 className="font-semibold text-2xl  text-white md:text-8xl sm:text-4xl mb-20">
          Project Section
        </h1>

        <div className="relative w-[80%] h-[70vh]">
          {Projects.map((item, index) => {
            const start = index / n;
            const end = (index + 1) / n;

            const gapOffset = index * gapSize;

            const yOffset = useTransform(
              scrollYProgress,
              [0, start, end, 1],
              [
                100 + gapOffset,
                100 * 2 + gapOffset,
                -100 * 2 - gapOffset,
                -100 - gapOffset,
              ],
            );

            return (
              <motion.div
                key={item.id}
                style={{
                  y: yOffset,
                  zIndex: n + index, // Ensures proper stacking order
                }}
                className="absolute h-[60vh] inset-0 flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Details */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 text-white flex flex-col justify-center bg-black order-2 md:order-1">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    {item.title}
                  </h1>
                  <p className="text-base sm:text-lg">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-sm  sm:text-xs  py-2 px-4    rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 h-full relative order-1 md:order-2">
                  <Image
                    src={`/${item.src}`}
                    alt={item.title}
                    fill
                    className="object-cover md:rounded-l-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
