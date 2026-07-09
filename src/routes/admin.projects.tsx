import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Plus } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjectsPage,
});

const statusTone: Record<string, string> = {
  ongoing: "bg-brand-gold/15 text-brand-gold",
  completed: "bg-brand-green/15 text-brand-green",
  upcoming: "bg-primary/15 text-primary",
};

function AdminProjectsPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Content"
        title="Projects"
        description="Residential, commercial and mixed-use developments."
        actions={
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Plus className="h-4 w-4" /> New Project
          </button>
        }
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Project</th>
              <th className="px-4 py-3 text-left font-semibold">Location</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Units</th>
              <th className="px-4 py-3 text-left font-semibold">Progress</th>
              <th className="px-4 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {projects.map((p) => (
              <tr key={p.slug} className="hover:bg-muted/20">
                <td className="px-4 py-3">
                  <div className="font-medium text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.type}</div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider", statusTone[p.status] ?? "bg-muted text-muted-foreground")}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.units?.length ?? 0}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-brand-gold" style={{ width: `${p.progress ?? 0}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground">{p.progress ?? 0}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-xs font-medium text-brand-gold hover:underline">
                    View <ExternalLink className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Projects currently render from <code>src/lib/projects-data.ts</code>. Enable database-backed CRUD by migrating this list to a <code>projects</code> table with RLS.
      </p>
    </div>
  );
}