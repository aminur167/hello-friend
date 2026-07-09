import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/reports")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Overview"
      title="Reports"
      description="Exportable KPI reports for sales, marketing & operations."
      icon={FileText}
      features={["Monthly sales pipeline", "Lead source attribution", "Project handover status", "Financial summary", "PDF & Excel export", "Scheduled email delivery"]}
    />
  ),
});