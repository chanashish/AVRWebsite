"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import FullscreenImagePopup1 from "../../components/FullscreenImagePopup1";
import { imageUrl } from "@/data/links";
import { Container } from "@/components";

// Sample image data with tags matching headings
const imageData = [
  {
    id: 8,
    src: imageUrl + "Deluxe/001.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 9,
    src: imageUrl + "Deluxe/002.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 10,
    src: imageUrl + "Deluxe/003.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 11,
    src: imageUrl + "Deluxe/004.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 12,
    src: imageUrl + "Deluxe/005.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 13,
    src: imageUrl + "Deluxe/006.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 14,
    src: imageUrl + "Deluxe/007.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 15,
    src: imageUrl + "Deluxe/008.webp",
    alt: "Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 16,
    src: imageUrl + "superDeluxe/001.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 17,
    src: imageUrl + "superDeluxe/002.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 18,
    src: imageUrl + "superDeluxe/003.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 19,
    src: imageUrl + "superDeluxe/004.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 20,
    src: imageUrl + "superDeluxe/005.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 21,
    src: imageUrl + "superDeluxe/006.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 22,
    src: imageUrl + "superDeluxe/007.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 23,
    src: imageUrl + "superDeluxe/008.webp",
    alt: "Super Deluxe room",
    tags: "ROOMS",
  },
  {
    id: 24,
    src: imageUrl + "luxurySuite/001.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 25,
    src: imageUrl + "luxurySuite/002.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 26,
    src: imageUrl + "luxurySuite/003.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 27,
    src: imageUrl + "luxurySuite/004.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 28,
    src: imageUrl + "luxurySuite/005.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 29,
    src: imageUrl + "luxurySuite/006.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 30,
    src: imageUrl + "luxurySuite/007.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 31,
    src: imageUrl + "luxurySuite/008.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 32,
    src: imageUrl + "luxurySuite/009.webp",
    alt: "Luxury room",
    tags: "ROOMS",
  },
  {
    id: 6,
    src: imageUrl + "273A8341.webp",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  {
    id: 7,
    src: imageUrl + "273A8357.webp",
    alt: "Reception lounge",
    tags: "RECEPTION",
  },
  {
    id: 1,
    src: imageUrl + "IMG_8203.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 2,
    src: imageUrl + "IMG_8206.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 3,
    src: imageUrl + "IMG_8224.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 4,
    src: imageUrl + "273A8371.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 5,
    src: imageUrl + "273A8372.webp",
    alt: "Restaurant bar",
    tags: "RESTAURANT",
  },
  {
    id: 110,
    src: imageUrl + "well1.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 111,
    src: imageUrl + "well2.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 112,
    src: imageUrl + "well3.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 113,
    src: imageUrl + "well4.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 114,
    src: imageUrl + "well5.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 115,
    src: imageUrl + "well6.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 116,
    src: imageUrl + "well7.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 117,
    src: imageUrl + "well8.webp",
    alt: "Wellness Center",
    tags: "WELLNESS CENTER",
  },
  {
    id: 99,
    src: imageUrl + "273A8474.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 98,
    src: imageUrl + "273A8504.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 97,
    src: imageUrl + "273A8535.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 96,
    src: imageUrl + "273A8493.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 95,
    src: imageUrl + "273A8501.webp",
    alt: "Activities",
    tags: "ACTIVITIES",
  },
  {
    id: 195,
    src: imageUrl + "img1.webp",
    alt: "Activities",
    tags: "OUTDOOR",
  },
  {
    id: 196,
    src: imageUrl + "img2.webp",
    alt: "Activities",
    tags: "OUTDOOR",
  },
  {
    id: 197,
    src: imageUrl + "img3.webp",
    alt: "Activities",
    tags: "OUTDOOR",
  },
  {
    id: 198,
    src: imageUrl + "img4.jpg",
    alt: "Activities",
    tags: "OUTDOOR",
  },
  // {
  //   id: 97,
  //   src: imageUrl + "IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "AMENITIES",
  // },
  // {
  //   id: 96,
  //   src: imageUrl + "IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "OUTDOOR",
  // },
  // {
  //   id: 33,
  //   src: imageUrl + "IMG_8344.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  // {
  //   id: 34,
  //   src: imageUrl + "IMG_8348.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  {
    id: 35,
    src: imageUrl + "IMG_8354.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 36,
    src: imageUrl + "IMG_8370.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 37,
    src: imageUrl + "IMG_8377.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 38,
    src: imageUrl + "IMG_8380.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 39,
    src: imageUrl + "IMG_8383.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 40,
    src: imageUrl + "DSC_9716.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  {
    id: 34,
    src: imageUrl + "DSC_9726.webp",
    alt: "Hotel exterior",
    tags: "EXTERIOR",
  },
  // {
  //   id: 40,
  //   src: imageUrl + "IMG_8333.webp",
  //   alt: "Hotel exterior",
  //   tags: "EXTERIOR",
  // },
  {
    id: 41,
    src: imageUrl + "IMG_8238.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 42,
    src: imageUrl + "IMG_8241.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 43,
    src: imageUrl + "IMG_8254.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 44,
    src: imageUrl + "IMG_8255.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 45,
    src: imageUrl + "IMG_8258.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 46,
    src: imageUrl + "IMG_8262.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 47,
    src: imageUrl + "IMG_8279.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
  {
    id: 48,
    src: imageUrl + "273A8459.webp",
    alt: "Garden area",
    tags: "OUTDOOR",
  },
];
const GalleryImageComponent = () => {
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
      <Container>
        <div className="grid lg:flex  md:grid-cols-4 grid-cols-2 gap-4 items-center w-full md:justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setCurrentCategory(category)}
              className={`${
                category === currentCategory
                  ? "bg-[#2F4B26] text-white"
                  : "bg-white text-[#2F4B26]"
              } px-4 py-2 rounded-sm border text-nowrap md:text-base text-sm border-[#2F4B26] hover:bg-[#2F4B26] hover:text-white transition-all duration-300 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>

      {/* Gallery */}
      <div className="mt-8">
        <Container>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:auto-rows-[150px] auto-rows-[280px] grid-flow-row gap-[.55rem]">
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
                      images: [
                        ...new Set(filteredData?.map((card) => card.src)),
                      ],
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
        </Container>
      </div>
    </div>
  );
};

export default GalleryImageComponent;
