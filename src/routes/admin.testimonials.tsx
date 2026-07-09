import { createFileRoute } from "@tanstack/react-router";
import { MessageSquareQuote } from "lucide-react";
import { ModulePlaceholder } from "@/components/admin/ModulePlaceholder";

export const Route = createFileRoute("/admin/testimonials")({
  component: () => (
    <ModulePlaceholder
      breadcrumb="Sales & CRM"
      title="Testimonials"
      description="Customer reviews shown on the marketing site."
      icon={MessageSquareQuote}
      features={["Approve / hide reviews", "Star rating", "Video testimonials", "Featured on homepage", "Customer photo", "Bangla + English"]}
    />
  ),
});