import React, { useState } from "react";
import { Projects } from "../assets/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const getField = (project, field: string, fallback: string) =>
  project[field] || fallback;

const ProjectSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const handleRowClick = (title: string) => {
    setSelected((prev) => (prev === title ? null : title));
  };

  return (
    <div className="p-8 w-full mx-auto">
      {/* Header Row */}
      <div className="flex w-full border-b border-white pb-2 mb-2 text-left text-lg font-semibold text-white">
        <p className="flex-1">Project</p>
        <p className="flex-1">Category</p>
        <p className="flex-1">Client</p>
        <p className="flex-1">Year</p>
        <p className="flex-1">Link</p>
      </div>
      {/* Project Rows */}
      {Projects.map((project) => (
        <div key={project.title} className="w-full">
          <div className="relative w-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: hoveredRow === project.title ? "100%" : 0 }}
              transition={{ duration: 0.35, ease: [0.3, 0.2, 0.2, 0.8] }}
              className="absolute left-0 top-0 w-full bg-white z-0 pointer-events-none"
              style={{
                borderTop: "1px solid #fff",
                borderBottom: "1px solid #fff",
              }}
            />
            <motion.div
              layout
              initial={false}
              className={`flex w-full  items-center transition-all hover:scale-95 hover:duration-100  duration-200 cursor-pointer relative z-10   border-t border-b border-white
                ${selected === project.title ? "border-l-4 border-blue-400" : "border-l-4 border-transparent"}
              `}
              style={{
                color:
                  hoveredRow === project.title && selected !== project.title
                    ? "#111"
                    : selected === project.title
                      ? "#fff"
                      : "#fff",
              }}
              onMouseEnter={() => setHoveredRow(project.title)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => handleRowClick(project.title)}
            >
              <p className="flex-1 font-semibold py-3 px-2 transition-colors duration-500">
                {project.title}
              </p>
              <p className="flex-1 py-3 px-2 transition-colors duration-75">
                {getField(project, "category", "Web App")}
              </p>
              <p className="flex-1 py-3 px-2 transition-colors duration-75">
                {getField(project, "client", "Personal")}
              </p>
              <p className="flex-1 py-3 px-2 transition-colors duration-75">
                {getField(project, "year", "2024")}
              </p>
              <p className="flex-1 py-3 px-2 transition-colors duration-75">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400 hover:text-blue-600"
                >
                  Visit
                </a>
              </p>
            </motion.div>
          </div>
          {/* Details Panel */}
          <AnimatePresence initial={false}>
            {selected === project.title && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7, ease: [0.3, 0.2, 0.2, 0.8] }}
                className="flex border-l-4 border-blue-400 rounded-b-md shadow-lg overflow-hidden border-t border-b border-white relative"
                style={{ background: "none" }}
              >
                <Image
                  height={200}
                  width={200}
                  src={"/" + project.src}
                  alt={project.title}
                  className="w-28 h-28 object-cover rounded-md m-4 border-2 border-blue-400"
                />
                <div className="flex flex-col justify-center p-4 text-white">
                  <p className="text-xl font-bold mb-2">{project.title}</p>
                  <p>
                    <span className="font-semibold text-blue-400">
                      Category:
                    </span>{" "}
                    {getField(project, "category", "Web App")}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-400">Client:</span>{" "}
                    {getField(project, "client", "Personal")}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-400">Year:</span>{" "}
                    {getField(project, "year", "2024")}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2"
                  >
                    Visit Project
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
