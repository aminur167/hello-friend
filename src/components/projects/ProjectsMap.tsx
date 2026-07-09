import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects-data";

/**
 * Interactive map: OpenStreetMap iframe centred on Rangpur with
 * a floating list of project pins that highlight on hover.
 */
export function ProjectsMap({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>(projects[0]?.slug ?? "");
  const current = projects.find((p) => p.slug === active) ?? projects[0];
  if (!current) return null;

  const bbox = "89.15,25.68,89.36,25.82";
  const marker = `${current.coords.lat},${current.coords.lng}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;

  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-card p-4 shadow-card-soft lg:grid-cols-3">
      <div className="max-h-[520px] space-y-2 overflow-y-auto pr-2 lg:col-span-1">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Project pins
        </h3>
        {projects.map((p) => (
          <button
            key={p.slug}
            type="button"
            onMouseEnter={() => setActive(p.slug)}
            onFocus={() => setActive(p.slug)}
            onClick={() => setActive(p.slug)}
            className={`w-full rounded-xl border p-3 text-left transition-all ${
              active === p.slug
                ? "border-brand-gold bg-brand-gold/8"
                : "border-border hover:border-brand-gold/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">{p.name}</div>
              <span className={`h-2 w-2 rounded-full ${p.status === "completed" ? "bg-brand-green" : "bg-brand-gold"}`} />
            </div>
            <div className="text-xs text-muted-foreground">
              {p.location} · {p.type}
            </div>
          </button>
        ))}
      </div>
      <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-border lg:col-span-2">
        <iframe
          title={`Map of ${current.name}`}
          src={src}
          className="h-full w-full min-h-[420px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl bg-background/95 p-4 shadow-elegant backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                {current.type}
              </div>
              <div className="mt-1 text-lg font-semibold text-foreground">
                {current.name}
              </div>
              <div className="text-xs text-muted-foreground">{current.location}, {current.city}</div>
            </div>
            <Link
              to="/projects/$slug"
              params={{ slug: current.slug }}
              className="pointer-events-auto rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              View project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}