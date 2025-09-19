"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import FullscreenImagePopup1 from "../../components/FullscreenImagePopup1";

// Sample image data with tags matching headings
interface ImageDataProps {
  imageData: { src: string; alt: string; tags: string; id: number }[];
}

const GalleryImageComponent: FC<ImageDataProps> = ({ imageData }) => {
  const gridPattern = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
  ];

  const order = ["luxury suite room", "super deluxe room", "deluxe room", "rooms & suites"];

  const sortedImages = [...imageData].sort((a, b) => {
    const aIndex = order.indexOf(a.alt.toLowerCase());
    const bIndex = order.indexOf(b.alt.toLowerCase());
    return aIndex - bIndex;
  });

  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(sortedImages.map((item) => item.tags.toLowerCase())),
  ];

  const filterData = useCallback(
    (category: string) => {
      if (category === "All") {
        return sortedImages;
      } else {
        return sortedImages.filter((item) =>
          item.tags.toLowerCase().includes(category)
        );
      }
    },
    [sortedImages]
  );

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
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-0 after:bg-clr2 after:z-[-1] after:mx-4 after:shadow-md">
      {/* Headings - Stack in pairs on mobile */}
      <div className="grid lg:flex  md:grid-cols-4 grid-cols-2 gap-4 items-center w-full md:justify-between">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCurrentCategory(category)}
            className={`${
              category === currentCategory
                ? "bg-[#2F4B26] text-white"
                : "bg-white text-[#2F4B26]"
            } px-4 py-3 md:py-1 uppercase rounded-full border text-nowrap md:text-base text-sm border-[#2F4B26] hover:bg-[#2F4B26] hover:text-white transition-all duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:auto-rows-[15rem] auto-rows-[280px] grid-flow-row gap-[.55rem]">
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
              {src.tags?.trim().toLowerCase() === "rooms & suites" && (
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-medium text-gray-900">
                  {src.alt}
                </div>
              )}
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
    </SectionWithContainer>
  );
};

export default GalleryImageComponent;
