'use client'
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface FullScreenCarouselProps {
    data: string[];
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({ data }) => {
    const enableAutoplay = data.length > 1;
    return (
        <div className="max-w-[1600px] mx-auto aspect-auto lg:aspect-[5/2.5] max-lg:h-[23vh] bg-black">
            <Swiper
                className="w-full h-full"
                modules={[Autoplay]}
                autoplay={enableAutoplay ? { delay: 3000, disableOnInteraction: false } : false}
                loop={enableAutoplay}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={item}
                                alt={`Slide ${index}`}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FullScreenCarousel;
