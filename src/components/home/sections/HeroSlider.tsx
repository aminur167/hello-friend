import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  kicker: string;
  title: string;
  titleBn: string;
  subtitle: string;
  cta: string;
  gradient: string;
  accent: string;
};

const slides: Slide[] = [
  {
    kicker: "Signature Collection",
    title: "Elevating Rangpur's Skyline",
    titleBn: "রংপুরের আকাশে নতুন উচ্চতা",
    subtitle:
      "Handcrafted residences engineered with international standards, premium finishes and timeless architecture.",
    cta: "Explore Projects",
    gradient:
      "radial-gradient(120% 80% at 20% 20%, oklch(0.36 0.16 265) 0%, oklch(0.14 0.08 265) 55%, oklch(0.08 0.04 265) 100%)",
    accent: "oklch(0.74 0.15 82)",
  },
  {
    kicker: "Now Booking",
    title: "The North End Residences",
    titleBn: "নর্থ এন্ড রেসিডেন্সেস",
    subtitle:
      "Limited 3 & 4 bedroom sky homes with panoramic city views in the heart of Rangpur.",
    cta: "Book a Site Visit",
    gradient:
      "radial-gradient(110% 90% at 80% 30%, oklch(0.48 0.13 155) 0%, oklch(0.18 0.08 220) 55%, oklch(0.08 0.03 260) 100%)",
    accent: "oklch(0.85 0.16 82)",
  },
  {
    kicker: "Commercial Landmark",
    title: "Business Addresses That Perform",
    titleBn: "ব্যবসার জন্য নিখুঁত ঠিকানা",
    subtitle:
      "Grade-A commercial floors, retail arcades and boutique showrooms crafted for growth.",
    cta: "View Commercial",
    gradient:
      "radial-gradient(120% 80% at 50% 20%, oklch(0.30 0.10 40) 0%, oklch(0.14 0.05 40) 55%, oklch(0.08 0.02 260) 100%)",
    accent: "oklch(0.80 0.16 60)",
  },
  {
    kicker: "Prime Land",
    title: "Own a Piece of Rangpur",
    titleBn: "রংপুরে নিজের জমি",
    subtitle:
      "Curated land plots with clear title, planned infrastructure and long-term appreciation.",
    cta: "See Available Plots",
    gradient:
      "radial-gradient(110% 90% at 20% 80%, oklch(0.34 0.12 155) 0%, oklch(0.16 0.06 220) 55%, oklch(0.08 0.03 260) 100%)",
    accent: "oklch(0.82 0.16 130)",
  },
  {
    kicker: "Investor Program",
    title: "Invest Where Growth Is Certain",
    titleBn: "নিরাপদ বিনিয়োগের নিশ্চয়তা",
    subtitle:
      "Structured returns, transparent handover timelines and full-service asset management.",
    cta: "Talk to an Advisor",
    gradient:
      "radial-gradient(120% 80% at 70% 60%, oklch(0.32 0.15 265) 0%, oklch(0.16 0.08 265) 55%, oklch(0.08 0.03 260) 100%)",
    accent: "oklch(0.78 0.15 82)",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (dir: number) =>
    setActive((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Featured developments"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-out",
            i === active ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          style={{
            background: s.gradient,
            transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0002})`,
            willChange: "transform",
          }}
        >
          {/* Parallax pattern */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-screen"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 40%, rgba(255,255,255,.3) 50%, transparent 60%)",
              backgroundSize: "220% 100%",
              backgroundPosition: `${(i === active ? 0 : 100) - scrollY * 0.05}% 0`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
      ))}

      {/* Glass content card */}
      <div className="relative z-10 container-page flex h-full flex-col justify-end pb-24 pt-40 md:justify-center md:pb-32 md:pt-32">
        <div className="max-w-2xl">
          {slides.map((s, i) => (
            <div
              key={i}
              className={cn(
                "transition-all duration-[900ms] ease-out",
                i === active
                  ? "opacity-100 translate-y-0"
                  : "hidden opacity-0 translate-y-6",
              )}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: s.accent }}
                />
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/90">
                  {s.kicker}
                </span>
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {s.title}
              </h1>
              <p className="mt-3 font-bangla text-lg text-white/80 md:text-xl">
                {s.titleBn}
              </p>
              <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
                {s.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#featured"
                  className="group inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Company Film
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-between md:mt-16">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-10 bg-brand-gold" : "w-5 bg-white/35 hover:bg-white/60",
                )}
              />
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}