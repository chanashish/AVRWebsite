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
        <div className="w-screen max-h-screen">
            <Swiper className="w-full">
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="w-full flex items-center justify-center">
                        <div className="relative w-full h-auto max-h-[80vh]">
                            <Image 
                                src={item} 
                                alt={`Slide ${index}`} 
                                layout="responsive" 
                                width={1920} 
                                height={1080} 
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