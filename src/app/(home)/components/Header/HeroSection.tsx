import React from "react";
import { Header } from "./Header";
import { VideoBackground } from "./VideoBackground";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <VideoBackground />
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>
    </section>
  );
};

export default HeroSection;
