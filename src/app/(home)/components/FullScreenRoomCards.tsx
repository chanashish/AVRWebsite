"use client";
import { Container, Section } from "@/components";
import FullscreenImagePopup1 from "@/components/FullscreenImagePopup1";
import SwiperCarousel from "@/components/SwiperCarousel";
import { imageUrl } from "@/data/links";
import { BtnNext, BtnPrev, TitleIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { EffectFade, Navigation } from "swiper/modules";

const rooms = [
  {
    id: 1,
    images: [
      imageUrl + "luxurySuite/002.webp",
      imageUrl + "luxurySuite/005.webp",
      imageUrl + "luxurySuite/003.webp",
    ],
    title: "Luxury Suite Room",
    description:
      "Our Luxury Suites offer an extraordinary experience, a private balcony with breathtaking views, perfect for those seeking a high-end, tranquil getaway.",
  },
  {
    id: 2,
    images: [
      imageUrl + "Deluxe/003.webp",
      imageUrl + "Deluxe/004.webp",
      imageUrl + "Deluxe/001.webp",
    ],
    title: "Deluxe Room",
    description:
      "Experience ultimate comfort in our Executive Suite, featuring premium amenities and spectacular city views.",
  },
  {
    id: 3,
    images: [
      imageUrl + "superDeluxe/003.webp",
      imageUrl + "superDeluxe/005.webp",
      imageUrl + "superDeluxe/001.webp",
    ],
    title: "Super Deluxe Room",
    description:
      "The pinnacle of luxury, our Royal Penthouse offers unparalleled elegance and panoramic views of the surroundings.",
  },
];

const RoomsAndSuitesCombined: React.FC = () => {
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState<string[]>([]); // array of image
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [roomName, setRoomName] = useState<string>("");

  return (
    <Section className="bg-[#F9F9F1]">
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center pb-10">
        <TitleIcon />
        <h2 className="text-[40px] font-bold text-[#2F4B26] max-md:text-[32px] playfair">
          Rooms & Suites
        </h2>
        <TitleIcon />
      </div>

      <div className="max-screen relative">
        <SwiperCarousel
          data={rooms}
          modules={[Navigation, EffectFade]}
          navigation={{
            nextEl: ".room-next",
            prevEl: ".room-prev",
          }}
          effect={"fade"}
          speed={1000}
          loop={true}
          className="w-full"
          spaceBetween={0}
          slidesPerView={1}
          renderSlide={(item, index) => (
            <div
              className="w-full flex flex-col gap-4 md:gap-8 relative"
              key={index}
            >
              {/* imageSlider */}
              <SwiperCarousel
                data={item.images}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".room-img-next",
                  prevEl: ".room-img-prev",
                }}
                loop={true}
                className="w-full"
                spaceBetween={0}
                slidesPerView={1}
                renderSlide={(src, index) => (
                  <div
                    className="w-full md:aspect-[4/1.8] aspect-[3/2.5] relative cursor-pointer"
                    key={index}
                  >
                    <Image
                      src={src}
                      alt={"room image"}
                      onClick={() => {
                        setOpenImgPopup(true);
                        setCurrentImage(item.images);
                        setCurrentIndex(index ? index : 0);
                        setRoomName(item.title);
                      }}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              />

              <button
                className="room-img-prev absolute md:top-1/3 top-1/4 lg:left-24 left-4 rounded-full md:size-12 size-10 flex items-center justify-center hover:bg-white text-white hover:text-primary z-50 "
                aria-label="previous"
              >
                <BtnPrev className="md:w-8 w-6 aspect-square " />
              </button>
              <button
                className="room-img-next absolute md:top-1/3 top-1/4 lg:right-24 right-4 rounded-full md:size-12 size-10 flex items-center justify-center hover:bg-white text-white hover:text-primary z-10"
                aria-label="next"
              >
                <BtnNext className="md:w-8 w-6 aspect-square " />
              </button>
              {/* imageSlider */}
              <Container className="bg-[#F9F9F1]">
                <div className="flex flex-col md:gap-4 gap-3 w-full md:aspect-[4/.5] aspect-[4/2.5]">
                  <h3 className="md:text-[2rem]/[2rem] text-xl text-[#2F4B26] playfair">
                    {item.title}
                  </h3>
                  <p className="md:text-xl text-base font-light text-[#686767] roboto max-w-6xl">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={"/rooms-suites"}
                      className="text-[#2F4B26] text-lg lato flex items-center gap-1 w-fit pe-2 py-1 hover:text-[#363636] transition-all duration-300"
                    >
                      Know More{" "}
                      <span className="">
                        <BtnNext className="w-4 aspect-square" />
                      </span>
                    </Link>
                    <div className="flex justify-between absolute md:right-20 right-0 z-10 ">
                      <button className="room-prev p-4 text-[#363636]">
                        <BtnPrev className="md:w-8 w-6 aspect-square" />
                        <span className="sr-only">Previous</span>
                      </button>
                      <button className="room-next p-4 text-[#363636]">
                        <BtnNext className="md:w-8 w-6 aspect-square" />
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          )}
        />
      </div>

      <FullscreenImagePopup1
        openImgPopup={openImgPopup}
        setOpenImgPopup={setOpenImgPopup}
        image={currentImage}
        currentIndex={currentIndex}
        roomName={roomName}
      />
    </Section>
  );
};

export default RoomsAndSuitesCombined;
