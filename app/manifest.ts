import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ayush Mehrotra - Full Stack Developer Portfolio",
    short_name: "Ayush Portfolio",
    description:
      "Expert Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, and modern web technologies. 5+ years experience building scalable applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/myBoi.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/myBoi.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "developer",
      "technology",
      "web development",
      "software engineering",
    ],
    lang: "en-US",
    orientation: "portrait-primary",
    scope: "/",
    screenshots: [
      {
        src: "/api/og?title=Ayush%20Mehrotra%20-%20Full%20Stack%20Developer",
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
    shortcuts: [
      {
        name: "View Projects",
        url: "/projects",
        icons: [
          {
            src: "/myBoi.jpg",
            sizes: "192x192",
            type: "image/jpeg",
          },
        ],
      },
      {
        name: "About Me",
        url: "/about",
        icons: [
          {
            src: "/tanjiro_happy.png",
            sizes: "192x192",
            type: "image/jpeg",
          },
        ],
      },
    ],
  };
}
