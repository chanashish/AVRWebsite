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

export default function Home() {


  return (
    <main>
        <HomeHero />
        <RatingsDisplay/>

        {/* //here */}
        <TestimonialSection />
        <BookingForm/>
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
