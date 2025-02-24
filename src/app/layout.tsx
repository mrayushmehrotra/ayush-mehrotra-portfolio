import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar from "@/components/nav";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  description: "This is Ayush Mehrotra's portfolio.",
  openGraph: {
    title: "Ayush Mehrotra",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <LoaderWrapper> */}

          <main className="max-w-xl mx-3 mt-8 lg:max-w-full lg:mx-0">
            <CustomMouse />
            <Navbar />
            {children}
            <Footer />
          </main>
          {/* </LoaderWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
