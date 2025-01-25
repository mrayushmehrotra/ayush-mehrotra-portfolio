import { BlogData } from "./blogs/utils";

export default function Home() {
  return (
    <section className="mt-8">
      <br />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ayush Mehrotra&apos;s &nbsp; Portfolio
      </h1>
      <p className="mb-4 text-[1.2em] ">
        I&apos;m a software developer with expertise in JavaScript and its
        frameworks. I love Linux because it enhances productivity. I&apos;m 21
        years old and live in Varanasi, UP, India. I&apos;m open to new ideas,
        learn quickly, and adapt easily to new situations. I can contribute to
        projects immediately.
      </p>
      <br />
      <hr className="border-b border-zinc-700  " />

      <br />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter ">Blogs</h1>
      <BlogData />
    </section>
  );
}
