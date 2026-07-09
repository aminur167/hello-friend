import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/apartments")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Content"
      title="Apartments"
      description="Unit inventory, floor plans, availability and pricing."
      icon={Home}
      features={["Unit listing per project", "Floor plans upload", "Live availability toggle", "Bulk price updates", "Reservation sync from Leads", "Custom fields & amenities"]}
    />
  ),
});