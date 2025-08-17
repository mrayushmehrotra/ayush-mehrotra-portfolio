'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SchemaMarkup() {
  const pathname = usePathname();

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ayush Mehrotra - Full Stack Developer Portfolio",
      "url": "https://ayush-mehrotra-portfolio-two.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ayush-mehrotra-portfolio-two.vercel.app/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

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

    // Add new scripts
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(websiteScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);
  }, [pathname]);

  return null;
}
