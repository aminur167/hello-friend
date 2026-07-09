import { useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";

export function BookVisitForm({ projectName }: { projectName: string }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
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

      {sent ? (
        <div className="mt-6 rounded-xl bg-brand-green/10 p-5 text-sm text-brand-green">
          Thank you — an advisor will confirm your visit within 2 hours.
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Full name
            </span>
            <input required type="text" className="filter-input" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Phone
            </span>
            <input required type="tel" className="filter-input" placeholder="+880" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Preferred date
            </span>
            <input type="date" className="filter-input" />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Reserve My Visit <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            No obligation. Free walkthrough with a senior advisor.
          </p>
        </form>
      )}
    </div>
  );
}