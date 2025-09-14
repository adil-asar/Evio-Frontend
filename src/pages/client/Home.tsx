import FeaturedProperties from '../../components/Home/FeaturedProperties';
import RentalProperties from '../../components/Home/RentalProperties';
import SaleProperties from '../../components/Home/SaleProperties';
import WhoAreWe from '../../components/Home/WhoAreWe';
import Hero from '../../components/common/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <FeaturedProperties />
      <SaleProperties />
      <RentalProperties />
    </div>
  );
};

export default Home;
