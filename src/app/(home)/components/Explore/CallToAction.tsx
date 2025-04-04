"use client";

import Link from "next/link";
import DotsNavigation from "./DotsNavigation";

interface CallToActionProps {
  currentIndex: number;
  totalSlides: number;
}

const CallToAction: React.FC<CallToActionProps> = ({
  currentIndex,
  totalSlides,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center absolute bottom-5">
      <Link href="#book-appointment" className="px-6 py-3 text-lg font-medium leading-6 text-lime-900 bg-white cursor-pointer rounded-[60px] max-sm:text-base hover:bg-lime-50 transition-colors">
        Book Now
      </Link>
      <div className="flex gap-2 items-center">
        <DotsNavigation current={currentIndex} total={totalSlides} />
      </div>
    </div>
  );
};

export default CallToAction;
