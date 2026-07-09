import { CheckCircle2, MapPin } from "lucide-react";
import { SectionHeader, ProjectVisual } from "./SectionHeader";

const completed = [
  { name: "North End Prime", loc: "Central Road", hue: 265, year: 2023 },
  { name: "Gold Leaf Tower", loc: "Grand Hotel Road", hue: 82, year: 2022 },
  { name: "Emerald Court", loc: "Kachari Bazar", hue: 155, year: 2021 },
  { name: "Northern Heights", loc: "Modern More", hue: 220, year: 2020 },
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
              <ProjectVisual hue={p.hue} className="aspect-[4/3]" />
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