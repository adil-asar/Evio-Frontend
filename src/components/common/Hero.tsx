const Hero: React.FC = () => {
  return (
    <section className="w-full bg-accent  lg:py-24 py-16">
      <div className="containerize">
        <div className=" paragraph-sm mb-8 max-w-[260px] mx-auto text-center text-white bg-accent-light rounded-full py-1.5  border-glow">
          <p>Smart. Reliable. Future-Ready.</p>
        </div>
        <div className="text-center">
          <h1 className="heading-lg mb-6 text-gradient">
            Smart Real Estate Solutions <br className="md:flex hidden" /> for Your Dream Home <br />
          </h1>
          <h2 className="mx-auto max-w-2xl  paragraph-lg mb-7 text-white">
            Buy, sell, or rent properties with ease. Evio connects you to trusted real estate
            listings, modern homes, and top investment opportunities.
          </h2>
          <button className="btn">Browse Properties</button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
