"use client";

import Link from "next/link";
import * as React from "react";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";

interface DescriptonShowProps {
  altTitle?: boolean;
  title: {
    firstLine: string;
    secondLine?: string;
    thirdLine?: string;
  };
  description: {
    mainText: string;
    diningText?: string;
    phoneNumber?: string;
  };
}

function DescriptionShow({
  title,
  description,
  altTitle = false,
}: DescriptonShowProps) {
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 items-center text-center max-md:gap-6 max-sm:gap-5">
        {altTitle ? (
          <div className="flex gap-5 items-center max-md:flex-col">
            <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
              {title.firstLine}
            </h2>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9397 8.48988C21.1928 9.09081 21.4055 9.71891 21.5737 10.3693C21.868 11.5069 22.0261 12.7128 22.0261 13.9618C22.0261 18.8857 19.5682 23.1442 16.0004 25.1657C12.4332 23.1442 9.97461 18.8857 9.97461 13.9618C9.97461 12.7128 10.1328 11.5069 10.4271 10.3693C11.2932 7.02183 13.3381 4.26657 16.0004 2.75781C16.591 3.0924 17.1512 3.4883 17.6748 3.93843"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9997 25.1651V25.1657H15.9991C14.6319 27.5775 11.7523 29.2402 8.42269 29.2402C5.09306 29.2402 2.21287 27.5775 0.845703 25.1651C1.71672 23.628 3.20212 22.3957 5.02662 21.7031"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 25.1651V25.1657H16.0006C17.3678 27.5775 20.2474 29.2402 23.577 29.2402C26.9073 29.2402 29.7875 27.5775 31.1547 25.1651C30.2836 23.628 28.7982 22.3957 26.9737 21.7031"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0006 25.1657V25.1664C11.9859 26.0004 7.32911 24.4222 4.08077 20.722C0.831795 17.0218 -0.130334 12.1994 1.21711 8.32627C4.21371 7.70393 7.56795 8.42541 10.4272 10.3693"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5733 10.3692C24.4327 8.42517 27.7875 7.70376 30.7841 8.3261C32.1309 12.1992 31.1688 17.0216 27.9205 20.7218C24.6721 24.422 20.0147 26.0003 16 25.1662V25.1656"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="19.5676" cy="6.04029" r="0.626223" fill="#2F4B26" />
            </svg>
            <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
              {title.secondLine}
            </h2>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9397 8.48988C21.1928 9.09081 21.4055 9.71891 21.5737 10.3693C21.868 11.5069 22.0261 12.7128 22.0261 13.9618C22.0261 18.8857 19.5682 23.1442 16.0004 25.1657C12.4332 23.1442 9.97461 18.8857 9.97461 13.9618C9.97461 12.7128 10.1328 11.5069 10.4271 10.3693C11.2932 7.02183 13.3381 4.26657 16.0004 2.75781C16.591 3.0924 17.1512 3.4883 17.6748 3.93843"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9997 25.1651V25.1657H15.9991C14.6319 27.5775 11.7523 29.2402 8.42269 29.2402C5.09306 29.2402 2.21287 27.5775 0.845703 25.1651C1.71672 23.628 3.20212 22.3957 5.02662 21.7031"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 25.1651V25.1657H16.0006C17.3678 27.5775 20.2474 29.2402 23.577 29.2402C26.9073 29.2402 29.7875 27.5775 31.1547 25.1651C30.2836 23.628 28.7982 22.3957 26.9737 21.7031"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0006 25.1657V25.1664C11.9859 26.0004 7.32911 24.4222 4.08077 20.722C0.831795 17.0218 -0.130334 12.1994 1.21711 8.32627C4.21371 7.70393 7.56795 8.42541 10.4272 10.3693"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5733 10.3692C24.4327 8.42517 27.7875 7.70376 30.7841 8.3261C32.1309 12.1992 31.1688 17.0216 27.9205 20.7218C24.6721 24.422 20.0147 26.0003 16 25.1662V25.1656"
                stroke="#2F4B26"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="19.5676" cy="6.04029" r="0.626223" fill="#2F4B26" />
            </svg>
            <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
              {title.thirdLine}
            </h2>
          </div>
        ) : (
          <h2 className="text-[40px] leading-10 text-[#2F4B26] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9 playfair font-normal">
            {title.firstLine}
            <br />
            {title.secondLine}
          </h2>
        )}

        <div className="text-xl font-light leading-8 text-stone-500 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
          <p>{description.mainText}</p>
          <br />
          <p>{description.diningText}</p>
          <br />
          {description.phoneNumber && (
            <p>
              <Link
                href={`tel:${description.phoneNumber.replace(/\s+/g, "")}`}
                className="hover:underline"
              >
                Call Now {">"}
              </Link>
            </p>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
}

export default DescriptionShow;
