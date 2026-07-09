import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type CTA = { label: string; to: string; variant?: "gold" | "ghost" };

export function FormPageHero({
  kicker,
  title,
  titleBn,
  subtitle,
  image,
  breadcrumb,
  ctas,
  children,
}: {
  kicker: string;
  title: string;
  titleBn?: string;
  subtitle: string;
  image: string;
  breadcrumb?: string;
  ctas?: CTA[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Home-hero style layered overlays + glass */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/35 to-brand-navy/85" />
      <div className="pointer-events-none absolute inset-0 bg-brand-navy/30 backdrop-blur-[2px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 65% at 50% 55%, transparent 0%, oklch(0.12 0.05 265 / 0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 15% 25%, oklch(0.74 0.15 82 / 0.22), transparent 55%)",
        }}
      />
      <div className="container-page relative py-20 pt-32 md:py-28 md:pt-40">
        {/* Breadcrumb */}
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
          {/* Gold pill kicker */}
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1.5 font-bangla text-xs font-semibold tracking-wide text-brand-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {kicker}
          </span>

          {/* Big display Bangla headline */}
          <h1 className="mt-6 font-bangla text-4xl font-extrabold leading-[1.2] tracking-tight text-white md:text-5xl lg:text-[3.75rem]">
            {title}
          </h1>

          {titleBn ? (
            <p className="mt-4 font-bangla text-lg font-medium text-brand-gold/90 md:text-xl">
              {titleBn}
            </p>
          ) : null}

          <p className="mt-5 mx-auto max-w-2xl font-bangla text-[15px] leading-[1.9] text-white/75 md:text-lg">
            {subtitle}
          </p>

          {ctas && ctas.length > 0 ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ctas.map((cta) =>
                cta.variant === "ghost" ? (
                  <Link
                    key={cta.label}
                    to={cta.to}
                    className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-6 py-3 font-bangla text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <Link
                    key={cta.label}
                    to={cta.to}
                    className="inline-flex items-center rounded-full bg-brand-gold px-6 py-3 font-bangla text-sm font-semibold text-brand-gold-foreground shadow-lg shadow-brand-gold/25 transition-all hover:bg-brand-gold/90 hover:shadow-xl hover:shadow-brand-gold/40"
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}