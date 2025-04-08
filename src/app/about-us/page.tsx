import BookingForm from '@/components/BookingForm'
import DescriptionShow from '@/components/DescriptionShow'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import React from 'react'
import FacilitySlider from './Facilities'

const page = () => {
  const sampleCardData = [
    { src: "/facilities/parking.png", alt: "Parking space icon", name: "PARKING SPACE" },
    { src: "/facilities/roomservice.png", alt: "Room service icon", name: "ROOM SERVICE" },
    { src: "/facilities/wifi.png", alt: "Free WiFi icon", name: "FREE WIFI" },
    { src: "/facilities/conferenceroom.png", alt: "Conference room icon", name: "CONFERENCE ROOM" },
    { src: "/facilities/cafe.png", alt: "Cafe icon", name: "CAFE" },
    { src: "/facilities/vegrestaurant.png", alt: "Veg Restaurant icon", name: "VEG RESTAURANT" },
    { src: "/facilities/mountainview.png", alt: "Mountain View icon", name: "MOUNTAIN VIEW" },
    { src: "/facilities/electricity.png", alt: "24*7 Electricity icon", name: "24*7 ELECTRICITY" },
  ];
  return (
    <div>
      <FullScreenCarousel data={["/carousel/sightseeing.png"]} />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "About Anand Vardhan Resort",
          //   secondLine: "Epic Adventures Await at AVR!"
        }}
        description={{
          mainText: "Situated in the heart of Naggar with an elevation more than 4000 feet above sea level, the property has an unbeatable location. The resort is located 15 km drive away from the bustle of Manali town and yet close to its heart.",
          diningText: "We take you to a wonderland of breeze, leaves, and stars. Wake up feeling fresh and breezy every morning -experience waking up right in the heart of India’s wealthiest woodlands and reconnecting with your soul. With the sound of chirping birds, and the snow-clad mountains of the Dhauladhar and Pir Panjal range, this resort will enchant you with the holy vibes away from the hustle and bustle of the busy town of Manali. Located around apple orchards and surrounded by Pine trees we provide top-notch hospitality. Experience the wonders of nature with delicious vegetarian cuisine at Anand Vardhan.",
          phoneNumber: "+91 93172 07373"
        }}
      />
      <section className="w-full px-4 py-20 bg-[#F9F9F1]">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
          <div className="text-2xl text-lime-900 uppercase font-semibold">
            OUR SERVICES
          </div>
          <div className="flex gap-4 items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
              alt=""
              className="w-[37px] h-[10px]"
            />
            <h2 className="text-4xl text-lime-900 font-bold max-md:text-3xl">
              Resort Facilities
            </h2>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
              alt=""
              className="w-[37px] h-[10px]"
            />
          </div>
        </div>
        <FacilitySlider cardData={sampleCardData} />
      </section>
      <BookingForm />
    </div>
  )
}

export default page