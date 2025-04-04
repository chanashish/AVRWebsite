import * as React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="flex flex-col gap-2 items-center w-full">
      <h1 className="w-full text-xl leading-6 text-center text-lime-900 uppercase">
        {title}
      </h1>
      <h2 className="w-full text-3xl leading-10 text-center text-lime-900 max-md:text-4xl max-sm:text-3xl font-family-head">
        {subtitle}
      </h2>
    </header>
  );
}
