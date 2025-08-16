import Section from "./components/MySection";
import TechMarquee from "./components/Stack";
import { home, person } from "./components/resources/content";
export default function Page() {
  return (
    <>
      <div className="flex mt-4  justify-between">
        <h1 className="  text-2xl font-semibold tracking-tighter">
          {person.name}
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="bg-zinc-800 w-fit py-1 px-4 mt-2 mb-2   rounded-full  ">
          {person.role}
        </div>
      </div>

      <Section title={home.label}>
        <p className="mb-4">{home.subline}</p>
      </Section>

      <TechMarquee />
    </>
  );
}
