import { Link } from 'react-router-dom';

import Tagline from '../common/Tagline';

const WhoAreWe = () => {
  return (
    <div className='section-padding'>
      <div className='containerize'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:gap-20 lg:gap-14 md:gap-10 gap-7 items-center xl:px-24 md:px-0 sm:px-20  2xs:px-10'>
          {/* Left: Images */}
          <div className='md:order-1 order-2 '>
            <div>
              <img src='/images/one.jpg' alt='' className='aspect-square round md:w-full  ' />
            </div>
          </div>

          {/* Right: Content */}
          <div className='md:order-2 order-1 '>
            <Tagline text='Trusted Property Partner' className='xl:mb-5 mb-3.5' />
            <h2 className='heading-md'>
              Who <span className='text-gradient'> We </span> Are
            </h2>

            <h3 className='paragraph-lg xl:mt-5 mt-3.5'>
              At Evio Real Estate, we make buying, selling, and renting property simple, smart, and stress-free. Whether
              you’re a first-time homebuyer searching for your dream home, an investor exploring profitable real estate
              opportunities, or a family looking to rent a modern apartment, we provide personalized property solutions
              tailored to your needs.
            </h3>
            <h3 className='paragraph-lg mt-2 xl:mb-7 mb-5'>
              Our platform provides verified listings, transparent pricing, and expert guidance to help you make
              confident real estate decisions. From luxury homes and apartments to commercial properties and rental
              spaces, Evio connects you with the best opportunities in prime locations—built on trust, innovation, and
              customer satisfaction.
            </h3>
            <Link to='/about-us' className='btn'>
              Want to know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
