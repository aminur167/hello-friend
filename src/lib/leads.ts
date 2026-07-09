import { supabase } from "@/integrations/supabase/client";
import { leadSchema, type LeadInput, type LeadStatus } from "./leads-schema";
import { siteConfig } from "./site-config";

/** Submit a new lead. Uses anon insert policy — no auth required. */
export async function submitLead(input: LeadInput) {
  const parsed = leadSchema.parse(input);
  const { error } = await supabase.from("leads").insert({
    lead_type: parsed.lead_type,
    full_name: parsed.full_name,
    phone: parsed.phone,
    email: parsed.email ?? null,
    project_slug: parsed.project_slug ?? null,
    project_name: parsed.project_name ?? null,
    preferred_date: parsed.preferred_date ?? null,
    preferred_time: parsed.preferred_time ?? null,
    visitors_count: parsed.visitors_count ?? null,
    budget_range: parsed.budget_range ?? null,
    message: parsed.message ?? null,
    source: parsed.source ?? (typeof window !== "undefined" ? window.location.pathname : null),
  });
  if (error) throw new Error(error.message);
  return { ok: true as const };
}

/** Build a wa.me deep-link with a pre-filled message for the admin. */
export function buildWhatsAppLink(input: LeadInput): string {
  const lines = [
    `*New ${input.lead_type.replace("_", " ")} — ${siteConfig.name}*`,
    `Name: ${input.full_name}`,
    `Phone: ${input.phone}`,
    input.email ? `Email: ${input.email}` : null,
    input.project_name ? `Project: ${input.project_name}` : null,
    input.preferred_date ? `Date: ${input.preferred_date}` : null,
    input.preferred_time ? `Time: ${input.preferred_time}` : null,
    input.budget_range ? `Budget: ${input.budget_range}` : null,
    input.message ? `Message: ${input.message}` : null,
  ].filter(Boolean);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.admin.whatsApp}?text=${text}`;
}

/** Admin: list leads. Requires signed-in admin (RLS enforced). */
export async function fetchLeads() {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function updateLeadStatus(id: string, status: LeadStatus, admin_notes?: string) {
  const { error } = await supabase
    .from("leads")
    .update({ status, ...(admin_notes !== undefined ? { admin_notes } : {}) })
    .eq("id", id);
  if (error) throw new Error(error.message);
}