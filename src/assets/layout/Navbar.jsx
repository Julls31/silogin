import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (toastMessage) {
      const timeout = setTimeout(() => setToastMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [toastMessage]);

  const handleOutsideClick = (e) => {
    if (
      isOpen &&
      !e.target.closest(".mobile-menu") &&
      !e.target.closest(".toggle-button")
    ) {
      setIsOpen(false);
      setIsMobileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleScroll = (id, path) => {
    const NAVBAR_HEIGHT = 60;
    if (location.pathname !== path) {
      navigate(path, { state: { scrollToSection: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -NAVBAR_HEIGHT;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const showToastIfSamePage = (path, label) => {
    if (location.pathname === path) {
      setToastMessage(`Anda sedang di halaman ${label}`);
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-base-100 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center">
          <img src="/image/siLogin_eKatalog.png" alt="logo" className="w-40" />
        </Link>

        <button
          className="toggle-button lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`mobile-menu lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto w-full lg:w-auto absolute lg:relative bg-white lg:bg-transparent top-16 left-0 lg:top-auto lg:left-auto px-6 py-4 lg:p-0`}
        >
          <button onClick={() => handleScroll("about", "/")} className="block lg:inline-block text-gray-800 hover:text-black py-2 font-semibold">
            Tentang
          </button>
          <button onClick={() => handleScroll("product", "/")} className="block lg:inline-block text-gray-800 hover:text-black py-2 font-semibold">
            Produk
          </button>
          <button onClick={() => handleScroll("services", "/")} className="block lg:inline-block text-gray-800 hover:text-black py-2 font-semibold">
            Layanan
          </button>
          <button onClick={() => handleScroll("contact", "/")} className="block lg:inline-block text-gray-800 hover:text-black py-2 font-semibold">
            Kontak
          </button>

          {/* Dropdown Menu - Desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-800 hover:text-black py-2 font-semibold"
            >
              Panduan
              <svg className={`ml-2 w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute bg-base-100 rounded-md py-2 mt-2 w-56 z-50">
                <button onClick={() => showToastIfSamePage("/panduan-lkpd", "Panduan L/K/PD")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan L/K/PD
                </button>
                <button onClick={() => showToastIfSamePage("/panduan-penyedia", "Panduan Penyedia")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Penyedia
                </button>
                <button onClick={() => showToastIfSamePage("/faq-lkpd", "FAQ L/K/PD")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ L/K/PD
                </button>
                <button onClick={() => showToastIfSamePage("/faq-penyedia", "FAQ Penyedia")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Penyedia
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Menu - Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center text-gray-800 hover:text-black py-2 w-full font-semibold"
            >
              Panduan
              <svg className={`ml-2 w-4 h-4 transform transition-transform ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileDropdownOpen && (
              <div className="bg-base-100 rounded-md py-2 mb-4">
                <button onClick={() => showToastIfSamePage("/panduan-lkpd", "Panduan L/K/PD")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan L/K/PD
                </button>
                <button onClick={() => showToastIfSamePage("/panduan-penyedia", "Panduan Penyedia")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Panduan Penyedia
                </button>
                <button onClick={() => showToastIfSamePage("/faq-lkpd", "FAQ L/K/PD")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ L/K/PD
                </button>
                <button onClick={() => showToastIfSamePage("/faq-penyedia", "FAQ Penyedia")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  FAQ Penyedia
                </button>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 space-y-2 lg:space-y-0 lg:mt-0">
            <a href="https://cso.silogin.id" target="_blank">
              <button className="btn btn-outline border-[#DEE1E6] text-[#000] hover:text-black hover:bg-[#DEE1E6] hover:border-[#DEE1E6]">
                <i className="fa fa-headset" /> Customer Care / Klaim
              </button>
            </a>
            <a href="https://apps.silogin.id" target="_blank">
              <button className="btn bg-[#DB1F26] text-white hover:bg-[#b51a20]">
                Masuk / Daftar
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* DaisyUI Toast */}
      {toastMessage && (
        <div className="toast toast-center ">
          <div className="alert bg-red-500 text-white">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
