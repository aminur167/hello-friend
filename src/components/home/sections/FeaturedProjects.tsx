import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import img1 from "@/assets/projects/14-29-49.jpg.asset.json";
import img2 from "@/assets/projects/14-29-53.jpg.asset.json";
import img3 from "@/assets/projects/14.29.51.jpg.asset.json";

const projects = [
  {
    name: "North End Royal House",
    location: "Dhap, Rangpur",
    type: "Residential Tower",
    size: "1,650 – 2,400 sqft",
    tag: "Signature",
    image: img1.url,
  },
  {
    name: "North End Sky View",
    location: "Station Road",
    type: "Residential Tower",
    size: "1,400 – 2,100 sqft",
    tag: "Now Selling",
    image: img2.url,
  },
  {
    name: "North End Lake View",
    location: "Betpotti",
    type: "Boutique Residences",
    size: "1,200 – 1,800 sqft",
    tag: "Featured",
    image: img3.url,
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
            href="/projects/running"
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {p.tag}
                </span>
              </div>
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