import Form from "@/components/Form";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { FC } from "react";

interface formDataPropsTypes {
  title: string;
  subTitle: string;
  mapUrl: string;
}
const ContactForm: FC<formDataPropsTypes> = ({ title, subTitle, mapUrl }) => {
  return (
    <SectionWithContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box-shadow px-6 py-10 space-y-6">
          <SectionHeading title={title} subTitle={subTitle} titleClassName="underline-none" titleColor="clr" />
          <Form />
        </div>
        <div className="w-full max-md:aspect-square">
          <LazyLoadedMap src={mapUrl} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactForm;


