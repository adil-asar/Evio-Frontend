/* eslint-disable prettier/prettier */
import React from "react";
import { FaCheckCircle, FaHeadset, FaSearch, FaHome } from "react-icons/fa";
import Tagline from "../common/Tagline";

const WhyChooseEvio: React.FC = () => {
  const subtitle =
    "We simplify your property journey with verified property listings, expert real estate guidance, and personalized housing solutions tailored to your needs — whether you’re looking to buy, sell, or rent houses, apartments, or investment properties.";

  const features = [
    {
      icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
      title: "Verified Listings",
      description: "Only trusted and up-to-date properties carefully vetted for you.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaHeadset className="text-green-500 text-3xl" />,
      title: "Expert Support",
      description: "Real estate professionals ready to guide you at every step.",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaSearch className="text-yellow-500 text-3xl" />,
      title: "Easy Search",
      description: "Smart filters and tools to help you find the right home faster.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaHome className="text-purple-500 text-3xl" />,
      title: "Tailored Solutions",
      description: "Homes and investments designed to perfectly match your needs.",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="padding-t">
      <div className="containerize">
        <div className="text-center">
          <Tagline text="Property Made Simple" className="xl:mb-5 mb-3.5 mx-auto" />
          <h2 className="heading-lg">
            Why Choose <span className="text-gradient"> Evio </span>
          </h2>
          <h3 className="max-w-screen-lg mx-auto paragraph-lg mt-5 ">{subtitle}</h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 containerize">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgColor} relative shadow-md hover:shadow-xl transition rounded-3xl p-10 text-center flex flex-col items-center`}
          >
            {/* Icon floating out */}
            <div className="w-24 h-24 flex justify-center rounded-full items-center bg-white absolute -top-12 left-1/2 -translate-x-1/2">
              <div className=" w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md mx-auto ">
                {feature.icon}
              </div>
            </div>

            <h3 className="paragraph-lg font-semibold mt-6">{feature.title}</h3>
            <p className="mt-2 paragraph-sm font-medium leading-tight">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseEvio;
