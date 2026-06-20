import type { Metadata } from "next";
import SchemaMarkup from "../components/SchemaMarkup";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayush Mehrotra — Software Engineer",
    template: "%s | Ayush Mehrotra",
  },
  description:
    "Ayush Mehrotra is a full-stack frontend engineer from India building considered interfaces with React, Next.js, and TypeScript. Four years shipping accessible, performant web experiences.",
  keywords: [
    "Ayush Mehrotra",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Developer",
    "Web Developer India",
    "Software Engineer",
    "UI Engineer",
    "Accessibility",
    "Web Performance",
  ],
  authors: [{ name: "Ayush Mehrotra", url: "https://ayush-mehrotra-portfolio-two.vercel.app" }],
  creator: "Ayush Mehrotra",
  publisher: "Ayush Mehrotra",
  metadataBase: new URL("https://ayush-mehrotra-portfolio-two.vercel.app"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://ayush-mehrotra-portfolio-two.vercel.app/rss",
    },
  },
  openGraph: {
    title: "Ayush Mehrotra — Software Engineer",
    description:
      "Full-stack frontend engineer building considered interfaces. React, Next.js, TypeScript.",
    url: "https://ayush-mehrotra-portfolio-two.vercel.app",
    siteName: "Ayush Mehrotra",
    images: [{
      url: "https://ayush-mehrotra-portfolio-two.vercel.app/api/og?title=Ayush%20Mehrotra",
      width: 1200,
      height: 630,
      alt: "Ayush Mehrotra — Software Engineer",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Mehrotra — Software Engineer",
    description:
      "Full-stack frontend engineer building considered interfaces. React, Next.js, TypeScript.",
    site: "@AYUSH070707",
    creator: "@AYUSH070707",
    images: ["https://ayush-mehrotra-portfolio-two.vercel.app/api/og?title=Ayush%20Mehrotra"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8934404713213041" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934404713213041" crossOrigin="anonymous" />
      </head>
      <body>
        <ViewTransitions>
          <main>
            <SchemaMarkup />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ViewTransitions>
      </body>
    </html>
  );
}
