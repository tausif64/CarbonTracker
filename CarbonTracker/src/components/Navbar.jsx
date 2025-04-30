import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className="bg-[#2e7d32] text-white py-4 shadow-md sticky top-0 z-[1000]">
      <div className="container mx-auto w-11/12 max-w-6xl">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#ecf0f1]">
            <Link to="/">CarbonTracker</Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex list-none">
              <li className="ml-8">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors relative"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="ml-8">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors relative"
                  to="/live-dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="ml-8">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors relative"
                  to="/fourmula"
                >
                  Formula
                </Link>
              </li>
              <li
                className="ml-8 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center cursor-pointer space-x-1">
                  <div className="text-white hover:text-[#3498db] transition-colors">
                    Calculator
                  </div>
                  <FaAngleDown size={22} />
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-50 flex flex-col w-64 bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                    <Link
                      to="/carbon-emission-calculator"
                      className="my-2 block py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      Carbon Emission Calculator
                    </Link>
                    <Link
                      to="/carbon-offset-calculator"
                      className="my-2 block py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      Carbon Offset Calculator
                    </Link>
                  </div>
                )}
              </li>

              <li className="ml-6">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors relative"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="ml-8">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors relative"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col mt-4">
              <li className="my-2">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors"
                  to="/live-dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors"
                  to="/fourmula"
                >
                  Formula
                </Link>
              </li>
              <li
                className="my-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center cursor-pointer space-x-1">
                  <div className="text-white hover:text-[#3498db] transition-colors">
                    Calculator
                  </div>
                  <FaAngleDown size={22} />
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-50 flex flex-col w-64 bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                    <Link
                      to="/carbon-emission-calculator"
                      className="my-2 block py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      Carbon Emission Calculator
                    </Link>
                    <Link
                      to="/carbon-offset-calculator"
                      className="my-2 block py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      Carbon Offset Calculator
                    </Link>
                  </div>
                )}
              </li>

              <li className="my-2">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className="text-white hover:text-[#3498db] transition-colors"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
