import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <header className="h-[75px] sticky top-0 z-50 bg-accent border-b  border-slate-700 ">
      <div className="containerize flex justify-between items-center h-full">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="./images/logo.png" alt="logo" className=" lg:w-24 md:w-20 w-16" />
          </Link>
        </div>

        <nav className="hidden md:flex gap-12  paragraph-md tracking-wider font-titillium font-medium capitalize">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-dark text-white  transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className=" rounded-full btn">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10  p-0 text-white flex items-center justify-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoMdClose className="text-2xl " /> : <IoIosMenu className="text-2xl" />}
        </button>
      </div>

      <div
        className={`absolute top-[75px] left-0 w-full bg-white shadow-md text-base font-titillium font-semibold flex flex-col md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="hover: transition-colors duration-300 h-11 flex items-center border-b last:border-b-0 border-gray-300  sm:px-10 px-6 w-full"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className="m-4 font-medium text-center btn"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
