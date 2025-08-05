import BookingForm from "@/components/BookingForm";
import DescriptionShow from "@/components/DescriptionShow";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import RatingsDisplay from "@/components/RatingsDisplay";
import WellnessSliderSection from "@/components/WellnessSlider";
import { imageUrl } from "@/data/links";
import React from "react";

export const metadata = {
  title:
    "Fine Dining and Luxurious Culinary Experience -Anand Vardhan Resorts ",
  description:
    "Enjoy a luxury Culinary Experience  dining at Anand Vardhan Resorts with delicious menus, serene surroundings, and exceptional service that make every bite unforgettable.",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        name="Culinary Experience"
        data={[imageUrl + "IMG_8160.webp"]}
      />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "Where Every Bite Feels Pure",
          secondLine: "A Vegetarian Abode That Nourishes the Soul",
        }}
        description={{
          mainText:
            "Welcome to our cozy corner, where every dish is crafted with love and a deep appreciation for fresh, plant-based ingredients. Whether you're here to savor a hearty meal or share a quiet moment, we invite you to experience food that not only nourishes your body but lifts your spirit. Come as you are—our spaces are more than just a place to eat; they're spaces to relax, connect, and feel truly at ease.",
          diningText:
            "Our goal is to give you a truly memorable dining experience and Take a seat at an indoor dining table or enjoy the meal beside views of the mountains.",
          phoneNumber: "+91 93172 07373",
        }}
      />
      <WellnessSliderSection
        href=""
        hideExplore={true}
        // description="Step into Govind Prasadam, where tradition meets comfort in every bite. Our indoor dining space offers a warm, inviting atmosphere to savor authentic vegetarian meals made with love and care. Whether you're here to indulge in flavors or enjoy good company, we’re delighted to have you feel at home with us."
        // title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
        subtitle="Govind Prasadam Pure Veg Restaurant"
        services={[
          {
            imageUrl: imageUrl + "IMG_8203.webp",
          },
          {
            imageUrl: imageUrl + "IMG_8160.webp",
          },
          {
            imageUrl: imageUrl + "IMG_8158.webp",
          },
        ]}
        description2={[
          "Indulge in a fine dining and luxurious culinary experience in Manali at Anand Vardhan Resort, where the essence of vegetarian cuisine meets the serenity of the Himalayas. Our dining venues are thoughtfully designed to offer not just meals, but memorable gastronomic journeys that delight the senses.",

          "At Govind Prasadam, our indoor restaurant, tradition and comfort converge. Here, guests can savor authentic vegetarian dishes crafted with fresh, plant-based ingredients, all within a warm and inviting atmosphere. Whether you're indulging in hearty meals or sharing quiet moments, Govind Prasadam ensures a dining experience that nourishes both body and soul. anandvardhanresorts.com",

          "For those who prefer dining amidst nature, our Open Air Café offers the perfect setting. Breathe in the crisp mountain air as you enjoy delicious vegetarian fare under the open sky. The relaxed ambiance, combined with panoramic views of the surrounding landscapes, makes every meal a moment of peace and connection with nature",
        ]}
      />
      <WellnessSliderSection
        href=""
        hideExplore={true}
        description="Breathe in the fresh air and savor every bite at our Open Air Café, where nature and flavor come together. With a relaxed atmosphere and delicious vegetarian dishes, it’s the perfect spot to unwind and enjoy the simple joys of good food. Join us under the open sky, and let every meal feel like a moment of peace."
        // title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
        subtitle="Open Air Cafe"
        services={[
          {
            imageUrl: imageUrl + "IMG_8354.webp",
          },

          {
            imageUrl: imageUrl + "IMG_8377.webp",
          },
          {
            imageUrl: imageUrl + "IMG_8370.webp",
          },
          {
            imageUrl: imageUrl + "IMG_8380.webp",
          },
        ]}
        reverseLayout={true}
      />

      <div className="bg-[#F9F9F1]">
        <BookingForm />
      </div>
    </div>
  );
};

export default page;
