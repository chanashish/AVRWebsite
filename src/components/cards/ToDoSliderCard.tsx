import Image from "next/image";

interface ToDoSliderCardProps {
  src: string;
  title: string;
  description: string;
  textEnd?: boolean;
  handleClick?: () => void;
}
const ToDoSliderCard: React.FC<ToDoSliderCardProps> = ({
  src,
  title,
  description,
  textEnd = false,
  handleClick,
}) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full relative md:aspect-[4/3] aspect-[4/3]">
        <Image
          src={src}
          alt="Cycling"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover rounded-sm"
          onClick={handleClick}
        />
      </div>
      <h3
        className={`text-2xl text-[#363636] playfair ${textEnd ? "text-end" : "text-start"}`}
      >
        {title}
      </h3>
      <p
        className={`text-xl text-[#686767] roboto text-start ${textEnd ? "text-end" : "text-start"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default ToDoSliderCard;
