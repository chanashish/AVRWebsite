"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import FullscreenImagePopup1 from "../../components/FullscreenImagePopup1";

// Sample image data with tags matching headings
const imageData = [
  {
    id: 1,
    src: "/restaurant/IMG_8203.jpg",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 2,
    src: "/restaurant/IMG_8206.jpg",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 3,
    src: "/restaurant/IMG_8224.jpg",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 4,
    src: "/restaurant/273A8371.jpg",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 5,
    src: "/restaurant/273A8372.jpg",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 6,
    src: "/reception/273A8341.jpg",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  {
    id: 7,
    src: "/reception/273A8357.jpg",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  { id: 8, src: "/rooms/deluxe/001.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 9, src: "/rooms/deluxe/002.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 10, src: "/rooms/deluxe/003.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 11, src: "/rooms/deluxe/004.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 12, src: "/rooms/deluxe/005.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 13, src: "/rooms/deluxe/006.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 14, src: "/rooms/deluxe/007.jpg", alt: "Deluxe room", tags: "ROOMS" },
  { id: 15, src: "/rooms/deluxe/008.jpg", alt: "Deluxe room", tags: "ROOMS" },
  {
    id: 16,
    src: "/rooms/sdeluxe/001.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 17,
    src: "/rooms/sdeluxe/002.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 18,
    src: "/rooms/sdeluxe/003.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 19,
    src: "/rooms/sdeluxe/004.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 20,
    src: "/rooms/sdeluxe/005.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 21,
    src: "/rooms/sdeluxe/006.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 22,
    src: "/rooms/sdeluxe/007.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 23,
    src: "/rooms/sdeluxe/008.jpg",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  { id: 24, src: "/rooms/luxury/001.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 25, src: "/rooms/luxury/002.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 26, src: "/rooms/luxury/003.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 27, src: "/rooms/luxury/004.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 28, src: "/rooms/luxury/005.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 29, src: "/rooms/luxury/006.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 30, src: "/rooms/luxury/007.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 31, src: "/rooms/luxury/008.jpg", alt: "Luxury room", tags: "ROOMS" },
  { id: 32, src: "/rooms/luxury/009.jpg", alt: "Luxury room", tags: "ROOMS" },
  {
    id: 33,
    src: "/exterior/IMG_8344.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 34,
    src: "/exterior/IMG_8348.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 35,
    src: "/exterior/IMG_8354.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 36,
    src: "/exterior/IMG_8370.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 37,
    src: "/exterior/IMG_8377.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 38,
    src: "/exterior/IMG_8380.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 39,
    src: "/exterior/IMG_8383.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 40,
    src: "/exterior/IMG_8333.jpg",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  { id: 41, src: "/outdoor/IMG_8238.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 42, src: "/outdoor/IMG_8241.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 43, src: "/outdoor/IMG_8254.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 44, src: "/outdoor/IMG_8255.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 45, src: "/outdoor/IMG_8258.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 46, src: "/outdoor/IMG_8262.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 47, src: "/outdoor/IMG_8279.jpg", alt: "Garden area", tags: "OUTDOOR" },
  { id: 48, src: "/outdoor/273A8459.jpg", alt: "Garden area", tags: "OUTDOOR" },
];
const GalleryImageComponent = () => {
  // const [active, setActive] = useState("ALL");
  // const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  // const headings = ["ALL", "RESTAURANT", "RECEPTION", "ROOMS", "EXTERIOR", "OUTDOOR"];

  const gridPattern = [
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-3 lg:row-span-3",
    "lg:col-span-3 lg:row-span-3",
  ];

  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = ["All", ...new Set(imageData.map((item) => item.tags))];

  const filterData = useCallback((category: string) => {
    if (category === "All") {
      return imageData;
    } else {
      return imageData.filter((item) => item.tags.includes(category));
    }
  }, []);

  const filteredData = filterData(currentCategory);

  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState<string[]>([]); // array of image
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
  };

  return (
    <div className="text-center w-full lg:px-32 md:px-16 px-4">
      {/* Headings - Stack in pairs on mobile */}
      <div className="grid lg:flex  md:grid-cols-4 grid-cols-2 gap-4 items-center w-full md:justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCurrentCategory(category)}
            className={`${
              category === currentCategory
                ? "bg-[#2F4B26] text-white"
                : "bg-white text-[#2F4B26]"
            } px-4 py-2 rounded-sm border border-[#2F4B26] hover:bg-[#2F4B26] hover:text-white transition-all duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 auto-rows-[150px] grid-flow-row gap-[.55rem]">
          {filteredData.map((src, index) => (
            <div
              key={index}
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden hover:border-4 border-white hover:shadow-3xl shadow-2xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                onClick={() =>
                  handleOpen({
                    images: [...new Set(filteredData?.map((card) => card.src))],
                    index,
                  })
                }
                src={src.src}
                alt={src.alt}
                priority={true}
                // placeholder="blur"
                fill
                className={`w-full h-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear`}
              />
            </div>
          ))}

          <FullscreenImagePopup1
            openImgPopup={openImgPopup}
            setOpenImgPopup={setOpenImgPopup}
            image={currentImage}
            currentIndex={currentIndex}
          />
        </div>
        {filteredData.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No images found for this category
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryImageComponent;
