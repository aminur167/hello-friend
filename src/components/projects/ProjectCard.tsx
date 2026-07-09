import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, MapPin, Ruler, Building2 } from "lucide-react";
import type { Project } from "@/lib/projects-data";
import { formatBDT } from "@/lib/projects-data";
import { ProjectVisual } from "./ProjectVisual";

const statusStyles: Record<Project["status"], string> = {
  ongoing: "bg-brand-gold/95 text-brand-gold-foreground ring-1 ring-white/30",
  completed: "bg-brand-green/95 text-brand-green-foreground ring-1 ring-white/30",
  upcoming: "bg-primary/95 text-primary-foreground ring-1 ring-white/30",
};

const statusLabel: Record<Project["status"], string> = {
  ongoing: "চলমান",
  completed: "হস্তান্তরিত",
  upcoming: "শীঘ্রই আসছে",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-border/70 bg-card shadow-card-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-elegant">
      {/* Gold ambient glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, oklch(0.74 0.15 82 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        {project.image ? (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} — ${project.type} in ${project.location}, Rangpur`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent" />
            {/* subtle top vignette for chip legibility */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <Building2 className="h-3 w-3 text-brand-gold" />
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
          className={`absolute right-4 top-4 rounded-full px-3 py-1 font-bangla text-[11px] font-semibold tracking-wide shadow-md ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
        {project.status === "ongoing" && (
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-brand-navy/55 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
              <span className="font-bangla text-[12px] normal-case tracking-normal">নির্মাণ অগ্রগতি</span>
              <span className="text-brand-gold">{project.progress}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-gold via-brand-gold to-white shadow-[0_0_12px_oklch(0.74_0.15_82/0.6)]"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-[1.2rem] font-bold leading-tight text-brand-navy transition-colors group-hover:text-primary">
              {project.name}
            </h3>
            <p className="mt-1 font-bangla text-sm font-medium text-brand-gold">
              {project.nameBn}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-brand-gold" />
          <span className="truncate">{project.location}, {project.area}</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border/60 bg-secondary/40 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <BedDouble className="h-3.5 w-3.5 text-brand-gold" /> বেডরুম
            </div>
            <div className="mt-1 text-sm font-semibold text-foreground">
              {project.bedroomsAvailable.length
                ? `${project.bedroomsAvailable.join(", ")} BR`
                : "কমার্শিয়াল"}
            </div>
          </div>
          <div className="rounded-lg border border-border/60 bg-secondary/40 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <Ruler className="h-3.5 w-3.5 text-brand-gold" /> সাইজ
            </div>
            <div className="mt-1 text-sm font-semibold text-foreground">
              {project.minSizeSqft}–{project.maxSizeSqft} sqft
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-dashed border-border pt-4">
          <div>
            <div className="font-bangla text-[11px] font-medium tracking-wide text-muted-foreground">
              শুরু মূল্য
            </div>
            <div className="mt-0.5 font-display text-xl font-bold text-brand-navy">
              {formatBDT(project.minPriceBDT)}
            </div>
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-gold hover:text-brand-gold-foreground hover:shadow-md"
          >
            বিস্তারিত
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}