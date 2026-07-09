import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function GoogleMap() {
  const q = encodeURIComponent(`${siteConfig.location.city}, ${siteConfig.location.country}`);
  return (
    <section aria-label="Our location">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-elegant">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Find Us
            </span>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Visit our head office
            </h2>
            <p className="mt-2 font-bangla text-white/80">আমাদের অফিসে স্বাগতম</p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <div className="font-semibold">Head Office</div>
                  <div className="text-white/75">{siteConfig.contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="mt-0.5 h-5 w-5 text-brand-gold" />
                <div>
                  <div className="font-semibold">Open Hours</div>
                  <div className="text-white/75">Sat – Thu · 9:00 AM – 7:00 PM</div>
                </div>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold-foreground shadow-gold hover:-translate-y-0.5 transition-transform"
            >
              Get Directions
            </a>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-card-soft lg:col-span-2">
            <iframe
              title="North End Construction location on map"
              src={`https://maps.google.com/maps?q=${q}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
              className="h-[420px] w-full lg:h-full"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}