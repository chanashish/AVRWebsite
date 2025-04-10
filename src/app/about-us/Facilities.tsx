"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Container } from "@/components";
import Image from "next/image";

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


const FacilitySlider: React.FC<FacilitySliderProps> = ({ cardData, title }) => {
  SwiperCore.use([Navigation]);
  const swiperRef = useRef<SwiperCore | null>(null);

  const renderCard = (card: CardData, index: number) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-6 p-6 border border-solid border-gray-200 rounded-lg shadow-sm bg-[#F9F9F1]
      transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="w-20 h-20">
        <Image  height={80} width={80} src={card.src} alt={card.alt} />
      </div>
      <div className="text-lg font-medium text-center text-stone-600 uppercase tracking-wide">
        {card.name}
      </div>
    </div>
  );

  return (
    <Container className="">
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
      {/* Desktop Grid */}
      <div className="hidden lg:flex flex-col gap-[40px]">
        {/* Full Rows */}
        <div className="grid grid-cols-4 gap-[40px]">
          {cardData.slice(0, Math.floor(cardData.length / 4) * 4).map(renderCard)}
        </div>

        {/* Last Row - Centered and Proper Width */}
        {cardData.length % 4 !== 0 && (
          <div className="flex justify-center gap-[40px]">
            {cardData.slice(-1 * (cardData.length % 4)).map((card, index) => (
              <div key={index} className="w-[calc((100%-120px)/4)]">
                {/* 3 gaps of 40px = 120px, divide remaining by 4 */}
                {renderCard(card, index)}
              </div>
            ))}
          </div>
        )}
      </div>

    </Container>
  );
};

export default FacilitySlider;
