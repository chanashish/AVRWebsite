"use client";
import React, { useEffect, useState } from "react";
import { VideoBackground } from "./VideoBackground";
import axios from "axios";

interface HomeHeroProps {
  display?: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ display = false }) => {
  const [temp, setTemp] = useState<number>(0.0);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // `https://api.openweathermap.org/data/3.0/onecall?lat={32.10190294728198}&lon={77.156027572247}&appid=${apiKey}&units={"metric"}`
    const getTemp = async () => {
      const apiKey = "8611baa95180437492f54121230505";
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=32.10190294728198,77.156027572247`
      );
      setTemp(response?.data?.current?.temp_c);
    };

    if (display) {
      getTemp();
    }
  }, [display]);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours >= 13 ? hours - 12 : hours}:${minutes
        .toString()
        .padStart(2, "0")} ${hours >= 13 ? "PM" : "AM"}`;
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[700px] max-sm:h-[240px] max-w-[1600px] mx-auto">
      {display && (
        <div className="absolute right-[10px] md:right-20 top-[10px] md:top-5 text-white text-[26px] max-md:text-[20px] z-[100]">
          {time}, {temp.toFixed(1)}°C
        </div>
      )}
      <VideoBackground />
    </section>
  );
};

export default HomeHero;
