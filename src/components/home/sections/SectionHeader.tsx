import { cn } from "@/lib/utils";

export function SectionHeader({
  kicker,
  title,
  titleBn,
  subtitle,
  align = "left",
  invert = false,
  className,
  goldWord,
  subtitleBn,
}: {
  kicker?: string;
  title: string;
  titleBn?: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
  goldWord?: string;
  subtitleBn?: string;
}) {
  const renderTitle = () => {
    if (!goldWord) return title;
    const parts = title.split(goldWord);
    return (
      <>
        {parts[0]}
        <span className="italic text-brand-gold">{goldWord}</span>
        {parts.slice(1).join(goldWord)}
      </>
    );
  };
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <div
          className={cn(
            "luxe-kicker flex items-center",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          <span>{kicker}</span>
          <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
        </div>
      )}
      <h2
        className={cn(
          "mt-5 text-balance",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {titleBn ? (
          <span className="font-bangla font-light tracking-[-0.015em] leading-[1.2] text-[2.1rem] md:text-[3rem] lg:text-[3.6rem] text-brand-navy">
            {titleBn}
          </span>
        ) : (
          <span className="luxe-display text-[2rem] leading-[1.08] md:text-5xl lg:text-[3.25rem]">
            {renderTitle()}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-balance text-sm leading-relaxed md:text-base",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
      {subtitleBn && (
        <p
          className={cn(
            "mt-3 font-bangla text-base leading-relaxed md:text-lg",
            invert ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {subtitleBn}
        </p>
      )}
      <span className={cn("mt-6 inline-block h-px w-16", invert ? "bg-brand-gold/70" : "bg-brand-gold/70", align === "center" && "mx-auto")} />
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