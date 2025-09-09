"use client";
import { MenuBurger } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Container from "../SectionComponents/Container";
import MobileNav from "./MobileNav";
import { NavLink } from "@/data/links";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const ignoreIds = [6, 7, 9, 10];

  const updatedNavLinks = NavLink.filter((link) => link.id).filter(
    (link) => !ignoreIds.includes(link.id)
  );

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
        <nav className="">
          
        </nav>
      </Container>
      <Container>
        {/* navbar bottom */}
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
          <ul className="md:flex hidden items-center justify-center gap-8">
            {updatedNavLinks.map((link) => (
              <li key={link.id} className="w-full">
                <Link
                  href={link.href}
                  className={`text-nowrap text-clr font-medium relative transition-all duration-300 ease-in-out group flex items-center justify-center uppercase ${link.href === pathName ? "text-clr1" : ""}`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-clr1 group-hover:w-full transition-all duration-300 ease-in-out ${link.href === pathName ? "w-full" : ""}`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden flex">
            {/* <Link href={"tel:+919317207373"}>
              <Outlinecall />
            </Link> */}

            <Link
              href="tel:+919317207373"
              className="bg-clr text-white px-4 py-2 rounded-sm"
            >
              <span className="">Book Now</span>
            </Link>
          </div>

          <div className="flex gap-[8px]">
            <button
              aria-label="ham-burger-menu"
              className={`text-4xl ${isOpen ? "rotate-90" : ""} hidden transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose /> : <MenuBurger />}
            </button>
            <Link
              href="tel:+919317207373"
              className="hidden bg-clr1 text-white hover:bg-white border border-clr1 hover:text-clr1 px-8 py-4 lg:flex items-center justify-center gap-2 uppercase"
            >
              Book Now
              <span className="">
                <ArrowUpIcon />
              </span>
            </Link>
          </div>
        </nav>
      </Container>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;

export const ArrowUpIcon = ({ ...props }) => (
  <svg
    width={14}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.706 1.293a1 1 0 010 1.414L2.373 14.04A1 1 0 01.96 12.626L12.292 1.293a1 1 0 011.414 0z"
      fill="currentColor"
    />
    <path
      d="M0 2a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 11-2 0V3H1a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
);
