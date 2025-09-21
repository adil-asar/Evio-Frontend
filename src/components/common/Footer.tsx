import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Newsletter from "./Newsletter";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
];
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
      <div className="containerize  roundness xl:p-20 lg:p-14 2xs:p-12 xxs:p-8 p-6   round mb-12  bg-radial from-accent-light to-accent-dark">
        <div className=" grid 3md:grid-cols-2 lg:gap-10 md:gap-8 gap-6">
          <div>
            <div className="mb-3">
              <img
                src="/images/logo.png"
                alt="Evio Real Estate"
                className="lg:w-24 md:w-20 w-16 3md:mx-0 mx-auto"
              />
            </div>

            <p className="paragraph-md text-white 3md:mx-0 3md:text-left text-center mx-auto  max-w-md">
              Evio connects you with verified property listings, transparent pricing, and expert
              guidance for smarter real estate decisions.
            </p>
            <hr className="max-w-md text-dark lg:my-7 my-5 3md:mx-0  mx-auto" />
            {/* social icons */}
            <div className="flex md:gap-7 3md:justify-start justify-center gap-5">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-10 sm:h-10 w-9 h-9 flex shrink-0 items-center justify-center rounded-full linear-gradient text-white  transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <hr className="max-w-md text-dark lg:my-7 my-5 3md:mx-0  mx-auto" />
            {/* quick links */}
            <div className="3md:text-left text-center">
              <h3 className="text-gradient paragraph-lg font-semibold mb-4">Quick Links</h3>
              <ul className="flex flex-wrap md:gap-6 gap-5 3md:justify-start justify-center">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="paragraph-sm text-white hover:text-dark transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* right side */}
          <Newsletter />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" w-full bg-accent-dark py-7  text-center paragraph-md text-white">
        <div className="containerize grid sm:grid-cols-2 grid-cols-1 gap-3">
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
