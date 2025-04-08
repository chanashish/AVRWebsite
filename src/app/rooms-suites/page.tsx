import FullScreenCarousel from '@/components/FullScreenCarousel'
import RatingsDisplay from '@/components/RatingsDisplay'
import WellnessSliderSection from '@/components/WellnessSlider'
import React from 'react'
import TestimonialSection from '../(home)/components/Testimonials/TestimonialSection'
import BookingForm from '@/components/BookingForm'

const page = () => {
    return (
        <div>
            <FullScreenCarousel data={["/carousel/roomssuites.png","/carousel/roomssuites.png","/carousel/roomssuites.png"]} />
            <RatingsDisplay />
            <h2 className='playfair font-normal text-[#2F4B26] text-[40px] text-center mb-[120px]'>“Your Personal Place Of Retreat”</h2>
            <div className='bg-[#F9F9F1]'>
                <WellnessSliderSection
                    roomdescription="Step into our deluxe room where modern elegance meets comfort, with stylish interiors that make you feel instantly at ease. With ample area of 270sq ft.- every corner of this room is thoughtfully designed, blending classic charm and contemporary flair for a truly inviting atmosphere. The cozy, luxurious bed promises a restful night, while the warm colors and plush furnishings add a touch of sophistication. Relax in our spacious haven, where soft lighting and tasteful décor create a serene escape from the hustle and bustle of everyday life."
                    subtitle="Deluxe Room"
                    facility={[
                        {
                            id: 1,
                            name: "Free Wifi"
                        },
                        {
                            id: 2,
                            name: "Comfortable & Spacious Beds"
                        },
                        {
                            id: 3,
                            name: "Hygiene Focused"
                        },
                        {
                            id: 4,
                            name: "Luxurious Sofa Set"
                        },
                        {
                            id: 5,
                            name: "LED TV"
                        },
                    ]}
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
                    roomdescription="This super deluxe room, spanning 350 sq. ft in size is a perfect luxury for all. Its your perfect retreat, featuring a spacious bed that promises ultimate comfort for a restful night’s sleep. Unwind on the luxurious sofa set, or take a break at the stylish work desk, designed to help you feel at ease whether you're relaxing or getting work done. The wardrobe offers plenty of space to keep your belongings organized, while high-speed internet keeps you connected throughout your stay. Step out onto your private balcony and be greeted by breathtaking views of the orchard, with outdoor furniture perfect for a peaceful moment in nature. "
                    subtitle="Super Deluxe Room"
                    facility={[
                        {
                            id: 1,
                            name: "Free Wifi"
                        },
                        {
                            id: 2,
                            name: "Comfortable & Spacious Beds"
                        },
                        {
                            id: 3,
                            name: "Balcony Views"
                        },
                        {
                            id: 4,
                            name: "Luxurious Sofa Set"
                        },
                        {
                            id: 5,
                            name: "Shower Cubical"
                        },
                    ]}
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
                <WellnessSliderSection
                    roomdescription="The luxury suite offers a spacious bedroom, where you can unwind in style and comfort, with plenty of room to stretch out and relax. With an area of 500 sq. ft, explore the serenity of mountains enveloped in luxury. Curl up in your own private reading nook, the perfect spot to escape with a good book and enjoy some quiet time. The cozy living area adds an extra layer of luxury, giving you a perfect space to relax, entertain, or simply enjoy the serene surroundings. Every detail of the suite is designed for ultimate relaxation, ensuring you feel pampered and at ease during your stay."
                    subtitle="Luxury Suite Room"
                    facility={[
                        {
                            id: 1,
                            name: "Free Wifi"
                        },
                        {
                            id: 2,
                            name: "Comfortable & Spacious Beds"
                        },
                        {
                            id: 3,
                            name: "Hygiene Focused"
                        },
                        {
                            id: 4,
                            name: "Luxurious Sofa Set"
                        },
                        {
                            id: 5,
                            name: "LED TV"
                        },
                    ]}
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
            </div>
            <div className='pb-[120px] bg-[#F9F9F1]'>
                <TestimonialSection />
            </div>
            <BookingForm />
        </div>
    )
}

export default page