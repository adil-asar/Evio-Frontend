import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="padding-t">
      <div className="containerize  roundness p-10 md:p-20 round mb-12  bg-radial from-accent-light to-accent-dark">
        <div className=" grid grid-cols-2 gap-10">
          <div className=" ">
            <div className="mb-3">
              <img
                src="/images/logo.png"
                alt="Evio Real Estate"
                className="lg:w-24 md:w-20 w-16 "
              />
            </div>

            <p className="paragraph-md text-white  max-w-md">
              Evio connects you with verified property listings, transparent pricing, and expert
              guidance for smarter real estate decisions.
            </p>
            <hr className="max-w-md text-dark my-5" />
            {/* social icons */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" w-full bg-accent-dark py-7  text-center paragraph-md text-white">
        <div className="containerize flex justify-between">
          <div className="paragraph-md ">
            <span>© {new Date().getFullYear()} Evio. All rights reserved.</span>
          </div>
          <div className="flex gap-5 justify-center ">
            <Link to="/privacy" className="hover:text-dark transition paragraph-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-dark transition paragraph-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
