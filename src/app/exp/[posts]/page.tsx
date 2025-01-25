"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const post = pathname.split("/").pop(); // Extracts the last segment (e.g., 'Aideation')

  const ProjectReturn = () => {
    if (post === "Aideation") {
      const Aideation = dynamic(() => import("./Aideation.mdx"), {
        ssr: false,
      });
      return (
        <div>
          <Aideation />
        </div>
      );
    }
    if (post === "Shawtify") {
      const Shawtify = dynamic(() => import("./Shawtify.mdx"), { ssr: false });
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
