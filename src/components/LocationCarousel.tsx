"use client";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface LocationData {
  image: string;
  title: string;
  description: string;
}

interface Props {
  locations: LocationData[];
}

const LocationCarousel: React.FC<Props> = ({ locations }) => {
  return (
    <section className="flex flex-col gap-14 items-center px-0 py-32 mx-auto max-w-none bg-[#F9F9F1] max-sm:py-16">
      <h1 className="text-4xl leading-10 text-center text-lime-900 max-md:text-3xl max-sm:text-3xl playfair">
        &quot;A sheer rejuvenation from monotonous life&quot;
      </h1>

      {/* Swiper carousel */}
      <div className="w-full max-w-[1400px] px-0 relative overflow-visible">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={locations.length > 3}
          centeredSlides={locations.length > 2}
          spaceBetween={30}
          slidesPerView={1.5}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: locations.length > 1 ? 1.5 : 1,
              centeredSlides: locations.length > 2,
              spaceBetween: 30,
            },
          }}
          className="!overflow-visible"
        >
          {locations.map((location) => (
            <SwiperSlide key={location.title}>
              <article className="flex flex-col gap-6 items-center w-full">
                <div className="w-full aspect-[3/2] relative bg-[#F9F9F1] rounded overflow-visible">
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />

                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                      alt=""
                      className="w-[37px] h-[10px]"
                    />
                    <h2 className="text-3xl leading-10 text-center text-lime-900">
                      {location.title}
                    </h2>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                      alt=""
                      className="w-[37px] h-[10px]"
                    />
                  </div>
                  <p className="text-xl font-light leading-8 text-center text-stone-500">
                    {location.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation controls */}
        <div className="flex gap-14 items-center justify-center mt-10 max-sm:gap-6">
          <button
            className="swiper-button-prev-custom cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6654 35.1668L28.082 33.7502L14.332 20.0002L28.082 6.25016L26.6654 4.8335L11.4987 20.0002L26.6654 35.1668Z"
                fill="#363636"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next-custom cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3346 35.1668L11.918 33.7502L25.668 20.0002L11.918 6.25016L13.3346 4.8335L28.5013 20.0002L13.3346 35.1668Z"
                fill="#363636"
              />
            </svg>
          </button>
        </div>
      </div>
    </section >
  );
};

export default LocationCarousel;
