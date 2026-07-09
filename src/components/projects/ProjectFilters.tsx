import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project, ProjectStatus } from "@/lib/projects-data";
import { projectLocations } from "@/lib/projects-data";
import { ProjectCard } from "./ProjectCard";

type Filters = {
  q: string;
  status: "" | ProjectStatus;
  location: string;
  bedrooms: number | 0;
  maxPriceBDT: number;
  minProgress: number;
};

const initial: Filters = {
  q: "",
  status: "",
  location: "",
  bedrooms: 0,
  maxPriceBDT: 25_000_000,
  minProgress: 0,
};

export function ProjectFilters({
  projects,
  lockedStatus,
}: {
  projects: Project[];
  lockedStatus?: ProjectStatus;
}) {
  const [f, setF] = useState<Filters>({
    ...initial,
    status: lockedStatus ?? "",
  });
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    return projects.filter((p) => {
      if (f.q) {
        const hay = `${p.name} ${p.nameBn} ${p.location} ${p.area} ${p.tagline}`.toLowerCase();
        if (!hay.includes(f.q.toLowerCase())) return false;
      }
      if (f.status && p.status !== f.status) return false;
      if (f.location && p.location !== f.location) return false;
      if (f.bedrooms && !p.bedroomsAvailable.includes(f.bedrooms)) return false;
      if (p.minPriceBDT > f.maxPriceBDT) return false;
      if (p.progress < f.minProgress) return false;
      return true;
    });
  }, [projects, f]);

  const reset = () =>
    setF({ ...initial, status: lockedStatus ?? "" });

  const active =
    f.q ||
    (f.status && !lockedStatus) ||
    f.location ||
    f.bedrooms ||
    f.maxPriceBDT !== initial.maxPriceBDT ||
    f.minProgress > 0;

  return (
    <div>
      {/* Search + toggle */}
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border bg-background/95 px-4 py-4 backdrop-blur-md md:top-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={f.q}
              onChange={(e) => setF((prev) => ({ ...prev, q: e.target.value }))}
              placeholder="Search by project, location, feature…"
              className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground focus:border-brand-gold focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-brand-gold md:w-auto"
            aria-expanded={open}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {active ? (
              <span className="ml-1 rounded-full bg-brand-gold px-2 py-0.5 text-[10px] font-bold text-brand-gold-foreground">
                Active
              </span>
            ) : null}
          </button>
          {active ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex h-12 items-center gap-1 rounded-full px-4 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <X className="h-4 w-4" /> Clear
            </button>
          ) : null}
        </div>

        {open && (
          <div className="mt-4 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-5">
            {!lockedStatus && (
              <Field label="Status">
                <select
                  className="filter-input"
                  value={f.status}
                  onChange={(e) =>
                    setF((p) => ({ ...p, status: e.target.value as Filters["status"] }))
                  }
                >
                  <option value="">Any</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Handed Over</option>
                  <option value="upcoming">Coming Soon</option>
                </select>
              </Field>
            )}
            <Field label="Location">
              <select
                className="filter-input"
                value={f.location}
                onChange={(e) => setF((p) => ({ ...p, location: e.target.value }))}
              >
                <option value="">Any</option>
                {projectLocations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </Field>
            <Field label="Bedrooms">
              <select
                className="filter-input"
                value={f.bedrooms}
                onChange={(e) =>
                  setF((p) => ({ ...p, bedrooms: Number(e.target.value) as Filters["bedrooms"] }))
                }
              >
                <option value={0}>Any</option>
                <option value={2}>2 BR</option>
                <option value={3}>3 BR</option>
                <option value={4}>4 BR</option>
              </select>
            </Field>
            <Field label={`Max price · ৳ ${(f.maxPriceBDT / 10_000_000).toFixed(2)} Cr`}>
              <input
                type="range"
                min={5_000_000}
                max={25_000_000}
                step={500_000}
                value={f.maxPriceBDT}
                onChange={(e) => setF((p) => ({ ...p, maxPriceBDT: Number(e.target.value) }))}
                className="w-full accent-brand-gold"
              />
            </Field>
            <Field label={`Min progress · ${f.minProgress}%`}>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={f.minProgress}
                onChange={(e) => setF((p) => ({ ...p, minProgress: Number(e.target.value) }))}
                className="w-full accent-brand-gold"
              />
            </Field>
          </div>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing <strong className="text-foreground">{results.length}</strong> of{" "}
          {projects.length} projects
        </span>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-foreground">No projects match your filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-sm font-semibold text-primary hover:text-brand-gold"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {label}
      {children}
    </label>
  );
}