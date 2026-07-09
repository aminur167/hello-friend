const stats = [
  { value: "15+", label: "Years of trust", bn: "বছরের বিশ্বাস" },
  { value: "50+", label: "Delivered projects", bn: "সম্পন্ন প্রকল্প" },
  { value: "1,200+", label: "Happy families", bn: "সুখী পরিবার" },
  { value: "1.8M", label: "Sqft developed", bn: "বর্গফুট উন্নয়ন" },
];

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.74 0.15 82 / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.51 0.13 155 / 0.35), transparent 45%)"
      }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="container-page relative grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={
              "relative px-4 py-4 text-center " +
              (i > 0 ? "md:border-l md:border-white/10 " : "") +
              (i === 2 ? "border-t border-white/10 md:border-t-0 " : "") +
              (i === 3 ? "border-t border-white/10 md:border-t-0 " : "")
            }
          >
            <div className="text-gradient-gold text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {s.value}
            </div>
            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 md:text-sm">
              {s.label}
            </div>
            <div className="mt-1.5 font-bangla text-xs text-white/60">{s.bn}</div>
          </div>
        ))}
      </div>
    </section>
  );
}