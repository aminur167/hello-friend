import { CalendarCheck } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";

export function BookVisitForm({ projectName, projectSlug }: { projectName: string; projectSlug?: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
          <CalendarCheck className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Book a Site Visit</h3>
          <p className="text-xs text-muted-foreground">
            Private walkthrough at {projectName}
          </p>
        </div>
      </div>
      <LeadForm variant="site_visit" defaultProject={{ slug: projectSlug, name: projectName }} />
    </div>
  );
}