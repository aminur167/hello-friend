import { ShieldCheck, HardHat, Ruler, Wallet, HandCoins, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  { icon: ShieldCheck, title: "Uncompromised Trust", bn: "আপোসহীন বিশ্বাস", body: "Clear title, timely handover, and full legal transparency on every project." },
  { icon: HardHat, title: "Engineering First", bn: "প্রকৌশলে সেরা", body: "Seismic-resistant structures designed with modern software and site audits." },
  { icon: Ruler, title: "Architectural Craft", bn: "স্থাপত্যের সৌন্দর্য", body: "Elegant, functional layouts by award-winning in-house architects." },
  { icon: Wallet, title: "Flexible Payment", bn: "সহজ কিস্তি", body: "Bank partnered plans with milestone-linked instalments to suit every budget." },
  { icon: HandCoins, title: "Investor Grade Returns", bn: "উচ্চ বিনিয়োগ রিটার্ন", body: "Prime locations with strong appreciation and rental yield potential." },
  { icon: Sparkles, title: "Premium Finishes", bn: "প্রিমিয়াম ফিনিশিং", body: "Imported fittings, branded ceramics, and hospitality-grade lobby design." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Why Choose Us"
          title="Six reasons families choose North End"
          titleBn="কেন হাজারো পরিবার আমাদের বেছে নেন"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, bn, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary group-hover:bg-brand-gold/15 group-hover:text-brand-gold transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1 font-bangla text-sm text-brand-gold">{bn}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gold/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}