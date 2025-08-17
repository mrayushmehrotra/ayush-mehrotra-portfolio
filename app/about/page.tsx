"use client";
import Image from "next/image";
import { about, person, social } from "../components/resources/content";
import { FaGlobeAsia, FaLanguage } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurView from "app/components/BlurView";

const page = () => {
  return (
    <BlurView>
      <div className=" flex items-center justify-center gap-y-4  flex-col">
        <motion.div>
          <Image
            src={about.avatar}
            alt={about.intro.title}
            height={90}
            width={90}
            className="rounded-full border-black border"
          />
        </motion.div>
        <motion.div className="flex items-center overflow-hidden  gap-x-2 ">
          <motion.span
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          >
            <FaGlobeAsia />
          </motion.span>
          <span>{person.location}</span>
        </motion.div>

        <motion.div className="flex overflow-hidden  gap-x-2 items-center">
          <motion.span
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
          >
            <FaLanguage />
          </motion.span>
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
        </motion.div>
        <div className="flex gap-x-2">
          {social.map((it, idx) => (
            <Link href={it.link} key={idx * 2}>
              <span
                className="flex overflow-hidden items-center justify-center gap-x-2 hover:bg-zinc-900  border border-zinc-700 px-4 py-1 rounded-full "
                key={idx}
              >
                <motion.span
                  initial={{ y: 20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    delay: 2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {it.icon}
                </motion.span>
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
            <ul key={idx} className="pl-4">
              <li className=" list-disc ml-2  text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {item.description}
              </li>
            </ul>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }} // start hidden and slightly below
        whileInView={{ opacity: 1, y: 0 }} // animate to visible
        viewport={{ once: true, amount: 0.2 }} // trigger when 20% of element is in view
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-6 p-4 md:p-6"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl tracking-tighter font-semibold">
            {about.technical.title}
          </h1>
          {about.technical.skills.map((item, idx) => (
            <ul key={idx} className="pl-4">
              <ul key={idx}>
                <li className="flex  gap-x-2 items-center text-xl font-semibold tracking-tighter ml-2 text-gray-700 dark:text-gray-300  ">
                  {item.icons} <span>{item.title}</span>
                </li>
              </ul>
              <li className=" list-disc ml-10  text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {item.description}
              </li>
            </ul>
          ))}
        </div>
      </motion.div>
      <br />
      <br />
      <br />
    </BlurView>
  );
};

export default page;
