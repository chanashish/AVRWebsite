import BookingForm from '@/components/BookingForm'
import DescriptionShow from '@/components/DescriptionShow'
import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import WellnessSliderSection from '@/components/WellnessSlider'
import React from 'react'

const page = () => {
  return (
    <div>
      <FullScreenCarousel data={["/carousel/carousel1.png"]} />
      <RatingsDisplay />
      <DescriptionShow
        title={{
          firstLine: "Where Every Bite Feels Pure",
          secondLine: "A Vegetarian Abode That Nourishes the Soul"
        }}
        description={{
          mainText: "Welcome to our cozy corner, where every dish is crafted with love and a deep appreciation for fresh, plant-based ingredients. Whether you're here to savor a hearty meal or share a quiet moment, we invite you to experience food that not only nourishes your body but lifts your spirit. Come as you are—our spaces are more than just a place to eat; they're spaces to relax, connect, and feel truly at ease.",
          diningText: "Our goal is to give you a truly memorable dining experience and Take a seat at an indoor dining table or enjoy the meal beside views of the mountains.",
          phoneNumber: "+91 93172 07373"
        }}
      />
      <WellnessSliderSection
      href=''
        description="Step into Govind Prasadam, where tradition meets comfort in every bite. Our indoor dining space offers a warm, inviting atmosphere to savor authentic vegetarian meals made with love and care. Whether you're here to indulge in flavors or enjoy good company, we’re delighted to have you feel at home with us."
        // title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
        subtitle="Govind Prasadam Pure Veg Restaurant"
        services={[
          {
            imageUrl:
              "/home/relax1.png",
          },
          {
            imageUrl:
              "/home/relax2.png",
          },
          {
            imageUrl:
              "/home/relax3.png",
          },
        ]}
      />
      <WellnessSliderSection
      href=''
        description="Breathe in the fresh air and savor every bite at our Open Air Café, where nature and flavor come together. With a relaxed atmosphere and delicious vegetarian dishes, it’s the perfect spot to unwind and enjoy the simple joys of good food. Join us under the open sky, and let every meal feel like a moment of peace."
        // title="ANAND VARDHAN RESORT X RISHIBHUMI BRINGS"
        subtitle="Open Air Cafe"
        services={[
          {
            imageUrl:
              "/home/relax1.png",
          },
          {
            imageUrl:
              "/home/relax2.png",
          },
          {
            imageUrl:
              "/home/relax3.png",
          },
        ]}
        reverseLayout={true}
      />

      <BookingForm />
    </div>
  )
}

export default page