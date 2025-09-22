"use client";
import { getDateInputLimits } from "@/data/getDateInputLimits";
import useClickOutside from "@/hooks/useClickOutside";
import { CalendarIcon, DropDownIcon } from "@/icons/icons";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { contact } from "../../../constent";

const CheckInOutForm = () => {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const guestRef = useRef<HTMLDivElement | null>(null);
  const { min } = getDateInputLimits({ showPast: false, showFuture: true });
  const { max } = getDateInputLimits({ showPast: false, showFuture: true });
  const [data, setData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2, // Default to 2 adults
    children: 0,
  });

  useClickOutside(guestRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleGuestChange = (type: "adults" | "children", value: number) => {
    setData((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto w-full md:bg-white/75 md:px-4">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-md:gap-4">
        {/* Arrival Date Input */}
        <div className="flex max-md:bg-white flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="checkIn"
            className="text-sm font-semibold uppercase text-Light"
          >
            Arrival date
          </label>
          <div className="relative w-full border-b border-dark pb-2">
            <input
              type="date"
              id="checkIn"
              min={min}
              onChange={(e) => {
                setData((prev) => ({ ...prev, checkIn: e.target.value }));
              }}
              value={data.checkIn}
              className="focus:outline-none outline-none  text-center opacity-0"
              ref={checkInRef}
            />
            <span
              onClick={() => checkInRef?.current?.showPicker()}
              className="absolute cursor-pointer inset-0 flex items-center justify-center gap-2 text-sm  text-dark z-10"
            >
              {data.checkIn ? data.checkIn : "Select date"}{" "}
              <CalendarIcon />
            </span>
          </div>
        </div>

        {/* Departure Date Input */}
        <div className="flex max-md:bg-white flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="checkOut"
            className="text-sm font-semibold uppercase text-Light"
          >
            Departure date
          </label>
          <div className="relative w-full border-b border-dark pb-2">
            <input
              type="date"
              id="checkOut"
              max={max}
              min={data.checkIn ? data.checkIn : min}
              ref={checkOutRef}
              onChange={(e) => {
                setData((prev) => ({ ...prev, checkOut: e.target.value }));
              }}
              value={data.checkOut}
              className="focus:outline-none outline-none text-center opacity-0"
            />
            <span
              onClick={() => checkOutRef?.current?.showPicker()}
              className="absolute cursor-pointer inset-0 flex items-center justify-center gap-2 text-sm text-dark z-10"
            >
              {data.checkOut ? data.checkOut : "Select date"}{" "}
              <CalendarIcon />
            </span>
          </div>
        </div>

        {/* Guest Selector */}
        <div className="flex max-md:bg-white flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="adults"
            className="text-sm font-semibold uppercase text-Light"
          >
            Guest
          </label>
          <div
            ref={guestRef}
            onClick={() => setIsOpen(!isOpen)}
            className="border-b relative border-dark text-center w-full flex items-center justify-center gap-2 pb-px cursor-pointer"
          >
            {data.adults} Adult{data.adults !== 1 ? "s" : ""}
            {data.children > 0 &&
              `, ${data.children} Child${data.children !== 1 ? "ren" : ""}`}
            <DropDownIcon
              className={`w-[17px] transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`}
            />
            <NumberOfGuests
              isOpen={isOpen}
              adults={data.adults}
              NoOfChildren={data.children}
              onGuestChange={handleGuestChange}
            />
          </div>
        </div>

        <Link href={contact.cta} target="_blank" className="bg-clr1 flex items-center justify-center gap-2 uppercase text-white lg:my-4 max-md:py-4 font-medium hover:text-clr hover:bg-white transition-colors ease-in-out duration-300 text-sm">
          Check Availability
        </Link>
      </div>
    </div>
  );
};

export default CheckInOutForm;

interface NumberOfGuestsProps {
  isOpen: boolean;
  adults: number;
  NoOfChildren: number;
  onGuestChange: (type: "adults" | "children", value: number) => void;
}

const NumberOfGuests: React.FC<NumberOfGuestsProps> = ({
  isOpen,
  adults,
  NoOfChildren,
  onGuestChange,
}) => {
  const guestData = [
    { type: "adults", label: "Adults", value: adults },
    { type: "children", label: "Children", value: NoOfChildren },
  ];

  const handleIncrement = (type: "adults" | "children") => {
    onGuestChange(type, guestData.find((g) => g.type === type)!.value + 1);
  };

  const handleDecrement = (type: "adults" | "children") => {
    const currentValue = guestData.find((g) => g.type === type)!.value;
    if (currentValue > (type === "adults" ? 1 : 0)) {
      onGuestChange(type, currentValue - 1);
    }
  };

  return (
    <div
      className={`absolute top-full left-0 right-0 shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 pointer-events-auto" : "max-h-0 pointer-events-none"
        }`}
    >
      <div className="w-full flex flex-col gap-4 px-3 py-3 bg-white">
        {guestData.map((guest) => (
          <div key={guest.type} className="grid grid-cols-2 gap-2 items-center">
            <span className="text-xs font-medium">{guest.label}</span>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() =>
                  handleDecrement(guest.type as "adults" | "children")
                }
                disabled={guest.value <= (guest.type === "adults" ? 1 : 0)}
                className="w-4 h-4 aspect-square rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              >
                <FiMinus />
              </button>
              <span className="w-[3ch] flex items-center justify-center">
                {guest.value}
              </span>
              <button
                onClick={() =>
                  handleIncrement(guest.type as "adults" | "children")
                }
                className="w-4 h-4 aspect-square rounded-full bg-gray-100 flex items-center justify-center"
              >
                <GoPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
