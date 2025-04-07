'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { countries } from '@/data/countryCode'
import { Map } from '@/components'

// Define the shape of the form data
type FormData = {
    name: string
    countryCode: string
    phone: string
    email: string
    message: string
}

// Define the shape of validation errors
type FormErrors = Partial<Record<keyof FormData, string>>

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        countryCode: '+91',
        phone: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)

    const socials = [
        {
            id: 1,
            link: "https://facebook.com/",
            icon: "/icons/facebook3.png",
            alt: "facebook"
        },
        {
            id: 2,
            link: "https://instagram.com/",
            icon: "/icons/instagram3.png",
            alt: "instagram"
        },
        {
            id: 3,
            link: "https://linkedin.com/",
            icon: "/icons/linkedin3.png",
            alt: "linkedin"
        }
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required.'
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.'
        else if (!/^[0-9]{7,15}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number.'
        if (!formData.email.trim()) newErrors.email = 'Email is required.'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.'
        if (!formData.message.trim()) newErrors.message = 'Message is required.'

        return newErrors
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        console.log('Form submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', countryCode: '+91', phone: '', email: '', message: '' })
    }

    return (
        <>
            <div className='flex flex-col md:flex-row w-full lg:mt-20 gap-[32px] max-md:p-4 max-w-[1224px] mx-auto place-content-between'>
                <div className='flex-1 max-w-[704px]'>
                    <p className="text-[22px] font-normal uppercase roboto text-[#2F4B26]">anand vardhan resort</p>
                    <h2 className="text-[40px] font-normal mt-2 mb-4 playfair text-[#2F4B26]">Have a question for us?</h2>
                    <p className="text-[#686767] roboto font-light text-[20px] mb-6">You know what to do! Drop us a line and we&apos;ll get back to you as soon as possible.</p>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your full name*'
                            className='border p-2 rounded'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}

                        <div className="flex gap-2">
                            <select
                                name="countryCode"
                                className='border p-2 rounded w-1/3'
                                value={formData.countryCode}
                                onChange={handleChange}
                            >
                                {countries.map((c, idx) => (
                                    <option key={idx} value={c.code}>
                                        {c.name} {c.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="number"
                                name="phone"
                                placeholder='Mobile Number*'
                                className='border p-2 rounded w-2/3'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}

                        <input
                            type="text"
                            name="email"
                            placeholder='Email ID*'
                            className='border p-2 rounded'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}

                        <textarea
                            name="message"
                            placeholder='Tell us something about your enquiry!'
                            className='border p-2 rounded h-24 resize-none'
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}

                        <button
                            type="submit"
                            className='bg-[#2F4B26] text-white py-2 rounded hover:bg-[#2F3A20] transition'
                        >
                            Submit
                        </button>

                        {submitted && <p className="text-green-600 mt-2">Thanks! We&apos;ll get back to you soon.</p>}
                    </form>
                </div>

                <div className='flex-1 max-w-[354px]'>
                    <h2 className="text-[22px] font-normal text-[#2F4B26] mb-2 roboto">Contact</h2>
                    <p className="mb-2 text-[#686767] font-light text-[20px]">
                        Anand Vardhan Resorts Village, Ghurdaur PO Larakelo, Kullu Naggar,
                        Manali Road, Himachal Pradesh 175104
                    </p>
                    <p className="mb-1 text-[#686767] font-light text-[20px]">
                        Email: <a href="mailto:sales@anandvardhanresorts.com" >sales@anandvardhanresorts.com</a>
                    </p>
                    <p className="mb-4 text-[#686767] font-light text-[20px]">
                        Call: <a href="tel:+911234512345" >+91 12345 12345</a>
                    </p>

                    <h2 className="text-[22px] font-medium mb-2 mt-8 roboto">FOLLOW</h2>
                    <div className='flex gap-[24px]'>
                        {socials.map(item => (
                            <Link key={item.id} href={item.link} target='_blank'>
                                <img src={item.icon} alt={item.alt} className="w-[40px] h-[40px]" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Map src={"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3379.79279196907!2d77.1560288!3d32.1018854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3904894ef256381d%3A0x536f0a9a306a271!2sAnand%20Vardhan%20Resort%20Manali%2C%20Village%2C%20Ghurdaur%20PO%20Larakelo%2C%20Kullu%20-%20Naggar%20-%20Manali%20Rd%2C%20Manali%2C%20Himachal%20Pradesh%20175104!3m2!1d32.1018854!2d77.1560288!5e0!3m2!1sen!2sin!4v1744033170925!5m2!1sen!2sin" }/>
        </>
    )
}

export default ContactPage
