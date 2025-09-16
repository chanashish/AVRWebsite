import { imageUrl } from "@/data/links";
import { contact } from "../../../constent";

export const weddingPageData = {
  bannerData: {
    title: "DESTINATION WEDDING",
    images: ["/wedding-bnr.png"],
  },
  aboutWeddingData: {
    src: "/weddingimg.png",
    title: "WE CREATE . YOU CELEBRATE",
    subTitle: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Surrounded by towering trees, fresh mountain air, and the ones you love most, your destination wedding becomes an unforgettable celebration of love, peace, and adventure. Celebrate love with the nature’s most breathtaking canvas. A mountain retreat wedding is where your dreams come to life. Let the mountains whisper their blessings as you say ‘I do’.",
    links: [
      {
        href: "tel:" + contact.phone,
        label: "Call:" + contact.phone,
      },
      {
        href: "/contact-us/",
        label: "Contact Us",
      },
    ],
  },
  weddingServices: {
    title: "Featured Wedding Services",
    cards: [
      {
        src: "/icons/decoration.png",
        alt: "Decorations",
        name: "Decorations",
      },
      {
        src: "/icons/hospitality.png",
        alt: "Hospitality",
        name: "Hospitality",
      },
      {
        src: "/icons/entertainment.png",
        alt: "Entertainment",
        name: "Entertainment",
      },
      {
        src: "/icons/photography.png",
        alt: "Photography",
        name: "Photography",
      },
      {
        src: "/icons/hygiene.png",
        alt: "Hygiene",
        name: "Hygiene",
      },
      {
        src: "/icons/vegmenu.png",
        alt: "Pure Veg Menu",
        name: "Pure Veg Menu",
      },
      {
        src: "/icons/branding.png",
        alt: "Branding",
        name: "Branding",
      },
      {
        src: "/icons/safety.png",
        alt: "Safety",
        name: "Safety",
      },
    ],
  },
  offer: {
    title: "What We Offer",
    cards: [
      {
        src: imageUrl + "destination/offer1.webp",
        alt: "Pre-Wedding Events",
      },
      {
        src: imageUrl + "destination/offer2.webp",
        alt: "Haldhi Ceremony ",
      },
      {
        src: imageUrl + "destination/offer3.webp",
        alt: "Mehendi Ceremony ",
      },
      {
        src: imageUrl + "destination/offer4.webp",
        alt: "Engagement",
      },
      {
        src: imageUrl + "destination/offer5.webp",
        alt: "Reception",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    src: "/weddingimg2.png",
    faqData: [
      {
        id: 1,
        ques: "Are there any advantages/perks of having a destination wedding?",
        ans: "Today, many couples choose a more intimate gathering at a place they love over traditional (and expensive) weddings. Having a destination wedding allows couples to extend their celebration from four hours to four days, while creating memories that will last a lifetime with their friends and family. Destination weddings can also be more affordable for couples since they tend to be more intimate than traditional weddings.",
      },
      {
        id: 2,
        ques: "Isn't planning a destination wedding less stressful than a traditional, at-home wedding?",
        ans: "Planning a destination wedding can be less stressful than a traditional at-home wedding because it typically involves a smaller guest list and resorts often offer all-inclusive packages with on-site coordinators. These planners handle many of the logistics, from catering to décor, reducing decision fatigue. The setting itself serves as natural décor, cutting down on extras. While travel coordination is required, the overall simplicity and built-in vacation vibe often make the process more enjoyable and relaxed.",
      },
      {
        id: 3,
        ques: "Can I plan my destination wedding within 3 months?",
        ans: "Yes, you can plan your destination wedding within 3 months with Anand Vardhan Resort's expert support. Their experienced in-house planners streamline every detail, from décor and catering to guest accommodations. The resort offers customizable wedding packages, saving you time and stress. With a scenic venue, on-site services, and a dedicated team handling logistics, you can focus on enjoying the moment. Anand Vardhan Resort makes last-minute destination weddings smooth, stylish, and memorable.",
      },
    ],
  },
  addCardData: {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
    link: {
      href: "",
      label: "Book Now",
    },
  },
};
