import BookingForm from '@/components/BookingForm'
import DescriptionShow from '@/components/DescriptionShow'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import React from 'react'
import Facilities from './Facilities'

const page = () => {
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
          phoneNumber: "+91 12345 12345"
        }}
      />
      <Facilities/>
      <BookingForm/>
    </div>
  )
}

export default page