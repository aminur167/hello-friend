import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/roles")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="System"
      title="Roles & Permissions"
      description="Granular access control. Roles today: admin, staff, user."
      icon={ShieldCheck}
      features={["Custom role creation", "Per-module permissions", "Read / write / delete matrix", "Assign role to user", "RLS-backed enforcement", "Audit log integration"]}
    />
  ),
});