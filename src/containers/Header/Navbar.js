import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-milkwhite dark:bg-midnightsky fixed w-full z-20 top-0 start-0 px-6 md:px-16 lg:px-28 pt-6 sm:pt-12 md:pt-6 lg:pt-3">
      <div className="flex flex-wrap items-center justify-between px-8 py-4">
        <a href="/" className="text-black dark:text-milkwhite flex text-lg items-center space-x-3 rtl:space-x-reverse">
          WebVista
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/booking" 
            className='hidden lg:inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-milkwhite rounded-lg bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure'
          >
            Book Now
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-darkwhite dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-lg border border-brightwhite rounded-lg bg-brightwhite lg:space-x-8 rtl:space-x-reverse lg:flex-row md:mt-0 md:border-0 md:bg-milkwhite dark:bg-midnightsky md:dark:bg-midnightsky dark:border-midnightsky">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-milkwhite bg-springbreak rounded md:bg-transparent md:text-springbreak md:p-0 md:dark:text-azure"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-springbreak md:p-0 md:dark:hover:text-azure dark:text-milkwhite dark:hover:bg-midnightsky dark:hover:text-milkwhite md:dark:hover:bg-transparent dark:border-midnightsky"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-springbreak md:p-0 md:dark:hover:text-azure dark:text-milkwhite dark:hover:bg-midnightsky dark:hover:text-milkwhite md:dark:hover:bg-transparent dark:border-midnightsky"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-springbreak md:p-0 md:dark:hover:text-azure dark:text-milkwhite dark:hover:bg-midnightsky dark:hover:text-milkwhite md:dark:hover:bg-transparent dark:border-midnightsky"
                >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-springbreak md:p-0 md:dark:hover:text-azure dark:text-milkwhite dark:hover:bg-midnightsky dark:hover:text-milkwhite md:dark:hover:bg-transparent dark:border-midnightsky"
                >
                Contact Us
              </a>
            </li>
            <li>
              <a href="/"
                className="lg:hidden text-milkwhite bg-springbreak hover:bg-azure focus:ring-4 focus:outline-none focus:ring-ocean font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-springbreak dark:focus:ring-azure"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
