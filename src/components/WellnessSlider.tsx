"use client";
import React from "react";

export interface ServiceCardData {
    imageUrl: string;
    title: string;
    description: string;
}

interface WellnessSliderSectionProps {
    title?: string;
    subtitle: string;
    services: ServiceCardData[];
    reverseLayout?: boolean;
    showArrows?: boolean;
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
        <img
            src={imageUrl}
            alt={title}
            className="w-full h-[368px] max-lg:h-[300px] max-sm:h-[240px] rounded-[4px] object-cover"
        />
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
    services,
    reverseLayout = false,
    showArrows = true,
    showExplore = true,
}) => {
    const scrollContainer = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainer.current) {
            const scrollAmount = scrollContainer.current.clientWidth * 0.8;
            scrollContainer.current.scrollLeft +=
                direction === "left" ? -scrollAmount : scrollAmount;
        }
    };

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
        <section className="px-28 py-20 w-full max-md:px-12 max-md:py-24 max-sm:px-6 max-sm:py-16 bg-[#F9F9F1]">
            <header
                className={`flex justify-between items-center mb-14 max-sm:mb-8 ${reverseLayout ? "flex-row-reverse" : ""
                    }`}
            >
                <div className="flex flex-col gap-2">
                    {title && <h1 className="text-2xl leading-8 text-lime-900 uppercase max-md:text-xl max-sm:text-lg roboto">
                        {title}
                    </h1>}
                    <p className="text-4xl leading-10 text-lime-900 max-md:text-4xl max-sm:text-3xl playfair">
                        {subtitle}
                    </p>
                </div>
                {showArrows && <div className="max-sm:hidden">{<Navigation />}</div>}
            </header>

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
                        className="flex-none w-[calc(40%-12px)] max-md:w-[calc(50%-12px)] max-sm:w-full"
                        style={{ scrollSnapAlign: "start" }}
                    >
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
            <div className="sm:flex items-center hidden mt-7 justify-center">
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
            </div>
            <div className="flex justify-between items-center mt-7 max-sm:flex-row-reverse sm:hidden">
                {showArrows && <div className="hidden max-sm:flex">{<Navigation />}</div>}
                {showExplore && (
                    <div
                        className={`flex gap-2 items-center ${!reverseLayout ? "mr-auto" : ""
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
                )}
            </div>
        </section>
    );
};

export default WellnessSliderSection;
