"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Props Interface
interface CardData {
  src: string;
  alt: string;
  name: string;
}

interface FacilitySliderProps {
  cardData: CardData[];
  title?: string;
}

SwiperCore.use([Navigation]);

const FacilitySlider: React.FC<FacilitySliderProps> = ({ cardData, title }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const renderCard = (card: CardData, index: number) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-6 p-6 border border-solid border-gray-200 rounded-lg shadow-sm bg-[#F9F9F1]
      transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="w-20 h-20">
        <img className="w-full h-full object-contain" src={card.src} alt={card.alt} />
      </div>
      <div className="text-lg font-medium text-center text-stone-600 uppercase tracking-wide">
        {card.name}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1224px] mx-auto px-4">
      {title && <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>}

      {/* Mobile Swiper */}
      <div className="block lg:hidden">
        <div className="flex justify-center items-center gap-6 mb-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300"
          >
            ‹
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300"
          >
            ›
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>{renderCard(card, index)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[40px]">
        {cardData.map(renderCard)}
      </div>
    </div>
  );
};

export default FacilitySlider;
