import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import brandLogo from "@/assets/brand-logo.png.asset.json";

const NAV_INK = "#2E3440";
const BRAND_BLUE = "#102B7A";
const BRAND_GOLD = "#D4A017";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_2px_16px_-6px_rgba(16,43,122,0.15)]" : "shadow-none",
      )}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1400, height: 92, paddingInline: 40 }}
      >
        {/* LEFT — Logo */}
        <Link
          to="/"
          aria-label={siteConfig.name}
          className="flex items-center gap-3 animate-fade-in"
          style={{ flex: "0 0 auto", minWidth: 0 }}
        >
          <img
            src={brandLogo.url}
            alt={`${siteConfig.name} logo`}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
            width={56}
            height={56}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-[15px] font-semibold tracking-wide"
              style={{ color: NAV_INK }}
            >
              {siteConfig.shortName}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: BRAND_GOLD }}
            >
              Construction Ltd
            </span>
          </div>
        </Link>

        {/* CENTER — Navigation */}
        <nav
          className="hidden lg:flex items-center justify-center"
          aria-label="Primary"
          style={{ gap: 34 }}
        >
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="nav-link relative text-[13.5px] font-semibold tracking-wide transition-colors"
              style={{ color: NAV_INK }}
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
            className="nav-cta inline-flex items-center justify-center rounded-full font-semibold text-[13.5px] tracking-wide transition-all duration-300"
            style={{
              backgroundColor: BRAND_GOLD,
              color: BRAND_BLUE,
              padding: "14px 34px",
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
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border"
          style={{ borderColor: "rgba(46,52,64,0.15)", color: NAV_INK }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t bg-white animate-fade-in" style={{ borderColor: "rgba(46,52,64,0.08)" }}>
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-5">
            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold"
                style={{ color: NAV_INK }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full font-semibold text-sm"
              style={{ backgroundColor: BRAND_GOLD, color: BRAND_BLUE, padding: "14px 28px" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px;
          height: 2px;
          width: 0;
          background: ${BRAND_GOLD};
          transition: width 260ms cubic-bezier(0.16, 1, 0.3, 1), left 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover { color: ${BRAND_BLUE}; }
        .nav-link:hover::after,
        .nav-link[data-active="true"]::after { width: 100%; left: 0; }
        .nav-link[data-active="true"] { color: ${BRAND_BLUE}; }

        .nav-cta:hover {
          background-color: ${BRAND_BLUE} !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -12px rgba(16,43,122,0.45);
        }
      `}</style>
    </header>
  );
}