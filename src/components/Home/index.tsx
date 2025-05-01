import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import Navbar from "../nav";
import { motion } from "motion/react";

export default function Home() {
  const Developer = "<Developer /> ";
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.2 }}
    >
      <Navbar />
      <div className="h-[90vh] overflow-hidden  relative w-full flex flex-col items-center justify-center rounded-lg">
        <div className="absolute hidden md:flex   inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="flex ">
          <h1
            className={cn(
              " md:text-[5vw] font-[editorialNew] flex uppercase text-4xl text-white   ",
            )}
          >
            <span className="italic">A</span>
            yush &nbsp; <span className="italic">M</span>
            ehrotra
          </h1>
        </div>
        <br className="md:flex hidden" />
        <br className="md:flex hidden" />
        <div className="font-[editorialNew] text-center text-2xl  uppercase md:text-[4vw] ">
          <h1>INdependent full Stack </h1>
          <br className="md:flex hidden" />
          <br className="md:flex hidden" />

          <h1 className="  font-[editorialNew] uppercase text-2xl  md:text-[5vw] ">
            {" "}
            {Developer}{" "}
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
