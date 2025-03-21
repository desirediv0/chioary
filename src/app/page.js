import AboutSection from "@/components/about-section";
import { Banner } from "@/components/banner";
import CharityPage from "@/components/charity-page";
import DonationForm from "@/components/donation-form";
import HumanitarianProject from "@/components/humanitarian-project";
import TeamSection from "@/components/ourteam";
import WorkingProcess from "@/components/process";
import { Service } from "@/components/service";
import Testimonials from "@/components/ui/cases-with-infinite-scroll";

export default function Home() {
  return (
    <>
          <Banner />
      <AboutSection />
      <Service />
    {/* <CharityPage /> */}
    <HumanitarianProject />
    <WorkingProcess />
    <DonationForm />
    <Testimonials />
    {/* <DonationForm /> */}
    </>
  );
}
