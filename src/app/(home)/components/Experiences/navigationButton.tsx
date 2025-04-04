import * as React from "react";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

export function NavigationButton({
  direction,
  onClick,
  className = "",
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-all ${className}`}
      aria-label={`Navigate ${direction}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === "left" ? "" : "rotate-180"}
      >
        <path
          d="M15 19l-7-7 7-7"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
