"use client";

import * as React from "react";
import SwiperCarousel from "./SwiperCarousel";
import { Autoplay } from "swiper/modules";
import Container from "./SectionComponents/Container";
import { RatingCard } from "./cards";

const RatingsDisplay: React.FC = () => {
  const ratingData = [
    {
      rating: "4.8/5",
      platform: "Google",
    },
    {
      rating: "4.1/5",
      platform: "MakeMyTrip",
    },
    {
      rating: "4.9/5",
      platform: "Tripadvisor",
    },
    {
      rating: "4.8/5",
      platform: "Goibibo",
    },
  ];

  return (
    <section className="flex flex-col gap-[32px] items-center mx-auto md:my-[120px] my-8 w-full max-w-[994px]">
      <Container>
        <h2 className="text-2xl leading-8 text-center text-lime-900 playfair">
          Reviews and Ratings Across Platforms
        </h2>
      </Container>

      <div className="lg:grid grid-cols-4 hidden border shadow-inner border-solid border-[#9A9A9A] bg-[#F9F9F1] rounded-lg py-5 divide-x-2 divide-[#9A9A9A]">
        {ratingData.map((item, index) => (
          <RatingCard {...item} key={index} />
        ))}
      </div>
      <div className="lg:hidden w-full block max-width ">
        <SwiperCarousel
          data={ratingData}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="w-full border shadow-inner border-solid border-[#9A9A9A] bg-[#F9F9F1] rounded-lg "
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          swiperSlideClassName="py-5"
          renderSlide={(item, index) => (
            <div className="flex items-center justify-center">
              <div className=" w-px bg-[#9A9A9A] h-[3.6rem] -ms-1" />
              <RatingCard {...item} key={index} />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default RatingsDisplay;
