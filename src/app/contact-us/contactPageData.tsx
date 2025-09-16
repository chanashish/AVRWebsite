import { FillFacebook, FillInstagram, FillLinkedin } from "@/icons/icons";
import { contact } from "../../../constent";

export const contactPageData = {
    bannerData: {
      title: "Contact Details",
      src: "/contactBnr.jpg",
      listOfLinks: [
        {
          label: "Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar, Manali Road, Himachal Pradesh 175104",
          href: contact.addressUrl,
        },
        {
          label: "Email: " + contact.email ,
          href: "mailto:" + contact.email,
        },
        {
          label: "Call: " + contact.phone,
          href: "tel:" + contact.phone,
        },
        {
          label: Object.keys(contact.socialContact)[0], 
          href: contact.socialContact.facebook,
          icon: <FillFacebook />,
        },
        {
          label: Object.keys(contact.socialContact)[1], 
          href: contact.socialContact.instagram,
          icon: <FillInstagram />,
        },
        {
          label: Object.keys(contact.socialContact)[2], 
          href: contact.socialContact.linkedin,
          icon: <FillLinkedin />,
        },
      ]
    },
    formData:{
        title:"Anand Vardhan Resort",
        subTitle:"Have A Question For Us?",
        mapUrl:contact.mapUrl
    }
}