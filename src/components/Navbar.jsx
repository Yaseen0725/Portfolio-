import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* {/* Left Side: Logo and Name */}
        <div className="flex items-center space-x-4 text-white text-lg font-bold">
          <img
            src="src/assets/myImg.jpg"
            alt="photo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="font-semibold text-xl cursor-pointer ">
            Mohd <span className="text-fuchsia-500">Y</span>a
            <span className="text-fuchsia-500">s</span>e
            <span className="text-fuchsia-500">e</span>n
            <p className="text-sm ml-3">Web Developer</p>
          </h1>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/Home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-gray-300">
              Education
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact_us" className="hover:text-gray-300">
              Contact_Us
            </Link>
          </li>
        </ul>

        {/* Hamburger for small screens */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-blue-600 text-white text-center"
      >
        <ul className="space-y-4 py-4">
          <li>
            <Link to="/Home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-gray-300">
              Education
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact_us" className="hover:text-gray-300">
              Contact_Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
