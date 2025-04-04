import Link from "next/link";
import * as React from "react";

interface CTAButtonProps {
  label: string;
}

export function CTAButton({ label }: CTAButtonProps) {
  return (
    <Link
      href="#book-appointment"
      className="inline-flex px-6 py-3 text-lg font-medium leading-6 text-white bg-lime-900 duration-200 cursor-pointer rounded-[60px] hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-700 focus:ring-offset-2"
      aria-label={label}
    >
      {label}
    </Link>
  );
}
