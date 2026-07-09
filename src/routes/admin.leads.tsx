import { createFileRoute } from "@tanstack/react-router";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/admin/leads")({
  component: LeadsPage,
});

function LeadsPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Sales & CRM"
        title="Lead Management"
        description="Every inquiry, booking and site-visit request. Update status to track pipeline."
      />
      <LeadsTable />
    </div>
  );
}