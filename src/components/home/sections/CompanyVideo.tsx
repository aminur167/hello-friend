import { Play } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import heroTower from "@/assets/hero-tower.jpg";

export function CompanyVideo() {
  return (
    <section id="video" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Company Film"
          title="Watch the North End story"
          titleBn="আমাদের গল্প দেখুন"
        />
        <div className="relative mt-12 overflow-hidden rounded-3xl">
          <div className="aspect-video">
            <img src={heroTower} alt="North End Construction premium residential tower" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-brand-navy/45" />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <button
              type="button"
              aria-label="Play company film"
              className="group inline-flex flex-col items-center gap-4"
            >
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-brand-gold text-brand-gold-foreground shadow-gold transition-transform group-hover:scale-105 md:h-24 md:w-24">
                <Play className="h-8 w-8 fill-current md:h-10 md:w-10" />
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/40" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                Play company film
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}