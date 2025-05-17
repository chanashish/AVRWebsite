import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import WellnessSliderSection from "@/components/WellnessSlider";
import React from "react";
import TestimonialSection from "../(home)/components/Testimonials/TestimonialSection";
import BookingForm from "@/components/BookingForm";
import { imageUrl } from "@/data/links";

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
      />
      <RatingsDisplay />
      <h2 className="playfair font-normal text-[#2F4B26] text-[40px] text-center mb-[120px]">
        “Your Personal Place Of Retreat”
      </h2>
      <div className="bg-[#F9F9F1]">
        <WellnessSliderSection
          href="/rooms-suites/"
          roomdescription="Step into our deluxe room where modern elegance meets comfort, with stylish interiors that make you feel instantly at ease. With ample area of 270sq ft.- every corner of this room is thoughtfully designed, blending classic charm and contemporary flair for a truly inviting atmosphere. The cozy, luxurious bed promises a restful night, while the warm colors and plush furnishings add a touch of sophistication. Relax in our spacious haven, where soft lighting and tasteful décor create a serene escape from the hustle and bustle of everyday life."
          subtitle="Deluxe Room"
          facility={[
            {
              id: 1,
              name: "Double Bed with Spring Mattress",
            },
            {
              id: 2,
              name: "Hot Running Water",
            },
            {
              id: 3,
              name: "Tea coffee Kitchenette",
            },

            {
              id: 4,
              name: "270sq ft. Area",
            },
            {
              id: 5,
              name: "Luggage Racks",
            },
            {
              id: 6,
              name: "Sofa Unit",
            },


          ]}
          services={[
            { imageUrl: imageUrl + "Deluxe/003.webp" },
            { imageUrl: imageUrl + "Deluxe/004.webp" },
            { imageUrl: imageUrl + "Deluxe/001.webp" },
            { imageUrl: imageUrl + "Deluxe/005.webp" },
            { imageUrl: imageUrl + "Deluxe/006.webp" },
            { imageUrl: imageUrl + "Deluxe/007.webp" },
            { imageUrl: imageUrl + "Deluxe/008.webp" },
          ]}
        />
        <WellnessSliderSection
          href="/rooms-suites/"
          roomdescription="This super deluxe room, spanning 350 sq. ft in size is a perfect luxury for all. Its your perfect retreat, featuring a spacious bed that promises ultimate comfort for a restful night’s sleep. Unwind on the luxurious sofa set, or take a break at the stylish work desk, designed to help you feel at ease whether you're relaxing or getting work done. The wardrobe offers plenty of space to keep your belongings organized, while high-speed internet keeps you connected throughout your stay. Step out onto your private balcony and be greeted by breathtaking views of the orchard, with outdoor furniture perfect for a peaceful moment in nature. "
          subtitle="Super Deluxe Room"
          facility={[
            {
              id: 1,
              name: "Double Bed with Spring Mattress",
            },
            {
              id: 6,
              name: "Shower Cubicle",
            },
            {
              id: 2,
              name: "Mountain View",
            },
            {
              id: 3,
              name: "Luggage Racks",
            },
            {
              id: 4,
              name: "Sofa Unit",
            },
            {
              id: 5,
              name: "350 sq. ft Area",
            },

          ]}
          services={[
            { imageUrl: imageUrl + "superDeluxe/003.webp" },
            { imageUrl: imageUrl + "superDeluxe/005.webp" },
            { imageUrl: imageUrl + "superDeluxe/001.webp" },
            { imageUrl: imageUrl + "superDeluxe/002.webp" },
            { imageUrl: imageUrl + "superDeluxe/004.webp" },
            { imageUrl: imageUrl + "superDeluxe/006.webp" },
            { imageUrl: imageUrl + "superDeluxe/007.webp" },
            { imageUrl: imageUrl + "superDeluxe/008.webp" },
            { imageUrl: imageUrl + "superDeluxe/009.webp" },
            { imageUrl: imageUrl + "superDeluxe/010.webp" },
          ]}
          reverseLayout={true}
        />
        <WellnessSliderSection
          href="/rooms-suites/"
          roomdescription="The luxury suite offers a spacious bedroom, where you can unwind in style and comfort, with plenty of room to stretch out and relax. With an area of 500 sq. ft, explore the serenity of mountains enveloped in luxury. Curl up in your own private reading nook, the perfect spot to escape with a good book and enjoy some quiet time. The cozy living area adds an extra layer of luxury, giving you a perfect space to relax, entertain, or simply enjoy the serene surroundings. Every detail of the suite is designed for ultimate relaxation, ensuring you feel pampered and at ease during your stay."
          subtitle="Luxury Suite Room"
          facility={[
            {
              id: 1,
              name: "Shower Cubicle",
            },
            {
              id: 2,
              name: "Snow-capped Mountain View",
            },
            {
              id: 3,
              name: "Hot & Cold Air Conditioner",
            },
            {
              id: 4,
              name: "Sofa Unit",
            },
            {
              id: 5,
              name: "42“ LED TV",
            },
            {
              id: 6,
              name: "500 sq. ft Area",
            },
          ]}
          services={[
            { imageUrl: imageUrl + "luxurySuite/005.webp" },
            { imageUrl: imageUrl + "luxurySuite/003.webp" },
            { imageUrl: imageUrl + "luxurySuite/002.webp" },
            { imageUrl: imageUrl + "luxurySuite/001.webp" },
            { imageUrl: imageUrl + "luxurySuite/007.webp" },
            { imageUrl: imageUrl + "luxurySuite/009.webp" },
            { imageUrl: imageUrl + "luxurySuite/008.webp" },
            { imageUrl: imageUrl + "luxurySuite/006.webp" },
            { imageUrl: imageUrl + "luxurySuite/004.webp" },
            { imageUrl: imageUrl + "luxurySuite/010.webp" },
            { imageUrl: imageUrl + "luxurySuite/011.webp" },
            { imageUrl: imageUrl + "luxurySuite/012.webp" },
          ]}
        />
      </div>
      <div className="pb-[120px] bg-[#F9F9F1]">
        <TestimonialSection />
      </div>
      <div className="bg-[#F9F9F1]">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
