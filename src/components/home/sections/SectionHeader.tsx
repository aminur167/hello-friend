import { cn } from "@/lib/utils";

export function SectionHeader({
  kicker,
  title,
  titleBn,
  subtitle,
  align = "left",
  invert = false,
  className,
}: {
  kicker?: string;
  title: string;
  titleBn?: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.24em]",
            invert ? "text-brand-gold" : "text-brand-gold",
          )}
        >
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {titleBn && (
        <p
          className={cn(
            "mt-2 font-bangla text-lg md:text-xl",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {titleBn}
        </p>
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function ProjectVisual({
  hue,
  label,
  className,
}: {
  hue: number;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-brand-navy",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, oklch(0.32 0.14 ${hue}) 0%, oklch(0.18 0.08 ${hue}) 60%, oklch(0.10 0.04 ${hue}) 100%)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 60px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 60px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
      {/* Skyline suggestion */}
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
      {label && (
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur-md">
          {label}
        </span>
      )}
    </div>
  );
}