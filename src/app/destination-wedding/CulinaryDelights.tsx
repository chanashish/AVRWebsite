import { SectionWithContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";

const CulinaryDelights = () => {
    return (
        <SectionWithContainer>
            <div className=" flex flex-col md:flex-row items-center gap-10 relative z-10">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="/destination/culinary.png"
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
                            src="/destination/flowertop.png"
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
                        delicacies to exquisite plant-based dishes, our culinary delights are
                        designed to bring you a taste of mountain freshness, all while staying
                        true to the purity of vegetarian cuisine. Celebrate the bounty of
                        nature, crafted with locally sourced ingredients for your mountain
                        retreat wedding.
                    </p>
                    <Link
                        href="#"
                        className="text-[#363636] text-[18px] hover:underline lato transition flex items-center gap-2 font-normal"
                    >
                        Book Your Wedding Now &gt;
                    </Link>
                </div>
            </div>

            {/* Decorative Leaves for desktop only */}
            <img
                src="/destination/flowertop.png"
                alt="decor top"
                className="absolute top-0 right-0 hidden md:block w-28 lg:w-[186px] lg:h-[185px] z-0"
            />
            <img
                src="/destination/flowerbottom.png"
                alt="decor bottom"
                className="absolute bottom-0 right-0 w-20 max-md:w-[35px] max-md:h-[40px] lg:w-[93px] lg:h-[107px] z-0"
            />
        </SectionWithContainer>
    );
};

export default CulinaryDelights;
