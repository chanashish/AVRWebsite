"use client";
import React, { useState } from "react";
import { InputFieldProps } from "./BookingFormTypes";

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  readonly = false,
  className = "",
  error,
  register,
  min, // Support for min attribute
  ...props
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  const inputClass = `w-full h-[46px] px-3 text-base leading-6 border-none outline-none text-neutral-700
    ${type === "date" && showPlaceholder ? "text-neutral-400" : ""}
    ${error ? "border-red-50" : ""}
    ${className}`;

  if (type === "date") {
    const {
      ref: registerRef,
      onChange: registerOnChange,
      onBlur: registerOnBlur,
      name,
    } = register || {};

    return (
      <div className="w-full relative">
        <input
          type={showPlaceholder ? "text" : "date"}
          placeholder={placeholder}
          name={name}
          ref={registerRef}
          min={min} // Enforce min date restriction
          onChange={(e) => {
            registerOnChange?.(e);
            props.onChange?.(e);
          }}
          onFocus={() => setShowPlaceholder(false)}
          onBlur={(e) => {
            registerOnBlur?.(e);
            if (!e.target.value) setShowPlaceholder(true);
            props.onBlur?.(e);
          }}
          className={inputClass}
        />
        {error && (
          <span className="absolute left-0 -bottom-6 text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
  
  // For non-date inputs, similar approach but simpler
  const { ref: registerRef, ...registerRest } = register || {};
  
  return (
    <div className="w-full relative">
      <input
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={inputClass}
        ref={registerRef}
        {...registerRest}
        // Filter out any props that would conflict with register
        {...Object.entries(props).reduce((acc, [key, value]) => {
          acc[key as keyof typeof props] = value;
          return acc;
        }, {} as Record<string, unknown>)}
      />
      {error && (
        <span className="absolute left-0 -bottom-6 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};