"use client";
import { MenuBurger } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Container from "../SectionComponents/Container";
import MobileNav from "./MobileNav";
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
    <div
      className="max-w-[1600px] mx-auto"
      style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}
    >
      <Container>
        <nav className="flex items-center justify-between py-[16px]">
          <div className="">
            <Link
              href="/"
              className="relative h-104px w-[80px] h-[80px] max-lg:h-[40px] max-lg:w-[40px] aspect-auto block"
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

          <div className="lg:hidden flex">
            {/* <Link href={"tel:+919317207373"}>
              <Outlinecall />
            </Link> */}

            <Link
              href="tel:+919317207373"
              className="bg-[#2F4B26] text-white px-4 py-2 rounded-sm"
            >
              <span className="">Book Now</span>
            </Link>
          </div>

          <div className="flex gap-[8px]">
            <Link
              href="tel:+919317207373"
              className="lg:block hidden bg-[#2F4B26] text-white px-[24px] h-[56px] py-[16px]"
            >
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
    </div>
  );
};

export default Navbar;
