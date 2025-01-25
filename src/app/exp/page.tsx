import Link from "next/link";
export default function Page() {
  const MyMdx = [
    {
      title: "Aideation - Notion Alternative",
      url: "/exp/Aideation",
    },
    {
      title: "Shawtify",
      url: "/exp/Shawtify",
    },
  ];
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <div>
        <section className="mb-4 text-[1.4em] ">
          {MyMdx.map((item) => (
            <Link key={item.title} href={item.url}>
              <p>{item.title}</p>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}
