"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const FooterData = [
  {
    project: "Admin Dashboard",
    category: "Development",
    year: "2023",
    data: {
      title:
        "Fixed Responsiveness of Admin Dashboard UI and integrated working features with Responsiveness",
      date: "Jan'23 - Mar'23",
      url: "https://codetikki.in/admin/dashboard",
      img: "/codetikki_dashboard.jpg",
    },
  },
  {
    project: "Employee Login Form",
    category: "Development",
    year: "2023",
    data: {
      title:
        "Crafted Employee login form single-handedly from scratch while using Figma",
      date: "Jan'23 - Mar'23",
      img: "/codetikki_dashboard.jpg",
      url: "https://codetikki.in/admin/employee/signup",
    },
  },
];

export const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [show, isShow] = useState<number | null>(null);
  const mainDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainDiv,
  });
  console.log(scrollYProgress);
  return (
    <motion.div ref={mainDiv} className=" p-8  ">
      {/* Header Row - Fixed */}
      <motion.div className="grid md:grid-cols-3 grid-cols-2 text-zinc-400 p-2">
        <p className="text-left col-span-1 md:col-span-1">Project</p>
        <p className="text-center hidden md:block md:col-span-1">Category</p>
        <p className="text-right col-span-1 md:col-span-1">YEAR</p>
      </motion.div>

      {/* Data Rows */}
      {FooterData.map((data, index) => (
        <div key={index} className="relative overflow-hidden">
          {/* Expanding Hover Effect */}
          <motion.hr
            className="bg-white h-px w-full absolute bottom-0 left-0"
            initial={{ scaleY: 1 }}
            animate={{
              scaleY: hoveredIndex === index && show === null ? 200 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          />

          <motion.div
            onClick={() => isShow(show === index ? null : index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`grid grid-cols-2 md:grid-cols-3 transition-all duration-150 p-2 relative z-10 ${
              hoveredIndex === index
                ? "text-black bg-white bg-opacity-10"
                : "text-white"
            }`}
          >
            <p className="text-left col-span-1 md:col-span-1">{data.project}</p>
            <p className="text-center hidden md:block md:col-span-1">
              {data.category}
            </p>
            <p className="text-right col-span-1 md:col-span-1">{data.year}</p>
          </motion.div>

          {show === index && (
            <motion.div
              className="h-[80vh] flex flex-col w-full text-white p-8"
              initial={{ z: 0, y: "-50%" }}
              animate={{ z: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <h1 className="md:text-[5em]   capitalize  text-zinc-300 font-semibold">
                {data.data.title}
              </h1>
              <br />
              <div className="flex flex-col text-3xl">
                <p>{data.data.date}</p>
                <Link href={data.data.url} className="underline text-blue-400">
                  {data.data.url}
                </Link>
              </div>
              <div className="  mt-5 h-[50%] w-full  ">
                <Image
                  src={data.data.img}
                  height={250}
                  width={350}
                  alt={data.data.img}
                />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};
