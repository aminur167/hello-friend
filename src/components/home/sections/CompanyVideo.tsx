import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import heroTower from "@/assets/hero-tower.jpg";
import companyFilm from "@/assets/company-film.mp4.asset.json";

export function CompanyVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="video" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Company Film"
          title="Watch the North End story"
          titleBn="আমাদের গল্প দেখুন"
        />
        <div className="relative mt-12 overflow-hidden rounded-3xl shadow-elegant">
          <div className="aspect-video">
            <video
              ref={videoRef}
              src={companyFilm.url}
              poster={heroTower}
              playsInline
              loop
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />
            {!playing && <div className="pointer-events-none absolute inset-0 bg-brand-navy/45" />}
          </div>
          <div className={`absolute inset-0 grid place-items-center transition-opacity duration-500 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause company film" : "Play company film"}
              className="group inline-flex flex-col items-center gap-4"
            >
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-brand-gold text-brand-gold-foreground shadow-gold transition-transform group-hover:scale-105 md:h-24 md:w-24">
                {playing ? (
                  <Pause className="h-8 w-8 fill-current md:h-10 md:w-10" />
                ) : (
                  <Play className="h-8 w-8 fill-current md:h-10 md:w-10" />
                )}
                {!playing && <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/40" />}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                {playing ? "Pause film" : "Play company film"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}