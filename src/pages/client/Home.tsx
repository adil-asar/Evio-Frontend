import FeaturedProperties from "../../components/Home/FeaturedProperties";
import RentalProperties from "../../components/Home/RentalProperties";
import SaleProperties from "../../components/Home/SaleProperties";
import WhoAreWe from "../../components/Home/WhoAreWe";
import Cta from "../../components/common/Cta";
import Hero from "../../components/common/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <FeaturedProperties />
      <SaleProperties />
      <RentalProperties />
      <Cta
        title={
          <>
            Find Your Dream <span className="text-gradient">Property</span> Today
          </>
        }
        subtitle="Browse premium homes, luxury apartments, and commercial spaces in prime locations. Start your real estate journey with Evio."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Home;
