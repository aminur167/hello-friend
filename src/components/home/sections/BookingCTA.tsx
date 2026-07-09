import { CalendarCheck, ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 text-white md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, oklch(0.74 0.15 82 / 0.5), transparent 40%), radial-gradient(circle at 85% 70%, oklch(0.42 0.13 265 / 0.55), transparent 45%)",
        }}
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
            Book Your Visit
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            Walk through your future home this week
          </h2>
          <p className="mt-3 font-bangla text-lg text-white/80">
            এই সপ্তাহে আপনার স্বপ্নের বাড়ি দেখে আসুন
          </p>
          <p className="mt-4 max-w-xl text-white/75">
            Reserve a private site visit with our sales advisors. Get a walkthrough,
            floor plans, pricing and payment options — no obligation.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="inline-flex items-center gap-2 text-white">
              <Phone className="h-4 w-4 text-brand-gold" />
              <span className="text-sm font-semibold">{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>

        <form className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Full name</span>
              <input required type="text" placeholder="Your name" className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Phone</span>
              <input required type="tel" placeholder="+880" className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Interested project</span>
              <select className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none">
                <option className="text-foreground">North End Horizon</option>
                <option className="text-foreground">Gold Crest Residences</option>
                <option className="text-foreground">Greenline Terrace</option>
                <option className="text-foreground">Not sure yet</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Preferred visit date</span>
              <input type="date" className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white focus:border-brand-gold focus:outline-none" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-4 w-4" /> Reserve My Visit
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-white/60">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}