import { TrendingUp, Landmark, ShieldCheck, PiggyBank, MapPinned, ReceiptText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  { icon: TrendingUp, title: "12–18% Annual Appreciation", body: "Rangpur's fast-growing corridors drive strong long-term property gains." },
  { icon: PiggyBank, title: "Reliable Rental Yield", body: "Consistent tenant demand around universities, hospitals and business zones." },
  { icon: Landmark, title: "Bank Loan Ready", body: "Approved by leading banks — home loans up to 70% of value available." },
  { icon: ShieldCheck, title: "Secure Legal Documentation", body: "Every plot & flat comes with clear mutation, deed and RAJUK/city plan clearance." },
  { icon: MapPinned, title: "Prime Locations Only", body: "We only develop where infrastructure, schools and healthcare already thrive." },
  { icon: ReceiptText, title: "Transparent Costing", body: "Fixed pricing with no hidden fees — everything itemised in your agreement." },
];

export function InvestmentBenefits() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Investment Benefits"
          title="Real estate that works for you"
          titleBn="যে বিনিয়োগ আপনার জন্য কাজ করে"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-brand-gold/60 hover:shadow-card-soft">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-gold/12 text-brand-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}