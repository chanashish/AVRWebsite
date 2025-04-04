"use client";
import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputField } from "./InputField";
import { countries } from "@/data/countryCode";

interface PhoneInputProps {
  error?: string;
  register: UseFormRegisterReturn; // Changed from string | undefined to UseFormRegisterReturn
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode: string;
  onCountryChange: (code: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  error,
  register,
  value,
  onChange,
  countryCode,
  onCountryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-1 gap-2 items-center border-none pl-2 bg-white rounded ${error ? "border-red-500" : "border-neutral-200"
        } max-md:w-full`}
    >
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-1 h-[46px] text-base leading-6 text-neutral-700 cursor-pointer whitespace-nowrap"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{countryCode}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 top-full left-0 mt-1 w-48 max-h-60 overflow-y-auto bg-white border border-neutral-200 rounded shadow-lg">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                className="w-full px-4 py-2 text-left hover:bg-neutral-50 focus:bg-neutral-50"
                onClick={() => {
                  onCountryChange(country.code);
                  setIsOpen(false);
                }}
              >
                {country.name} ({country.code})
              </button>
            ))}
          </div>
        )}
      </div>
      <InputField
        type="tel"
        placeholder="Phone Number*"
        value={value}
        onChange={onChange}
        register={register}
        error={error}
        className="flex-1"
      />
    </div>
  );
};