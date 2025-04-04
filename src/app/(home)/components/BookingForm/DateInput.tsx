"use client";
import * as React from "react";

interface DateInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      type="date"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="gap-2 self-stretch px-4 py-3 bg-white rounded border border-solid border-[#E4E4E4] min-w-60 w-[333px] text-neutral-400 outline-none focus:border-lime-900"
      aria-label={placeholder}
    />
  );
};
