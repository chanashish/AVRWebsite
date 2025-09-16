"use client";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
import { NearByPlacesCard } from "../cards";
import { SectionWithContainer } from "../sectionComponants";
import SwiperCarousel from "../SwiperCarousel";
import { NearByPlacesSliderPropsTypes } from "@/@types/types";



const NearByPlacesSlider: FC<NearByPlacesSliderPropsTypes> = ({ cards }) => {
  return (
    <SectionWithContainer>
      <SwiperCarousel
        data={cards}
        className="w-full box-shadow !p-1"
        swiperSlideClassName="box-shadow"
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(card) => <NearByPlacesCard {...card} />}
      />
    </SectionWithContainer>
  );
};

export default NearByPlacesSlider;
