"use client"
import BookingForm from '@/components/BookingForm'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import LocationCarousel from '@/components/LocationCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import { imageUrl } from '@/data/links'
import React from 'react'

const page = () => {
  const data = [
    {
      image: imageUrl+"sightseeing/manali.png",
      title: "Manali Mall",
      description:
        "Mall Road is the main street in Manali, city of Himachal Pradesh, India. The offices of municipal corporation, fire service, and police headquarters are located here. Automobiles, except emergency vehicles are not allowed on this road.",
    },
    {
      image: imageUrl+"sightseeing/atal.png",
      title: "Atal Tunnel",
      description:
        "Atal Tunnel, named after former Prime Minister of India, Atal Bihari Vajpayee is a highway tunnel built under the Rohtang Pass in the eastern Pir Panjal range of the Himalayas on the Leh-Manali Highway in Himachal Pradesh, India.",
    },
    {
      image: imageUrl+"sightseeing/kullu.png",
      title: "Kullu City",
      description: "Kullu is a municipal council town that serves as the administrative headquarters of the Kullu district of the Indian state of Himachal Pradesh. It is located on the banks of the Beas River in the Kullu Valley about 10 kilometres north of the airport.",
    },
  ];
  return (
    <div>
      <FullScreenCarousel data={[imageUrl+"carousel/sightseeing.webp"]} name='Sight Seeing' />
      <RatingsDisplay />
      <LocationCarousel locations={data} />
      <div className="bg-[#F9F9F1]">
      <BookingForm />
      </div>
    </div>
  )
}

export default page