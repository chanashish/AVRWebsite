"use client";
// import WellnessSliderSection from "@/components/WellnessSlider";
// import dynamic from "next/dynamic";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import Addcard from "../../components/cards/Addcard";
import {
  AboutUsHome,
  OnlinePlatforms,
  OurCulinaryOfferings,
  RoomAndSuites,
  WhyChooseUs,
} from "./components";
import { homePageData } from "./homePageData";
import { Experiences, SectionWithContainer, TestimonialSection } from "@/components/sectionComponants";
import CheckInOutForm from "@/components/cards/CheckInOutForm";

export default function Home() {
  return (
    <main>
      <FullScreenCarousel {...homePageData.bannerData} />
      <SectionWithContainer sectionClassName="bg-clr lg:hidden">
        <CheckInOutForm />
      </SectionWithContainer>
      <AboutUsHome {...homePageData.aboutUsData} />
      <RoomAndSuites {...homePageData.roomsAndSuites} />
      <Experiences {...homePageData.experiences} />
      <WhyChooseUs {...homePageData.whyChooseUs} />
      <OurCulinaryOfferings {...homePageData.ourCulinaryOfferings} />
      <OnlinePlatforms {...homePageData.onlinePlatforms} />
      <TestimonialSection {...homePageData.testimonials} />
      <Addcard {...homePageData.addCardData} />
    </main>
  );
}
