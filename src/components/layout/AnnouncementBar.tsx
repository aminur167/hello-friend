import { Phone, Star, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Premium glass announcement bar with infinite right→left marquee.
 * Height: 36px. Semi-transparent royal blue with backdrop blur.
 */
const GOLD = "#D4A017";

const items = [
  { icon: "star", text: "Long-term installment facilities available" },
  { icon: "diamond", text: `Call Now: ${siteConfig.contact.phone}` },
  { icon: "diamond", text: "Premium Real Estate in Rangpur" },
  { icon: "diamond", text: "Book Your Apartment Today" },
  { icon: "diamond", text: "Trusted Construction Company" },
  { icon: "diamond", text: "Luxury Living Starts Here" },
];

const Icon = ({ kind }: { kind: string }) => {
  if (kind === "star") return <Star className="h-3 w-3 shrink-0" style={{ color: GOLD }} fill={GOLD} />;
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rotate-45 shrink-0"
      style={{ backgroundColor: GOLD }}
    />
  );
};

function Track() {
  return (
    <div className="flex items-center gap-10 pr-10 shrink-0">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-2.5 text-[12px] tracking-wide text-white/95 whitespace-nowrap">
          <Icon kind={it.icon} />
          {it.text}
        </span>
      ))}
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <div
      className="relative z-[60] w-full overflow-hidden"
      style={{
        height: 36,
        background: "rgba(16,43,122,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="marquee flex h-full items-center">
        <div className="marquee-inner flex items-center">
          <Track />
          <Track />
        </div>
      </div>
      <style>{`
        .marquee-inner {
          animation: marquee-scroll 45s linear infinite;
          will-change: transform;
        }
        .marquee:hover .marquee-inner { animation-play-state: paused; }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }
      `}</style>
    </div>
  );
}
