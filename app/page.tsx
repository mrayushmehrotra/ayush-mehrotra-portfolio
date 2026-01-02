"use client";

import {
  TabsContent,
  Tabs,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import BlurView from "../components/BlurView";
import { AnimateIn } from "lib/animation/Animation";
import { cn } from "lib/cn";
import { projects, experience, tools } from "../components/resources/content";
import { ExternalLink, Folder, Briefcase, Wrench } from "lucide-react";
import { track } from "@vercel/analytics/react";
import SocialMedia from "../components/SocialMedia";
import Certification from "components/Certification";
import StatusBadge from "components/StatusBadge";
import Footer from "components/Footer";
import BackToTop from "components/BackToTop";
import ScrollProgress from "components/ScrollProgress";

// Tech badge color mapping for visual variety
const techColors: { [key: string]: string } = {
  "Next.js": "bg-zinc-900 text-white",
  "TypeScript": "bg-blue-100 text-blue-700",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700",
  "React": "bg-sky-100 text-sky-700",
  "Node.js": "bg-green-100 text-green-700",
  "PostgreSQL": "bg-indigo-100 text-indigo-700",
  "Postgres": "bg-indigo-100 text-indigo-700",
  "MongoDB": "bg-emerald-100 text-emerald-700",
  "Python": "bg-yellow-100 text-yellow-700",
  "FastAPI": "bg-teal-100 text-teal-700",
  "Docker": "bg-blue-100 text-blue-700",
  "AWS": "bg-orange-100 text-orange-700",
  "Google APIs": "bg-red-100 text-red-700",
  "Stripe": "bg-purple-100 text-purple-700",
  "Shadcn UI": "bg-zinc-100 text-zinc-700",
  "Payload CMS": "bg-zinc-100 text-zinc-700",
  "PayloadCMS": "bg-zinc-100 text-zinc-700",
  "React Native": "bg-sky-100 text-sky-700",
  "SQL": "bg-amber-100 text-amber-700",
  "Figma": "bg-pink-100 text-pink-700",
  "Facebook APIs": "bg-blue-100 text-blue-700",
  "Rust": "bg-orange-100 text-orange-700",
  "Lua": "bg-indigo-100 text-indigo-700",
  "Bash": "bg-zinc-100 text-zinc-700",
  "Go": "bg-cyan-100 text-cyan-700",
  "React.js": "bg-sky-100 text-sky-700",
};

const getTechColor = (tech: string) => {
  return techColors[tech] || "bg-zinc-100 text-zinc-600";
};

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <BlurView>
        {/* Status Badge */}
        <StatusBadge />

        {/* Hero Section */}
        <div className="flex justify-between mt-2">
          <AnimateIn variant="fadeLeft" delay={0.4}>
            <p className="text-base text-zinc-600 max-w-xl mb-6 leading-relaxed">
              <span className="font-medium text-zinc-900">21 yo Software Engineer</span> from India.
              Loves to transform ideas into reality.{" "}
              <span className="text-zinc-500">Currently building</span>{" "}
              <a
                href="https://pmspace.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 hover:underline underline-offset-2 transition-all"
                onClick={() => track("spaceai_email_clicked")}
              >
                SpaceAi
              </a>{" "}
              <span className="text-zinc-500">and</span>{" "}
              <a
                href="https://logchimp.codecarrot.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 hover:underline underline-offset-2 transition-all"
                onClick={() => track("sigma-zeta-six_clicked")}
              >
                Logchimp
              </a>
              .
            </p>
          </AnimateIn>
        </div>

        {/* Social Media Links */}
        <AnimateIn variant="fadeRight" delay={0.6}>
          <div className="flex items-center gap-5 mb-8 p-3 rounded-xl bg-white shadow-[0_0_15px_rgba(55,65,81,0.1)] w-fit">
            <SocialMedia />
          </div>
        </AnimateIn>

        {/* Tabs Section */}
        <div className="flex items-center justify-start">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="mb-8 border-none bg-white/90 backdrop-blur-xl w-fit p-1 rounded-xl shadow-[0_0_15px_rgba(55,65,81,0.08)]">
              <TabsTrigger
                value="projects"
                className={cn(
                  "!rounded-lg  !px-4 !py-2 !transition-all !duration-200",
                  "!font-medium data-[state=active]:!font-semibold",
                  "!text-zinc-500 hover:!text-zinc-700",
                  "data-[state=active]:!bg-zinc-900 data-[state=active]:!text-white data-[state=active]:!shadow-md",
                )}
              >
                <div className="flex items-center gap-1.5">
                  <Folder className="w-4 h-4" />
                  <span>Projects</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className={cn(
                  "!rounded-lg !px-4 !py-2 !transition-all !duration-200",
                  "!font-medium data-[state=active]:!font-semibold",
                  "!text-zinc-500 hover:!text-zinc-700",
                  "data-[state=active]:!bg-zinc-900 data-[state=active]:!text-white data-[state=active]:!shadow-md",
                )}
              >
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className={cn(
                  "!rounded-lg !px-4 !py-2 !transition-all !duration-200",
                  "!font-medium data-[state=active]:!font-semibold",
                  "!text-zinc-500 hover:!text-zinc-700",
                  "data-[state=active]:!bg-zinc-900 data-[state=active]:!text-white data-[state=active]:!shadow-md",
                )}
              >
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4" />
                  <span>Tools</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-0">
              <AnimateIn variant="fadeLeft" delay={0.1} once={false}>
                <section className="mb-12">
                  <div className="space-y-4">
                    <ul className="space-y-4">
                      {projects.map((project, index) => {
                        const delay = 0.1 + index * 0.1;
                        return (
                          <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                            <li className="group p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] hover:shadow-[0_0_30px_rgba(55,65,81,0.18)] hover:translate-x-1 transition-all duration-300 ease-out">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-zinc-900">
                                  {project.title}
                                </h3>
                                <div className="flex flex-row gap-3">
                                  {project.github ? (
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-2 py-1 rounded-md hover:bg-zinc-100"
                                      onClick={() =>
                                        track(`${project.title}_github_clicked`)
                                      }
                                    >
                                      GitHub <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : null}
                                  {project.link ? (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-2 py-1 rounded-md hover:bg-zinc-100"
                                      onClick={() =>
                                        track(`${project.title}_clicked`)
                                      }
                                    >
                                      Live <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : null}
                                </div>
                              </div>
                              <p className="text-sm text-zinc-600 mb-3 leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className={cn(
                                      "text-xs font-medium px-2.5 py-1 rounded-full transition-transform hover:scale-105",
                                      getTechColor(tech)
                                    )}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </li>
                          </AnimateIn>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </AnimateIn>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-0">
              <AnimateIn variant="fadeLeft" delay={0.1} once={false}>
                <section className="mb-12">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent ml-2 hidden sm:block" />

                    <ul className="space-y-4">
                      {experience.map((job, index) => {
                        const delay = 0.1 + index * 0.1;
                        const isPresent = job.period?.toLowerCase().includes("present");
                        return (
                          <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                            <li className="group p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] hover:shadow-[0_0_30px_rgba(55,65,81,0.18)] hover:translate-x-1 transition-all duration-300 ease-out sm:ml-6 relative">
                              {/* Timeline dot */}
                              <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-white border-2 border-zinc-300 hidden sm:block group-hover:border-zinc-500 transition-colors">
                                {isPresent && (
                                  <span className="absolute inset-0.5 rounded-full bg-green-500 animate-pulse" />
                                )}
                              </div>

                              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-1">
                                <div>
                                  <h3 className="text-lg font-semibold text-zinc-900">
                                    {job.role}
                                  </h3>
                                  {job.company && (
                                    <p className="text-sm text-zinc-600">
                                      {job.role.toLowerCase().includes("freelance") || job.role.toLowerCase().includes("self")
                                        ? ""
                                        : "at "}{job.company}
                                    </p>
                                  )}
                                </div>
                                <span className={cn(
                                  "text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap",
                                  isPresent
                                    ? "bg-green-100 text-green-700"
                                    : "bg-zinc-100 text-zinc-600"
                                )}>
                                  {job.period}
                                </span>
                              </div>
                              <p className="text-sm text-zinc-600 mb-3 leading-relaxed">
                                {job.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className={cn(
                                      "text-xs font-medium px-2.5 py-1 rounded-full transition-transform hover:scale-105",
                                      getTechColor(tech)
                                    )}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </li>
                          </AnimateIn>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </AnimateIn>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="mt-0">
              <AnimateIn variant="fadeLeft" delay={0.1}>
                <div className="p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] mb-6">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Frontend
                  </h2>
                  <section>
                    <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                      {tools.frontend.map(({ Logo, title }, index) => (
                        <AnimateIn
                          key={index}
                          variant="fadeLeft"
                          delay={0.1 + index * 0.03}
                          className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                        >
                          <div className="flex flex-col items-center group cursor-pointer">
                            <div className="relative h-10 w-10 sm:h-12 sm:w-12 mb-3 p-2 rounded-xl bg-zinc-50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                              <Logo className="h-full w-full" />
                            </div>
                            <span className="text-xs font-medium text-zinc-600 text-center whitespace-nowrap group-hover:text-zinc-900 transition-colors">
                              {title}
                            </span>
                          </div>
                        </AnimateIn>
                      ))}
                    </div>
                  </section>
                </div>
              </AnimateIn>
              <AnimateIn variant="fadeLeft" delay={0}>
                <div className="p-5 rounded-xl bg-white shadow-[0_0_20px_rgba(55,65,81,0.12)] mb-12">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Backend & Infrastructure
                  </h2>
                  <section>
                    <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                      {tools.backend_and_infrastructure.map(
                        ({ Logo, title }, index) => (
                          <AnimateIn
                            key={index}
                            variant="fadeLeft"
                            delay={0.1 + index * 0.03}
                            className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                          >
                            <div className="flex flex-col items-center group cursor-pointer">
                              <div className="relative h-10 w-10 sm:h-12 sm:w-12 mb-3 p-2 rounded-xl bg-zinc-50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md">
                                <Logo className="h-full w-full" />
                              </div>
                              <span className="text-xs font-medium text-zinc-600 text-center whitespace-nowrap group-hover:text-zinc-900 transition-colors">
                                {title}
                              </span>
                            </div>
                          </AnimateIn>
                        ),
                      )}
                    </div>
                  </section>
                </div>
              </AnimateIn>
            </TabsContent>
          </Tabs>
        </div>

        {/* Certification & Education */}
        <Certification />

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </BlurView>
    </>
  );
}
