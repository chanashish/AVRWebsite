"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import FullscreenImagePopup1 from "../../components/FullscreenImagePopup1";
import { imageUrl } from "@/data/links";

// Sample image data with tags matching headings
const imageData = [
  {
    id: 8,
    src: imageUrl + "rooms/deluxe/001.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 9,
    src: imageUrl + "rooms/deluxe/002.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 10,
    src: imageUrl + "rooms/deluxe/003.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 11,
    src: imageUrl + "rooms/deluxe/004.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 12,
    src: imageUrl + "rooms/deluxe/005.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 13,
    src: imageUrl + "rooms/deluxe/006.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 14,
    src: imageUrl + "rooms/deluxe/007.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 15,
    src: imageUrl + "rooms/deluxe/008.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 16,
    src: imageUrl + "rooms/sdeluxe/001.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 17,
    src: imageUrl + "rooms/sdeluxe/002.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 18,
    src: imageUrl + "rooms/sdeluxe/003.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 19,
    src: imageUrl + "rooms/sdeluxe/004.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 20,
    src: imageUrl + "rooms/sdeluxe/005.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 21,
    src: imageUrl + "rooms/sdeluxe/006.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 22,
    src: imageUrl + "rooms/sdeluxe/007.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 23,
    src: imageUrl + "rooms/sdeluxe/008.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 24,
    src: imageUrl + "rooms/luxury/001.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 25,
    src: imageUrl + "rooms/luxury/002.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 26,
    src: imageUrl + "rooms/luxury/003.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 27,
    src: imageUrl + "rooms/luxury/004.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 28,
    src: imageUrl + "rooms/luxury/005.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 29,
    src: imageUrl + "rooms/luxury/006.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 30,
    src: imageUrl + "rooms/luxury/007.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 31,
    src: imageUrl + "rooms/luxury/008.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 32,
    src: imageUrl + "rooms/luxury/009.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 6,
    src: imageUrl + "reception/273A8341.webp",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  {
    id: 7,
    src: imageUrl + "reception/273A8357.webp",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  {
    id: 1,
    src: imageUrl + "restaurant/IMG_8203.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 2,
    src: imageUrl + "restaurant/IMG_8206.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 3,
    src: imageUrl + "restaurant/IMG_8224.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 4,
    src: imageUrl + "restaurant/273A8371.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 5,
    src: imageUrl + "restaurant/273A8372.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  // {
  //   id: 99,
  //   src: imageUrl + "exterior/IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "WELLNESS CENTER",
  // },
  {
    id: 99,
    src: imageUrl + "gallery/img1.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 98,
    src: imageUrl + "gallery/img2.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 97,
    src: imageUrl + "gallery/img3.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 96,
    src: imageUrl + "gallery/img4.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 95,
    src: imageUrl + "gallery/img5.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  // {
  //   id: 97,
  //   src: imageUrl + "exterior/IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "AMENITIES",
  // },
  // {
  //   id: 96,
  //   src: imageUrl + "exterior/IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "OUTDOOR",
  // },
  // {
  //   id: 33,
  //   src: imageUrl + "exterior/IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  // {
  //   id: 34,
  //   src: imageUrl + "exterior/IMG_8348.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  {
    id: 35,
    src: imageUrl + "exterior/IMG_8354.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 36,
    src: imageUrl + "exterior/IMG_8370.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 37,
    src: imageUrl + "exterior/IMG_8377.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 38,
    src: imageUrl + "exterior/IMG_8380.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 39,
    src: imageUrl + "exterior/IMG_8383.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 40,
    src: imageUrl + "gallery/img6.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 34,
    src: imageUrl + "gallery/img7.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  // {
  //   id: 40,
  //   src: imageUrl + "exterior/IMG_8333.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  {
    id: 41,
    src: imageUrl + "outdoor/IMG_8238.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 42,
    src: imageUrl + "outdoor/IMG_8241.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 43,
    src: imageUrl + "outdoor/IMG_8254.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 44,
    src: imageUrl + "outdoor/IMG_8255.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 45,
    src: imageUrl + "outdoor/IMG_8258.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 46,
    src: imageUrl + "outdoor/IMG_8262.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 47,
    src: imageUrl + "outdoor/IMG_8279.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 48,
    src: imageUrl + "outdoor/273A8459.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
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
