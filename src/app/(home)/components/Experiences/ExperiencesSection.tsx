"use client";
import * as React from "react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { SectionHeader } from "./SectionHeader";
import { ActivityCard } from "./ActivityCard";
import { NavigationDots } from "./NavigationDots";
import { NavigationButton } from "./navigationButton";
import { CTAButton } from "./CTAButton";
import { activities } from "./activityData";

export default function ExperiencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev' | ''>('');

  const CARDS_PER_PAGE = isMobile ? 1 : 3;

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset current index when switching between mobile and desktop
      setCurrentIndex(0);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { totalPages, currentCards } = useMemo(() => {
    const total = Math.ceil(activities.length / CARDS_PER_PAGE);
    const start = currentIndex * CARDS_PER_PAGE;
    const end = Math.min(start + CARDS_PER_PAGE, activities.length);
    return {
      totalPages: total,
      currentCards: activities.slice(start, end),
    };
  }, [currentIndex, CARDS_PER_PAGE]);

  const handleNavigation = useCallback(
    (newIndex: number | ((prev: number) => number), direction: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setAnimationDirection(direction); // Set animation direction

      if (typeof newIndex === "function") {
        setCurrentIndex((prev) => newIndex(prev));
      } else {
        setCurrentIndex(newIndex);
      }

      setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection('');
      }, 300);
    },
    [isAnimating],
  );


  const handleNext = useCallback(() => {
    handleNavigation((prev: number) => (prev + 1) % totalPages, 'next');
  }, [totalPages, handleNavigation]);

  const handlePrev = useCallback(() => {
    handleNavigation((prev: number) => (prev - 1 + totalPages) % totalPages, 'prev');
  }, [totalPages, handleNavigation]);


  const handleDotClick = useCallback(
    (index: number) => {
      if (index === currentIndex) return; // No action if clicking the current dot
      const direction = index > currentIndex ? 'next' : 'prev';
      handleNavigation(index, direction);
    },
    [handleNavigation, currentIndex],
  );
  

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAnimating) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (isAnimating || !touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="flex flex-col gap-8 justify-center items-center px-[108px] py-[104px] w-full bg-yellow-cards max-md:px-[16px] max-md:py-[32px]">
      <SectionHeader
        title="EXPERIENCES AT ANAND VARDHAN RESORT"
        subtitle="Immerse yourself in rejuvenating activities"
      />

      <div
        className="relative w-full max-w-[1300px]" // Increased from 1200px to 1400px
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex gap-8 justify-center items-stretch min-h-[500px] transition-transform duration-300 ease-in-out ${animationDirection === 'next' ? 'animate-slide-next' : animationDirection === 'prev' ? 'animate-slide-prev' : ''
            }`}
        >
          {currentCards.map((activity) => (
            <ActivityCard
              key={activity.id}
              imageUrl={activity.imageUrl}
              imageAlt={activity.imageAlt}
              title={activity.title}
              description={activity.description}
              className={currentCards.length < 3 ? "flex-1" : ""}
            />
          ))}
        </div>


        {!isMobile && (
          <>
            <NavigationButton
              direction="left"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <NavigationButton
              direction="right"
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            />
          </>
        )}
      </div>

      <NavigationDots
        total={isMobile ? activities.length : totalPages}
        current={isMobile ? currentIndex : Math.floor(currentIndex)}
        onClick={handleDotClick}
      />

      <div className="flex justify-center">
        <CTAButton
          label="Book your Stay Now!"
        />
      </div>
    </section>
  );
}
