import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CalendarDays, Loader2, LogOut, Mail, Phone, RefreshCw, Search, User } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { fetchLeads, updateLeadStatus } from "@/lib/leads";
import { leadStatuses, leadTypes, type LeadStatus, type LeadType } from "@/lib/leads-schema";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Admin Dashboard — North End Construction" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [ready, setReady] = useState(false);
  const [typeFilter, setTypeFilter] = useState<LeadType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/auth" });
      } else {
        setReady(true);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate({ to: "/auth" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const { data: leads, isLoading, refetch, error } = useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
    enabled: ready,
  });

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: LeadStatus }) => updateLeadStatus(id, status),
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: (e) => toast.error("Update failed", { description: e instanceof Error ? e.message : "" }),
  });

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  const filtered = (leads ?? []).filter((l) => {
    if (typeFilter !== "all" && l.lead_type !== typeFilter) return false;
    if (statusFilter !== "all" && l.status !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      if (
        !l.full_name.toLowerCase().includes(q) &&
        !l.phone.includes(q) &&
        !(l.email ?? "").toLowerCase().includes(q) &&
        !(l.project_name ?? "").toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });

  const counts = {
    total: leads?.length ?? 0,
    new: (leads ?? []).filter((l) => l.status === "new").length,
    contacted: (leads ?? []).filter((l) => l.status === "contacted").length,
    converted: (leads ?? []).filter((l) => l.status === "converted").length,
  };

  return (
    <SiteLayout>
      <section className="bg-secondary/40 py-16 pt-32 md:pt-40">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Admin</span>
              <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">Lead Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">All bookings, site-visit requests, contacts and inquiries.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => refetch()} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:border-brand-gold">
                <RefreshCw className="h-4 w-4" /> Refresh
              </button>
              <button onClick={signOut} className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:border-brand-gold">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Total leads" value={counts.total} />
            <StatCard label="New" value={counts.new} accent="brand-gold" />
            <StatCard label="Contacted" value={counts.contacted} accent="primary" />
            <StatCard label="Converted" value={counts.converted} accent="brand-green" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, phone, email or project…"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 pl-9 text-sm focus:border-brand-gold focus:outline-none"
              />
            </div>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as LeadType | "all")} className="rounded-md border border-border bg-background px-3 py-2.5 text-sm">
              <option value="all">All types</option>
              {leadTypes.map((t) => (
                <option key={t} value={t}>{t.replace("_", " ")}</option>
              ))}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "all")} className="rounded-md border border-border bg-background px-3 py-2.5 text-sm">
              <option value="all">All statuses</option>
              {leadStatuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20 text-muted-foreground"><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Loading leads…</div>
          ) : error ? (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
              Could not load leads. If your account isn't an admin, ask a super-admin to grant you access via the <code>user_roles</code> table.
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">
              No leads match your filters yet.
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((lead) => (
                <article key={lead.id} className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-gold/40">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <TypeBadge type={lead.lead_type} />
                        <StatusBadge status={lead.status} />
                        <span className="text-xs text-muted-foreground">
                          {new Date(lead.created_at).toLocaleString()}
                        </span>
                      </div>
                      <h3 className="mt-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {lead.full_name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                          <Phone className="h-3.5 w-3.5" /> {lead.phone}
                        </a>
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                            <Mail className="h-3.5 w-3.5" /> {lead.email}
                          </a>
                        )}
                        {lead.preferred_date && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" /> {lead.preferred_date}
                            {lead.preferred_time ? ` · ${lead.preferred_time}` : ""}
                          </span>
                        )}
                      </div>
                      {lead.project_name && (
                        <div className="mt-2 text-sm">
                          <span className="text-muted-foreground">Project:</span> <span className="font-medium">{lead.project_name}</span>
                          {lead.budget_range ? <span className="text-muted-foreground"> · Budget {lead.budget_range}</span> : null}
                        </div>
                      )}
                      {lead.message && (
                        <p className="mt-3 max-w-2xl rounded-lg bg-muted/60 p-3 text-sm text-foreground/85">{lead.message}</p>
                      )}
                    </div>
                    <select
                      value={lead.status}
                      onChange={(e) => mutation.mutate({ id: lead.id, status: e.target.value as LeadStatus })}
                      className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                    >
                      {leadStatuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={cn("mt-2 text-3xl font-semibold", accent ? `text-${accent}` : "text-foreground")}>{value}</div>
    </div>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
      {type.replace("_", " ")}
    </span>
  );
}

function StatusBadge({ status }: { status: LeadStatus }) {
  const map: Record<LeadStatus, string> = {
    new: "bg-brand-gold/15 text-brand-gold",
    contacted: "bg-primary/15 text-primary",
    qualified: "bg-blue-500/15 text-blue-600",
    converted: "bg-brand-green/15 text-brand-green",
    closed: "bg-muted text-muted-foreground",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider", map[status])}>
      {status}
    </span>
  );
}