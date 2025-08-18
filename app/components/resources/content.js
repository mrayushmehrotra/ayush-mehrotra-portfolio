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
    link: "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
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
      I’m Ayush, a full-stack engineer passionate about blending design and
      engineering to craft apps that are fast, intuitive, and built to last.
      Outside of code, you’ll find me exploring research papers and books to
      sharpen my perspective.
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
          title: "SigmaUI",
          url: "https://sigma-zeta-six.vercel.app/",
          techStack: [
            "nextjs.png",
            "express.png",
            "react.png",
            "nodejs.png",
            "vercel.svg",
            "shadcn.png",
          ],
          description: [
            <>
              Developed a Component library which uses
              <b>Stripe</b> behind the scene
            </>,
            <>
              Created and Exposed backend api&apos;s by <b>express</b> for
              component fetching
            </>,
          ],
          image: "/sigma.png",
        },

        {
          title: "Shawtify",
          url: "https://spotify-clone-ashy-five.vercel.app/",
          techStack: [
            "nextjs.png",
            "react.png",
            "supabase.jpg",
            "postgresql.png",
            "stripe.webp",
          ],
          description: [
            <>
              Developed a Spotify-inspired music streaming platform with secure
              subscriptions via <b>Stripe</b>
            </>,
            <>
              Integrated <b>Supabase</b> for database and authentication, with{" "}
              <b>PostgreSQL</b> as backend storage
            </>,
            <>
              Enhanced performance and UI by creating clean, reusable{" "}
              <b>React</b> components
            </>,
          ],
          image: "/spotify.webp",
        },
        {
          title: "Sathi | AI",
          url: "https://socializer-gamma.vercel.app/",
          techStack: ["nextjs.png", "tailwind.png", "gemini.webp"],
          description: [
            <>
              Built an AI-powered tool to generate SEO-friendly titles,
              descriptions, and trending hashtags
            </>,
            <>
              Integrated <b>Google APIs</b> & <b>AI models</b> for real-time
              content optimization
            </>,
            <>
              Developed an intuitive UI with <b>React</b> & <b>Tailwind CSS</b>
            </>,
          ],
          image: "/Saathi3.png",
        },
        {
          title: "Ecommerce Backend",
          url: "https://github.com/mrayushmehrotra/ecom-backend/",
          techStack: [
            "nodejs.png",
            "express.png",
            "mongodb.svg",
            "razorpay.png",
          ],
          description: [
            <>
              Developed a scalable <b>Node.js</b> & <b>Express.js</b> backend
              for ecommerce
            </>,
            <>
              Implemented email-based OTP authentication with <b>JWT</b>{" "}
              security
            </>,
            <>
              Integrated <b>Razorpay</b> for seamless payment processing
            </>,
            <>
              Designed REST APIs for product management, cart, and order
              workflows
            </>,
            <>
              Ensured modular, reusable code with proper error handling and
              validations
            </>,
          ],
          image: "/ecom-backend.avif",
        },
        {
          title: "Caption Generator",
          url: "https://github.com/mrayushmehrotra/caption-generator",
          techStack: ["python.png", "huggingface.svg"],
          description: [
            <>
              Developed a tkinter desktop app for automatic caption generation
              in videos
            </>,
            <>
              Extracted audio from videos and converted it into subtitles using{" "}
              <b>SpeechRecognition</b>
            </>,
            <>
              Synced and embedded captions into videos with <b>MoviePy</b>
            </>,
            <>
              Enabled users to upload, preview, and download captioned videos
              easily
            </>,
          ],
          image: "/caption_gen.png",
        },
        {
          title: "AgriSense",
          url: "https://agrisense-three.vercel.app/",
          techStack: [
            "react.png",
            "nodejs.png",
            "express.png",
            "mongodb.svg",
            "python.png",
          ],
          description: [
            <>
              Created an AI-driven app for <b>soil health analysis</b> &{" "}
              <b>crop recommendations</b>
            </>,
            <>
              Designed smart irrigation planning and fertilizer/pesticide
              management system
            </>,
            <>
              Integrated backend APIs with <b>Node.js</b>, <b>Express.js</b> and{" "}
              <b>MongoDB</b>
            </>,
            <>
              <b> Future</b> Planned integration of AI/ML models for agriculture
              prediction & optimization
            </>,
          ],
          image: "/agriculture_project.jpg",
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

export { person, social, home, about };
