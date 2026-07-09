import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LeadForm } from "@/components/forms/LeadForm";
import heroInterior from "@/assets/hero-interior.jpg";

export function BookingCTA() {
  return (
    <section id="booking" className="relative isolate overflow-hidden bg-brand-navy py-20 text-white md:py-28">
      <img src={heroInterior} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
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

        <LeadForm variant="site_visit" darkSurface />
      </div>
    </section>
  );
}