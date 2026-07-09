import { createFileRoute } from "@tanstack/react-router";
import { UsersRound } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/customers")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Sales & CRM"
      title="Customers"
      description="Buyer database with lifecycle & booking history."
      icon={UsersRound}
      features={["Unified contact card", "Booking & payment history", "Notes & tags", "Assign relationship manager", "Segmentation for marketing", "Export to CSV"]}
    />
  ),
});