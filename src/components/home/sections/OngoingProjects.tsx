import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import img1 from "@/assets/projects/14-29-54.jpg.asset.json";
import img2 from "@/assets/projects/14-29-54_1.jpg.asset.json";
import img3 from "@/assets/projects/14-29-55.jpg.asset.json";
import img4 from "@/assets/projects/14-29-55_1.jpg.asset.json";

const ongoing = [
  { name: "North End Legend Park", loc: "Medical More", image: img1.url, progress: 72, hand: "Dec 2026", units: "48 units" },
  { name: "North End Flamingo", loc: "Jail Road", image: img2.url, progress: 45, hand: "Jun 2027", units: "36 units" },
  { name: "North End Royal House II", loc: "Betpotti", image: img3.url, progress: 60, hand: "Mar 2027", units: "24 units" },
  { name: "North End Sky View II", loc: "Modern More", image: img4.url, progress: 30, hand: "Oct 2027", units: "60 units" },
];

export function OngoingProjects() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="Ongoing Projects"
          title="Being built with care right now"
          titleBn="বর্তমানে চলমান প্রকল্পসমূহ"
          subtitle="Track live construction progress on every active project — transparency you can visit anytime."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ongoing.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:shadow-elegant"
            >
              <div className="grid gap-0 md:grid-cols-5">
                <div className="relative overflow-hidden aspect-[4/3] md:col-span-2 md:aspect-auto">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-gold/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-navy">
                    Ongoing
                  </span>
                </div>
                <div className="flex flex-col p-6 md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{p.loc}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{p.hand}</span>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-foreground">Construction progress</span>
                      <span className="text-brand-gold">{p.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-brand-gold"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="text-muted-foreground">{p.units}</span>
                    <a href="/projects/running" className="inline-flex items-center gap-1 font-semibold text-primary group-hover:text-brand-gold">
                      Book now <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}