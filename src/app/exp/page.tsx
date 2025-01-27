import { GithubMap } from "@/components/githubCalendar";
import Link from "next/link";
import DaysAtCodeTikki from "@/components/daysAtCodeTikki";
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
    <div className="p-4">
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">My Experiences</h2>
        <ul className="space-y-4">
          {MyMdx.map((item) => (
            <li key={item.title} className="group">
              <Link
                href={item.url}
                className="block text-zinc-700 group-hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <br />
      <DaysAtCodeTikki />

      <GithubMap />
    </div>
  );
}
