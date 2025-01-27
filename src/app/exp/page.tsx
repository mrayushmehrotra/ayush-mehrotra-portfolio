import { GithubMap } from "@/components/githubCalendar";
import Link from "next/link";
export default function Page() {
  const MyMdx = [
    {
      title: "Aideation - Notion Alternative",
      url: "/exp/Aideation",
    },
    {
      title: "Shawtify - A Spotify Alternative",
      url: "/exp/Shawtify",
    },
  ];
  return (
    <section className="mt-8">
      <br />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Experiences
      </h1>
      <div>
        <section className="mb-4 text-[1.4em] ">
          {MyMdx.map((item) => (
            <Link key={item.title} href={item.url}>
              <p>{item.title}</p>
            </Link>
          ))}
        </section>
      </div>
      <GithubMap />
    </section>
  );
}
