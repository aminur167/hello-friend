import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FormPageHero } from "@/components/forms/FormPageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import heroLobby from "@/assets/hero-lobby.jpg";

export const Route = createFileRoute("/site-visit")({
  component: SiteVisitPage,
  head: () => ({
    meta: [
      { title: "Book a Site Visit — North End Construction" },
      { name: "description", content: "Schedule a guided site visit to a North End Construction development in Rangpur. Walk through model apartments, floor plans and pricing with an advisor." },
      { property: "og:title", content: "Book a Site Visit — North End Construction" },
      { property: "og:url", content: "/site-visit" },
    ],
    links: [{ rel: "canonical", href: "/site-visit" }],
  }),
});

function SiteVisitPage() {
  return (
    <SiteLayout>
      <FormPageHero
        kicker="সাইট ভিজিট"
        breadcrumb="সাইট ভিজিট"
        title="আপনার ভবিষ্যৎ ঠিকানা ঘুরে দেখুন — এই সপ্তাহেই"
        subtitle="আমাদের সিনিয়র অ্যাডভাইজর আপনাকে দেখাবেন মডেল অ্যাপার্টমেন্ট, ফ্লোর প্ল্যান, নির্মাণ অগ্রগতি ও পেমেন্ট অপশন। সম্পূর্ণ বিনামূল্যে, কোনো বাধ্যবাধকতা ছাড়াই।"
        image={heroLobby}
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">What's included</h2>
            <ul className="mt-6 space-y-4 text-foreground/85">
              {[
                "Private walkthrough of sample apartment",
                "Live construction progress tour with the site engineer",
                "Floor plans, unit availability & payment options",
                "Neighbourhood tour: schools, hospitals, markets",
                "Complimentary refreshments on-site",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm variant="site_visit" />
        </div>
      </section>
    </SiteLayout>
  );
}