import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LeadForm } from "@/components/forms/LeadForm";
import heroInterior from "@/assets/hero-interior.jpg";

export function BookingCTA() {
  return (
    <section id="booking" className="relative isolate overflow-hidden bg-brand-navy py-20 text-white md:py-28">
      <img src={heroInterior} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="gold-divider" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Book Your Visit
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Walk through your future home this week
          </h2>
          <p className="mt-4 font-bangla text-lg text-white/80">
            এই সপ্তাহে আপনার স্বপ্নের বাড়ি দেখে আসুন
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-white/75">
            Reserve a private site visit with our sales advisors. Get a walkthrough,
            floor plans, pricing and payment options — no obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-gold text-brand-gold-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.24em] text-white/60">Call our advisor</span>
                <span className="block text-sm font-semibold text-white">{siteConfig.contact.phone}</span>
              </span>
            </a>
          </div>
        </div>

        <LeadForm variant="site_visit" darkSurface />
      </div>
    </section>
  );
}