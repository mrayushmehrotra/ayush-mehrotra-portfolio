import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { SmoothScroll } from "@/components/SmoothScroll";
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

const BASE_URL = "https://ayush-mehrotra-portfolio-two.vercel.app";

// ── Structured Data (server-rendered so Googlebot reads it instantly) ──
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Mehrotra",
  givenName: "Ayush",
  familyName: "Mehrotra",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Full-Stack Frontend Engineer",
  description:
    "Ayush Mehrotra is a full-stack frontend engineer from India with 4+ years of experience shipping accessible, performant web applications using React, Next.js, and TypeScript.",
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mau",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Wealthfino",
    url: "https://wealthfino.in",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Maa Shakuntala PG College",
  },
  sameAs: [
    "https://github.com/mrayushmehrotra",
    "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
    "https://x.com/AYUSH070707",
    "https://twitter.com/AYUSH070707",
    "https://www.youtube.com/@ayush_mehrotra_csdev",
    BASE_URL,
  ],
  knowsAbout: [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
    "NestJS", "tRPC", "Drizzle ORM", "Prisma", "PostgreSQL",
    "Tailwind CSS", "Docker", "AWS", "Vercel", "Cloudflare",
    "Web Accessibility", "Web Performance", "Frontend Architecture",
    "Full-Stack Development", "UI Engineering", "Bun",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ayush Mehrotra — Software Engineer",
  alternateName: "Ayush Mehrotra Portfolio",
  url: BASE_URL,
  description:
    "Personal portfolio of Ayush Mehrotra, a full-stack frontend engineer from India specializing in React, Next.js, and TypeScript.",
  author: { "@type": "Person", name: "Ayush Mehrotra" },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: new Date().toISOString(),
  url: BASE_URL,
  name: "Ayush Mehrotra — Software Engineer",
  mainEntity: {
    "@type": "Person",
    name: "Ayush Mehrotra",
    identifier: "mrayushmehrotra",
    description:
      "Full-stack frontend engineer from India with 4+ years experience in React, Next.js, TypeScript.",
    image: `${BASE_URL}/profile.jpg`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Ayush Mehrotra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayush Mehrotra is a full-stack frontend engineer from India with over 4 years of experience building accessible, performant web applications. He currently works at Wealthfino building broker-compliance tooling and has previously shipped an AI email client at Space AI.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Ayush Mehrotra specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayush Mehrotra specializes in React, Next.js, TypeScript, tRPC, Drizzle ORM, NestJS, PostgreSQL, Tailwind CSS, Docker, AWS, and Vercel. He is a full-stack engineer with a focus on frontend architecture and UI engineering.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Ayush Mehrotra based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayush Mehrotra is based in Mau, Uttar Pradesh, India, and works remotely with teams globally.",
      },
    },
    {
      "@type": "Question",
      name: "What projects has Ayush Mehrotra worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ayush Mehrotra has worked on Invid.ai (AI video tool), Clip.AI, SpidyUI (component library), Shawtify (music platform), Promptier, and an AI email client at Space AI. He has also built healthcare and pharmacy management systems as freelance projects.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Ayush Mehrotra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach Ayush Mehrotra on GitHub at github.com/mrayushmehrotra, on LinkedIn at linkedin.com/in/ayush-mehrotra-99419724b, on Twitter/X at @AYUSH070707, or download his resume from his portfolio.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ayush Mehrotra — Home",
      item: BASE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ayush Mehrotra — Software Engineer & Full-Stack Developer",
    template: "%s | Ayush Mehrotra",
  },
  description:
    "Ayush Mehrotra — full-stack frontend engineer, India. 2+ years building accessible, performant apps with React, Next.js & TypeScript. Currently at Wealthfino.",
  keywords: [
    "Ayush Mehrotra",
    "ayush mehrotra developer",
    "ayush mehrotra software engineer",
    "ayush mehrotra portfolio",
    "ayush mehrotra react developer",
    "ayush mehrotra nextjs",
    "ayush mehrotra india",
    "ayush mehrotra wealthfino",
    "ayush mehrotra github",
    "mrayushmehrotra",
    "Frontend Engineer India",
    "React Developer India",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Developer India",
    "Web Developer Uttar Pradesh",
    "Software Engineer India",
    "UI Engineer",
    "Wealthfino developer",
    "Space AI developer",
    "Accessibility Engineer",
    "Web Performance Engineer",
    "tRPC developer",
    "Drizzle ORM",
    "NestJS developer",
  ],
  authors: [{ name: "Ayush Mehrotra", url: BASE_URL }],
  creator: "Ayush Mehrotra",
  publisher: "Ayush Mehrotra",
  category: "technology",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${BASE_URL}/rss`,
    },
  },
  openGraph: {
    title: "Ayush Mehrotra — Full-Stack Frontend Engineer",
    description:
      "4+ years shipping accessible, performant web experiences. React, Next.js, TypeScript. Based in India, working globally.",
    url: BASE_URL,
    siteName: "Ayush Mehrotra",
    images: [
      {
        url: `${BASE_URL}/api/og?title=Ayush%20Mehrotra`,
        width: 1200,
        height: 630,
        alt: "Ayush Mehrotra — Full-Stack Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Ayush",
    lastName: "Mehrotra",
    username: "mrayushmehrotra",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Mehrotra — Full-Stack Frontend Engineer",
    description:
      "4+ years shipping accessible, performant web experiences. React, Next.js, TypeScript. Based in India.",
    site: "@AYUSH070707",
    creator: "@AYUSH070707",
    images: [`${BASE_URL}/api/og?title=Ayush%20Mehrotra`],
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
  verification: {
    google: "46d7201a9c7f8a39",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Mau, Uttar Pradesh, India",
    "geo.position": "25.9384;83.5612",
    ICBM: "25.9384, 83.5612",
    "dc.language": "en",
    "dc.title": "Ayush Mehrotra — Software Engineer",
    "dc.description":
      "Portfolio of Ayush Mehrotra, full-stack frontend engineer from India.",
    "dc.creator": "Ayush Mehrotra",
    "dc.subject": "Software Engineering, Web Development, React, Next.js",
    "profile:first_name": "Ayush",
    "profile:last_name": "Mehrotra",
    "profile:username": "mrayushmehrotra",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-8934404713213041" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934404713213041"
          crossOrigin="anonymous"
        />
        {/* Server-rendered JSON-LD — Googlebot reads this without JS execution */}
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <ViewTransitions>
          <SmoothScroll>
            <main>
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </SmoothScroll>
        </ViewTransitions>
      </body>
    </html>
  );
}
