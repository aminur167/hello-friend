import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Slim premium announcement bar — deep royal blue with gold diamond separators.
 * Height: 36px. Not sticky; sits above the sticky white navbar.
 */
const Diamond = () => (
  <span
    aria-hidden
    className="mx-4 inline-block h-1.5 w-1.5 rotate-45"
    style={{ backgroundColor: "#D4A017" }}
  />
);

export function AnnouncementBar() {
  return (
    <div
      className="relative z-[60] w-full text-white text-[12px]"
      style={{ backgroundColor: "#102B7A", height: 36 }}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-10">
        <span className="font-bangla hidden md:inline-flex items-center whitespace-nowrap tracking-wide">
          দীর্ঘমেয়াদী কিস্তির সুবিধা – বুকিং চলছে
        </span>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="inline-flex items-center gap-2 whitespace-nowrap font-medium tracking-wide hover:text-white/90"
        >
          <Phone className="h-3 w-3" style={{ color: "#D4A017" }} />
          {siteConfig.contact.phone}
        </a>

        <span className="font-bangla hidden md:inline-flex items-center whitespace-nowrap tracking-wide">
          <Diamond />
          রংপুরের প্রিমিয়াম রিয়েল এস্টেট প্রতিষ্ঠান
          <Diamond />
        </span>
      </div>
    </div>
  );
}