import { useMemo } from "react";
import Image from "next/image";

interface StackItem {
  stack: string;
  imageurl: string;
  id?: string; // Optional for initial data, required after unique IDs are added
}

interface StackData {
  frontend: StackItem[];
  backend: StackItem[];
  databases: StackItem[];
  tools: StackItem[];
  others: StackItem[];
}

interface CssEffectInterface {
  stack: string;
  image: string;
}

function CssEffect({ stack, image }: CssEffectInterface) {
  return (
    <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
      <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-200 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
        <div className="bg-zinc-900 animate-bounce flex items-center gap-1 p-2 rounded-md">
          <span className="text-zinc-400">{stack}</span>
        </div>
        <div className="absolute scale-150 z-[-10] blur-lg inset-0 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 opacity-20 transition-opacity duration-300 group-hover:opacity-40"></div>
      </div>

      <div className="relative flex items-center group-hover:gap-2 p-3 rounded-full cursor-pointer duration-300">
        <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-zinc-200 to-slate-100 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={image}
          width={60}
          height={60}
          alt={stack}
          className="relative w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default function TechStack() {
  const stackdata: StackData = {
    frontend: [
      { stack: "React", imageurl: "/react.png" },
      { stack: "Next.js", imageurl: "/nextjs.png" },
      { stack: "TailwindCSS", imageurl: "/tailwind.png" },
      { stack: "TypeScript", imageurl: "/ts.svg.png" },
    ],
    backend: [
      { stack: "Node.JS", imageurl: "/nodejs.png" },
      { stack: "Express.JS", imageurl: "/express.png" },
      { stack: "Python", imageurl: "/python.png" },
      { stack: "FastAPI", imageurl: "/fastapi.png" },
    ],
    databases: [
      { stack: "MongoDB", imageurl: "/Mongodb.png" },
      { stack: "MySQL", imageurl: "/mysql.png" },
      { stack: "Prisma", imageurl: "/prisma.png" },
    ],
    tools: [
      { stack: "GitHub", imageurl: "/github.png" },
      { stack: "Git", imageurl: "/git.png" },
      { stack: "Docker", imageurl: "/docker.png" },
      { stack: "NeoVim", imageurl: "/vim.png" },
      { stack: "Postman", imageurl: "/postman.png" },
    ],
    others: [
      { stack: "GraphQL", imageurl: "/graphql.png" },
      { stack: "Linux", imageurl: "/linux.png" },
    ],
  };

  // Memoizing the entire stack data with unique IDs
  const memoizedStackData: StackData = useMemo(() => {
    const addUniqueId = (data: StackItem[]): StackItem[] =>
      data.map((item) => ({
        ...item,
        id: `${item.stack}-${Math.random()}`, // Adding a unique ID
      }));
    return {
      frontend: addUniqueId(stackdata.frontend),
      backend: addUniqueId(stackdata.backend),
      databases: addUniqueId(stackdata.databases),
      tools: addUniqueId(stackdata.tools),
      others: addUniqueId(stackdata.others),
    };
  }, []);

  return (
    <div className="p-4">
      {Object.entries(memoizedStackData).map(([category, items]) => (
        <div className="mb-6" key={category}>
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="flex flex-wrap gap-4">
            {items.map((item: StackItem) => (
              <CssEffect
                stack={item.stack}
                image={item.imageurl}
                key={item.id} // Use the unique ID as the key
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
