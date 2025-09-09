import { ExperiencesDataPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

const Experiences: FC<ExperiencesDataPropsTypes> = ({ title, subTitle }) => {
  return (
    <SectionWithContainer>
      <div className="">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
      </div>
    </SectionWithContainer>
  );
};

export default Experiences;
