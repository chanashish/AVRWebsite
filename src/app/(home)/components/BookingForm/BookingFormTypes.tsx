import { UseFormRegisterReturn } from "react-hook-form";

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  roomType: string;
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: UseFormRegisterReturn;
  readonly?: boolean;
}

export interface DropdownFieldProps {
  error?: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

export interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegisterReturn;
  error?: string;
  countryCode: string;
  onCountryChange: (code: string) => void;
}

export interface CountryData {
  name: string;
  code: string;
}