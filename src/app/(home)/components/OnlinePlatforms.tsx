import { OnlinePlatformsPropsTypes } from "@/@types/types";
import { OnlinePlatformsCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const OnlinePlatforms: FC<OnlinePlatformsPropsTypes> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <div className="">
        <SectionHeading title={title} textCenter />
        <div className="w-full mt-4 h-px bg-[linear-gradient(to_right,_#FFFFFF,_#B2B2B2,_#FFFFFF)]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {cards.map((card, index) => (
            <OnlinePlatformsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OnlinePlatforms;
