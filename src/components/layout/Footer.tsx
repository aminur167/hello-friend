import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";
import brandLogo from "@/assets/brand-logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <Container className="py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={brandLogo.url}
              alt={`${siteConfig.name} logo`}
              className="h-11 w-11 object-contain"
              width={44}
              height={44}
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{siteConfig.shortName}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-brand-gold">
                Construction Ltd
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75 max-w-xs">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-3 pt-2">
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-brand-gold hover:text-brand-gold-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-brand-gold hover:text-brand-gold-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.youtube && (
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-brand-gold hover:text-brand-gold-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md bg-white/10 hover:bg-brand-gold hover:text-brand-gold-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.footerCompany.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.footerServices.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-primary-foreground/80 hover:text-brand-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-gold" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-gold">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-gold" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-gold">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Rangpur · Bangladesh</p>
        </Container>
      </div>
    </footer>
  );
}