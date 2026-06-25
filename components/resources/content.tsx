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
import TanstackQuery from "components/icons/Tanstack-Query";

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
      Logo: (props) => <TanstackQuery {...props} />,
      title: "Tanstack Query",
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
      Logo: (props) => <Nestjs className="fill-black" {...props} />,
      title: "Nestjs",
    },
    {
      Logo: (props) => <Vercel className="fill-black" {...props} />,
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
    company: "Wealthfino (India, remote)",
    period: "June 2026 - present",
    description:
      "Built internal tooling that cut API response time from ~60s to 10s (saving $15/month), fixed bugs, and improved accessibility to meet SEBI compliance for registered brokers",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Playwright",
      "yahoo-finance",
      "Bun",
    ],
  },

  {
    role: "Software Engineer Part Time",
    company: "Space AI (India, remote)",
    period: "July 2025 - Nov 2025",
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
      "figma to code dashboard & internal features to track employee and social media plugins",
    technologies: ["React.js", "Node.js", "SQL", "Figma", "Facebook APIs"],
  },
  {
    role: "Self Employeed",
    period: "2022 - Present",
    description:
      "I have profound skills in Full-Stack Web Application Development and a little bit in design too. I have built projects ranging from simple games and mini implementations of data tools to more complex applications like social media platforms, e-commerce stores, and popular app clones. I'm learning new things all the time, so it's a mix of good and bad code on my GitHub.",
    technologies: ["Rust", "Lua", "Bash", "Go", "C"],
  },
];

export const projects = [
  {
    title: "Invid.ai",
    image: "InvidAI.png",
    description:
      "A content as a service for social media growth hack suite for mobile & android",
    github: "https://github.com/mrayushmehrotra/invid.ai",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Google APIs",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "Clip.AI",
    image: "ClipAI.png",
    description: "AI powered Web Based Video Editor powered by Groq-AI (beta)",
    github: "https://github.com/mrayushmehrotra/clip.ai",
    technologies: [
      "Next.js",
      "TypeScript",
      "Remotion",
      "ffmpeg",
      "Redux",
      "GroqAI",
    ],
  },

  {
    title: "SpidyUI",
    image: "SpidyUI.png",

    description:
      "A simple UI registry for components and blocks using the shadcn api.",
    link: "https://sigma-zeta-six.vercel.app/",
    github: "https://github.com/mrayushmehrotra/sigma-ui-client",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Shawtify",
    image: "Shawtify.png",
    description:
      "A full-featured spotify like website focusing on core features like listen to music, song upload and payment processing.",
    link: "https://spotify-clone-ashy-five.vercel.app/",
    github: "https://github.com/mrayushmehrotra/shawtify-spotify-clone",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Stripe",
    ],
  },
];

// export const home = {
//   main: "Hey, I'm Ayush",
//   details: (
//     <>
//       Software Engineer from India. Contact me below. Currently building{" "}
//       <a
//         style={{
//           color: "--text",
//         }}
//       >
//         SpaceAI
//       </a>
//       and{" "}
//       <a
//         style={{
//           color: "--text",
//         }}
//       >
//         Eco
//       </a>
//     </>
//   ),

//   email: "ayusmehrotra007@gmail.com",
// };
//
export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    date: "2025",
    description:
      "Completed a simulation covering data analysis, visualization, and presenting insights to stakeholders.",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Zyj746CAXJ5BbCdCK_1760543538830_completion_certificate.pdf",
  },
  {
    title: "Lyft Backend Engineering",
    issuer: "Forage",
    date: "2025",
    description:
      "Built a Python Flask backend, designed system architecture, and worked with data structures for a ride-sharing platform.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_Zyj746CAXJ5BbCdCK_1700289748124_completion_certificate.pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Angela Yu (Udemy)",
    date: "2025",
    description:
      "Covered HTML, CSS, JavaScript, React, Node.js, MongoDB, and Git through hands-on projects.",
    link: "#",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science",
    institution: "Maa Shakuntala PG college",
    period: "2024 - 2027",
    description:
      "Focused on software engineering, data structures, and web development.",
  },
];

export interface OpenSourceItem {
  title: string;
  stars: string;
  description: string;
  link: string;
}

export const openSource: OpenSourceItem[] = [
  {
    title: "stablyai/orca",
    stars: "5.6k",
    description:
      "implementing a hierarchical tree view for PR diff file lists with folder compaction, Flat/Tree toggle UI, and nested indentation",
    link: "https://github.com/stablyai/orca",
  },
  {
    title: "Nestjs/nest-cli",
    stars: "2.2k",
    description: "worked as moderator to close random and fake pr for a month",
    link: "https://github.com/Nestjs/nest-cli",
  },
];

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
    name: "youtube",
    link: "https://www.youtube.com/@ayush_mehrotra_csdev",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
  },
  {
    name: "email",
    link: "mailto:ayusmehrotra007@gmail.com",
  },
  {
    name: "resume",
    link: "https://ayush-mehrotra-portfolio-two.vercel.app/Ayush_Mehrotra.pdf ",
  },
];
