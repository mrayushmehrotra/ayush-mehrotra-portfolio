import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar from "@/components/nav";
import { baseUrl } from "./sitemap";

import CustomMouse from "@/components/customMouse";
import LoaderWrapper from "@/components/LoaderWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ayush Mehrotra Portfolio | Web Developer",
    template: "%s | Ayush Mehrotra Portfolio",
  },
  description:
    "This is Ayush Mehrotra's Portfolio | A Full Stack Software Engineer having expertise in JavaScript and It's frameworks, this portfolio contains some pieces of my frontend knowledge.",
  openGraph: {
    title: "Ayush Mehrotra",
    description:
      "This is Ayush Mehrotra's Portfolio | A Full Stack Software Engineer having expertise in JavaScript and It's frameworks, this portfolio contains some pieces of my frontend knowledge.",
    url: baseUrl,
    siteName: "Ayush Mehrotra's Portfolio",
    images: [
      {
        url: "https://ayush-mehrotra-portfolio-two.vercel.app/favicon.ico",
        alt: "Favicon",
        height: 64,
        width: 64,
      },
    ],
    locale: "en_US",
    type: "website",
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
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="sitemap"
          type="application/xml"
          href={`${baseUrl}/api/sitemap`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoaderWrapper>
          <main className="max-w-xl mx-3 mt-8 lg:max-w-full lg:mx-0">
            <CustomMouse />
            <Navbar />
            {children}
          </main>
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}
