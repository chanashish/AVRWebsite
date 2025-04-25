import { Section, SectionWithContainer } from '@/components'
import PolicyHeading from '@/components/PolicyHeading'
import React from 'react'

const page = () => {
    return (
        <div>
            <Section lgpy='0' py='0' className='lg:max-h-[476px]'>
                <PolicyHeading
                    className="h-full text-center"
                    heading='Check In Policy'
                // description1='At Anand Vardhan Resort, accessible from https://anandvardhanresorts.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Anand Vardhan Resort and how we use it.'
                // description2='If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.<br/> This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Anand Vardhan Resort.'
                />
            </Section>
            <SectionWithContainer>
                <div className="flex flex-col gap-[40px]">
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className="text-[32px] text-[#2F4B26] font-normal playfair">Prices</h3>
                        <p className="roboto text-[20px] text-[#686767] font-light">
                            All prices are in Indian Rupees and are exclusive of applicable GST/taxes.
                        </p>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                        <h3 className="text-[32px] text-[#2F4B26] font-normal playfair">Delayed Check-in &amp; Early Check-out</h3>
                        <p className="roboto text-[20px] text-[#686767] font-light">
                            Arrival and departure timings and dates have to be adhered to by the guests.
                            In case of late arrivals, whether due to disturbances in public or private transport
                            or for personal reasons, the full room-price is payable.
                        </p>
                        <p className="roboto text-[20px] text-[#686767] font-light">
                            In the event of premature departure, the guest will be charged for the entire duration of confirmed booking.
                        </p>
                    </div>

                    <div className='flex flex-col gap-[24px]'>
                        <h3 className="text-[32px] text-[#2F4B26] font-normal playfair">Check-in &amp; Check-out timings</h3>
                        <p className="roboto text-[20px] text-[#686767] font-light">
                            Check-in timing is 2:00PM. Check-out timing is 12:00PM.
                        </p>
                        <p className="roboto text-[20px] text-[#686767] font-light">
                            If your arrival is delayed beyond 6 pm, you are required to inform Anand Vardhan Resort in advance to retain your booking for the day.
                        </p>
                    </div>
                </div>

            </SectionWithContainer>
        </div>
    )
}

export default page