/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import PropertyCardSkeleton from "../common/PropertyCardSkeleton";
const RentalProperties = () => {
  return (
    <div className="padding-t padding-b">
      <div className="containerize">
        <div className="text-center">
          <h1 className="heading-lg">
            <span className="text-gradient">Available </span> For Rent
          </h1>
          <h2 className="paragraph-lg mt-4 max-w-screen-lg mx-auto">
            Explore premium houses, luxury apartments, family homes, and commercial properties in
            prime locations. Evio connects you with trusted real estate listings to find your
            perfect home or investment.
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

export default RentalProperties;
