import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { premiumImages } from "@/lib/premium-images";

const reviews = [
  {
    name: "রেজাউল করিম",
    role: "গৃহকর্তা, নর্থ এন্ড রয়েল হাউস",
    body: "প্রথম দিন থেকেই প্রতিটি প্রতিশ্রুতি সময়মতো রক্ষা করা হয়েছে। ফিনিশিংয়ের মান অসাধারণ এবং নির্ধারিত সময়ের আগেই হ্যান্ডওভার সম্পন্ন হয়েছে।",
    avatar: premiumImages.reviewers[1],
  },
  {
    name: "ফারহানা আহমেদ",
    role: "বিনিয়োগকারী, নর্থ এন্ড ফ্লেমিঙ্গো",
    body: "প্রিমিয়াম মান আর সৎ মূল্যের বিরল সংমিশ্রণ। আমার ভাড়াটিয়ারা বছরের পর বছর ধরে আছেন — এটি আমার সেরা সিদ্ধান্ত ছিল।",
    avatar: premiumImages.reviewers[0],
  },
  {
    name: "ডঃ শহিদুল ইসলাম",
    role: "গৃহকর্তা, নর্থ এন্ড লেক ভিউ",
    body: "তাদের ইঞ্জিনিয়ারিং টিম প্রতিটি ধাপে আমাদের সঙ্গে ছিল। অবশেষে আমার পরিবার স্বপ্নের বাড়িটি খুঁজে পেয়েছে।",
    avatar: premiumImages.reviewers[2],
  },
];

export function CustomerReviews() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          align="center"
          kicker="গ্রাহক অভিজ্ঞতা"
          title="আমাদের গ্রাহকদের অভিজ্ঞতা"
          titleBn="যাদের ভালোবাসায় আমরা এগিয়ে চলেছি"
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
              <blockquote className="mt-4 font-bangla text-foreground/85 leading-relaxed">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-gold/40"
                />
                <div>
                  <div className="font-bangla text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="font-bangla text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}