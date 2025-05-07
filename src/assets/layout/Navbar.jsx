import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Close menu if user clicks outside
  const handleOutsideClick = (e) => {
    if (
      isOpen &&
      !e.target.closest(".mobile-menu") &&
      !e.target.closest(".toggle-button")
    ) {
      setIsOpen(false);
      setIsMobileDropdownOpen(false); // Close mobile dropdown as well
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-base-100 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/image/logo1.png" alt="logo" className="w-40" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="toggle-button lg:hidden text-gray-700 focus:outline-none"
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
          className={`mobile-menu lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto w-full lg:w-auto absolute lg:relative bg-white lg:bg-transparent top-16 left-0 lg:top-auto lg:left-auto px-6 py-4 lg:p-0`}
        >
          <Link to="/" className="block lg:inline-block text-gray-800 hover:text-black py-2">
            Tentang
          </Link>
          <Link to="/product" className="block lg:inline-block text-gray-800 hover:text-black py-2">
            Produk
          </Link>
          <Link to="/services" className="block lg:inline-block text-gray-800 hover:text-black py-2">
            Layanan
          </Link>
          <Link to="/contact" className="block lg:inline-block text-gray-800 hover:text-black py-2">
            Kontak
          </Link>

          {/* Dropdown Menu - Desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-800 hover:text-black py-2"
            >
              Panduan
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Items - Desktop */}
            {isDropdownOpen && (
              <div className="absolute bg-base-100 rounded-md py-2 mt-2 w-56 z-50">
                <Link to="/panduan-pembeli" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Pembeli
                </Link>
                <Link to="/panduan-penyedia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Penyedia
                </Link>
                <Link to="/faq-pembeli" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Pembeli
                </Link>
                <Link to="/faq-penyedia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Penyedia
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Menu - Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center text-gray-800 hover:text-black py-2 w-full"
            >
              Panduan
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileDropdownOpen && (
              <div className="bg-base-100 rounded-md py-2 mb-4">
                <Link to="/panduan-pembeli" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Pembeli
                </Link>
                <Link to="/panduan-penyedia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Penyedia
                </Link>
                <Link to="/faq-pembeli" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Pembeli
                </Link>
                <Link to="/faq-penyedia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Penyedia
                </Link>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 space-y-2 lg:space-y-0 lg:mt-0">
            <Link to="https://dev.rynest-technology.com:4442/">
              <button className="btn btn-outline border-[#DEE1E6] text-[#000] hover:text-black hover:bg-[#DEE1E6] hover:border-[#DEE1E6]">
                <i className="fa fa-headset" /> Customer Care / Klaim
              </button>
            </Link>
            <Link to="https://dev.rynest-technology.com:4443/">
              <button className="btn bg-[#DB1F26] text-white hover:bg-[#b51a20]">
                Masuk / Daftar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
