import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CtaProps {
  title: ReactNode;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Cta: React.FC<CtaProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="py-10 md:py-16  bg-radial from-accent-light to-accent-dark">
      <div className="containerize text-center  text-white">
        <h2 className="heading-sm max-w-screen-2md mx-auto">{title}</h2>
        <p className="paragraph-lg mt-4 max-w-screen-lg mx-auto">{subtitle}</p>
        <div className="mt-8">
          <Link to={buttonLink}>
            <button className="btn">{buttonText}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
