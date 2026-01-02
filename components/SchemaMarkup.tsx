'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SchemaMarkup() {
  const pathname = usePathname();

  useEffect(() => {
    // Person Schema - Most important for personal portfolio SEO
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ayush Mehrotra",
      "url": "https://ayush-mehrotra-portfolio-two.vercel.app",
      "image": "https://ayush-mehrotra-portfolio-two.vercel.app/profile.jpg",
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Space AI"
      },
      "description": "21-year-old Software Engineer from India specializing in Next.js, React, Node.js, and TypeScript.",
      "sameAs": [
        "https://github.com/mrayushmehrotra",
        "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
        "https://x.com/AYUSH070707",
        "https://www.youtube.com/@ayush_mehrotra_csdev"
      ],
      "knowsAbout": [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Docker"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Maa Shakuntala PG college"
      }
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ayush Mehrotra - Full Stack Developer Portfolio",
      "url": "https://ayush-mehrotra-portfolio-two.vercel.app",
      "author": {
        "@type": "Person",
        "name": "Ayush Mehrotra"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ayush-mehrotra-portfolio-two.vercel.app/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    // Professional Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Ayush Mehrotra - Full Stack Development Services",
      "url": "https://ayush-mehrotra-portfolio-two.vercel.app",
      "priceRange": "$$",
      "image": "https://ayush-mehrotra-portfolio-two.vercel.app/profile.jpg",
      "description": "Expert Full Stack Development services including web applications, APIs, and cloud solutions.",
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Stack Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          }
        ]
      }
    };

    // Breadcrumb Schema
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ayush-mehrotra-portfolio-two.vercel.app"
        }
      ]
    };

    // Add breadcrumb based on current path
    if (pathname !== '/') {
      const pathSegments = pathname.split('/').filter(Boolean);
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ayush-mehrotra-portfolio-two.vercel.app"
        }
      ];

      pathSegments.forEach((segment, index) => {
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const url = `https://ayush-mehrotra-portfolio-two.vercel.app/${pathSegments.slice(0, index + 1).join('/')}`;

        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": url
        });
      });

      breadcrumbData.itemListElement = breadcrumbItems;
    }

    // Remove existing schema scripts to prevent duplicates
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add all schema scripts
    const schemas = [personSchema, websiteSchema, serviceSchema, breadcrumbData];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [pathname]);

  return null;
}
