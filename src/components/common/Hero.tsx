import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Tagline from "./Tagline";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full  min-h-[87.5vh] flex items-center justify-center  overflow-hidden ">
      {/* Particles background */}
      <ParticlesBackground />

      <div className="containerize relative z-10">
        <Tagline text="Smart. Reliable. Future-Ready." className="mx-auto" />
        <div className="text-center">
          <h1 className="heading-lg mb-6 ">
            Smart <span className="text-gradient"> Real Estate </span> Solutions{" "}
            <br className="md:flex hidden" /> for Your{" "}
            <span className="text-gradient"> Dream Home</span> <br />
          </h1>
          <h2 className="mx-auto max-w-2xl paragraph-lg mb-7 ">
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
