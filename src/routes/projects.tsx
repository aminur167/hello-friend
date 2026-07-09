import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectsMap } from "@/components/projects/ProjectsMap";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsIndex,
  head: () => ({
    meta: [
      { title: "All Projects — North End Construction Ltd" },
      {
        name: "description",
        content:
          "Explore every North End Construction development in Rangpur — ongoing, completed and upcoming residential & commercial projects with detailed filters and a live map.",
      },
      { property: "og:title", content: "All Projects — North End Construction Ltd" },
      { property: "og:description", content: "Filter apartments by location, budget, bedrooms and construction progress in Rangpur." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "North End Construction Projects",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `/projects/${p.slug}`,
            name: p.name,
          })),
        }),
      },
    ],
  }),
});

function ProjectsIndex() {
  return (
    <SiteLayout>
      <ProjectsHeader
        kicker="Our Portfolio"
        title="Every North End project, in one place"
        subtitle="Search, filter and compare residential, commercial and mixed-use developments across Rangpur."
      />
      <section className="container-page pb-24">
        <ProjectFilters projects={projects} />
      </section>
      <section className="container-page pb-24">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Interactive Map
        </h2>
        <ProjectsMap projects={projects} />
      </section>
    </SiteLayout>
  );
}

export function ProjectsHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.74 0.15 82 / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.51 0.13 155 / 0.35), transparent 45%)",
        }}
      />
      <div className="container-page relative pb-16 pt-32 md:pb-24 md:pt-40">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
          {kicker}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/75 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}