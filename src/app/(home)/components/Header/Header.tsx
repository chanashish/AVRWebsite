"use client";
import * as React from "react";
import { Logo } from "./Logo";
import { CallButton } from "./CallButton";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-28 py-4 w-full max-md:px-10 max-sm:px-5 bg-gradient-to-b from-black/50 to-transparent">
      <Logo />
      <CallButton />
    </header>
  );
};

export default Header;
