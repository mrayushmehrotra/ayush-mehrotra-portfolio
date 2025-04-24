"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Shawitfy",
    description: "Music player with upload capabilities and ad-free listening",
    link: "https://spotify-clone-ashy-five.vercel.app/",
    image: "/spotify.webp",
  },
  {
    title: "AI Subtitle Burner",
    description: "Automated subtitle generation using HuggingFace models",
    link: "#",
    image: "/ai-subtitle.jpg",
  },
  {
    title: "Aideation",
    description: "AI-powered note taking with image generation",
    link: "https://notion-clone-peach-six.vercel.app/",
    image: "/notion.png",
  },
];

export default function ProjectsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const randomX = `${Math.floor(Math.random() * 200 - 100)}vw`; // -100vw to 100vw
      const randomY = `${Math.floor(Math.random() * 200 - 100)}vh`; // -100vh to 100vh

      gsap.fromTo(
        card,
        {
          x: randomX,
          y: randomY,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        },
      );
    });
  }, []);

  return (
    <section className="relative h-[300vh] bg-white">
      {/* Fixed "Projects" Text */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-0">
        <h1 className="text-[20vw] font-black text-black opacity-10 select-none">
          Projects
        </h1>
      </div>

      {/* Floating Project Cards */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center space-y-20 pt-[150vh]">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-[300px] h-[400px] bg-gradient-to-br from-gray-200 to-gray-400 shadow-xl rounded-3xl flex flex-col items-center justify-center p-6 gap-4"
          >
            {project.image && (
              <div className="w-full h-40 bg-gray-300 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h2 className="text-2xl font-bold text-center">{project.title}</h2>
            <p className="text-sm text-gray-700 text-center">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
