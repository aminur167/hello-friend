import img1 from "@/assets/projects/14-29-49.jpg.asset.json";
import img2 from "@/assets/projects/14-29-50.jpg.asset.json";
import img3 from "@/assets/projects/14-29-53.jpg.asset.json";
import img4 from "@/assets/projects/14-29-54.jpg.asset.json";
import img5 from "@/assets/projects/14-29-54_1.jpg.asset.json";
import img6 from "@/assets/projects/14-29-55.jpg.asset.json";
import img7 from "@/assets/projects/14-29-55_1.jpg.asset.json";
import img8 from "@/assets/projects/14.29.51.jpg.asset.json";
import img9 from "@/assets/projects/14.29.51_1.jpg.asset.json";
import img10 from "@/assets/projects/14.29.52.jpg.asset.json";
import img11 from "@/assets/projects/14.29.52_1.jpg.asset.json";
import { SectionHeader } from "./SectionHeader";

const renders = [
  { src: img2.url, title: "North End Flamingo", location: "Central Rangpur", span: "md:col-span-2 md:row-span-2" },
  { src: img1.url, title: "Sky Vista Tower", location: "Medical More", span: "" },
  { src: img3.url, title: "Ember Heights", location: "Jail Road", span: "" },
  { src: img4.url, title: "Terracotta Court", location: "Modern More", span: "" },
  { src: img5.url, title: "The Ember Collection", location: "Betpotti", span: "" },
  { src: img6.url, title: "Greenline Residence", location: "North Rangpur", span: "md:col-span-2" },
  { src: img7.url, title: "Rooftop Gardens Aerial", location: "Central Road", span: "md:col-span-2" },
  { src: img8.url, title: "North End Onyx", location: "Grand Hotel Road", span: "md:col-span-2" },
  { src: img9.url, title: "Onyx Facade Detail", location: "Grand Hotel Road", span: "md:col-span-2" },
  { src: img11.url, title: "Brickstone Residence", location: "Kachari Bazar", span: "" },
  { src: img10.url, title: "Sky Garden Terrace", location: "Kachari Bazar", span: "" },
];

export function BuildingShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          kicker="Architectural Portfolio"
          title="Signature Buildings by North End"
          titleBn="নর্থ এন্ডের সিগনেচার ভবনসমূহ"
          subtitle="A curated look at our recent developments — where architecture, greenery and craftsmanship meet."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4">
          {renders.map((r) => (
            <figure
              key={r.src}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 shadow-card-soft transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 ${r.span}`}
            >
              <img
                src={r.src}
                alt={r.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 ring-0 ring-brand-gold/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-brand-gold/40 rounded-2xl" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  <span className="h-px w-6 bg-brand-gold/70" />
                  {r.location}
                </div>
                <div className="mt-2 text-lg font-semibold leading-tight md:text-xl">{r.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}