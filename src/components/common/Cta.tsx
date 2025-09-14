import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CtaProps {
  title: ReactNode; // allows JSX like <> </>
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Cta: React.FC<CtaProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="py-24">
      <div className="containerize text-center">
        <h2 className="heading-sm">{title}</h2>
        <p className="paragraph-lg mt-4 max-w-screen-lg mx-auto">{subtitle}</p>
        <div className="mt-8">
          <Link to={buttonLink} className="btn">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
