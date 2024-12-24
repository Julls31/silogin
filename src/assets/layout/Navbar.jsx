import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  // Function untuk handle scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/image/logo1.png" alt="logo" className="w-auto" />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:relative bg-white lg:bg-transparent top-16 left-0 lg:top-auto lg:left-auto px-6 py-4 lg:p-0`}
        >
          <button
            onClick={() => handleScroll("about")}
            className="block lg:inline-block text-gray-600 hover:text-black py-2"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="block lg:inline-block text-gray-600 hover:text-black py-2"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="block lg:inline-block text-gray-600 hover:text-black py-2"
          >
            Contact
          </button>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 space-y-2 lg:space-y-0 lg:mt-0">
            <button className="btn btn-outline border-[#DEE1E6] text-[#000] hover:text-black hover:bg-[#DEE1E6] hover:border-[#DEE1E6]">
              <i className="fa fa-headset" /> Contact Support
            </button>
            <button className="btn bg-[#DB1F26] text-white hover:bg-[#b51a20]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
