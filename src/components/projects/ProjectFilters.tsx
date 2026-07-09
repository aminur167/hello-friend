import { ChevronDown, Search, X } from "lucide-react";
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
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "progress">("featured");

  const results = useMemo(() => {
    const list = projects.filter((p) => {
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
    if (sort === "price-asc") list.sort((a, b) => a.minPriceBDT - b.minPriceBDT);
    else if (sort === "price-desc") list.sort((a, b) => b.minPriceBDT - a.minPriceBDT);
    else if (sort === "progress") list.sort((a, b) => b.progress - a.progress);
    return list;
  }, [projects, f, sort]);

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
      {/* Result count + sort bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-bangla text-sm text-muted-foreground">
          <strong className="text-foreground">{results.length}</strong> টি প্রকল্প পাওয়া গেছে
        </p>
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="font-bangla h-10 appearance-none rounded-full border border-border bg-card pl-4 pr-10 text-sm text-foreground focus:border-brand-gold focus:outline-none"
          >
            <option value="featured">ফিচার্ড</option>
            <option value="price-asc">দাম কম থেকে বেশি</option>
            <option value="price-desc">দাম বেশি থেকে কম</option>
            <option value="progress">অগ্রগতি অনুযায়ী</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <FilterCard title="সার্চ">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={f.q}
                onChange={(e) => setF((p) => ({ ...p, q: e.target.value }))}
                placeholder="প্রকল্প বা এলাকা…"
                className="font-bangla h-10 w-full rounded-full border border-border bg-background pl-9 pr-3 text-sm text-foreground placeholder-muted-foreground focus:border-brand-gold focus:outline-none"
              />
            </div>
          </FilterCard>

          <FilterCard title="লোকেশন" defaultOpen>
            <div className="flex flex-wrap gap-2">
              <Chip
                active={f.location === ""}
                onClick={() => setF((p) => ({ ...p, location: "" }))}
              >
                সব
              </Chip>
              {projectLocations.map((l) => (
                <Chip
                  key={l}
                  active={f.location === l}
                  onClick={() => setF((p) => ({ ...p, location: l }))}
                >
                  {l}
                </Chip>
              ))}
            </div>
          </FilterCard>

          <FilterCard
            title={`মূল্য (লাখ)`}
            defaultOpen
          >
            <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
              <span>৳ {Math.round(5_000_000 / 100_000)}L</span>
              <span>৳ {Math.round(f.maxPriceBDT / 100_000)}L</span>
            </div>
            <input
              type="range"
              min={5_000_000}
              max={25_000_000}
              step={500_000}
              value={f.maxPriceBDT}
              onChange={(e) => setF((p) => ({ ...p, maxPriceBDT: Number(e.target.value) }))}
              className="mt-2 w-full accent-brand-gold"
            />
          </FilterCard>

          <FilterCard title="অ্যাপার্টমেন্ট সাইজ (sq.ft)">
            <p className="font-bangla text-xs text-muted-foreground">
              সমস্ত সাইজ প্রদর্শিত হচ্ছে
            </p>
          </FilterCard>

          <FilterCard title="বেডরুম">
            <div className="flex flex-wrap gap-2">
              {[0, 2, 3, 4].map((n) => (
                <Chip
                  key={n}
                  active={f.bedrooms === n}
                  onClick={() => setF((p) => ({ ...p, bedrooms: n as Filters["bedrooms"] }))}
                >
                  {n === 0 ? "সব" : `${n} BR`}
                </Chip>
              ))}
            </div>
          </FilterCard>

          {!lockedStatus && (
            <FilterCard title="নির্মাণ টাইপ">
              <div className="flex flex-wrap gap-2">
                <Chip active={f.status === ""} onClick={() => setF((p) => ({ ...p, status: "" }))}>সব</Chip>
                <Chip active={f.status === "ongoing"} onClick={() => setF((p) => ({ ...p, status: "ongoing" }))}>চলমান</Chip>
                <Chip active={f.status === "completed"} onClick={() => setF((p) => ({ ...p, status: "completed" }))}>সম্পন্ন</Chip>
                <Chip active={f.status === "upcoming"} onClick={() => setF((p) => ({ ...p, status: "upcoming" }))}>আসন্ন</Chip>
              </div>
            </FilterCard>
          )}

          <FilterCard title={`হ্যান্ডওভার অগ্রগতি · ${f.minProgress}%`}>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={f.minProgress}
              onChange={(e) => setF((p) => ({ ...p, minProgress: Number(e.target.value) }))}
              className="w-full accent-brand-gold"
            />
          </FilterCard>

          <button
            type="button"
            onClick={reset}
            disabled={!active}
            className="font-bangla inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition-colors hover:border-brand-gold disabled:opacity-50"
          >
            <X className="h-4 w-4" /> ফিল্টার রিসেট করুন
          </button>
        </aside>

        {/* Results grid */}
        <div>
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <p className="font-bangla text-foreground">কোনো প্রকল্প খুঁজে পাওয়া যায়নি।</p>
              <button
                type="button"
                onClick={reset}
                className="font-bangla mt-3 text-sm font-semibold text-primary hover:text-brand-gold"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              {results.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterCard({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-bangla text-sm font-semibold text-foreground">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-bangla inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-colors ${
        active
          ? "border-brand-navy bg-brand-navy text-white"
          : "border-border bg-background text-foreground hover:border-brand-gold"
      }`}
    >
      {children}
    </button>
  );
}