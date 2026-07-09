const stats = [
  { value: "15+", label: "Years of trust", bn: "বছরের বিশ্বাস" },
  { value: "50+", label: "Delivered projects", bn: "সম্পন্ন প্রকল্প" },
  { value: "1,200+", label: "Happy families", bn: "সুখী পরিবার" },
  { value: "1.8M", label: "Sqft developed", bn: "বর্গফুট উন্নয়ন" },
];

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 text-white md:py-20">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.74 0.15 82 / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.51 0.13 155 / 0.35), transparent 45%)"
      }} />
      <div className="container-page relative grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-semibold text-brand-gold md:text-5xl lg:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/85 md:text-base">
              {s.label}
            </div>
            <div className="mt-1 font-bangla text-xs text-white/60">{s.bn}</div>
          </div>
        ))}
      </div>
    </section>
  );
}