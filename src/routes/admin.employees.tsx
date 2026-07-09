import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/employees")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Team"
      title="Employees"
      description="Staff directory, departments & reporting lines."
      icon={Briefcase}
      features={["Directory with photo & role", "Departments & designations", "Contact details", "Assign to projects", "Public 'Our Team' page toggle", "Import from CSV"]}
    />
  ),
});