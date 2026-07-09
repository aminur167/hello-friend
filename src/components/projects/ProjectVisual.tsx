import { cn } from "@/lib/utils";

/**
 * Reusable gradient/skyline placeholder for project imagery.
 * Swap for <img src=...> when real project photos are supplied.
 */
export function ProjectVisual({
  hue,
  label,
  className,
  variant = "skyline",
}: {
  hue: number;
  label?: string;
  className?: string;
  variant?: "skyline" | "plan" | "flat";
}) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      style={{
        background:
          variant === "flat"
            ? `linear-gradient(135deg, oklch(0.92 0.05 ${hue}), oklch(0.82 0.08 ${hue}))`
            : `linear-gradient(135deg, oklch(0.32 0.14 ${hue}) 0%, oklch(0.18 0.08 ${hue}) 60%, oklch(0.10 0.04 ${hue}) 100%)`,
      }}
    >
      {variant !== "flat" && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 60px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 60px)",
          }}
        />
      )}
      {variant === "skyline" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-4">
            {[40, 65, 50, 80, 60, 90, 55, 70, 45, 85, 60, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}px`,
                  background: `linear-gradient(180deg, oklch(0.6 0.15 ${hue}) 0%, oklch(0.25 0.1 ${hue}) 100%)`,
                  opacity: 0.55 + (i % 3) * 0.12,
                }}
              />
            ))}
          </div>
        </>
      )}
      {variant === "plan" && (
        <div className="absolute inset-6 rounded-md border-2 border-white/40">
          <div className="grid h-full grid-cols-3 grid-rows-3 gap-1 p-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm border border-white/30 bg-white/5"
              />
            ))}
          </div>
        </div>
      )}
      {label && (
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur-md">
          {label}
        </span>
      )}
    </div>
  );
}