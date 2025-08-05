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
import { HomeHero } from "./components/Header/HomeHero";

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
        description2={[
          "As a leading wellness resort in Manali, Anand Vardhan provides a comprehensive suite of rejuvenating experiences. Guests can immerse themselves in yoga and meditation sessions, indulge in Panchkarma therapies, and explore naturopathy treatments, all designed to harmonize the body and mind. The resort's collaboration with Rishibhumi enhances its offerings, making it a sought-after destination for those searching for a meditation retreat in Himachal Pradesh.",

            `For travelers looking for a "resort spa near me," Anand Vardhan delivers with its state-of-the-art spa facilities, steam and sauna rooms, and a dedicated wellness center. The resort's commitment to spiritual rejuvenation is evident in its serene ambiance, making it a top choice for spiritual retreats in Manali.`,

            "Accommodations at Anand Vardhan are designed to provide comfort and luxury. From Deluxe Rooms to Luxury Suites, each space offers breathtaking views of the surrounding mountains and forests. The resort's pure vegetarian dining options, including the Govind Prasadam restaurant and an open-air café, ensure a nourishing culinary experience.",

            "Beyond relaxation, the resort offers a plethora of activities. Guests can engage in trekking, cycling, and adventure sports like zip-lining and archery. Evenings can be spent around a bonfire, under the starlit sky, sharing stories and creating memories.",

            "For those seeking wellness retreats near me or a spiritual resort in Manali, Anand Vardhan Resort promises an experience that rejuvenates the soul and invigorates the senses. Book your stay today and embark on a transformative journey in the heart of the Himalayas."]}
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
        <TodoSection
          key={index}
          {...item}
          index={index}
          textEnd={index % 2 !== 0}
        />
      ))}
      <FullSlideContentCarousel data={slides} />

      <TestimonialSection />
      <div className="bg-[#F9F9F1] border border-solid border-1 border-t-black">
        <BookingForm />
      </div>
    </main>
  );
}
