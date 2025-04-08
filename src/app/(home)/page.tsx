"use client"
import HomeHero from "./components/Header/HomeHero";
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import RatingsDisplay from "@/components/RatingsDisplay";
import BookingForm from "@/components/BookingForm";
import DescriptionShow from "@/components/DescriptionShow";
import WellnessSliderSection from "@/components/WellnessSlider";
import RoomsAndSuitesCombined from "./components/FullScreenRoomCards";
import FullSlideContentCarousel from "@/components/ImageCarouselCard";

export default function Home() {
  const slides = [
    {
      src: "/home/dining.png",
      description: "Govind Prasadam Pure Vegetarian Restaurant",
    },
    {
      src: "/home/cafe.png",
      description: "Open Air Cafe",
    },
  ];

  return (
    <main>
      <HomeHero />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "“Relax In A Tranquil Hideaway With The",
          secondLine: "Sound Of Nature”"
        }}
        description={{
          mainText: "We take you to a wonderland of breeze, leaves, and stars. Wake up feeling fresh and breezy every morning -experience waking up right in the heart of India’s wealthiest woodlands and reconnecting with your soul. With the sound of chirping birds, and the snow-clad mountains of the Dhauladhar and Pir Panjal range, this resort will enchant you with the holy vibes away from the hustle and bustle of the busy town of Manali. Located around apple orchards and surrounded by Pine trees we provide top-notch hospitality. Discover a haven of natural beauty and culinary delight at Anand Vardhan, the finest luxury resort in Manali, serving exquisite vegetarian cuisine.",
        }}
      />
      {/* //here */}
      <RoomsAndSuitesCombined />
      <WellnessSliderSection
        title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
        subtitle="Relax & Rejuvenation"
        href="/spiritual-retreat/"
        services={[
          {
            imageUrl:
              "/home/relax1.png",
            title: "Yoga & Meditation",
            description: "Take a break from the chaos and find your center with Yoga and Meditation at Anand Vardhan Resorts. Breathe, relax, and let go – this is where your journey to peace begins."
          },
          {
            imageUrl:
              "/home/relax2.png",
            title: "Panchkarma",
            description: "Ready to hit the reset button? Experience Panchkarma, a rejuvenating detox that clears your mind and body. At Anand Vardhan Resorts, we’ll help you feel refreshed, inside and out."
          },
          {
            imageUrl:
              "/home/relax3.png",
            title: "Naturopathy",
            description: "Feel the natural healing energy at Anand Vardhan Resorts with our Naturopathy treatments. Reconnect with the earth’s simple, yet powerful remedies to restore your balance and energy."
          },
        ]}
      />
      <WellnessSliderSection
        subtitle="Explore Anand Vardhan Resort"
        href="/spiritual-retreat/"
        services={[
          {
            imageUrl:
              "/home/explore1.png",
            title: "Bonfire",
            description: "Gather around the crackling bonfire as the mountain night wraps around you, sharing stories and laughter under a sky full of stars."
          },
          {
            imageUrl:
              "/home/explore2.png",
            title: "Trekking",
            description: "Lace up your boots and embark on a journey through breathtaking mountain trails—every step brings you closer to nature's wonders. "
          },
          {
            imageUrl:
              "/home/explore3.png",
            title: "Outdoor Kids Area",
            description: "Let your kids' imaginations run wild in our outdoor play area, where adventure is just a swing away! "
          },
        ]}
        reverseLayout={true}
      />

      <FullSlideContentCarousel data={slides} />

      <TestimonialSection />
      <BookingForm />
    </main>
  );
}
