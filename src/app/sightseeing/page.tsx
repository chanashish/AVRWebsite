import BookingForm from "@/components/BookingForm";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import LocationCarousel from "@/components/LocationCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import { imageUrl } from "@/data/links";
import React from "react";

export const metadata = {
  title: "Luxury Sight Seeing in Manali  - Anand Vardhan Resorts ",
  description:
    "Explore the charm of nature and heritage with Anand Vardhan Resorts. Find the most-visited attractions just minutes away from your stay. For more, visit us!",
};

const page = () => {
  const data = [
    {
      image: imageUrl + "manali.webp",
      title: "Manali Mall",
      description:
        "Mall Road is the main street in Manali, city of Himachal Pradesh, India. The offices of municipal corporation, fire service, and police headquarters are located here. Automobiles, except emergency vehicles are not allowed on this road.",
    },
    {
      image: imageUrl + "atal.webp",
      title: "Atal Tunnel",
      description:
        "Atal Tunnel, named after former Prime Minister of India, Atal Bihari Vajpayee is a highway tunnel built under the Rohtang Pass in the eastern Pir Panjal range of the Himalayas on the Leh-Manali Highway in Himachal Pradesh, India.",
    },
    {
      image: imageUrl + "kullu.webp",
      title: "Kullu City",
      description:
        "Kullu is a municipal council town that serves as the administrative headquarters of the Kullu district of the Indian state of Himachal Pradesh. It is located on the banks of the Beas River in the Kullu Valley about 10 kilometres north of the airport.",
    },
    {
      image: imageUrl + "castle.png",
      title: "Naggar Castle",
      description:
        "Naggar Castle is a historic 15th-century structure built by Raja Sidh Singh of Kullu. It showcases a unique blend of Himalayan and European architecture using stone and wood. Once a royal residence, it now serves as a heritage hotel and offers stunning views of the Kullu Valley.",
    },
    {
      image: imageUrl + "gallery.png",
      title: "Roerich Art Gallery",
      description:
        "The Roerich Art Gallery is dedicated to the works of Russian painter Nicholas Roerich. It houses his landscapes of the Himalayas and portraits, along with artifacts and personal items.Surrounded by serene nature, the gallery is part of the Roerich Estate in Naggar.",
    },
    {
      image: imageUrl + "waterfall.png",
      title: "Jana Water Fall",
      description:
        "Jana Waterfall is a scenic, multi-tiered waterfall nestled in the village of Jana near Naggar. It's surrounded by pine forests and apple orchards, offering a peaceful retreat. Local cafes nearby serve traditional Himachali food, making it a popular day trip spot.",
    },
  ];
  return (
    <div>
      <FullScreenCarousel
        data={[imageUrl + "DSC_9716.webp"]}
        name="Sight Seeing"
      />
      <RatingsDisplay />
      <LocationCarousel locations={data} />
      <div className="bg-[#F9F9F1]">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
