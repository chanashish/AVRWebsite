"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";


interface SlideData {
    src: string;
    description: string;
}

interface FullSlideContentCarouselProps {
    data: SlideData[];
}

const FullSlideContentCarousel: React.FC<FullSlideContentCarouselProps> = ({ data }) => {
    SwiperCore.use([Autoplay]);
    return (
        <div className="w-full max-w-[1600px] mx-auto h-full lg:min-h-screen bg-[#F9F9F1] text-[#2F4B26] py-10 flex flex-col items-center justify-between">
            {/* Heading */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-center mb-14">
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
                            <div className="flex flex-col items-center justify-center text-center space-y-6 py-6">
                                <div className="relative w-full">
                                    <Image
                                        src={item.src}
                                        alt={`Slide ${index}`}
                                        width={1920}
                                        height={1080}
                                        layout="responsive"
                                        objectFit="cover"
                                        priority
                                    />
                                </div>

                                <p className=" relative text-base md:text-lg max-w-2xl">{item.description}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            {/* Know More */}
            <Link href={"/dining"} className="text-center mt-4 text-[#2F4B26] text-lg font-medium cursor-pointer hover:underline">
                Know More &gt;
            </Link>
        </div>
    );
};

export default FullSlideContentCarousel;
