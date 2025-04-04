import * as React from "react";

interface NavigationDotsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

export function NavigationDots({
  total,
  current,
  onClick,
}: NavigationDotsProps) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/50">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`transition-all duration-200 outline-none focus:ring-2 focus:ring-lime-700 focus:ring-offset-1 ${
            index === current
              ? "w-8 h-2 bg-neutral-700"
              : "w-2 h-2 bg-neutral-400 hover:bg-neutral-500"
          } rounded-full touch-none`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === current ? "true" : "false"}
        />
      ))}
    </div>
  );
}
