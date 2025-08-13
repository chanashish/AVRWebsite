"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { ChevronDownIcon, DropdownIcon } from "./Icons";
import { countries } from "../data/countryCode";
import Container from "./SectionComponents/Container";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkIn: string;
  checkOut: string;
}

const roomTypes = ["Luxury Suite Room", "Deluxe Room", "Super Deluxe Room"];

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const [selectedCountry, setSelectedCountry] = useState("+91");
  const [selectedRoom, setSelectedRoom] = useState("Luxury Suite Room");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roomDropdownOpen, setRoomDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const roomDropdownRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDateChange = (
    date: Date | null,
    field: "checkIn" | "checkOut"
  ) => {
    const dateString = date ? date.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      [field]: dateString,
    }));

    if (field === "checkIn") {
      setStartDate(date);
      // Clear check-out error if both dates are selected
      if (date && endDate && date > endDate) {
        setEndDate(null);
        setFormData((prev) => ({ ...prev, checkOut: "" }));
      }
    } else {
      setEndDate(date);
    }

    // Clear error when date is selected
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10-15 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "Check-out date is required";
      isValid = false;
    } else if (
      formData.checkIn &&
      formData.checkOut &&
      new Date(formData.checkIn) >= new Date(formData.checkOut)
    ) {
      newErrors.checkOut = "Check-out must be after check-in";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = async (formBody: {
    email: string;
    name: string;
    phone: string;
    checkin: string;
    checkout: string;
    other_fields: string;
  }): Promise<boolean> => {
    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "anandvardhanresort",
          email: `${formBody.email}`,
          Name: `${formBody.name}`,
          Contact: `${formBody.phone}`,
          check_in: `${formBody.checkin}`,
          check_out: `${formBody.checkout}`,
          Subject: null,
          Description: `checkin: ${formBody.checkin}, checkout: ${formBody.checkout}, ${formBody.other_fields}`,
          created_from: "Website",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const fullPhoneNumber = `${selectedCountry} ${formData.phoneNumber}`;
    const formBody = {
      email: formData.email,
      name: formData.fullName,
      phone: fullPhoneNumber,
      checkin: formData.checkIn,
      checkout: formData.checkOut,
      other_fields: `Room Type: ${selectedRoom}`,
    };

    try {
      const success = await submitForm(formBody);

      if (success) {
        console.log("Form successfully submitted to API");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          checkIn: "",
          checkOut: "",
        });
        setStartDate(null);
        setEndDate(null);
        setSelectedCountry("+91");
        setSelectedRoom("Luxury Suite Room");
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        roomDropdownRef.current &&
        !roomDropdownRef.current.contains(event.target as Node)
      ) {
        setRoomDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      <section className="flex flex-col gap-6 justify-center items-center px-0 pt-14 max-sm:px-4">
        <h2 className="text-2xl leading-8 text-center text-lime-900 max-sm:text-xl max-sm:leading-7">
          Book Your Stay With Us!
        </h2>

        {submitSuccess && (
          <p className="text-green-600 text-sm mb-2">
            Your booking has been successfully submitted!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded-lg border border-solid border-zinc-300 max-lg:w-[100%] max-md:flex-col"
        >
          {/* Full Name */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name*"
              className="text-base text-neutral-700 outline-none w-[130px]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number with Country Code */}
          <div
            className="relative flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b"
            ref={countryDropdownRef}
          >
            <div className="flex items-center">
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-base leading-6 text-neutral-700">
                  {selectedCountry}
                </span>
                <DropdownIcon />
              </div>
              {dropdownOpen && (
                <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-30 max-h-[200px] overflow-scroll z-10">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCountry(country.code);
                        setDropdownOpen(false);
                      }}
                    >
                      {country.name} {country.code}
                    </li>
                  ))}
                </ul>
              )}
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number*"
                className="ml-4 text-base text-neutral-700 outline-none"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col px-4 py-5 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email ID*"
              className="text-base text-neutral-700 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Check-in Date */}
          <div className="flex flex-col px-1 py-2 border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <DatePicker
              selected={startDate}
              onChange={(date) => handleDateChange(date, "checkIn")}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              placeholderText="Check in*"
              className="text-base text-neutral-700 outline-none w-full cursor-pointer"
              wrapperClassName="w-full"
            />
            {errors.checkIn && (
              <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>
            )}
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col px-1 py-2  border-r border-solid border-r-zinc-100 max-md:w-full max-md:border-b">
            <DatePicker
              selected={endDate}
              onChange={(date) => handleDateChange(date, "checkOut")}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              placeholderText="Check out*"
              className="text-base text-neutral-700 outline-none w-full cursor-pointer"
              wrapperClassName="w-full"
            />
            {errors.checkOut && (
              <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>
            )}
          </div>

          {/* Room Type Dropdown */}
          <div
            className="relative flex items-center px-4 py-5 max-md:w-full max-md:border-b cursor-pointer whitespace-nowrap"
            ref={roomDropdownRef}
            onClick={() => setRoomDropdownOpen(!roomDropdownOpen)}
          >
            <span className="text-base leading-6 text-neutral-700">
              {selectedRoom}
            </span>
            <ChevronDownIcon />
            {roomDropdownOpen && (
              <ul className="absolute top-full left-4 bg-white shadow-md border border-zinc-200 rounded-md w-48 z-10">
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
            disabled={isSubmitting}
            className={`px-2 py-5 text-lg leading-6 text-white bg-lime-900 border !border-lime-900 max-md:rounded-b-md lg:rounded-r text-nowrap max-md:w-full ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
            ) : submitSuccess ? (
              "Thank You!"
            ) : (
              "Book Now"
            )}
          </button>
        </form>
      </section>
    </Container>
  );
};

export default BookingForm;
