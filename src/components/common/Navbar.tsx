import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[75px] transition-all duration-300 ${
        isScrolled ? "bg-accent-dark shadow-md" : "bg-accent-dark"
      }`}
    >
      <div className="containerize flex justify-between items-center h-full">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="./images/logo.png" alt="logo" className="lg:w-24 md:w-20 w-16" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 paragraph-md tracking-wider font-titillium font-medium capitalize">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-dark text-white font-medium transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="rounded-full btn">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 p-0 text-black flex items-center justify-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose className="text-2xl" /> : <IoIosMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-[75px] left-0 w-full bg-white shadow-md text-base font-titillium font-semibold flex flex-col md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="transition-colors duration-300 h-11 flex items-center border-b last:border-b-0 border-gray-300 sm:px-10 px-6 w-full"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="m-4 font-medium text-center btn-primary"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
