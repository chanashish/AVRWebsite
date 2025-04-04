"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface FullScreenCarouselProps {
    data: string[];
}

const FullScreenCarousel: React.FC<FullScreenCarouselProps> = ({ data }) => {
    return (
        <div className="w-screen h-screen bg-black">
            <Swiper className="w-full h-full">
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={item}
                                alt={`Slide ${index}`}
                                layout="fill"
                                objectFit="contain"
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
