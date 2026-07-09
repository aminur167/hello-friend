import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/activity")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="System"
      title="Activity Log"
      description="Full audit trail of admin actions."
      icon={Activity}
      features={["User & action tracking", "Before/after diff for edits", "IP & user-agent capture", "Filter by module & user", "Export for compliance", "Retention policy"]}
    />
  ),
});