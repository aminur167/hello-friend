import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/users")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="System"
      title="Users"
      description="Admin & staff accounts with role assignment."
      icon={Users}
      features={["Invite by email", "Role assignment", "Enable / disable accounts", "Last active tracking", "Reset password", "SSO ready"]}
    />
  ),
});