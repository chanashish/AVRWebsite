"use client";
import HomeHero from "./components/Header/HomeHero";
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import RatingsDisplay from "@/components/RatingsDisplay";
import BookingForm from "@/components/BookingForm";
import DescriptionShow from "@/components/DescriptionShow";
// import WellnessSliderSection from "@/components/WellnessSlider";
import RoomsAndSuitesCombined from "./components/FullScreenRoomCards";
import FullSlideContentCarousel from "@/components/ImageCarouselCard";
import { imageUrl } from "@/data/links";
import { todoData } from "@/data/pageDate";
import TodoSection from "@/components/SectionComponents/TodoSection";

export default function Home() {
  const slides = [
    {
      src: imageUrl + "IMG_8155.webp",
      description: "Govind Prasadam Pure Vegetarian Restaurant",
    },
    {
      src: imageUrl + "IMG_8354.webp",
      description: "Open Air Cafe",
    },
  ];

  return (
    <main>
      <HomeHero display={true} />
      <RatingsDisplay />
      <DescriptionShow
        altTitle={true}
        title={{
          firstLine: "Peace",
          secondLine: "Happiness",
          thirdLine: "Harmony",
        }}
        description={{
          mainText:
            "We take you to a wonderland of breeze, leaves, and stars. Wake up feeling fresh and breezy every morning -experience waking up right in the heart of India’s wealthiest woodlands and reconnecting with your soul. With the sound of chirping birds, and the snow-clad mountains of the Dhauladhar and Pir Panjal range, this resort will enchant you with the holy vibes away from the hustle and bustle of the busy town of Manali. Located around apple orchards and surrounded by Pine trees we provide top-notch hospitality. Discover a haven of natural beauty and culinary delight at Anand Vardhan, the finest luxury resort in Manali, serving exquisite vegetarian cuisine.",
        }}
      />
      {/* //here */}
      <RoomsAndSuitesCombined />
{/* 
      <div className="mt-10">
        <WellnessSliderSection
          title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
          subtitle="Relax & Rejuvenation"
          href="/spiritual-retreat/"
          services={[
            {
              imageUrl: imageUrl + "273A8482.webp",
              title: "Yoga & Meditation",
              description:
                "Take a break from the chaos and find your center with Yoga and Meditation at Anand Vardhan Resorts. Breathe, relax, and let go – this is where your journey to peace begins.",
            },
            {
              imageUrl: imageUrl + "spiritual/relax5.webp",
              title: "Panchkarma",
              description:
                "Ready to hit the reset button? Experience Panchkarma, a rejuvenating detox that clears your mind and body. At Anand Vardhan Resorts, we’ll help you feel refreshed, inside and out.",
            },
            {
              imageUrl: imageUrl + "relax3.webp",
              title: "Naturopathy",
              description:
                "Feel the natural healing energy at Anand Vardhan Resorts with our Naturopathy treatments. Reconnect with the earth’s simple, yet powerful remedies to restore your balance and energy.",
            },
          ]}
        />
      </div> */}

      {/* <WellnessSliderSection
        subtitle="Explore Anand Vardhan Resort"
        href="/things-to-do/"
        services={[
          {
            title: "Cycling",
            description:
              "Feel the rush of adrenaline as you pedal through rugged trails, surrounded by towering peaks and endless sky.",
            imageUrl: imageUrl + "IMG_8241.webp",
          },
          {
            imageUrl: imageUrl + "3.webp",
            title: "Trekking",
            description:
              "Lace up your boots and embark on a journey through breathtaking mountain trails—every step brings you closer to nature's wonders. ",
          },
          {
            imageUrl: imageUrl + "IMG_8294.webp",
            title: "Outdoor Kids Area",
            description:
              "Let your kids' imaginations run wild in our outdoor play area, where adventure is just a swing away! ",
          },
        ]}
        reverseLayout={true}
      /> */}
      {todoData.map((item, index) => (
        <TodoSection key={index} {...item} index={index} textEnd={index % 2 !== 0} />
      ))}
      <FullSlideContentCarousel data={slides} />

      <TestimonialSection />
      <div className="bg-[#F9F9F1]">
        <BookingForm />
      </div>
    </main>
  );
}
