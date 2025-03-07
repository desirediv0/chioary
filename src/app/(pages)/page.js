import AboutSection from "@/components/about-section";
import { Banner } from "@/components/banner";
import CharityPage from "@/components/charity-page";
import DonationForm from "@/components/donation-form";
import TeamSection from "@/components/ourteam";
import WorkingProcess from "@/components/process";
import { Service } from "@/components/service";
import Testimonials from "@/components/ui/cases-with-infinite-scroll";

export default function Home() {
  return (
    <>
          <Banner />
      <Service />
      <AboutSection />
    <CharityPage />
    <WorkingProcess />
    <TeamSection />
    <Testimonials />
    <DonationForm /></>
  );
}
