"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDownIcon, DropdownIcon } from "./Icons";
import { countries } from "../data/countryCode";
import Container from "./SectionComponents/Container";
interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkIn: string;
  checkOut: string;
  countryCode: string;
  roomType: string;
}

const roomTypes = ["Luxury Suite Room", "Deluxe Room", "Standard Room"];

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [selectedRoom, setSelectedRoom] = useState("Luxury Suite Room");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const roomDropdownRef = useRef<HTMLDivElement>(null);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", { ...data, countryCode: selectedCountry, roomType: selectedRoom });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (roomDropdownRef.current && !roomDropdownRef.current.contains(event.target as Node)) {
        setRoomDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="flex flex-col gap-6 justify-center items-center px-0 pt-14 pb-20 border-t-2 border-solid bg-[#F9F9F1] border-t-neutral-400 max-sm:px-4 max-sm:py-8">
      <h2 className="text-2xl leading-8 text-center text-lime-900 max-sm:text-xl max-sm:leading-7">
        Book Your Stay With Us!
      </h2>
      <Container>
        <div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center bg-white rounded-lg overflow-hidden border border-solid border-zinc-300 max-lg:w-[100%] max-md:flex-col"
          >
            {/* Full Name */}
            <div className="flex flex-col px-4  py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
              <input {...register("fullName", { required: "Full Name is required" })} placeholder="Full Name*" className="text-base text-neutral-700 outline-none" />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            {/* Phone Number with Country Code */}
            <div className="relative flex items-center px-4  py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b" ref={countryDropdownRef}>
              <div className="flex gap-2 items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span className="text-base leading-6 text-neutral-700">{selectedCountry}</span>
                <DropdownIcon />
              </div>
              {dropdownOpen && (
                <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-30 max-h-[200px] overflow-scroll">
                  {countries.map((code, index) => (
                    <li key={index} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSelectedCountry(code.code); setDropdownOpen(false); }}>{code.name}{" "}{code.code}</li>
                  ))}
                </ul>
              )}
              <input {...register("phoneNumber", { required: "Phone number is required" })} placeholder="Phone Number*" className="ml-4 text-base text-neutral-700 outline-none" />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col px-4  py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
              <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} placeholder="Email ID*" className="text-base text-neutral-700 outline-none" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Check-in Date */}
            <div className="flex flex-col px-4  py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
              <input type="date" {...register("checkIn", { required: "Check-in date is required" })} className="text-base text-neutral-700 outline-none" />
              {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn.message}</p>}
            </div>

            {/* Check-out Date */}
            <div className="flex flex-col px-4  py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
              <input type="date" {...register("checkOut", { required: "Check-out date is required" })} className="text-base text-neutral-700 outline-none" />
              {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut.message}</p>}
            </div>

            {/* Room Type Dropdown */}
            <div className="relative flex items-center px-4  py-5 max-md:w-full max-md:border-b cursor-pointer whitespace-nowrap" ref={roomDropdownRef} onClick={() => setRoomDropdownOpen(!roomDropdownOpen)}>
              <span className="text-base leading-6 text-neutral-700">{selectedRoom}</span>
              <ChevronDownIcon />
              {roomDropdownOpen && (
                <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-48">
                  {roomTypes.map((room) => (
                    <li key={room} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSelectedRoom(room); setRoomDropdownOpen(false); }}>{room}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="px-2  py-5 text-lg leading-6 text-white bg-lime-900 rounded-none w-[200px] max-md:w-full">
              Book Now
            </button>
          </form>
        </div>

      </Container>
    </section>
  );
};

export default BookingForm;
