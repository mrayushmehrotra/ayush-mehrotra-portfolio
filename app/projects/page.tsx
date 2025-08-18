import BlurView from "app/components/BlurView";
import ProjectSection from "app/components/ProjectSection";
import { about } from "app/components/resources/content";
const page = () => {
  return (
    <BlurView>
      <section className={` overflow-hidden mt-4 mb-4 p-6 `}>
        {about.work.projects.experiences.map((it, idx) => (
          <ProjectSection
            url={it.url}
            techStack={it.techStack}
            img={it.image}
            video={it.videoUrl}
            // @ts-ignore
            description={it.description}
            title={it.title}
            key={idx}
          />
        ))}
      </section>
    </BlurView>
  );
};

export default page;
