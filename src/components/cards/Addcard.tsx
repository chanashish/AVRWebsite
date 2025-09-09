import { AddCardDataPropsTypes } from "@/@types/types";
import { FC } from "react";
import SectionWithContainer from "../SectionComponents/SectionWithContainer";
import { SectionHeading } from "../typography";
import Link from "next/link";
import { ArrowUpIcon } from "@/icons/icons";

const Addcard: FC<AddCardDataPropsTypes> = ({ title, description, link }) => {
  return (
    <SectionWithContainer>
      <div className="max-w-6xl mx-auto bg-clr2 rounded-[24px] box-shadow">
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-6 max-w-4xl mx-auto py-16">
          <div className="md:col-span-2">
            <SectionHeading subTitle={title} />
            <p className="text-[#686767] md:text-lg mt-4">{description}</p>
          </div>
          <div className="">
            <Link
              href={link}
              className="bg-clr1 ml-auto rounded-full w-fit flex items-center text-white py-3 px-6 shadow-inner md:text-lg hover:bg-clr transition"
            >
              {link.label}{" "}
              <span className="ml-2">
                <ArrowUpIcon />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Addcard;
