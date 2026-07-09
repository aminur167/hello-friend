import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import slide1 from "@/assets/projects/14.29.52_1.jpg.asset.json";   // tall brick tower, blue sky
import slide2 from "@/assets/projects/14.29.51_1.jpg.asset.json";   // luxury tower at night
import slide3 from "@/assets/projects/14-29-49.jpg.asset.json";     // sky vista tower
import slide4 from "@/assets/projects/14-29-55_1.jpg.asset.json";   // rooftop gardens aerial
import slide5 from "@/assets/projects/14-29-50.jpg.asset.json";     // flamingo residence

type Slide = {
  chip: string;
  chipBn: string;
  eyebrow: string;
  title: string;
  goldWord: string;
  titleBn: string;
  location: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
  href: string;
};

const slides: Slide[] = [
  {
    chip: "Signature Collection",
    chipBn: "নর্থ এন্ড সিগনেচার",
    eyebrow: "A BOUTIQUE RESIDENCE",
    title: "রংপুরের হৃদয়ে গড়ে উঠছে এক অনন্য ঠিকানা",
    goldWord: "অনন্য",
    titleBn: "Elevating Rangpur's skyline — one crafted home at a time.",
    location: "Central Rangpur · Bangladesh",
    ctaPrimary: "বুকিং করুন",
    ctaSecondary: "প্রকল্প দেখুন",
    image: slide1.url,
    href: "/booking",
  },
  {
    chip: "Now Booking",
    chipBn: "এখনই বুকিং চলছে",
    eyebrow: "SKY RESIDENCES",
    title: "নিজের জন্য বেছে নিন এক নিখুঁত সৌন্দর্যের বাড়ি",
    goldWord: "নিখুঁত",
    titleBn: "Limited 3 & 4-bedroom sky homes with panoramic city views.",
    location: "Medical More · Rangpur",
    ctaPrimary: "সাইট ভিজিট বুক করুন",
    ctaSecondary: "ফ্লোর প্ল্যান",
    image: slide2.url,
    href: "/site-visit",
  },
  {
    chip: "Commercial Landmark",
    chipBn: "কমার্শিয়াল ল্যান্ডমার্ক",
    eyebrow: "GRADE-A ADDRESSES",
    title: "ব্যবসার জন্য এক অসাধারণ ঠিকানা",
    goldWord: "অসাধারণ",
    titleBn: "Grade-A commercial floors, retail arcades and boutique showrooms.",
    location: "Jail Road · Rangpur",
    ctaPrimary: "কমার্শিয়াল দেখুন",
    ctaSecondary: "যোগাযোগ",
    image: slide3.url,
    href: "/projects",
  },
  {
    chip: "Sky Gardens",
    chipBn: "স্কাই গার্ডেন সিরিজ",
    eyebrow: "ROOFTOP LIVING",
    title: "শহরের উপরে গড়ে তুলুন সবুজ জীবন",
    goldWord: "সবুজ",
    titleBn: "Landscaped rooftops, wellness decks and sky lounges above the city.",
    location: "Modern More · Rangpur",
    ctaPrimary: "বুকিং করুন",
    ctaSecondary: "ভিডিও দেখুন",
    image: slide4.url,
    href: "/booking",
  },
  {
    chip: "Investor Program",
    chipBn: "বিনিয়োগ প্রোগ্রাম",
    eyebrow: "SECURE RETURNS",
    title: "নিরাপদ বিনিয়োগের সেরা ঠিকানা",
    goldWord: "সেরা",
    titleBn: "Structured returns, transparent timelines and full-service asset management.",
    location: "Rangpur · Bangladesh",
    ctaPrimary: "পরামর্শ নিন",
    ctaSecondary: "প্রোজেক্ট দেখুন",
    image: slide5.url,
    href: "/booking",
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
            transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0002})`,
            willChange: "transform",
          }}
        >
          <img
            src={s.image}
            alt=""
            aria-hidden
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-center",
              i === active && "animate-luxe-zoom",
            )}
          />
          {/* Cinematic vignette — dark top & bottom for centered composition */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/25 to-brand-navy/85" />
          <div className="absolute inset-0 bg-brand-navy/25" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 65% at 50% 55%, transparent 0%, oklch(0.12 0.05 265 / 0.55) 100%)" }} />
        </div>
      ))}

      {/* Centered luxury composition */}
      <div className="relative z-10 container-page flex h-full flex-col items-center justify-center pt-24 text-center">
        {slides.map((s, i) => (
          <div
            key={i}
            className={cn(
              "mx-auto max-w-4xl transition-all duration-[900ms] ease-out",
              i === active
                ? "opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-6",
            )}
          >
            <div className="luxe-pill mx-auto">
              <span className="luxe-pill-dot" />
              {s.chip}
            </div>
            <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.42em] text-white/70">
              {s.eyebrow}
            </div>
            <h1 className="luxe-display mt-6 font-bangla text-balance text-4xl text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {s.title.split(s.goldWord).map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="italic text-brand-gold">{s.goldWord}</span>
                  )}
                </span>
              ))}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-white/75 md:text-lg">
              {s.titleBn}
            </p>
            <div className="mx-auto mt-7 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-white/60">
              <span className="h-px w-8 bg-white/40" />
              {s.location}
              <span className="h-px w-8 bg-white/40" />
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={s.href} className="btn-luxe-gold">
                {s.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/projects" className="btn-luxe-ghost">
                {s.ctaSecondary}
              </a>
            </div>
          </div>
        ))}

        {/* Bottom controls */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-6 px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous slide" className="arrow-nav">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-[3px] rounded-full transition-all",
                    i === active ? "w-10 bg-brand-gold" : "w-5 bg-white/35 hover:bg-white/60",
                  )}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next slide" className="arrow-nav">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="hidden text-[10px] font-semibold uppercase tracking-[0.4em] text-white/55 md:block">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}