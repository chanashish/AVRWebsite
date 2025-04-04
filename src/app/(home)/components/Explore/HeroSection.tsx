"use client";

import { useState, useEffect, useCallback } from "react";
import HeaderContent from "./HeaderContent";
import HeroContent from "./HeroContent";
import { carouselData } from "./CarouselData";
import Link from "next/link";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1,
    );
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <>
      <Link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Playfair+Display&family=Lato:wght@500&display=swap"
        rel="stylesheet"
      />
      <main
        className="flex flex-col items-center w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <HeaderContent />
        <HeroContent
          data={carouselData[currentIndex]}
          currentIndex={currentIndex}
          totalSlides={carouselData.length}
        />
      </main>
    </>
  );
};

export default HeroSection;
