import { HeroSlider } from "./sections/HeroSlider";
import { TrustStrip } from "./sections/TrustStrip";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { BuildingShowcase } from "./sections/BuildingShowcase";
import { AboutCompany } from "./sections/AboutCompany";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { OngoingProjects } from "./sections/OngoingProjects";
import { CompletedProjects } from "./sections/CompletedProjects";
import { ConstructionQuality } from "./sections/ConstructionQuality";
import { CustomerReviews } from "./sections/CustomerReviews";
import { Statistics } from "./sections/Statistics";
import { InvestmentBenefits } from "./sections/InvestmentBenefits";
import { CompanyVideo } from "./sections/CompanyVideo";
import { LatestBlog } from "./sections/LatestBlog";
import { BookingCTA } from "./sections/BookingCTA";
import { GoogleMap } from "./sections/GoogleMap";

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustStrip />
      <FeaturedProjects />
      <BuildingShowcase />
      <AboutCompany />
      <WhyChooseUs />
      <OngoingProjects />
      <CompletedProjects />
      <ConstructionQuality />
      <CustomerReviews />
      <Statistics />
      <InvestmentBenefits />
      <CompanyVideo />
      <LatestBlog />
      <BookingCTA />
      <GoogleMap />
    </>
  );
}