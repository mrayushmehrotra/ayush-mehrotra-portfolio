import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";

export default function Home() {
  const Developer = "<Developer /> ";
  return (
    <>
      <div className="h-[90vh]  overflow-hidden    relative w-full flex flex-col items-center justify-center rounded-lg">
        <div className="absolute  inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="flex ">
          <h1
            className={cn(
              " md:text-[5vw] font-[editorialNew] flex uppercase text-3xl text-white   ",
            )}
          >
            <span className="italic">A</span>
            yush &nbsp; <span className="italic">M</span>
            ehrotra
          </h1>
        </div>
        <div className="font-[editorialNew] text-center  uppercase md:text-[5vw] ">
          <h1>INdependent full Stack </h1>
          <h1 className="  font-[neuka] uppercase md:text-[5vw] ">
            {" "}
            {Developer}{" "}
          </h1>
        </div>

        <p className="text-center mt-2 text-neutral-300 relative z-20">
          with expertise in JavaScript and its frameworks. I love Linux because
          it enhances productivity. I&apos;m 21 years old and live in Varanasi,
          UP, India. I&apos;m open to new ideas, learn quickly, and adapt easily
          to new situations.
        </p>
      </div>
    </>
  );
}
