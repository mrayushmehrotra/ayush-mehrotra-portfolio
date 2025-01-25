import { BlogData } from "./utils";
export default function Page() {
  return (
    <section className="mt-7">
      <br />

      <div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Blogs
        </h2>
        <BlogData />
      </div>
    </section>
  );
}
