"use client";

import { experience } from "../resources/content";
import { ProjectCard } from "../ui/ProjectCard";

const companyImages: Record<string, string> = {
  Wealthfino: "/wealthfino.png",
  "Space AI": "/space_ai.png",
  Codetikki: "/codetikki.png",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-8 py-40">
      <div className="max-w-[1400px] mx-auto">
        {experience.map((job, i) => (
          <ProjectCard
            key={job.period + job.role}
            eyebrow={job.period}
            title={`${job.role}${job.company ? ` — ${job.company}` : ""}`}
            tags={job.technologies}
            description={job.description}
            imageSrc={
              job.company
                ? companyImages[job.company] || "/profile.jpg"
                : "/profile.jpg"
            }
            imageAlt={`${job.company || job.role}`}
            imagePosition={i % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
