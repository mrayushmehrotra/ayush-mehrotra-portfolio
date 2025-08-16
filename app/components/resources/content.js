import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { LuServerCrash, LuWorkflow } from "react-icons/lu";
import { TbCloudDataConnection } from "react-icons/tb";

const person = {
  firstName: "Ayush",
  lastName: "Mehrotra",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack AI Developer",
  avatar: "/images/tanjiro_happy.jpg", // replace with your real pic later
  email: "ayusmehrotra007@gmail.com", // change if needed
  location: "Asia/Kolkata", // proper IANA timezone
  languages: ["English", "Hindi"], // more realistic for you
};

const social = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/mrayushmehrotra",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mrayushmehrotra",
  },

  {
    name: "Email",
    icon: <FaEnvelope />,
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Introduction",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Web, Mobile & AI Apps</>,
  subline: (
    <>
      I'm Ayush, a full-stack engineer passionate about blending{" "}
      <span>design and code</span>. I build apps that feel intuitive and
      scalable.
      <br /> When I’m not coding, i read research papers and books.
    </>
  ),
};

const about = {
  avatar: "/tanjiro_happy.jpg",
  intro: {
    title: "About Section",
    description: (
      <>
        Software engineer with 1+ years of experience. Worked for innovative
        startups, large enterprise products. Familiar with both remote roles.
        Always seeking to take ownership of the project and deliver faster than
        expected. Comfortable for web, mobile, and API development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Space.ai",
        timeframe: "present",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Implemented Keycloak SSO for all microservices as the single
            authentication system
          </>,
          <>
            {" "}
            Built and deployed a microservices from strach with nginx on{" "}
            <b>AWS</b>.
          </>,
          <>
            Participated in code reviews and improved project performance
            through clean, reusable components.
          </>,
        ],
        images: [],
      },
      {
        company: "CodeTikki",
        timeframe: "Jan 2023 – Mar 2023",
        role: "Intern",
        achievements: [
          <>
            Developed web applications using React and Node.js, ensuring
            responsive and user-friendly interfaces.
          </>,
          <>Collaborated on backend APIs with MongoDB integration.</>,
          <>
            Participated in code reviews and improved project performance
            through clean, reusable components.
          </>,
        ],
        images: [],
      },
    ],
    projects: {
      experiences: [
        {
          title: "Shawtify",

          techStack: ["Next.js, React, Supabase, PostgreSQL, Stripe"],
          description: [
            <>
              Implemented Keycloak SSO for all microservices as the single
              authentication system
            </>,
            <>
              {" "}
              Built and deployed a microservices from strach with nginx on{" "}
              <b>AWS</b>.
            </>,
            <>
              Participated in code reviews and improved project performance
              through clean, reusable components.
            </>,
          ],
          image: "/spotify.webp",
          videoUrl: "/spotify.mp4",
        },
      ],
    },
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Self-Learning",
        description: (
          <>
            Self-taught software engineer and Linux enthusiast, constantly
            exploring new tools and technologies.
          </>
        ),
      },
      {
        name: "CS50 ",
        description: (
          <>
            Strong background in core CS knowledge with DSA, OOP, and system
            design, applied directly in real-world projects.
          </>
        ),
      },
      {
        name: "Online Learning",
        description: (
          <>
            Completed courses in web development bootcamp by <b>anjela yu</b>{" "}
            <br />
            <p>
              backend engineer simulation by <b>lyft</b>
            </p>
          </>
        ),
      },
      {
        name: "Open Source",
        description: (
          <>
            Gained practical experience by contributing to open-source projects
            and collaborating with global dev communities.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            HTML, CSS, JS, Bootstrap, React, <b>Next.js</b>,<b>TailwindCSS</b>,{" "}
            <b>TypeScript</b>, and Figma etc.
          </>
        ),
        icons: <CgWebsite />,
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js, FastAPI, Express, <b>Nest.js</b>, NoSQL, SQL, Prisma,{" "}
            <b>GraphQL</b>, and API development.
          </>
        ),
        icons: <LuServerCrash />,
      },
      {
        title: "AI & Tools",
        description: (
          <>
            Worked with OpenAI, Gemini, Supabase,<b>N8n workflows</b>
          </>
        ),
        icons: <LuWorkflow />,
      },
      {
        title: "DevOps & Others",
        description: (
          <>
            <b>Docker</b>, Git, <b>Linux (Arch OS)</b>, Keycloak, Firebase, and{" "}
            <b>AWS</b>
            for deployment.
          </>
        ),
        icons: <TbCloudDataConnection />,
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `A showcase of apps, experiments, and client projects built by ${person.name}`,
};

export { person, social, home, about, work };
