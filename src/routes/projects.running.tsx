import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { projects } from "@/lib/projects-data";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import runningHero from "@/assets/projects/14-29-53.jpg.asset.json";

export const Route = createFileRoute("/projects/running")({
  component: RunningPage,
  head: () => ({
    meta: [
      { title: "Ongoing Projects — North End Construction Ltd" },
      { name: "description", content: "Track live construction progress on every ongoing North End Construction project in Rangpur." },
      { property: "og:title", content: "Ongoing Projects — North End Construction Ltd" },
      { property: "og:description", content: "Live construction updates on residential and commercial developments." },
    ],
  }),
});

function RunningPage() {
  return (
    <SiteLayout>
      <ProjectsHeader
        kicker="চলমান প্রকল্পসমূহ"
        title="যত্নে গড়ে উঠছে আপনার স্বপ্নের ঠিকানা"
        subtitle="প্রতিটি চলমান প্রকল্পের সরাসরি নির্মাণ অগ্রগতি, হ্যান্ডওভার সময়সূচি ও ইউনিট প্রাপ্যতা — এক পলকে।"
        image={runningHero.url}
      />
      <section className="container-page pb-24">
        <ProjectFilters projects={projects} lockedStatus="ongoing" />
      </section>
    </SiteLayout>
  );
}