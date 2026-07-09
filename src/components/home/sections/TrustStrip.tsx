import { ShieldCheck, Award, Building2, Users, Landmark, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "REHAB Verified", sub: "Certified developer" },
  { icon: Award, label: "ISO 9001", sub: "Quality assured" },
  { icon: Building2, label: "50+ Projects", sub: "Delivered on time" },
  { icon: Users, label: "1,200+ Owners", sub: "Trusted community" },
  { icon: Landmark, label: "Bank Partnered", sub: "Easy home loans" },
  { icon: BadgeCheck, label: "Registered", sub: "Government approved" },
];

export function TrustStrip() {
  return (
    <section
      className="relative border-y border-border bg-gradient-to-b from-secondary/30 via-background to-secondary/40"
      aria-label="Trust indicators"
    >
      <div className="container-page py-10 md:py-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {items.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card px-4 py-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-gold"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-gold/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
              />
              <div className="relative flex flex-col items-center text-center gap-2.5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 ring-1 ring-brand-gold/25 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-brand-gold" strokeWidth={2.2} />
                </span>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground md:text-xs">
                  {label}
                </div>
                <div className="text-[10px] text-muted-foreground md:text-[11px]">
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}