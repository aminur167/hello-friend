import { CheckCircle2, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import img1 from "@/assets/projects/14.29.51_1.jpg.asset.json";
import img2 from "@/assets/projects/14.29.52.jpg.asset.json";
import img3 from "@/assets/projects/14.29.52_1.jpg.asset.json";
import img4 from "@/assets/projects/14-29-50.jpg.asset.json";

const completed = [
  { name: "North End Prime", loc: "Central Road", image: img1.url, year: 2023 },
  { name: "Gold Leaf Tower", loc: "Grand Hotel Road", image: img2.url, year: 2022 },
  { name: "Emerald Court", loc: "Kachari Bazar", image: img3.url, year: 2021 },
  { name: "Northern Heights", loc: "Modern More", image: img4.url, year: 2020 },
];

export function CompletedProjects() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="Completed Projects"
          title="Delivered. Loved. Lived in."
          titleBn="সম্পন্ন প্রকল্পসমূহ"
          subtitle="Handed over on time, handed over with pride — homes and offices already shaping lives."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {completed.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-1 rounded-full bg-brand-green/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-green-foreground">
                  <CheckCircle2 className="h-3 w-3" /> Handed Over {p.year}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-white/80">
                  <MapPin className="h-3.5 w-3.5" /> {p.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}