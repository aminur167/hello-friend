import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import brandLogo from "@/assets/brand-logo.png.asset.json";

const BRAND_BLUE = "#102B7A";
const BRAND_GOLD = "#D4A017";
const BN_FONT = "'Hind Siliguri', 'Noto Sans Bengali', sans-serif";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navH = scrolled ? 72 : 86;

  return (
    <div
      className="sticky top-0 z-50 w-full animate-fade-in"
      style={{
        paddingTop: scrolled ? 6 : 12,
        paddingBottom: scrolled ? 6 : 8,
        transition: "padding 380ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <header
        className="mx-auto grid items-center"
        style={{
          maxWidth: 1400,
          height: navH,
          marginInline: "clamp(12px, 3vw, 40px)",
          paddingInline: "clamp(18px, 2.6vw, 36px)",
          borderRadius: 16,
          gridTemplateColumns: "1fr auto 1fr",
          columnGap: 24,
          background: scrolled ? "rgba(11,25,60,0.58)" : "rgba(255,255,255,0.10)",
          backdropFilter: scrolled ? "blur(30px) saturate(150%)" : "blur(20px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: scrolled
            ? "0 14px 44px rgba(0,0,0,0.28)"
            : "0 10px 40px rgba(0,0,0,0.15)",
          transition:
            "height 380ms cubic-bezier(0.16,1,0.3,1), background 380ms ease, box-shadow 380ms ease, backdrop-filter 380ms ease",
        }}
      >
        {/* LEFT — Logo */}
        <Link
          to="/"
          aria-label={siteConfig.name}
          className="flex items-center gap-3 nav-logo justify-self-start"
        >
          <img
            src={brandLogo.url}
            alt={`${siteConfig.name} logo`}
            className="object-contain nav-logo-img"
            style={{
              height: scrolled ? 40 : 46,
              width: scrolled ? 40 : 46,
              transition: "height 380ms cubic-bezier(0.16,1,0.3,1), width 380ms cubic-bezier(0.16,1,0.3,1)",
            }}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              {siteConfig.shortName}
            </span>
            <span
              className="text-[9.5px] uppercase tracking-[0.24em] font-medium"
              style={{ color: BRAND_GOLD }}
            >
              Construction Ltd
            </span>
          </div>
        </Link>

        {/* CENTER — Nav */}
        <nav
          className="hidden lg:flex items-center justify-self-center"
          aria-label="Primary"
          style={{ gap: 26 }}
        >
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="nav-link relative text-[14px] text-white/95 transition-all"
              style={{ fontFamily: BN_FONT, fontWeight: 600, letterSpacing: "0.2px" }}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ "data-active": "true" } as never}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — CTA */}
        <div className="hidden lg:flex items-center justify-self-end">
          <Link
            to="/booking"
            className="nav-cta inline-flex items-center justify-center rounded-full text-[13.5px]"
            style={{
              fontFamily: BN_FONT,
              fontWeight: 600,
              background: `linear-gradient(135deg, ${BRAND_GOLD} 0%, #EBB63A 100%)`,
              color: BRAND_BLUE,
              padding: scrolled ? "10px 24px" : "11px 28px",
              boxShadow: "0 8px 22px -8px rgba(212,160,23,0.6)",
              transition: "all 320ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            এখনই বুকিং করুন
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white justify-self-end col-start-3"
          style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)" }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile panel */}
      {open && (
        <div
          className="lg:hidden mx-auto mt-3 animate-fade-in"
          style={{
            maxWidth: 1400,
            marginInline: "clamp(12px, 3vw, 40px)",
            borderRadius: 16,
            background: "rgba(11,25,60,0.75)",
            backdropFilter: "blur(24px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
            padding: "14px 18px",
          }}
        >
          <div className="flex flex-col gap-1">
            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-[15px] text-white/95 hover:text-[color:var(--gold)]"
                style={{ ["--gold" as never]: BRAND_GOLD, fontFamily: BN_FONT, fontWeight: 600 }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full text-sm"
              style={{
                fontFamily: BN_FONT,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${BRAND_GOLD} 0%, #EBB63A 100%)`,
                color: BRAND_BLUE,
                padding: "12px 26px",
              }}
            >
              এখনই বুকিং করুন
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-logo {
          transition: transform 400ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease;
          animation: logoSlideIn 700ms cubic-bezier(0.16,1,0.3,1) both;
        }
        .nav-logo:hover { transform: translateX(2px); }
        @keyframes logoSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          height: 2px;
          width: 0;
          background: ${BRAND_GOLD};
          border-radius: 2px;
          transition: width 320ms cubic-bezier(0.16,1,0.3,1), left 320ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link { transition: color 250ms ease, transform 250ms ease; }
        .nav-link:hover { color: ${BRAND_GOLD}; transform: translateY(-2px); }
        .nav-link:hover::after,
        .nav-link[data-active="true"]::after { width: 100%; left: 0; }
        .nav-link[data-active="true"] { color: ${BRAND_GOLD}; }

        .nav-cta:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 16px 34px -10px rgba(212,160,23,0.7), 0 0 0 4px rgba(212,160,23,0.15);
        }
      `}</style>
    </div>
  );
}
