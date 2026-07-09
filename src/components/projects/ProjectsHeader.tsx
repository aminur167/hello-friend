import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function ProjectsHeader({
  kicker,
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      {image && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {image && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/70 to-brand-navy/85" />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 25%, oklch(0.74 0.15 82 / 0.22), transparent 55%)",
        }}
      />
      <div className="container-page relative pb-16 pt-32 md:pb-24 md:pt-40">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 font-bangla text-sm text-white/70"
        >
          <Link to="/" className="hover:text-brand-gold transition-colors">
            হোম
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-white/40" />
          <span className="text-white/90">{breadcrumb ?? kicker}</span>
        </nav>

        <div className="mt-6 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1.5 font-bangla text-xs font-semibold tracking-wide text-brand-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {kicker}
          </span>
          <h1 className="mt-6 font-bangla text-4xl font-extrabold leading-[1.2] tracking-tight md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 mx-auto max-w-2xl font-bangla text-[15px] leading-[1.9] text-white/75 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
