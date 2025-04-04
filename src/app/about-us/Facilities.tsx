"use client";
import React from "react";

interface CardData {
  src: string;
  alt: string;
  name: string;
}

const cardData: CardData[] = [
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/clip-path-group@2x.png",
    alt: "Parking space icon",
    name: "PARKING SPACE",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/mask-group@2x.png",
    alt: "Room service icon",
    name: "ROOM SERVICE",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/mask-group-1@2x.png",
    alt: "Free WiFi icon",
    name: "FREE WIFI",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/group@2x.png",
    alt: "Conference room icon",
    name: "CONFERENCE ROOM",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/clip-path-group-1@2x.png",
    alt: "Cafe icon",
    name: "CAFE",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/group-1@2x.png",
    alt: "Veg restaurant icon",
    name: "VEG RESTAURANT",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/group-4@2x.png",
    alt: "Mountain view icon",
    name: "MOUNTAIN VIEW",
  },
  {
    src: "https://c.animaapp.com/1lhTpN7Y/img/group-5@2x.png",
    alt: "24/7 Electricity icon",
    name: "24*7 ELECTRICITY",
  },
];

const Facilities = () => {
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
    <section className="w-full px-4 py-20 bg-[#F9F9F1]">
      <div className="flex flex-col gap-6 items-center text-center mb-12">
        <div className="text-2xl text-lime-900 uppercase font-semibold">
          OUR SERVICES
        </div>
        <div className="flex gap-4 items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[37px] h-[10px]"
          />
          <h2 className="text-4xl text-lime-900 font-bold max-md:text-3xl">
            Resort Facilities
          </h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[37px] h-[10px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[40px] max-w-[1224px] mx-auto">
        {cardData.map(renderCard)}
      </div>
    </section>
  );
};

export default Facilities;
