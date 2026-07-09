import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Home, Landmark, HardHat, Ruler, Wrench, TrendingUp, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { SectionHeader } from "@/components/home/sections/SectionHeader";
import heroCity from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Residential, Commercial & Construction | North End" },
      { name: "description", content: "Full-service real estate: residential apartments, commercial complexes, land development, interior fit-outs and construction consulting across Rangpur." },
      { property: "og:title", content: "Our Services — North End Construction Ltd" },
      { property: "og:description", content: "Six end-to-end real estate and construction services under one accountable roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { icon: Home, title: "Residential Apartments", body: "1, 2, 3 & 4-bedroom flats in Rangpur's prime corridors — designed for real families, priced for real budgets.", features: ["Ready-to-move & pre-launch", "Bank loan approved", "Modular kitchen & full interior"] },
  { icon: Building2, title: "Commercial Complexes", body: "Retail, office and mixed-use developments engineered for tenant demand and long-term rental yield.", features: ["Ground + 10 typical", "3-phase power & backup", "Dedicated parking floors"] },
  { icon: Landmark, title: "Land Development", body: "Master-planned plotting projects with roads, drainage, boundary and mutation ready before handover.", features: ["3, 5, 10 katha plots", "Registered mutation", "Full utility connections"] },
  { icon: HardHat, title: "Turnkey Construction", body: "Own the land? We handle everything from soil test to key handover — fixed price, fixed timeline.", features: ["Design + build contract", "Milestone-based payments", "Third-party quality audit"] },
  { icon: Ruler, title: "Architecture & Interior", body: "In-house architects and interior designers create spaces that photograph beautifully and live even better.", features: ["3D walkthrough included", "Vastu-conscious layouts", "Custom joinery workshop"] },
  { icon: Wrench, title: "Facility Management", body: "Post-handover management for your building — security, cleaning, lifts, generator and finance.", features: ["24/7 on-site team", "Digital service book", "Annual reserve fund audit"] },
];

const process = [
  { step: "01", title: "Discovery", body: "Free consultation to understand budget, timeline and lifestyle needs." },
  { step: "02", title: "Design", body: "Architect-led design with 3D walkthrough approval before ground-breaking." },
  { step: "03", title: "Build", body: "Milestone-linked construction with weekly client progress reports." },
  { step: "04", title: "Handover", body: "Snag-list closure, registration, keys and 24-month warranty activation." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="What We Do"
        title="Six services. One accountable roof."
        titleBn="ছয়টি সেবা, এক ছাদের নিচে"
        subtitle="From master planning to key handover and lifelong facility management — North End covers every stage of the real estate journey so you deal with one partner, not seven contractors."
        image={heroCity}
      />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body, features }) => (
              <article key={title} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-brand-gold hover:shadow-elegant hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gold/12 text-brand-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-gold">
                  Discuss this service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white md:py-28">
        <div className="container-page">
          <SectionHeader
            align="center"
            invert
            kicker="How We Work"
            title="A four-step delivery playbook"
            titleBn="আমাদের চার-ধাপের কর্মপ্রক্রিয়া"
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <TrendingUp className="h-10 w-10 text-brand-gold" />
          <h2 className="text-3xl font-semibold md:text-4xl">Ready to break ground?</h2>
          <p className="max-w-xl text-muted-foreground">Tell us about your project — residential, commercial or a plot of land — and we'll come back with a costed proposal within 48 hours.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/inquiry" className="btn-premium">Start a project</Link>
            <Link to="/projects/running" className="btn-outline-premium">See our work</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}