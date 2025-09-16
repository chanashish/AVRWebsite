import { Accordion } from "@/components/cards";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import { FC } from "react";

interface FaqProps {
  title: string;
  src: string;
  faqData: {
    id: number;
    ques: string;
    ans: string;
  }[];
}

const Faq: FC<FaqProps> = ({ title, src, faqData }) => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="w-full relative aspect-[4/4.8]">
          <Image src={src} alt={title} fill objectFit="cover" />
        </div>
        <div className="bg-clr2 px-6 py-10 w-full h-full flex flex-col gap-6 md:gap-14">
          <h2 className="text-3xl font-semibold text-center text-clr">
            {title}
          </h2>
          <div className="divide-y divide-light border-y border-light">
            {faqData.map((card, index) => (
              <Accordion key={index} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
