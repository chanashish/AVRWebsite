"use client"
import BookingForm from '@/components/BookingForm'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import LocationCarousel from '@/components/LocationCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import React from 'react'

const page = () => {
  const data= [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8fc6e9ca0b20140ca0dd7eea0e7564b1c12f58",
      title: "Manali Mall",
      description:
        "Mall Road is the main street in Manali, city of Himachal Pradesh, India...",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3032dd3c1d18105bd631d679ded7b699e00eee3",
      decorativeImageEnd: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e088ba4683d8078659136d45271faefc72e8272",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c63d73781459ba469b6b79eba5116d945dec088c",
      title: "Atal Tunnel",
      description:
        "Atal Tunnel, named after former Prime Minister of India...",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a",
      decorativeImageEnd: "https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e47453dd613ebc6a122ff6d2118a950d6a1846a",
      title: "Kullu City",
      description:
        "Kullu is a municipal council town that serves as the administrative headquarters...",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/467700281770bc2c7ea73ab6e5b71df4340ebbfe",
      decorativeImageEnd: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f",
    },
  ];
  return (
    <div>
      <FullScreenCarousel data={["/carousel/sightseeing.png"]} />
      <RatingsDisplay />
      <LocationCarousel locations={data}/>
      <BookingForm />
    </div>
  )
}

export default page