export const generateKeywords = (baseKeywords: string[] = []) => {
  const commonKeywords = [
    "full stack developer expert",
    "next.js developer for hire",
    "react developer specialist",
    "node.js backend developer",
    "typescript developer",
    "javascript full stack",
    "mern stack developer",
    "mean stack developer",
    "web application developer",
    "api development expert",
    "database design mongodb postgresql",
    "cloud deployment aws vercel",
    "responsive web design",
    "progressive web apps pwa",
    "e-commerce development",
    "saas application development",
    "real-time applications websocket",
    "microservices architecture",
    "docker containerization",
    "graphql api development",
    "restful api design",
    "performance optimization expert",
    "seo optimization developer",
    "technical consulting services",
    "custom web development",
    "frontend backend integration",
    "modern web technologies",
    "full stack development services",
    "remote full stack developer",
    "freelance web developer",
    "software engineer portfolio",
    "react portfolio projects",
    "next.js portfolio examples",
    "javascript development portfolio",
    "web developer india",
    "full stack developer india",
    "remote developer available",
    "hire full stack developer",
    "expert web developer",
    "senior full stack engineer",
  ];
  
  return [...commonKeywords, ...baseKeywords];
};

export const generateOpenGraph = ({
  title,
  description,
  type = "website",
  locale = "en_US",
}: {
  title: string;
  description: string;
  type?: string;
  locale?: string;
}) => {
  const siteUrl = "https://ayush-mehrotra-portfolio-two.vercel.app";
  
  return {
    title,
    description,
    url: siteUrl,
    siteName: "Ayush Mehrotra - Full Stack Developer",
    images: [
      {
        url: `${siteUrl}/api/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale,
    type,
  };
};

export const generateTwitterCard = ({
  title,
  description,
  creator = "@AYUSH070707",
}: {
  title: string;
  description: string;
  creator?: string;
}) => {
  return {
    card: "summary_large_image",
    title,
    description,
    creator,
    images: [`https://ayush-mehrotra-portfolio-two.vercel.app/api/og?title=${encodeURIComponent(title)}`],
  };
};
