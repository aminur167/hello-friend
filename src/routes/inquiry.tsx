import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import heroCity from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/inquiry")({
  component: InquiryPage,
  head: () => ({
    meta: [
      { title: "General Inquiry — North End Construction" },
      { name: "description", content: "Send a general inquiry about apartments, investment plans or upcoming projects from North End Construction Ltd in Rangpur." },
      { property: "og:title", content: "General Inquiry — North End Construction" },
      { property: "og:url", content: "/inquiry" },
    ],
    links: [{ rel: "canonical", href: "/inquiry" }],
  }),
});

function InquiryPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="জিজ্ঞাসা"
        breadcrumb="জিজ্ঞাসা"
        title="আপনার প্রয়োজন আমাদের জানান — সমাধান আমরা এনে দেব"
        subtitle="অ্যাপার্টমেন্ট, প্লট, কমার্শিয়াল স্পেস অথবা বিনিয়োগের সুযোগ — যেকোনো প্রশ্ন লিখে পাঠান। আমাদের অ্যাডভাইজর আপনার প্রয়োজন অনুযায়ী উপযুক্ত অপশন নিয়ে ফিরে আসবেন।"
        image={heroCity}
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">How we help</h2>
            <ul className="mt-6 space-y-4 text-foreground/85">
              {[
                "Personalised project shortlist based on your budget",
                "Investment ROI & rental yield projections",
                "Guidance on legal papers, mutation & registration",
                "Bank loan pre-approval assistance",
                "Priority access to upcoming launches",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm variant="inquiry" />
        </div>
      </section>
    </SiteLayout>
  );
}