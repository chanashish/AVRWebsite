"use client";
import { RoomsAndSuitesPropsTypes } from "@/@types/types";
import { FC } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { RoomAndSuitesCard } from "../cards";
import { Autoplay, Pagination } from "swiper/modules";


interface RoomAndSuitesSliderProps {
    cards: RoomsAndSuitesPropsTypes["cards"];
}
const RoomAndSuitesSlider: FC<RoomAndSuitesSliderProps> = ({cards}) => {
    return (
        <div>
            <SwiperCarousel data={cards} slidesPerView={1} spaceBetween={24}
            className="w-full box-shadow"
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
                clickable: true,
                el: ".pagination",
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    autoplay: false,
                },
                1024: {
                    slidesPerView: 3,
                    autoplay: false,
                },
            }}
            renderSlide={(card, index) => <RoomAndSuitesCard {...card} index={index ?? 0} />}
            
            />
        </div>
    );
}

export default RoomAndSuitesSlider;