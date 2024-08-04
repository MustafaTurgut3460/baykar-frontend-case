import { useState } from "react";
import OutlineButton from "./OutlineButton";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative -mx-4">
      <div className="flex justify-between items-center text-primary py-7 px-4">
        <h3 className="font-semibold text-3xl">Collers</h3>

        {/* Hamburger Menu Button for small screens */}
        <div className="lg:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`lg:flex items-center space-x-8 hidden`}>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Products
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Solutions
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Pricing
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Resources
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Log In
          </p>
          <OutlineButton label="Sign Up now" />
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      <div
        className={`absolute top-0 left-0 w-full bg-white p-4 shadow-lg rounded-md transition-transform duration-300 ease-in-out z-30 ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> 
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Products
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Solutions
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Pricing
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Resources
          </p>
          <p className="hover:opacity-70 transition-all duration-200 cursor-pointer font-medium">
            Log In
          </p>
          <OutlineButton label="Sign Up now" className="text-primary" />
        </div>
      </div>
    </div>
  );
}
