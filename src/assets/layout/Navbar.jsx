import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function untuk handle scrolling
  const handleScroll = (id, path) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Delay untuk memastikan halaman sudah berpindah
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Close menu jika user klik di luar menu
  const handleOutsideClick = (e) => {
    if (
      isOpen &&
      !e.target.closest(".mobile-menu") &&
      !e.target.closest(".toggle-button")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="#"
          onClick={() => handleScroll("home", "/")}
          className="flex items-center"
        >
          <img src="/image/logo1.png" alt="logo" className="w-auto" />
        </a>

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
          className={`mobile-menu transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:relative bg-white lg:bg-transparent top-16 left-0 lg:top-auto lg:left-auto px-6 py-4 lg:p-0`}
        >
          <button
            onClick={() => handleScroll("about", "/")}
            className="block lg:inline-block text-gray-800 hover:text-black py-2"
          >
            Tentang
          </button>
          <button
            onClick={() => handleScroll("product", "/")}
            className="block lg:inline-block text-gray-800 hover:text-black py-2"
          >
            Produk
          </button>
          <button
            onClick={() => handleScroll("services", "/")}
            className="block lg:inline-block text-gray-800 hover:text-black py-2"
          >
            Layanan
          </button>
          <button
            onClick={() => handleScroll("contact", "/")}
            className="block lg:inline-block text-gray-800 hover:text-black py-2"
          >
            Kontak
          </button>
          <Link to ="/panduan">
            <button className="block lg:inline-block text-gray-800 hover:text-black py-2">
              Panduan
            </button>
          </Link>
          <Link to="/kalkulatorpremi">
            {/* <button
            className="block lg:inline-block text-gray-600 hover:text-black py-2"
          >
            Calculator
            </button> */}
          </Link>
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
