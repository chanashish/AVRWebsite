"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper";
import SliderSwip from "@/components/SliderSwip";
import { Section } from "@/components";
import { OutLineBtnNext, OutLineBtnPrev } from "@/icons/icons";
import { useImageViewer } from "@/contexts/ImageViewerContext"; // ✅ Import global image viewer
import Link from "next/link";

// Define types for better type safety
interface RoomData {
  title: string;
  description: string;
  images: string[];
  amenities: string[];
}

interface DeluxeRoomCardProps {
  roomData: RoomData;
}

const DeluxeRoomCard: React.FC<DeluxeRoomCardProps> = ({ roomData }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const { openImages } = useImageViewer(); // ✅ Use global full-screen viewer

  return (
    <div className="max-w-[1320px] mx-auto rounded-lg overflow-hidden flex flex-col md:items-center md:flex-row bg-[#FAF9F5] " style={{ border: "1px solid green" }}>
      <div className="md:w-[70%] relative">
        <SliderSwip
          data={roomData.images}
          slidesPerView={1}
          spaceBetween={0}
          classNameSwiper="w-full aspect-[4/3] lg:aspect-[4/2.2]"
          classNameSwiperSlide="w-full"
          modules={[Navigation]}
          navigation={{
            nextEl: `.room_next_${roomData.title.replace(/\s/g, "_")}`,
            prevEl: `.room_prev_${roomData.title.replace(/\s/g, "_")}`,
          }}
          onSlideChange={(swiper: Swiper) => setActiveImageIndex(swiper.activeIndex)}
        >
          {(item: string, index: number = activeImageIndex) => (
            <div
              key={index}
              className="relative h-full w-full cursor-pointer"
              onClick={() => openImages(roomData.images, index)} // ✅ Open all images
            >
              <Image src={item} alt="Room view" fill className="object-cover" />
            </div>
          )}
        </SliderSwip>

        {/* <button type="button" className={`room_prev_${roomData.title.replace(/\s/g, "_")} absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#4d6a3f] flex items-center justify-center z-10`}>
                    <OutLineBtnPrev />
                </button>
                <button type="button" className={`room_next_${roomData.title.replace(/\s/g, "_")} absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#4d6a3f] flex items-center justify-center z-10`}>
                    <OutLineBtnNext />
                </button> */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {roomData.images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 bg-[#fff] ${index === activeImageIndex ? "w-[30px]" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Room Details */}
      <div className="md:w-[30%] px-5 max-md:py-5 flex flex-col gap-6 background-[#F9F9F1]">
        <div className="flex gap-3 align-center">
          <h2 className="text-[#4d6a3f] text-[32px] font-regular font-family-head max-md:text-2xl">{roomData.title}</h2>
          <div className=" max-md:w-[30px]">
            <Image
              src="/decor-line.png"
              alt="decorative line"
              width={50}
              height={20}
            />
          </div>
        </div>
        <p className="text-gray-600 font-light text-[20px] max-md:text-[16px]">{roomData.description}</p>
        <div className="flex gap-3 flex-col max-md:mt-4">
          {roomData.amenities.map((e, index) => (
            <div key={index} className="flex gap-[8px] items-center">
              <Image alt="check" src={"/checkbox.png"} height={24} width={24}></Image> <span className="lato font-regular text-[#686767]">{e}</span>
            </div>
          ))}
        </div>
        <div className="">
          <Link href="#book-appointment" className="px-6 py-3 bg-[#2F4B26] text-white rounded-[60px] hover:bg-[#3d5431] transition-colors lato">
            Book your Stay with Us!
          </Link>
        </div>
      </div>
    </div>
  );
};



// Main component that renders the accommodations section
const AccommodationsSection: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const sliderRef = useRef<{ swiper: Swiper | null }>(null);

  // Room data
  const roomsData: RoomData[] = [
    {
      title: "Luxury Suite Rooms",
      description: "Our Luxury Suites offer an extraordinary experience, a private balcony with breathtaking views, perfect for those seeking a high-end, tranquil getaway.",
      images: [
        "/rooms/luxury/001.jpg",
        "/rooms/luxury/002.jpg",
        "/rooms/luxury/003.jpg",
        "/rooms/luxury/004.jpg",
        "/rooms/luxury/005.jpg",
        "/rooms/luxury/006.jpg",
        "/rooms/luxury/007.jpg",
        "/rooms/luxury/008.jpg",
        "/rooms/luxury/009.jpg",
        "/rooms/luxury/010.jpg",
        "/rooms/luxury/011.jpg",
        "/rooms/luxury/012.jpg"
      ],
      amenities: [
        "Hygiene Focused",
        "Comfortable & Spacious Beds",
        "Luxurious Sofa Set",
        "Free Wifi",
      ]
    },
    {
      title: "Deluxe Rooms",
      description: "Our Deluxe Rooms offer comfort and serenity, featuring modern amenities and scenic views of the Deodar forests, creating the perfect space to relax and recharge.",
      images: [
        "/rooms/deluxe/001.jpg",
        "/rooms/deluxe/002.jpg",
        "/rooms/deluxe/003.jpg",
        "/rooms/deluxe/004.jpg",
        "/rooms/deluxe/005.jpg",
        "/rooms/deluxe/006.jpg",
        "/rooms/deluxe/007.jpg",
        "/rooms/deluxe/008.jpg"
      ],
      amenities: [
        "Hygiene Focused",
        "Comfortable & Spacious Beds",
        "Luxurious Sofa Set",
        "Free Wifi",
      ]
    },
    {
      title: "Super Deluxe Rooms",
      description: "The Super Deluxe Rooms take comfort to the next level, featuring spacious interiors and premium furnishings. Indulge in a peaceful retreat with added luxury.",
      images: [
        "/rooms/sdeluxe/001.jpg",
        "/rooms/sdeluxe/002.jpg",
        "/rooms/sdeluxe/003.jpg",
        "/rooms/sdeluxe/004.jpg",
        "/rooms/sdeluxe/005.jpg",
        "/rooms/sdeluxe/006.jpg",
        "/rooms/sdeluxe/007.jpg",
        "/rooms/sdeluxe/008.jpg",
        "/rooms/sdeluxe/009.jpg",
        "/rooms/sdeluxe/010.jpg"
      ],
      amenities: [
        "Hygiene Focused",
        "Comfortable & Spacious Beds",
        "Luxurious Sofa Set",
        "Free Wifi",
      ]
    },
  ];

  // Handle dot navigation
  const handleDotClick = (index: number): void => {
    setActiveRoomIndex(index);
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideTo(index);
    }
  };

  return (
    <Section className="z-10 px-6 flex">
      <div className="w-full mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="w-full text-2xl leading-8 text-lime-900 uppercase max-sm:text-lg max-sm:leading-7 font-family-normr">ACCOMMODATION</h3>
          <h2 className="text-lime-900 font-[400px] text-4xl mt-[16px] font-serif">Rooms & Suites</h2>
        </div>

        {/* Room Slider */}
        <div className="w-full">
          <SliderSwip
            ref={sliderRef}
            data={roomsData}
            slidesPerView={1}
            spaceBetween={50}
            classNameSwiper="w-full"
            classNameSwiperSlide="w-full"
            modules={[Navigation]}
            navigation={{
              nextEl: ".space_next",
              prevEl: ".space_prev",
            }}
            onSlideChange={(swiper: Swiper) => setActiveRoomIndex(swiper.activeIndex)}
          >
            {/* Fix: Make this function match the expected type by using a single parameter */}
            {(item: RoomData) => <DeluxeRoomCard roomData={item} />}
          </SliderSwip>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="space_prev w-10 h-10 rounded-full bg-white text-[#4d6a3f] md:flex items-center justify-center z-10 shadow-md hidden mt-3"
            >
              <OutLineBtnPrev />
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {roomsData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${index === activeRoomIndex ? 'bg-[#4d6a3f]' : 'bg-[#4d6a3f]/30'}`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
            <button
              type="button"
              className="space_next w-10 h-10 rounded-full bg-white text-[#4d6a3f] md:flex items-center justify-center z-10 shadow-md hidden mt-3"
            >
              <OutLineBtnNext />
            </button>

          </div>
        </div>
      </div>
      <Image className="max-md:hidden ml-[-300px] mt-[-600px]" src={"/bgDesign.png"} height={412} width={500} alt="design" />
    </Section>
  );
};

export default AccommodationsSection;