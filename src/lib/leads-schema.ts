import { z } from "zod";

export const leadTypes = ["booking", "site_visit", "contact", "inquiry"] as const;
export type LeadType = (typeof leadTypes)[number];

export const leadStatuses = ["new", "contacted", "qualified", "converted", "closed"] as const;
export type LeadStatus = (typeof leadStatuses)[number];

export const leadSchema = z.object({
  lead_type: z.enum(leadTypes),
  full_name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number")
    .max(32)
    .regex(/^[0-9+\-\s()]+$/i, "Only digits, +, - and spaces allowed"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  project_slug: z.string().max(120).optional().or(z.literal("").transform(() => undefined)),
  project_name: z.string().max(200).optional().or(z.literal("").transform(() => undefined)),
  preferred_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  preferred_time: z.string().max(30).optional().or(z.literal("").transform(() => undefined)),
  visitors_count: z.coerce.number().int().min(1).max(20).optional(),
  budget_range: z.string().max(60).optional().or(z.literal("").transform(() => undefined)),
  message: z.string().max(2000).optional().or(z.literal("").transform(() => undefined)),
  source: z.string().max(120).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;