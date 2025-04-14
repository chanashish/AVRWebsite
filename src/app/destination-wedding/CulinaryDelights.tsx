import { SectionWithContainer } from "@/components";
import { imageUrl } from "@/data/links";
import Image from "next/image";
import Link from "next/link";

const CulinaryDelights = () => {
  return (
    <div className="relative">
      <SectionWithContainer>
        <div className=" flex flex-col md:flex-row items-center gap-10 relative z-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={imageUrl + "destination/culinary.webp"}
              alt="Culinary Delights"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 relative">
            {/* Mobile Top Decor inside Heading */}
            <div className="flex items-start gap-2 mb-2 md:hidden">
              <h2 className="text-[32px] font-normal text-[#2F4B26] playfair">
                Culinary Delights
              </h2>
              <Image
                src={imageUrl + "destination/flowertop.webp"}
                alt="decor"
                width={40}
                height={40}
                className="w-[40px] h-[40px] absolute right-0"
              />
            </div>

            {/* Desktop Heading */}
            <h2 className="hidden md:block text-[40px] font-normal text-[#2F4B26] playfair mb-6">
              Culinary Delights
            </h2>

            <p className="text-[#686767] roboto leading-relaxed mb-6">
              Celebrate love with a culinary journey that delights the senses,
              featuring innovative vegetarian creations inspired by the natural
              beauty and serenity of your mountain destination. From farm-to-table
              delicacies to exquisite plant-based dishes, our culinary delights
              are designed to bring you a taste of mountain freshness, all while
              staying true to the purity of vegetarian cuisine. Celebrate the
              bounty of nature, crafted with locally sourced ingredients for your
              mountain retreat wedding.
            </p>
            <Image
              src={imageUrl + "destination/flowerbottom.webp"}
              alt="decor"
              width={40}
              height={40}
              className="w-[40px] h-[40px] absolute right-0 md:hidden"
            />
            <Link href={`https://wa.me/+919317207373?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`} target="blank"
              className="text-[#363636] text-[18px] hover:underline lato transition flex items-center gap-2 font-normal"
            >
              Book Your Wedding Now &gt;
            </Link>
          </div>
        </div>

        {/* Decorative Leaves for desktop only */}
      </SectionWithContainer>
      <Image
        src={imageUrl + "destination/flowertop.webp"}
        alt="decor top"
        height={185}
        width={186}
        className="absolute top-0 right-0 hidden md:block z-0"
      />
      <Image
        src={imageUrl + "destination/flowerbottom.webp"}
        alt="decor bottom"
        height={107}
        width={93}
        className="absolute bottom-0 right-0 hidden md:block z-0"
      />
    </div>
  );
};

export default CulinaryDelights;
