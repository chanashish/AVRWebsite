import footerLogo from "@/public/footerLogo.png";
import Image from "next/image";
import * as React from "react";

export const Logo: React.FC = () => {
  return (
    <Image
      src={footerLogo}
      alt="Anand Vardhan Resorts Logo"
      width={120}
      height={120}
      className="w-[120px] h-[120px] max-sm:w-[40px] max-sm:h-[40px]"
      priority
    />
  );
};
