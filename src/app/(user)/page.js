import AboutSection from "@/components/about-section";
import { Banner } from "@/components/hero";
import DonationForm from "@/components/donation-form";
import HumanitarianProject from "@/components/humanitarian-project";
import WorkingProcess from "@/components/process";
import { Service } from "@/components/service";
import Testimonials from "@/components/ui/cases-with-infinite-scroll";
import Events from "@/components/events";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Service limit={3} />
      <HumanitarianProject />
      <WorkingProcess />
      <Events  />
      <DonationForm />
      <Testimonials />
    </>
  );
}
