import BookingForm from "@/components/BookingForm";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import React from "react";
import GalleryImageComponent from "./GalleryImageComponent";

const page = () => {
  return (
    <div>
      <FullScreenCarousel data={["/carousel/gallery.png"]} />
      <RatingsDisplay />
      <div className="w-full text-center flex flex-col gap-[40px]">
        <h2 className="playfair text-[#2F4B26] text-[40px] font-normal">
          Explore Anand Vardhan Resort
        </h2>
        <GalleryImageComponent />
      </div>
      <div className="bg-[#F9F9F1] mt-5">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
