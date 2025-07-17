import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    "JavaScript Portfolio"
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
    images: [
      "https://ayush-mehrotra-portfolio-two.vercel.app/favicon.ico"
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          href={`https://ayush-mehrotra-portfolio-two.vercel.app/api/sitemap`}
        />
        <link
          rel="icon"
          className="rounded-full"
          type="image/x-icon"
          href="./favicon.ico"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} z-[10]  antialiased overflow-x-hidden  `}
      >
        <main className="max-w-xl z-[9] lg:max-w-full lg:mx-0">{children}</main>
      </body>
    </html>
  );
}
