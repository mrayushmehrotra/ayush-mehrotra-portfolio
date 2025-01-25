import Image from "next/image";

function CssEffect({ stack, image }) {
  return (
    <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
      <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-200 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
        <div className="bg-zinc-200 flex items-center gap-1 p-2 rounded-md">
          <span>{stack}</span>
        </div>
        <div className="shadow-md  absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
        <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-200 w-full h-full absolute top-0 left-0">
          <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
        </div>
      </div>

      <div className="shadow-md flex items-center group-hover:gap-2 p-3 rounded-full cursor-pointer duration-300">
        <Image
          src={image}
          width={60} // Increase the width to 150
          height={60} // Increase the height to 150
          alt={stack}
          className="w-full h-full rounded-lg object-cover" // Updated class for full width/height and cover
        />
      </div>
    </div>
  );
}

export default function techstack() {
  const stackdata = {
    frontend: [
      { stack: "react", imageurl: "/react.png" },
      { stack: "next.js", imageurl: "/nextjs.png" },
      { stack: "tailwindcss", imageurl: "/tailwind.png" },
      { stack: "typescript", imageurl: "/ts.svg.png" },
    ],
    backend: [
      { stack: "node.js", imageurl: "/nodejs.png" },
      { stack: "express.js", imageurl: "/express.png" },
      { stack: "python", imageurl: "/python.png" },
      { stack: "flask", imageurl: "/fastapi.png" },
    ],
    databases: [
      { stack: "mongodb", imageurl: "/mongodb.png" },
      { stack: "mysql", imageurl: "/mysql.png" },
      { stack: "prisma", imageurl: "/prisma.png" },
    ],
    tools: [
      { stack: "git", imageurl: "/github.png" },
      { stack: "docker", imageurl: "/docker.png" },
      { stack: "neovim", imageurl: "/neovim.png" },
      { stack: "postman", imageurl: "/postman.png" },
    ],
    others: [
      { stack: "graphql", imageurl: "/graphql.png" },
      { stack: "linux", imageurl: "/linux.png" },
    ],
  };

  return (
    <div className="p-4">
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
