import { CheckCircle2 } from "lucide-react";
import { SectionHeader, ProjectVisual } from "./SectionHeader";

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
          <ProjectVisual hue={265} className="aspect-[4/5] md:aspect-[4/5]" />
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
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/about"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-transform"
            >
              Learn more about us
            </a>
            <a
              href="/projects"
              className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-brand-gold"
            >
              Our portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}