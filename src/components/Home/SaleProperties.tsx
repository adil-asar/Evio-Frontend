/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import PropertyCardSkeleton from "../common/PropertyCardSkeleton";
const SaleProperties = () => {
  return (
    <div className="padding-t">
      <div className="containerize">
        <div className="text-center">
          <h1 className="heading-lg">
            Properties <span className="text-gradient">For Sale</span>
          </h1>
          <h2 className="paragraph-lg mt-5 max-w-screen-lg mx-auto">
            Discover a wide selection of houses, luxury apartments, and commercial properties for
            sale in prime locations. Find your ideal home or investment opportunity with Evio’s
            trusted listings.
          </h2>
          <Link to={`/properties`}>
            <button className="btn mt-6">View All</button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleProperties;
