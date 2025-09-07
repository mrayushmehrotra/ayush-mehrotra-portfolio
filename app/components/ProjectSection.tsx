"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  url: string;
  img: string;
  title: string;
  description: string[];
  techStack: string[];
}

const ProjectSection = ({
  url,
  img,
  title,
  description,
  techStack,
}: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="group border-b lg:p-4 border-zinc-700 mt-8 relative rounded-3xl overflow-hidden shadow-xl ">
        {/* Image / Video */}
        <div className="relative flex items-center justify-center rounded-3xl  w-full  overflow-hidden">
          <Image
            src={img}
            alt={title}
            height={450}
            width={450}
            className={`object-cover transition-all duration-700 rounded-3xl ease-in-out `}
          />

          {/* Gradient overlay */}
        </div>
        {/* Content */}
        <div className="relative z-10 p-6">
          <div className=" flex items-center justify-between text-2xl tracking-tighter font-semibold">
            <center>{title}</center>
            <Link href={url}>
              <FaExternalLinkAlt />
            </Link>
          </div>

          {/* Tech stack as modern chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1 rounded-full 
             border border-black/20 dark:border-white/10
             bg-white text-black dark:bg-zinc-900 dark:text-white
             backdrop-blur-md shadow-sm hover:scale-105 transition"
              >
                <Image
                  src={`/${item}`}
                  alt={item}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-xs font-medium ">
                  {item.split(".")[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <ul className="mt-5 space-y-2 text-sm leading-relaxed">
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
    </motion.div>
  );
};

export default ProjectSection;
