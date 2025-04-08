"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const rooms = [
    {
        id: 1,
        images: [
            "/rooms/luxury/001.jpg",
            "/rooms/luxury/002.jpg",
            "/rooms/luxury/003.jpg",
        ],
        title: "Luxury Suite Room",
        description:
            "Our Luxury Suites offer an extraordinary experience, a private balcony with breathtaking views, perfect for those seeking a high-end, tranquil getaway.",
    },
    {
        id: 2,
        images: [
            "/rooms/deluxe/001.jpg",
            "/rooms/deluxe/002.jpg",
            "/rooms/deluxe/003.jpg",
        ],
        title: "Deluxe Room",
        description:
            "Experience ultimate comfort in our Executive Suite, featuring premium amenities and spectacular city views.",
    },
    {
        id: 3,
        images: [
            "/rooms/sdeluxe/001.jpg",
            "/rooms/sdeluxe/002.jpg",
            "/rooms/sdeluxe/003.jpg",
        ],
        title: "Super Deluxe Room",
        description:
            "The pinnacle of luxury, our Royal Penthouse offers unparalleled elegance and panoramic views of the surroundings.",
    },
];

const ArrowIcon: React.FC<{
    direction: "left" | "right";
    onClick: () => void;
}> = ({ direction, onClick }) => {
    const path =
        direction === "left"
            ? "M26.6666 35.1663L28.0833 33.7497L14.3333 19.9997L28.0833 6.24967L26.6666 4.83301L11.4999 19.9997L26.6666 35.1663Z"
            : "M13.3332 35.1663L11.9165 33.7497L25.6665 19.9997L11.9165 6.24967L13.3332 4.83301L28.4998 19.9997L13.3332 35.1663Z";

    return (
        <button
            onClick={onClick}
            aria-label={`${direction} arrow`}
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
            >
                <path d={path} fill="white" />
            </svg>
        </button>
    );
};

const RoomsAndSuitesCombined: React.FC = () => {
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lastInteraction, setLastInteraction] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            if (now - lastInteraction >= 3000) {
                setCurrentRoomIndex((prevIndex) =>
                    prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
                );
                setCurrentImageIndex(0);
                setLastInteraction(now);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [lastInteraction]);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentRoomIndex]);

    const handleNextImage = () => {
        const currentRoom = rooms[currentRoomIndex];
        setCurrentImageIndex((prevIndex) =>
            prevIndex === currentRoom.images.length - 1 ? 0 : prevIndex + 1
        );
        setLastInteraction(Date.now());
    };

    const handlePreviousImage = () => {
        const currentRoom = rooms[currentRoomIndex];
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? currentRoom.images.length - 1 : prevIndex - 1
        );
        setLastInteraction(Date.now());
    };

    const currentRoom = rooms[currentRoomIndex];

    return (
        <div className="bg-[#F9F9F1]">
            <div className="flex gap-4 items-center justify-center mb-8">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                    alt=""
                    className="w-[37px] h-[10px]"
                />
                <h2 className="text-[40px] font-bold text-[#2F4B26] max-md:text-[32px] playfair">
                    Rooms & Suites
                </h2>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
                    alt=""
                    className="w-[37px] h-[10px]"
                />
            </div>

            <main className="flex flex-col gap-14 items-center mx-auto my-0 w-full max-w-[1440px]">
                <div className="flex flex-col gap-8 items-center w-full">
                    <section className="relative w-full h-[824px] max-w-[1440px] max-sm:h-[400px]">
                        <img
                            src={currentRoom.images[currentImageIndex]}
                            alt={`${currentRoom.title} - Image ${currentImageIndex + 1}`}
                            className="object-cover size-full"
                        />
                        <div className="flex absolute top-2/4 justify-between items-center -translate-y-2/4 inset-x-[108px] max-md:inset-x-10 max-sm:inset-x-5">
                            <ArrowIcon direction="left" onClick={handlePreviousImage} />
                            <ArrowIcon direction="right" onClick={handleNextImage} />
                        </div>
                    </section>

                    <article className="flex gap-10 items-start px-5 py-0 max-md:flex-col max-md:items-center max-md:text-center">
                        <h2 className="text-[32px] playfair font-normal leading-10 text-[#2F4B26] max-sm:text-2xl max-sm:leading-8">
                            {currentRoom.title}
                        </h2>
                        <div className="flex flex-col gap-8 max-w-[908px] max-md:items-center">
                            <p className="text-xl font-light leading-7 text-[#686767] max-sm:text-base max-sm:leading-6">
                                {currentRoom.description}
                            </p>
                            <Link
                                className="flex gap-2 items-center cursor-pointer group"
                                aria-label="Learn more about the room"
                                href={"/rooms-suites/"}
                            >
                                <span className="text-lg leading-6 text-[#2F4B26] max-sm:text-base">
                                    Know More
                                </span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform group-hover:translate-x-1"
                                >
                                    <path
                                        d="M9.16319 19.2L8.5 18.5368L14.9368 12.1L8.5 5.66319L9.16319 5L16.2632 12.1L9.16319 19.2Z"
                                        fill="#363636"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default RoomsAndSuitesCombined;
