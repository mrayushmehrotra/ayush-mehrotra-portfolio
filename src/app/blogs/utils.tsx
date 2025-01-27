import Link from "next/link";

export function BlogData() {
  const MyMdx = [
    {
      title: "Windows vs Linux",
      url: "/blogs/windows-vs-linux",
    },
    {
      title: "VS Code vs Neovim",
      url: "/blogs/vscode-vs-nvim",
    },
  ];

  return (
    <div className="p-4">
      <section className="mb-6 text-lg">
        <h2 className="text-2xl font-bold mb-4">Explore Our Blogs</h2>
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
    </div>
  );
}
