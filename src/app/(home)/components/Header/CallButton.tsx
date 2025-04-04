"use client";
import * as React from "react";
import { PhoneIcon } from "./PhoneIcon";

export const CallButton: React.FC = () => {
  const handleClick = React.useCallback(() => {
    // Handle phone call action
    window.location.href = "tel:+919317207373"; // Replace with actual phone number
  }, []);

  return (
    <button
      onClick={handleClick}
      className="flex gap-2 items-center px-6 py-3 bg-white duration-200 cursor-pointer rounded-[60px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-900 focus:ring-opacity-50 shadow-lg
                max-sm:p-3 max-sm:rounded-full max-sm:aspect-square max-sm:w-10 max-sm:h-10 max-sm:flex max-sm:items-center max-sm:justify-center
                max-lg:px-4 max-lg:py-2"
      aria-label="Call Now"
    >
      <PhoneIcon />
      <span className="text-lg font-medium leading-6 text-lime-900 max-lg:text-base max-sm:hidden">
        Call Now
      </span>
    </button>
  );
};
