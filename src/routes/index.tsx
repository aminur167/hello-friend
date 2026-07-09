import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "North End Construction Ltd — Premium Real Estate in Rangpur" },
      {
        name: "description",
        content:
          "Luxury apartments, commercial spaces & landmark developments in Rangpur, Bangladesh. Trusted craftsmanship since day one.",
      },
      { property: "og:title", content: "North End Construction Ltd — Premium Real Estate in Rangpur" },
      {
        property: "og:description",
        content:
          "Discover ongoing and completed projects, apartment features, and investment opportunities from Rangpur's premier developer.",
      },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}
