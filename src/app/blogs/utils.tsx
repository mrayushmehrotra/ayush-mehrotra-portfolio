'use client'
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function BlogData() {
  const MyMdx = [
    {
      title: "Windows vs Linux",
      url: "/blogs/windows-vs-linux",
    },
    {
      title: "VS Code vs Neovim",
      url: "/blogs/vscode-vs-nvim",
    },
  ];

  // Hook to track scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into y-axis motion
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]); // Moves from y: 100 to y: 0

  return (
    <motion.div
      className="p-4"
      style={{  y }} // Apply the y-axis animation
    >
      <section className="mb-6 text-lg">
        <h2 className="text-7xl font-bold mb-4">Explore Our Blogs</h2>
        <ul className="space-y-4 flex ">
          {MyMdx.map((item) => (
            <div className="h-[8vh] w-[25vw] border "  >

            <li key={item.title} className="group">
              <Link
                href={item.url}
                className="block text-zinc-700 group-hover:text-emerald-600 font-medium transition-colors duration-300"
                >
                {item.title}
              </Link>
            </li>
                </div>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}