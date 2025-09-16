import React from "react";
import ContacForm from "./ContactForm";
import Banner from "./components/Banner";
import { contactPageData } from "./contactPageData";

export const metadata = {
  title: "Contact US  - Anandvardhan Resorts",
  description:
    "Contact Anandvardhan Resorts at +91 93172 07373  and can contact us at sales@anandvardhanresorts.com or visit us at Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road, Himachal Pradesh 175104",
};

const page = () => {
  return (
    <div>
      <Banner {...contactPageData.bannerData} />
      <ContacForm {...contactPageData.formData} />
    </div>
  );
};

export default page;

