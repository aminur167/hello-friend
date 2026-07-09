import { createFileRoute } from "@tanstack/react-router";
import { Image as ImageIcon } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/media")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Content"
      title="Media Library"
      description="Central asset repository — images, videos & documents."
      icon={ImageIcon}
      features={["Folder organisation", "Bulk upload", "Search & filter", "Alt text & captions", "CDN URLs", "Storage quota tracking"]}
    />
  ),
});