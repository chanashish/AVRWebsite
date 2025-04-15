"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "./SectionComponents/Container";
import Image from "next/image";
import FullscreenImagePopup1 from "./FullscreenImagePopup1";
import FullScreenCarousel from "./FullScreenCarousel";

export interface ServiceCardData {
    imageUrl: string;
    title?: string;
    description?: string;
}
export interface FacilityData {
    id: number;
    name: string;
}

interface WellnessSliderSectionProps {
    title?: string;
    description?: string,
    roomdescription?: string,
    href: string,
    facility?: FacilityData[],
    subtitle: string;
    services: ServiceCardData[];
    reverseLayout?: boolean;
    showArrows?: boolean;
    hideExplore?: boolean;
    showExplore?: boolean;
}

const NavigationArrow: React.FC<{
    direction: "left" | "right";
    className?: string;
}> = ({ direction, className = "" }) => {
    const path =
        direction === "left"
            ? "M26.6668 35.1663L28.0835 33.7497L14.3335 19.9997L28.0835 6.24967L26.6668 4.83301L11.5002 19.9997L26.6668 35.1663Z"
            : "M13.3332 35.1663L11.9165 33.7497L25.6665 19.9997L11.9165 6.24967L13.3332 4.83301L28.4998 19.9997L13.3332 35.1663Z";

    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[40px] h-[40px] ${className}`}
        >
            <path d={path} fill="#363636" />
        </svg>
    );
};

const ServiceCard: React.FC<ServiceCardData> = ({
    imageUrl,
    title,
    description,
}) => (
    <article className="flex flex-col gap-6 h-full">
        <div className="lg:aspect-[4/3] relative h-[300px] md:h-[488px] max-lg:aspect-[4/3] w-full ">
            <Image
                src={imageUrl}
                alt={"room Image"}
                fill
            // className="w-full h-[368px] max-lg:h-[300px] max-sm:h-[240px] rounded-[4px] object-cover"
            />
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl leading-8 text-neutral-700 max-md:text-2xl max-sm:text-xl">
                {title}
            </h2>
            <p className="text-xl font-light leading-7 text-stone-500 max-md:text-lg max-sm:text-base">
                {description}
            </p>
        </div>
    </article>
);

const WellnessSliderSection: React.FC<WellnessSliderSectionProps> = ({
    title,
    subtitle,
    description,
    roomdescription,
    hideExplore = false,
    facility,
    services,
    href,
    reverseLayout = false,
    showArrows = true,
    showExplore = true,
}) => {
    const scrollContainer = React.useRef<HTMLDivElement>(null);

    const [openImgPopup, setOpenImgPopup] = useState(false)
    const [currentImage, setCurrentImage] = useState<string[]>([]); // array of image
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainer.current) {
            const scrollAmount = scrollContainer.current.clientWidth * 0.8;
            scrollContainer.current.scrollLeft +=
                direction === "left" ? -scrollAmount : scrollAmount;
        }
    };


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

    console.log(services)

    const Navigation = () => (
        <div className="flex gap-4 items-center">
            <button onClick={() => scroll("left")} aria-label="Previous slide">
                <NavigationArrow direction="left" />
            </button>
            <button onClick={() => scroll("right")} aria-label="Next slide">
                <NavigationArrow direction="right" />
            </button>
        </div>
    );

    return (
        <section className="max-w-[1600px] mx-auto py-20 w-full max-md:px-12 max-md:py-24 max-sm:px-6 max-sm:py-16 bg-[#F9F9F1]">
            <Container className="!px-0">
                <header
                    className={`flex justify-between items-center mb-14 max-sm:mb-8 ${reverseLayout ? "flex-row-reverse" : ""
                        }`}
                >
                    <div className="flex flex-col gap-2">
                        {title && <h1 className="text-2xl leading-8 text-lime-900 uppercase max-md:text-xl max-sm:text-lg roboto">
                            {title}
                        </h1>}
                        {
                            <div className="flex gap-3 items-center">
                                {reverseLayout && <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                                    alt=""
                                    height={10}
                                    width={37}
                                // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
                                />}
                                <p className="text-4xl leading-10 text-lime-900 max-md:text-4xl max-sm:text-3xl playfair">
                                    {subtitle}
                                </p>
                                {!reverseLayout && <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                                    alt=""
                                    height={10}
                                    width={37}
                                // className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
                                />}
                            </div>}
                    </div>
                    {showArrows && <div className="max-sm:hidden">{<Navigation />}</div>}
                </header>
            </Container>

            <div className={`${reverseLayout ? "md:pr-32 " : "md:pl-32"}`}>

                <div
                    ref={scrollContainer}
                    className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
                    style={{
                        scrollSnapType: "x mandatory",
                        scrollBehavior: "smooth",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleOpen({
                                images: services.map((item) => item.imageUrl),
                                index,
                            })}
                            className="flex-none w-[calc(60%-12px)] max-md:w-[calc(50%-12px)] max-sm:w-full"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </div>

            {description && <Container> <p className="roboto font-light text-[20px] text-[#686767] ">{description}</p></Container>}

            {roomdescription && <Container className="max-md:!p-0 "><p className="roboto font-light text-[20px] text-[#686767]  ">{roomdescription}</p></Container>}
            {facility && (
                <Container>
                    <div className="flex max-lg:flex-wrap lg:overflow-auto place-content-between gap-4 sm:gap-6 max-lg:justify-center py-[16px] mt-8 facility-map-border">
                        {facility.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-2 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_623_3879)">
                                        <path d="M4.57969 23.6039C9.52641 24.1327 14.4731 24.1327 19.4198 23.6039C21.4359 23.37 23.3695 21.4364 23.6034 19.4203C24.1322 14.4736 24.1322 9.52687 23.6034 4.58016C23.3695 2.56406 21.4359 0.630938 19.4198 0.396563C14.4731 -0.132187 9.52641 -0.132187 4.57969 0.396563C2.56359 0.630938 0.630469 2.56406 0.396563 4.58016C-0.132187 9.52687 -0.132187 14.4736 0.396563 19.4203C0.630469 21.4364 2.56406 23.3695 4.58016 23.6039H4.57969ZM4.85766 10.1962C5.60906 9.52219 6.765 9.58453 7.43906 10.3364L10.1991 13.4128L16.5919 6.63375C17.2847 5.89922 18.4416 5.865 19.1761 6.55781C19.9106 7.25062 19.9444 8.4075 19.252 9.14203L11.4956 17.3672C11.1502 17.7337 10.6687 17.9409 10.1658 17.9409C10.1583 17.9409 10.1508 17.9409 10.1428 17.9409C9.63141 17.9344 9.14625 17.7145 8.80453 17.3339L4.7175 12.7781C4.04344 12.0267 4.10578 10.8708 4.85766 10.1967V10.1962Z" fill="#2F4B26" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_623_3879">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="text-[#686767] text-[18px] roboto uppercase font-normal whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            )}
            {roomdescription ? <Link href={`https://wa.me/+919317207373?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`} target="blank" className="sm:flex items-center hidden mt-7 justify-center cursor-pointer hover:underline">
                <span className="text-lg leading-6 text-neutral-700 ">Book Now</span>
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px]"
                >
                    <path
                        d="M9.66319 19.2L9 18.5368L15.4368 12.1L9 5.66319L9.66319 5L16.7632 12.1L9.66319 19.2Z"
                        fill="#363636"
                    />
                </svg>
            </Link> : hideExplore ? <></> : <Link href={href} className="sm:flex items-center hidden mt-7 justify-center cursor-pointer hover:underline">
                <span className="text-lg leading-6 text-neutral-700 ">Explore</span>
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px]"
                >
                    <path
                        d="M9.66319 19.2L9 18.5368L15.4368 12.1L9 5.66319L9.66319 5L16.7632 12.1L9.66319 19.2Z"
                        fill="#363636"
                    />
                </svg>
            </Link>}
            <div className="flex justify-between items-center mt-7 max-sm:flex-row-reverse sm:hidden">
                {showArrows && <div className="hidden max-sm:flex">{<Navigation />}</div>}
                {showExplore && (roomdescription ? (
                    <Link href={`https://wa.me/+919317207373?text=Hello%2C+I+would+like+to+inquire+about+room+availability+and+rates.`} target="blank"
                        className={`flex gap-2 items-center cursor-pointer hover:underline ${!reverseLayout ? "mr-auto" : ""
                            }`}
                    >
                        <span className="text-lg leading-6 text-neutral-700">Book Now</span>
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[24px] h-[24px]"
                        >
                            <path
                                d="M9.66319 19.2L9 18.5368L15.4368 12.1L9 5.66319L9.66319 5L16.7632 12.1L9.66319 19.2Z"
                                fill="#363636"
                            />
                        </svg>
                    </Link>
                ) : hideExplore ? <></> : (
                    <div
                        className={`flex gap-2 items-center cursor-pointer hover:underline ${!reverseLayout ? "mr-auto" : ""
                            }`}
                    >
                        <span className="text-lg leading-6 text-neutral-700">Explore</span>
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[24px] h-[24px]"
                        >
                            <path
                                d="M9.66319 19.2L9 18.5368L15.4368 12.1L9 5.66319L9.66319 5L16.7632 12.1L9.66319 19.2Z"
                                fill="#363636"
                            />
                        </svg>
                    </div>
                ))}
            </div>

            <FullscreenImagePopup1
                openImgPopup={openImgPopup}
                setOpenImgPopup={setOpenImgPopup}
                image={currentImage}
                currentIndex={currentIndex}
            />
        </section>
    );
};

export default WellnessSliderSection;
