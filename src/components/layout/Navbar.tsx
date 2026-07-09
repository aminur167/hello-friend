import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import brandLogo from "@/assets/brand-logo.png.asset.json";

const BRAND_BLUE = "#102B7A";
const BRAND_GOLD = "#D4A017";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navH = scrolled ? 74 : 90;

  return (
    <div
      className="sticky top-0 z-50 w-full animate-fade-in"
      style={{
        paddingTop: scrolled ? 10 : 18,
        paddingBottom: scrolled ? 8 : 14,
        transition: "padding 300ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <header
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: 1360,
          height: navH,
          marginInline: "clamp(12px, 3vw, 40px)",
          paddingInline: "clamp(16px, 3vw, 32px)",
          borderRadius: 18,
          background: scrolled ? "rgba(11,25,60,0.55)" : "rgba(255,255,255,0.08)",
          backdropFilter: scrolled ? "blur(28px) saturate(140%)" : "blur(20px) saturate(130%)",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(140%)" : "blur(20px) saturate(130%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: scrolled
            ? "0 14px 40px rgba(0,0,0,0.28)"
            : "0 10px 40px rgba(0,0,0,0.15)",
          transition:
            "height 300ms cubic-bezier(0.16,1,0.3,1), background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        {/* LEFT — Logo */}
        <Link
          to="/"
          aria-label={siteConfig.name}
          className="flex items-center gap-3 nav-logo"
          style={{ flex: "0 0 auto" }}
        >
          <img
            src={brandLogo.url}
            alt={`${siteConfig.name} logo`}
            className="h-11 w-11 object-contain md:h-12 md:w-12"
            width={48}
            height={48}
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
          className="hidden lg:flex items-center justify-center"
          aria-label="Primary"
          style={{ gap: 30 }}
        >
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="nav-link relative text-[13px] font-semibold text-white/95 transition-colors"
              style={{ letterSpacing: "0.2px" }}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ "data-active": "true" } as never}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — CTA */}
        <div className="hidden lg:flex items-center" style={{ flex: "0 0 auto" }}>
          <Link
            to="/booking"
            className="nav-cta inline-flex items-center justify-center rounded-full font-semibold text-[13px] tracking-wide"
            style={{
              background: `linear-gradient(135deg, ${BRAND_GOLD} 0%, #EBB63A 100%)`,
              color: BRAND_BLUE,
              padding: "12px 30px",
              boxShadow: "0 8px 22px -8px rgba(212,160,23,0.6)",
              transition: "all 300ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
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
            maxWidth: 1360,
            marginInline: "clamp(12px, 3vw, 40px)",
            borderRadius: 18,
            background: "rgba(11,25,60,0.75)",
            backdropFilter: "blur(24px) saturate(140%)",
            WebkitBackdropFilter: "blur(24px) saturate(140%)",
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
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-white/95 hover:text-[color:var(--gold)]"
                style={{ ["--gold" as never]: BRAND_GOLD }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full font-semibold text-sm"
              style={{
                background: `linear-gradient(135deg, ${BRAND_GOLD} 0%, #EBB63A 100%)`,
                color: BRAND_BLUE,
                padding: "12px 26px",
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-logo { transition: transform 400ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease; }
        .nav-logo:hover { transform: translateX(2px); }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -7px;
          height: 2px;
          width: 0;
          background: ${BRAND_GOLD};
          border-radius: 2px;
          transition: width 300ms cubic-bezier(0.16,1,0.3,1), left 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover { color: ${BRAND_GOLD}; }
        .nav-link:hover::after,
        .nav-link[data-active="true"]::after { width: 100%; left: 0; }
        .nav-link[data-active="true"] { color: ${BRAND_GOLD}; }

        .nav-cta:hover {
          background: ${BRAND_BLUE} !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -10px rgba(16,43,122,0.55);
        }
      `}</style>
    </div>
  );
}
