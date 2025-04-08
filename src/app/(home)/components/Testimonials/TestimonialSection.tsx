"use client";
import * as React from "react";
import { TestimonialContent } from "./TestimonialContent";
import { NavigationArrow } from "./NavigationArrow";
import { NavigationDots } from "./NavigationDots";
import Image from "next/image";
import { Testimonial } from "./TestimonialTypes";

// Import testimonials data (ensure it's properly typed)
import { testimonials } from "./TestimonialData";

// Ensure testimonials is an array of Testimonial
const typedTestimonials: Testimonial[] = testimonials;

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? typedTestimonials.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === typedTestimonials.length - 1 ? 0 : prev + 1));
    resetAutoSlide();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === typedTestimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  React.useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);


  return (
    <section className="relative w-full px-5 pt-12 pb-4 max-md:py-24 max-sm:py-16 bg-[#F9F9F1]" style={{ backgroundImage: "url(/bgmap.png)", backgroundPosition: "center" }}>
      <div className="flex flex-col items-center mx-auto max-w-screen-lg gap-14">
        {/* Header */}
        <header className="flex flex-col items-center gap-4">
          {/* <h2 className="text-2xl text-lime-900 uppercase text-center">TESTIMONIALS</h2> */}
          <div className="flex items-center gap-4">
            <Image
              src="/decor-line.png"
              alt="decorative line"
              width={37}
              height={10}
            />
            <h3 className="text-5xl leading-[56px] text-center text-lime-900 max-md:text-4xl max-sm:text-3xl font-family-head">
              Appreciation From Our Guests
            </h3>
            <Image
              src="/decor-line.png"
              alt="decorative line"
              width={37}
              height={10}
            />
          </div>
        </header>

        {/* Content container with fixed-position arrows */}
        <div className="w-full relative px-14 max-sm:px-10">
          {/* Left arrow - fixed position */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <NavigationArrow direction="left" onClick={handlePrevious} />
          </div>

          {/* Testimonial content */}
          <div className="flex justify-center w-full">
            <TestimonialContent testimonial={typedTestimonials[currentIndex]} />
          </div>

          {/* Right arrow - fixed position */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <NavigationArrow direction="right" onClick={handleNext} />
          </div>
        </div>

        {/* Navigation Dots */}
        <NavigationDots
          total={typedTestimonials.length}
          active={currentIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}
