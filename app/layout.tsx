import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import Head from "next/head";
import BlurVignette from "./components/blur-vingette";

export const metadata: Metadata = {
  title: {
    default: "Ayush Mehrotra | Full Stack Web Developer & JavaScript Expert",
    template: "%s | Ayush Mehrotra",
  },
  description:
    "Explore the portfolio of Ayush Mehrotra, a passionate Full Stack Web Developer specializing in JavaScript, React, Next.js, Node.js, and modern web technologies. View projects, experience, and technical skills.",
  keywords: [
    "Ayush Mehrotra",
    "Full Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer",
    "Web Development",
    "React Portfolio",
    "JavaScript Portfolio",
  ],
  authors: [{ name: "Ayush Mehrotra" }],
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
  },
  openGraph: {
    title: "Ayush Mehrotra | Full Stack Web Developer & JavaScript Expert",
    description:
      "Explore the portfolio of Ayush Mehrotra, a passionate Full Stack Web Developer specializing in JavaScript, React, Next.js, Node.js, and modern web technologies. View projects, experience, and technical skills.",
    url: "https://ayush-mehrotra-portfolio-two.vercel.app/",
    siteName: "Ayush Mehrotra's Portfolio",
    images: [
      {
        url: "https://ayush-mehrotra-portfolio-two.vercel.app/favicon.ico",
        alt: "Ayush Mehrotra - Full Stack Web Developer",
        height: 64,
        width: 64,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Mehrotra | Full Stack Web Developer & JavaScript Expert",
    description:
      "Explore the portfolio of Ayush Mehrotra, a passionate Full Stack Web Developer specializing in JavaScript, React, Next.js, Node.js, and modern web technologies. View projects, experience, and technical skills.",
    site: "@AYUSH070707",
    creator: "@AYUSH070707",
    images: ["https://ayush-mehrotra-portfolio-two.vercel.app/favicon.ico"],
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
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto  min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
