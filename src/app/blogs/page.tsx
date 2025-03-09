import CustomMouse from "@/components/customMouse";
import { BlogData } from "./utils";
export default function Page() {
  return (
    <>
      <CustomMouse
        colorInTailwind={"bg-zinc-700  "}
        scale={3}
        innerText={"blog"}
        textClassName={"text-xs"}
      />
      <section className="mt-8">
        <br />
        <p className="italic text-lg text-center text-gray-700 dark:text-gray-300">
          This blogs are enitrely written by me, an amature blogger, open at
          your risk! lol :)
        </p>
        <div>
          <BlogData />
        </div>
      </section>
    </>
  );
}
