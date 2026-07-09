import { createFileRoute } from "@tanstack/react-router";
import { Image as ImageIcon } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/gallery")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Content"
      title="Gallery"
      description="Project photos, renders and construction progress albums."
      icon={ImageIcon}
      features={["Drag-and-drop uploads", "Per-project albums", "Cover image selection", "Reorder via drag", "Lightbox preview", "CDN delivery"]}
    />
  ),
});