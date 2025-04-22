"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChevronDownIcon, DropdownIcon } from "./Icons";
import { countries } from "../data/countryCode";
import Container from "./SectionComponents/Container";
import axios from "axios";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkIn: string;
  checkOut: string;
  countryCode: string;
  roomType: string;
}

const roomTypes = ["Luxury Suite Room", "Deluxe Room", "Super Deluxe Room"];

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [selectedRoom, setSelectedRoom] = useState("Luxury Suite Room");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<"success" | "error" | null>(null);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const roomDropdownRef = useRef<HTMLDivElement>(null);

  const checkInDate = watch("checkIn");

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getTomorrow = (dateString: string) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  };

  const submitForm = async (formBody:
    {
      email: string;
      name: string;
      phone: string;
      other_fields: string;
    }
  ): Promise<boolean> => {
    try {
      const { data } = await axios.post(
        // "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/XJVYRzPn#generic-webhook",
        "https://nexon.eazotel.com/eazotel/addcontacts",
        // {
        //   Email: formBody.email,
        //   Domain: "anandvardhanresort",
        //   Name: formBody.name,
        //   Contact: formBody.phone,
        //   Description: formBody.other_fields,
        // },
        {
          Domain: "anandvardhanresort",
          email: formBody.email,
          Name: formBody.name,
          Contact: formBody.phone,
          Subjec: "",
          Description: formBody.other_fields,
          created_from: "Website"
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data.Status;
    } catch (error) {
      console.error("Form submission error:", error);
      return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmissionResult(null); // Reset previous result

    const fullPhoneNumber = `${selectedCountry} ${data.phoneNumber}`;
    const formBody = {
      email: data.email,
      name: data.fullName,
      phone: fullPhoneNumber,
      other_fields: `Check-in: ${data.checkIn}, Check-out: ${data.checkOut}, Room Type: ${selectedRoom}`,
    };

    const success = await submitForm(formBody);

    if (success) {
      console.log("Form successfully submitted to API");
      reset();
      setSelectedCountry("+91");
      setSelectedRoom("Luxury Suite Room");
      setSubmissionResult("success");
    } else {
      console.error("Failed to submit form to API");
      setSubmissionResult("error");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (submissionResult) {
      const timer = setTimeout(() => {
        setSubmissionResult(null);
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [submissionResult]);
  
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
    <Container>
      <section className="flex flex-col gap-6 justify-center items-center px-0 pt-14 pb-20 max-sm:px-4 max-sm:py-8">
        <h2 className="text-2xl leading-8 text-center text-lime-900 max-sm:text-xl max-sm:leading-7">
          Book Your Stay With Us!
        </h2>

        {submissionResult === "success" && (
          <p className="text-green-600 text-sm mb-2">Your booking has been successfully submitted!</p>
        )}
        {submissionResult === "error" && (
          <p className="text-red-600 text-sm mb-2">There was an error submitting your booking. Please try again.</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center bg-white rounded-lg border border-solid border-zinc-300 max-lg:w-[100%] max-md:flex-col"
        >
          {/* Full Name */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Full Name*"
              className="text-base text-neutral-700 outline-none w-[130px]"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Phone Number with Country Code */}
          <div className="relative flex items-center px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b" ref={countryDropdownRef}>
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <span className="text-base leading-6 text-neutral-700">{selectedCountry}</span>
              <DropdownIcon />
            </div>
            {dropdownOpen && (
              <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-30 max-h-[200px] overflow-scroll">
                {countries.map((code, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCountry(code.code);
                      setDropdownOpen(false);
                    }}
                  >
                    {code.name} {code.code}
                  </li>
                ))}
              </ul>
            )}
            <input
              {...register("phoneNumber", { required: "Phone number is required" })}
              placeholder="Phone Number*"
              className="ml-4 text-base text-neutral-700 outline-none"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              placeholder="Email ID*"
              className="text-base text-neutral-700 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Check-in Date */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              type="date"
              {...register("checkIn", { required: "Check-in date is required" })}
              className="text-base text-neutral-700 outline-none"
              min={getToday()}
            />
            {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn.message}</p>}
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              type="date"
              {...register("checkOut", { required: "Check-out date is required" })}
              className="text-base text-neutral-700 outline-none"
              min={checkInDate ? getTomorrow(checkInDate) : getToday()}
            />
            {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut.message}</p>}
          </div>

          {/* Room Type Dropdown */}
          <div
            className="relative flex items-center px-4 py-5 max-md:w-full max-md:border-b cursor-pointer whitespace-nowrap"
            ref={roomDropdownRef}
            onClick={() => setRoomDropdownOpen(!roomDropdownOpen)}
          >
            <span className="text-base leading-6 text-neutral-700">{selectedRoom}</span>
            <ChevronDownIcon />
            {roomDropdownOpen && (
              <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-48">
                {roomTypes.map((room) => (
                  <li
                    key={room}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedRoom(room);
                      setRoomDropdownOpen(false);
                    }}
                  >
                    {room}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`px-2 py-5 text-lg leading-6 text-white bg-lime-900 border !border-lime-900 rounded-none w-[200px] max-md:w-full ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </section>
    </Container>
  );
};

export default BookingForm;
