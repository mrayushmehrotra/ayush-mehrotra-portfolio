import type { Metadata } from "next";
import SchemaMarkup from "../components/SchemaMarkup";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import "./global.css";
// import Layout from "./components/GridBG";
import { Providers } from "../components/provider/Providers";

export const metadata: Metadata = {
  title: {
    default:
      "Ayush Mehrotra | Expert Full Stack Developer | Next.js, React, Node.js Specialist",
    template: "%s | Ayush Mehrotra",
  },
  description:
    "Expert Full Stack Developer Ayush Mehrotra specializes in Next.js, React, Node.js, TypeScript, and modern web technologies. 5+ years building scalable web applications, APIs, and cloud solutions. Available for hire.",
  keywords: [
    "Ayush Mehrotra",
    "Full Stack Developer Expert",
    "Next.js Developer for Hire",
    "React Developer Specialist",
    "Node.js Backend Developer",
    "TypeScript Developer",
    "JavaScript Full Stack",
    "MERN Stack Developer",
    "MEAN Stack Developer",
    "Web Application Developer",
    "API Development Expert",
    "Database Design MongoDB PostgreSQL",
    "Cloud Deployment AWS Vercel",
    "Responsive Web Design",
    "Progressive Web Apps PWA",
    "E-commerce Development",
    "SaaS Application Development",
    "Real-time Applications WebSocket",
    "Microservices Architecture",
    "Docker Containerization",
    "GraphQL API Development",
    "RESTful API Design",
    "Performance Optimization Expert",
    "SEO Optimization Developer",
    "Technical Consulting Services",
    "Custom Web Development",
    "Frontend Backend Integration",
    "Modern Web Technologies",
    "Full Stack Development Services",
    "Remote Full Stack Developer",
    "Freelance Web Developer",
    "Software Engineer Portfolio",
    "React Portfolio Projects",
    "Next.js Portfolio Examples",
    "JavaScript Development Portfolio",
    "Web Developer India",
    "Full Stack Developer India",
    "Remote Developer Available",
    "Hire Full Stack Developer",
    "Expert Web Developer",
    "Senior Full Stack Engineer",
  ],
  authors: [
    {
      name: "Ayush Mehrotra",
      url: "https://ayush-mehrotra-portfolio-two.vercel.app",
    },
  ],
  creator: "Ayush Mehrotra",
  publisher: "Ayush Mehrotra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ayush-mehrotra-portfolio-two.vercel.app"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml":
        "https://ayush-mehrotra-portfolio-two.vercel.app/rss",
    },
  },
  openGraph: {
    title:
      "Ayush Mehrotra | Expert Full Stack Developer | Next.js, React, Node.js Specialist",
    description:
      "Expert Full Stack Developer with 5+ years experience in Next.js, React, Node.js, TypeScript. Specialized in building scalable web applications, APIs, and cloud solutions. Available for hire.",
    url: "https://ayush-mehrotra-portfolio-two.vercel.app",
    siteName: "Ayush Mehrotra - Full Stack Developer Portfolio",
    images: [
      {
        url: "https://ayush-mehrotra-portfolio-two.vercel.app/api/og?title=Ayush%20Mehrotra%20-%20Expert%20Full%20Stack%20Developer",
        width: 1200,
        height: 630,
        alt: "Ayush Mehrotra - Expert Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ayush Mehrotra | Expert Full Stack Developer | Next.js, React, Node.js Specialist",
    description:
      "Expert Full Stack Developer with 5+ years experience in Next.js, React, Node.js, TypeScript. Specialized in building scalable web applications, APIs, and cloud solutions.",
    site: "@AYUSH070707",
    creator: "@AYUSH070707",
    images: [
      "https://ayush-mehrotra-portfolio-two.vercel.app/api/og?title=Ayush%20Mehrotra%20-%20Expert%20Full%20Stack%20Developer",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
        <body className="overflow-x-hidden antialiased max-w-xl mx-4 mt-8 lg:mx-auto ">

          <Providers>
            <main className="relative z-20 flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-xl mx-auto">
              <Navbar />
              <SchemaMarkup />
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
