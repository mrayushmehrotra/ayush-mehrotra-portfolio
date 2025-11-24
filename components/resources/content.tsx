import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { LuServerCrash, LuWorkflow } from "react-icons/lu";
import { TbCloudDataConnection } from "react-icons/tb";

import Bun from "../icons/Bun";
import DrizzleORM from "../icons/Drizzle";
import Nextjs from "../icons/Next";
import Nodejs from "../icons/Nodejs";
import Postgres from "../icons/Postgres";
import ReactIcon from "../icons/React";
import TailwindCSS from "../icons/Tailwind";
import Trpc from "../icons/Trpc";
import TypeScript from "../icons/Typescript";
import Vercel from "../icons/Vercel";
import ReactRouter from "../icons/ReactRouter";
import AmazonWebServices from "../icons/Aws";
import Prisma from "components/icons/Prisma";
import Nestjs from "components/icons/Nestjs";
import Docker from "components/icons/Docker";

export const tools = {
  frontend: [
    {
      Logo: (props) => <ReactIcon {...props} />,
      title: "React",
    },
    {
      Logo: (props) => <Nextjs {...props} />,
      title: "NextJS",
    },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <ReactRouter {...props} />
      ),
      title: "React Router",
    },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Vue {...props} />,
    //   title: "VueJS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Nuxt {...props} />,
    //   title: "NuxtJS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Html {...props} />,
    //   title: "HTML",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Css {...props} />,
    //   title: "CSS",
    // },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <JavaScript {...props} />,
    //   title: "Javascript",
    // },
    {
      Logo: (props) => <TypeScript {...props} />,
      title: "Typescript",
    },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Sass {...props} />,
    //   title: "Sass",
    // },
    {
      Logo: (props) => <TailwindCSS {...props} />,
      title: "TailwindCSS",
    },
  ],
  backend_and_infrastructure: [
    {
      Logo: (props) => <Trpc {...props} />,
      title: "TRPC",
    },

    // {
    //   Logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    //   title: "Google Cloud",
    // },
    {
      Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <AmazonWebServices {...props} />
      ),
      title: "AWS",
    },
    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Docker {...props} />,
    //   title: "Docker",
    // },

    // {
    //   Logo: (props: React.SVGProps<SVGSVGElement>) => <Cloudflare {...props} />,
    //   title: "Cloudflare",
    // },
    {
      Logo: (props) => (
        <Nestjs className="fill-black dark:fill-white" {...props} />
      ),
      title: "Nestjs",
    },
    {
      Logo: (props) => (
        <Vercel className="fill-black dark:fill-white" {...props} />
      ),
      title: "Vercel",
    },
    {
      Logo: (props) => <DrizzleORM {...props} />,
      title: "DrizzleORM",
    },
    {
      Logo: (props) => <Prisma {...props} />,
      title: "Prisma",
    },
    {
      Logo: (props) => <Bun {...props} />,
      title: "Bun",
    },
    {
      Logo: (props) => <Docker {...props} />,
      title: "Docker",
    },
    {
      Logo: (props) => <Postgres {...props} />,
      title: "PostgreSQL",
    },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Space AI (India, remote)",
    period: "July 2025 - Present",
    description:
      "Software engineer responsible for core features and performance optimisations for an innovative AI-powered email client, focusing on intelligent email processing and real-time collaboration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
      "Google APIs",
    ],
  },
  {
    role: "Freelance Developer",
    period: "Mar 2024 - May 2025",
    description:
      "Delivering custom web solutions for diverse clients, specialising in e-commerce platforms, content management systems, and business automation tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres",
      "MongoDB",
      "PayloadCMS",
      "Google APIs",
    ],
  },
  {
    role: "Junior Web Developer (Intern)",
    company: "Codetikki",
    period: "Jan 2023 - Mar 2023",
    description:
      "Developed and maintained multiple features for the SaaS product, from performance improvements to new features.",
    technologies: ["React.js", "Node.js", "SQL", "Figma", "Facebook APIs"],
  },
];

export const projects = [
  {
    title: "Invid.ai",
    description: "A content as a service for social media growth hack.",
    link: "https://invid-ai.vercel.app/",
    github: "https://github.com/mrayushmehrotra/invid.ai",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google APIs",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "SpidyUI",
    description:
      "A simple UI registry for components and blocks using the shadcn api.",
    link: "https://sigma-zeta-six.vercel.app/",
    github: "https://github.com/mrayushmehrotra/sigma-ui-client",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Shawtify",
    description:
      "A full-featured spotify like website focusing on core features like listen to music, song upload and payment processing.",
    link: "https://spotify-clone-ashy-five.vercel.app/",
    github: "https://github.com/mrayushmehrotra/shawtify-spotify-clone",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Payload CMS",
      "Stripe",
    ],
  },
  {
    title: "Chotu",
    description: "A React Native Expo Ai Chatbot App",
    link: "https://github.com/mrayushmehrotra/llm-bot-in-reactNative.git",
    github: "https://github.com/mrayushmehrotra/llm-bot-in-reactNative.git",
    technologies: ["React Native", "TypeScript", "Google APIS"],
  },
];

export const home = {
  main: "Hey, I'm Ayush",
  details: (
    <>
      Software Engineer from India. Contact me below. Currently building{" "}
      <a
        style={{
          color: "--text",
        }}
      >
        SpaceAI
      </a>
      and{" "}
      <a
        style={{
          color: "--text",
        }}
      >
        Eco
      </a>
    </>
  ),

  email: "ayusmehrotra007@gmail.com", // change if needed
};

export const socialMedia = [
  {
    name: "calcom",
    link: "https://cal.com/ayushme/15min",
  },
  {
    name: "x",
    link: "https://x.com/AYUSH070707",
  },
  {
    name: "github",
    link: "https://github.com/mrayushmehrotra",
  },

  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
  },
  {
    name: "email",
    link: "mailto:ayusmehrotra007@gmail.com",
  },
];
