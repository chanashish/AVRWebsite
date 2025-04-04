"use client";
import * as React from "react";

interface FormInputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="gap-2 self-stretch px-4 py-3 bg-white rounded border border-solid border-[#E4E4E4] min-w-60 text-neutral-400 w-[333px] outline-none focus:border-lime-900"
      aria-label={placeholder}
    />
  );
};
