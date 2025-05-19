interface RatingCardProps {
  rating: string;
  platform: string;
}

const RatingCard: React.FC<RatingCardProps> = ({ rating, platform }) => {
  return (
    <article className="flex flex-col items-center justify-center text-center  w-full gap-1 md:px-16 px-8">
      <h3 className="md:text-[1.375rem]/[2rem] text-xl roboto text-center uppercase text-[#686767] max-md:text-xl max-sm:text-lg">
        {rating}
      </h3>
      <p className="md:text-2xl text-base leading-8 text-[#686767] playfair tracking-wider max-md:text-2xl max-sm:text-xl">
        {platform}
      </p>
    </article>
  );
};

export default RatingCard;
