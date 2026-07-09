import { ShieldCheck, Award, Building2, Users, Landmark, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "REHAB Verified" },
  { icon: Award, label: "ISO 9001 Quality" },
  { icon: Building2, label: "50+ Projects" },
  { icon: Users, label: "1,200+ Happy Owners" },
  { icon: Landmark, label: "Bank Partnered" },
  { icon: BadgeCheck, label: "Registered Developer" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-secondary/50" aria-label="Trust indicators">
      <div className="container-page py-6 md:py-8">
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 text-muted-foreground"
            >
              <Icon className="h-5 w-5 text-brand-gold" />
              <span className="text-xs font-medium uppercase tracking-wider md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}