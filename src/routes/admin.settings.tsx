import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="System"
        title="Website Settings"
        description="Brand, contact & site configuration."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Brand">
          <Field label="Company Name" value={siteConfig.name} />
          <Field label="Tagline" value={siteConfig.tagline} />
        </Card>
        <Card title="Contact">
          <Field label="Phone" value={siteConfig.contact.phone} />
          <Field label="WhatsApp" value={siteConfig.contact.whatsapp} />
          <Field label="Email" value={siteConfig.contact.email} />
          <Field label="Address" value={siteConfig.contact.address} />
        </Card>
        <Card title="Notifications">
          <Field label="Admin Email" value={siteConfig.admin.email} />
          <Field label="Admin WhatsApp" value={siteConfig.admin.whatsApp} />
        </Card>
        <Card title="System">
          <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <Settings className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              These values are sourced from <code>src/lib/site-config.ts</code>. Move to a <code>site_settings</code> table with RLS to make them editable from this screen.
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}