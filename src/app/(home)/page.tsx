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
import { Experiences, TestimonialSection } from "@/components/sectionComponants";

export default function Home() {
  return (
    <main>
      {/* <HomeHero display={true} /> */}
      <FullScreenCarousel data={["/Home.webp"]} name="" />
      {/* <div className="bg-[#F9F9F1] border border-solid border-1 border-t-black">
        <BookingForm />
        <p className="text-center text-xl text-[#2F4B26] py-8">
          Connect with us on <Link href="tel:+919267989157">+919267989157</Link>{" "}
          for Travel Agent, Corporate, and Group Booking rates
        </p>
      </div> */}

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
