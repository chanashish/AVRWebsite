import { SectionWithContainer } from "@/components";
import { imageUrl } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PackageType = {
  id: number;
  img: string;
  caption: string;
  title: string;
  desc: string;
};

const packages: PackageType[] = [
  {
    id: 1,
    img: imageUrl + "spiritual/wellness1.webp",
    caption: "Prakritik Shuddhikaran (3 Days)",
    title: "Natural Detox & Cleanse ",
    desc: "A focused 3-day cleanse to eliminate toxins & refresh your body with personalized therapies, yoga & diet.",
  },
  {
    id: 2,
    img: imageUrl + "spiritual/wellness2.webp",
    caption: "Aarogya Yatra (7 Days)",
    title: "Journey to Wellness ",
    desc: "A 7-day retreat combining yoga, meditation, and holistic treatments for stress relief and revitalization.",
  },
  {
    id: 3,
    img: imageUrl + "spiritual/wellness3.webp",
    caption: "Antarik Parivartan (10 Days)",
    title: "Inner Transformation",
    desc: "A 10-day immersive program with intensive therapies, consultations, and lifestyle guidance for deep healing.",
  },
];

const Card: React.FC<PackageType> = ({ img, caption, title, desc }) => {
  return (
    <div className="flex relative flex-col gap-2 border-2 rounded-md overflow-hidden text-left transition-transform hover:scale-105 bg-white">
       <div className="relative aspect-[4/3] w-full">
       <Image src={img} alt={caption} fill className="object-cover" />
      </div>
      <div className="p-4">
        <span className="text-[#2F4B26] font-normal text-[18px] roboto uppercase">
          {caption}
        </span>
        <h3 className="text-[24px] text-[#2F4B26] font-normal playfair">
          {title}
        </h3>
        <p className="text-[#686767] text-[20px] font-light roboto">{desc}</p>
      </div>
    </div>
  );
};

const WellnessPackages: React.FC = () => {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-[12px]">
        <h2 className="playfair font-normal text-[#2F4B26] lg:text-[40px] text-[32px]">
          Transformative Wellness Packages
        </h2>
        <p className="roboto font-light text-[#686767] text-[20px]">
          Explore our carefully curated wellness packages, each designed to
          cater to your unique needs and help you rediscover balance and
          vitality.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-12 mb-[40px]">
        {packages.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Link href={"/contact-us/"} className="text-center hover:underline mx-auto w-fit flex items-center cursor-pointer lato font-normal text-[18px]">
        Contact us {">"}
      </Link>
    </SectionWithContainer>
  );
};

export default WellnessPackages;
