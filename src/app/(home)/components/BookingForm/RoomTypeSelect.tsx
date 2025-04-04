"use client";
import Image from "next/image";
import * as React from "react";

interface RoomTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const RoomTypeSelect: React.FC<RoomTypeSelectProps> = ({
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="relative flex items-center gap-4 px-4 py-3 bg-white rounded-lg border border-solid border-gray-300 w-full max-w-xs md:max-w-sm">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent outline-none appearance-none text-neutral-700"
        aria-label="Select Room Type"
      >
        <option value="" hidden defaultChecked>Select Room Type*</option>
        <option value="deluxe">Deluxe Room</option>
        <option value="super deluxe">Super Deluxe Room</option>
        <option value="luxury suite">Luxury Suite Room</option>
      </select>
      <Image
        src="/icons/dropdown.png" // Replace with a local icon for better performance
        alt="Dropdown Icon"
        width={24}
        height={24}
        className="pointer-events-none"
      />
    </div>
  );
};
