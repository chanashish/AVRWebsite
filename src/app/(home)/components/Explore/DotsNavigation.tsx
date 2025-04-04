interface DotsNavigationProps {
    total: number;
    current: number;
  }
  
  const DotsNavigation: React.FC<DotsNavigationProps> = ({ total, current }) => {
    return (
      <div className="flex gap-2 items-center">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === current
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white rounded-full"
            } transition-all duration-300`}
          />
        ))}
      </div>
    );
  };
  
  export default DotsNavigation;
  