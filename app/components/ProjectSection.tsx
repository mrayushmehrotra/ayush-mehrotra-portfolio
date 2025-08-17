"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectSection = ({ url, img, title, description, video, techStack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link target="_blank" href={url}>
        <div
          className="  group relative rounded-3xl overflow-hidden shadow-xl 
          bg-gradient-to-br from-white/80 to-white/60 dark:from-neutral-900/80 dark:to-neutral-800/60 
          backdrop-blur-xl border border-white/20 dark:border-white/10 
          transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image / Video */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden">
            <Image
              src={img}
              alt={title}
              fill
              className={`object-cover transition-all duration-700 ease-in-out `}
            />

            {/* Gradient overlay */}
          </div>

          {/* Content */}
          <div className="relative z-10 p-6">
            <h1
              className="text-3xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 
              dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent"
            >
              {title}
            </h1>

            {/* Tech stack as modern chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 rounded-full 
                  bg-white/70 dark:bg-neutral-800/70 border border-white/20 dark:border-white/10 
                  backdrop-blur-md shadow-sm hover:scale-105 transition"
                >
                  <Image
                    src={`/${item}`}
                    alt={item}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200">
                    {item.split(".")[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <ul className="text-neutral-600 dark:text-neutral-400 mt-5 space-y-2 text-sm leading-relaxed">
              {description.map((desc, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {desc}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSection;
