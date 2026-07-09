import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { leadSchema, type LeadInput, type LeadType } from "@/lib/leads-schema";
import { submitLead, buildWhatsAppLink } from "@/lib/leads";
import { projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export type LeadFormVariant = "booking" | "site_visit" | "contact" | "inquiry";

type Field =
  | "email"
  | "project"
  | "date"
  | "time"
  | "visitors"
  | "budget"
  | "message";

const variantConfig: Record<
  LeadFormVariant,
  { fields: Field[]; submitLabel: string; successLine: string }
> = {
  booking: {
    fields: ["email", "project", "date", "budget", "message"],
    submitLabel: "Reserve Booking",
    successLine: "An advisor will confirm your booking within 2 business hours.",
  },
  site_visit: {
    fields: ["email", "project", "date", "time", "visitors", "message"],
    submitLabel: "Book Site Visit",
    successLine: "Your site visit is reserved. We'll call to confirm shortly.",
  },
  contact: {
    fields: ["email", "message"],
    submitLabel: "Send Message",
    successLine: "We received your message and will get back within one business day.",
  },
  inquiry: {
    fields: ["email", "project", "budget", "message"],
    submitLabel: "Send Inquiry",
    successLine: "Inquiry received. A sales advisor will contact you soon.",
  },
};

export function LeadForm({
  variant,
  defaultProject,
  darkSurface = false,
  className,
}: {
  variant: LeadFormVariant;
  defaultProject?: { slug?: string; name?: string };
  darkSurface?: boolean;
  className?: string;
}) {
  const cfg = variantConfig[variant];
  const leadType: LeadType = variant;
  const [done, setDone] = useState<{ waLink: string } | null>(null);

  const form = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      lead_type: leadType,
      full_name: "",
      phone: "",
      email: "",
      project_slug: defaultProject?.slug ?? "",
      project_name: defaultProject?.name ?? "",
      preferred_date: "",
      preferred_time: "",
      budget_range: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState, setValue, watch } = form;

  const onSubmit = handleSubmit(async (values) => {
    try {
      // sync project name when user picks a slug
      if (values.project_slug && !values.project_name) {
        const p = projects.find((x) => x.slug === values.project_slug);
        if (p) values.project_name = p.name;
      }
      await submitLead(values);
      const waLink = buildWhatsAppLink(values);
      setDone({ waLink });
      toast.success("Submitted", { description: cfg.successLine });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error("Could not submit", { description: msg });
    }
  });

  const inputClass = darkSurface
    ? "w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:border-brand-gold focus:outline-none"
    : "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:border-brand-gold focus:outline-none";
  const labelClass = darkSurface
    ? "text-xs font-medium uppercase tracking-wider text-white/70"
    : "text-xs font-medium uppercase tracking-wider text-muted-foreground";
  const errorClass = darkSurface ? "text-xs text-red-300" : "text-xs text-destructive";

  if (done) {
    return (
      <div className={cn("rounded-2xl border p-6 text-center", darkSurface ? "border-white/15 bg-white/5 text-white" : "border-brand-green/30 bg-brand-green/5 text-foreground", className)}>
        <CheckCircle2 className={cn("mx-auto h-12 w-12", darkSurface ? "text-brand-gold" : "text-brand-green")} />
        <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
        <p className={cn("mt-2 text-sm", darkSurface ? "text-white/75" : "text-muted-foreground")}>
          {cfg.successLine}
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={done.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setDone(null);
              form.reset({ ...form.getValues(), full_name: "", phone: "", message: "" });
            }}
            className={cn(
              "text-sm font-medium underline-offset-4 hover:underline",
              darkSurface ? "text-white/80" : "text-primary",
            )}
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  const showField = (f: Field) => cfg.fields.includes(f);

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "grid gap-4 rounded-2xl border p-6 md:p-8",
        darkSurface ? "border-white/15 bg-white/5 backdrop-blur-xl" : "border-border bg-card shadow-card-soft",
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Full name *</span>
          <input type="text" placeholder="Your name" {...register("full_name")} className={inputClass} />
          {formState.errors.full_name && <span className={errorClass}>{formState.errors.full_name.message}</span>}
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>Phone *</span>
          <input type="tel" placeholder="+8801XXXXXXXXX" {...register("phone")} className={inputClass} />
          {formState.errors.phone && <span className={errorClass}>{formState.errors.phone.message}</span>}
        </label>

        {showField("email") && (
          <label className={cn("flex flex-col gap-1.5", showField("project") ? "" : "sm:col-span-2")}>
            <span className={labelClass}>Email</span>
            <input type="email" placeholder="you@example.com" {...register("email")} className={inputClass} />
            {formState.errors.email && <span className={errorClass}>{formState.errors.email.message}</span>}
          </label>
        )}

        {showField("project") && (
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Interested project</span>
            <select
              value={watch("project_slug") ?? ""}
              onChange={(e) => {
                const slug = e.target.value;
                setValue("project_slug", slug);
                const p = projects.find((x) => x.slug === slug);
                setValue("project_name", p?.name ?? "");
              }}
              className={inputClass}
            >
              <option value="" className="text-foreground">Not sure yet</option>
              {projects.map((p) => (
                <option key={p.slug} value={p.slug} className="text-foreground">
                  {p.name}
                </option>
              ))}
            </select>
          </label>
        )}

        {showField("date") && (
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Preferred date</span>
            <input type="date" {...register("preferred_date")} className={inputClass} />
          </label>
        )}
        {showField("time") && (
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Preferred time</span>
            <select {...register("preferred_time")} className={inputClass}>
              <option value="" className="text-foreground">Any time</option>
              <option value="10:00-12:00" className="text-foreground">Morning (10–12)</option>
              <option value="12:00-15:00" className="text-foreground">Midday (12–3)</option>
              <option value="15:00-18:00" className="text-foreground">Afternoon (3–6)</option>
              <option value="18:00-20:00" className="text-foreground">Evening (6–8)</option>
            </select>
          </label>
        )}
        {showField("visitors") && (
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Visitors</span>
            <input type="number" min={1} max={20} placeholder="2" {...register("visitors_count")} className={inputClass} />
          </label>
        )}
        {showField("budget") && (
          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Budget range</span>
            <select {...register("budget_range")} className={inputClass}>
              <option value="" className="text-foreground">Select budget</option>
              <option value="Under 50 Lakh" className="text-foreground">Under 50 Lakh</option>
              <option value="50 Lakh - 1 Crore" className="text-foreground">50 Lakh – 1 Crore</option>
              <option value="1 - 2 Crore" className="text-foreground">1 – 2 Crore</option>
              <option value="2 - 5 Crore" className="text-foreground">2 – 5 Crore</option>
              <option value="5 Crore+" className="text-foreground">5 Crore+</option>
            </select>
          </label>
        )}

        {showField("message") && (
          <label className="flex flex-col gap-1.5 sm:col-span-2">
            <span className={labelClass}>Message</span>
            <textarea rows={4} placeholder="Tell us what you're looking for…" {...register("message")} className={inputClass} />
            {formState.errors.message && <span className={errorClass}>{formState.errors.message.message}</span>}
          </label>
        )}
      </div>

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {formState.isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {cfg.submitLabel}
      </button>
      <p className={cn("text-center text-[11px]", darkSurface ? "text-white/60" : "text-muted-foreground")}>
        By submitting you agree to be contacted by North End Construction.
      </p>
    </form>
  );
}