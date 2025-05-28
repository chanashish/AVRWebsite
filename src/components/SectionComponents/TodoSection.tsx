"use client";
import { BtnNext, BtnPrev, TitleIcon } from "@/icons/icons";
import SwiperCarousel from "../SwiperCarousel";
import { Navigation } from "swiper/modules";
import ToDoSliderCard from "../cards/ToDoSliderCard";
import Section from "./Section";
import Link from "next/link";
import Container from "./Container";
import FullscreenImagePopup1 from "../FullscreenImagePopup1";
import { useState } from "react";

interface TodoSectionProps {
  title?: string;
  subTitle: string;
  href?: string;
  index: number;
  textEnd?: boolean;
  cardData: {
    src: string;
    title: string;
    description: string;
  }[];
}
const TodoSection: React.FC<TodoSectionProps> = ({
  title,
  subTitle,
  cardData,
  index,
  href,
  textEnd = false,
}) => {
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState<string[]>([]); // array of image
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [roomName, setRoomName] = useState<string>("");

  const handleOpen = ({
    images,
    index,
  }: {
    images: string[];
    index: number;
  }) => {
    setOpenImgPopup(true);
    setCurrentImage(images);
    setCurrentIndex(index);
    setRoomName(cardData[index].title);
  };

  return (
    <Section className="bg-[#F9F9F1]">
      <div
        className={`max-w-[1410px] w-full ${index % 2 === 0 ? "lg:ml-auto " : "lg:mr-auto "} max-md:px-4 `}
      >
        <div className="flex flex-col gap-4 w-full ">
          <div
            className={`flex items-center justify-between w-full max-w-7xl ${index % 2 !== 0 ? "md:flex-row-reverse justify-between mr-0 ml-auto" : "justify-between "} `}
          >
            <div className="flex flex-col gap-2">
              <h2 className="uppercase md:text-[1.375rem]/[2rem] max-md:text-[20px] text-2xl roboto text-[#2F4B26]">
                {title}{" "}
              </h2>
              <p className="md:text-[2.5rem]/[3rem] text-[2rem]/[2rem] leading-8 text-[#2F4B26] playfair">
                {index % 2 !== 0 && (
                  <span className="inline-block relative -top-1 mr-4">
                    <TitleIcon />
                  </span>
                )}
                {subTitle}
                {index % 2 === 0 && (
                  <span className="inline-block relative -top-1 ml-4">
                    <TitleIcon />
                  </span>
                )}
              </p>
            </div>
            {/* slider Buttons */}
            <div className="lg:flex hidden items-center gap-2">
              <button className={`todo-prev-${index} p-2`}>
                <BtnPrev className="w-7 aspect-square" />
                <span className="sr-only">Previous</span>
              </button>
              <button className={`todo-next-${index} p-2`}>
                <BtnNext className="w-7 aspect-square" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          {/* slider */}
          <div className="w-full">
            <SwiperCarousel
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
              }}
              dir={`${index === 1 && "rtl"}`}
              className="w-full"
              data={cardData}
              modules={[Navigation]}
              navigation={{
                nextEl: ".todo-next" + `-${index}`,
                prevEl: ".todo-prev" + `-${index}`,
              }}
              renderSlide={(item, index) => (
                <ToDoSliderCard
                  key={index}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  textEnd={textEnd}
                  handleClick={() => {
                    handleOpen({
                      images: cardData.map((item) => item.src),
                      index: typeof index === "number" ? index : 0,
                    });
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
      <Container>
        {/* slider Buttons */}
        <div className="flex justify-between items-center gap-4 w-full mt-6">
          <div className="lg:hidden flex items-center gap-2">
            <button className={`todo-prev-${index} py-2 pe-2`}>
              <BtnPrev className="w-7 aspect-square" />
              <span className="sr-only">Previous</span>
            </button>
            <button className={`todo-next-${index} p-2`}>
              <BtnNext className="w-7 aspect-square" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <Link
            href={href || "/"}
            className="text-[#363636] hover:underline underline-offset-4 lg:mx-auto w-fit text-lg lato flex items-center gap-2"
          >
            Explore <BtnNext className="w-4 aspect-square" />
          </Link>
        </div>
      </Container>
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

export default TodoSection;
