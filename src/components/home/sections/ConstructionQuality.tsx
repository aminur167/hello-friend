import { SectionHeader } from "./SectionHeader";
import heroConstruction from "@/assets/hero-construction.jpg";

const stages = [
  { step: "01", title: "Soil & Structural Design", body: "Independent soil test, third-party structural review, seismic zone compliance." },
  { step: "02", title: "Foundation Excellence", body: "Piled raft or mat foundation using graded rebar and premium ready-mix concrete." },
  { step: "03", title: "Superstructure", body: "60-grade steel, tested cement, monitored curing — column by column QA." },
  { step: "04", title: "Finishing", body: "Imported tiles, branded sanitary ware, aluminium windows and premium paints." },
];

export function ConstructionQuality() {
  return (
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            invert
            kicker="Construction Quality"
            title="Engineered to outlast decades"
            titleBn="দশকের পর দশক টিকে থাকার মতো নির্মাণ"
            subtitle="Every project passes through a four-stage quality protocol supervised by chartered engineers."
          />
          <div className="mt-8 space-y-4">
            {stages.map((s) => (
              <div key={s.step} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-brand-gold/50">
                <div className="flex items-start gap-4">
                  <div className="text-brand-gold font-semibold tracking-widest text-sm">{s.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl aspect-square">
            <img src={heroConstruction} alt="North End construction site with engineering team" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-brand-gold p-5 text-brand-gold-foreground shadow-gold">
            <div className="text-2xl font-semibold">Zero-Compromise</div>
            <div className="text-sm">Quality-first construction policy</div>
          </div>
        </div>
      </div>
    </section>
  );
}