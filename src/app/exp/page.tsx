"use client";

import CustomMouse from "@/components/customMouse";
import DaysAtCodeTikki from "@/components/daysAtCodeTikki";
import { GithubMap } from "@/components/githubCalendar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "Aideation - Notion Alternative",
      url: "/exp/Aideation",
      description:
        "A versatile tool designed to streamline your workflow and boost productivity.",
    },
    {
      title: "Shawtify - A Spotify Alternative",
      url: "/exp/Shawtify",
      description:
        "Experience music streaming like never before with personalized cool features.",
    },
    // Add more experiences as needed
  ];

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <>
      <CustomMouse
        colorInTailwind={"bg-zinc-700 text-white"}
        scale={3}
        innerText={"exp"}
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-8">
              <section className="mt-8">
                <h2 className="text-4xl font-bold mb-8 text-center">
                  My Experience
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {experiences.map((item, index) => (
                    <div
                      key={item.title}
                      className="w-full rounded-md  bg-emerald-400  p-1"
                    >
                      <motion.div
                        key={item.title}
                        className="relative  bg-gray-800 border border-gray-400  p-1   rounded-lg shadow-lg overflow-hidden group h-64"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Link href={item.url} className="block h-full">
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          <div className="relative p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold text-white ">
                              {item.title}
                            </h3>
                            <p className=" text-gray-300 mb-4">
                              {item.description}
                            </p>
                            <span className="mt-auto text-emerald-600  font-medium">
                              Read More →
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-12">
                <DaysAtCodeTikki />
              </div>
              <div className="mt-12">
                <GithubMap />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
