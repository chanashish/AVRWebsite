import { imageUrl } from "@/data/links";
import { NestledInNature, PeacefulLocation } from '../../icons/icons';
import {
  BookingRatingIcon,
  CuratedLuxury,
  ExpediaRatingIcon,
  HotelRatingIcon,
  TripAdvisorRatingIcon,
} from "@/icons/icons";

export const homePageData = {
  bannerData: {
    images: [
      imageUrl + "IMG_8380.webp",
      "/home.webp",
    ],
    title: "Anand Vardhan Resort",
    subTitle: "Welcome to",
    description: "A PURE VEGETARIAN RESORT IN MANALI",
  },
  aboutUsData: {
    title: "ABOUT US",
    subtitle: "Relax In A Tranquil Hideaway With The Sound Of Nature",
    desc: [
      "Discover a haven of natural beauty and culinary delight at Anand Vardhan, the finest luxury resort in Manali, serving exquisite vegetarian cuisine.",
      "Wake up to fresh mountain air, chirping birds, and breathtaking views of the Dhauladhar and Pir Panjal ranges. Nestled amid apple orchards and pine forests near Manali, our resort offers soulful escapes and warm hospitality away from the city’s hustle.",
    ],
    images: [
      "/home-about2.png", 
      "/home-about1.png", 
      "/home-about3.jpg", 
      "/home-about4.jpg",],
    link: {
      label: "More About Us",
      href: "/about-us/",
    },
  },
  roomsAndSuites: {
    title: "ROOMS & SUITES",
    subTitle: "Where Comfort Meets Serenity",
    cards: [
      {
        images: [
          imageUrl + "luxurySuite/002.webp",
          imageUrl + "luxurySuite/005.webp",
          imageUrl + "luxurySuite/003.webp",
        ],
        title: "Luxury Suite Room",
        link: {
          href: "/rooms-suites/#rooms",
          label: "Room Details",
        },
      },
      {
        images: [
          imageUrl + "superDeluxe/003.webp",
          imageUrl + "superDeluxe/005.webp",
          imageUrl + "superDeluxe/001.webp",
        ],
        title: "Super Deluxe Room",
        link: {
          href: "/rooms-suites/#rooms",
          label: "Room Details",
        },
      },
      {
        images: [
          imageUrl + "Deluxe/003.webp",
          imageUrl + "Deluxe/004.webp",
          imageUrl + "Deluxe/001.webp",
        ],
        title: "Deluxe Room",
        link: {
          href: "/rooms-suites/#rooms",
          label: "Room Details",
        },
      },
    ],
  },
  experiences: {
    title: "EXPERIENCES",
    subTitle: "Lorem Ipsum Dolor Sit Amet",
    cards: [
      {
        src: "/destination-wedding.png",
        title: "Destination Wedding",
      },
      {
        src: "/spiritual-retreat.png",
        title: "Spiritual Retreat",
      },
      {
        src: imageUrl + "IMG_8155.webp",
        title: "Pure Vegetarian Dining",
      },
    ],
  },
  whyChooseUs: {
    title: "UNIQUE EDGE",
    subTitle: "Why Us?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    cards: [
      {
        icon: <CuratedLuxury />,
        title: "Curated Luxury",
      },
      {
        icon: <PeacefulLocation />,
        title: "Peaceful Location",
      },
      {
        icon: <NestledInNature />,
        title: "Nestled in Nature",
      },
    ],
  },
  ourCulinaryOfferings: {
    title: "OUR CULINARY OFFERINGS",
    subTitle: "A Celebration of Pure Vegetarian Flavors",
    link: {
      href: "",
      label: "Know More",
    },
    cards: [
      {
        src: imageUrl + "IMG_8155.webp",
        description: "Govind Prasadam Pure Vegetarian Restaurant",
      },
      {
        src: imageUrl + "IMG_8383.webp",
        description: "Open Air Cafe",
      },
    ],
  },
  onlinePlatforms: {
    title: "HIGHEST RATINGS ON ONLINE PLATFORMS",
    cards: [
      {
        icon: <TripAdvisorRatingIcon />,
        partnerName: "TripAdvisor",
        ratings: "4.5/5",
      },
      {
        icon: <BookingRatingIcon />,
        partnerName: "Booking.com",
        ratings: "9.5/10",
      },
      {
        icon: <HotelRatingIcon />,
        partnerName: "Hotels.com",
        ratings: "9.7/10",
      },
      {
        icon: <ExpediaRatingIcon />,
        partnerName: "Expedia",
        ratings: "9.6/10",
      },
    ],
  },
  testimonials: {
    title: "TESTIMONIALS",
    subTitle: "Appreciation From Our Guests",
    reviewPartners: [
      {
        name: "Google Rating",
        logo: "/Google.png",
        rating: "5.0",
      },
      {
        name: "Trip Advisor",
        logo: "/trip.png",
        rating: "5.0",
      },
    ],
    cards: [
      {
        id: 1,
        link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
        logo: "/trip.png",
        rating: 4,
        name: "Himanshu G",
        review:
          "I recently stayed at Anand Vardhan Resort and had a fantastic time! The resort is beautiful, with stunning views and peaceful surroundings. My room was cozy and comfortable, perfect for relaxing after exploring. I loved the delicious food at the restaurant. I highly recommend Anand Vardhan Resort for a perfect getaway.",
      },
      {
        id: 2,
        logo: "/trip.png",
        rating: 4,
        name: "Aditya R",
        link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
        review:
          "Great Location It's about 20kms from Manali Mall Road we love this place as it is peace mind great wether in Manali really very very beautiful place realy come again to Manali Himalayan,s Thanks for AVR Team who give a best Hospitality. Food was Also Fresh and tasty.",
      },
      {
        id: 3,
        rating: 5,
        name: "Aditya Jain",
        link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
        logo: "/google.png",
        review:
          "I had an amazing stay at the property, we were greeted with welcome drinks, they had gym facilities, playground for the kids, cycling and also they have an extra property for adventure activities, cricket, badminton and the food was so tasty, very good for pure vegetarian people. Felt like home and such a sweet staff. 100% recommended for your trip in this area",
      },
      {
        id: 4,
        logo: "/trip.png",
        rating: 5,
        name: "Viahal V",
        link: "https://www.tripadvisor.in/Hotel_Review-g297617-d24062550-Reviews-Anand_Vardhan_Resorts-Himachal_Pradesh.html",
        review:
          "Beautiful Place for a calm and peaceful stay in mountains.Resort is perfectly placed out of town hustle but easily approachable from manali. One of best highlights is the Food, kudos to Chef. The complete staff is very active and ready to make your stay comfortable.",
      },
      {
        id: 5,
        logo: "/google.png",
        rating: 5,
        name: "Satyansh Prajapati",
        link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
        review:
          "Anand Vardhan Resort in Manali is a perfect blend of luxury and nature. Nestled amidst breathtaking mountain views, it offers clean and comfortable rooms, delicious vegetarian food, and top-notch hospitality. The staff is warm and attentive, ensuring a relaxing stay. Whether you're looking for adventure or peace, this resort is an excellent choice for a memorable getaway.",
      },
      {
        id: 6,
        logo: "/google.png",
        rating: 5,
        name: "Nimit Jain",
        link: "https://www.google.com/travel/search?q=anand%20vardhan%20resorts&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72860862%2C72881573%2C72882230%2C72885032%2C72916970&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4MzkwNDg5NGVmMjU2MzgxZDoweDUzNmYwYTlhMzA2YTI3MRIaEhQKBwjpDxADGBkSBwjpDxADGBoYATICEAA&qs=CAEyE0Nnb0k4Y1NhbUpxVnZKc0ZFQUU4AkIJCXGiBqOp8DYFQgkJcaIGo6nwNgU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjAiKitiKOMAxUAAAAAHQAAAAAQBQ",
        review:
          "The property is just excellent with tremendous service and staff. It was my daughter birthday and Anand Vardhan Resort gave us a wonderful surprise with decorated room and a dedicated party area to celebrate birthday for our little one. I would highly recommend this for family and friends outing.",
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
