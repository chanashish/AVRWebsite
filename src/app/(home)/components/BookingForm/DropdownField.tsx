"use client";
import React, { useRef } from "react";
import { DropdownFieldProps } from "./BookingFormTypes";

export const DropdownField: React.FC<DropdownFieldProps> = ({
  placeholder,
  error,
  register,
  value,
  onChange,
  options,
}) => {
  // Create a ref to work with the select element
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // Extract the needed properties from register
  const { ref: registerRef, ...registerRest } = register;

  // Create a handler that calls your onChange when select value changes
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Call the component's onChange handler
    onChange(e);
  };

  return (
    <div
      className={`flex flex-1 relative px-4 py-3 bg-white rounded ${error ? "border-red-500" : "border-neutral-200"
        } max-md:w-full`}
    >
      <select
        className="w-full bg-transparent appearance-none cursor-pointer text-neutral-700 focus:outline-none"
        value={value}
        ref={(e) => {
          // Handle our own ref
          selectRef.current = e;
          // Handle react-hook-form's ref
          if (typeof registerRef === 'function') {
            registerRef(e);
          }
        }}
        // Apply react-hook-form handlers but skip ref
        {...registerRest}
        // Apply our change handler after register's handlers
        onChange={(e) => {
          // First let react-hook-form handle the change
          if (registerRest.onChange) {
            registerRest.onChange({
              target: { name: register.name, value: e.target.value },
              type: e.type,
            });
          }
          // Then call our handler
          handleSelectChange(e);
        }}
      >
        <option value="" hidden defaultChecked disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="px-2">
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {error && (
        <span className="absolute left-0 -bottom-6 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};