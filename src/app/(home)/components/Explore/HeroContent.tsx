"use client";

import { CarouselItem } from "./CarouselData";
import CallToAction from "./CallToAction";
import Image from "next/image";

interface HeroContentProps {
  data: CarouselItem;
  currentIndex: number;
  totalSlides: number;
}

const HeroContent: React.FC<HeroContentProps> = ({
  data,
  currentIndex,
  totalSlides,
}) => {
  return (
    <section className="relative w-full h-screen max-sm:h-[500px]">
    <Image
      src={data.image}
      fill
      className="object-cover"
      alt={data.title}
    />
    <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full" />
    <div className="flex absolute inset-0 flex-col gap-52 items-center px-5 py-0 w-full justify-center max-w-[826px] mx-auto max-md:gap-40 max-sm:gap-32">
      <div className="flex flex-col gap-4 items-center w-full">
        <h2 className="text-2xl leading-8 text-center text-white font-[400] uppercase max-sm:text-lg max-sm:leading-7">
          {data.subtitle}
        </h2>
        <p className="text-xl font-light leading-7 text-center text-white max-md:px-5 max-md:text-lg max-sm:text-base max-sm:leading-6">
          {data.description}
        </p>
      </div>
      <CallToAction currentIndex={currentIndex} totalSlides={totalSlides} />
    </div>
  </section>
  
  );
};

export default HeroContent;
