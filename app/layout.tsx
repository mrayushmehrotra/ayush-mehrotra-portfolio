import type { Metadata } from "next";
import SchemaMarkup from "./components/SchemaMarkup";
import { generateStructuredData } from "../lib/structured-data";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./global.css";
// import Layout from "./components/GridBG";

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
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <Head>
        <meta
          name="description"
          content="Explore the portfolio of Ayush Mehrotra, showcasing expertise in MERN stack, Next.js, Tailwind CSS, TypeScript, and Three.js."
        />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Ayush Mehrotra - Portfolio" />
        <meta
          property="og:description"
          content="Discover the projects and achievements of Ayush Mehrotra, a skilled developer in MERN stack, Next.js, and more."
        />
        <meta
          property="og:image"
          content="https://ayush-mehrotra-portfolio-two.vercel.app/favicon.png"
        />
        <meta
          property="og:url"
          content="https://ayush-mehrotra-portfolio-two.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush Mehrotra - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the developer portfolio of Ayush Mehrotra, showcasing advanced skills in web development and design."
        />
        <meta
          name="twitter:image"
          content="https://ayush-mehrotra-portfolio.vercel.app/path-to-your-image.jpg"
        />
        <meta name="title" content="Ayush Mehrotra - Portfolio" />
        <meta
          name="description"
          content="Explore the portfolio of Ayush Mehrotra, showcasing web development expertise and innovative projects."
        />
        <meta property="og:site_name" content="Ayush Mehrotra Portfolio" />
        <meta property="og:locale" content="en_US" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ayush Mehrotra" />
        <link rel="apple-touch-icon" href="/myBoi.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </Head>
      <body className=" overflow-x-hidden antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        {/* <Layout> */}
        <main className="relative z-20 flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 max-w-xl mx-auto">
          <Navbar />
          <SchemaMarkup />
          {children}

          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        {/* </Layout> */}
      </body>
    </html>
  );
}
