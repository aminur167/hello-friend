import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Bath, BedDouble, CheckCircle2, Compass, Ruler } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { EMICalculator } from "@/components/projects/EMICalculator";
import { BookVisitForm } from "@/components/projects/BookVisitForm";
import type { Project, Unit } from "@/lib/projects-data";
import { formatBDT, getProject } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug/apartments/$unitId")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    const unit = project?.units.find((u) => u.id === params.unitId);
    if (!project || !unit) throw notFound();
    return { project, unit };
  },
  component: ApartmentDetail,
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
        <h1 className="text-3xl font-semibold">Apartment not found</h1>
        <Link to="/projects" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Back to all projects
        </Link>
      </div>
    </SiteLayout>
  ),
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Apartment not found" }, { name: "robots", content: "noindex" }] };
    }
    const { project, unit } = loaderData;
    const title = `${unit.name} · ${project.name} | North End Construction`;
    const desc = `${unit.bedrooms} bedroom, ${unit.bathrooms} bath apartment · ${unit.sizeSqft} sqft · ${unit.facing} facing. From ${formatBDT(unit.priceBDT)} at ${project.name}, ${project.location}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Apartment",
            name: unit.name,
            numberOfRooms: unit.bedrooms,
            numberOfBathroomsTotal: unit.bathrooms,
            floorSize: {
              "@type": "QuantitativeValue",
              value: unit.sizeSqft,
              unitCode: "FTK",
            },
            offers: {
              "@type": "Offer",
              price: unit.priceBDT,
              priceCurrency: "BDT",
              availability: unit.available > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
            },
            containedInPlace: {
              "@type": "ApartmentComplex",
              name: project.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: project.location,
                addressLocality: project.city,
                addressCountry: "BD",
              },
            },
          }),
        },
      ],
    };
  },
});

function ApartmentDetail() {
  const data = Route.useLoaderData();
  const project = data.project as Project;
  const unit = data.unit as Unit;
  const otherUnits = project.units.filter((u: Unit) => u.id !== unit.id);

  return (
    <SiteLayout>
      <section className="bg-brand-navy pt-32 pb-12 text-white md:pt-40 md:pb-16">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
            <Link to="/projects" className="hover:text-brand-gold">Projects</Link>
            <span>/</span>
            <Link to="/projects/$slug" params={{ slug: project.slug }} className="hover:text-brand-gold">
              {project.name}
            </Link>
            <span>/</span>
            <span className="text-white">{unit.name}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-gold-foreground">
              {unit.bedrooms} Bedroom Apartment
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white/85">
              {unit.sizeSqft} sqft
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{unit.name}</h1>
          <p className="mt-2 text-white/75">
            {project.name} · {project.location}, {project.city}
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-3 lg:py-24">
        <div className="space-y-10 lg:col-span-2">
          <ProjectVisual variant="plan" hue={unit.floorPlanHue} className="aspect-[16/10]" label="Floor Plan" />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat icon={<BedDouble className="h-4 w-4" />} label="Bedrooms" value={unit.bedrooms} />
            <Stat icon={<Bath className="h-4 w-4" />} label="Bathrooms" value={unit.bathrooms} />
            <Stat icon={<Ruler className="h-4 w-4" />} label="Area" value={`${unit.sizeSqft} sqft`} />
            <Stat icon={<Compass className="h-4 w-4" />} label="Facing" value={unit.facing} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Apartment Highlights</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Imported ceramic tiles & branded sanitary ware",
                "Aluminium windows with acoustic insulation",
                "Modular kitchen with granite counter",
                "Wardrobes in master & guest bedrooms",
                "Video door phone & smart locks (ready)",
                "Split AC provision in every room",
              ].map((h) => (
                <div key={h} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-semibold text-foreground">Payment Plan</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { label: "On booking", pct: 10 },
                { label: "During construction", pct: 60 },
                { label: "On handover", pct: 30 },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="text-3xl font-semibold text-brand-gold">{s.pct}%</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-gold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to {project.name}
          </Link>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Price
            </div>
            <div className="mt-1 text-3xl font-semibold text-primary">{formatBDT(unit.priceBDT)}</div>
            <div className="mt-1 text-xs text-brand-green">
              {unit.available > 0 ? `${unit.available} units available` : "Sold out — join waitlist"}
            </div>
          </div>
          <BookVisitForm projectName={project.name} />
          <EMICalculator price={unit.priceBDT} />
        </aside>
      </section>

      {otherUnits.length > 0 && (
        <section className="bg-secondary/40 py-20">
          <div className="container-page">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Other Apartments in {project.name}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherUnits.map((u: Unit) => (
                <Link
                  key={u.id}
                  to="/projects/$slug/apartments/$unitId"
                  params={{ slug: project.slug, unitId: u.id }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <ProjectVisual variant="plan" hue={u.floorPlanHue} className="aspect-[4/3]" label={`${u.bedrooms} BR`} />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground">{u.name}</h3>
                    <div className="mt-1 text-xs text-muted-foreground">{u.sizeSqft} sqft · {u.facing}</div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
                      <span className="font-semibold text-primary">{formatBDT(u.priceBDT)}</span>
                      <span className="inline-flex items-center gap-1 text-primary group-hover:text-brand-gold">
                        View <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
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