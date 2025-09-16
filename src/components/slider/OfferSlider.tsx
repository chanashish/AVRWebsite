"use client";
import { OfferSliderPropsTypes } from "@/@types/types";
import { FC } from "react";
import { SectionWithContainer } from "../sectionComponants";
import SwiperCarousel from "./SwiperCarousel";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

const OfferSlider: FC<OfferSliderPropsTypes> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col md:gap-14 gap-8">
        <h2 className="text-3xl font-semibold text-center text-clr">{title}</h2>
        <SwiperCarousel
          data={cards}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            nextEl: ".about-next",
            prevEl: ".about-prev",
          }}
          className="w-full we-offer-slider"
          swiperSlideClassName="swiper-slide"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0, // Keep flat
            stretch: 20, // Don't stretch
            depth: 300, // Controls scale & blur of side slides
            modifier: 2.5, // Makes the central slide more prominent
            slideShadows: false, // Disable shadows
          }}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          renderSlide={(card) => (
            <div className="w-full">
              <figure className="w-full aspect-[4/2.2] relative">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="100%"
                  quality={100}
                  //   priority
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </figure>
              <figcaption className="text-2xl text-center font-semibold text-clr mt-4">
                {card.alt}
              </figcaption>
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default OfferSlider;
