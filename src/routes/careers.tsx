import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, HeartPulse, GraduationCap, TrendingUp, Users, Coffee } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { SectionHeader } from "@/components/home/sections/SectionHeader";
import heroConstruction from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Build with North End Construction Ltd" },
      { name: "description", content: "Join North End Construction Ltd — open roles in engineering, architecture, sales and site management across Rangpur, Bangladesh." },
      { property: "og:title", content: "Careers at North End Construction" },
      { property: "og:description", content: "Grow your career with northern Bangladesh's most trusted developer." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const openings = [
  { title: "Senior Structural Engineer", dept: "Engineering", type: "Full-time", loc: "Rangpur HQ", exp: "6+ years" },
  { title: "Architect — Residential", dept: "Design", type: "Full-time", loc: "Rangpur HQ", exp: "4+ years" },
  { title: "Site Engineer (Civil)", dept: "Construction", type: "Full-time", loc: "Rangpur Sites", exp: "2+ years" },
  { title: "Sales Executive", dept: "Sales & Marketing", type: "Full-time", loc: "Rangpur HQ", exp: "1+ years" },
  { title: "Interior Designer", dept: "Design", type: "Full-time", loc: "Rangpur HQ", exp: "3+ years" },
  { title: "Accounts Officer", dept: "Finance", type: "Full-time", loc: "Rangpur HQ", exp: "2+ years" },
  { title: "Digital Marketing Lead", dept: "Marketing", type: "Full-time", loc: "Hybrid", exp: "4+ years" },
  { title: "MEP Foreman", dept: "Construction", type: "Full-time", loc: "Rangpur Sites", exp: "5+ years" },
];

const perks = [
  { icon: HeartPulse, title: "Full family health cover", body: "Comprehensive medical for you, spouse and two children." },
  { icon: GraduationCap, title: "Learning stipend", body: "BDT 40,000/year for courses, certifications and conferences." },
  { icon: TrendingUp, title: "Annual performance bonus", body: "Up to 2 months of salary tied to project delivery KPIs." },
  { icon: Users, title: "Referral rewards", body: "Refer talent, earn up to BDT 25,000 on successful hires." },
  { icon: Coffee, title: "Modern HQ + free meals", body: "Daily lunch, ergonomic workstations and a rooftop cafe." },
  { icon: Briefcase, title: "ESOP for senior roles", body: "Long-term wealth alignment for leadership positions." },
];

function CareersPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="Careers"
        title="Build Rangpur's skyline with us"
        titleBn="আমাদের সাথে গড়ুন রংপুরের ভবিষ্যৎ"
        subtitle="We're hiring engineers, architects, designers and business professionals who want to leave a mark on the city they call home."
        image={heroConstruction}
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeader
              kicker="Why North End"
              title="Work that lasts a generation"
              titleBn="যে কাজ প্রজন্ম ধরে টিকে থাকে"
              subtitle="Every building we deliver houses hundreds of families for decades. That responsibility shapes our culture — precise, patient, proud."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {perks.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gold/12 text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground md:text-2xl">Open positions</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{openings.length} roles across engineering, design & business.</p>
                </div>
                <span className="hidden rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold md:inline-block">
                  Hiring now
                </span>
              </div>
              <ul className="mt-6 divide-y divide-border">
                {openings.map((job) => (
                  <li key={job.title} className="group flex flex-col gap-3 py-4 transition-colors md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-brand-gold">{job.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{job.dept}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.loc}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.type} · {job.exp}</span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex w-fit items-center rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-all hover:border-brand-gold hover:bg-brand-gold hover:text-brand-gold-foreground"
                    >
                      Apply
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-3xl bg-brand-navy p-8 text-white">
              <h3 className="text-lg font-semibold">Don't see your role?</h3>
              <p className="mt-2 text-sm text-white/70">We're always looking for exceptional people. Send your CV and a note about the role you'd like to create.</p>
              <Link to="/contact" className="mt-5 inline-flex btn-premium">Send an open application</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}