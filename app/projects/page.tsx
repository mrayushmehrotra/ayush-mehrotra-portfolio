import ProjectSection from "app/components/ProjectSection";
import { about } from "app/components/resources/content";
const page = () => {
  return (
    <div>
      <section className={` overflow-hidden mt-4 mb-4 p-6 `}>
        {about.work.projects.experiences.map((it, idx) => (
          <ProjectSection
            techStack={it.techStack}
            img={it.image}
            video={it.videoUrl}
            description={it.description}
            title={it.title}
            key={idx}
          />
        ))}
      </section>
    </div>
  );
};

export default page;
