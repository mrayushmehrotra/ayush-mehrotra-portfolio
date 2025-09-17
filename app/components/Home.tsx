import Section from "./MySection";
import TechMarquee from "./Stack";
import { home, person } from "./resources/content";
import BlurView from "./BlurView";

const Home = () => {
  return (
    <BlurView>
      <div className="flex mt-4 relative  justify-between">
        <h1 className="  text-2xl font-semibold tracking-tighter">
          {person.name}
        </h1>
      </div>
      <div className="flex justify-between">
        <div
          style={{
            color: "var(--bg)",
            backgroundColor: "var(--sh-identifier)",
          }}
          className=" w-fit font-semibold py-1 px-4 mt-2 mb-2   rounded-full  "
        >
          {person.role}
        </div>
      </div>

      <Section title={home.label}>
        <p className="mb-4">{home.subline}</p>
      </Section>
      <br />
      <TechMarquee />

      <br />
      <br />
    </BlurView>
  );
};

export default Home;
