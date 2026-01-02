import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ayush Mehrotra - Full Stack Developer Portfolio",
    short_name: "Ayush Portfolio",
    description:
      "Expert Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/profile.jpg",
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
  };
}
