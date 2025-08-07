
import FaqsSection from "./components/FaqsSection";
import HeroSection from "./components/homeComponents/HeroSection";
import HowitWorks from "./components/homeComponents/HowitWorks";
import SmartFeatures from "./components/homeComponents/SmartFeatures";
import WorkFotosFeatures from "./components/homeComponents/WorkFotosFeatures";
import faqImage from "@/../public/faqImg.svg"
export default function Home() {
  return (
   <>
   <div className="flex-col gap-0 overflow-hidden">
   <HeroSection/>
   <HowitWorks/>
   <SmartFeatures/>
   <WorkFotosFeatures/>
   {/* <TestimonialSlider/> */}
   <FaqsSection imgSrc={faqImage}/>
   </div>
 

   </>
  );
}
