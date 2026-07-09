import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/blog")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Content"
      title="Blog"
      description="News, articles, guides & press releases."
      icon={Newspaper}
      features={["Rich text editor", "Cover image & SEO meta", "Categories & tags", "Draft / scheduled / published", "Author attribution", "Bangla + English"]}
    />
  ),
});