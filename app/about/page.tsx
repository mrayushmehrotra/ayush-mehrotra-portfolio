"use client";
import Image from "next/image";
import { about, person, social } from "../components/resources/content";
import { FaGlobeAsia, FaLanguage } from "react-icons/fa";
import Section, { WorkExpSection } from "app/components/MySection";
import Link from "next/link";
import { motion } from "framer-motion";
const page = () => {
  return (
    <motion.div
      initial={{
        filter: "blur(20px)",
        y: 10,
        opacity: 0,
      }}
      animate={{
        filter: "blur(0px)",
        y: 0,

        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        staggerChildren: 0.5,
      }}
      className="mt-4"
    >
      <div className=" flex items-center justify-center gap-y-4  flex-col">
        <div className="">
          <Image
            src={about.avatar}
            alt={about.intro.title}
            height={90}
            width={90}
            className="rounded-full border-black border"
          />
        </div>
        <div className="flex items-center  gap-x-2 ">
          <FaGlobeAsia /> <span>{person.location}</span>
        </div>

        <div className="flex gap-x-2 items-center">
          <FaLanguage />
          <div className="flex gap-x-2">
            {person.languages.map((it, idx) => (
              <span
                className="border border-zinc-700 px-4 py-1 rounded-full "
                key={idx}
              >
                {it}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-x-2">
          {social.map((it, idx) => (
            <Link href={it.link} key={idx * 2}>
              <span
                className="flex items-center justify-center gap-x-2 hover:bg-zinc-900  border border-zinc-700 px-4 py-1 rounded-full "
                key={idx}
              >
                {it.icon}
                {it.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <br />
      <p>{about.intro.description}</p>

      <motion.div
        initial={{ opacity: 0, y: 30 }} // start hidden and slightly below
        whileInView={{ opacity: 1, y: 0 }} // animate to visible
        viewport={{ once: true, amount: 0.2 }} // trigger when 20% of element is in view
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 p-4 md:p-6"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl tracking-tighter font-semibold">
            {about.studies.title}
          </h1>
          {about.studies.institutions.map((item, idx) => (
            <ul key={idx} className="p-4">
              <li className=" list-disc  text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {item.description}
              </li>
            </ul>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default page;
