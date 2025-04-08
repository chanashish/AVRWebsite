"use client";
import Link from "next/link";
import Container from "../SectionComponents/Container";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { MenuBurger } from "@/icons/icons";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}>
      <Container>
        <nav className="flex items-center justify-between p-[16px]">
          <div className="">
            <Link
              href="/"
              className="relative h-104px w-[104px] h-[104px] max-lg:h-[40px] max-lg:w-[40px] aspect-auto block"
            >
              <Image
                src={"/logo.png"}
                alt="Anand Vardhan Resorts"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
          <div className="flex gap-[8px]">
            <Link href="tel:+919317207373" className="lg:block hidden bg-[#2F4B26] text-white px-[24px] h-[56px] py-[16px]">
              <span className="">Book Now</span>
            </Link>
            <button
              className={`text-4xl ${isOpen ? "rotate-90" : ""} transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose /> : <MenuBurger />}
            </button>
          </div>
        </nav>
      </Container>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
