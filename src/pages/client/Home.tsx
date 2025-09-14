import FeaturedProperties from "../../components/Home/FeaturedProperties";
import RentalProperties from "../../components/Home/RentalProperties";
import SaleProperties from "../../components/Home/SaleProperties";
import WhoAreWe from "../../components/Home/WhoAreWe";
import Cta from "../../components/common/Cta";
import Hero from "../../components/common/Hero";
import Newsletter from "../../components/common/Newsletter";

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
            Find Your <span className="text-gradient"> Dream Property Today</span> with Evio
          </>
        }
        subtitle="Browse premium houses, luxury apartments, family homes, and commercial spaces in prime locations worldwide. Start your real estate journey with Evio’s trusted experts and exclusive listings."
        buttonText="Start Your Search"
        buttonLink="/properties"
      />
      <Newsletter />
    </div>
  );
};

export default Home;
