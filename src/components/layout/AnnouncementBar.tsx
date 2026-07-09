import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Top marketing announcement strip. Sits above the transparent navbar.
 * Slim on mobile, dual-column on desktop with contact + promo.
 */
export function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-brand-navy text-white/90 text-xs">
      <div className="container-page flex h-9 items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-gold" />
            {siteConfig.location.city}, {siteConfig.location.country}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-brand-gold" />
            {siteConfig.contact.phone}
          </span>
        </div>
        <div className="flex-1 sm:flex-none text-center sm:text-right">
          <span className="font-medium tracking-wide">
            <span className="text-brand-gold">★</span>{" "}
            New Launch — Book Your Apartment in Rangpur Today
            <span className="mx-2 hidden sm:inline text-white/40">|</span>
            <span className="font-bangla hidden sm:inline">রংপুরে প্রিমিয়াম ফ্ল্যাট এখনই বুক করুন</span>
          </span>
        </div>
      </div>
    </div>
  );
}