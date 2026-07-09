import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Project } from "@/lib/projects-data";
import { formatBDT } from "@/lib/projects-data";
import { ProjectVisual } from "./ProjectVisual";

const statusStyles: Record<Project["status"], string> = {
  ongoing: "bg-brand-gold text-brand-gold-foreground",
  completed: "bg-brand-green text-brand-green-foreground",
  upcoming: "bg-primary text-primary-foreground",
};

const statusLabel: Record<Project["status"], string> = {
  ongoing: "Ongoing",
  completed: "Handed Over",
  upcoming: "Coming Soon",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative">
        {project.image ? (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} — ${project.type} in ${project.location}, Rangpur`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur-md">
              {project.type}
            </span>
          </div>
        ) : (
          <ProjectVisual
            hue={project.heroHue}
            className="aspect-[4/3]"
            label={project.type}
          />
        )}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
        {project.status === "ongoing" && (
          <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/20 bg-black/40 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-semibold text-white">
              <span>Construction</span>
              <span className="text-brand-gold">{project.progress}%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-gold to-white"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="mt-0.5 font-bangla text-sm text-muted-foreground">
          {project.nameBn}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {project.location}, {project.area}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-brand-gold" />
            {project.bedroomsAvailable.length
              ? `${project.bedroomsAvailable.join(", ")} BR`
              : "Commercial"}
          </div>
          <div className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-brand-gold" />
            {project.minSizeSqft}–{project.maxSizeSqft} sqft
          </div>
        </div>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Starting from
            </div>
            <div className="text-lg font-semibold text-primary">
              {formatBDT(project.minPriceBDT)}
            </div>
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-brand-gold"
          >
            Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}