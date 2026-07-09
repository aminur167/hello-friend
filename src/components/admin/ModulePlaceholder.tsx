import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import { PageHeader } from "./PageHeader";

export function ModulePlaceholder({
  title,
  description,
  icon: Icon,
  breadcrumb,
  features,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  breadcrumb: string;
  features: string[];
}) {
  return (
    <div>
      <PageHeader title={title} description={description} breadcrumb={breadcrumb} />
      <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-lg font-semibold text-foreground">Module ready for content</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Schema, permissions & UI shell are wired up. Connect this module to a Cloud table to enable full CRUD — the layout, filters and sidebar are already in place.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-2 rounded-lg border border-border bg-background p-3 text-sm text-foreground/80">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}