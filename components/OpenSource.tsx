"use client";

import { AnimateIn } from "lib/animation/Animation";
import { Star, CodeXml, ExternalLink } from "lucide-react";
import Link from "next/link";

interface OpenSourceItem {
  title: string;
  stars: string;
  description: string;
  link: string;
  post?: string;
}

const projects: OpenSourceItem[] = [
  {
    title: "Dubinc/Dub",
    stars: "23.3k",
    description:
      "Fixed UI modal styling and OAuth login validation errors affecting workspace creation.",
    link: "https://github.com/Dubinc/dub",
  },
  {
    title: "Nestjs/nest-cli",
    stars: "2.2k",
    description: "worked as moderator to close random and fake pr for a month",
    link: "https://github.com/Nestjs/nest-cli",
  },
  {
    title: "firecrawl/firecrawl",
    stars: "103k",
    description:
      "Fix Worker service leaks temp files in /tmp causing disk full",
    link: "https://github.com/Nestjs/nest-cli",
  },
];

export default function OpenSource() {
  return (
    <div className="mt-8">
      <AnimateIn variant="fadeLeft" delay={0.1}>
        <div className="flex ">
          <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <CodeXml className="w-5 h-5" />
            Open Source
          </h2>
        </div>
      </AnimateIn>
      <div className="space-y-4">
        {projects.map((project, index) => {
          const delay = 0.1 + index * 0.1;
          return (
            <AnimateIn key={index} variant="fadeLeft" delay={delay}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] hover:shadow-[0_0_30px_rgba(55,65,81,0.18)] hover:translate-x-1 transition-all duration-300 ease-out"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm font-medium text-zinc-600">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
