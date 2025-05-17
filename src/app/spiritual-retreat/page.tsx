import DescriptionShow from '@/components/DescriptionShow'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import WeOffer from '@/components/SliderWellness'
import WellnessSliderSection from '@/components/WellnessSlider'
import React from 'react'
import FacilitySlider from '../about-us/Facilities'
import WellnessPackages from './WellnessPackages'
import BookingForm from '@/components/BookingForm'
import { SectionWithContainer } from '@/components'
import { imageUrl } from '@/data/links'

const page = () => {
  const sampleCardData = [
    { src: imageUrl+"spiritual/rebalance1.webp", alt: "Abhyanga Therapy", name: "Abhyanga Therapy" },
    { src: imageUrl+"spiritual/rebalance2.webp", alt: "Guided Meditation", name: "Guided Meditation" },
    { src: imageUrl+"spiritual/rebalance3.webp", alt: "Spiritual Sessions", name: "Spiritual Sessions" },
    { src: imageUrl+"spiritual/rebalance4.webp", alt: "Hydrotherapy", name: "Hydrotherapy" },
    { src: imageUrl+"spiritual/rebalance5.webp", alt: "Reflexology", name: "Reflexology" },
    { src: imageUrl+"spiritual/rebalance6.webp", alt: "Physiotherapy", name: "Physiotherapy" },
    { src: imageUrl+"spiritual/rebalance7.webp", alt: "Shirodhara", name: "Shirodhara" },
    { src: imageUrl+"spiritual/rebalance8.webp", alt: "AcCupressure", name: "AcCupressure" },
    { src: imageUrl+"spiritual/rebalance9.webp", alt: "Sun Therapy", name: "Sun Therapy" },
    { src: imageUrl+"spiritual/rebalance10.webp", alt: "Sound Healing", name: "Sound Healing" },
  ];
  const weOfferData = [
    {
      src: imageUrl+"spiritual/cleanse1.webp",
      alt: "Stress Relief and Emotional Balance",
      description: "Calm your mind through yoga, meditation, and relaxation techniques",
    },
    {
      src: imageUrl+"spiritual/cleanse2.webp",
      alt: "Weight and Metabolic Management",
      description: "Achieve your health goals with tailored diets and holistic therapies",
    },
    {
      src: imageUrl+"spiritual/cleanse3.webp",
      alt: "Diabetes Care",
      description: "Natural approaches to support and stabilize blood sugar levels.",
    },
    {
      src: imageUrl+"spiritual/cleanse4.webp",
      alt: "Sleep Management",
      description: "Improve sleep quality with holistic treatments and relaxation.",
    },
    {
      src: imageUrl+"spiritual/cleanse5.webp",
      alt: "Hormonal Rebalance",
      description: "Improve sleep quality with holistic treatments and relaxation.",
    },
    {
      src: imageUrl+"spiritual/cleanse6.webp",
      alt: "Pain Management",
      description: "Improve sleep quality with holistic treatments and relaxation.",
    },
    {
      src: imageUrl+"spiritual/cleanse7.webp",
      alt: "Detox and Rejuvenation",
      description: " Cleanse and revitalize with Ayurvedic and naturopathic treatments.",
    },
  ];
  return (
    <div>
      <FullScreenCarousel data={[imageUrl+"273A8478.webp", imageUrl+"IMG_8234.webp"]} name='Spiritual Retreat' />
      <RatingsDisplay />
      <div className='bg-[#F9F9F1]'>
        <DescriptionShow
          altTitle={true}
          title={{
            firstLine: "Spiritual",
            secondLine: "Purposeful",
            thirdLine: "Wellness",
          }}
          description={{
            mainText: "Anand Vardhan Resort is more than just a getaway—it's a peaceful sanctuary where the soul can reconnect, recharge, and find true serenity. Nestled in the heart of nature, the resort offers a spiritual retreat that goes beyond relaxation. It’s a place where you can immerse yourself in calming practices, whether it’s through yoga, meditation, or simply enjoying the tranquil surroundings. The resort also offers naturopathy and alternative treatments, providing holistic therapies designed to heal the body, mind, and spirit. From detoxifying treatments to herbal remedies and therapeutic massages, every service is tailored to restore balance and promote well-being.",
            diningText: "Anand Vardhan Resort invites you to leave behind the noise of everyday life and embark on a journey of inner peace and self-discovery. Whether you're seeking solace, spiritual growth, or just a break from the hustle, this resort offers a haven where your spirit can truly unwind and rejuvenate.",
            phoneNumber: "+91 93172 07373"
          }}
        />
        <div className="flex gap-5 items-center max-md:flex-col justify-center">
          <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
            Cleanse
          </h2>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9397 8.48988C21.1928 9.09081 21.4055 9.71891 21.5737 10.3693C21.868 11.5069 22.0261 12.7128 22.0261 13.9618C22.0261 18.8857 19.5682 23.1442 16.0004 25.1657C12.4332 23.1442 9.97461 18.8857 9.97461 13.9618C9.97461 12.7128 10.1328 11.5069 10.4271 10.3693C11.2932 7.02183 13.3381 4.26657 16.0004 2.75781C16.591 3.0924 17.1512 3.4883 17.6748 3.93843" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.9997 25.1651V25.1657H15.9991C14.6319 27.5775 11.7523 29.2402 8.42269 29.2402C5.09306 29.2402 2.21287 27.5775 0.845703 25.1651C1.71672 23.628 3.20212 22.3957 5.02662 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 25.1651V25.1657H16.0006C17.3678 27.5775 20.2474 29.2402 23.577 29.2402C26.9073 29.2402 29.7875 27.5775 31.1547 25.1651C30.2836 23.628 28.7982 22.3957 26.9737 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.0006 25.1657V25.1664C11.9859 26.0004 7.32911 24.4222 4.08077 20.722C0.831795 17.0218 -0.130334 12.1994 1.21711 8.32627C4.21371 7.70393 7.56795 8.42541 10.4272 10.3693" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.5733 10.3692C24.4327 8.42517 27.7875 7.70376 30.7841 8.3261C32.1309 12.1992 31.1688 17.0216 27.9205 20.7218C24.6721 24.422 20.0147 26.0003 16 25.1662V25.1656" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19.5676" cy="6.04029" r="0.626223" fill="#2F4B26" />
          </svg>
          <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
            Heal
          </h2>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9397 8.48988C21.1928 9.09081 21.4055 9.71891 21.5737 10.3693C21.868 11.5069 22.0261 12.7128 22.0261 13.9618C22.0261 18.8857 19.5682 23.1442 16.0004 25.1657C12.4332 23.1442 9.97461 18.8857 9.97461 13.9618C9.97461 12.7128 10.1328 11.5069 10.4271 10.3693C11.2932 7.02183 13.3381 4.26657 16.0004 2.75781C16.591 3.0924 17.1512 3.4883 17.6748 3.93843" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.9997 25.1651V25.1657H15.9991C14.6319 27.5775 11.7523 29.2402 8.42269 29.2402C5.09306 29.2402 2.21287 27.5775 0.845703 25.1651C1.71672 23.628 3.20212 22.3957 5.02662 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 25.1651V25.1657H16.0006C17.3678 27.5775 20.2474 29.2402 23.577 29.2402C26.9073 29.2402 29.7875 27.5775 31.1547 25.1651C30.2836 23.628 28.7982 22.3957 26.9737 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.0006 25.1657V25.1664C11.9859 26.0004 7.32911 24.4222 4.08077 20.722C0.831795 17.0218 -0.130334 12.1994 1.21711 8.32627C4.21371 7.70393 7.56795 8.42541 10.4272 10.3693" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.5733 10.3692C24.4327 8.42517 27.7875 7.70376 30.7841 8.3261C32.1309 12.1992 31.1688 17.0216 27.9205 20.7218C24.6721 24.422 20.0147 26.0003 16 25.1662V25.1656" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19.5676" cy="6.04029" r="0.626223" fill="#2F4B26" />
          </svg>
          <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
            Energise
          </h2>
        </div>
        <p className='text-center mt-10 roboto font-light text-[20px] text-[#686767]'>Revitalize your body and soul—cleanse, heal, and energize with AVR&apos;s spiritual energy.</p>
        <WeOffer items={weOfferData} />
        <WellnessSliderSection
          href=''
          title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
          subtitle="Relax & Rejuvenation"
          services={[
            {
              imageUrl:
                imageUrl+"spiritual/relax1.webp",
              title: "Physiotherapy",
              description: "At AVR Physiotherapy, healing isn't just a process – it's a journey. With personalized care and expert hands, we help you reclaim strength, restore confidence, and embrace life’s every move again."
            },
            {
              imageUrl:
                imageUrl+"spiritual/relax2.webp",
              title: "Acupressure",
              description: "Acupuncture is like a reset button for your body and mind. Our team of experts works towards releasing tension, ease pain, and bring you back to a place of pure relaxation and vitality."
            },
            {
              imageUrl:
                imageUrl+"spiritual/relax3.webp",
              title: "Guided Meditation",
              description: "Guided meditation takes you on a peaceful journey within, where stillness and clarity await. Let our soothing guidance help you quiet the noise, release your worries, and reconnect with your inner calm."
            },
            {
              imageUrl:
                imageUrl+"273A8482.webp",
              title: "Yoga & Meditation",
              description: "Take a break from the chaos and find your center with Yoga and Meditation at Anand Vardhan Resorts. Breathe, relax, and let go – this is where your journey to peace begins."
            },
            {
              imageUrl:
                imageUrl+"spiritual/relax5.webp",
              title: "Panchkarma",
              description: "Ready to hit the reset button? Experience Panchkarma, a rejuvenating detox that clears your mind and body. At Anand Vardhan Resorts, we’ll help you feel refreshed, inside and out."
            },
            {
              imageUrl:
                imageUrl+"relax3.webp",
              title: "Naturopathy",
              description: "Feel the natural healing energy at Anand Vardhan Resorts with our Naturopathy treatments. Reconnect with the earth’s simple, yet powerful remedies to restore your balance and energy."
            },
            {
              imageUrl:
                imageUrl+"spiritual/relax7.webp",
              title: "Shirodhara",
              description: "At AVR, Shirodhara is more than a treatment – it’s a soulful escape. Let the gentle stream of warm oil soothe your mind, melt away stress, and bring you a sense of deep peace and balance."
            },
          ]}
        />
        <SectionWithContainer >
          <div className='flex flex-col gap-5'>

            <div className="flex gap-5 items-center max-md:flex-col justify-center">
              <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
                Rebalance
              </h2>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9397 8.48988C21.1928 9.09081 21.4055 9.71891 21.5737 10.3693C21.868 11.5069 22.0261 12.7128 22.0261 13.9618C22.0261 18.8857 19.5682 23.1442 16.0004 25.1657C12.4332 23.1442 9.97461 18.8857 9.97461 13.9618C9.97461 12.7128 10.1328 11.5069 10.4271 10.3693C11.2932 7.02183 13.3381 4.26657 16.0004 2.75781C16.591 3.0924 17.1512 3.4883 17.6748 3.93843" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9997 25.1651V25.1657H15.9991C14.6319 27.5775 11.7523 29.2402 8.42269 29.2402C5.09306 29.2402 2.21287 27.5775 0.845703 25.1651C1.71672 23.628 3.20212 22.3957 5.02662 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 25.1651V25.1657H16.0006C17.3678 27.5775 20.2474 29.2402 23.577 29.2402C26.9073 29.2402 29.7875 27.5775 31.1547 25.1651C30.2836 23.628 28.7982 22.3957 26.9737 21.7031" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.0006 25.1657V25.1664C11.9859 26.0004 7.32911 24.4222 4.08077 20.722C0.831795 17.0218 -0.130334 12.1994 1.21711 8.32627C4.21371 7.70393 7.56795 8.42541 10.4272 10.3693" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.5733 10.3692C24.4327 8.42517 27.7875 7.70376 30.7841 8.3261C32.1309 12.1992 31.1688 17.0216 27.9205 20.7218C24.6721 24.422 20.0147 26.0003 16 25.1662V25.1656" stroke="#2F4B26" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="19.5676" cy="6.04029" r="0.626223" fill="#2F4B26" />
              </svg>
              <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
                Renew Your Vitality
              </h2>
            </div>
            <p className='roboto font-light text-center text-[20px] lg:max-w-[956px] mx-auto max-md:px-3 mb-8'>We offer a range of therapies that draw on the power of  nature and ancient traditions. These are administered  under the guidance of Ayurveda / Naturopathy doctors,  by skilled therapists.</p>
            <FacilitySlider cardData={sampleCardData} />

          </div>
        </SectionWithContainer>
      </div>
      <WellnessPackages />
      <div className="bg-[#F9F9F1]">
      <BookingForm />
      </div>
    </div>
  )
}

export default page