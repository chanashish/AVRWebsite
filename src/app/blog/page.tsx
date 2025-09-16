import { Addcard } from "@/components/cards";
import { blogPageData } from "./blogPageData";
import { BannerWithOnlyText } from "@/components/Banner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <BannerWithOnlyText {...blogPageData.bannerData} />
      <SectionWithContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
          {blogPageData.cards.map((card, index) => (
            <div
              key={index}
              className="w-full rounded-lg overflow-hidden box-shadow"
            >
              <div className="w-full relative md:aspect-[4/2.5] aspect-[3/2.2]">
                <Image
                  src={card.src}
                  alt={card.title}
                  className="w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-[24px] text-[#2F4B26] font-normal playfair">
                  {card.title}
                </h3>
                <span className="text-[14px] text-[#2F4B26] font-normal">
                  {card.date}
                </span>
                <p className="text-[16px] text-[#2F4B26] font-normal mt-2">
                  {card.description}{" "}
                  <Link href={card.link.href} className="text-[#FF7A00]">
                    {" "}
                    {card.link.label}
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWithContainer>
      <Addcard {...blogPageData.addCardData} />
    </main>
  );
}
