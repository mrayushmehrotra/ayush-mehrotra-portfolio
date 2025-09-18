import BlurView from "app/components/BlurView";
import { WorkExpSection } from "app/components/MySection";
import { about } from "app/components/resources/content";

const page = () => {
  return (
    <BlurView>
      {about.work.experiences.map((item) => (
        <WorkExpSection
          key={item.company}
          time={item.timeframe}
          jobTitle={item.role}
          points={item.achievements}
          companyTitle={item.company}
        ></WorkExpSection>
      ))}
      <br />
      <br />
    </BlurView>
  );
};

export default page;
