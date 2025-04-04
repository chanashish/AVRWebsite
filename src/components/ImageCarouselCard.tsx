"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

interface SlideData {
    src: string;
    heading: string;
    description: string;
}

interface FullSlideContentCarouselProps {
    data: SlideData[];
}

const FullSlideContentCarousel: React.FC<FullSlideContentCarouselProps> = ({ data }) => {
    return (
        <div className="w-full h-full lg:min-h-screen bg-[#F9F9F1] text-[#2F4B26] px-4 py-8 flex flex-col items-center justify-between">
            {/* Heading */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-center">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                    alt=""
                    className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
                />
                <h2 className="text-3xl md:text-[40px] font-normal playfair">
                    Our Culinary Offerings
                </h2>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                    alt=""
                    className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
                />
            </div>

            {/* Carousel */}
            <div className="w-full flex-1 mb-6">
                <Swiper
                    className="w-full h-full"
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    loop
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4 py-6">
                            <div className="relative w-full h-[50vh] md:h-[70vh]">
                                <Image
                                    src={item.src}
                                    alt={`Slide ${index}`}
                                    layout="fill"
                                    objectFit="contain" // or 'contain'
                                    priority
                                />
                            </div>
                            <p className="text-base md:text-lg max-w-2xl">{item.description}</p>
                        </div>
                    </SwiperSlide>
                    
                    ))}
                </Swiper>
            </div>

            {/* Know More */}
            <div className="text-center mt-4 text-[#2F4B26] text-lg font-medium cursor-pointer hover:underline">
                Know More &gt;
            </div>
        </div>
    );
};

export default FullSlideContentCarousel;
