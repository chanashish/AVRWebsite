import DescriptionShow from "@/components/DescriptionShow";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import {
  Experiences,
  OnlinePlatforms,
  sectionContentData,
} from "@/components/sectionComponants";
import { imageUrl } from "@/data/links";
import { aboutPageData } from "./aboutPageData";

const page = () => {
  const sampleCardData = [
    {
      src: imageUrl + "facilities/parking.webp",
      alt: "Parking space icon",
      name: "PARKING SPACE",
    },
    {
      src: imageUrl + "facilities/roomservice.webp",
      alt: "Room service icon",
      name: "ROOM SERVICE",
    },
    {
      src: imageUrl + "facilities/wifi.webp",
      alt: "Free WiFi icon",
      name: "FREE WIFI",
    },
    {
      src: imageUrl + "facilities/conferenceroom.webp",
      alt: "Conference room icon",
      name: "CONFERENCE ROOM",
    },
    { src: imageUrl + "facilities/cafe.webp", alt: "Cafe icon", name: "CAFE" },
    {
      src: imageUrl + "facilities/vegrestaurant.webp",
      alt: "Veg Restaurant icon",
      name: "VEG RESTAURANT",
    },
    {
      src: imageUrl + "facilities/mountainview.webp",
      alt: "Mountain View icon",
      name: "MOUNTAIN VIEW",
    },
    {
      src: imageUrl + "facilities/electricity.webp",
      alt: "24*7 Electricity icon",
      name: "24*7 ELECTRICITY",
    },
  ];
  return (
    <div>
      <FullScreenCarousel data={[imageUrl + "DSC_9716.webp"]} name="About Us" />
      <DescriptionShow
        title={{
          firstLine: "About Anand Vardhan Resort",
          //   secondLine: "Epic Adventures Await at AVR!"
        }}
        description={{
          mainText:
            "Situated in the heart of Naggar with an elevation more than 4000 feet above sea level, the property has an unbeatable location. The resort is located 15 km drive away from the bustle of Manali town and yet close to its heart.",
          diningText:
            "We take you to a wonderland of breeze, leaves, and stars. Wake up feeling fresh and breezy every morning -experience waking up right in the heart of India’s wealthiest woodlands and reconnecting with your soul. With the sound of chirping birds, and the snow-clad mountains of the Dhauladhar and Pir Panjal range, this resort will enchant you with the holy vibes away from the hustle and bustle of the busy town of Manali. Located around apple orchards and surrounded by Pine trees we provide top-notch hospitality. Experience the wonders of nature with delicious vegetarian cuisine at Anand Vardhan.",
          phoneNumber: "+91 93172 07373",
        }}
      />
      <OnlinePlatforms {...sectionContentData.onlinePlatforms} />
      <Experiences {...aboutPageData.experiences} />
    </div>
  );
};

export default page;
