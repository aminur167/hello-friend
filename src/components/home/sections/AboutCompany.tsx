import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { premiumImages } from "@/lib/premium-images";

const highlights = [
  "Delivered 50+ residential & commercial projects across Rangpur",
  "In-house architecture, engineering & interior teams",
  "Transparent pricing with milestone-based handover",
  "After-handover service, warranty & facility management",
];

export function AboutCompany() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant aspect-[4/5]">
            <img src={premiumImages.aboutInterior} alt="Luxury North End apartment interior at golden hour" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-6 shadow-elegant md:block">
            <div className="text-4xl font-semibold text-primary">15+</div>
            <div className="mt-1 text-sm text-muted-foreground">Years of craftsmanship</div>
          </div>
        </div>
        <div>
          <SectionHeader
            kicker="About North End"
            title="Building Rangpur's next chapter with integrity"
            titleBn="বিশ্বাস ও গুণমানে গড়া আমাদের পথচলা"
            subtitle="North End Construction Ltd is a full-service developer delivering premium residential, commercial and mixed-use projects. Every square foot we build carries a promise — of design, of quality, and of long-term value."
          />
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/about" className="btn-premium">Learn more about us</a>
            <a href="/projects/running" className="btn-outline-premium">Our portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}