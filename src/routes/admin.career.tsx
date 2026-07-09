import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/career")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Team"
      title="Career"
      description="Job openings and applications."
      icon={Briefcase}
      features={["Publish open positions", "Application form builder", "Resume uploads", "Applicant pipeline", "Email notifications", "Interview scheduling"]}
    />
  ),
});