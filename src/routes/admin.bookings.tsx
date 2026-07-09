import { createFileRoute } from "@tanstack/react-router";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { PageHeader } from "@/components/admin/PageHeader";

export const Route = createFileRoute("/admin/bookings")({
  component: BookingsPage,
});

function BookingsPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Sales & CRM"
        title="Bookings"
        description="Apartment reservations & site-visit pipeline."
      />
      <LeadsTable defaultType="booking" showTypeFilter />
    </div>
  );
}