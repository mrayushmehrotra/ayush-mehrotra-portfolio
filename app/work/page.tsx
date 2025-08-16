import { WorkExpSection } from "app/components/MySection";
import { about } from "app/components/resources/content";

const page = () => {
  return (
    <div>
      {about.work.experiences.map((item, idx) => (
        <WorkExpSection
          key={idx * 2}
          time={item.timeframe}
          jobTitle={item.role}
          points={item.achievements}
          companyTitle={item.company}
        ></WorkExpSection>
      ))}
    </div>
  );
};

export default page;
