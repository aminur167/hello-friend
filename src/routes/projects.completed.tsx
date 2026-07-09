import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { projects } from "@/lib/projects-data";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import completedHero from "@/assets/projects/14-29-55.jpg.asset.json";

export const Route = createFileRoute("/projects/completed")({
  component: CompletedPage,
  head: () => ({
    meta: [
      { title: "Completed Projects — North End Construction Ltd" },
      { name: "description", content: "Delivered residential and commercial buildings by North End Construction in Rangpur — handed over on time, built to last." },
      { property: "og:title", content: "Completed Projects — North End Construction Ltd" },
      { property: "og:description", content: "Explore North End Construction's portfolio of handed-over projects." },
    ],
  }),
});

function CompletedPage() {
  return (
    <SiteLayout>
      <ProjectsHeader
        kicker="সমাপ্ত প্রকল্পসমূহ"
        title="হস্তান্তরিত। ভালোবাসায় ঘেরা। জীবনের অংশ।"
        subtitle="সময়মতো হস্তান্তর, গর্বের সাথে হস্তান্তর — রংপুরের বুকে যে ভবনগুলো ইতোমধ্যে হাজারো পরিবারের জীবন গড়ছে।"
        image={completedHero.url}
      />
      <section className="container-page pb-24">
        <ProjectFilters projects={projects} lockedStatus="completed" />
      </section>
    </SiteLayout>
  );
}