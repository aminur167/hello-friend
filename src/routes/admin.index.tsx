import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Bell, Building2, CalendarCheck, TrendingUp, Users } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { fetchLeads } from "@/lib/leads";
import { projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: leads } = useQuery({ queryKey: ["leads"], queryFn: fetchLeads });
  const all = leads ?? [];
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const last7 = all.filter((l) => now - new Date(l.created_at).getTime() < 7 * day);
  const bookings = all.filter((l) => l.lead_type === "booking");
  const converted = all.filter((l) => l.status === "converted");
  const conversionRate = all.length ? Math.round((converted.length / all.length) * 100) : 0;

  const stats = [
    { label: "Total Leads", value: all.length, icon: Bell, delta: `${last7.length} this week`, tone: "bg-primary/10 text-primary" },
    { label: "Bookings", value: bookings.length, icon: CalendarCheck, delta: "Reservations pipeline", tone: "bg-brand-gold/15 text-brand-gold" },
    { label: "Active Projects", value: projects.length, icon: Building2, delta: "Residential & commercial", tone: "bg-primary/15 text-primary" },
    { label: "Conversion Rate", value: `${conversionRate}%`, icon: TrendingUp, delta: `${converted.length} converted`, tone: "bg-brand-green/15 text-brand-green" },
  ];

  const recent = all.slice(0, 6);

  const typeBreakdown = ["booking", "site_visit", "contact", "inquiry"].map((t) => ({
    type: t,
    count: all.filter((l) => l.lead_type === t).length,
  }));
  const maxCount = Math.max(1, ...typeBreakdown.map((t) => t.count));

  return (
    <div>
      <PageHeader
        breadcrumb="Overview"
        title="Welcome back"
        description="Snapshot of leads, bookings and portfolio performance."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-gold/40">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                <div className="mt-3 text-3xl font-semibold text-foreground">{s.value}</div>
              </div>
              <div className={cn("grid h-10 w-10 place-items-center rounded-xl", s.tone)}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">{s.delta}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Recent Leads</h2>
            <Link to="/admin/leads" className="inline-flex items-center gap-1 text-xs font-medium text-brand-gold hover:underline">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 divide-y divide-border">
            {recent.length === 0 ? (
              <div className="py-10 text-center text-sm text-muted-foreground">No leads yet.</div>
            ) : (
              recent.map((l) => (
                <div key={l.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {l.lead_type.replace("_", " ")}
                      </span>
                      <span className="truncate text-sm font-medium text-foreground">{l.full_name}</span>
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {l.phone}{l.project_name ? ` · ${l.project_name}` : ""}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(l.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Lead Sources</h2>
          <p className="mt-1 text-xs text-muted-foreground">Breakdown by form type</p>
          <div className="mt-6 space-y-4">
            {typeBreakdown.map((t) => (
              <div key={t.type}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium capitalize text-foreground">{t.type.replace("_", " ")}</span>
                  <span className="text-muted-foreground">{t.count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-brand-gold" style={{ width: `${(t.count / maxCount) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <QuickAction to="/admin/projects" icon={Building2} label="Manage Projects" hint={`${projects.length} live`} />
        <QuickAction to="/admin/leads" icon={Users} label="Lead Management" hint={`${all.length} total`} />
        <QuickAction to="/admin/settings" icon={CalendarCheck} label="Website Settings" hint="Brand & contact" />
      </div>
    </div>
  );
}

function QuickAction({ to, icon: Icon, label, hint }: { to: string; icon: typeof Building2; label: string; hint: string }) {
  return (
    <Link to={to} className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-gold">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gold/10 text-brand-gold">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium text-foreground">{label}</div>
          <div className="text-xs text-muted-foreground">{hint}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}