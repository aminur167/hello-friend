import { SectionHeader } from "./SectionHeader";
import constructionImg from "@/assets/construction-quality.jpg";

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
          {/* Decorative gold frame */}
          <div className="absolute -inset-3 rounded-[2rem] border border-brand-gold/30 hidden md:block" aria-hidden />
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" aria-hidden />

          <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl ring-1 ring-white/10">
            <img
              src={constructionImg}
              alt="Chartered engineer reviewing construction plans on a luxury high-rise site at golden hour"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

            {/* Top-left stat chip */}
            <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
              ISO 9001 Certified
            </div>

            {/* Bottom overlay stats */}
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
              <div>
                <div className="text-xl font-semibold text-brand-gold">25+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70">Years</div>
              </div>
              <div className="border-x border-white/15 px-2">
                <div className="text-xl font-semibold text-brand-gold">120+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70">Engineers</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-brand-gold">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-white/70">QA Passed</div>
              </div>
            </div>
          </div>

          {/* Floating gold badge */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl bg-gradient-to-br from-brand-gold to-[#c68f10] p-5 text-brand-gold-foreground shadow-gold ring-1 ring-white/20">
            <div className="text-2xl font-semibold leading-tight">Zero-Compromise</div>
            <div className="text-sm opacity-90">Quality-first construction policy</div>
          </div>
        </div>
      </div>
    </section>
  );
}