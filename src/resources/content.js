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

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about web development, AI, and building side projects. Expect
      practical insights, code snippets, and occasional thoughts on growth,
      learning, and life (yes, mamma’s boy reflections too).
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mrayushmehrotra",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mrayushmehrotra",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Web, Mobile & AI Apps</>,
  featured: {
    display: true,
    title: (
      <>
        <strong className="ml-4">Turning Ideas Into Products</strong>
      </>
    ),
    href: "/work", // link to your work section
  },
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
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "#",
  },
  intro: {
    display: true,
    title: "Introduction",
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
            HTML, CSS, JS, Bootstrap, React, Next.js, TailwindCSS, TypeScript,
            and Figma etc.
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js, FastAPI, Express, Nest.js, NoSQL, SQL, Prisma, GraphQL, and
            API development.
          </>
        ),
        images: [],
      },
      {
        title: "AI & Tools",
        description: <>Worked with OpenAI, Gemini, Supabase, N8n workflows,</>,
        images: [],
      },
      {
        title: "DevOps & Others",
        description: (
          <>
            Docker, Git, Linux (Arch OS), Keycloak, Firebase, and AWS for
            deployment.
          </>
        ),
        images: [],
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

export { person, social, newsletter, home, about, work };
