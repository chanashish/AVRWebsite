"use client"
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

const Footer: React.FC = () => {
  // State to track which sections are expanded in mobile view
  const [expandedSections, setExpandedSections] = useState({
    favourites: false,
    policies: false
  });

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section: 'favourites' | 'policies') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const socialLinks = [
    { href: "http://facebook.com/AnandVardhanResortsManali/", src: "/icons/facebook2.png", alt: "Facebook" },
    { href: "https://www.instagram.com/anandvardhanresorts/", src: "/icons/instagram2.png", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/anand-vardhan-resort/", src: "/icons/linkedin2.png", alt: "Linkedin" },
  ];

  const quickLinks = [
    { id: 1, link: "", value: "Quick Links", className: "playfair font-normal text-2xl" },
    { id: 2, link: "/", value: "Home", className: "roboto text-xl font-light" },
    { id: 3, link: "/about-us", value: "About Us", className: "roboto text-xl font-light" },
    { id: 4, link: "/", value: "Rooms & Suites", className: "roboto text-xl font-light" },
    { id: 5, link: "/", value: "Gallery", className: "roboto text-xl font-light" },
    { id: 6, link: "/contact-us", value: "Contact Us", className: "roboto text-xl font-light" },
  ];

  const favourites = [
    { id: 1, link: "/", value: "Favourites", className: "playfair font-normal text-2xl" },
    { id: 2, link: "/", value: "Dining", className: "roboto text-xl font-light" },
    { id: 3, link: "/things-to-do", value: "Things To Do", className: "roboto text-xl font-light" },
    { id: 4, link: "/", value: "Destination Wedding", className: "roboto text-xl font-light" },
    { id: 5, link: "/", value: "Spiritual Retreat", className: "roboto text-xl font-light" },
    { id: 6, link: "/", value: "Nearby Places", className: "roboto text-xl font-light" },
  ];

  const policies = [
    { id: 1, value: "Policies", className: "playfair font-normal text-2xl" },
    { id: 2, value: "Check In Policy", className: "roboto text-xl font-light" },
    { id: 3, value: "Privacy Policy", className: "roboto text-xl font-light" },
    { id: 4, value: "Terms and Conditions", className: "roboto text-xl font-light" },
  ];

  // Arrow component for dropdowns
  const DropdownArrow = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      <div className="main-footer bg-[#262A10]">
        <div className="flex max-lg:flex-col justify-between w-full py-[80px] px-[108px] max-md:px-6 max-md:py-10 text-center gap-[24px] align-middle">
          <div className="flex-1 text-center align-middle flex items-center flex-col gap-5">
            <Image src={"/footerLogo.png"} alt="Anand Vardhan Resorts" height={136} width={136} />
            <p className="text-white px-4">Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road, Himachal Pradesh 175104</p>
            <Link href={"tel:+919317207373"} className="text-white px-4">Call: +91 93172 07373</Link>
            <div className="flex gap-5">{socialLinks.map(({ href, src, alt }) => (
              <a key={alt} href={href} aria-label={`Visit our ${alt} page`} target="_blank" rel="noopener noreferrer">
                <Image
                  src={src}
                  alt={alt}
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-200 hover:scale-110"
                />
              </a>
            ))}</div>
          </div>

          {/* Quick Links - always visible */}
          <div className="flex-1 flex flex-col gap-5 text-white text-left">
            {quickLinks.map((item) => (
              <Link href={item.link} key={item.id} className={item.className}>
                {item.value}
              </Link>
            ))}
          </div>

          {/* Favourites - collapsible on mobile */}
          <div className="flex-1 flex flex-col gap-5 text-white text-left">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('favourites')}
            >
              <div className={favourites[0].className}>
                {favourites[0].value}
              </div>
              <div className="md:hidden">
                <DropdownArrow isExpanded={expandedSections.favourites} />
              </div>
            </div>

            {/* Items - Always visible on desktop, conditionally on mobile */}
            <div
              className={`flex flex-col gap-5 md:flex
                ${expandedSections.favourites ? 'max-h-96' : 'max-h-0 overflow-hidden'} 
                transition-all duration-300 ease-in-out md:max-h-full`}
            >
              {favourites.slice(1).map((item) => (
                <Link href={item.link} key={item.id} className={item.className}>
                  {item.value}
                </Link>
              ))}
            </div>
          </div>

          {/* Policies - collapsible on mobile */}
          <div className="flex-1 flex flex-col gap-5 text-white text-left">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection('policies')}
            >
              <div className={policies[0].className}>
                {policies[0].value}
              </div>
              <div className="md:hidden">
                <DropdownArrow isExpanded={expandedSections.policies} />
              </div>
            </div>

            {/* Items - Always visible on desktop, conditionally on mobile */}
            <div
              className={`flex flex-col gap-5 md:flex
                ${expandedSections.policies ? 'max-h-96' : 'max-h-0 overflow-hidden'} 
                transition-all duration-300 ease-in-out md:max-h-full`}
            >
              {policies.slice(1).map((item) => (
                <div key={item.id} className={item.className}>
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center px-28 py-4 w-full bg-lime-900 max-md:px-12 max-md:py-4 max-sm:p-4">
        <ul className="flex md:flex-row flex-col md:gap-2 gap-2 items-center">
          <li className="flex items-center gap-2">
            <span className="md:hidden text-white">•</span>
            <p className="text-base font-light leading-6 text-white">
              © Anand Vardhan Resorts
            </p>
          </li>
          <li className="md:flex hidden items-center">
            <span className="mx-1 my-0 text-base font-light leading-6 text-white">
              •
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="md:hidden text-white">•</span>
            <p className="text-base font-light leading-6 text-white">
              All rights reserved
            </p>
          </li>
          <li className="md:flex hidden items-center">
            <span className="mx-1 my-0 text-base font-light leading-6 text-white">
              •
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="md:hidden text-white">•</span>
            <p className="text-base font-light leading-6 text-white">
              Designed & Developed by{" "}
              <Link href="https://eazotel.com" className="font-bold">
                Eazotel
              </Link>
            </p>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;