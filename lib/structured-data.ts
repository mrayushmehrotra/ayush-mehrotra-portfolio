export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Mehrotra",
    "jobTitle": "Full Stack Web Developer",
    "description": "Expert Full Stack Developer specializing in Next.js, React, Node.js, and modern web technologies",
    "url": "https://ayush-mehrotra-portfolio-two.vercel.app",
    "image": "https://ayush-mehrotra-portfolio-two.vercel.app/myBoi.jpg",
    "sameAs": [
      "https://github.com/mrayushmehrotra",
      "https://www.linkedin.com/in/ayush-mehrotra-99419724b",
      "https://twitter.com/AYUSH070707"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Web Developer",
      "description": "Specializes in JavaScript, React, Next.js, Node.js, and modern web technologies"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "AWS"
    ],
    "offers": {
      "@type": "Service",
      "name": "Full Stack Web Development",
      "description": "Custom web application development services"
    }
  };
};

export const generateBreadcrumbData = (items: Array<{name: string; url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
