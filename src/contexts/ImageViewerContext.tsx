"use client";
import { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";
import Image from "next/image";

// Define context types
interface ImageViewerContextType {
  openImages: (images: string[], startIndex: number) => void;
  closeImage: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

// Create Context
const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

// Custom Hook for using context
export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error("useImageViewer must be used within an ImageViewerProvider");
  }
  return context;
};

// Provider Component
export const ImageViewerProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openImages = (images: string[], startIndex: number) => {
    setImages(images);
    setCurrentIndex(startIndex);
  };

  const closeImage = () => setImages([]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (images.length === 0) return;
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle touch swipe gestures
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextImage(); // Swipe left to go to next image
    } else if (diff < -50) {
      prevImage(); // Swipe right to go to previous image
    }

    touchStartX.current = null;
  };

  return (
    <ImageViewerContext.Provider value={{ openImages, closeImage, nextImage, prevImage }}>
      {children}

      {/* Full-screen Image Viewer */}
      {images.length > 0 && (
        <div
          ref={viewerRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeImage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Click outside to close */}
          <div className="absolute inset-0" />

          {/* Image Viewer */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Previous Button */}
            <button
              className="absolute left-4 text-white text-2xl p-2"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ◀
            </button>

            {/* Image */}
            <Image src={images[currentIndex]} alt="Full screen view" fill className="object-contain" />

            {/* Next Button */}
            <button
              className="absolute right-4 text-white text-2xl p-2"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ▶
            </button>

            {/* Close Button */}
            <button
              className="absolute top-0 right-4 text-white text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </ImageViewerContext.Provider>
  );
};
