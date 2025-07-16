export const baseUrl = "https://ayush-mehrotra-portfolio-two.vercel.app/";

export default async function sitemap() {
  const staticRoutes = [
    {
      url: `${baseUrl}/blogs/windows-vs-linux/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blogs/vscode-vs-nvim`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/exp`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/linux`,
      lastModified: new Date().toISOString(),
    },
  ];

  // If you have dynamic routes (e.g., projects fetched from an API or CMS)

  const dynamicRoutes = [
    {
      url: `${baseUrl}/*`,
      lastModified: new Date().toISOString(),
    },
  ];

  // Combine static and dynamic routes
  const routes = [...staticRoutes, ...dynamicRoutes];

  return routes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified,
  }));
}
