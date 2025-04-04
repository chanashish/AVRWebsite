import React from "react";
import { VideoBackground } from "./VideoBackground";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] max-sm:h-[240px] ">
      <VideoBackground />
    </section>
  );
};

export default HomeHero;
