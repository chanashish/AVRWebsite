"use client"
import React, { useState, useEffect } from 'react';

const GalleryImageComponent = () => {
    const [active, setActive] = useState("ALL");
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const headings = ["ALL", "RESTAURANT", "RECEPTION", "ROOMS", "EXTERIOR", "OUTDOOR"];

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 768;

    // Sample image data with tags matching headings
    const imageData = [
        { id: 1, src: "/restaurant/IMG_8203.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 2, src: "/restaurant/IMG_8206.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 3, src: "/restaurant/IMG_8224.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 4, src: "/restaurant/273A8371.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 5, src: "/restaurant/273A8372.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 6, src: "/reception/273A8341.jpg", alt: "Reception lounge", tags: ["RECEPTION"] },
        { id: 7, src: "/reception/273A8357.jpg", alt: "Reception lounge", tags: ["RECEPTION"] },
        { id: 8, src: "/rooms/deluxe/001.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 9, src: "/rooms/deluxe/002.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 10, src: "/rooms/deluxe/003.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 11, src: "/rooms/deluxe/004.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 12, src: "/rooms/deluxe/005.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 13, src: "/rooms/deluxe/006.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 14, src: "/rooms/deluxe/007.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 15, src: "/rooms/deluxe/008.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 16, src: "/rooms/sdeluxe/001.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 17, src: "/rooms/sdeluxe/002.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 18, src: "/rooms/sdeluxe/003.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 19, src: "/rooms/sdeluxe/004.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 20, src: "/rooms/sdeluxe/005.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 21, src: "/rooms/sdeluxe/006.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id:22, src: "/rooms/sdeluxe/007.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 23, src: "/rooms/sdeluxe/008.jpg", alt: "Super Deluxe room", tags: ["ROOMS"] },
        { id: 24, src: "/rooms/luxury/001.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 25, src: "/rooms/luxury/002.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 26, src: "/rooms/luxury/003.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 27, src: "/rooms/luxury/004.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 28, src: "/rooms/luxury/005.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 29, src: "/rooms/luxury/006.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 30, src: "/rooms/luxury/007.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 31, src: "/rooms/luxury/008.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 32, src: "/rooms/luxury/009.jpg", alt: "Luxury room", tags: ["ROOMS"] },
        { id: 33, src: "/exterior/IMG_8344.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 34, src: "/exterior/IMG_8348.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 35, src: "/exterior/IMG_8354.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 36, src: "/exterior/IMG_8370.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 37, src: "/exterior/IMG_8377.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 38, src: "/exterior/IMG_8380.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 39, src: "/exterior/IMG_8383.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 40, src: "/exterior/IMG_8333.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 41, src: "/outdoor/IMG_8238.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 42, src: "/outdoor/IMG_8241.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 43, src: "/outdoor/IMG_8254.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 44, src: "/outdoor/IMG_8255.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 45, src: "/outdoor/IMG_8258.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 46, src: "/outdoor/IMG_8262.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 47, src: "/outdoor/IMG_8279.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 48, src: "/outdoor/273A8459.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
    ];

    // Filter images based on active category
    const filteredImages = active === "ALL"
        ? imageData
        : imageData.filter(img => img.tags.includes(active));

    // Function to chunk images into the 3,2,3,2 pattern (for desktop only)
    const chunkedImages = () => {
        // For mobile, return single image per row
        if (isMobile) {
            return filteredImages.map(image => [image]);
        }

        // For desktop, use 3,2,3,2 pattern
        const result = [];
        let temp: { id: number; src: string; alt: string; tags: string[]; }[] = [];
        let rowSize = 3; // Start with 3

        filteredImages.forEach((image) => {
            temp.push(image);

            // When current row is filled, push to result and reset
            if (temp.length === rowSize) {
                result.push(temp);
                temp = [];
                rowSize = rowSize === 3 ? 2 : 3; // Toggle between 3 and 2
            }
        });

        // Add any remaining images
        if (temp.length > 0) {
            result.push(temp);
        }

        return result;
    };

    // Create pairs of headings for mobile view
    const headingPairs = isMobile ?
        Array.from({ length: Math.ceil(headings.length / 2) }, (_, i) =>
            headings.slice(i * 2, i * 2 + 2)
        ) : [headings];

    return (
        <div className='text-center w-full lg:px-32'>
            {/* Headings - Stack in pairs on mobile */}
            <div className='flex flex-col gap-4 justify-center'>
                {headingPairs.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex justify-center gap-4 px-4'>
                        {row.map((item, index) => (
                            <h2
                                style={{
                                    border: "1px solid rgba(154, 154, 154, 1)",
                                    color: (item === active ? "#fff" : ""),
                                    background: (item === active ? "#2F4B26" : "")
                                }}
                                className='px-[16px] py-[8px] roboto font-normal text-[16px] md:text-[18px] cursor-pointer max-md:flex-1'
                                onClick={() => setActive(item)}
                                key={index}
                            >
                                {item}
                            </h2>
                        ))}
                    </div>
                ))}
            </div>

            {/* Gallery */}
            <div className="mt-8">
                {chunkedImages().map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-wrap justify-center gap-4 mb-4"
                    >
                        {row.map(image => (
                            <div
                                key={image.id}
                                className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                                style={{
                                    width: isMobile
                                        ? 'calc(100% - 16px)'
                                        : row.length === 3
                                            ? 'calc(33.333% - 16px)'
                                            : 'calc(50% - 16px)'
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover mb-8"
                                />
                            </div>
                        ))}
                    </div>
                ))}

                {filteredImages.length === 0 && (
                    <div className="py-20 text-center text-gray-500">
                        No images found for this category
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryImageComponent