import { Waves, Dumbbell, ParkingCircle, Wifi, Shield, Zap, TreePine, Coffee, Utensils, PlaySquare, Baby, ArrowUpDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Waves, label: "Rooftop Pool" },
  { icon: Dumbbell, label: "Fitness Studio" },
  { icon: ParkingCircle, label: "Basement Parking" },
  { icon: Wifi, label: "Smart Home Ready" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Zap, label: "Full Backup Power" },
  { icon: TreePine, label: "Landscaped Gardens" },
  { icon: Coffee, label: "Community Lounge" },
  { icon: Utensils, label: "Party Kitchen" },
  { icon: PlaySquare, label: "Kids Play Zone" },
  { icon: Baby, label: "Daycare Room" },
  { icon: ArrowUpDown, label: "High-Speed Lifts" },
];

export function ApartmentFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Apartment Features"
          title="A lifestyle designed around you"
          titleBn="আপনার জীবনের চারপাশে সাজানো সুযোগ-সুবিধা"
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-card-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/8 text-primary transition-colors group-hover:bg-brand-gold/15 group-hover:text-brand-gold">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-foreground md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}