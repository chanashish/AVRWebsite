"use client";

import * as React from "react";
import Container from "./SectionComponents/Container";
import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

interface ActivitiesDisplayProps {
  activities: Activity[];
  className?: string;
  sectionClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  decorativeImageUrl?: string;
}

const ActivitySection: React.FC<{
  activity: Activity;
  isReversed: boolean;
  decorativeImageUrl?: string;
  sectionClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}> = ({
  activity,
  isReversed,
  decorativeImageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/46a742dbacc5989d42fa9cb23ae88f1bbc3a907a",
  sectionClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
}) => {
    const content = (
      <article className="flex flex-col gap-6 items-start  max-md:w-full">
        <header className="flex gap-4 items-center w-full">
          <h2 className={`text-3xl leading-10 text-lime-900 ${titleClassName}`}>
            {activity.title}
          </h2>
          <Image src={decorativeImageUrl} alt="" height={10} width={37} />
        </header>
        <p
          className={`text-xl font-light leading-8 text-stone-500 ${descriptionClassName}`}
        >
          {activity.description}
        </p>
      </article>
    );

    const image = (
      <div className="lg:aspect-[4/3] relative h-[300px] md:h-[488px] max-lg:aspect-[4/3] w-full ">
      <Image
        src={activity.imageUrl}
        alt={activity.imageAlt || ""}
        fill
        className={`absolute rounded-[4px] object-cover ${imageClassName}`}
        />
        {/* w-[808px] h-[488px]  */}
        </div>
    );

    return (
      <section
        className={`flex gap-6 items-start w-full max-md:flex-col ${isReversed ? "max-md:flex-[col]" : ""} ${sectionClassName}`}
      >
        {isReversed ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </section>
    );
  };

export const ActivitiesDisplay: React.FC<ActivitiesDisplayProps> = ({
  activities,
  className = "",
  sectionClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  decorativeImageUrl,
}) => {
  return (
    <Container
      className={`justify-center flex flex-col max-md:!mb-10 lg:py-20 gap-20 items-center max-md:px-10 max-sm:gap-16 max-sm:px-5 ${className}`}
    >
      {activities.map((activity, index) => (
        <ActivitySection
          key={`${activity.title}-${index}`}
          activity={activity}
          isReversed={index % 2 !== 0}
          decorativeImageUrl={decorativeImageUrl}
          sectionClassName={sectionClassName}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          imageClassName={imageClassName}
        />
      ))}
    </Container>
  );
};

export default ActivitiesDisplay;
