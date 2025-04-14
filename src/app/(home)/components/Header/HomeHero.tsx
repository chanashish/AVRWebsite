"use client"
import React, { useEffect, useState } from "react";
import { VideoBackground } from "./VideoBackground";
import axios from "axios";
interface HomeHeroProps {
  display?: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ display = false }) => {

  const [temp, setTemp] = useState<Number>(0.0)

  useEffect(() => {
    const getTemp = async () => {
      const apiKey = "8611baa95180437492f54121230505";
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=32.10190294728198,77.156027572247`
      );
      setTemp(response?.data?.current?.temp_c)
    }
    if (display) {
      getTemp()
    }

  }, [])

  const getTime = () => {
    const date = new Date();
    return `${date.getHours() >= 13 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${date.getHours() >= 13 ? 'AM' : 'PM'}`
  }

  return (
    <section className="relative w-full h-[700px] max-sm:h-[240px] max-w-[1600px] mx-auto">
      {display && <div className="absolute right-[10px] top-[10px] text-white text-[26px] max-md:text-[20px] z-[100]">
        {getTime()}, {temp.toString()}°C
      </div>}
      <VideoBackground />
    </section>
  );
};

export default HomeHero;

