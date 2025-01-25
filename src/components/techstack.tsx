import Image from "next/image";

interface CssEffectInterface {
  stack: string;
  image: string;
}

function CssEffect({ stack, image }: CssEffectInterface) {
  return (
    <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
      <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-200 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
        <div className="bg-zinc-200 flex items-center gap-1 p-2 rounded-md">
          <span>{stack}</span>
        </div>
        <div className="shadow-md absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
        <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-200 w-full h-full absolute top-0 left-0">
          <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
        </div>
      </div>

      <div className="relative flex items-center group-hover:gap-2 p-3 rounded-full cursor-pointer duration-300">
        {/* Glow effect */}
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

export default function techstack() {
  const stackdata = {
    frontend: [
      { stack: "React", imageurl: "/react.png" },
      { stack: "next.js", imageurl: "/Nextjs.png" },
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
      { stack: "Github", imageurl: "/github.png" },
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

  return (
    <div className="p-4">
      <br />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">frontend</h2>
        <div className="flex flex-wrap gap-4">
          {stackdata.frontend.map((item) => (
            <CssEffect
              stack={item.stack}
              image={item.imageurl}
              key={item.stack}
            />
          ))}
        </div>
      </div>
      <br />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">backend</h2>
        <div className="flex flex-wrap gap-4">
          {stackdata.backend.map((item) => (
            <CssEffect
              stack={item.stack}
              image={item.imageurl}
              key={item.stack}
            />
          ))}
        </div>
      </div>
      <br />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">databases</h2>
        <div className="flex flex-wrap gap-4">
          {stackdata.databases.map((item) => (
            <CssEffect
              stack={item.stack}
              image={item.imageurl}
              key={item.stack}
            />
          ))}
        </div>
      </div>
      <br />

      {/* tools section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">tools</h2>
        <div className="flex flex-wrap gap-4">
          {stackdata.tools.map((item) => (
            <CssEffect
              stack={item.stack}
              image={item.imageurl}
              key={item.stack}
            />
          ))}
        </div>
      </div>
      <br />

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">others</h2>
        <div className="flex flex-wrap gap-4">
          {stackdata.others.map((item) => (
            <CssEffect
              stack={item.stack}
              image={item.imageurl}
              key={item.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
