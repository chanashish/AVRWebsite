import { imageUrl } from "@/data/links";
import { contact } from "../../../constent";

export const roomsPageData = {
  bannerData: {
    images: [
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/avr/luxurySuite/002.webp",
    ],
    title: "Rooms & Suites",
  },
  roomsData: {
    title: "Your Tranquil Space",
    description:
      "Experience luxury mountain resort rooms designed for comfort and tranquillity. Choose from our deluxe rooms, super deluxe accommodations, and luxury suites - each featuring modern amenities, mountain views, and premium hospitality at Anand Vardhan Resort..",
    cards: [
      {
        title: "Luxury Suite Room",
        description:
          "Our 500 sq. ft. luxury suite combines style and comfort with a spacious bedroom, cozy living area, and private reading nook. Enjoy mountain serenity in a space designed for pure relaxation and indulgence.",
        images: [
          imageUrl + "luxurySuite/002.webp",
          imageUrl + "luxurySuite/005.webp",
          imageUrl + "luxurySuite/003.webp",
          imageUrl + "luxurySuite/001.webp",
          imageUrl + "luxurySuite/007.webp",
          imageUrl + "luxurySuite/009.webp",
          imageUrl + "luxurySuite/008.webp",
          imageUrl + "luxurySuite/006.webp",
          imageUrl + "luxurySuite/004.webp",
          imageUrl + "luxurySuite/010.webp",
          imageUrl + "luxurySuite/011.webp",
          imageUrl + "luxurySuite/012.webp",
        ],
        facilityList: [
          // "Sofa, Double Bed",
        
          // "Work Desk",
          // "Wardrobe",
          // "WiFi",
          // "42 “ LED TV",
          // "Hygienic Washrooms with Toiletries",
          "Shower Cubical",
          "Balcony with Outdoor Furniture & Swing",
          "Snow-capped Mountain View",
          "Hot & Cold Air Conditioner",
        ],
        link: {
          href: contact.cta,
          label: "Book Now",
        },
      },
      {
        title: "Super Deluxe Room",
        description:
          "Our 350 sq. ft. super deluxe room offers the perfect retreat with a spacious bed, cozy sofa, stylish work desk, and ample storage. Enjoy high-speed internet and a private balcony with orchard views—ideal for both relaxation and work.",
        images: [
          imageUrl + "superDeluxe/003.webp",
          imageUrl + "superDeluxe/005.webp",
          imageUrl + "superDeluxe/001.webp",
          imageUrl + "superDeluxe/002.webp",
          imageUrl + "superDeluxe/004.webp",
          imageUrl + "superDeluxe/006.webp",
          imageUrl + "superDeluxe/007.webp",
          imageUrl + "superDeluxe/008.webp",
          imageUrl + "superDeluxe/009.webp",
          imageUrl + "superDeluxe/010.webp",
        ],
        facilityList: [
          "Sofa,Double Bed",
          // "",
          // "Work Desk",
          // "Wardrobe",
          // "WiFi",
          // "32 “ LED TV",
          "Mountain View",
          "Shower Cubical",
          "Balcony with Outdoor Furniture",
          // "Hygienic Washrooms with Toiletries",
          // "Luggage Racks",
        ],
        link: {
          href: contact.cta,
          label: "Book Now",
        },
      },
      {
        title: "Deluxe Room",
        description:
          "Step into our deluxe room, a 270 sq. ft. blend of modern elegance and comfort. With stylish interiors, warm colors, and plush furnishings, it offers a cozy bed and serene ambiance—your perfect escape from the everyday hustle.",
        images: [
          imageUrl + "Deluxe/003.webp",
          imageUrl + "Deluxe/004.webp",
          imageUrl + "Deluxe/001.webp",
          imageUrl + "Deluxe/005.webp",
          imageUrl + "Deluxe/006.webp",
          imageUrl + "Deluxe/007.webp",
          imageUrl + "Deluxe/008.webp",
        ],
        facilityList: [
          // "Double Bed with Spring Mattress",
          // "Hot Running Water",
          // "Tea coffee Kitchenette",
          "Sofa , Double bed",
          // "Study Table & Chair",
          "WiFi",
          "Wardrobe",
          // "Luggage racks",
          "LED TV",
          // " Hygienic Washrooms with Toiletries",
        ],
        link: {
          href: contact.cta,
          label: "Book Now",
        },
      },
    ],
  },
  addCardData: {
    title:
      "Your tranquil retreat at Anand Vardhan Resort",
    description:
      "Find your perfect sanctuary among our luxury rooms. Book your ideal retreat today.",
    link: {
      href: contact.cta,
      label: "Book Now",
    },
  },
};
