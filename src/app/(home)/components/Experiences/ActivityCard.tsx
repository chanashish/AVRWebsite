import Image from "next/image";
import * as React from "react";

interface ActivityCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

export function ActivityCard({
  imageUrl,
  imageAlt,
  title,
  description,
  className = "",
}: ActivityCardProps) {
  return (
    <article
      className={`flex flex-col gap-4 justify-center items-center pb-6 rounded-lg shadow-lg bg-stone-100 w-full max-w-[400px] md:max-w-[500px] ${className}`}
    >
      <div className="relative w-full h-[300px] md:h-[350px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-2 items-center px-4 w-full">
        <h3 className="w-full text-2xl leading-8 text-center text-neutral-700">
          {title}
        </h3>
        <p className="w-full text-lg font-light leading-6 text-center text-stone-500 px-4">
          {description}
        </p>
      </div>
    </article>
  );
}
