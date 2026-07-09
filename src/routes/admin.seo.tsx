import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/seo")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="System"
      title="SEO"
      description="Meta tags, sitemaps, schema and indexing controls."
      icon={Search}
      features={["Per-page title & description", "Open Graph & Twitter cards", "Sitemap.xml & robots.txt", "Schema.org JSON-LD", "Redirects manager", "Google Search Console integration"]}
    />
  ),
});