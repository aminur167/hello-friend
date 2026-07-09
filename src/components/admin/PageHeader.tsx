import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  actions,
  breadcrumb,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumb?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {breadcrumb && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {breadcrumb}
          </div>
        )}
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}