import DescriptionShow from "@/components/DescriptionShow";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import React from "react";
import HomeHero from "../(home)/components/Header/HomeHero";
import WeOffer from "@/components/SliderWellness";
import FacilitySlider from "../about-us/Facilities";
import CulinaryDelights from "./CulinaryDelights";
import FAQ from "./FAQ";
import { SectionWithContainer } from "@/components";
import { imageUrl } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Destination Wedding in Manali  - Anand Vardhan Resorts",
  description:
    "Celebrate love with a magical destination wedding at Anand Vardhan Resorts. A perfect blend of tradition, nature, and unforgettable moments.",
};

const page = () => {
  const sampleCardData = [
    {
      src: imageUrl + "destination/service1.webp",
      alt: "Decor",
      name: "Decor",
    },
    {
      src: imageUrl + "destination/service2.webp",
      alt: "Hospitality",
      name: "Hospitality",
    },
    {
      src: imageUrl + "destination/service3.webp",
      alt: "Pure Veg Meals",
      name: "Pure Veg Meals",
    },
    {
      src: imageUrl + "destination/service4.webp",
      alt: "Entertainment",
      name: "Entertainment",
    },
    {
      src: imageUrl + "destination/service5.webp",
      alt: "Hygiene",
      name: "Hygiene",
    },
    {
      src: imageUrl + "destination/service6.webp",
      alt: "Safety",
      name: "Safety",
    },
    {
      src: imageUrl + "destination/service7.webp",
      alt: "Branding",
      name: "Branding",
    },
    {
      src: imageUrl + "destination/service8.webp",
      alt: "Photography",
      name: "Photography",
    },
  ];
  const weOfferData = [
    {
      src: imageUrl + "destination/offer1.webp",
      alt: "Pre-Wedding Events",
    },
    {
      src: imageUrl + "destination/offer2.webp",
      alt: "Haldhi Ceremony ",
    },
    {
      src: imageUrl + "destination/offer3.webp",
      alt: "Mehendi Ceremony ",
    },
    {
      src: imageUrl + "destination/offer4.webp",
      alt: "Engagement",
    },
    {
      src: imageUrl + "destination/offer5.webp",
      alt: "Reception",
    },
  ];
  return (
    <div>
      <FullScreenCarousel
        data={[imageUrl + "destination.webp"]}
        name="Destination Wedding"
      />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "“Your Perfect Wedding Destination in Manali,",
          secondLine: "Himachal Pradesh”",
        }}
        description={{
          // mainText:
          //   "Surrounded by towering trees, fresh mountain air, and the ones you love most, your destination wedding becomes an unforgettable celebration of love, peace, and adventure. Celebrate love with the nature’s most breathtaking canvas. A mountain retreat wedding is where your dreams come to life. Let the mountains whisper their blessings as you say ‘I do’.",
          // diningText:
          //   "At Anand Vardhan Resorts, the best resort for destination weddings in Manali, our team of benevolent, dedicated, and ever-smiling staff, combined with our multiple amenities, will help make your BIG DAY truly unforgettable.",
          phoneNumber: "+91 93172 07373",
        }}
        description2={[
          "At Anand Vardhan Resort, we offer comprehensive wedding services to make your celebration seamless:",

          "Pre-Wedding Events: Engagements, Mehendi, and Haldi ceremonies.",

          "Catering: Pure vegetarian meals crafted from locally sourced ingredients.",

          "Decor and Entertainment: Customized themes and live performances.",

          "Hospitality: Guest accommodations with modern amenities.",

          "Safety and Hygiene: Adherence to the highest standards for your peace of mind. anandvardhanresorts.com",

          "Our dedicated team collaborates with you to personalize every detail, ensuring your wedding reflects your unique love story. From the initial planning stages to the final farewell, we are committed to making your dream wedding a reality.",

          "Experience the magic of a destination wedding in Manali at Anand Vardhan Resort, where nature's beauty and heartfelt hospitality come together to create unforgettable memories.",


          "For those seeking a spiritual retreat in Manali, Anand Vardhan Resort stands as a beacon of tranquility and holistic healing. Join us to embark on a transformative journey that nurtures your soul and revitalizes your spirit.",

        ]}
      />
      <HomeHero />
      <div className="bg-[#F9F9F1] w-full text-center py-10 md:py-20">
        <div className="flex gap-6 items-center text-center justify-center">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            height={10}
            width={37}
            // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
          <h2 className="playfair font-normal text-[40px] text-[#2F4B26]">
            What We Offer
          </h2>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            height={10}
            width={37}
            // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
        </div>
        <WeOffer items={weOfferData} />
      </div>
      <SectionWithContainer>
        <div className="flex gap-6 items-center text-center justify-center mb-10 md:mb-20">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            height={10}
            width={37}
            // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
          <h2 className="playfair font-normal text-[40px] text-[#2F4B26]">
            Featured Wedding Services
          </h2>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            height={10}
            width={37}
            // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
        </div>
        <FacilitySlider cardData={sampleCardData} />
        <div className="w-full text-center mt-10 md:mt-20">
          <Link
            href={`https://wa.me/+919317207373?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`}
            target="blank"
            className="text-center hover:underline cursor-pointer lato font-normal text-[18px]"
          >
            Contact us {">"}
          </Link>
        </div>
      </SectionWithContainer>
      <CulinaryDelights />
      <FAQ />
    </div>
  );
};

export default page;
