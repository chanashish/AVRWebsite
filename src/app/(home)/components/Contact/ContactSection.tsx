"use client";
import * as React from "react";
import Image from "next/image";

export default function ContactSection() {
  const socialLinks = [
    { href: "http://facebook.com/AnandVardhanResortsManali/", src: "/icons/facebook.png", alt: "Facebook" },
    { href: "https://www.instagram.com/anandvardhanresorts/", src: "/icons/instagram.png", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/anand-vardhan-resort/", src: "/icons/linkedin.png", alt: "Linkedin" },
  ];
  return (
    // <section className="flex flex-col md:flex-row justify-between items-center px-6 py-16 bg-yellow-cards gap-8 md:gap-16 " style={{alignItems:"flex-start"}}>
    <section className="max-width max-sm:!py-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="flex gap-10">
        <Image
          src="/company-logo.png"
          alt="Company Logo"
          width={136}
          height={136}
          className="object-contain"
        />
        <Image
          src="/company-badge.png"
          alt="Company Badge"
          width={136}
          height={136}
          className="object-contain rounded-lg"
        />
      </div>
      <div className=" md:ml-10 text-neutral-700 md:text-left">
        <h2 className="w-full text-3xl leading-10 text-lime-900 max-md:text-3xl max-sm:text-2xl font-family-head">Contact Us</h2>
        <address className="flex flex-col md:items-start mt-4 text-base font-light not-italic">
          <p className="leading-6 max-w-md">
            Address: Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, kullu-Naggar-Manali Road Himachal Pradesh 175104
          </p>
          <p className="mt-2" onClick={()=>window.location.href = "tel:+919317207373"}>Call: +91 93172 07373</p>
        </address>
      </div>
      <div className=" flex md:justify-end">
        <div>
          <h2 className="text-3xl leading-10 text-lime-900 max-md:text-3xl max-sm:text-2xl font-family-head">Follow Us</h2>
          <nav className="flex gap-4 items-center mt-4">
            {socialLinks.map(({ href, src, alt }) => (
              <a key={alt} href={href} aria-label={`Visit our ${alt} page`} target="_blank" rel="noopener noreferrer">
                <Image
                  src={src}
                  alt={alt}
                  width={40}
                  height={40}
                  className="object-contain rounded-full transition-transform duration-200 hover:scale-110"
                />
              </a>
            ))}
          </nav>
        </div>

      </div>
    </section>
  );
}
