import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectGallery({ hues, label }: { hues: number[]; label: string }) {
  const [i, setI] = useState(0);
  const total = hues.length;
  if (total === 0) return null;

  const go = (dir: number) => setI((prev) => (prev + dir + total) % total);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl">
        <ProjectVisual hue={hues[i]} className="aspect-[16/9]" label={label} />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
              {hues.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-gold" : "w-3 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {hues.map((h, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`overflow-hidden rounded-md transition-all ${idx === i ? "ring-2 ring-brand-gold" : "opacity-70 hover:opacity-100"}`}
            >
              <ProjectVisual hue={h} className="aspect-video" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}