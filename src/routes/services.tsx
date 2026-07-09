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
  { icon: Home, tag: "০১", title: "আবাসিক অ্যাপার্টমেন্ট", body: "রংপুরের অভিজাত এলাকায় ১, ২, ৩ ও ৪ বেডরুমের ফ্ল্যাট — পরিবারের জন্য পরিকল্পিত, বাজেটের সাথে সামঞ্জস্যপূর্ণ।", features: ["রেডি ও প্রি-লঞ্চ ইউনিট", "সকল ব্যাংক লোন অনুমোদিত", "মডুলার কিচেন ও ফুল ইন্টেরিয়র"] },
  { icon: Building2, tag: "০২", title: "বাণিজ্যিক কমপ্লেক্স", body: "রিটেইল, অফিস ও মিক্সড-ইউজ ডেভেলপমেন্ট — দীর্ঘমেয়াদি ভাড়া ও ভাড়াটিয়া চাহিদার কথা মাথায় রেখে ইঞ্জিনিয়ারড।", features: ["গ্রাউন্ড + ১০ তলা টিপিক্যাল", "৩-ফেজ পাওয়ার ও ব্যাকআপ", "ডেডিকেটেড পার্কিং ফ্লোর"] },
  { icon: Landmark, tag: "০৩", title: "ল্যান্ড ডেভেলপমেন্ট", body: "মাস্টার-প্ল্যানড প্লটিং প্রকল্প — হস্তান্তরের আগেই রাস্তা, ড্রেনেজ, সীমানা ও নামজারি সম্পন্ন।", features: ["৩, ৫, ১০ কাঠা প্লট", "রেজিস্টার্ড নামজারি", "সম্পূর্ণ ইউটিলিটি সংযোগ"] },
  { icon: HardHat, tag: "০৪", title: "টার্নকি নির্মাণ", body: "নিজের জমি আছে? সয়েল টেস্ট থেকে চাবি হস্তান্তর — নির্দিষ্ট মূল্যে, নির্দিষ্ট সময়ে আমরাই সব সামলাই।", features: ["ডিজাইন + বিল্ড চুক্তি", "মাইলস্টোন-ভিত্তিক পেমেন্ট", "থার্ড-পার্টি কোয়ালিটি অডিট"] },
  { icon: Ruler, tag: "০৫", title: "আর্কিটেকচার ও ইন্টেরিয়র", body: "আমাদের ইন-হাউস আর্কিটেক্ট ও ইন্টেরিয়র ডিজাইনারদের হাতে গড়া — ছবিতে যেমন সুন্দর, বাস্তবেও তেমনই আরামদায়ক।", features: ["থ্রিডি ওয়াকথ্রু সহ", "বাস্তু-সম্মত লেআউট", "কাস্টম কাঠের কাজের কারখানা"] },
  { icon: Wrench, tag: "০৬", title: "ফ্যাসিলিটি ম্যানেজমেন্ট", body: "হস্তান্তরের পরও আমরা পাশে — সিকিউরিটি, ক্লিনিং, লিফট, জেনারেটর ও হিসাব-নিকাশ পূর্ণাঙ্গ ব্যবস্থাপনায়।", features: ["২৪/৭ অন-সাইট টিম", "ডিজিটাল সার্ভিস বুক", "বাৎসরিক রিজার্ভ ফান্ড অডিট"] },
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
        kicker="আমাদের সেবা"
        breadcrumb="আমাদের সেবা"
        title="ছয়টি সেবা, এক ছাদের নিচে — এক অংশীদার, পূর্ণ দায়িত্ব"
        subtitle="মাস্টার প্ল্যানিং থেকে চাবি হস্তান্তর ও দীর্ঘমেয়াদি ফ্যাসিলিটি ম্যানেজমেন্ট পর্যন্ত — রিয়েল এস্টেট যাত্রার প্রতিটি ধাপে নর্থ এন্ড আপনার পাশে। সাতজন কন্ট্রাক্টরের বদলে একজন নির্ভরযোগ্য পার্টনার।"
        image={heroCity}
      />

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, tag, title, body, features }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border/70 bg-card p-8 shadow-[0_2px_12px_-6px_rgba(11,45,107,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/60 hover:shadow-[0_30px_60px_-20px_rgba(11,45,107,0.35)]"
              >
                {/* Gold gradient top rail */}
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Ambient corner glow */}
                <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-gold/20 via-brand-gold/10 to-transparent ring-1 ring-brand-gold/25 text-brand-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <span className="font-hind text-xs font-bold tracking-[0.25em] text-brand-gold/70">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-7 font-hind text-2xl font-bold leading-tight text-brand-navy">
                  {title}
                </h3>
                <div className="mt-3 h-px w-10 bg-gradient-to-r from-brand-gold to-transparent" />
                <p className="mt-4 font-hind text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>

                <ul className="mt-6 space-y-2.5 font-hind text-[14px] text-foreground/85">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-gold/15">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-hind text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-gold"
                  >
                    এই সেবা নিয়ে আলোচনা করুন
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-navy/5 transition-all duration-300 group-hover:bg-brand-gold group-hover:text-white group-hover:translate-x-1">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
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