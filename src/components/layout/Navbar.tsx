import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import brandLogo from "@/assets/brand-logo.jpg.asset.json";

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
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-card-soft"
          : "bg-transparent text-white",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <img
            src={brandLogo.url}
            alt={`${siteConfig.name} logo`}
            className="h-11 w-11 object-contain"
            width={44}
            height={44}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={cn(
              "text-sm font-semibold tracking-wide transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}>
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-brand-gold">
              Construction Ltd
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-brand-gold",
              )}
              activeProps={{ className: scrolled ? "text-primary" : "text-brand-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow-elegant transition-all hover:-translate-y-0.5",
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-brand-gold text-brand-gold-foreground",
            )}
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
            scrolled ? "border-border text-foreground" : "border-white/40 text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <Container className="py-4 flex flex-col gap-1">
            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}