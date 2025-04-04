"use client";
import * as React from "react";

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 text-lg font-medium leading-none text-white bg-lime-900 rounded-[60px] hover:bg-lime-800 transition-colors duration-200"
    >
      Request a Call Back!
    </button>
  );
};
