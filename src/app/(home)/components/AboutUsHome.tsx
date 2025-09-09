import { AboutUsPropsTypes } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { ArrowUpIcon } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutUsHome: FC<AboutUsPropsTypes> = ({
  title,
  subtitle,
  desc,
  images,
  link,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              className="max-w-[50%] w-full aspect-[4/5] relative"
              key={index}
            >
              <Image
                src={image}
                alt={title + index}
                className="object-cover object-top"
                sizes="100vw"
                fill
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            title={title}
            subTitle={subtitle}
            wrapperClassName="lg:max-w-xl"
          />
          <div className="space-y-6 max-w-xl">
            {desc.map((item, index) => (
              <p key={index} className="lg:text-lg">
                {item}
              </p>
            ))}
          </div>
          {link && (
            <Link
              href={link.href}
              className="bg-clr1 text-white px-4 py-3 w-fit rounded-full shadow-inner flex items-center cursor-pointer gap-2 text-lg hover:bg-white hover:text-clr1 transition-all duration-300 ease-in-out border border-clr1"
            >
              {link.label}{" "}
              <span className="">
                <ArrowUpIcon />
              </span>
            </Link>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUsHome;
