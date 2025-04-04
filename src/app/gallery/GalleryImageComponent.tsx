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
        { id: 1, src: "/images/restaurant-1.jpg", alt: "Restaurant view", tags: ["RESTAURANT"] },
        { id: 2, src: "/images/restaurant-2.jpg", alt: "Restaurant tables", tags: ["RESTAURANT"] },
        { id: 3, src: "/images/restaurant-3.jpg", alt: "Restaurant bar", tags: ["RESTAURANT"] },
        { id: 4, src: "/images/reception-1.jpg", alt: "Reception desk", tags: ["RECEPTION"] },
        { id: 5, src: "/images/reception-2.jpg", alt: "Reception lounge", tags: ["RECEPTION"] },
        { id: 6, src: "/images/room-1.jpg", alt: "Deluxe room", tags: ["ROOMS"] },
        { id: 7, src: "/images/room-2.jpg", alt: "Suite room", tags: ["ROOMS"] },
        { id: 8, src: "/images/room-3.jpg", alt: "Standard room", tags: ["ROOMS"] },
        { id: 9, src: "/images/exterior-1.jpg", alt: "Hotel exterior", tags: ["EXTERIOR"] },
        { id: 10, src: "/images/exterior-2.jpg", alt: "Building view", tags: ["EXTERIOR"] },
        { id: 11, src: "/images/outdoor-1.jpg", alt: "Garden area", tags: ["OUTDOOR"] },
        { id: 12, src: "/images/outdoor-2.jpg", alt: "Swimming pool", tags: ["OUTDOOR"] },
        { id: 13, src: "/images/outdoor-3.jpg", alt: "Patio area", tags: ["OUTDOOR"] },
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