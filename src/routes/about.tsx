import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Award, Users, Building2, Target, HeartHandshake, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { SectionHeader } from "@/components/home/sections/SectionHeader";
import { Statistics } from "@/components/home/sections/Statistics";
import heroInterior from "@/assets/hero-interior.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — North End Construction Ltd | Rangpur Developer" },
      { name: "description", content: "Since inception, North End Construction Ltd has delivered 50+ premium developments across Rangpur. Meet the team, mission and craftsmanship behind every project." },
      { property: "og:title", content: "About North End Construction Ltd" },
      { property: "og:description", content: "The people, the mission and 15+ years of craftsmanship building Rangpur's skyline." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: Target, title: "Precision Engineering", body: "Every load-path, every finish — modelled, tested and inspected before it becomes your home." },
  { icon: HeartHandshake, title: "Client-First Culture", body: "From first visit to 10-year warranty, one dedicated relationship manager stays with you." },
  { icon: Sparkles, title: "Uncompromised Materials", body: "Grade-A rebar, imported fittings, branded cement — sourced direct, never substituted." },
  { icon: Award, title: "On-Time Handover", body: "97% of our projects handed over on or before contracted date — verified by escrow milestones." },
];

const milestones = [
  { year: "2010", title: "Founded in Rangpur", body: "Started with a single 6-storey residential project on Central Road." },
  { year: "2015", title: "REHAB Membership", body: "Joined the Real Estate & Housing Association of Bangladesh." },
  { year: "2019", title: "1M sqft delivered", body: "Crossed a million square feet of built, handed-over developments." },
  { year: "2022", title: "ISO 9001 Certified", body: "Formalised quality management across design, procurement and construction." },
  { year: "2026", title: "Skyline expansion", body: "12 active projects across Rangpur, Saidpur and Dinajpur corridors." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="Who We Are"
        title="Craftsmanship carved into Rangpur's skyline"
        titleBn="রংপুরের আকাশরেখায় খোদাই করা কারিগরি"
        subtitle="North End Construction Ltd is a full-service real estate developer with 15+ years of building homes, offices and lives — one honest square foot at a time."
        image={heroTower}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant aspect-[4/5]">
            <img src={heroInterior} alt="North End interior craftsmanship" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeader
              kicker="Our Story"
              title="Fifteen years. One promise."
              titleBn="পনেরো বছর, একটি প্রতিশ্রুতি"
              subtitle="What started as a small family construction firm on Central Road is today one of northern Bangladesh's most trusted developers — with 50+ delivered projects and 1,200+ families calling a North End address home."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Family-owned, professionally managed — three generations of builders",
                "In-house architects, structural engineers, MEP and interior teams",
                "Every project independently audited by a third-party quality lab",
                "24-month post-handover warranty on structure, plumbing and electricals",
              ].map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            align="center"
            kicker="Our Values"
            title="What we refuse to compromise on"
            titleBn="যা কখনো আপস করি না"
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand-gold hover:shadow-card-soft">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand-gold/12 text-brand-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Statistics />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            align="center"
            kicker="Our Journey"
            title="Milestones along the way"
            titleBn="আমাদের পথচলার মাইলফলক"
          />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/50 via-brand-gold/20 to-transparent" aria-hidden />
            <ul className="space-y-10">
              {milestones.map((m, i) => (
                <li key={m.year} className={`relative grid gap-4 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                  <div className="pl-12 md:pl-0 md:pr-8 md:text-right">
                    <div className="text-3xl font-semibold text-brand-gold">{m.year}</div>
                    <div className="mt-2 text-lg font-semibold text-foreground">{m.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground max-w-sm md:ml-auto">{m.body}</p>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-gold ring-4 ring-brand-gold/20" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        <img src={heroConstruction} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="container-page relative grid gap-8 md:grid-cols-3">
          {[
            { icon: Building2, k: "50+", v: "Delivered developments" },
            { icon: Users, k: "1,200+", v: "Families served" },
            { icon: Award, k: "12", v: "Industry awards" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-brand-gold" />
              <div className="mt-6 text-5xl font-semibold">{k}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">{v}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}