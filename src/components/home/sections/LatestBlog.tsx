import { ArrowUpRight, CalendarDays } from "lucide-react";
import { SectionHeader, ProjectVisual } from "./SectionHeader";

const posts = [
  { title: "How to choose the right apartment in Rangpur", date: "Jul 02, 2026", cat: "Buyer Guide", hue: 265 },
  { title: "5 reasons real estate outperforms savings in 2026", date: "Jun 18, 2026", cat: "Investment", hue: 82 },
  { title: "Behind the scenes: quality checks at North End sites", date: "Jun 04, 2026", cat: "Company", hue: 155 },
];

export function LatestBlog() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            kicker="Latest From The Blog"
            title="Insights, guides and stories"
            titleBn="আমাদের সর্বশেষ ব্লগ"
          />
          <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-gold">
            All articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <ProjectVisual hue={p.hue} className="aspect-[16/10]" label={p.cat} />
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" /> {p.date}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-brand-gold">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}