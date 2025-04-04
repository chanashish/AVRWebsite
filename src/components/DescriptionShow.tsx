"use client";

import * as React from "react";

interface DescriptonShowProps {
    title: {
        firstLine: string;
        secondLine?: string;
    };
    description: {
        mainText: string;
        diningText: string;
        phoneNumber: string;
    };
}

function DescriptionShow({
    title,
    description,
}: DescriptonShowProps) {
    return (
        <article className="flex justify-center items-center px-5 py-8 mx-auto my-0 max-w-[1440px] max-md:max-w-[991px] max-sm:p-5 max-sm:max-w-screen-sm">
            <div className="flex flex-col gap-8 items-center text-center max-w-[1064px] max-md:gap-6 max-sm:gap-5">
                <h2 className="text-4xl leading-10 text-lime-900 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
                    {title.firstLine}
                    <br />
                    {title.secondLine}
                </h2>
                <div className="text-xl font-light leading-8 text-stone-500 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
                    <p>{description.mainText}</p>
                    <br />
                    <p>{description.diningText}</p>
                    <br />
                    <p>
                        Call:{" "}
                        <a
                            href={`tel:${description.phoneNumber.replace(/\s+/g, "")}`}
                            className="hover:underline"
                        >
                            {description.phoneNumber}
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default DescriptionShow;