import Link from "next/link";
interface NavItem {
  title: string;
  link: string;
}
export default function Navbar() {
  const navItems: NavItem[] = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "blogs",
      link: "/blogs",
    },
    {
      title: "experience",
      link: "/exp",
    },
    {
      title: "Linux 🥰",
      link: "/linux",
    },
  ];
  return (
    <nav className="flex flex-row sm:text-xl items-center p-4  justify-between">
      {navItems.map((item) => (
        <Link key={item.title} href={item.link}>
          <p className="font-semibold" key={item.title}>
            {item.title}{" "}
          </p>
        </Link>
      ))}
    </nav>
  );
}
