import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { SectionHeader } from "@/components/home/SectionHeader";
import { Handshake, ShieldCheck, ScrollText, Building2, Coins, ClipboardCheck, Phone, MapPin, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/projects/14-29-54.jpg.asset.json";
import img1 from "@/assets/projects/14-29-49.jpg.asset.json";
import img2 from "@/assets/projects/14-29-53.jpg.asset.json";

export const Route = createFileRoute("/land-share")({
  head: () => ({
    meta: [
      { title: "জমি শেয়ার (Land Share / Joint Venture) — North End Construction" },
      {
        name: "description",
        content:
          "রংপুরে জমির মালিকদের জন্য উচ্চ-মানের জয়েন্ট ভেঞ্চার প্রস্তাব। স্বচ্ছ চুক্তি, প্রিমিয়াম ফিনিশ, দ্রুত ডেলিভারি — North End Construction এর সাথে।",
      },
      { property: "og:title", content: "জমি শেয়ার / Joint Venture — North End Construction" },
      { property: "og:description", content: "রংপুরের বিশ্বস্ত ডেভেলপারের সাথে জমি শেয়ার করুন — লাভজনক, স্বচ্ছ ও নিরাপদ।" },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: LandSharePage,
});

const benefits = [
  { icon: Coins, title: "লাভজনক ভাগাভাগি", desc: "মালিক ও ডেভেলপারের মধ্যে সমতাপূর্ণ ও স্বচ্ছ শেয়ার বণ্টন — আপনার জমি, আপনার মুনাফা।" },
  { icon: ShieldCheck, title: "আইনি নিরাপত্তা", desc: "রেজিস্টার্ড চুক্তি, পাওয়ার অব অ্যাটর্নি, এবং সম্পূর্ণ ডকুমেন্টেশন — কোনো লুকানো শর্ত নেই।" },
  { icon: Building2, title: "প্রিমিয়াম নির্মাণ", desc: "ISO-মানের নির্মাণ, ইতালিয়ান টাইলস, প্রিমিয়াম ফিটিংস — যা আপনার জমির মূল্য বহুগুণ বাড়াবে।" },
  { icon: ClipboardCheck, title: "সময়মতো হস্তান্তর", desc: "লিখিত ডেলিভারি টাইমলাইন, পেনাল্টি ক্লজ সহ — নির্ধারিত সময়েই আপনি পাবেন আপনার ভাগ।" },
];

const steps = [
  { n: "০১", title: "জমি পরিদর্শন", desc: "আমাদের টিম আপনার জমি সরেজমিন পরিদর্শন করে ফিজিবিলিটি রিপোর্ট তৈরি করে।" },
  { n: "০২", title: "প্রস্তাব ও শেয়ার", desc: "লোকেশন অনুযায়ী ৫০-৬০% পর্যন্ত মালিকানার শেয়ার অফার — লিখিতভাবে।" },
  { n: "০৩", title: "চুক্তি ও নকশা", desc: "রেজিস্টার্ড JV চুক্তি স্বাক্ষর, RAJUK/সিটি কর্পোরেশন অনুমোদিত নকশা।" },
  { n: "০৪", title: "নির্মাণ ও হস্তান্তর", desc: "স্বচ্ছ মাসিক অগ্রগতি রিপোর্ট, নির্ধারিত সময়ে ফ্ল্যাট বুঝিয়ে দেওয়া।" },
];

const requirements = [
  "রংপুর সিটি কর্পোরেশন এলাকায় ন্যূনতম ৫ কাঠা জমি",
  "পরিষ্কার নামজারি ও খতিয়ান",
  "রাস্তার প্রশস্ততা ন্যূনতম ২০ ফুট",
  "কোনো আইনি জটিলতা মুক্ত",
  "মালিকের সম্মতিপত্র (একাধিক মালিক থাকলে)",
];

function LandSharePage() {
  return (
    <SiteLayout>
      <ProjectsHeader
        kicker="Joint Venture"
        title="আপনার জমি, আমাদের নির্মাণ — দুজনের জন্যই লাভজনক অংশীদারিত্ব"
        subtitle="রংপুরের সবচেয়ে বিশ্বস্ত রিয়েল এস্টেট ডেভেলপার North End Construction এর সাথে আপনার জমি শেয়ার করুন। স্বচ্ছ চুক্তি, প্রিমিয়াম নির্মাণ, নিশ্চিত মুনাফা।"
        image={heroImg.url}
      />

      {/* Benefits */}
      <section className="container-page py-20 md:py-24">
        <SectionHeader
          kicker="Why Partner With Us"
          title="জমির মালিকদের জন্য বিশেষ সুবিধা"
          subtitle="১৫+ বছরের অভিজ্ঞতা, ৫০+ সফল প্রকল্প — আপনার জমি নিরাপদ হাতে।"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bangla mt-4 text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="font-bangla mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-brand-gold/5 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/30 py-20 md:py-24">
        <div className="container-page">
          <SectionHeader
            kicker="How It Works"
            title="৪ ধাপে জমি শেয়ার প্রক্রিয়া"
            subtitle="সরল, স্বচ্ছ ও নিরাপদ — প্রথম মিটিং থেকে চাবি হস্তান্তর পর্যন্ত।"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="flex items-center justify-between">
                  <span className="font-bangla text-3xl font-bold text-brand-gold">{s.n}</span>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block h-px w-8 bg-brand-gold/40" />
                  )}
                </div>
                <h3 className="font-bangla mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="font-bangla mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: Image + Requirements */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border-4 border-brand-gold/20 shadow-elegant">
              <img
                src={img1.url}
                alt="Land share joint venture project"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-brand-navy p-5 text-white shadow-elegant">
              <div className="flex items-center gap-3">
                <Handshake className="h-8 w-8 text-brand-gold" />
                <div>
                  <div className="font-bangla text-xs text-white/70">সফল অংশীদারিত্ব</div>
                  <div className="text-2xl font-bold">৩০+</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Eligibility
            </span>
            <h2 className="font-bangla mt-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              জমি শেয়ারের জন্য প্রয়োজনীয়তা
            </h2>
            <p className="font-bangla mt-3 text-muted-foreground">
              নিচের শর্তগুলো পূরণ হলেই আপনি আমাদের সাথে জয়েন্ট ভেঞ্চারে অংশ নিতে পারবেন। শর্ত সাপেক্ষে ব্যতিক্রমও বিবেচনায় নেওয়া হয়।
            </p>
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                  <span className="font-bangla text-foreground">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="font-bangla inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <ScrollText className="h-4 w-4" /> প্রস্তাব জমা দিন
              </Link>
              <a
                href={`tel:${siteConfig_phone}`}
                className="font-bangla inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-gold"
              >
                <Phone className="h-4 w-4" /> এখনই কল করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container-page pb-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20"
          style={{
            background: `linear-gradient(135deg, #0B1E4C 0%, #102B7A 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${img2.url})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }}
          />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Ready to Partner
              </span>
              <h2 className="font-bangla mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                আপনার জমির সর্বোচ্চ মূল্য পেতে আজই যোগাযোগ করুন
              </h2>
              <p className="font-bangla mt-3 max-w-2xl text-white/80">
                বিনামূল্যে জমি মূল্যায়ন, ফিজিবিলিটি রিপোর্ট এবং প্রাথমিক প্রস্তাব — কোনো বাধ্যবাধকতা ছাড়াই।
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand-gold" /> রংপুর সিটি কর্পোরেশন এলাকা</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="font-bangla inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-navy shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              এখনই যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

// Phone fallback — reads from siteConfig without importing
const siteConfig_phone = "+8801700000000";
