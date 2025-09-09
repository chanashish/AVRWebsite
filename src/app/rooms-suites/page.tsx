import { Addcard } from "@/components/cards";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  OnlinePlatforms,
  sectionContentData,
  TestimonialSection,
} from "@/components/sectionComponants";
import { imageUrl } from "@/data/links";
import { roomsPageData } from "./roomsPageData";
import RoomSection from "./components/RoomSection";

export const metadata = {
  title: "Rooms & Suites | AnandVardhan Resorts",
  description: "Rooms & Suites | AnandVardhan Resorts",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        data={[
          imageUrl + "Deluxe/003.webp",
          imageUrl + "superDeluxe/001.webp",
          imageUrl + "luxurySuite/001.webp",
        ]}
        name="Rooms & Suites"
        // {...roomsPageData.bannerData}
      />
      <OnlinePlatforms {...sectionContentData.onlinePlatforms} />
      <RoomSection {...roomsPageData.roomsData} />
      <TestimonialSection {...sectionContentData.testimonials} />
      <Addcard {...roomsPageData.addCardData} />
    </div>
  );
};

export default page;
