"use client";
import { NearByPlacesSliderPropsTypes } from "@/@types/types";
import { FC } from "react";
import { NearByPlacesCard } from "../cards";
import { SectionWithContainer } from "../sectionComponants";

const NearByPlacesSlider: FC<NearByPlacesSliderPropsTypes> = ({ cards }) => {
  return (
    <SectionWithContainer>
      {/* <SwiperCarousel
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
      /> */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map((card, i) => (
          <NearByPlacesCard key={i} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default NearByPlacesSlider;
