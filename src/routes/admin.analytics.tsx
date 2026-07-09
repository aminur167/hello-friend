import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/analytics")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Overview"
      title="Analytics"
      description="Traffic, conversions and funnel performance."
      icon={BarChart3}
      features={["Traffic by source", "Top landing pages", "Form conversion funnel", "Lead-to-booking rate", "Custom date ranges", "Google Analytics 4 integration"]}
    />
  ),
});