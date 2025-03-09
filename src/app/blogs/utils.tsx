"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function BlogData() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const blogs = [
    {
      title: "Windows vs Linux",
      url: "/blogs/windows-vs-linux",
      description:
        "A comprehensive comparison between Windows and Linux operating systems.",
      blogVideo: "/tux-fighting.mp4",
    },
    {
      title: "VS Code vs Neovim",
      url: "/blogs/vscode-vs-nvim",
      description:
        "An in-depth look at the features of VS Code and Neovim for developers.",
      blogVideo: "/vimVsCode.mp4",
    },
    // Add more blog entries as needed
  ];
  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  return (
    <div className="p-4">
      <section className="mb-6 text-lg">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
          Explore Our Blogs
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={blog.title}
              className="w-full rounded-md  bg-emerald-400  p-1"
            >
              <motion.div
                key={blog.title}
                className="w-full rounded-md bg-gray-800 border border-gray-400  p-1 relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
              >
                {/* Video Background */}
                {hoveredIndex === index && (
                  <motion.div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full z-10  h-full object-cover"
                    >
                      <source src={blog.blogVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                  </motion.div>
                )}

                {/* Blog Card Content */}
                <motion.div
                  className="relative h-64 rounded-lg shadow-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={blog.url}>
                    <p className="block h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="relative p-6 h-full flex flex-col justify-between z-10">
                        <h3 className="text-2xl font-semibold mb-2  text-white">
                          {blog.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{blog.description}</p>
                        <span className="mt-auto text-emerald-400 font-medium">
                          Read More →
                        </span>
                      </div>
                    </p>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
