import ActivitiesDisplay from "@/components/ActivitiesDisplay";
import BookingForm from "@/components/BookingForm";
import DescriptionShow from "@/components/DescriptionShow";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import { imageUrl } from "@/data/links";
import React from "react";

const page = () => {
  const activitiesData = [
    {
      title: "Cycling",
      description:
        "Feel the rush of adrenaline as you pedal through rugged trails, surrounded by towering peaks and endless sky. Every twist and turn on our mountain paths brings a new adventure—one moment you're racing downhill, the next, you're soaking in jaw-dropping views. Whether you're a seasoned pro or just looking to explore, our mountain retreat offers something for every rider.",
      imageUrl: imageUrl + "thingstodo/1.webp",
      imageAlt: "cycling",
    },
    {
      title: "Trekking",
      description:
        "Lace up your boots and embark on a journey through breathtaking mountain trails—every step brings you closer to nature's wonders. Feel the excitement build as you trek to new heights, where every peak offers a view that takes your breath away. Trekking here isn’t just a hike—it’s an experience that will leave you with a sense of accomplishment and a heart full of memories.",
      imageUrl: imageUrl + "thingstodo/3.webp",
      imageAlt: "Trekking",
    },
    {
      title: "Outdoor Kids Area",
      description:
        "Let your kids' imaginations run wild in our outdoor play area, where adventure is just a swing away! From soaring through the air on swings, jumping with joy on the trampoline, to diving into classic board games- every moment is a new memory waiting to be made. Here, fun is boundless—watch their faces light up as they explore, play, and create memories in the great outdoors.",
      imageUrl: imageUrl + "thingstodo/2.webp",
      imageAlt: "Outdoor Kids Area",
    },
    {
      title: "Adventure Park",
      description:
        "Get your adrenaline pumping with our heart-racing adventure activities—feel the thrill of soaring on the zipline or conquering the commando net! Take on the challenge of crossing the bamboo bridge, balancing on the Burma bridge, and testing your aim with archery—every activity is an adventure in itself. Ready to push your limits and embrace the excitement? Each adventure here offers a new way to connect with nature and discover your inner thrill-seeker!",
      imageUrl: imageUrl + "thingstodo/4.webp",
      imageAlt: "Adventure Park",
    },
    {
      title: "Bonfire",
      description:
        "Gather around the crackling bonfire as the mountain night wraps around you, sharing stories and laughter under a sky full of stars. Feel the warmth of the fire on your face, the cool mountain air in your hair, and the magic of the moment as the flames dance and flicker. There's something special about a bonfire in the mountains—it's where memories are made, and connections are strengthened by the glow of the flames!",
      imageUrl: imageUrl + "thingstodo/5.webp",
      imageAlt: "Bonfire",
    },
    {
      title: "Indoor Game Studio",
      description:
        "When the weather calls for a break, our indoor game studio is the perfect escape—where fun, laughter, and friendly competition come alive. Whether it's  board games, or something new, it’s the perfect spot to unwind, bond, and create memories that’ll last. In our cozy game studio, the mountains may be outside, but the excitement and joy are always in full swing indoors.",
      imageUrl: imageUrl + "thingstodo/6.webp",
      imageAlt: "Indoor Game Studio",
    },
    {
      title: "Conference Room",
      description:
        "Host your next meeting in our serene conference room, where stunning mountain views inspire creativity and fresh ideas. Perfect for team collaborations or intimate brainstorming sessions, our conference room blends comfort with productivity. Get down to business in a space designed to energize and focus, with the mountains as your backdrop to success.",
      imageUrl: imageUrl + "thingstodo/7.webp",
      imageAlt: "Conference Room",
    },
  ];
  return (
    <div>
      <FullScreenCarousel
        data={[
          imageUrl + "carousel/carousel1.webp",
          imageUrl + "carousel/carousel1.webp",
          imageUrl + "carousel/carousel1.webp",
        ]}
        name="Adventure Activities"
      />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "New Experiences:",
          secondLine: "Epic Adventures Await at AVR!",
        }}
        description={{
          mainText:
            "Escape the ordinary and embrace the thrill at our Adventure Arena, nestled in the heart of our peaceful resort. Whether you're seeking an adrenaline rush or simply want to explore the great outdoors, there's something here for everyone. Join us for an unforgettable experience where adventure and serenity beautifully collide",
          diningText:
            "Our goal is to give you a truly memorable dining experience and Take a seat at an indoor dining table or enjoy the meal beside views of the mountains.",
          phoneNumber: "+91 93172 07373",
        }}
      />
      <ActivitiesDisplay activities={activitiesData} />
      <div className="bg-[#F9F9F1]">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
