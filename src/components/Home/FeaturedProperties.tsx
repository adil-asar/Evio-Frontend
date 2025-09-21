import PropertyCardSkeleton from "../common/PropertyCardSkeleton";
const FeaturedProperties = () => {
  return (
    <div className="padding-t">
      <div className="containerize">
        <div className="text-center">
          <h1 className="heading-lg">
            {" "}
            <span className="text-gradient">Top </span> Properties
          </h1>
          <h2 className="paragraph-lg mt-4 max-w-screen-lg mx-auto">
            Discover handpicked homes and investment properties in prime locations. From luxury
            apartments to family houses and commercial spaces, Evio has something for everyone.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  lg:mt-14 mt-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
