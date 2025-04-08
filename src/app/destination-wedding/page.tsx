import DescriptionShow from '@/components/DescriptionShow'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import React from 'react'
import HomeHero from '../(home)/components/Header/HomeHero'
import WeOffer from '@/components/SliderWellness'
import FacilitySlider from '../about-us/Facilities'
import CulinaryDelights from './CulinaryDelights'
import FAQ from './FAQ'
import { SectionWithContainer } from '@/components'

const page = () => {
  const sampleCardData = [
    { src: "/destination/service1.png", alt: "Decor", name: "Decor" },
    { src: "/destination/service2.png", alt: "Hospitality", name: "Hospitality" },
    { src: "/destination/service3.png", alt: "Pure Veg Meals", name: "Pure Veg Meals" },
    { src: "/destination/service4.png", alt: "Entertainment", name: "Entertainment" },
    { src: "/destination/service5.png", alt: "Hygiene", name: "Hygiene" },
    { src: "/destination/service6.png", alt: "Safety", name: "Safety" },
    { src: "/destination/service7.png", alt: "Branding", name: "Branding" },
    { src: "/destination/service8.png", alt: "Photography", name: "Photography" },
  ];
  const weOfferData = [
    {
      src: "/destination/offer1.png",
      alt: "Pre-Wedding Events",
    },
    {
      src: "/destination/offer2.png",
      alt: "Haldhi Ceremony ",
    },
    {
      src: "/destination/offer3.png",
      alt: "Mehendi Ceremony ",
    },
    {
      src: "/destination/offer4.png",
      alt: "Engagement",
    },
    {
      src: "/destination/offer5.png",
      alt: "Reception",
    },
  ];
  return (
    <div>
      <FullScreenCarousel data={["/carousel/destination.png"]} />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "“Your Perfect Wedding Destination in Manali,",
          secondLine: "Himachal Pradesh”"
        }}
        description={{
          mainText: "Surrounded by towering trees, fresh mountain air, and the ones you love most, your destination wedding becomes an unforgettable celebration of love, peace, and adventure. Celebrate love with the nature’s most breathtaking canvas. A mountain retreat wedding is where your dreams come to life. Let the mountains whisper their blessings as you say ‘I do’.",
          diningText: "At Anand Vardhan Resorts, the best resort for destination weddings in Manali, our team of benevolent, dedicated, and ever-smiling staff, combined with our multiple amenities, will help make your BIG DAY truly unforgettable.",
          phoneNumber: "+91 93172 07373"
        }}
      />
      <HomeHero />
      <div className='bg-[#F9F9F1] w-full text-center py-10 md:py-20'>
        <div className="flex gap-6 items-center text-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
          <h2 className='playfair font-normal text-[40px] text-[#2F4B26]'>What We Offer</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
        </div>
        <WeOffer items={weOfferData} />
      </div>
      <SectionWithContainer>
        <div className="flex gap-6 items-center text-center justify-center mb-10 md:mb-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
          <h2 className='playfair font-normal text-[40px] text-[#2F4B26]'>Featured Wedding Services</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a"
            alt=""
            className="w-[30px] h-[8px] md:w-[37px] md:h-[10px]"
          />
        </div>
        <FacilitySlider cardData={sampleCardData} />
        <p className='text-center hover:underline cursor-pointer lato font-normal text-[18px] mt-10 md:mt-20'>Contact us {">"}</p>
      </SectionWithContainer>
      <CulinaryDelights />
      <FAQ />
    </div>
  )
}

export default page