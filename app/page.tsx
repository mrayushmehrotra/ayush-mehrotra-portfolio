"use client";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import BlurView from "../components/BlurView";
import { AnimateIn } from "lib/animation/Animation";
import { cn } from "lib/cn";
import { projects, experience, tools } from "../components/resources/content";
import { ExternalLink } from "lucide-react";
import { track } from "@vercel/analytics/react";
import SocialMedia from "../components/SocialMedia";

export default function Page() {
  return (
    <BlurView>

      <div className="flex justify-between mt-4">
        <AnimateIn variant="fadeUp" delay={0.4}>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
            Software Engineer from India. Contact me below. Currently building{" "}
            <a
              href="https://pmspace.ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text)',
              }}
              onClick={() => track("spaceai_email_clicked")}
            >
              SpaceAi
            </a>{" "}
            and{" "}
            <a
              href="https://sigma-zeta-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text)',
              }}
              onClick={() => track("sigma-zeta-six_clicked")}
            >
              Sigma UI
            </a>
            .
          </p>
        </AnimateIn>

      </div>
      <AnimateIn variant="fadeRight" delay={0.6}>
        <div className="flex items-center gap-5 mb-4">
          <SocialMedia />
        </div>
      </AnimateIn>



      <Tabs defaultValue="projects">
        <AnimateIn variant="fadeUp" delay={0.2}>
          <TabsList className="mb-4 border-none bg-transparent p-0 -ml-[8px]">
            <TabsTrigger
              value="projects"
              className={cn(
                "!bg-transparent !border-none !shadow-none",
                "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                "!text-[var(--text)] opacity-70 hover:opacity-100",
                "data-[state=active]:!text-[var(--text)] data-[state=active]:opacity-100"
              )}
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className={cn(
                "!bg-transparent !border-none !shadow-none",
                "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                "!text-[var(--text)] opacity-70 hover:opacity-100",
                "data-[state=active]:!text-[var(--text)] data-[state=active]:opacity-100"
              )}
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className={cn(
                "!bg-transparent !border-none !shadow-none",
                "!font-light data-[state=active]:!font-bold transition-all duration-300 ease-out",
                "!text-[var(--text)] opacity-70 hover:opacity-100",
                "data-[state=active]:!text-[var(--text)] data-[state=active]:opacity-100"
              )}
            >
              Tools
            </TabsTrigger>
          </TabsList>
        </AnimateIn>

        <TabsContent value="projects">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {projects.map((project, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">
                              {project.title}
                            </h3>
                            <div className="flex flex-row gap-2">
                              {project.github ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
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
                                  className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                  onClick={() =>
                                    track(`${project.title}_clicked`)
                                  }
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs text-zinc-400 dark:text-zinc-500"
                              >
                                {tech}
                                {techIndex < project.technologies.length - 1
                                  ? " /"
                                  : ""}
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

        <TabsContent value="experience">
          <AnimateIn variant="fadeUp" delay={0}>
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  {experience.map((job, index) => {
                    const delay = 0.1 + index * 0.1;
                    return (
                      <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                        <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-md font-medium">
                              {job.role}{" "}
                              {job.role.toLowerCase().includes("freelance")
                                ? ""
                                : "at"}{" "}
                              {job.company}
                            </h3>
                            <span className="text-xs text-zinc-400 dark:text-zinc-500">
                              {job.period}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs text-zinc-400 dark:text-zinc-500"
                              >
                                {tech}
                                {techIndex < job.technologies.length - 1
                                  ? " /"
                                  : ""}
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
        <TabsContent value="tools">
          <AnimateIn variant="fadeUp" delay={0}>
            <h2 className="text-md font-medium mb-4">Frontend</h2>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                {tools.frontend.map(({ Logo, title }, index) => (
                  <AnimateIn
                    key={index}
                    variant="scale"
                    delay={0.1 + index * 0.03}
                    className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                  >
                    <div className="flex flex-col items-center group">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                        <Logo className="h-full w-full" />
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
                        {title}
                      </span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </section>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0}>
            <h2 className="text-md font-medium mb-4">
              Backend and Infrastructure
            </h2>
            <section className="mb-12">
              <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                {tools.backend_and_infrastructure.map(
                  ({ Logo, title }, index) => (
                    <AnimateIn
                      key={index}
                      variant="scale"
                      delay={0.1 + index * 0.03}
                      className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                    >
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
                          {title}
                        </span>
                      </div>
                    </AnimateIn>
                  ),
                )}
              </div>
            </section>
          </AnimateIn>
        </TabsContent>
      </Tabs>
    </BlurView>
  );
}
