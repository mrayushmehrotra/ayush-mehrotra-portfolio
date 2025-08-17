import { baseUrl } from "app/sitemap";

export async function GET() {
  const rssFeed = `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ayush Mehrotra | Full-Stack Engineer Portfolio</title>
    <link>${baseUrl}</link>
    <description>Portfolio projects, blogs, and updates by Ayush Mehrotra</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} Ayush Mehrotra</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml" />
  </channel>
</rss>
`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
