import Link from "next/link";
export function BlogData() {
  const MyMdx = [
    {
      title: "windows Vs Linux",
      url: "/blogs/windows-vs-linux",
    },
    {
      title: "Vscode vs Neovim",
      url: "/blogs/vscode-vs-nvim",
    },
  ];
  return (
    <div>
      <section className="mb-3 text-[1.4em] gap-y-5 ">
        {MyMdx.map((item) => (
          <Link key={item.title} href={item.url}>
            <p>{item.title}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
