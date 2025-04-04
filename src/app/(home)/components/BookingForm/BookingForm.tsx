"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "./InputField";
import { PhoneInput } from "./PhoneInput";
import { DropdownField } from "./DropdownField";
import { BookingFormData } from "./BookingFormTypes";

const roomTypes = [
  { value: "deluxe", label: "Deluxe Room" },
  { value: "super deluxe", label: "Super Deluxe Room" },
  { value: "luxury suite", label: "Luxury Suite Room" },
];

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phoneNumber: "",
    countryCode: "+91",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Loader state

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<BookingFormData>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof BookingFormData
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    if (showErrors) {
      clearErrors();
      setShowErrors(false);
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }));
  };

  const submitForm = async (formBody: {
    Domain: string;
    email: string;
    Name: string;
    Contact: string;
    Description: {
      checkin: string;
      checkout: string;
      roomType: string;
    };
  }): Promise<boolean> => {
    try {
      const response = await fetch(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formBody),
        }
      );

      const data = await response.json();
      return data.Status;
    } catch (error) {
      console.error("Form submission error:", error);
      return false;
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true); // Start loading

    const isSuccess = await submitForm({
      Domain: "anandvardhanresort",
      email: data.email,
      Name: formData.fullName,
      Contact: `${formData.countryCode}${formData.phoneNumber}`,
      Description: {
        checkin: data.checkInDate,
        checkout: data.checkOutDate,
        roomType: data.roomType,
      },
    });

    setIsSubmitting(false); // Stop loading

    if (isSuccess) {
      window.location.href = "/thank-you/";
    } else {
      alert("Something went wrong!");
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowErrors(true);
    handleFormSubmit(e);
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format


  return (
    <section
      id="book-appointment"
      className="flex flex-col gap-8 justify-center items-center px-8 pb-10 w-full border-b border-solid bg-yellow-cards border-b-neutral-400 max-md:px-6 max-md:py-8 max-sm:px-4 max-sm:py-6"
    >
      <h1 className="w-full text-4xl leading-10 text-center text-lime-900 max-sm:text-3xl max-sm:leading-10 font-family-head pt-8">
        Book Your Stay with Us!
      </h1>
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col items-center gap-8 w-full max-w-screen-lg"
        onClick={() => {
          if (showErrors) {
            clearErrors();
            setShowErrors(false);
          }
        }}
      >
        <div className="flex gap-4 items-start w-full max-md:flex-col max-md:gap-8">
          <div className="flex-1 max-md:w-full">
            <InputField
              type="text"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
              register={register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              error={showErrors ? errors.fullName?.message : undefined}
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <PhoneInput
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange(e, "phoneNumber")}
              register={register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              error={showErrors ? errors.phoneNumber?.message : undefined}
              countryCode={formData.countryCode}
              onCountryChange={handleCountryCodeChange}
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <InputField
              type="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              error={showErrors ? errors.email?.message : undefined}
            />
          </div>
        </div>
        <div className="flex gap-4 items-start w-full max-md:flex-col max-md:gap-8">
          <div className="flex-1 max-md:w-full">
            <InputField
              type="date"
              placeholder="Check In Date*"
              value={formData.checkInDate}
              onChange={(e) => handleInputChange(e, "checkInDate")}
              register={register("checkInDate", {
                required: "Check-in date is required",
              })}
              error={showErrors ? errors.checkInDate?.message : undefined}
              min={today} // Prevents selecting past dates
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <InputField
              type="date"
              placeholder="Check Out Date*"
              value={formData.checkOutDate}
              onChange={(e) => handleInputChange(e, "checkOutDate")}
              register={register("checkOutDate", {
                required: "Check-out date is required",
                validate: (value) =>
                  !watch("checkInDate") ||
                  new Date(value) > new Date(watch("checkInDate")) ||
                  "Check-out date must be after check-in date",
              })}
              error={showErrors ? errors.checkOutDate?.message : undefined}
              min={formData.checkInDate || today} // Checkout must be after check-in date
            />
          </div>
          <div className="flex-1 max-md:w-full">
            <DropdownField
              placeholder="Select Room Type*"
              value={formData.roomType}
              onChange={(e) => handleInputChange(e, "roomType")}
              register={register("roomType", {
                required: "Room type is required",
              })}
              error={showErrors ? errors.roomType?.message : undefined}
              options={roomTypes}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-12 py-3 text-lg font-medium leading-6 text-white bg-lime-900 cursor-pointer border-none rounded-[60px] hover:bg-lime-800 transition-colors duration-200 max-md:w-full ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Request a Call Back!"
          )}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
