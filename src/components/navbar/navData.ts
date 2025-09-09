import { contact } from "../../../constent";

export const navUpper = [
  {
    label: "Manali Road, Himachal Pradesh",
    href: contact.addressUrl,
    icon: "location",
  },
  {
    label: contact.email,
    href: "mailto:" + contact.email,
    icon: "mail",
  },
  {
    label: contact.phone,
    href: "tel:" + contact.phone,
    icon: "call",
  },
  {
    label: Object.keys(contact.socialContact)[0],
    href: Object.values(contact.socialContact)[0],
    icon: "facebook",
  },
  {
    label: Object.keys(contact.socialContact)[1],
    href: Object.values(contact.socialContact)[1],
    icon: "instagram",
  },
  {
    label: Object.keys(contact.socialContact)[2],
    href: Object.values(contact.socialContact)[2],
  },
];
