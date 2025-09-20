import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Tagline from "./Tagline";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[87.5vh] flex items-center justify-center text-white overflow-hidden 
                 bg-accent-light bg-[url('/images/hero.jpg')] bg-cover bg-center"
    >
      {/* Dark overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Particles background */}
      {/* <ParticlesBackground /> */}

      {/* Content */}
      <div className="containerize relative z-10 text-center">
        <Tagline text="Smart. Reliable. Future-Ready." className="mx-auto mb-8" />
        <h1 className="heading-lg mb-6">
          Smart <span className="text-gradient"> Real Estate </span> Solutions{" "}
          <br className="md:flex hidden" /> for Your{" "}
          <span className="text-gradient"> Dream Home</span> <br />
        </h1>
        <h2 className="mx-auto max-w-2xl paragraph-lg mb-7">
          Buy, sell, or rent properties with ease. Evio connects you to trusted real estate
          listings, modern homes, and top investment opportunities.
        </h2>
        <button className="btn">Browse Properties</button>
      </div>
    </section>
  );
};

export default Hero;
