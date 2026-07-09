import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import heroLobby from "@/assets/hero-lobby.jpg";
import p1 from "@/assets/projects/14-29-49.jpg.asset.json";
import p2 from "@/assets/projects/14-29-50.jpg.asset.json";
import p3 from "@/assets/projects/14-29-53.jpg.asset.json";
import p4 from "@/assets/projects/14-29-54.jpg.asset.json";
import p5 from "@/assets/projects/14-29-54_1.jpg.asset.json";
import p6 from "@/assets/projects/14-29-55.jpg.asset.json";
import p7 from "@/assets/projects/14-29-55_1.jpg.asset.json";
import p8 from "@/assets/projects/14.29.51.jpg.asset.json";
import p9 from "@/assets/projects/14.29.51_1.jpg.asset.json";
import p10 from "@/assets/projects/14.29.52.jpg.asset.json";
import p11 from "@/assets/projects/14.29.52_1.jpg.asset.json";
import heroInterior from "@/assets/hero-interior.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroCity from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Buildings, Interiors & Site Progress | North End" },
      { name: "description", content: "Explore North End Construction's photo gallery: exteriors, interiors, amenities and live construction progress across Rangpur." },
      { property: "og:title", content: "Photo Gallery — North End Construction" },
      { property: "og:description", content: "A visual journey through our completed and ongoing developments." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

type Item = { src: string; cat: "Exterior" | "Interior" | "Amenity" | "Progress"; caption: string };

const items: Item[] = [
  { src: p1.url, cat: "Exterior", caption: "Sky Vista Tower — north facade" },
  { src: p2.url, cat: "Exterior", caption: "North End Flamingo" },
  { src: heroInterior, cat: "Interior", caption: "Model living room" },
  { src: p4.url, cat: "Exterior", caption: "Onyx Residence at dusk" },
  { src: p6.url, cat: "Amenity", caption: "Rooftop garden aerial" },
  { src: p5.url, cat: "Exterior", caption: "Brick tower detail" },
  { src: heroLobby, cat: "Interior", caption: "Signature lobby" },
  { src: p7.url, cat: "Amenity", caption: "Landscaped terrace" },
  { src: p3.url, cat: "Exterior", caption: "Entrance courtyard" },
  { src: p8.url, cat: "Exterior", caption: "Daylight concrete facade" },
  { src: p9.url, cat: "Exterior", caption: "Illuminated night view" },
  { src: heroConstruction, cat: "Progress", caption: "Foundation raft, Zone-B" },
  { src: p10.url, cat: "Exterior", caption: "Balcony detail" },
  { src: heroTower, cat: "Exterior", caption: "Flagship tower" },
  { src: p11.url, cat: "Amenity", caption: "Terrace overlook" },
  { src: heroCity, cat: "Progress", caption: "Skyline in progress" },
];

const filters: Array<Item["cat"] | "All"> = ["All", "Exterior", "Interior", "Amenity", "Progress"];

function GalleryPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const visible = items.filter((i) => active === "All" || i.cat === active);

  return (
    <SiteLayout>
      <FormPageHero
        kicker="Gallery"
        title="A visual journey through our work"
        titleBn="আমাদের কাজের ছবির যাত্রা"
        subtitle="Real photos of finished buildings, model interiors, amenities and live construction — no stock imagery, no touch-ups."
        image={heroLobby}
      />

      <section className="py-14 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all " +
                  (active === f
                    ? "border-brand-gold bg-brand-gold text-brand-gold-foreground shadow-elegant"
                    : "border-border bg-card text-foreground/70 hover:border-brand-gold hover:text-brand-gold")
                }
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {visible.map((it, i) => (
              <button
                key={`${it.src}-${i}`}
                onClick={() => setLightbox(it)}
                className={
                  "group relative overflow-hidden rounded-xl bg-secondary shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant " +
                  (i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square")
                }
              >
                <img src={it.src} alt={it.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold">{it.cat}</span>
                  <p className="mt-1 text-sm font-medium text-white">{it.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="max-h-[80vh] w-auto rounded-xl object-contain shadow-elegant" />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              <span className="mr-2 text-brand-gold">{lightbox.cat}</span>
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}