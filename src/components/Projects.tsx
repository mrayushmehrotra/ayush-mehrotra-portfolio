"use client";

import React, { useRef } from "react";
import { Projects } from "@/assets/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = Projects.length;
  const gapSize = 20;

  const yOffsets = [];
  const cardProgressArray = [];
  const rotations = [];
  const awards = [FaTrophy, FaMedal, FaStar];

  for (let index = 0; index < n; index++) {
    const start = index / n;
    const end = (index + 1) / n;
    const gapOffset = index * gapSize;

    yOffsets.push(
      useTransform(
        scrollYProgress,
        [0, start, end, 1],
        [100 + gapOffset, 0, 0, -100 - gapOffset],
      ),
    );

    // Card progress for animation effects
    cardProgressArray.push(
      useTransform(
        scrollYProgress,
        [start, start + 0.2, end - 0.2, end],
        [0, 1, 1, 0],
      ),
    );

    // Rotation effect for 3D perspective
    rotations.push(
      useTransform(
        scrollYProgress,
        [start, (start + end) / 2, end],
        [-10, 0, 10],
      ),
    );
  }

  return (
    <section
      ref={containerRef}
      style={{ height: `${n * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.h1
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-4xl md:text-8xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h1>
        7{" "}
        <div className="relative w-[100%] max-w-6xl h-[90vh]">
          {Projects.map((item, index) => {
            const AwardIcon = awards[index % awards.length];
            return (
              <motion.div
                key={item.id}
                style={{
                  y: yOffsets[index],
                  zIndex: n - index,
                  opacity: cardProgressArray[index],
                  rotateY: rotations[index],
                }}
                className="absolute border border-white  h-full w-full inset-0 flex flex-row justify-between rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                {/* Award Badge Animation */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{
                    scale: [0, 1, 0.9, 1],
                    rotate: [45, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    times: [0, 0.4, 0.7, 1],
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <div className="relative bg-gradient-to-r from-amber-400 to-amber-600 p-3 rounded-full shadow-lg">
                    <AwardIcon className="text-white text-xl" />
                    <div className="absolute inset-0 bg-amber-300 rounded-full mix-blend-soft-light animate-pulse" />
                  </div>
                </motion.div>

                {/* Text Section - Left */}
                <div className="w-1/2 p-6 sm:p-8 text-white flex flex-col justify-center z-10">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                    {item.title}
                  </h1>
                  <p className="text-slate-300 text-base sm:text-lg mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 text-xs py-2 px-4 rounded-full border border-cyan-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Section - Right */}
                <div className="w-1/2 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 bottom-0" />
                  <Image
                    src={`/${item.src}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Floating Award Badges */}
                  <motion.div
                    className="absolute bottom-6 right-6 flex gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-semibold text-white border border-white/10"
                        whileHover={{
                          y: -5,
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }}
                      >
                        Award {i + 1}
                      </motion.div>
                    ))}
                  </motion.div>
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
