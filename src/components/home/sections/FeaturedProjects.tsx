import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeader, ProjectVisual } from "./SectionHeader";

const projects = [
  {
    name: "North End Skyline",
    location: "Dhap, Rangpur",
    type: "Residential Tower",
    size: "1,650 – 2,400 sqft",
    hue: 265,
    tag: "Signature",
  },
  {
    name: "Gold Crest Arcade",
    location: "Station Road",
    type: "Commercial",
    size: "Retail + Office",
    hue: 82,
    tag: "Now Selling",
  },
  {
    name: "Greenline Homes",
    location: "Betpotti",
    type: "Boutique Residences",
    size: "1,200 – 1,800 sqft",
    hue: 155,
    tag: "Featured",
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            kicker="Featured Developments"
            title="Landmarks in the making"
            titleBn="আমাদের নির্বাচিত প্রকল্প"
            subtitle="A curated look at the projects defining premium living and business in Rangpur."
          />
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-gold"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <ProjectVisual hue={p.hue} label={p.tag} className="aspect-[4/3]" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-gold">
                  {p.type}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {p.location}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">{p.size}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    Details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}