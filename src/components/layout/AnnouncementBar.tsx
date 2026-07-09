import { Star } from "lucide-react";

/**
 * Premium glass announcement bar with infinite right→left marquee.
 * Height: 36px. Semi-transparent royal blue with backdrop blur.
 * Bengali content, Hind Siliguri font.
 */
const GOLD = "#D4A017";

const items = [
  { icon: "star", text: "দীর্ঘমেয়াদী কিস্তির সুবিধা" },
  { icon: "diamond", text: "আজই বুকিং করুন" },
  { icon: "diamond", text: "রংপুরের প্রিমিয়াম রিয়েল এস্টেট প্রতিষ্ঠান" },
  { icon: "diamond", text: "স্বপ্নের বাড়ি, নিরাপদ বিনিয়োগ" },
  { icon: "diamond", text: "সীমিত সময়ের বিশেষ অফার" },
  { icon: "diamond", text: "যোগাযোগ: +৮৮০ ১৭০০ ০০০ ০০০" },
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
        <span
          key={i}
          className="inline-flex items-center gap-2.5 text-[12.5px] text-white/95 whitespace-nowrap"
          style={{ fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif", fontWeight: 500 }}
        >
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
