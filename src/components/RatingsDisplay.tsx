"use client";

import * as React from "react";

const RatingsDisplay: React.FC = () => {
  return (
    <section className="flex flex-col gap-[32px] items-center mx-auto md:my-[120px] my-8 w-full max-w-[994px]">
      <h2 className="text-2xl leading-8 text-center text-lime-900">
        Reviews and Ratings Across Platforms
      </h2>
      <div className="flex gap-16 justify-center items-center px-16 py-4 w-full rounded-lg border border-solid bg-[#F9F9F1] border-[#9A9A9A] max-md:gap-8 max-md:px-8 max-md:py-4 max-sm:flex-col max-sm:gap-4 max-sm:p-4">
        <article className="flex flex-col items-center max-sm:w-full max-sm:text-center">
          <h3 className="text-2xl leading-8 text-center uppercase text-stone-500 max-md:text-xl max-sm:text-lg">
            4.8/5
          </h3>
          <p className="text-2xl leading-8 text-stone-500 max-md:text-2xl max-sm:text-xl">
            Google
          </p>
        </article>

        <div
          role="separator"
          aria-orientation="vertical"
          className="w-px h-10 bg-neutral-400 max-sm:mx-0 max-sm:my-2 max-sm:w-4/5 max-sm:h-px"
        />

        <article className="flex flex-col items-center max-sm:w-full max-sm:text-center">
          <h3 className="text-2xl leading-8 text-center uppercase text-stone-500 max-md:text-xl max-sm:text-lg">
            4.1/5
          </h3>
          <p className="text-2xl leading-8 text-stone-500 max-md:text-2xl max-sm:text-xl">
            MakeMyTrip
          </p>
        </article>

        <div
          role="separator"
          aria-orientation="vertical"
          className="w-px h-10 bg-neutral-400 max-sm:mx-0 max-sm:my-2 max-sm:w-4/5 max-sm:h-px"
        />

        <article className="flex flex-col items-center max-sm:w-full max-sm:text-center">
          <h3 className="text-2xl leading-8 text-center uppercase text-stone-500 max-md:text-xl max-sm:text-lg">
            4.9/5
          </h3>
          <p className="text-2xl leading-8 text-stone-500 max-md:text-2xl max-sm:text-xl">
            Tripadvisor
          </p>
        </article>

        <div
          role="separator"
          aria-orientation="vertical"
          className="w-px h-10 bg-neutral-400 max-sm:mx-0 max-sm:my-2 max-sm:w-4/5 max-sm:h-px"
        />

        <article className="flex flex-col items-center max-sm:w-full max-sm:text-center">
          <h3 className="text-2xl leading-8 text-center uppercase text-stone-500 max-md:text-xl max-sm:text-lg">
            4.8/5
          </h3>
          <p className="text-2xl leading-8 text-stone-500 max-md:text-2xl max-sm:text-xl">
            Goibibo
          </p>
        </article>
      </div>
    </section>
  );
};

export default RatingsDisplay;
