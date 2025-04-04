"use client"
import { Call, Footer, Whatsapp } from "@/components";
import ContactSection from "./components/Contact/ContactSection";
import HomeHero from "./components/Header/HomeHero";
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import PureVegBanner from "./components/PureVegBanner";
import ExperiencesSection from "./components/Experiences/ExperiencesSection";
import HeroSection from "./components/Explore/HeroSection";
import FloralDesign from "./components/FloralDesign";
import AccommodationsSection from "./components/Accomodation/AccommodationsSection";
import RatingsDisplay from "@/components/RatingsDisplay";
import BookingForm from "@/components/BookingForm";
import DescriptionShow from "@/components/DescriptionShow";

export default function Home() {


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
      <TestimonialSection />
      <BookingForm />
      {/* <FloralDesign location="left" />
        <PureVegBanner />
        <HeroSection />
        <FloralDesign location="left" />
        <AccommodationsSection />
        <ExperiencesSection />
        <FloralDesign location="right" />
        <BookingForm />
        <ContactSection />
        <Footer />
        <Whatsapp whatsAppNumber="9317207373" />
        <Call callNumber="919317207373" /> */}

    </main>
  );
}
