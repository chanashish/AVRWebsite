'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface FullScreenCarouselProps {
    data: string[];
    name?: string;
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({ data, name }) => {
    const enableAutoplay = data.length > 1;

    return (
        <div className="relative max-w-[1600px] mx-auto aspect-auto lg:aspect-[5/2.5] max-lg:h-[23vh] bg-black">
            <Swiper
                className="w-full h-full"
                modules={[Autoplay]}
                autoplay={enableAutoplay ? { delay: 3000, disableOnInteraction: false } : false}
                loop={enableAutoplay}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        <div className="relative w-full h-full">
                            <Image
                                src={item}
                                alt={`Slide ${index}`}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                           {name && <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Centered Title */}
            {name && <div className="absolute inset-0 flex items-center justify-center z-20">
                <h1 className="playfair text-white text-[56px] max-md:text-[32px] font-semibold text-center px-4">
                    {name}
                </h1>
            </div>}
        </div>
    );
};

export default FullScreenCarousel;
