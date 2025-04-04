"use client";

import * as React from "react";

function PureVegBanner() {
  return (
    <aside
      role="complementary"
      aria-label="Pure Veg Resort Banner"
      className="z-50 sticky left-[1rem] top-[50vh] h-fit w-fit gap-2 px-4 py-2 text-lg leading-6 text-white uppercase bg-lime-900 rounded-none -rotate-90 origin-[0_50%] transform max-md:p-3 max-md:text-base max-sm:p-2.5 max-sm:text-sm"
    >
      PURE VEG RESORT
    </aside>
  );
}

export default PureVegBanner;
