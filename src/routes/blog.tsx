import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import heroCity from "@/assets/hero-city.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import heroTower from "@/assets/hero-tower.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog & Insights — Rangpur Real Estate | North End" },
      { name: "description", content: "Market updates, buyer guides, EMI tips and construction insights from North End Construction Ltd — helping you make smarter real estate decisions in Rangpur." },
      { property: "og:title", content: "North End Blog — Real Estate Insights" },
      { property: "og:description", content: "Guides, market updates and construction stories from Rangpur's trusted developer." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const posts = [
  { title: "Rangpur real-estate outlook 2026: five corridors to watch", excerpt: "From Modern More to Grand Hotel Road, we map the neighbourhoods delivering strongest returns for buyers this year.", date: "Jul 5, 2026", read: "8 min", cat: "Market", cover: heroCity, featured: true },
  { title: "First flat, no regrets: a Bangladeshi buyer's checklist", excerpt: "Twelve non-negotiable questions to ask before you sign a booking form.", date: "Jun 22, 2026", read: "6 min", cat: "Buyer Guide", cover: heroFamily },
  { title: "How EMI, HBL and bank financing actually work for apartments", excerpt: "A plain-language breakdown of loan tenure, down payment and interest structures.", date: "Jun 10, 2026", read: "7 min", cat: "Finance", cover: heroInterior },
  { title: "Behind the pour: what makes a raft foundation truly earthquake-ready", excerpt: "An inside look at the engineering standards North End applies on every high-rise.", date: "May 28, 2026", read: "5 min", cat: "Construction", cover: heroConstruction },
  { title: "Interior finishes that quietly age well (and ones that don't)", excerpt: "Materials, palettes and joinery decisions that still look good in year ten.", date: "May 14, 2026", read: "6 min", cat: "Interior", cover: heroLobby },
  { title: "Rooftop amenities: from wishlist to real return on investment", excerpt: "Why buyers now pay a premium for gardens, gyms and community lounges.", date: "Apr 30, 2026", read: "5 min", cat: "Lifestyle", cover: heroTower },
];

const [featured, ...rest] = posts;

function BlogPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="ব্লগ ও ইনসাইট"
        breadcrumb="ব্লগ"
        title="সহজ ভাষায় রিয়েল এস্টেটের গভীর অন্তর্দৃষ্টি"
        subtitle="মার্কেট আউটলুক, ক্রেতার চেকলিস্ট ও নির্মাণ কৌশল — লিখেছেন সেই বিশেষজ্ঞরা যারা আমাদের প্রকল্প ডিজাইন করেন ও হস্তান্তর করেন।"
        image={heroCity}
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <article className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft transition-all hover:shadow-elegant lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">{featured.cat}</span>
              <h2 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.read} read</span>
              </div>
              <button className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-gold">
                Read the article <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">{p.cat}</span>
                  <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-gold">{p.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container-page grid gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Get monthly market briefs</h2>
            <p className="mt-2 text-muted-foreground">One email a month — Rangpur inventory, price movement and new launch alerts. No spam.</p>
          </div>
          <Link to="/contact" className="btn-premium w-fit">Subscribe</Link>
        </div>
      </section>
    </SiteLayout>
  );
}