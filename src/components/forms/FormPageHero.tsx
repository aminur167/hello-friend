import { type ReactNode } from "react";

export function FormPageHero({
  kicker,
  title,
  titleBn,
  subtitle,
  image,
  children,
}: {
  kicker: string;
  title: string;
  titleBn?: string;
  subtitle: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/70 to-brand-navy" />
      <div className="container-page relative py-24 pt-36 md:py-32 md:pt-44">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            {kicker}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {titleBn ? (
            <p className="mt-3 font-bangla text-lg text-white/80 md:text-xl">{titleBn}</p>
          ) : null}
          <p className="mt-5 max-w-xl text-white/75 md:text-lg">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}