import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Your Apartment — North End Construction Ltd" },
      { name: "description", content: "Reserve your apartment at a North End Construction project. Speak to a sales advisor and lock in early-buyer pricing." },
      { property: "og:title", content: "Book Your Apartment — North End Construction" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

function BookingPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="বুকিং"
        breadcrumb="বুকিং"
        title="আপনার স্বপ্নের ফ্ল্যাট এখনই বুক করুন — নিশ্চিন্তে, নিরাপদে"
        subtitle="আর্লি-বায়ার প্রাইসিং ও পছন্দের ইউনিট লক করুন। কয়েকটি তথ্য দিন — আমাদের সেলস অ্যাডভাইজর ২ কার্যঘণ্টার মধ্যেই নিশ্চিত করবেন।"
        image={heroFamily}
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Why book direct with North End</h2>
            <ul className="mt-6 space-y-4 text-foreground/85">
              {[
                "Early-buyer pricing with locked-in payment plan",
                "First pick of unit, floor and orientation",
                "Flexible EMI & bank financing support",
                "Free legal & documentation assistance",
                "Dedicated relationship manager until handover",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm variant="booking" />
        </div>
      </section>
    </SiteLayout>
  );
}