import BookingForm from "@/components/BookingForm";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import React from "react";
import GalleryImageComponent from "./GalleryImageComponent";
import { imageUrl } from "../../data/links";

export const metadata = {
  title: "Gallery - Anandvardhan Resorts",
  description:
    "Explore the serene beauty of Anand Vardhan Resorts through our gallery. Find our wellness resort in Manali, tranquil spa spaces, and meditation retreats in Himachal Pradesh. ",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel data={[imageUrl + "IMG_8174.webp"]} name="Gallery" />
      <RatingsDisplay />
      <div className="w-full text-center flex flex-col gap-[40px]">
        <h2 className="playfair text-[#2F4B26] text-[40px] font-normal">
          Explore Anand Vardhan Resort
        </h2>
        <GalleryImageComponent />
      </div>
      <div className="bg-[#F9F9F1] mt- mb-6">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
