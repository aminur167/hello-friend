import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reviews = [
  {
    name: "Rezaul Karim",
    role: "Homeowner, North End Prime",
    body: "From day one, every commitment was honoured. The finishing quality is remarkable and the handover was ahead of schedule.",
    bn: "প্রতিটি প্রতিশ্রুতি সময়মতো রক্ষা করেছে।",
  },
  {
    name: "Farhana Ahmed",
    role: "Investor, Gold Leaf Tower",
    body: "A rare mix of premium quality and honest pricing. My tenants have been staying continuously for years — best decision I made.",
    bn: "প্রিমিয়াম মান আর সৎ মূল্য — চমৎকার।",
  },
  {
    name: "Dr. Shahidul Islam",
    role: "Homeowner, Emerald Court",
    body: "Their engineering team walked us through every stage. My family finally has the home we always dreamed about.",
    bn: "পরিবারের স্বপ্নের বাড়ি খুঁজে পেয়েছি।",
  },
];

export function CustomerReviews() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="Customer Reviews"
          title="The reason we do what we do"
          titleBn="আমাদের গ্রাহকদের অভিজ্ঞতা"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-card-soft"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-gold/20" />
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <p className="mt-3 font-bangla text-sm text-muted-foreground">
                {r.bn}
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-brand-gold text-sm font-semibold text-white">
                  {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}