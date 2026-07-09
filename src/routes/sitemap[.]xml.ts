import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects } from "@/lib/projects-data";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/projects",
          "/projects/running",
          "/projects/completed",
          "/booking",
          "/site-visit",
          "/contact",
          "/inquiry",
        ];
        const projectPaths = projects.flatMap((p) => [
          `/projects/${p.slug}`,
          ...p.units.map((u) => `/projects/${p.slug}/apartments/${u.id}`),
        ]);
        const all = [...staticPaths, ...projectPaths];
        const urls = all
          .map(
            (path) =>
              `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});