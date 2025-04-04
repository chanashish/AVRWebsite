"use client";

import * as React from "react";

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
    <article className="flex flex-col gap-6 items-start w-[392px] max-md:w-full">
      <header className="flex gap-4 items-center w-full">
        <h2 className={`text-3xl leading-10 text-lime-900 ${titleClassName}`}>
          {activity.title}
        </h2>
        <img src={decorativeImageUrl} alt="" className="w-[37px] h-[10px]" />
      </header>
      <p
        className={`text-xl font-light leading-8 text-stone-500 ${descriptionClassName}`}
      >
        {activity.description}
      </p>
    </article>
  );

  const image = (
    <img
      src={activity.imageUrl}
      alt={activity.imageAlt || ""}
      className={`w-[808px] h-[488px] rounded-[4px] object-cover max-lg:w-full ${imageClassName}`}
    />
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
    <main
      className={`justify-center max-w-[1350px] mx-auto flex flex-col gap-32 items-center px-28 py-10 max-md:px-10 max-sm:gap-16 max-sm:px-5 ${className}`}
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
    </main>
  );
};

export default ActivitiesDisplay;
