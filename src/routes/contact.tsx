import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import heroTower from "@/assets/hero-tower.jpg";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact North End Construction Ltd — Rangpur" },
      { name: "description", content: "Get in touch with North End Construction Ltd. Visit our Rangpur office, call, WhatsApp or send us a message." },
      { property: "og:title", content: "Contact North End Construction" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="Get in Touch"
        title="We're here to help — every step of the way"
        titleBn="আমরা আপনার পাশে আছি"
        subtitle="Reach us by phone, WhatsApp, email or drop by our Rangpur office. We reply to every message within one business day."
        image={heroTower}
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div className="space-y-4">
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Call us" body={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phone}`} />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              body="Fastest response — chat with sales"
              href={`https://wa.me/${siteConfig.admin.whatsApp}`}
            />
            <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" body={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
            <ContactCard icon={<MapPin className="h-5 w-5" />} title="Office" body={siteConfig.contact.address} />
          </div>
          <LeadForm variant="contact" />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon, title, body, href }: { icon: React.ReactNode; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-gold">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-gold/12 text-brand-gold">{icon}</div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-foreground">{body}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}