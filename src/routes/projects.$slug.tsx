import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Building2, CalendarClock, CheckCircle2, MapPin, Ruler, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { EMICalculator } from "@/components/projects/EMICalculator";
import { BookVisitForm } from "@/components/projects/BookVisitForm";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project, Unit, Amenity, NearbyPlace } from "@/lib/projects-data";
import { formatBDT, getProject, projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Retry
        </button>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you’re looking for isn’t in our catalogue.</p>
        <Link to="/projects" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Back to all projects
        </Link>
      </div>
    </SiteLayout>
  ),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.location}, ${p.city} | North End Construction`;
    const desc = `${p.tagline} ${p.bedroomsAvailable.length ? p.bedroomsAvailable.join(", ") + " bedroom apartments" : "Commercial spaces"} from ${formatBDT(p.minPriceBDT)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentComplex",
            name: p.name,
            description: p.tagline,
            numberOfAccommodationUnits: p.totalUnits,
            numberOfBedrooms: p.bedroomsAvailable,
            address: {
              "@type": "PostalAddress",
              streetAddress: p.location,
              addressLocality: p.city,
              addressRegion: "Rangpur Division",
              addressCountry: "BD",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: p.coords.lat,
              longitude: p.coords.lng,
            },
            amenityFeature: p.amenities.map((a) => ({
              "@type": "LocationFeatureSpecification",
              name: a,
            })),
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BDT",
              lowPrice: p.minPriceBDT,
              highPrice: p.maxPriceBDT,
              offerCount: p.totalUnits,
            },
          }),
        },
      ],
    };
  },
});

function ProjectDetail() {
  const data = Route.useLoaderData();
  const p = data.project as Project;
  const related = projects.filter((x) => x.slug !== p.slug && x.type === p.type).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-16 text-white md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(60% 60% at 30% 20%, oklch(0.4 0.15 ${p.heroHue}), transparent 60%)` }}
        />
        <div className="container-page relative">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-brand-gold">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-brand-gold">Projects</Link>
            <span>/</span>
            <span className="text-white">{p.name}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${p.status === "completed" ? "bg-brand-green text-brand-green-foreground" : "bg-brand-gold text-brand-gold-foreground"}`}>
              {p.status === "completed" ? "Handed Over" : p.status === "ongoing" ? "Ongoing" : "Coming Soon"}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/85">
              {p.type}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {p.name}
          </h1>
          <p className="mt-2 font-bangla text-lg text-white/75">{p.nameBn}</p>
          <p className="mt-4 max-w-2xl text-white/80">{p.tagline}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/75">
            <MapPin className="h-4 w-4 text-brand-gold" />
            {p.location}, {p.area}, {p.city}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-page grid gap-10 py-16 lg:grid-cols-3 lg:py-24">
        <div className="lg:col-span-2 space-y-14">
          <ProjectGallery hues={p.galleryHues} label={p.name} />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat icon={<Building2 className="h-4 w-4" />} label="Storeys" value={p.storeys} />
            <Stat icon={<BedDouble className="h-4 w-4" />} label="Bedrooms" value={p.bedroomsAvailable.length ? p.bedroomsAvailable.join(", ") : "—"} />
            <Stat icon={<Ruler className="h-4 w-4" />} label="Size (sqft)" value={`${p.minSizeSqft}–${p.maxSizeSqft}`} />
            <Stat icon={<CalendarClock className="h-4 w-4" />} label="Handover" value={new Date(p.handoverDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })} />
          </div>

          {p.status === "ongoing" && (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Construction Progress</h2>
                <span className="text-2xl font-semibold text-brand-gold">{p.progress}%</span>
              </div>
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-brand-gold" style={{ width: `${p.progress}%` }} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Independent chartered engineers audit every milestone. Live updates shared with buyers monthly.
              </p>
            </div>
          )}

          {/* Apartment units / floor plans */}
          {p.units.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Apartment & Floor Plans</h2>
              <p className="mt-1 text-muted-foreground">Choose the layout that fits your family.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
              {p.units.map((u: Unit) => (
                  <article key={u.id} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:shadow-elegant">
                    <ProjectVisual variant="plan" hue={u.floorPlanHue} className="aspect-[4/3]" label={`${u.bedrooms} BR · ${u.sizeSqft} sqft`} />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground">{u.name}</h3>
                      <div className="mt-1 text-sm text-muted-foreground">{u.facing} facing · {u.bathrooms} baths</div>
                      <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">Price</div>
                          <div className="text-lg font-semibold text-primary">{formatBDT(u.priceBDT)}</div>
                        </div>
                        <Link
                          to="/projects/$slug/apartments/$unitId"
                          params={{ slug: p.slug, unitId: u.id }}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-brand-gold"
                        >
                          Apartment details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                      <div className="mt-3 text-xs text-brand-green">
                        {u.available > 0 ? `${u.available} units available` : "Sold out"}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-gold" /> Amenities
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {p.amenities.map((a: Amenity) => (
                <div key={a} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm font-medium text-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Nearby Places</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Place</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3 text-right">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {p.nearby.map((n: NearbyPlace) => (
                    <tr key={n.name} className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">{n.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{n.category}</td>
                      <td className="px-4 py-3 text-right text-muted-foreground">
                        {n.distanceKm} km
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Location</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={`Map of ${p.name}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${p.coords.lng - 0.02},${p.coords.lat - 0.02},${p.coords.lng + 0.02},${p.coords.lat + 0.02}&layer=mapnik&marker=${p.coords.lat},${p.coords.lng}`}
                className="h-[380px] w-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Starting from
            </div>
            <div className="mt-1 text-3xl font-semibold text-primary">
              {formatBDT(p.minPriceBDT)}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              up to {formatBDT(p.maxPriceBDT)} · {p.totalUnits} units total
            </div>
          </div>
          <BookVisitForm projectName={p.name} />
          <EMICalculator price={p.minPriceBDT} />
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/40 py-20">
          <div className="container-page">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Related Projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProjectCard key={r.slug} project={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-gold">
        {icon} {label}
      </div>
      <div className="mt-1.5 text-lg font-semibold text-foreground">{value}</div>
    </div>
  );
}