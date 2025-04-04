import React from "react";
// import { Header } from "./Header";
import { VideoBackground } from "./VideoBackground";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] max-sm:h-[240px] ">
      <VideoBackground />
      {/* <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div> */}
    </section>
  );
};

export default HomeHero;
