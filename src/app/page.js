import { Banner } from "@/components/banner";
import DonationForm from "@/components/donation-form";
import TeamSection from "@/components/ourteam";
import WorkingProcess from "@/components/process";
import Testimonials from "@/components/ui/cases-with-infinite-scroll";


export default function Home() {
  return (
  <>
    <Banner />
    
 <TeamSection />
    <Testimonials/>
    <DonationForm/>
    <WorkingProcess/>
  </>
  );
}
