export function ProjectsHeader({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {image && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {image && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.74 0.15 82 / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.51 0.13 155 / 0.35), transparent 45%)",
        }}
      />
      <div className="container-page relative pb-16 pt-32 md:pb-24 md:pt-40">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
          {kicker}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-white/75 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
