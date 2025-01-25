"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const post = pathname.split("/").pop(); // Extracts the last segment (e.g., 'Aideation')

  const ProjectReturn = () => {
    if (post === "windows-vs-linux") {
      const WindowsVsLinux = dynamic(() => import("./windows-vs-linux.mdx"), {
        ssr: false,
      });
      return (
        <div>
          <WindowsVsLinux />
        </div>
      );
    }
    if (post === "vscode-vs-nvim") {
      const Shawtify = dynamic(() => import("./vscode-vs-nvim.mdx"), {
        ssr: false,
      });
      return <Shawtify />;
    }
    return <p>Project not found</p>;
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <ProjectReturn />
    </main>
  );
};

export default Page;
